"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

interface Props { lang: "en" | "es" }

export default function ContainerScrollSection({ lang }: Props) {
  const t = (en: string, es: string) => lang === "en" ? en : es;
  return (
    <div className="bg-[#050508]">
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <p className="text-[#ff0066] text-xs tracking-[0.3em] uppercase font-inter mb-4">
              {t("The Revo Experience", "La Experiencia Revo")}
            </p>
            <h2
              className="font-bebas text-white leading-none mb-4"
              style={{ fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "0.02em" }}
            >
              {t("Inside the studio.", "Dentro del estudio.")}
            </h2>
            <p className="text-[#888899] font-inter max-w-lg mx-auto">
              {t("This is where transformation happens. Every class. Every rep. Every result.", "Aquí es donde ocurre la transformación. Cada clase. Cada repetición. Cada resultado.")}
            </p>
          </div>
        }
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
          }}
        />
      </ContainerScroll>
    </div>
  );
}
