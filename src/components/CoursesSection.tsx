"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es"; }

const courses = [
  { img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80", tagEn: "FAT LOSS", tagEs: "PÉRDIDA DE GRASA", nameEn: "Revo Reset", descEn: "Full body transformation. Strength training, nutrition plan, weekly check-ins.", descEs: "Transformación corporal completa. Entrenamiento de fuerza, plan nutricional, seguimiento semanal.", planEn: "Included in Pro and Elite", planEs: "Incluido en Pro y Elite" },
  { img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&q=80", tagEn: "SCULPT", tagEs: "ESCULPIR", nameEn: "Revo Sculpt", descEn: "Glutes, legs, upper body. 45-minute sessions designed to sculpt and define.", descEs: "Glúteos, piernas, parte superior. Sesiones de 45 minutos para esculpir y definir.", planEn: "Included in Pro and Elite", planEs: "Incluido en Pro y Elite" },
  { img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80", tagEn: "STRENGTH", tagEs: "FUERZA", nameEn: "Build with Revo", descEn: "Progressive overload programming for real muscle and strength gains.", descEs: "Programación de sobrecarga progresiva para ganar músculo y fuerza reales.", planEn: "Included in all plans", planEs: "Incluido en todos los planes" },
];

export default function CoursesSection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)"; }), { threshold: 0.1 });
    ref.current?.querySelectorAll<HTMLElement>(".fi").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section id="courses" ref={ref} style={{ padding: "120px 24px", background: "#050508" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2 className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.7s ease-out", fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: "clamp(40px,5vw,64px)", textAlign: "center", marginBottom: 64, letterSpacing: "0.02em" }}>
          {lang === "en" ? "Train with purpose." : "Entrena con propósito."}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {courses.map((c, i) => (
            <div key={i} className="fi" style={{ opacity: 0, transform: "translateY(32px)", transition: `all 0.7s ease-out ${i * 0.15}s`, position: "relative", height: 420, borderRadius: 4, overflow: "hidden", cursor: "none" }}
              onMouseEnter={e => { const img = e.currentTarget.querySelector<HTMLDivElement>(".course-img"); if (img) img.style.transform = "scale(1.05)"; const overlay = e.currentTarget.querySelector<HTMLDivElement>(".course-overlay"); if (overlay) overlay.style.background = "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.25) 100%)"; const border = e.currentTarget.querySelector<HTMLDivElement>(".course-border"); if (border) border.style.opacity = "1"; }}
              onMouseLeave={e => { const img = e.currentTarget.querySelector<HTMLDivElement>(".course-img"); if (img) img.style.transform = "scale(1)"; const overlay = e.currentTarget.querySelector<HTMLDivElement>(".course-overlay"); if (overlay) overlay.style.background = "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%)"; const border = e.currentTarget.querySelector<HTMLDivElement>(".course-border"); if (border) border.style.opacity = "0"; }}>
              <div className="course-img" style={{ position: "absolute", inset: 0, backgroundImage: `url(${c.img})`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.4s ease-out" }} />
              <div className="course-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%)", transition: "background 0.3s" }} />
              <div className="course-border" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "#ff0066", opacity: 0, transition: "opacity 0.3s" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24 }}>
                <div style={{ color: "#ff0066", fontSize: 11, letterSpacing: "0.25em", fontFamily: "Inter,sans-serif", textTransform: "uppercase", marginBottom: 8 }}>{lang === "en" ? c.tagEn : c.tagEs}</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: 32, letterSpacing: "0.02em", marginBottom: 8 }}>{c.nameEn}</div>
                <p style={{ color: "#ccccdd", fontSize: 13, fontFamily: "Inter,sans-serif", marginBottom: 12 }}>{lang === "en" ? c.descEn : c.descEs}</p>
                <div style={{ color: "#888899", fontSize: 12, fontFamily: "Inter,sans-serif" }}>{lang === "en" ? c.planEn : c.planEs}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){#courses [style*="gridTemplateColumns"]{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
