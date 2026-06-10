"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es"; }

export default function PricingSection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)"; }), { threshold: 0.1 });
    ref.current?.querySelectorAll<HTMLElement>(".fi").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const plans = [
    { name: "Starter", price: "€29", original: "€45", discount: "-33%", featEn: ["1 course of choice", "Community access", "Progress tracker", "Daily motivation content"], featEs: ["1 curso de tu elección", "Acceso a la comunidad", "Seguimiento de progreso", "Contenido motivacional diario"], missingEn: ["Daily workout drops", "1:1 consultation"], missingEs: ["Entrenamientos diarios", "Consulta 1:1"], featured: false },
    { name: "Pro", price: "€49", original: "€79", discount: "-38%", badgeEn: "Most Popular", badgeEs: "Más Popular", featEn: ["All courses", "Community access", "Daily morning workout drops", "Nutrition guidance", "Progress tracker", "Priority support"], featEs: ["Todos los cursos", "Acceso a la comunidad", "Entrenamientos matutinos diarios", "Orientación nutricional", "Seguimiento de progreso", "Soporte prioritario"], missingEn: ["1:1 consultation"], missingEs: ["Consulta 1:1"], featured: true },
    { name: "Elite", price: "€79", original: "€120", discount: "-34%", featEn: ["Everything in Pro", "Monthly 1:1 consultation with Dana", "Personalised programme adjustments", "Direct WhatsApp access to Dana"], featEs: ["Todo en Pro", "Consulta mensual 1:1 con Dana", "Ajustes de programa personalizados", "Acceso directo de WhatsApp a Dana"], missingEn: [], missingEs: [], featured: false },
  ];
  return (
    <section id="pricing" ref={ref} style={{ padding: "120px 24px", background: "#0d0d14" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out", fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "clamp(40px,5vw,64px)", textAlign: "center", marginBottom: 12, letterSpacing: "0.02em" }}>{t("Choose your level.", "Elige tu nivel.")}</h2>
        <p className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.1s", color: "#888899", textAlign: "center", fontFamily: "Inter,sans-serif", marginBottom: 64 }}>{t("All plans include a 7-day free trial. Cancel anytime.", "Todos los planes incluyen 7 días de prueba gratuita. Cancela cuando quieras.")}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, alignItems: "start" }}>
          {plans.map((plan, i) => (
            <div key={i} className="fi" style={{ opacity: 0, transform: plan.featured ? "translateY(32px) scale(1.03)" : "translateY(32px)", transition: `all 0.7s ease-out ${i * 0.15}s`, position: "relative", padding: 32, background: "#050508", borderRadius: 4, border: plan.featured ? "1px solid #ff0066" : "1px solid rgba(255,255,255,0.08)", boxShadow: plan.featured ? "0 0 40px rgba(255,0,102,0.2)" : "none" }}>
              {plan.featured && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#ff0066", color: "#fff", fontSize: 12, padding: "4px 12px", borderRadius: 4, fontFamily: "Inter,sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}>
                  {lang === "en" ? plan.badgeEn : plan.badgeEs}
                </div>
              )}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: 24, letterSpacing: "0.05em", marginBottom: 4 }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: 52 }}>{plan.price}</span>
                  <span style={{ color: "#888899", textDecoration: "line-through", fontSize: 14, fontFamily: "Inter,sans-serif" }}>{plan.original}</span>
                  <span style={{ color: "#ff0066", fontSize: 14, fontFamily: "Inter,sans-serif", fontWeight: 600 }}>{plan.discount}</span>
                </div>
                <div style={{ color: "#888899", fontSize: 12, fontFamily: "Inter,sans-serif" }}>{t("/month", "/mes")}</div>
              </div>
              <div style={{ marginBottom: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                {(lang === "en" ? plan.featEn : plan.featEs).map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontFamily: "Inter,sans-serif", color: "#ccccdd" }}>
                    <i className="ti ti-check" style={{ color: "#00aaff", flexShrink: 0 }} />{f}
                  </div>
                ))}
                {(lang === "en" ? plan.missingEn : plan.missingEs).map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontFamily: "Inter,sans-serif", color: "rgba(136,136,153,0.4)" }}>
                    <i className="ti ti-x" style={{ flexShrink: 0 }} />{f}
                  </div>
                ))}
              </div>
              <a href="#" style={{ display: "block", width: "100%", textAlign: "center", padding: "12px 0", color: "#ff0066", border: "1px solid #ff0066", borderRadius: 4, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "all 0.2s", boxSizing: "border-box" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#ff0066"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ff0066"; }}>
                {t("Start Free Trial", "Comenzar Prueba Gratis")}
              </a>
            </div>
          ))}
        </div>
        <p className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.5s", color: "#888899", textAlign: "center", fontSize: 13, fontFamily: "Inter,sans-serif", marginTop: 32 }}>
          {t("No credit card required to start your free trial.", "No se requiere tarjeta de crédito para iniciar tu prueba gratuita.")}
        </p>
      </div>
      <style>{`@media(max-width:768px){#pricing [style*="gridTemplateColumns"]{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
