"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es" }

export default function DanaSection({ lang }: Props) {
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
    <section id="dana" ref={ref} className="py-32 px-6 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left — portrait */}
        <div className="fade-in-el opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center md:items-start">
          <div
            className="w-full max-w-sm aspect-[3/4] overflow-hidden"
            style={{ boxShadow: "0 0 0 1px rgba(255,0,102,0.5), 0 0 40px rgba(255,0,102,0.3)", borderRadius: "4px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80"
              alt="Dana — Head Trainer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 text-center md:text-left">
            <div className="font-bebas text-white text-3xl tracking-wider">DANA</div>
            <div className="text-[#888899] text-sm font-inter">{t("Head Trainer and Founder", "Entrenadora Principal y Fundadora")}</div>
          </div>
        </div>

        {/* Right — text */}
        <div className="fade-in-el opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-6">
          <h2 className="font-bebas text-white text-5xl md:text-6xl leading-none" style={{ letterSpacing: "0.02em" }}>
            {t("The woman behind Revo.", "La mujer detrás de Revo.")}
          </h2>
          <p className="text-[#ccccdd] font-inter leading-relaxed">
            {t(
              "Dana built Revo from the ground up in Marbella — not as a gym, but as a movement. With years of professional training experience and a philosophy built on strength, science, and real human connection, she has transformed hundreds of bodies and lives. When you join Elevate with Revo, you train with Dana, not just a platform.",
              "Dana construyó Revo desde cero en Marbella, no como un gimnasio, sino como un movimiento. Con años de experiencia en entrenamiento profesional y una filosofía basada en la fuerza, la ciencia y la conexión humana real, ha transformado cientos de cuerpos y vidas. Cuando te unes a Elevate with Revo, entrenas con Dana, no solo con una plataforma."
            )}
          </p>

          {/* Video placeholder */}
          <div
            className="p-8 text-center cursor-pointer transition-all duration-300 group"
            style={{ background: "#050508", border: "1px solid rgba(0,170,255,0.4)", borderRadius: "4px", boxShadow: "0 0 20px rgba(0,102,255,0.1)" }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.border = "1px solid rgba(255,0,102,0.6)"; el.style.boxShadow = "0 0 30px rgba(255,0,102,0.2)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.border = "1px solid rgba(0,170,255,0.4)"; el.style.boxShadow = "0 0 20px rgba(0,102,255,0.1)"; }}
          >
            <i className="ti ti-player-play text-5xl text-white/60 group-hover:text-white transition-colors" />
            <p className="mt-4 text-[#888899] text-sm font-inter">
              {t("Welcome video — unlocked with your free trial.", "Video de bienvenida — disponible con tu prueba gratuita.")}
            </p>
          </div>
        </div>
      </div>

      <style>{`.fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
