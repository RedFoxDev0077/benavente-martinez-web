"use client";

import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import { Icon } from "./icons";

const LINKS: [string, string][] = [
  ["#nosotros", "Nosotros"],
  ["#sectores", "Sectores"],
  ["#productos", "Productos"],
  ["#contacto", "Contacto"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <a className="hideS" href={`tel:${SITE.telefono.replace(/[^0-9+]/g, "")}`}><Icon name="phone" /> {SITE.telefono}</a>
          <a className="hideS" href={`mailto:${SITE.email}`}><Icon name="mail" /> {SITE.email}</a>
          <a className="sp" href={waLink("Hola, quisiera información.")} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> Escríbenos por WhatsApp</a>
        </div>
      </div>
      <header>
        <div className="wrap nav">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo" src="/logo.png" alt="Suministros Técnicos Benavente Martínez" />
          <nav className="navlinks">
            {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="btn btn-accent cta" href="#cotizacion">Solicitar cotización</a>
          <button className="burger" aria-label="Menú" onClick={() => setOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className={`mobile${open ? " open" : ""}`}>
          {LINKS.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="btn btn-accent" href="#cotizacion" onClick={() => setOpen(false)}>Solicitar cotización</a>
        </div>
      </header>
    </>
  );
}
