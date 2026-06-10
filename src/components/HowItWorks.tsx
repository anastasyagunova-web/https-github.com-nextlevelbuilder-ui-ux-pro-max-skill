"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es"; }

const steps = [
  { num: "01", tEn: "Take the goal quiz.", tEs: "Haz el cuestionario de objetivos.", dEn: "Tell us your goal. Lose weight, tone up, build muscle, or improve your lifestyle. We personalise your plan before you even start.", dEs: "Cuéntanos tu objetivo. Perder peso, tonificar, ganar músculo o mejorar tu estilo de vida. Personalizamos tu plan antes de que empieces." },
  { num: "02", tEn: "Join the community.", tEs: "Únete a la comunidad.", dEn: "Get instant access to your WhatsApp group, daily morning workout drops, nutrition guidance, and motivational content.", dEs: "Obtén acceso inmediato a tu grupo de WhatsApp, entrenamientos matutinos diarios, orientación nutricional y contenido motivacional." },
  { num: "03", tEn: "Track your transformation.", tEs: "Sigue tu transformación.", dEn: "Your personal progress tracker keeps you accountable every single day. Check off workouts, log habits, watch yourself transform.", dEs: "Tu seguimiento personal te mantiene responsable cada día. Marca los entrenamientos, registra hábitos y observa tu transformación." },
];

export default function HowItWorks({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)"; }), { threshold: 0.1 });
    ref.current?.querySelectorAll<HTMLElement>(".fi").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section id="how-it-works" ref={ref} style={{ padding: "120px 24px", background: "#050508" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out", fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "clamp(40px,5vw,64px)", textAlign: "center", marginBottom: 80, letterSpacing: "0.02em" }}>
          {lang === "en" ? "How It Works" : "Cómo Funciona"}
        </h2>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
          <div style={{ position: "absolute", top: 40, left: "16.67%", right: "16.67%", height: 1, background: "linear-gradient(to right, transparent, #ff0066, transparent)", opacity: 0.4 }} className="line-desktop" />
          {steps.map((s, i) => (
            <div key={i} className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: `all 0.7s ease-out ${i * 0.2}s` }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 96, color: "#ff0066", lineHeight: 1, marginBottom: 16, textShadow: "0 0 30px rgba(255,0,102,0.3)" }}>{s.num}</div>
              <h3 style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, color: "#fff", fontSize: 20, marginBottom: 12 }}>{lang === "en" ? s.tEn : s.tEs}</h3>
              <p style={{ color: "#888899", fontFamily: "Inter,sans-serif", fontSize: 14, lineHeight: 1.7 }}>{lang === "en" ? s.dEn : s.dEs}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){#how-it-works [style*="gridTemplateColumns"]{grid-template-columns:1fr !important;} .line-desktop{display:none;}}`}</style>
    </section>
  );
}
