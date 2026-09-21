import { Icon } from "@/components/icons";
import { waLink } from "@/lib/site";

type Destacado = { titulo: string; nota?: string | null };

async function getDestacados(): Promise<Destacado[]> {
  const url = process.env.SISTEMA_API_URL;
  const token = process.env.SISTEMA_API_TOKEN;
  if (!url || !token) return [];
  try {
    const r = await fetch(new URL("/api/public/destacados", url), {
      headers: { "x-api-token": token },
      next: { revalidate: 300 }, // se actualiza solo cada ~5 min
    });
    if (!r.ok) return [];
    const d = (await r.json()) as { destacados?: Destacado[] };
    return Array.isArray(d.destacados) ? d.destacados : [];
  } catch {
    return [];
  }
}

export default async function DestacadosBanner() {
  const items = await getDestacados();
  if (items.length === 0) return null;

  return (
    <section id="destacados" className="destacados-sec">
      <div className="wrap">
        <div className="dest-head">
          <span className="eyebrow lime">Disponibles esta semana</span>
          <h2 className="dest-title">Productos destacados de la semana</h2>
        </div>
        <div className="dest-grid">
          {items.map((d, i) => (
            <div className="dest-card" key={`${d.titulo}-${i}`}>
              {d.nota ? <span className="dest-tag">{d.nota}</span> : null}
              <b className="dest-name">{d.titulo}</b>
              <a
                className="btn btn-wa dest-btn"
                href={waLink(`Hola, me interesa el producto destacado: ${d.titulo}. ¿Me pueden dar más información?`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" /> Pedir por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
