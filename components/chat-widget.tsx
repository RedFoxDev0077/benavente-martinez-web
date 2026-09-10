"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING =
  "¡Hola! 👋 Soy el asistente de Suministros Técnicos Benavente Martínez. Puedo orientarte sobre productos, sectores, cotizaciones y contacto. ¿En qué te ayudo?";
const SUGERENCIAS = ["¿Qué productos manejan?", "¿Cómo solicito una cotización?", "¿Hacen despacho nacional?", "¿Dónde están ubicados?"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading, open]);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    const next: Msg[] = [...msgs, { role: "user", content: q }];
    setMsgs(next);
    setInput("");
    setLoading(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await r.json().catch(() => ({}));
      const reply = data.reply || data.error || "Disculpa, hubo un problema. Escríbenos por WhatsApp.";
      setMsgs((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: "Disculpa, hubo un problema de conexión. Escríbenos por WhatsApp." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button className="chatfab" onClick={() => setOpen((o) => !o)} aria-label="Abrir asistente">
        <Icon name={open ? "close" : "chat"} size={26} />
      </button>

      {open ? (
        <div className="chatpanel" role="dialog" aria-label="Asistente virtual">
          <div className="chathead">
            <div>
              <b>Asistente virtual</b>
              <span>Normalmente responde en segundos</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar"><Icon name="close" size={18} /></button>
          </div>

          <div className="chatbody" ref={bodyRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`bubble ${m.role}`}>{m.content}</div>
            ))}
            {msgs.length === 1 && !loading ? (
              <div className="sugs">
                {SUGERENCIAS.map((s) => (
                  <button key={s} onClick={() => ask(s)}>{s}</button>
                ))}
              </div>
            ) : null}
            {loading ? (
              <div className="bubble assistant typing"><span></span><span></span><span></span></div>
            ) : null}
          </div>

          <form className="chatform" onSubmit={(e) => { e.preventDefault(); ask(input); }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu pregunta…" maxLength={2000} />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Enviar"><Icon name="send" size={18} /></button>
          </form>
          <div className="chatfoot">Asistente con IA · para precios exactos, solicita tu cotización</div>
        </div>
      ) : null}
    </>
  );
}
