import type { CSSProperties } from "react";
import { SITE, waLink } from "@/lib/site";
import { Icon } from "@/components/icons";
import SiteHeader from "@/components/site-header";
import QuoteForm from "@/components/quote-form";
import ScrollAnimations from "@/components/scroll-animations";

const SECTORES: { ic: string; t: string; d: string; slug: string; tint: string }[] = [
  { ic: "cup", t: "Alimentos y bebidas", d: "Aditivos, conservantes y grado alimenticio.", slug: "alimentos", tint: "linear-gradient(135deg,#20344d,#12406b)" },
  { ic: "droplet", t: "Cosmética y cuidado personal", d: "Tensioactivos, humectantes y materias primas.", slug: "cosmetica", tint: "linear-gradient(135deg,#3a2a4d,#5b3a6b)" },
  { ic: "droplets", t: "Tratamiento de aguas", d: "Coagulantes, floculantes y desinfección.", slug: "aguas", tint: "linear-gradient(135deg,#123a4b,#0e5a6b)" },
  { ic: "spray", t: "Limpieza e higiene", d: "Insumos para detergentes y sanitizantes.", slug: "limpieza", tint: "linear-gradient(135deg,#123f39,#166b57)" },
  { ic: "cube", t: "Plásticos y resinas", d: "Resinas, polímeros y aditivos.", slug: "plasticos", tint: "linear-gradient(135deg,#2b3340,#3a4658)" },
  { ic: "brush", t: "Pinturas y recubrimientos", d: "Pigmentos, solventes y aditivos.", slug: "pinturas", tint: "linear-gradient(135deg,#4d3320,#6b4a16)" },
  { ic: "flask", t: "Industria general", d: "Ácidos, álcalis y solventes industriales.", slug: "industria", tint: "linear-gradient(135deg,#1f2b3d,#28405e)" },
  { ic: "sprout", t: "Agroindustria", d: "Insumos y materias primas para el agro.", slug: "agro", tint: "linear-gradient(135deg,#20341f,#3a5b2a)" },
];

const CATALOGO: { ic: string; cat: string; items: string[] }[] = [
  { ic: "flask", cat: "Ácidos y álcalis", items: ["Ácido Sulfúrico", "Ácido Clorhídrico", "Ácido Fosfórico", "Soda Cáustica", "Hidróxido de Potasio"] },
  { ic: "droplet", cat: "Solventes industriales", items: ["Alcohol Isopropílico", "Acetona", "Xileno", "Tolueno", "Metanol", "Etilenglicol"] },
  { ic: "spray", cat: "Tensioactivos", items: ["Lauril Éter Sulfato", "Nonilfenol Etoxilado", "Cocoamidopropil Betaína", "Ácido Sulfónico"] },
  { ic: "cup", cat: "Aditivos alimentarios", items: ["Benzoato de Sodio", "Sorbato de Potasio", "Ácido Cítrico", "Citrato de Sodio", "Goma Xantán"] },
  { ic: "droplets", cat: "Tratamiento de aguas", items: ["Sulfato de Aluminio", "Cloruro Férrico", "Policloruro de Aluminio", "Hipoclorito de Sodio"] },
  { ic: "brush", cat: "Colorantes y pigmentos", items: ["Dióxido de Titanio", "Óxidos de hierro", "Colorantes industriales"] },
  { ic: "cube", cat: "Resinas y polímeros", items: ["Resina PET", "PEBD / PEAD", "Resinas alquídicas"] },
  { ic: "box", cat: "Sales y minerales", items: ["Cloruro de Calcio", "Sulfato de Magnesio", "Bicarbonato de Sodio", "Carbonato de Calcio"] },
];

const VENTAJAS: { ic: string; t: string; d: string }[] = [
  { ic: "box", t: "Disponibilidad real", d: "Amplio stock y varias presentaciones para responder a tiempo." },
  { ic: "headset", t: "Asesoría técnica", d: "Te ayudamos a elegir el producto y la presentación correcta." },
  { ic: "truck", t: "Despacho a todo el país", d: "Entrega confiable y oportuna en todo el territorio nacional." },
  { ic: "tag", t: "Precios competitivos", d: "Cotización clara y a tiempo, con la mejor relación costo-beneficio." },
];

