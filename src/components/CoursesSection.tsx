"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es" }

const courses = [
  {
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    tagEn: "FAT LOSS", tagEs: "PÉRDIDA DE GRASA",
    nameEn: "Revo Reset", nameEs: "Revo Reset",
    descEn: "Full body transformation. Strength training, nutrition plan, weekly check-ins.",
    descEs: "Transformación corporal completa. Entrenamiento de fuerza, plan nutricional, seguimiento semanal.",
    planEn: "Included in Pro and Elite", planEs: "Incluido en Pro y Elite",
  },
  {
    img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&q=80",
    tagEn: "SCULPT", tagEs: "ESCULPIR",
    nameEn: "Revo Sculpt", nameEs: "Revo Sculpt",
    descEn: "Glutes, legs, upper body. 45-minute sessions designed to sculpt and define.",
    descEs: "Glúteos, piernas, parte superior. Sesiones de 45 minutos para esculpir y definir.",
    planEn: "Included in Pro and Elite", planEs: "Incluido en Pro y Elite",
  },
  {
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    tagEn: "STRENGTH", tagEs: "FUERZA",
    nameEn: "Build with Revo", nameEs: "Build with Revo",
    descEn: "Progressive overload programming for real muscle and strength gains.",
    descEs: "Programación de sobrecarga progresiva para ganar músculo y fuerza reales.",
    planEn: "Included in all plans", planEs: "Incluido en todos los planes",
  },
];

export default function CoursesSection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("fade-in-visible"); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll(".fade-in-el").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="courses" ref={ref} className="py-32 px-6 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-white text-5xl md:text-6xl text-center mb-4 fade-in-el opacity-0 translate-y-8 transition-all duration-700" style={{ letterSpacing: "0.02em" }}>
          {lang === "en" ? "Train with purpose." : "Entrena con propósito."}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {courses.map((c, i) => (
            <div
              key={i}
              className="fade-in-el opacity-0 translate-y-8 transition-all duration-700 relative overflow-hidden group cursor-pointer"
              style={{ borderRadius: "4px", height: "420px", transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${c.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all duration-300" />
              {/* Pink bottom border on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff0066] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[#ff0066] text-xs tracking-[0.25em] font-inter uppercase mb-2">
                  {lang === "en" ? c.tagEn : c.tagEs}
                </div>
                <div className="font-bebas text-white text-3xl mb-2" style={{ letterSpacing: "0.02em" }}>
                  {lang === "en" ? c.nameEn : c.nameEs}
                </div>
                <p className="text-[#ccccdd] text-xs font-inter mb-3">{lang === "en" ? c.descEn : c.descEs}</p>
                <div className="text-[#888899] text-xs font-inter">{lang === "en" ? c.planEn : c.planEs}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
