"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";

export default function QuoteForm() {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [detalle, setDetalle] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      "Hola, quisiera solicitar una cotización.\n" +
      `Nombre / empresa: ${nombre || "—"}\n` +
      `Contacto: ${contacto || "—"}\n` +
      `Producto(s) y cantidad: ${detalle || "—"}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="panel" onSubmit={enviar}>
      <h3>Solicita tu cotización</h3>
      <p style={{ color: "#c3ccd8", marginTop: 0 }}>Cuéntanos qué necesitas y te respondemos a la brevedad por WhatsApp.</p>
      <label className="field"><input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre y empresa" /></label>
      <label className="field"><input value={contacto} onChange={(e) => setContacto(e.target.value)} placeholder="Correo o WhatsApp" /></label>
      <label className="field"><textarea rows={3} value={detalle} onChange={(e) => setDetalle(e.target.value)} placeholder="Producto(s) y cantidad aproximada" /></label>
      <button className="btn btn-accent" style={{ width: "100%", justifyContent: "center" }}>Enviar solicitud por WhatsApp</button>
    </form>
  );
}
