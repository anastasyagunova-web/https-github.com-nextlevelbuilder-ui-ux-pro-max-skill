"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

interface Props { lang: "en" | "es"; }

export default function ContainerScrollSection({ lang }: Props) {
  const t = (en: string, es: string) => lang === "en" ? en : es;
  return (
    <div style={{ background: "#050508" }}>
      <ContainerScroll
        titleComponent={
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#ff0066", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "Inter,sans-serif", marginBottom: 16 }}>
              {t("The Revo Experience", "La Experiencia Revo")}
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fff", lineHeight: 1, marginBottom: 16, letterSpacing: "0.02em", fontSize: "clamp(36px,5vw,72px)" }}>
              {t("Inside the studio.", "Dentro del estudio.")}
            </h2>
            <p style={{ color: "#888899", fontFamily: "Inter,sans-serif", maxWidth: 480, margin: "0 auto" }}>
              {t("This is where transformation happens. Every class. Every rep. Every result.", "Aquí es donde ocurre la transformación. Cada clase. Cada repetición. Cada resultado.")}
            </p>
          </div>
        }
      >
        <div style={{ width: "100%", height: "100%", backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center", borderRadius: 12 }} />
      </ContainerScroll>
    </div>
  );
}
