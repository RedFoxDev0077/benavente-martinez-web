import { SITE, waLink } from "@/lib/site";
import { Icon } from "@/components/icons";
import SiteHeader from "@/components/site-header";
import QuoteForm from "@/components/quote-form";
import ScrollAnimations from "@/components/scroll-animations";
import HeroCarousel from "@/components/hero-carousel";
import ChatWidget from "@/components/chat-widget";
import SumibotCTA from "@/components/sumibot-cta";

const HERO_SLIDES = ["/images/hero/1.jpg", "/images/hero/2.jpg", "/images/hero/3.jpg"];

const NOSOTROS = [
  "En Suministros Técnicos Benavente Martínez, C.A. somos una empresa joven, dinámica y comprometida con posicionarnos como la mejor opción en la comercialización de materia prima para diversas industrias. Nos especializamos en ofrecer insumos confiables para sectores como cosmética, home care, alimentos, textiles, sector petróleo y más.",
  "Nuestro compromiso con la calidad y el servicio al cliente nos impulsa a destacar en un mercado competitivo. Creemos en relaciones basadas en la honestidad, el respeto y la orientación técnica precisa. Por eso, cada cliente recibe atención personalizada y asesoría experta para seleccionar los productos que mejor se ajusten a sus necesidades.",
  "Seleccionamos cuidadosamente cada material, asegurándonos de que cumpla con los más altos estándares de calidad. Esto garantiza seguridad, confianza y resultados óptimos en sus procesos productivos.",
  "Nos enfocamos en entender a fondo los requerimientos de cada cliente, brindando soluciones a medida que realmente aportan valor. Más que proveedores, somos aliados estratégicos en su crecimiento.",
];

const LINEAS: { ic: string; cat: string; img: string; items: string[] }[] = [
  { ic: "droplet", cat: "Cosmética", img: "cosmetica", items: ["Aceite de Ricino USP / Hidrogenado PEG-4", "Acetato de sodio", "Óxido de Zinc", "Dióxido de titanio ANATASE", "D-Pantenol", "Carbomer (Carbopol®)", "Lanolina Anhidra USP"] },
  { ic: "flask", cat: "Industrial", img: "industria", items: ["Ácido Oléico / TOFA", "Ácido Oxálico, málico, sulfámico, tánico", "Butil Hidróxi Tolueno (BHT)", "Cloruro de Zinc", "Fenilsulfonato de Calcio"] },
  { ic: "bolt", cat: "Petróleo y gas", img: "otras", items: ["2-Etil Hexanol", "Almidón Modificado de Papa", "Barita", "Bromuro de Calcio", "Ditiocarbamato de Sodio 14%", "Éster Metílico de Soya", "Glutaraldehído", "Goma Xanthan Grado Técnico", "Imidazolina", "Monoetanolamina (MEA)", "Poliacrilato de Sodio 40%", "Policloruro de Aluminio Sólido", "Silicona 12500", "Soda Cáustica Líquida", "THPS (Tetrakis)", "Tiosulfato/Hiposulfito de Sodio", "Triazina", "Trietilenglicol (TEG)"] },
  { ic: "cup", cat: "Alimentaria", img: "alimentos", items: ["Ácido ascórbico, cítrico, benzoico", "Colorantes", "Lactosa", "Lecitina de soya", "Peróxido de benzoilo", "Vainillina"] },
  { ic: "box", cat: "Otras líneas", img: "limpieza", items: ["Alimentación Balanceada Animal (ABA)", "Veterinaria", "Cuidado del hogar", "Bolsas industriales"] },
];

const COBERTURA: { c: string; t: string; hq?: boolean; l: number; tp: number }[] = [
  { c: "Los Teques", t: "Sede fiscal · Miranda", hq: true, l: 46.5, tp: 23.5 },
  { c: "Valencia", t: "Almacén · Carabobo", l: 39.5, tp: 24.5 },
  { c: "Maracay", t: "Almacén · Aragua", l: 43, tp: 24 },
  { c: "San Antonio de Los Altos", t: "Almacén · Miranda", l: 49.5, tp: 24 },
];

