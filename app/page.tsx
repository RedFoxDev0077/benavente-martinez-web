import { SITE, waLink } from "@/lib/site";
import { Icon } from "@/components/icons";
import SiteHeader from "@/components/site-header";
import QuoteForm from "@/components/quote-form";
import ScrollAnimations from "@/components/scroll-animations";

const FEATURED: { t: string; d: string; img: string }[] = [
  { t: "Químicos industriales", d: "Ácidos, álcalis, solventes y más", img: "industria" },
  { t: "Polímeros y resinas", d: "Resinas, PET y polímeros", img: "plasticos" },
];

const SECTORES: { ic: string; t: string; d: string }[] = [
  { ic: "cup", t: "Alimentos y bebidas", d: "Aditivos, conservantes y grado alimenticio." },
  { ic: "droplet", t: "Cosmética y cuidado personal", d: "Tensioactivos, humectantes y materias primas." },
  { ic: "droplets", t: "Tratamiento de aguas", d: "Coagulantes, floculantes y desinfección." },
  { ic: "spray", t: "Limpieza e higiene", d: "Insumos para detergentes y sanitizantes." },
  { ic: "cube", t: "Plásticos y resinas", d: "Resinas, polímeros y aditivos." },
  { ic: "brush", t: "Pinturas y recubrimientos", d: "Pigmentos, solventes y aditivos." },
  { ic: "flask", t: "Industria general", d: "Ácidos, álcalis y solventes industriales." },
  { ic: "sprout", t: "Agroindustria", d: "Insumos y materias primas para el agro." },
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

// Contenido de ejemplo — reemplazar por artículos reales.
const BLOG: { t: string; d: string; cat: string; fecha: string; img: string }[] = [
  { t: "Cómo elegir el tensioactivo correcto para su formulación", d: "Guía práctica para seleccionar el tensioactivo según el tipo de producto y rendimiento deseado.", cat: "Formulación", fecha: "Sep 2026", img: "cosmetica" },
  { t: "Buenas prácticas en el almacenamiento de productos químicos", d: "Recomendaciones clave de seguridad y manejo para conservar la calidad de sus insumos.", cat: "Seguridad", fecha: "Sep 2026", img: "industria" },
  { t: "Claves del tratamiento de aguas industriales", d: "Coagulantes, floculantes y desinfección: qué considerar para un proceso eficiente.", cat: "Tratamiento de aguas", fecha: "Sep 2026", img: "aguas" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="hero">
        <div className="socials">
          <a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">Facebook</a>
        </div>
        <div className="wrap inner reveal in">
          <span className="eyebrow lime">Suministros Técnicos · Productos químicos</span>
          <h1 style={{ marginTop: 16 }}>Química que impulsa <span className="g">su producción</span></h1>
          <p>Distribuimos una amplia línea de productos químicos, materias primas y aditivos para la industria venezolana — con asesoría técnica, stock disponible y despacho a todo el país.</p>
          <div className="cta-row">
            <a className="btn btn-accent" href="#cotizacion">Solicitar cotización <Icon name="arrowUR" /></a>
            <a className="more" href="#productos"><span className="circ"><Icon name="arrowUR" /></span> Ver catálogo</a>
          </div>
          <div className="badges">
            <div className="badge"><Icon name="box" /> <b>Amplio inventario</b></div>
            <div className="badge"><Icon name="globe" /> <b>Despacho nacional</b></div>
            <div className="badge"><Icon name="headset" /> <b>Asesoría técnica</b></div>
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

      {/* Featured products */}
      <section id="productos">
        <div className="wrap">
          <div className="intro reveal">
            <div>
              <span className="eyebrow">Nuestros productos</span>
              <h2 className="title">Materias primas y químicos para cada industria</h2>
            </div>
            <div>
              <p>Contamos con más de 4.000 referencias en distintas presentaciones, con la calidad y disponibilidad que su producción necesita.</p>
              <a className="more" href="#catalogo"><span className="circ"><Icon name="arrowUR" /></span> Ver el catálogo</a>
            </div>
          </div>
          <div className="grid feat">
            {FEATURED.map((f) => (
              <a key={f.t} href="#cotizacion" className="featcard reveal">
                <div className="ph" style={{ backgroundImage: `url(/images/sectores/${f.img}.jpg)` }} />
                <div className="ov" />
                <div className="lbl">{f.t}<div style={{ fontWeight: 500, fontSize: 13.5, opacity: 0.85 }}>{f.d}</div></div>
              </a>
            ))}
            <div className="featcta reveal d2">
              <h3>Explora todo nuestro catálogo</h3>
              <a className="more" href="#catalogo"><span className="circ"><Icon name="arrowUR" /></span> Ver más productos</a>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="soft">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="title">Su aliado en el suministro de productos químicos</h2>
            <p className="lead" style={{ maxWidth: "none", marginTop: 14 }}>
              Somos una empresa venezolana especializada en la distribución de productos químicos e insumos industriales para múltiples sectores. Combinamos un amplio catálogo, precios competitivos y una atención cercana para que cada cliente reciba exactamente lo que necesita, a tiempo.
            </p>
            <div className="cta-row" style={{ marginTop: 26 }}>
              <a className="btn btn-dark" href="#cotizacion">Solicitar cotización</a>
              <a className="btn btn-wa" href={waLink("Hola, quisiera información sobre sus productos.")} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
            </div>
          </div>
          <div className="media reveal d2" role="img" aria-label="Almacén de Benavente Martínez" />
        </div>
      </section>

      {/* Sectores — bordered grid */}
      <section id="sectores">
        <div className="wrap">
          <div className="intro reveal">
            <div>
              <span className="eyebrow">Sectores que atendemos</span>
              <h2 className="title">Soluciones para cada industria</h2>
            </div>
            <div>
              <p>Atendemos a múltiples sectores con la línea de productos adecuada para cada proceso productivo.</p>
              <a className="more" href="#cotizacion"><span className="circ"><Icon name="arrowUR" /></span> Solicitar cotización</a>
            </div>
          </div>
          <div className="svc reveal">
            {SECTORES.map((s) => (
              <div className="cell" key={s.t}>
                <span className="ci"><Icon name={s.ic} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="soft">
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 42 }}>
            <span className="eyebrow">Nuestro catálogo</span>
            <h2 className="title">Líneas y productos que manejamos</h2>
          </div>
          <div className="grid catgrid">
            {CATALOGO.map((c, i) => (
              <div className={`cat reveal d${(i % 4) + 1}`} key={c.cat}>
                <div className="h"><span className="ci"><Icon name={c.ic} /></span><h3>{c.cat}</h3></div>
                <ul>{c.items.map((it) => <li key={it}><Icon name="check" /> {it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section>
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
      <section className="soft">
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

      {/* Blog / noticias */}
      <section id="blog">
        <div className="wrap">
          <div className="intro reveal">
            <div>
              <span className="eyebrow">Recursos</span>
              <h2 className="title">Noticias y guías</h2>
            </div>
            <div>
              <p>Consejos y novedades sobre productos químicos e insumos industriales para su operación.</p>
              <a className="more" href={waLink("Hola, quisiera más información.")} target="_blank" rel="noopener noreferrer"><span className="circ"><Icon name="arrowUR" /></span> Escríbenos</a>
            </div>
          </div>
          <div className="grid blog">
            {BLOG.map((b, i) => (
              <article className={`post reveal d${i + 1}`} key={b.t}>
                <div className="img" style={{ backgroundImage: `url(/images/sectores/${b.img}.jpg)` }} />
                <div className="meta"><span>{b.cat}</span><span>{b.fecha}</span></div>
                <div className="body">
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                  <a className="more" href="#contacto"><span className="circ"><Icon name="arrowUR" /></span> Leer más</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cotización */}
      <section id="cotizacion">
        <div className="wrap">
          <div className="band">
            <div className="split">
              <div className="reveal">
                <span className="eyebrow lime">Cotización sin compromiso</span>
                <h2 className="title" style={{ color: "#fff", marginTop: 10 }}>Solicita tu cotización hoy</h2>
                <p style={{ color: "#c8cdd4", fontSize: 18, marginTop: 12, maxWidth: 440 }}>Déjanos tus datos y qué necesitas. Un asesor te responde a la brevedad con precio y disponibilidad.</p>
                <a className="btn btn-accent" href={waLink("Hola, quisiera solicitar una cotización.")} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22 }}><Icon name="whatsapp" /> Cotizar por WhatsApp</a>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="soft">
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

      {/* Marcas / proveedores */}
      <section className="soft" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 32 }}>
            <span className="eyebrow">Confianza</span>
            <h2 className="title">Marcas y proveedores que distribuimos</h2>
          </div>
          <div className="marcas reveal">
            {["flask", "droplet", "cube", "spray", "box", "sprout"].map((ic, i) => (
              <div className="marca" key={i} title="Logo de marca (reemplazar)"><Icon name={ic} /></div>
            ))}
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
              <p style={{ maxWidth: 300 }}>{SITE.descripcion}</p>
            </div>
            <div>
              <h4>Enlaces</h4>
              <p><a href="#nosotros">Nosotros</a></p>
              <p><a href="#sectores">Sectores</a></p>
              <p><a href="#catalogo">Productos</a></p>
              <p><a href="#cotizacion">Cotización</a></p>
            </div>
            <div>
              <h4>Contacto</h4>
              <p>{SITE.telefono}</p>
              <p>{SITE.email}</p>
              <p>{SITE.ubicacion}</p>
            </div>
            <div>
              <h4>Horario</h4>
              <p>{SITE.horario}</p>
              <a className="btn btn-dark" href={waLink("Hola, quisiera solicitar una cotización.")} target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}><Icon name="whatsapp" /> WhatsApp</a>
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
