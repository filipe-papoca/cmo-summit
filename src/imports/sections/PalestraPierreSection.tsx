import React from "react";
import imgPalestra from "@/assets/pierre/palestra-pierre-cmo-summit.webp";

export default function PalestraPierreSection() {
  return (
    <section className="bg-[#191919] w-full content-stretch px-4 sm:px-8 md:px-[75px] py-10 md:py-[80px]">
      <div className="max-w-[1366px] mx-auto grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#f9f9f9] text-[16px] w-full">
            <p className="leading-[1.3]">CMO Summit 2026</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic text-[#f9f9f9] text-[26px] sm:text-[32px] md:text-[40px] tracking-[-1.2px] w-full">
            <p>
              <span className="leading-[1.2]">GEO para CMOs: dominar o </span>
              <span className="leading-[1.2] text-[#d92b8a]">share of voice</span>
              <span className="leading-[1.2]"> nas respostas de IAs</span>
            </p>
          </div>
          <div className="rounded-[2px] overflow-hidden">
            <img src={imgPalestra} alt="Palestra no CMO Summit sobre GEO" className="w-full h-[270px] object-cover object-center" /> 
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] gap-4 not-italic text-[#f9f9f9] text-[14px] sm:text-[16px] w-full">
            <p className="leading-[1.5]">
              IAs se tornam a interface principal de busca e recomendação, comprimindo o funil em um fluxo conversacional.
              43% dos consumidores já descobriram marcas via IA e 86% confiam moderada/altamente nessas recomendações.
            </p>
            <p className="leading-[1.5]">
              O foco migra para presença nas respostas geradas, seu share of voice em ambientes generativos.
              Surge o GEO, que expande o SEO com cinco pilares: SEO técnico, conteúdo on‑page, PR digital, presença social e reputação construída por usuários.
              GEO é responsabilidade da empresa inteira: produto, atendimento e CS também viram conteúdo que influencia a IA.
            </p>
          </div>

          <div className="bg-[#f9f9f9] p-4 sm:p-6 rounded-[2px] w-full"><div id="embed-form-palestra" className="w-full" /></div>
        </div>
      </div>
    </section>
  );
}
