import { SITE, waLink } from "@/lib/site";
import SiteHeader from "@/components/site-header";
import QuoteForm from "@/components/quote-form";

const SECTORES: [string, string, string][] = [
  ["🍶", "Alimentos y bebidas", "Aditivos, conservantes y grado alimenticio."],
  ["🧴", "Cosmética y cuidado personal", "Tensioactivos, humectantes y materias primas."],
  ["💧", "Tratamiento de aguas", "Coagulantes, floculantes y desinfección."],
  ["🧼", "Limpieza e higiene", "Insumos para detergentes y sanitizantes."],
  ["🏭", "Plásticos y resinas", "Resinas, polímeros y aditivos."],
  ["🎨", "Pinturas y recubrimientos", "Pigmentos, solventes y aditivos."],
  ["🧪", "Industria general", "Ácidos, álcalis y solventes industriales."],
  ["🚜", "Agroindustria", "Insumos y materias primas para el agro."],
];

const CATALOGO: { ic: string; cat: string; items: string[] }[] = [
  { ic: "⚗️", cat: "Ácidos y álcalis", items: ["Ácido Sulfúrico", "Ácido Clorhídrico", "Ácido Fosfórico", "Soda Cáustica (Hidróxido de Sodio)", "Hidróxido de Potasio"] },
  { ic: "🧴", cat: "Solventes industriales", items: ["Alcohol Isopropílico", "Acetona", "Xileno", "Tolueno", "Metanol", "Etilenglicol"] },
  { ic: "🫧", cat: "Tensioactivos", items: ["Lauril Éter Sulfato", "Nonilfenol Etoxilado", "Cocoamidopropil Betaína", "Ácido Sulfónico"] },
  { ic: "🍶", cat: "Aditivos alimentarios", items: ["Benzoato de Sodio", "Sorbato de Potasio", "Ácido Cítrico", "Citrato de Sodio", "CMC", "Goma Xantán"] },
  { ic: "💧", cat: "Tratamiento de aguas", items: ["Sulfato de Aluminio", "Cloruro Férrico", "Policloruro de Aluminio", "Hipoclorito de Sodio"] },
  { ic: "🎨", cat: "Colorantes y pigmentos", items: ["Dióxido de Titanio", "Óxidos de hierro", "Colorantes industriales"] },
  { ic: "🏭", cat: "Resinas y polímeros", items: ["Resina PET", "PEBD / PEAD", "Resinas alquídicas"] },
  { ic: "🧂", cat: "Sales y minerales", items: ["Cloruro de Calcio", "Sulfato de Magnesio", "Bicarbonato de Sodio", "Carbonato de Calcio"] },
];

