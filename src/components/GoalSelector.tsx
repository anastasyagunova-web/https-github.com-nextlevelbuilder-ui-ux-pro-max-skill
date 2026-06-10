"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es" }

const goals = [
  { titleEn: "Lose Weight", titleEs: "Perder Peso", descEn: "Structured fat loss programming with nutrition support.", descEs: "Programa estructurado de pérdida de grasa con apoyo nutricional." },
  { titleEn: "Tone Up", titleEs: "Tonificar", descEn: "Sculpt and define without bulk.", descEs: "Esculpe y define sin volumen." },
  { titleEn: "Build Muscle", titleEs: "Ganar Músculo", descEn: "Progressive strength and hypertrophy programming.", descEs: "Programa progresivo de fuerza e hipertrofia." },
  { titleEn: "Better Lifestyle", titleEs: "Mejor Estilo de Vida", descEn: "Build sustainable healthy habits that last.", descEs: "Construye hábitos saludables sostenibles que duran." },
];

export default function GoalSelector({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("fade-in-visible"); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll(".fade-in-el").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0d0d14]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bebas text-white text-5xl md:text-6xl mb-4 fade-in-el opacity-0 translate-y-8 transition-all duration-700" style={{ letterSpacing: "0.02em" }}>
          {t("What is your goal?", "¿Cuál es tu objetivo?")}
        </h2>
        <p className="text-[#888899] font-inter mb-12 fade-in-el opacity-0 translate-y-8 transition-all duration-700 delay-100">
          {t("Every Revo plan is built around you specifically.", "Cada plan Revo está construido específicamente para ti.")}
        </p>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {goals.map((g, i) => (
            <div
              key={i}
              className="fade-in-el opacity-0 translate-y-8 transition-all duration-700 p-6 text-left cursor-pointer group"
              style={{
                background: "#050508",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.border = "1px solid rgba(255,0,102,0.6)"; el.style.background = "rgba(255,0,102,0.04)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.border = "1px solid rgba(255,255,255,0.08)"; el.style.background = "#050508"; el.style.transform = "translateY(0)"; }}
            >
              <div className="font-inter font-bold text-white mb-2">{lang === "en" ? g.titleEn : g.titleEs}</div>
              <div className="text-[#888899] text-sm font-inter">{lang === "en" ? g.descEn : g.descEs}</div>
            </div>
          ))}
        </div>
        <a href="#pricing" className="text-[#ff0066] font-inter text-sm font-medium hover:text-pink-300 transition-colors flex items-center justify-center gap-2 fade-in-el opacity-0 translate-y-8 transition-all duration-700">
          {t("Start your 7-day free trial and receive your personalised plan.", "Comienza tu prueba gratuita de 7 días y recibe tu plan personalizado.")}
          <i className="ti ti-arrow-right" />
        </a>
      </div>
      <style>{`.fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
