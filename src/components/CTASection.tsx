"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es"; }

export default function CTASection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)"; }), { threshold: 0.1 });
    ref.current?.querySelectorAll<HTMLElement>(".fi").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} style={{ position: "relative", padding: "160px 24px", background: "#050508", overflow: "hidden" }}>
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{ position: "absolute", height: 1, width: "200%", left: "-50%", top: `${10 + i * 11}%`, background: i % 2 === 0 ? "rgba(255,0,102,0.06)" : "rgba(0,102,255,0.06)", transform: "rotate(-20deg)", animation: `diagMove ${8 + i * 1.5}s linear infinite`, animationDelay: `${i * 1.2}s` }} />
      ))}
      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h2 className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out", fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "clamp(48px,8vw,96px)", lineHeight: 1, marginBottom: 24, letterSpacing: "0.02em" }}>
          {t("YOUR TRANSFORMATION STARTS NOW.", "TU TRANSFORMACIÓN COMIENZA AHORA.")}
        </h2>
        <p className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.1s", color: "#888899", fontFamily: "Inter,sans-serif", fontSize: 18, marginBottom: 40 }}>
          {t("Seven days free. No commitment. No excuses.", "Siete días gratis. Sin compromiso. Sin excusas.")}
        </p>
        <a href="#pricing" className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.2s", display: "inline-block", padding: "20px 48px", background: "#ff0066", color: "#fff", fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", borderRadius: 4 }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 50px rgba(255,0,102,0.7)")} onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
          {t("Start Your Free Trial", "Comienza Tu Prueba Gratis")}
        </a>
        <p className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.3s", color: "#888899", fontSize: 13, fontFamily: "Inter,sans-serif", marginTop: 24 }}>
          {t("7 days free — then from €29 per month — cancel anytime", "7 días gratis — luego desde €29 al mes — cancela cuando quieras")}
        </p>
      </div>
      <style>{`@keyframes diagMove { from { transform: rotate(-20deg) translateX(-10%); } to { transform: rotate(-20deg) translateX(10%); } }`}</style>
    </section>
  );
}
