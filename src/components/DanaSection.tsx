"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es"; }

export default function DanaSection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)"; }), { threshold: 0.1 });
    ref.current?.querySelectorAll<HTMLElement>(".fi").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section id="dana" ref={ref} style={{ padding: "120px 24px", background: "#0d0d14" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }}>
        <div className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "100%", maxWidth: 380, aspectRatio: "3/4", overflow: "hidden", borderRadius: 4, boxShadow: "0 0 0 1px rgba(255,0,102,0.5), 0 0 40px rgba(255,0,102,0.25)" }}>
            <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80" alt="Dana" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ marginTop: 16, textAlign: "center" }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: 28, letterSpacing: "0.05em" }}>DANA</div>
            <div style={{ color: "#888899", fontSize: 13, fontFamily: "Inter,sans-serif" }}>{t("Head Trainer and Founder", "Entrenadora Principal y Fundadora")}</div>
          </div>
        </div>
        <div className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.2s" }}>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1, marginBottom: 24, letterSpacing: "0.02em" }}>
            {t("The woman behind Revo.", "La mujer detrás de Revo.")}
          </h2>
          <p style={{ color: "#ccccdd", fontFamily: "Inter,sans-serif", lineHeight: 1.7, fontSize: 16, marginBottom: 32 }}>
            {t("Dana built Revo from the ground up in Marbella — not as a gym, but as a movement. With years of professional training experience and a philosophy built on strength, science, and real human connection, she has transformed hundreds of bodies and lives. When you join Elevate with Revo, you train with Dana, not just a platform.",
              "Dana construyó Revo desde cero en Marbella, no como un gimnasio, sino como un movimiento. Con años de experiencia en entrenamiento profesional y una filosofía basada en la fuerza, la ciencia y la conexión humana real, ha transformado cientos de cuerpos y vidas. Cuando te unes a Elevate with Revo, entrenas con Dana, no solo con una plataforma.")}
          </p>
          <div style={{ padding: 32, textAlign: "center", background: "#050508", borderRadius: 4, border: "1px solid rgba(0,170,255,0.4)", boxShadow: "0 0 20px rgba(0,102,255,0.1)", transition: "all 0.3s", cursor: "none" }}
            onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(255,0,102,0.6)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(255,0,102,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(0,170,255,0.4)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(0,102,255,0.1)"; }}>
            <i className="ti ti-player-play" style={{ fontSize: 48, color: "rgba(255,255,255,0.6)" }} />
            <p style={{ marginTop: 16, color: "#888899", fontSize: 14, fontFamily: "Inter,sans-serif" }}>
              {t("Welcome video — unlocked with your free trial.", "Video de bienvenida — disponible con tu prueba gratuita.")}
            </p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#dana [style*="gridTemplateColumns"]{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
