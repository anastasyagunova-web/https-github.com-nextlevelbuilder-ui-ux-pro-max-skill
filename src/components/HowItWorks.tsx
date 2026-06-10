"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es" }

const steps = [
  {
    num: "01",
    titleEn: "Take the goal quiz.",
    titleEs: "Haz el cuestionario de objetivos.",
    descEn: "Tell us your goal. Lose weight, tone up, build muscle, or improve your lifestyle. We personalise your plan before you even start.",
    descEs: "Cuéntanos tu objetivo. Perder peso, tonificar, ganar músculo o mejorar tu estilo de vida. Personalizamos tu plan antes de que empieces.",
  },
  {
    num: "02",
    titleEn: "Join the community.",
    titleEs: "Únete a la comunidad.",
    descEn: "Get instant access to your WhatsApp group, daily morning workout drops, nutrition guidance, and motivational content.",
    descEs: "Obtén acceso inmediato a tu grupo de WhatsApp, entrenamientos matutinos diarios, orientación nutricional y contenido motivacional.",
  },
  {
    num: "03",
    titleEn: "Track your transformation.",
    titleEs: "Sigue tu transformación.",
    descEn: "Your personal progress tracker keeps you accountable every single day. Check off workouts, log habits, watch yourself transform.",
    descEs: "Tu seguimiento personal te mantiene responsable cada día. Marca los entrenamientos, registra hábitos y observa tu transformación.",
  },
];

export default function HowItWorks({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("fade-in-visible"); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll(".fade-in-el").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="py-32 px-6 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-white text-5xl md:text-6xl text-center mb-20 fade-in-el opacity-0 translate-y-8 transition-all duration-700" style={{ letterSpacing: "0.02em" }}>
          {lang === "en" ? "How It Works" : "Cómo Funciona"}
        </h2>
        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-[#ff0066] to-transparent opacity-40" />
          {steps.map((step, i) => (
            <div
              key={i}
              className="fade-in-el opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div
                className="font-bebas text-8xl text-[#ff0066] mb-4 leading-none"
                style={{ textShadow: "0 0 30px rgba(255,0,102,0.3)" }}
              >
                {step.num}
              </div>
              <h3 className="font-inter font-bold text-white text-xl mb-3">
                {lang === "en" ? step.titleEn : step.titleEs}
              </h3>
              <p className="text-[#888899] font-inter text-sm leading-relaxed">
                {lang === "en" ? step.descEn : step.descEs}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
