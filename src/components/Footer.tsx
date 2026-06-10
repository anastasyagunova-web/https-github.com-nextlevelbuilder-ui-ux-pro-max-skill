"use client";
interface Props { lang: "en" | "es"; setLang: (l: "en" | "es") => void }

export default function Footer({ lang, setLang }: Props) {
  const t = (en: string, es: string) => lang === "en" ? en : es;
  const cols = [
    { headEn: "About", headEs: "Sobre", linksEn: ["Philosophy", "Dana", "Our Studio"], linksEs: ["Filosofía", "Dana", "Nuestro Studio"] },
    { headEn: "Platform", headEs: "Plataforma", linksEn: ["Community", "Courses", "Progress Tracker"], linksEs: ["Comunidad", "Cursos", "Seguimiento"] },
    { headEn: "Support", headEs: "Soporte", linksEn: ["Contact", "Privacy Policy", "Terms"], linksEs: ["Contacto", "Privacidad", "Términos"] },
  ];

  return (
    <footer className="bg-[#030305] pt-16 pb-8 px-6 border-t-2 border-[#ff0066]" style={{ borderColor: "#ff0066", animation: "neonPulse 3s ease-in-out infinite" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="font-bebas text-white text-3xl tracking-wider">
                R<span className="inline-block relative">E<span className="absolute left-0 top-1/2 w-full h-[2px] bg-white -translate-y-1/2"></span></span>VO
              </span>
              <span className="text-[#ff0066] text-[8px] tracking-[0.4em] font-inter uppercase">Fitness Class</span>
            </div>
            <p className="text-[#888899] text-sm font-inter mb-2">Revo Fitness Class · Puerto Banús, Marbella, Spain</p>
            <a href="mailto:info@revofitnessclass.com" className="text-[#888899] text-sm font-inter hover:text-white transition-colors">info@revofitnessclass.com</a>
            <div className="flex gap-4 mt-6">
              {[{ icon: "ti-brand-instagram", label: "Instagram" }, { icon: "ti-brand-tiktok", label: "TikTok" }, { icon: "ti-brand-facebook", label: "Facebook" }].map(s => (
                <a key={s.label} href="#" className="flex items-center gap-2 text-[#888899] hover:text-[#ff0066] transition-colors text-sm font-inter">
                  <i className={`ti ${s.icon}`} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <div className="font-inter font-semibold text-white text-sm mb-4">{lang === "en" ? col.headEn : col.headEs}</div>
              <div className="space-y-3">
                {(lang === "en" ? col.linksEn : col.linksEs).map((link, j) => (
                  <a key={j} href="#" className="block text-[#888899] text-sm font-inter hover:text-white transition-colors">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#888899] text-xs font-inter">{t("© 2025 Elevate with Revo. All rights reserved.", "© 2025 Elevate with Revo. Todos los derechos reservados.")}</span>
          <span className="text-[#ff0066] text-xs font-inter italic">{t("Reinvent Yourself.", "Reinvéntate.")}</span>
          <div className="flex gap-3">
            <button onClick={() => setLang("en")} className={`text-xs font-inter ${lang === "en" ? "text-[#ff0066]" : "text-[#888899] hover:text-white"} transition-colors`}>EN</button>
            <span className="text-white/20">|</span>
            <button onClick={() => setLang("es")} className={`text-xs font-inter ${lang === "es" ? "text-[#ff0066]" : "text-[#888899] hover:text-white"} transition-colors`}>ES</button>
          </div>
        </div>
      </div>
      <style>{`@keyframes neonPulse { 0%,100%{border-color:rgba(255,0,102,0.4)} 50%{border-color:rgba(255,0,102,1)} }`}</style>
    </footer>
  );
}
