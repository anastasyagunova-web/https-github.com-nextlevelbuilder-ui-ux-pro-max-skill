"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es"; }

const goals = [
  { tEn: "Lose Weight", tEs: "Perder Peso", dEn: "Structured fat loss programming with nutrition support.", dEs: "Programa estructurado de pérdida de grasa con apoyo nutricional." },
  { tEn: "Tone Up", tEs: "Tonificar", dEn: "Sculpt and define without bulk.", dEs: "Esculpe y define sin volumen." },
  { tEn: "Build Muscle", tEs: "Ganar Músculo", dEn: "Progressive strength and hypertrophy programming.", dEs: "Programa progresivo de fuerza e hipertrofia." },
  { tEn: "Better Lifestyle", tEs: "Mejor Estilo de Vida", dEn: "Build sustainable healthy habits that last.", dEs: "Construye hábitos saludables sostenibles que duran." },
];

export default function GoalSelector({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)"; }), { threshold: 0.1 });
    ref.current?.querySelectorAll<HTMLElement>(".fi").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} style={{ padding: "120px 24px", background: "#0d0d14" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h2 className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out", fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "clamp(40px,5vw,64px)", marginBottom: 12, letterSpacing: "0.02em" }}>
          {t("What is your goal?", "¿Cuál es tu objetivo?")}
        </h2>
        <p className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.1s", color: "#888899", fontFamily: "Inter,sans-serif", marginBottom: 48 }}>
          {t("Every Revo plan is built around you specifically.", "Cada plan Revo está construido específicamente para ti.")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
          {goals.map((g, i) => (
            <div key={i} className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: `all 0.7s ease-out ${i * 0.1}s`, padding: 24, textAlign: "left", background: "#050508", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, cursor: "none" }}
              onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(255,0,102,0.6)"; e.currentTarget.style.background = "rgba(255,0,102,0.04)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)"; e.currentTarget.style.background = "#050508"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{lang === "en" ? g.tEn : g.tEs}</div>
              <div style={{ color: "#888899", fontSize: 14, fontFamily: "Inter,sans-serif" }}>{lang === "en" ? g.dEn : g.dEs}</div>
            </div>
          ))}
        </div>
        <a href="#pricing" className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.4s", color: "#ff0066", fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
          onMouseEnter={e => (e.currentTarget.style.color = "#ff4488")} onMouseLeave={e => (e.currentTarget.style.color = "#ff0066")}>
          {t("Start your 7-day free trial and receive your personalised plan.", "Comienza tu prueba gratuita de 7 días y recibe tu plan personalizado.")}
          <i className="ti ti-arrow-right" />
        </a>
      </div>
    </section>
  );
}
