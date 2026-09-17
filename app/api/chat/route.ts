import Anthropic from "@anthropic-ai/sdk";
import type { NextRequest } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const maxDuration = 30;

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5";
const SISTEMA_URL = process.env.SISTEMA_API_URL;
const SISTEMA_TOKEN = process.env.SISTEMA_API_TOKEN;
const CATALOG = !!(SISTEMA_URL && SISTEMA_TOKEN);

const SYSTEM = `Eres SuminBot, el asistente virtual de ${SITE.nombre}, una empresa venezolana que distribuye productos químicos, materias primas e insumos industriales.
Si te preguntan tu nombre, eres "SuminBot".

Reglas:
- Responde SIEMPRE en español, de forma breve (2 a 4 frases), cordial y profesional.
- Ayudas con: productos y líneas, sectores atendidos, disponibilidad general, cómo solicitar una cotización, datos de contacto, ubicación y horario.
- Ubicación: el domicilio fiscal está en ${SITE.ubicacion}; contamos con almacenes en ${SITE.almacenes} y realizamos despacho a todo el país.
- Precios y cantidades: NO des precios exactos. Aclara que las cotizaciones se hacen en función de la CANTIDAD solicitada: aunque manejamos un stock amplio, el precio final depende del volumen que el cliente desea comprar, y el monto se ajusta según esa cantidad. Para un precio, invita a solicitar cotización por WhatsApp (${SITE.telefono2}) o el formulario.
- No inventes stock exacto ni fichas técnicas.${CATALOG ? `
- Cuando el usuario pregunte si tienen un producto específico o quiera ver productos de una categoría, USA la herramienta buscar_productos para consultar el catálogo real y responde según lo que devuelva. Si no aparece, dilo y ofrece cotización o consultar con un asesor. No inventes productos.` : ""}
- Líneas de productos:
  · Cosmética: aceite de ricino USP / hidrogenado PEG-4, acetato de sodio, óxido de zinc, dióxido de titanio ANATASE, D-Pantenol, Carbomer (Carbopol), lanolina anhidra USP.
  · Industrial: ácido oléico / TOFA, ácido oxálico/málico/sulfámico/tánico, BHT, cloruro de zinc, fenilsulfonato de calcio.
  · Petróleo y gas: 2-etil hexanol, barita, bromuro de calcio, ditiocarbamato de sodio, glutaraldehído, goma xanthan grado técnico, imidazolina, monoetanolamina (MEA), policloruro de aluminio, soda cáustica líquida, THPS, triazina, trietilenglicol (TEG), entre otros.
  · Alimentaria: ácido ascórbico/cítrico/benzoico, colorantes, lactosa, lecitina de soya, peróxido de benzoilo, vainillina.
  · Otras líneas: alimentación balanceada animal (ABA), veterinaria, cuidado del hogar, bolsas industriales.
- Datos: WhatsApp ${SITE.telefono2}, teléfono ${SITE.telefono}, correo ${SITE.email}, ubicación ${SITE.ubicacion}, horario ${SITE.horario}, RIF ${SITE.rif}.
- Si el usuario quiere hacer un pedido o pide precio/disponibilidad, ofrécele contactar por WhatsApp o el formulario de "Solicitar cotización".
- Saluda con cordialidad, ve al grano y termina ofreciendo un siguiente paso útil.
- Si preguntan algo ajeno a la empresa, redirige amablemente.`;

const TOOLS: Anthropic.Tool[] = [
  {
    name: "buscar_productos",
    description: "Busca productos en el catálogo real de la empresa por nombre o palabra clave. Úsalo cuando el usuario pregunte si tienen un producto específico o quiera ver productos.",
    input_schema: {
      type: "object",
      properties: { consulta: { type: "string", description: "nombre o palabra clave del producto a buscar" } },
      required: ["consulta"],
    },
  },
];

type Msg = { role: "user" | "assistant"; content: string };

async function buscarProductos(consulta: string): Promise<string> {
  try {
    const u = new URL("/api/public/productos", SISTEMA_URL);
    u.searchParams.set("q", consulta);
    const r = await fetch(u, { headers: { "x-api-token": SISTEMA_TOKEN as string }, signal: AbortSignal.timeout(8000) });
    if (!r.ok) return "No se pudo consultar el catálogo en este momento.";
    const d = (await r.json()) as { productos?: { nombre: string; disponible?: boolean }[] };
    const items = Array.isArray(d.productos) ? d.productos : [];
    if (items.length === 0) return "No se encontraron productos con ese nombre en el catálogo.";
    return items.slice(0, 15).map((p) => `- ${p.nombre}${p.disponible === false ? " (agotado)" : ""}`).join("\n");
  } catch {
    return "No se pudo consultar el catálogo en este momento.";
  }
}

const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now(), win = 60_000, max = 12;
  const arr = (hits.get(ip) || []).filter((t) => now - t < win);
  arr.push(now); hits.set(ip, arr);
  return arr.length > max;
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: `El asistente se está activando. Mientras tanto, escríbenos por WhatsApp al ${SITE.telefono2} y con gusto te ayudamos. 🙌` }, { status: 503 });
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  if (limited(ip)) return Response.json({ error: "Demasiadas consultas seguidas. Intenta en un momento." }, { status: 429 });

  let body: unknown;
  try { body = await req.json(); } catch { return Response.json({ error: "Solicitud inválida." }, { status: 400 }); }
  const raw = (body as { messages?: unknown })?.messages;
  const arr: Msg[] = Array.isArray(raw)
    ? (raw as Msg[])
        .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
        .slice(-12)
    : [];
  while (arr.length && arr[0].role === "assistant") arr.shift();
  if (arr.length === 0 || arr[arr.length - 1].role !== "user") {
    return Response.json({ error: "Falta el mensaje." }, { status: 400 });
  }

  try {
    const client = new Anthropic();
    const convo: Anthropic.MessageParam[] = arr.map((m) => ({ role: m.role, content: m.content }));
    const base = { model: MODEL, max_tokens: 600, output_config: { effort: "low" }, system: SYSTEM } as const;

    let res = await client.messages.create(CATALOG ? { ...base, tools: TOOLS, messages: convo } : { ...base, messages: convo });

    let guard = 0;
    while (CATALOG && res.stop_reason === "tool_use" && guard++ < 3) {
      convo.push({ role: "assistant", content: res.content });
      const results: Anthropic.ToolResultBlockParam[] = [];
      for (const b of res.content) {
        if (b.type === "tool_use") {
          const consulta = String((b.input as { consulta?: unknown })?.consulta ?? "");
          results.push({ type: "tool_result", tool_use_id: b.id, content: await buscarProductos(consulta) });
        }
      }
      convo.push({ role: "user", content: results });
      res = await client.messages.create({ ...base, tools: TOOLS, messages: convo });
    }

    if (res.stop_reason === "refusal") return Response.json({ error: "No pude responder eso. ¿Podrías reformularlo?" });
    const reply = res.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return Response.json({ reply: reply || "¿Podrías reformular tu pregunta, por favor?" });
  } catch {
    return Response.json({ error: "No pudimos responder en este momento. Escríbenos por WhatsApp." }, { status: 500 });
  }
}
