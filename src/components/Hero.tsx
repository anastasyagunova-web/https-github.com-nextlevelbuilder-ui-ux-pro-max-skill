"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps { lang: "en" | "es"; }

export default function Hero({ lang }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const enWords = ["body.", "mindset.", "life."];
  const esWords = ["cuerpo.", "mente.", "vida."];
  const words = lang === "en" ? enWords : esWords;
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    setWordIdx(0);
    const iv = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2200);
    return () => clearInterval(iv);
  }, [lang, words.length]);

  useEffect(() => {
    const onScroll = () => { if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = (en: string, es: string) => lang === "en" ? en : es;

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#050508" }}>
      {/* Parallax bg */}
      <div ref={bgRef} style={{ position: "absolute", inset: 0, top: -80, backgroundImage: "url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.4 }} />
      {/* Animated gradient overlay */}
      <div style={{ position: "absolute", inset: 0, animation: "heroBg 10s ease-in-out infinite alternate" }} />
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,8,0.55)" }} />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ color: "#ff0066", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "Inter, sans-serif", marginBottom: 24, opacity: 0.9 }}>
          Puerto Banús · Marbella · International
        </p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff", lineHeight: 1, marginBottom: 16, letterSpacing: "0.02em", fontSize: "clamp(64px, 11vw, 130px)", textShadow: "0 0 60px rgba(255,0,102,0.35), 0 0 120px rgba(255,0,102,0.15)" }}>
          {t("REINVENT YOURSELF", "REINVÉNTATE")}
        </h1>
        {/* Cycling word */}
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 20, color: "#888899", marginBottom: 12, height: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span>{t("Transform your —", "Transforma tu —")}</span>
          <AnimatePresence mode="wait">
            <motion.span key={wordIdx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} style={{ color: "#fff", fontWeight: 600 }}>
              {words[wordIdx]}
            </motion.span>
          </AnimatePresence>
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#888899", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
          {t("Real training. Real results. Real community.", "Entrenamiento real. Resultados reales. Comunidad real.")}
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#pricing" style={{ padding: "16px 32px", background: "#ff0066", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", borderRadius: 4, transition: "box-shadow 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(255,0,102,0.6)")} onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
            {t("Start Your Free Trial", "Comienza Tu Prueba Gratis")}
          </a>
          <a href="#how-it-works" style={{ padding: "16px 32px", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", borderRadius: 4, border: "1px solid rgba(255,255,255,0.4)", transition: "border-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#fff")} onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}>
            {t("See How It Works", "Ver Cómo Funciona")}
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "#888899", fontFamily: "Inter, sans-serif" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #888899, transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
      </div>
      <style>{`
        @keyframes heroBg { 0% { background: linear-gradient(135deg, rgba(0,102,255,0.15), rgba(255,0,102,0.05)); } 100% { background: linear-gradient(135deg, rgba(255,0,102,0.15), rgba(0,102,255,0.05)); } }
        @keyframes scrollPulse { 0%,100% { opacity:0.3; } 50% { opacity:1; } }
      `}</style>
    </section>
  );
}
