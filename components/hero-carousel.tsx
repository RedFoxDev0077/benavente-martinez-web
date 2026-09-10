"use client";

import { useEffect, useState } from "react";

export default function HeroCarousel({ images }: { images: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <>
      <div className="hero-slides" aria-hidden>
        {images.map((src, idx) => (
          <div key={idx} className={`hslide${idx === i ? " on" : ""}`} style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
      <div className="hero-ov" aria-hidden />
      {images.length > 1 ? (
        <div className="hero-dots">
          {images.map((_, idx) => (
            <button key={idx} className={idx === i ? "on" : ""} aria-label={`Imagen ${idx + 1}`} onClick={() => setI(idx)} />
          ))}
        </div>
      ) : null}
    </>
  );
}
