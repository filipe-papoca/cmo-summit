import React from "react";
import HeaderLlmSection from "./sections/HeaderLlmSection";
import HeroLlmSection from "./sections/HeroLlmSection";
import ProgramaLlmSection from "./sections/ProgramaLlmSection";
import EstatisticasLlmSection from "./sections/EstatisticasLlmSection";
import PalestranteLlmSection from "./sections/PalestranteLlmSection";
import CTAFinalLlmSection from "./sections/CTAFinalLlmSection";
import FooterLlmSection from "./sections/FooterLlmSection";

export default function LpPapocaLlm() {
  return (
    <main className="w-full bg-[#0a0e27]">
      <HeaderLlmSection />
      <div className="pt-20">
        <HeroLlmSection />
        <ProgramaLlmSection />
        <EstatisticasLlmSection />
        <PalestranteLlmSection />
        <CTAFinalLlmSection />
      </div>
      <FooterLlmSection />
    </main>
  );
}
