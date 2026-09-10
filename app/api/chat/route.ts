import Anthropic from "@anthropic-ai/sdk";
import type { NextRequest } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const maxDuration = 30;

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5";

const SYSTEM = `Eres el asistente virtual de ${SITE.nombre}, una empresa venezolana que distribuye productos químicos, materias primas e insumos industriales.

Reglas:
- Responde SIEMPRE en español, de forma breve (2 a 4 frases), cordial y profesional.
- Ayudas con: productos y líneas, sectores atendidos, disponibilidad general, cómo solicitar una cotización, datos de contacto, ubicación y horario.
- NO inventes precios exactos, stock ni fichas técnicas. Para precios y disponibilidad, invita a solicitar cotización por WhatsApp (${SITE.telefono}) o el formulario de la página.
- Sectores: alimentos y bebidas, cosmética y cuidado personal, tratamiento de aguas, limpieza e higiene, plásticos y resinas, pinturas y recubrimientos, industria general, agroindustria.
- Líneas de productos: ácidos y álcalis, solventes, tensioactivos, aditivos alimentarios, colorantes y pigmentos, tratamiento de aguas, resinas y polímeros, sales y minerales. Contamos con más de 4.000 referencias.
- Datos: WhatsApp ${SITE.telefono}, correo ${SITE.email}, ubicación ${SITE.ubicacion}, horario ${SITE.horario}, RIF ${SITE.rif}.
- Si preguntan algo ajeno a la empresa, redirige amablemente hacia cómo podemos ayudarles con insumos químicos.`;

type Msg = { role: "user" | "assistant"; content: string };

// Límite básico por IP (por instancia). Para producción con alto tráfico, usar un KV/Upstash.
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const win = 60_000, max = 12;
  const arr = (hits.get(ip) || []).filter((t) => now - t < win);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > max;
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "El chat no está configurado." }, { status: 503 });
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  if (limited(ip)) {
    return Response.json({ error: "Demasiadas consultas seguidas. Intenta en un momento." }, { status: 429 });
  }

  let body: unknown;
  try { body = await req.json(); } catch { return Response.json({ error: "Solicitud inválida." }, { status: 400 }); }
  const raw = (body as { messages?: unknown })?.messages;
  const arr: Msg[] = Array.isArray(raw)
    ? (raw as Msg[])
        .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
        .slice(-12)
    : [];
  // La API exige que la conversación empiece con un mensaje de usuario.
  while (arr.length && arr[0].role === "assistant") arr.shift();
  if (arr.length === 0 || arr[arr.length - 1].role !== "user") {
    return Response.json({ error: "Falta el mensaje." }, { status: 400 });
  }

  try {
    const client = new Anthropic();
    const res = await client.messages.create({
      model: MODEL,
      max_tokens: 500,
      output_config: { effort: "low" },
      system: SYSTEM,
      messages: arr,
    });
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
