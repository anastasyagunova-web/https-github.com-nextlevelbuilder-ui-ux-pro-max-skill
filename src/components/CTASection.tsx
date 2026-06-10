"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es" }

export default function CTASection({ lang }: Props) {
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
    <section ref={ref} className="relative py-40 px-6 overflow-hidden bg-[#050508]">
      {/* Animated diagonal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px"
            style={{
              width: "200%",
              left: "-50%",
              top: `${10 + i * 12}%`,
              background: i % 2 === 0 ? "rgba(255,0,102,0.06)" : "rgba(0,102,255,0.06)",
              transform: "rotate(-25deg)",
              animation: `diagonalMove ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2
          className="font-bebas text-white mb-6 fade-in-el opacity-0 translate-y-8 transition-all duration-700"
          style={{ fontSize: "clamp(48px, 8vw, 100px)", letterSpacing: "0.02em", lineHeight: 1 }}
        >
          {t("YOUR TRANSFORMATION STARTS NOW.", "TU TRANSFORMACIÓN COMIENZA AHORA.")}
        </h2>
        <p className="text-[#888899] font-inter text-lg mb-10 fade-in-el opacity-0 translate-y-8 transition-all duration-700 delay-100">
          {t("Seven days free. No commitment. No excuses.", "Siete días gratis. Sin compromiso. Sin excusas.")}
        </p>
        <a
          href="#pricing"
          className="inline-block px-12 py-5 bg-[#ff0066] text-white font-inter font-semibold text-base fade-in-el opacity-0 translate-y-8 transition-all duration-700 delay-200"
          style={{ borderRadius: "4px" }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 50px rgba(255,0,102,0.7)")}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
        >
          {t("Start Your Free Trial", "Comienza Tu Prueba Gratis")}
        </a>
        <p className="text-[#888899] text-xs font-inter mt-6 fade-in-el opacity-0 translate-y-8 transition-all duration-700 delay-300">
          {t("7 days free — then from €29 per month — cancel anytime", "7 días gratis — luego desde €29 al mes — cancela cuando quieras")}
        </p>
      </div>

      <style>{`
        @keyframes diagonalMove { from { transform: rotate(-25deg) translateX(-20%); } to { transform: rotate(-25deg) translateX(20%); } }
        .fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}
