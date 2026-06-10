"use client";
interface Props { lang: "en" | "es"; setLang: (l: "en" | "es") => void; }

export default function Footer({ lang, setLang }: Props) {
  const t = (en: string, es: string) => lang === "en" ? en : es;
  const cols = [
    { hEn: "About", hEs: "Sobre", lEn: ["Philosophy", "Dana", "Our Studio"], lEs: ["Filosofía", "Dana", "Nuestro Studio"] },
    { hEn: "Platform", hEs: "Plataforma", lEn: ["Community", "Courses", "Progress Tracker"], lEs: ["Comunidad", "Cursos", "Seguimiento"] },
    { hEn: "Support", hEs: "Soporte", lEn: ["Contact", "Privacy Policy", "Terms"], lEs: ["Contacto", "Privacidad", "Términos"] },
  ];
  return (
    <footer style={{ background: "#030305", padding: "64px 24px 32px", borderTop: "2px solid #ff0066", animation: "neonPulse 3s ease-in-out infinite" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: 16, lineHeight: 1 }}>
              <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", fontSize: 28, letterSpacing: "0.05em" }}>
                R<span style={{ position: "relative", display: "inline-block" }}>E<span style={{ position: "absolute", left: 0, top: "50%", width: "100%", height: 2, background: "#fff", transform: "translateY(-50%)" }} /></span>VO
              </span>
              <span style={{ color: "#ff0066", fontSize: 8, letterSpacing: "0.4em", fontFamily: "Inter,sans-serif", textTransform: "uppercase" }}>Fitness Class</span>
            </div>
            <p style={{ color: "#888899", fontSize: 14, fontFamily: "Inter,sans-serif", marginBottom: 8 }}>Revo Fitness Class · Puerto Banús, Marbella, Spain</p>
            <a href="mailto:info@revofitnessclass.com" style={{ color: "#888899", fontSize: 14, fontFamily: "Inter,sans-serif", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "#888899")}>info@revofitnessclass.com</a>
            <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
              {[{ icon: "ti-brand-instagram", label: "Instagram" }, { icon: "ti-brand-tiktok", label: "TikTok" }, { icon: "ti-brand-facebook", label: "Facebook" }].map(s => (
                <a key={s.label} href="#" style={{ display: "flex", alignItems: "center", gap: 6, color: "#888899", fontSize: 14, fontFamily: "Inter,sans-serif", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#ff0066")} onMouseLeave={e => (e.currentTarget.style.color = "#888899")}>
                  <i className={`ti ${s.icon}`} />{s.label}
                </a>
              ))}
            </div>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <div style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, color: "#fff", fontSize: 14, marginBottom: 16 }}>{lang === "en" ? col.hEn : col.hEs}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {(lang === "en" ? col.lEn : col.lEs).map((l, j) => (
                  <a key={j} href="#" style={{ color: "#888899", fontSize: 14, fontFamily: "Inter,sans-serif", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "#888899")}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ color: "#888899", fontSize: 13, fontFamily: "Inter,sans-serif" }}>{t("© 2025 Elevate with Revo. All rights reserved.", "© 2025 Elevate with Revo. Todos los derechos reservados.")}</span>
          <span style={{ color: "#ff0066", fontSize: 13, fontFamily: "Inter,sans-serif", fontStyle: "italic" }}>{t("Reinvent Yourself.", "Reinvéntate.")}</span>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button onClick={() => setLang("en")} style={{ background: "none", border: "none", cursor: "none", fontSize: 13, color: lang === "en" ? "#ff0066" : "#888899", fontFamily: "Inter,sans-serif", transition: "color 0.2s" }}>EN</button>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <button onClick={() => setLang("es")} style={{ background: "none", border: "none", cursor: "none", fontSize: 13, color: lang === "es" ? "#ff0066" : "#888899", fontFamily: "Inter,sans-serif", transition: "color 0.2s" }}>ES</button>
          </div>
        </div>
      </div>
      <style>{`@keyframes neonPulse { 0%,100%{border-color:rgba(255,0,102,0.4)} 50%{border-color:rgba(255,0,102,1)} } @media(max-width:768px){footer [style*="gridTemplateColumns"]{grid-template-columns:1fr 1fr !important;}}`}</style>
    </footer>
  );
}