const DISTINGUE: { ic: string; t: string; d: string }[] = [
  { ic: "globe", t: "Importadores confiables", d: "Alianzas sólidas con proveedores de confianza." },
  { ic: "cube", t: "Fabricantes nacionales reconocidos", d: "Respaldo de fabricantes reconocidos del país." },
  { ic: "truck", t: "Transportes certificados", d: "Logística confiable para entregas seguras." },
  { ic: "shield", t: "10 años de experiencia", d: "Trayectoria y resultados comprobables." },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="hero">
        <HeroCarousel images={HERO_SLIDES} />
        <div className="socials">
          <a href={waLink("Hola, quisiera información.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="wrap inner reveal in">
          <span className="eyebrow lime">Distribuidora de materia prima e insumos industriales</span>
          <h1 style={{ marginTop: 16 }}>Materia prima confiable para <span className="g">industrias exigentes</span></h1>
          <p>Comercializamos insumos confiables para cosmética, limpieza, alimentos, textiles y más — con asesoría técnica y atención personalizada.</p>
          <div className="cta-row">
            <a className="btn btn-accent" href="#cotizacion">Solicitar cotización <Icon name="arrowUR" /></a>
            <a className="more" href="#contacto"><span className="circ"><Icon name="arrowUR" /></span> Contáctanos</a>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="nosotros" className="soft">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="title">Aliados estratégicos en su crecimiento</h2>
            {NOSOTROS.map((p, i) => (
              <p key={i} style={{ color: "var(--muted)", fontSize: 15.5, marginTop: i === 0 ? 16 : 12 }}>{p}</p>
            ))}
          </div>
          <div className="media reveal d2" role="img" aria-label="Laboratorio de Benavente Martínez" />
        </div>
      </section>

      {/* Líneas de productos */}
      <section id="productos">
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 42 }}>
            <span className="eyebrow">Nuestro catálogo</span>
            <h2 className="title">Líneas de productos</h2>
            <p className="lead center mx" style={{ marginTop: 12 }}>Insumos confiables para múltiples industrias. ¿No ves lo que buscas? Consúltanos.</p>
          </div>
          <div className="grid catgrid">
            {LINEAS.map((c, i) => (
              <div className={`cat reveal d${(i % 4) + 1}`} key={c.cat}>
                <div className="catimg" style={{ backgroundImage: `url(/images/sectores/${c.img}.jpg)` }} />
                <div className="h"><span className="ci"><Icon name={c.ic} /></span><h3>{c.cat}</h3></div>
                <ul>{c.items.map((it) => <li key={it}><Icon name="check" /> {it}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 30 }}>
            <a className="btn btn-accent" href="#cotizacion">Cotiza aquí <Icon name="arrowUR" /></a>
          </div>
          <div style={{ marginTop: 34 }}><SumibotCTA /></div>
        </div>
      </section>

      {/* Lo que nos distingue */}
      <section id="distingue" className="soft">
        <div className="wrap distingue-split">
          <div className="reveal">
            <span className="eyebrow">Lo que nos distingue</span>
            <h2 className="title">Confianza que se construye con resultados</h2>
            <p className="lead" style={{ marginTop: 14, maxWidth: "none" }}>
              En un mercado exigente, nos destacamos por la solidez de nuestras alianzas, la precisión técnica y el compromiso con cada cliente. Nuestra trayectoria no solo se mide en cifras, sino en relaciones confiables y resultados comprobables.
            </p>
            <a className="btn btn-accent" href="#cotizacion" style={{ marginTop: 24 }}>Solicitar cotización <Icon name="arrowUR" /></a>
          </div>
          <div className="distingue-grid">
            {DISTINGUE.map((v, i) => (
              <div className={`dcard reveal d${i + 1}`} key={v.t}>
                <div className="icontile"><Icon name={v.ic} /></div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
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
                <h2 className="title" style={{ color: "#fff", marginTop: 10 }}>Solicita tu cotización</h2>
                <p style={{ color: "#c8cdd4", fontSize: 18, marginTop: 12, maxWidth: 440 }}>Déjanos tus datos y qué necesitas. Un asesor te responde a la brevedad con precio y disponibilidad, según la cantidad solicitada.</p>
                <a className="btn btn-wa" href={waLink("Hola, quisiera solicitar una cotización.")} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22 }}><Icon name="whatsapp" /> Cotizar por WhatsApp</a>
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
            <span className="eyebrow">Contáctanos</span>
            <h2 className="title">Estamos para ayudarte</h2>
          </div>
          <div className="grid contact">
            <a className="cbox reveal d1" href={waLink("Hola, quisiera más información.")} target="_blank" rel="noopener noreferrer"><span className="ci"><Icon name="whatsapp" /></span><div><b>WhatsApp</b><span>{SITE.telefono2}</span></div></a>
            <div className="cbox reveal d2"><span className="ci"><Icon name="phone" /></span><div><b>Teléfonos</b><span>{SITE.telefono}<br />{SITE.telefono2}</span></div></div>
            <a className="cbox reveal d3" href={`mailto:${SITE.email}`}><span className="ci"><Icon name="mail" /></span><div><b>Correos</b><span className="breakall">{SITE.email}<br />{SITE.email2}</span></div></a>
            <div className="cbox reveal d1"><span className="ci"><Icon name="pin" /></span><div><b>Ubicación</b><span>Domicilio Fiscal: {SITE.ubicacion}<br />{SITE.despacho}</span></div></div>
            <div className="cbox reveal d2"><span className="ci"><Icon name="clock" /></span><div><b>Horario</b><span>{SITE.horario}<br />{SITE.horarioDespacho}</span></div></div>
            <a className="cbox reveal d3" href={SITE.instagram} target="_blank" rel="noopener noreferrer"><span className="ci"><Icon name="instagram" /></span><div><b>Instagram</b><span>Conéctate con nosotros</span></div></a>
          </div>
          <div className="cobertura reveal">
            <div className="cob-head">
              <span className="eyebrow">Cobertura</span>
              <h3>Presencia y despacho a nivel nacional</h3>
              <p>Sede fiscal en Los Teques y almacenes en Valencia, Maracay y San Antonio de Los Altos, desde donde despachamos a todo el país.</p>
            </div>
            <div className="cob-body">
              <div className="cob-map">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/venezuela.svg" alt="Mapa de Venezuela — cobertura nacional" />
                {COBERTURA.map((m) => (
                  <span className={`vpin${m.hq ? " hq" : ""}`} key={m.c} style={{ left: `${m.l}%`, top: `${m.tp}%` }}>
                    <span className="tip">{m.c}</span>
                    <span className="dot" />
                  </span>
                ))}
              </div>
              <div className="cob-side">
                <div className="cob-grid">
                  {COBERTURA.map((m) => (
                    <div className={`cob-pin${m.hq ? " hq" : ""}`} key={m.c}>
                      <span className="pinic"><Icon name="pin" /></span>
                      <b>{m.c}</b>
                      <span>{m.t}</span>
                    </div>
                  ))}
                </div>
                <div className="cob-badge"><span><Icon name="truck" /> Despacho a todo el país</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap">
          <p className="reveal" style={{ maxWidth: 720, margin: "0 auto 28px", textAlign: "center", color: "#c3ccd4", fontSize: 15, fontStyle: "italic" }}>
            Gracias por confiar en nosotros. En cada producto, cada envío y cada asesoría, reafirmamos nuestro compromiso con la industria venezolana. Estamos aquí para acompañarles, con soluciones confiables y atención personalizada.
          </p>
          <div className="fgrid">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="flogo" src="/logo-white.png" alt={SITE.nombre} />
              <p style={{ maxWidth: 300 }}>{SITE.descripcion}</p>
            </div>
            <div>
              <h4>Secciones</h4>
              <p><a href="#nosotros">Quiénes somos</a></p>
              <p><a href="#productos">Líneas de productos</a></p>
              <p><a href="#distingue">Lo que nos distingue</a></p>
              <p><a href="#cotizacion">Cotización</a></p>
            </div>
            <div>
              <h4>Contacto</h4>
              <p>{SITE.telefono}</p>
              <p>{SITE.telefono2}</p>
              <p>{SITE.email}</p>
              <p>{SITE.ubicacion}</p>
            </div>
            <div>
              <h4>Horario</h4>
              <p>{SITE.horario}</p>
              <p>{SITE.horarioDespacho}</p>
              <a className="btn btn-wa" href={waLink("Hola, quisiera solicitar una cotización.")} target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}><Icon name="whatsapp" /> WhatsApp</a>
            </div>
          </div>
          <div className="fbot">
            <span>© {new Date().getFullYear()} {SITE.nombre} · Todos los derechos reservados</span>
            <span>RIF {SITE.rif}</span>
          </div>
        </div>
      </footer>

      <a className="wa" href={waLink("Hola, quisiera solicitar una cotización.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={30} /></a>
      <ChatWidget />
      <ScrollAnimations />
    </>
  );
}