const VENTAJAS: [string, string][] = [
  ["Disponibilidad real", "amplio stock y varias presentaciones."],
  ["Asesoría técnica", "te ayudamos a elegir el producto correcto."],
  ["Despacho a todo el país", "entrega confiable y oportuna."],
  ["Precios competitivos", "cotización clara y a tiempo."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="wm" src="/logo.png" alt="" />
        <div className="wrap inner">
          <span className="eyebrow" style={{ color: "#8fb4ea" }}>Suministros Técnicos · Productos químicos e industriales</span>
          <h1 style={{ marginTop: 14 }}>La materia prima que mantiene <span className="g">su producción en marcha</span></h1>
          <p>Distribuimos una amplia línea de productos químicos, materias primas y aditivos para la industria venezolana — con asesoría técnica, stock disponible y despacho a todo el país.</p>
          <div className="cta-row">
            <a className="btn btn-accent" href="#cotizacion">Solicitar cotización →</a>
            <a className="btn btn-line" href="#productos">Ver líneas de productos</a>
          </div>
          <div className="badges">
            <div className="badge">🏭 <b>Amplio inventario</b></div>
            <div className="badge">🚚 <b>Despacho nacional</b></div>
            <div className="badge">🧪 <b>Asesoría técnica</b></div>
            <div className="badge">⚡ <b>Atención directa</b></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        <div className="wrap">
          <div className="stat"><b>+4.000</b><span>productos en catálogo</span></div>
          <div className="stat"><b>Nacional</b><span>despacho a todo el país</span></div>
          <div className="stat"><b>Múltiples</b><span>sectores industriales</span></div>
          <div className="stat"><b>Directa</b><span>asesoría especializada</span></div>
        </div>
      </div>

      {/* Nosotros */}
      <section id="nosotros">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="title">Su aliado en el suministro de productos químicos</h2>
            <p className="lead" style={{ maxWidth: "none", marginTop: 14 }}>
              Somos una empresa venezolana especializada en la distribución de productos químicos e insumos industriales para múltiples sectores. Combinamos un amplio catálogo, precios competitivos y una atención cercana para que cada cliente reciba exactamente lo que necesita, a tiempo.
            </p>
            <div className="grid cards" style={{ marginTop: 26 }}>
              <div className="card"><div className="ic">📦</div><h3>Amplio inventario</h3><p>Materias primas y químicos en distintas presentaciones.</p></div>
              <div className="card"><div className="ic">🤝</div><h3>Atención cercana</h3><p>Un asesor te acompaña de principio a fin.</p></div>
            </div>
          </div>
          <div className="panel">
            <h3>Atención directa</h3>
            <p style={{ color: "#c3ccd8", marginTop: 0 }}>Escríbenos por WhatsApp y un asesor te ayuda a encontrar el producto y la presentación ideal para tu proceso.</p>
            <a className="btn btn-wa" href={waLink("Hola, quisiera información sobre sus productos.")} target="_blank" rel="noopener noreferrer" style={{ marginTop: 6 }}>Hablar por WhatsApp</a>
            <div style={{ marginTop: 22, borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 18, color: "#c3ccd8", fontSize: 15 }}>
              🕑 {SITE.horario}<br />📍 {SITE.ubicacion}
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section id="sectores" className="soft">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Sectores que atendemos</span>
            <h2 className="title">Soluciones para cada industria</h2>
          </div>
          <div className="grid cards">
            {SECTORES.map(([ic, t, d]) => (
              <div className="card" key={t}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos / Catálogo */}
      <section id="productos">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Nuestro catálogo</span>
            <h2 className="title">Líneas y productos que manejamos</h2>
            <p className="lead center" style={{ margin: "12px auto 0" }}>Una muestra de nuestras líneas. Contamos con más de 4.000 referencias en distintas presentaciones.</p>
          </div>
          <div className="grid catgrid">
            {CATALOGO.map((c) => (
              <div className="cat" key={c.cat}>
                <h3><span>{c.ic}</span> {c.cat}</h3>
                <ul>
                  {c.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="center" style={{ color: "var(--muted)", marginTop: 26 }}>
            ¿No ves lo que buscas? Tenemos muchas más referencias. <a href="#cotizacion" style={{ color: "var(--accent)", fontWeight: 700 }}>Consúltanos →</a>
          </p>
        </div>
      </section>

      {/* Por qué elegirnos + Cotización */}
      <section className="soft">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Por qué elegirnos</span>
            <h2 className="title">La confianza de trabajar con especialistas</h2>
            <ul className="why">
              {VENTAJAS.map(([t, d]) => (
                <li key={t}><span className="chk">✓</span><div><b>{t}</b> — {d}</div></li>
              ))}
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Contacto</span>
            <h2 className="title">Estamos para ayudarte</h2>
          </div>
          <div className="grid contact">
            <a className="cbox" href={waLink("Hola, quisiera más información.")} target="_blank" rel="noopener noreferrer"><div className="ic">💬</div><div><b>WhatsApp</b><span>Respuesta rápida con un asesor</span></div></a>
            <div className="cbox"><div className="ic">📞</div><div><b>Teléfono</b><span>{SITE.telefono}</span></div></div>
            <a className="cbox" href={`mailto:${SITE.email}`}><div className="ic">✉️</div><div><b>Correo</b><span>{SITE.email}</span></div></a>
            <div className="cbox"><div className="ic">📍</div><div><b>Ubicación</b><span>{SITE.ubicacion}</span></div></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap foot">
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="lg"><img src="/logo.png" alt={SITE.nombre} /></span>
            <div>Suministros Técnicos<br />Benavente Martínez, C.A.</div>
          </div>
          <div>© {new Date().getFullYear()} · Todos los derechos reservados · RIF {SITE.rif}</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a className="wa" href={waLink("Hola, quisiera solicitar una cotización.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </>
  );
}
