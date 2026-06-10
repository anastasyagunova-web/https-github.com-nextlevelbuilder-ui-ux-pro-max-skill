"use client";
import { useEffect, useRef, useState } from "react";

interface StatsBarProps { lang: "en" | "es"; }

export default function StatsBar({ lang }: StatsBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !triggered) {
        setTriggered(true);
        const start = performance.now();
        const duration = 1800;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(eased * 2000));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [triggered]);

  const stats = [
    { numEn: `${count.toLocaleString()}+`, numEs: `${count.toLocaleString()}+`, labelEn: "Members", labelEs: "Miembros" },
    { numEn: "Puerto Banús", numEs: "Puerto Banús", labelEn: "Marbella", labelEs: "Marbella" },
    { numEn: "8", numEs: "8", labelEn: "Week Programmes", labelEs: "Semanas de Programa" },
    { numEn: "UK · EU · UAE", numEs: "UK · EU · UAE", labelEn: "International", labelEs: "Internacional" },
  ];

  return (
    <div ref={ref} style={{ background: "#0d0d14", borderTop: "2px solid #ff0066", padding: "24px 24px", animation: "neonPulse 3s ease-in-out infinite" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, color: "#ff0066", letterSpacing: "0.05em" }}>
              {lang === "en" ? s.numEn : s.numEs}
            </div>
            <div style={{ color: "#888899", fontSize: 13, fontFamily: "Inter, sans-serif", marginTop: 4 }}>
              {lang === "en" ? s.labelEn : s.labelEs}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes neonPulse { 0%,100% { border-color: rgba(255,0,102,0.4); } 50% { border-color: rgba(255,0,102,1); } }
        @media (max-width: 640px) { div[style*="gridTemplateColumns"] { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </div>
  );
}