const PASOS: { t: string; d: string }[] = [
  { t: "Nos escribes", d: "Cuéntanos qué producto y cantidad necesitas, por WhatsApp o el formulario." },
  { t: "Cotizamos rápido", d: "Recibes tu cotización con precio y disponibilidad a la brevedad." },
  { t: "Despachamos", d: "Coordinamos la entrega en tu ubicación, en todo el país." },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="hero">
        <div className="wrap inner reveal in">
          <span className="eyebrow" style={{ color: "#8fb4ea" }}>Suministros Técnicos · Productos químicos e industriales</span>
          <h1 style={{ marginTop: 14 }}>La materia prima que mantiene <span className="g">su producción en marcha</span></h1>
          <p>Distribuimos una amplia línea de productos químicos, materias primas y aditivos para la industria venezolana — con asesoría técnica, stock disponible y despacho a todo el país.</p>
          <div className="cta-row">
            <a className="btn btn-accent" href="#cotizacion">Solicitar cotización <Icon name="arrow" /></a>
            <a className="btn btn-line" href="#productos">Ver catálogo</a>
          </div>
          <div className="badges">
            <div className="badge"><Icon name="box" /> <b>Amplio inventario</b></div>
            <div className="badge"><Icon name="globe" /> <b>Despacho nacional</b></div>
            <div className="badge"><Icon name="headset" /> <b>Asesoría técnica</b></div>
            <div className="badge"><Icon name="bolt" /> <b>Atención directa</b></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        <div className="wrap">
          <div className="stat"><b data-count="4000" data-suffix="+">0</b><span>productos en catálogo</span></div>
          <div className="stat"><b data-count="8" data-suffix="">0</b><span>sectores atendidos</span></div>
          <div className="stat"><b>Nacional</b><span>despacho a todo el país</span></div>
          <div className="stat"><b>Directa</b><span>asesoría especializada</span></div>
        </div>
      </div>

      {/* Nosotros */}
      <section id="nosotros">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="title">Su aliado en el suministro de productos químicos</h2>
            <p className="lead" style={{ maxWidth: "none", marginTop: 14 }}>
              Somos una empresa venezolana especializada en la distribución de productos químicos e insumos industriales para múltiples sectores. Combinamos un amplio catálogo, precios competitivos y una atención cercana para que cada cliente reciba exactamente lo que necesita, a tiempo.
            </p>
            <div className="cta-row" style={{ marginTop: 26 }}>
              <a className="btn btn-accent" href="#cotizacion">Solicitar cotización</a>
              <a className="btn btn-wa" href={waLink("Hola, quisiera información sobre sus productos.")} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
            </div>
          </div>
          <div className="media reveal d2" role="img" aria-label="Almacén de Benavente Martínez" />
        </div>
      </section>

      {/* Sectores */}
      <section id="sectores" className="soft">
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 42 }}>
            <span className="eyebrow">Sectores que atendemos</span>
            <h2 className="title">Soluciones para cada industria</h2>
          </div>
          <div className="grid sectors">
            {SECTORES.map((s, i) => (
              <a key={s.slug} href="#cotizacion" className={`sector reveal d${(i % 4) + 1}`} style={{ "--tint": s.tint } as CSSProperties}>
                <div className="ph" style={{ backgroundImage: `url(/images/sectores/${s.slug}.jpg)` }} />
                <div className="ov" />
                <div className="c">
                  <span className="chip"><Icon name={s.ic} /></span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="productos">
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 42 }}>
            <span className="eyebrow">Nuestro catálogo</span>
            <h2 className="title">Líneas y productos que manejamos</h2>
            <p className="lead center mx" style={{ marginTop: 12 }}>Una muestra de nuestras líneas. Contamos con más de 4.000 referencias en distintas presentaciones.</p>
          </div>
          <div className="grid catgrid">
            {CATALOGO.map((c, i) => (
              <div className={`cat reveal d${(i % 4) + 1}`} key={c.cat}>
                <div className="h"><span className="ci"><Icon name={c.ic} /></span><h3>{c.cat}</h3></div>
                <ul>{c.items.map((it) => <li key={it}><Icon name="check" /> {it}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="center" style={{ color: "var(--muted)", marginTop: 28 }}>
            ¿No ves lo que buscas? Tenemos muchas más referencias. <a href="#cotizacion" style={{ color: "var(--accent)", fontWeight: 700 }}>Consúltanos →</a>
          </p>
        </div>
      </section>

      {/* Ventajas */}
      <section className="soft">
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 42 }}>
            <span className="eyebrow">Por qué elegirnos</span>
            <h2 className="title">La confianza de trabajar con especialistas</h2>
          </div>
          <div className="grid adv">
            {VENTAJAS.map((v, i) => (
              <div className={`advitem reveal d${i + 1}`} key={v.t}>
                <div className="advhead">
                  <div className="icontile"><Icon name={v.ic} /></div>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section>
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 42 }}>
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="title">Tu pedido en 3 pasos</h2>
          </div>
          <div className="grid steps">
            {PASOS.map((p, i) => (
              <div className={`step reveal d${i + 1}`} key={p.t}>
                <div className="num">{i + 1}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cotización */}
      <section id="cotizacion" className="soft">
        <div className="wrap">
          <div className="band split">
            <div className="reveal">
              <span className="eyebrow" style={{ color: "#8fb4ea" }}>Cotización sin compromiso</span>
              <h2 className="title" style={{ color: "#fff", marginTop: 10 }}>Solicita tu cotización hoy</h2>
              <p style={{ color: "#c3ccd8", fontSize: 18, marginTop: 12, maxWidth: 440 }}>Déjanos tus datos y qué necesitas. Un asesor te responde a la brevedad con precio y disponibilidad.</p>
              <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 12 }}>
                <a className="btn btn-wa" href={waLink("Hola, quisiera solicitar una cotización.")} target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start" }}><Icon name="whatsapp" /> Cotizar por WhatsApp</a>
                <span style={{ color: "#9fb0c1", fontSize: 14 }}>o completa el formulario →</span>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 42 }}>
            <span className="eyebrow">Contacto</span>
            <h2 className="title">Estamos para ayudarte</h2>
          </div>
          <div className="grid contact">
            <a className="cbox reveal d1" href={waLink("Hola, quisiera más información.")} target="_blank" rel="noopener noreferrer"><span className="ci"><Icon name="whatsapp" /></span><div><b>WhatsApp</b><span>Respuesta rápida con un asesor</span></div></a>
            <div className="cbox reveal d2"><span className="ci"><Icon name="phone" /></span><div><b>Teléfono</b><span>{SITE.telefono}</span></div></div>
            <a className="cbox reveal d3" href={`mailto:${SITE.email}`}><span className="ci"><Icon name="mail" /></span><div><b>Correo</b><span>{SITE.email}</span></div></a>
            <div className="cbox reveal d4"><span className="ci"><Icon name="clock" /></span><div><b>Horario</b><span>{SITE.horario}</span></div></div>
          </div>
          <div className="map reveal">
            <iframe title="Ubicación" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Valencia,Carabobo,Venezuela&output=embed" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap">
          <div className="fgrid">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <span className="lg"><img src="/logo.png" alt={SITE.nombre} /></span>
              <p style={{ maxWidth: 320 }}>{SITE.descripcion}</p>
            </div>
            <div>
              <h4>Enlaces</h4>
              <p><a href="#nosotros">Nosotros</a></p>
              <p><a href="#sectores">Sectores</a></p>
              <p><a href="#productos">Productos</a></p>
              <p><a href="#cotizacion">Solicitar cotización</a></p>
            </div>
            <div>
              <h4>Contacto</h4>
              <p>{SITE.telefono}</p>
              <p>{SITE.email}</p>
              <p>{SITE.ubicacion}</p>
              <p>{SITE.horario}</p>
            </div>
          </div>
          <div className="fbot">
            <span>© {new Date().getFullYear()} {SITE.nombre}</span>
            <span>RIF {SITE.rif}</span>
          </div>
        </div>
      </footer>

      {/* Floating */}
      <a className="wa" href={waLink("Hola, quisiera solicitar una cotización.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={30} /></a>
      <ScrollAnimations />
    </>
  );
}
