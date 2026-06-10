"use client";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PhilosophySection from "@/components/PhilosophySection";
import DanaSection from "@/components/DanaSection";
import HowItWorks from "@/components/HowItWorks";
import GoalSelector from "@/components/GoalSelector";
import CommunitySection from "@/components/CommunitySection";
import ContainerScrollSection from "@/components/ContainerScrollSection";
import CoursesSection from "@/components/CoursesSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  useEffect(() => {
    const stored = localStorage.getItem("revo-lang") as "en" | "es" | null;
    if (stored) setLang(stored);
  }, []);
  const handleSetLang = (l: "en" | "es") => { setLang(l); localStorage.setItem("revo-lang", l); };
  return (
    <main style={{ background: "#050508", minHeight: "100vh" }}>
      <CustomCursor />
      <Navbar lang={lang} setLang={handleSetLang} />
      <Hero lang={lang} />
      <StatsBar lang={lang} />
      <PhilosophySection lang={lang} />
      <DanaSection lang={lang} />
      <HowItWorks lang={lang} />
      <GoalSelector lang={lang} />
      <CommunitySection lang={lang} />
      <ContainerScrollSection lang={lang} />
      <CoursesSection lang={lang} />
      <PricingSection lang={lang} />
      <CTASection lang={lang} />
      <Footer lang={lang} setLang={handleSetLang} />
    </main>
  );
}
