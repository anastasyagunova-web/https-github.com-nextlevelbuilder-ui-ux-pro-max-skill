"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es"; }

const testimonials = [
  { initials: "SM", name: "Sarah M.", en: "Day 14 done. I never thought I would look forward to Monday mornings.", es: "Día 14 completado. Nunca pensé que esperaría con ganas los lunes por la mañana." },
  { initials: "CR", name: "Carlos R.", en: "Down 4kg in three weeks. The daily drops changed my routine completely.", es: "Bajé 4kg en tres semanas. Los entrenamientos diarios cambiaron mi rutina por completo." },
  { initials: "ET", name: "Emma T.", en: "Dana replied to my question within minutes. This community is different.", es: "Dana respondió a mi pregunta en minutos. Esta comunidad es diferente." },
];

export default function CommunitySection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)"; }), { threshold: 0.1 });
    ref.current?.querySelectorAll<HTMLElement>(".fi").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section id="community" ref={ref} style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.3 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,8,0.75)" }} />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <div className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out", textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "clamp(40px,5vw,64px)", marginBottom: 24, letterSpacing: "0.02em" }}>
            {t("You are never training alone.", "Nunca entrenas solo.")}
          </h2>
          <p style={{ color: "#888899", fontFamily: "Inter,sans-serif", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            {t("The Revo community is where transformation actually happens. Daily workout drops every morning. Nutrition tips. Accountability check-ins. Real people, real conversations, real support — every single day.",
              "La comunidad Revo es donde ocurre la transformación real. Entrenamientos diarios cada mañana. Consejos de nutrición. Seguimiento de responsabilidad. Personas reales, conversaciones reales, apoyo real, cada día.")}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 48 }}>
          {testimonials.map((t2, i) => (
            <div key={i} className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: `all 0.7s ease-out ${i * 0.15}s`, padding: 24, background: "rgba(13,13,20,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#ff0066", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{t2.initials}</div>
                <span style={{ color: "#fff", fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 14 }}>{t2.name}</span>
              </div>
              <p style={{ color: "#ccccdd", fontFamily: "Inter,sans-serif", fontSize: 14, lineHeight: 1.6 }}>{lang === "en" ? t2.en : t2.es}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="#pricing" className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out 0.45s", display: "inline-block", padding: "16px 32px", background: "#ff0066", color: "#fff", fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", borderRadius: 4 }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(255,0,102,0.6)")} onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
            {t("Join the community free for 7 days", "Únete a la comunidad gratis 7 días")}
          </a>
        </div>
      </div>
      <style>{`@media(max-width:768px){#community [style*="gridTemplateColumns"]{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
