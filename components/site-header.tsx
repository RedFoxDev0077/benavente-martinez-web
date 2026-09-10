"use client";

import { useState } from "react";

const LINKS: [string, string][] = [
  ["#nosotros", "Nosotros"],
  ["#sectores", "Sectores"],
  ["#catalogo", "Productos"],
  ["#contacto", "Contacto"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
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
