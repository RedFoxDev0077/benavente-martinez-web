"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

export default function ScrollAnimations() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    // Reveal on scroll
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Count-up for [data-count]
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          cio.unobserve(el);
          const to = Number(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          const dur = 1200; const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const val = Math.floor((1 - Math.pow(1 - p, 3)) * to);
            el.textContent = val.toLocaleString("es-VE") + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));

    // Header shadow + scroll-to-top visibility
    const onScroll = () => {
      const y = window.scrollY;
      document.querySelector("header")?.classList.toggle("scrolled", y > 8);
      setTop(y > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); cio.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <button
      className={`toTop${top ? " show" : ""}`}
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Icon name="chevronUp" size={22} />
    </button>
  );
}
