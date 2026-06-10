"use client";
import { useEffect, useState } from "react";

interface NavbarProps { lang: "en" | "es"; setLang: (l: "en" | "es") => void; }
const links = [
  { href: "#philosophy", en: "Philosophy", es: "Filosofía" },
  { href: "#dana", en: "Dana", es: "Dana" },
  { href: "#community", en: "Community", es: "Comunidad" },
  { href: "#courses", en: "Courses", es: "Cursos" },
  { href: "#pricing", en: "Pricing", es: "Precios" },
];

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const t = (en: string, es: string) => lang === "en" ? en : es;
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "all 0.3s", background: scrolled ? "rgba(5,5,8,0.96)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff", fontSize: 26, letterSpacing: "0.05em" }}>
              R<span style={{ position: "relative", display: "inline-block" }}>E<span style={{ position: "absolute", left: 0, top: "50%", width: "100%", height: 2, background: "#fff", transform: "translateY(-50%)" }} /></span>VO
            </span>
            <span style={{ color: "#ff0066", fontSize: 8, letterSpacing: "0.4em", fontFamily: "Inter, sans-serif", textTransform: "uppercase" }}>Fitness Class</span>
          </a>
          <div style={{ display: "flex", gap: 32 }} className="hidden-mobile">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{ color: "#888899", textDecoration: "none", fontSize: 14, fontFamily: "Inter, sans-serif", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "#888899")}>
                {lang === "en" ? l.en : l.es}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hidden-mobile">
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button onClick={() => setLang("en")} style={{ background: "none", border: "none", cursor: "none", fontSize: 14, color: lang === "en" ? "#ff0066" : "#888899", fontFamily: "Inter, sans-serif", fontWeight: 500, transition: "color 0.2s" }}>EN</button>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
              <button onClick={() => setLang("es")} style={{ background: "none", border: "none", cursor: "none", fontSize: 14, color: lang === "es" ? "#ff0066" : "#888899", fontFamily: "Inter, sans-serif", fontWeight: 500, transition: "color 0.2s" }}>ES</button>
            </div>
            <a href="#pricing" style={{ padding: "8px 16px", color: "#ff0066", border: "1px solid #ff0066", borderRadius: 4, textDecoration: "none", fontSize: 14, fontFamily: "Inter, sans-serif", fontWeight: 600, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ff0066"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.boxShadow = "0 0 20px rgba(255,0,102,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ff0066"; e.currentTarget.style.boxShadow = "none"; }}>
              {t("Start Free Trial", "Prueba Gratis")}
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "none", padding: 8 }} className="show-mobile" aria-label="Menu">
            <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 6, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
            <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 6, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: 24, height: 2, background: "#fff", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>
      </nav>
      {/* Mobile overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "#050508", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: "all 0.5s", opacity: menuOpen ? 1 : 0, transform: menuOpen ? "none" : "translateX(100%)", pointerEvents: menuOpen ? "auto" : "none" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: "#fff", textDecoration: "none", transition: "color 0.2s", transitionDelay: `${i * 0.08}s` }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ff0066")} onMouseLeave={e => (e.currentTarget.style.color = "#fff")}>
              {lang === "en" ? l.en : l.es}
            </a>
          ))}
        </div>
        <div style={{ marginTop: 48, display: "flex", gap: 16 }}>
          <button onClick={() => setLang("en")} style={{ background: "none", border: "none", cursor: "none", fontSize: 18, color: lang === "en" ? "#ff0066" : "#888899", fontFamily: "Inter, sans-serif" }}>EN</button>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <button onClick={() => setLang("es")} style={{ background: "none", border: "none", cursor: "none", fontSize: 18, color: lang === "es" ? "#ff0066" : "#888899", fontFamily: "Inter, sans-serif" }}>ES</button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
