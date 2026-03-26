import React from "react";
import imgNeosaldina from "@/assets/neosaldina.png";
import imgInter from "@/assets/inter.png";
import imgZoop from "@/assets/zoop.png";
import imgApenasUmMes from "@/assets/em-apenas-um-mes.png";
import imgEmUmAno from "@/assets/em-um-ano.png";
import imgUltimosTresMeses from "@/assets/ultimos-3-meses.png";

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div className="bg-[#191919] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0" data-name="CTA Papoca">
        <div aria-hidden="true" className="absolute border-2 border-[#051a30] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[20px] sm:text-[24px] lg:text-[28px] tracking-[-0.96px] sm:tracking-[-1.12px] whitespace-normal sm:whitespace-nowrap">
          <p className="leading-[normal]">Ver resultados</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center pb-[2px] relative shrink-0 w-full" data-name="Component 2">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(249,249,249,0.6)] whitespace-nowrap">
          <p className="decoration-solid leading-[normal] text-[14px] underline">Ver resultados</p>
        </div>
      </div>
    </div>
  );
}

function Titulo1() {
  return (
    <div className="content-stretch flex md:flex-[1_0_0] w-full flex-col gap-6 text-center md:text-left md:gap-[40px] items-center justify-center min-h-px min-w-px relative" data-name="Título">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] w-full">
        <p className="leading-[1.3]">Resultados recentes</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[0px] tracking-[-1.2px] w-full">
        <p className="text-[26px] sm:text-[32px] lg:text-[40px]">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic tracking-[-1.2px]">Nunca foi sorte.</span>
          <span className="leading-[1.2]">{` `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic text-[#f9f9f9] tracking-[-1.2px]">{`Sempre foi `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic text-[#191919] tracking-[-1.2px]">Papoca</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic text-[#f9f9f9] tracking-[-1.2px]">.</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[0px] tracking-[-0.32px] w-full">
        <p className="text-[16px]">
          <span className="leading-[1.4]">{`Inter, Zoop e Neosaldina não têm nada em comum. `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic tracking-[0.32px]">{`O que tem é resultado. `}</span>
        </p>
      </div>
      <Frame44 />
    </div>
  );
}

function Card({
  logoAlt,
  logoSrc,
  percentText,
  descriptionText,
  bannerAlt,
  bannerSrc,
}: {
  logoAlt: string;
  logoSrc: string;
  percentText: string;
  descriptionText: string;
  bannerAlt: string;
  bannerSrc: string;
}) {
  return (
    <div className="md:flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[9px] py-[17px] relative size-full">
          <img alt={logoAlt} src={logoSrc} className="max-w-full h-auto" />
          <div className="min-h-px min-w-px relative w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[42px] text-center w-full">
                  <p className="leading-[1.2]">{percentText}</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
                  <p className="leading-[15.6px]">{descriptionText}</p>
                </div>
              </div>
            </div>
          </div>
          <img alt={bannerAlt} src={bannerSrc} className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

const InterCard = () => (
  <Card
    logoAlt="Logo Inter"
    logoSrc={imgInter}
    percentText="+61%"
    descriptionText="visibilidade em respostas de IA"
    bannerAlt="61% em apenas um mês"
    bannerSrc={imgApenasUmMes}
  />
);

const ZoopCard = () => (
  <Card
    logoAlt="Logo Zoop"
    logoSrc={imgZoop}
    percentText="+70%"
    descriptionText="termos ranqueados no Top 10"
    bannerAlt="70% em três meses"
    bannerSrc={imgUltimosTresMeses}
  />
);

const NeosaldinaCard = () => (
  <Card
    logoAlt="Logo Neosaldina"
    logoSrc={imgNeosaldina}
    percentText="+109%"
    descriptionText="volume de conversões"
    bannerAlt="109% em um ano"
    bannerSrc={imgEmUmAno}
  />
);

function Frame1() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] items-stretch md:items-start relative shrink-0 w-full">
      <InterCard />
      <ZoopCard />
      <NeosaldinaCard />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] w-full">
        <p className="text-[32px]">
          <span className="leading-[1.3]">
            Resultado não é promessa.
            <br aria-hidden="true" />
          </span>
          <span className="leading-[1.3] text-[#d92b8a]">É histórico.</span>
        </p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Espaco1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative shrink-0 w-full lg:w-[596px]" data-name="Espaço">
      <Frame47 />
      <Frame48 />
    </div>
  );
}

export default function ResultadosSection() {
  return (
    <div id="resultados" className="bg-[#d92b8a] w-full content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[24px] items-start px-4 sm:px-8 lg:px-[75px] py-10 lg:py-[80px] relative shrink-0 w-full max-w-[1366px] mx-auto" data-name="Section 11">
      <Titulo1 />
      <Espaco1 />
    </div>
  );
}
