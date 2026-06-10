"use client";
import { useEffect, useRef } from "react";

interface Props { lang: "en" | "es" }

export default function PricingSection({ lang }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = (en: string, es: string) => lang === "en" ? en : es;

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("fade-in-visible"); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll(".fade-in-el").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "€29",
      original: "€45",
      discount: "-33%",
      featuresEn: ["1 course of choice", "Community access", "Progress tracker", "Daily motivation content"],
      featuresEs: ["1 curso de tu elección", "Acceso a la comunidad", "Seguimiento de progreso", "Contenido motivacional diario"],
      missingEn: ["Daily workout drops", "1:1 consultation"],
      missingEs: ["Entrenamientos diarios", "Consulta 1:1"],
      featured: false,
      badgeEn: "",
      badgeEs: "",
    },
    {
      name: "Pro",
      price: "€49",
      original: "€79",
      discount: "-38%",
      badgeEn: "Most Popular",
      badgeEs: "Más Popular",
      featuresEn: ["All courses", "Community access", "Daily morning workout drops", "Nutrition guidance", "Progress tracker", "Priority support"],
      featuresEs: ["Todos los cursos", "Acceso a la comunidad", "Entrenamientos matutinos diarios", "Orientación nutricional", "Seguimiento de progreso", "Soporte prioritario"],
      missingEn: ["1:1 consultation"],
      missingEs: ["Consulta 1:1"],
      featured: true,
    },
    {
      name: "Elite",
      price: "€79",
      original: "€120",
      discount: "-34%",
      featuresEn: ["Everything in Pro", "Monthly 1:1 consultation with Dana", "Personalised programme adjustments", "Direct WhatsApp access to Dana"],
      featuresEs: ["Todo en Pro", "Consulta mensual 1:1 con Dana", "Ajustes de programa personalizados", "Acceso directo de WhatsApp a Dana"],
      missingEn: [],
      missingEs: [],
      featured: false,
      badgeEn: "",
      badgeEs: "",
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-32 px-6 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-white text-5xl md:text-6xl text-center mb-4 fade-in-el opacity-0 translate-y-8 transition-all duration-700" style={{ letterSpacing: "0.02em" }}>
          {t("Choose your level.", "Elige tu nivel.")}
        </h2>
        <p className="text-[#888899] text-center font-inter mb-16 fade-in-el opacity-0 translate-y-8 transition-all duration-700 delay-100">
          {t("All plans include a 7-day free trial. Cancel anytime.", "Todos los planes incluyen 7 días de prueba gratuita. Cancela cuando quieras.")}
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`fade-in-el opacity-0 translate-y-8 transition-all duration-700 p-8 relative ${plan.featured ? "scale-105 z-10" : ""}`}
              style={{
                background: "#050508",
                border: plan.featured ? "1px solid #ff0066" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                boxShadow: plan.featured ? "0 0 40px rgba(255,0,102,0.25)" : "none",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {plan.badgeEn && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff0066] text-white text-xs px-3 py-1 font-inter font-semibold" style={{ borderRadius: "4px" }}>
                  {lang === "en" ? plan.badgeEn : plan.badgeEs}
                </div>
              )}
              <div className="mb-6">
                <div className="font-bebas text-white text-2xl tracking-wider mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-3">
                  <span className="font-bebas text-white text-5xl">{plan.price}</span>
                  <span className="text-[#888899] line-through text-sm font-inter">{plan.original}</span>
                  <span className="text-[#ff0066] text-sm font-inter font-semibold">{plan.discount}</span>
                </div>
                <div className="text-[#888899] text-xs font-inter mt-1">{t("/month", "/mes")}</div>
              </div>

              <div className="space-y-3 mb-8">
                {(lang === "en" ? plan.featuresEn : plan.featuresEs).map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm font-inter text-[#ccccdd]">
                    <i className="ti ti-check text-[#00aaff] flex-shrink-0" />
                    {f}
                  </div>
                ))}
                {(lang === "en" ? plan.missingEn : plan.missingEs).map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm font-inter text-[#888899]/50">
                    <i className="ti ti-x flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="block w-full text-center py-3 text-[#ff0066] border border-[#ff0066] text-sm font-inter font-semibold transition-all duration-200 hover:bg-[#ff0066] hover:text-white"
                style={{ borderRadius: "4px" }}
              >
                {t("Start Free Trial", "Comenzar Prueba Gratis")}
              </a>
            </div>
          ))}
        </div>

        <p className="text-[#888899] text-center text-xs font-inter mt-8 fade-in-el opacity-0 translate-y-8 transition-all duration-700">
          {t("No credit card required to start your free trial.", "No se requiere tarjeta de crédito para iniciar tu prueba gratuita.")}
        </p>
      </div>
      <style>{`.fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
