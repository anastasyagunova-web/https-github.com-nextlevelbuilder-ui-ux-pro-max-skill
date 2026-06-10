"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es" }

const testimonials = [
  { initials: "SM", nameEn: "Sarah M.", en: "Day 14 done. I never thought I would look forward to Monday mornings.", es: "Día 14 completado. Nunca pensé que esperaría con ganas los lunes por la mañana." },
  { initials: "CR", nameEn: "Carlos R.", en: "Down 4kg in three weeks. The daily drops changed my routine completely.", es: "Bajé 4kg en tres semanas. Los entrenamientos diarios cambiaron mi rutina por completo." },
  { initials: "ET", nameEn: "Emma T.", en: "Dana replied to my question within minutes. This community is different.", es: "Dana respondió a mi pregunta en minutos. Esta comunidad es diferente." },
];

export default function CommunitySection({ lang }: Props) {
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
    <section id="community" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-0 bg-[#050508]/75" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-el opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="font-bebas text-white text-5xl md:text-6xl mb-6" style={{ letterSpacing: "0.02em" }}>
            {t("You are never training alone.", "Nunca entrenas solo.")}
          </h2>
          <p className="text-[#888899] font-inter max-w-2xl mx-auto leading-relaxed">
            {t(
              "The Revo community is where transformation actually happens. Daily workout drops every morning. Nutrition tips. Accountability check-ins. Real people, real conversations, real support — every single day.",
              "La comunidad Revo es donde ocurre la transformación real. Entrenamientos diarios cada mañana. Consejos de nutrición. Seguimiento de responsabilidad. Personas reales, conversaciones reales, apoyo real, cada día."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t2, i) => (
            <div
              key={i}
              className="fade-in-el opacity-0 translate-y-8 transition-all duration-700 p-6"
              style={{
                background: "rgba(13,13,20,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ff0066] flex items-center justify-center text-white font-inter font-bold text-sm flex-shrink-0">
                  {t2.initials}
                </div>
                <span className="text-white font-inter font-medium text-sm">{t2.nameEn}</span>
              </div>
              <p className="text-[#ccccdd] font-inter text-sm leading-relaxed">
                {lang === "en" ? t2.en : t2.es}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center fade-in-el opacity-0 translate-y-8 transition-all duration-700">
          <a
            href="#pricing"
            className="inline-block px-8 py-4 text-white font-semibold bg-[#ff0066] text-sm"
            style={{ borderRadius: "4px" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(255,0,102,0.6)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
          >
            {lang === "en" ? "Join the community free for 7 days" : "Únete a la comunidad gratis 7 días"}
          </a>
        </div>
      </div>
      <style>{`.fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
