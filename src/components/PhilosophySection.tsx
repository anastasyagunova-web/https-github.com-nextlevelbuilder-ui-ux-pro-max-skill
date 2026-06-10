"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es"; }

export default function PhilosophySection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)"; }), { threshold: 0.1 });
    ref.current?.querySelectorAll<HTMLElement>(".fi").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const values = [
    { icon: "ti-barbell", tEn: "Strength First", tEs: "Fuerza Primero", dEn: "We build real physical strength, not just aesthetics.", dEs: "Construimos fuerza física real, no solo estética." },
    { icon: "ti-target", tEn: "Results Driven", tEs: "Orientados a Resultados", dEn: "Every programme is designed around measurable outcomes.", dEs: "Cada programa está diseñado en torno a resultados medibles." },
    { icon: "ti-users", tEn: "Community", tEs: "Comunidad", dEn: "You are never training alone in the Revo ecosystem.", dEs: "Nunca entrenas solo en el ecosistema Revo." },
  ];
  return (
    <section id="philosophy" ref={ref} style={{ position: "relative", padding: "120px 24px", background: "#050508", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)", fontFamily: "'Bebas Neue',sans-serif", fontSize: 220, color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", letterSpacing: "0.05em", pointerEvents: "none" }}>REVO</div>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
        <div className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out" }}>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "clamp(48px,5vw,72px)", lineHeight: 1, marginBottom: 24, letterSpacing: "0.02em" }}>
            {t("We don't do average.", "No somos del montón.")}
          </h2>
          <p style={{ color: "#ccccdd", fontFamily: "Inter,sans-serif", lineHeight: 1.7, fontSize: 16, marginBottom: 24 }}>
            {t("Revo was born in the heart of Puerto Banús with one belief — that fitness should transform you completely. Not just your body, but your mindset, your energy, your life. Every class, every challenge, every drop of sweat is designed with one goal: real, measurable results. No shortcuts. No excuses. Just you, the work, and the community pushing you forward.",
              "Revo nació en el corazón de Puerto Banús con una sola creencia: que el fitness debe transformarte por completo. No solo tu cuerpo, sino tu mentalidad, tu energía, tu vida. Cada clase, cada reto, cada gota de sudor está diseñada con un objetivo: resultados reales y medibles. Sin atajos. Sin excusas. Solo tú, el trabajo y la comunidad empujándote hacia adelante.")}
          </p>
          <p style={{ color: "#ff0066", fontFamily: "Inter,sans-serif", fontStyle: "italic", fontSize: 18 }}>{t("Reinvent Yourself.", "Reinvéntate.")}</p>
        </div>
        <div className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.2s", background: "#0d0d14", borderRadius: 4, padding: 32, border: "1px solid rgba(0,170,255,0.3)", boxShadow: "0 0 30px rgba(0,102,255,0.12)" }}>
          {values.map((v, i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", paddingBottom: i < 2 ? 24 : 0, marginBottom: i < 2 ? 24 : 0, borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <i className={`ti ${v.icon}`} style={{ fontSize: 24, color: "#00aaff", marginTop: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, color: "#fff", marginBottom: 4 }}>{lang === "en" ? v.tEn : v.tEs}</div>
                <div style={{ color: "#888899", fontSize: 14, fontFamily: "Inter,sans-serif" }}>{lang === "en" ? v.dEn : v.dEs}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){#philosophy [style*="gridTemplateColumns"]{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
