"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es" }

export default function PhilosophySection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("fade-in-visible");
      });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll(".fade-in-el").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const values = [
    { icon: "ti-barbell", titleEn: "Strength First", titleEs: "Fuerza Primero", descEn: "We build real physical strength, not just aesthetics.", descEs: "Construimos fuerza física real, no solo estética." },
    { icon: "ti-target", titleEn: "Results Driven", titleEs: "Orientados a Resultados", descEn: "Every programme is designed around measurable outcomes.", descEs: "Cada programa está diseñado en torno a resultados medibles." },
    { icon: "ti-users", titleEn: "Community", titleEs: "Comunidad", descEn: "You are never training alone in the Revo ecosystem.", descEs: "Nunca entrenas solo en el ecosistema Revo." },
  ];

  return (
    <section id="philosophy" ref={ref} className="relative py-32 px-6 bg-[#050508] overflow-hidden">
      {/* Decorative REVO outline */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "220px", color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.04)", lineHeight: 1, letterSpacing: "0.05em", userSelect: "none" }}
        aria-hidden
      >
        REVO
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="fade-in-el opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="font-bebas text-white text-6xl md:text-7xl leading-none mb-6" style={{ letterSpacing: "0.02em" }}>
            {t("We don't do average.", "No somos del montón.")}
          </h2>
          <p className="text-[#ccccdd] font-inter leading-relaxed text-base mb-6">
            {t(
              "Revo was born in the heart of Puerto Banús with one belief — that fitness should transform you completely. Not just your body, but your mindset, your energy, your life. Every class, every challenge, every drop of sweat is designed with one goal: real, measurable results. No shortcuts. No excuses. Just you, the work, and the community pushing you forward.",
              "Revo nació en el corazón de Puerto Banús con una sola creencia: que el fitness debe transformarte por completo. No solo tu cuerpo, sino tu mentalidad, tu energía, tu vida. Cada clase, cada reto, cada gota de sudor está diseñada con un objetivo: resultados reales y medibles. Sin atajos. Sin excusas. Solo tú, el trabajo y la comunidad empujándote hacia adelante."
            )}
          </p>
          <p className="text-[#ff0066] font-inter italic text-lg">{t("Reinvent Yourself.", "Reinvéntate.")}</p>
        </div>

        {/* Right — values card */}
        <div
          className="fade-in-el opacity-0 translate-y-8 transition-all duration-700 delay-200 rounded-sm p-8 space-y-6"
          style={{ background: "#0d0d14", border: "1px solid rgba(0,170,255,0.3)", boxShadow: "0 0 30px rgba(0,102,255,0.15)" }}
        >
          {values.map((v, i) => (
            <div key={i} className="flex gap-4 items-start pb-6 border-b border-white/5 last:border-0 last:pb-0">
              <i className={`ti ${v.icon} text-2xl text-[#00aaff] mt-0.5`} />
              <div>
                <div className="font-inter font-bold text-white mb-1">{lang === "en" ? v.titleEn : v.titleEs}</div>
                <div className="text-[#888899] text-sm font-inter">{lang === "en" ? v.descEn : v.descEs}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`.fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
