"use client";

import { Icon } from "./icons";

export default function SumibotCTA() {
  return (
    <div className="sumibot-cta reveal">
      <div className="sumibot-ic"><Icon name="chat" size={24} /></div>
      <div className="sumibot-tx">
        <b>¿Buscas un producto o un precio?</b>
        <span>Pregúntale a <strong>Sumibot</strong>, nuestro asistente virtual con IA — te responde al instante.</span>
      </div>
      <button className="btn btn-accent" onClick={() => window.dispatchEvent(new Event("sumibot:open"))}>
        Chatear con Sumibot <Icon name="arrowUR" />
      </button>
    </div>
  );
}
