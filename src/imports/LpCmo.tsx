import React from "react";
import svgPaths from "./svg-hjkq0v1ynh";
import imgLogo from "@/assets/logo-papoca.png";
import imgHero from "@/assets/hero-background.webp";

import ResultadosSection from "./sections/ResultadosSection";
import PorqueSection from "./sections/PorqueSection";
import ServicosSection from "./sections/ServicosSection";
import SobreSection from "./sections/SobreSection";

function Group() {
  return (
    <div className="absolute inset-[0_9.08%_0_0]" data-name="Group">
      <img className="block size-full" src={imgLogo} alt="Logo Papoca" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-center sm:justify-end min-h-px min-w-px overflow-clip relative">
      <div className="bg-[#d92b8a] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0" data-name="CTA Papoca">
        <div aria-hidden="true" className="absolute border-2 border-[#d92b8a] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[18px] sm:text-[20px] lg:text-[24px] tracking-[-0.72px] sm:tracking-[-0.96px] whitespace-normal sm:whitespace-nowrap">
          <p className="leading-[normal]">Fale conosco</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="h-[45px] overflow-clip relative shrink-0 w-[50px]" data-name="Layer_1">
        <Group />
        <div className="absolute inset-[91.11%_0_4.02%_95.45%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.2771 2.19047">
            <path d={svgPaths.p32834200} fill="var(--fill-0, #F9F9F9)" id="Vector_2" />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[-0.32px] w-full">
        <p>
          <span className="leading-[1.4] text-[#d92b8a]">CMO Summit 2026</span>
          <span className="leading-[1.4]">{` | São Paulo · 25 e 26 de março`}</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function BlocoEsquerdo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Bloco esquerdo">
      <Container />
    </div>
  );
}

function PrimeiraSecao1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Primeira seção">
      <BlocoEsquerdo1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#f9f9f9] w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] sm:text-[56px] xl:text-[80px] tracking-[-1px] sm:tracking-[-2.88px] w-full">
        <p className="leading-[1.1]">Condições especiais</p>
      </div>
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center relative shrink-0 text-[0px] tracking-[-0.5px] sm:tracking-[-2.16px] w-full">
        <p className="text-[#d92b8a] text-[22px] sm:text-[32px] xl:text-[44px]">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4]">{`para participantes do `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4]">CMO Summit®</span>
        </p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame 45">
          <path d={svgPaths.pef7d600} fill="#D92B8A" id="â" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <Frame41 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px] tracking-[-0.32px]">
        <p className="leading-[1.4]">Atendimento direto com os fundadores nos dois dias do evento</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <Frame41 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px] tracking-[-0.32px]">
        <p className="leading-[1.4]">Estratégia personalizada, não um pacote pronto</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame 45_3">
          <path d={svgPaths.pef7d600} fill="var(--fill-0, #D92B8A)" id="â_3" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <Frame41 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px] tracking-[-0.32px]">
        <p className="leading-[1.4]">Resultados mensuráveis desde o primeiro mês</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function BlocoEsquerdo() {
  return (
    <div className="content-stretch flex md:flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative" data-name="Bloco esquerdo">
      <PrimeiraSecao1 />
      <Frame />
      <div className="flex flex-col font-['Inclusive_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[0px] w-full">
        <p className="text-[16px]">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4]">Preencha o formulário e um especialista da Papoca entra em contato.</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4]">{` Sem apresentação genérica, primeiro entendemos o seu desafio.`}</span>
        </p>
      </div>
      <Container2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[24px] text-center">Fale com a Papoca</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px]">
        <span className="leading-[normal]">{`Nome completo `}</span>
        <span className="leading-[normal] text-[#d92b8a]">*</span>
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">Seu nome completo</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame19 />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px]">
        <span className="leading-[normal]">{`Empresa `}</span>
        <span className="leading-[normal] text-[#d92b8a]">*</span>
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">Nome da empresa</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px]">
        <span className="leading-[normal]">E-mail corporativo</span>
        <span className="leading-[normal] text-[#d92b8a]">{` *`}</span>
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">seu@empresa.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[0px] text-[16px]">
        <span className="leading-[normal]">Celular</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="leading-[normal] text-[#d92b8a]">*</span>
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">(00) 00000-0000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px]">
        <span className="leading-[normal]">Investimento mensal atual em SEO, GEO e conteúdo</span>
        <span className="leading-[normal] text-[#d92b8a]">{` *`}</span>
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">Selecione uma faixa</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame23 />
      <Frame26 />
      <Frame30 />
      <Frame33 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[24px] text-center">Quero conversar com a Papoca</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#d92b8a] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Frame38 />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[14px] text-center">
        <p className="mb-0">A equipe da Papoca entrará em contato em até 24h úteis.</p>
        <p>Nenhum dado será compartilhado com terceiros.</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame27 />
      <Frame37 />
      <Frame39 />
    </div>
  );
}

function Formulario() {
  return (
    <div id="contato" className="bg-[rgba(25,25,25,0.94)] w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative" data-name="Formulário">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <Frame34 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5d5d5d] border-solid inset-0 pointer-events-none shadow-[0px_15px_36.3px_3px_rgba(0,0,0,0.21)]" />
    </div>
  );
}

function PrimeiraSecao() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[24px] items-start relative shrink-0 w-full" data-name="Primeira seção">
      <BlocoEsquerdo />
      <Formulario />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundImage: "linear-gradient(250.103deg, rgba(0, 0, 0, 0) 2.3521%, rgba(0, 0, 0, 0.95) 63.569%)" }} />
      </div>
      <div className="content-stretch flex flex-col items-start px-8 sm:px-8 lg:px-[75px] py-18 lg:py-[80px] relative w-full max-w-[1366px] mx-auto">
        <PrimeiraSecao />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[31.5px]">Resultados recentes</p>
      </div>
    </div>
  );
}

function Textos() {
  return (
    <div className="absolute inset-[-0.02%_-0.02%_-0.08%_0]" data-name="Textos">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.0179 23.0223">
        <g id="Textos">
          <path d={svgPaths.p34449c00} fill="var(--fill-0, #E66C0B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Inter() {
  return (
    <div className="h-[23px] overflow-clip relative shrink-0 w-[92px]" data-name="Inter 1">
      <Textos />
    </div>
  );
}

function Frame49() {
  return (
    <div className="h-[66.5px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 66.5">
        <g id="Frame 53">
          <path d="M8 8V58.5" id="Vector 4" stroke="var(--stroke-0, #D92B8A)" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[63px]">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[0px] text-center tracking-[-0.22px]">
        <p className="text-[11px]">
          <span className="leading-[1.4]">{`1 `}</span>
          <span className="leading-[1.4] uppercase">mês</span>
        </p>
      </div>
    </div>
  );
}

 

 

function Frame52() {
  return (
    <div className="h-[66.5px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 66.5">
        <g id="Frame 53_2">
          <path d="M8 8V58.5" id="Vector 4_2" stroke="var(--stroke-0, #D92B8A)" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[63px]">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[11px] text-center tracking-[-0.22px]">
        <p className="leading-[1.4]">3 MESES</p>
      </div>
    </div>
  );
}

 

function Frame54() {
  return (
    <div className="h-[66.5px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 66.5">
        <g id="Frame 53_3">
          <path d="M8 8V58.5" id="Vector 4_3" stroke="var(--stroke-0, #D92B8A)" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[63px]">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[11px] text-center tracking-[-0.22px]">
        <p>
          <span className="leading-[1.4]">{`1 `}</span>
          <span className="leading-[1.4] uppercase">ano</span>
        </p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9f9f9] relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start sm:items-center px-[16px] py-[12px] relative w-full">
            <div className="flex items-center justify-center px-[9px] py-[6px] rounded-[2px] border border-[#d92b8a]">
              <p className="font-['Inter:Black',sans-serif] text-[#d92b8a] text-[14px] leading-[1.2]">Inter</p>
            </div>
            <Frame49 />
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[0px] tracking-[0.48px]">
              <p className="whitespace-pre-wrap">
                <span className="leading-[1.4] text-[24px]">
                  {`+61% `}
                  <br aria-hidden="true" />
                </span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic text-[#191919] text-[14px] tracking-[-0.28px]">Visibilidade em respostas de IA</span>
              </p>
            </div>
            <Frame50 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f9f9f9] relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start sm:items-center px-[16px] py-[12px] relative w-full">
            <div className="flex items-center justify-center px-[9px] py-[6px] rounded-[2px] border border-[#d92b8a]">
              <p className="font-['Inter:Black',sans-serif] text-[#d92b8a] text-[14px] leading-[1.2]">Zoop</p>
            </div>
            <Frame52 />
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[0px] tracking-[0.48px]">
              <p className="whitespace-pre-wrap">
                <span className="leading-[1.4] text-[24px]">
                  {`+70% `}
                  <br aria-hidden="true" />
                </span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic text-[#191919] text-[14px] tracking-[-0.28px]">T</span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic text-[#191919] text-[14px]">ermos ranqueados no Top 10</span>
              </p>
            </div>
            <Frame53 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f9f9f9] relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start sm:items-center px-[16px] py-[12px] relative w-full">
            <div className="flex items-center justify-center px-[9px] py-[6px] rounded-[2px] border border-[#d92b8a]">
              <p className="font-['Inter:Black',sans-serif] text-[#d92b8a] text-[14px] leading-[1.2]">Neosaldina</p>
            </div>
            <Frame54 />
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[0px] tracking-[0.48px]">
              <p className="whitespace-pre-wrap">
                <span className="leading-[1.4] text-[24px]">
                  {`+109% `}
                  <br aria-hidden="true" />
                </span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic text-[#191919] text-[14px]">Volume de conversões</span>
              </p>
            </div>
            <Frame55 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Espaco() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative" data-name="Espaço">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Frame51 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#051a30] text-[20px] sm:text-[24px] text-left w-full">
            <p className="leading-[31.5px]">Resultado não é promessa. É histórico.</p>
          </div>
          <Frame46 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[14px] sm:text-[16px] text-center w-full">
            <p className="decoration-solid leading-[24px] sm:leading-[31.5px] underline">Ver resultados</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Divisor() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divisor">
      <div className="absolute inset-[-1px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596 2">
          <g id="Divisor">
            <path d="M0 1H596" id="Vector 1" stroke="var(--stroke-0, #F9F9F9)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Titulo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center min-h-px min-w-px relative" data-name="Título">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[0px] text-[32px] sm:text-[48px] xl:text-[60px] tracking-[-0.5px] sm:tracking-[-1.92px] w-full text-center lg:text-left">
        <p className="mb-0">
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic tracking-[-1.92px]">Nunca foi</span>
          <span className="leading-[1.1]">{` `}</span>
          <span className="font-['Inter:Black_Italic',sans-serif] font-black italic leading-[1.1] tracking-[-1.92px]">sorte.</span>
        </p>
        <p className="text-[#191919]">
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[1.1]">{`Sempre foi `}</span>
          <span className="font-['Inter:Black',sans-serif] font-black leading-[1.1]">Papoca.</span>
        </p>
      </div>
      <Divisor />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[14px] sm:text-[18px] lg:text-[24px] tracking-[0.48px] w-full text-center lg:text-left">
        <p>
          <span className="leading-[1.4]">{`A única agência boutique de SEO & GEO do Brasil. `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic">Enquanto o mercado ainda debate o que é GEO, a Papoca já mede, monitora e otimiza presença em IAs.</span>
        </p>
      </div>
      <div className="bg-[#191919] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0" data-name="CTA Papoca">
        <div aria-hidden="true" className="absolute border-2 border-[#051a30] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[20px] sm:text-[24px] lg:text-[28px] tracking-[-1.12px] whitespace-normal sm:whitespace-nowrap">
          <p className="leading-[normal]">Agendar diagnóstico</p>
        </div>
      </div>
    </div>
  );
}

function Textos3() {
  return (
    <div className="absolute inset-[-0.02%_-0.02%_-0.08%_0]" data-name="Textos">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.0179 23.0223">
        <g id="Textos_2">
          <path d={svgPaths.p34449c00} fill="var(--fill-0, #E66C0B)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Inter1() {
  return (
    <div className="h-[23px] overflow-clip relative shrink-0 w-[92px]" data-name="Inter 1">
      <Textos3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[30px] relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Inter1 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[25.64%_7%_18.74%_7.36%]" data-name="Group">
      <div className="absolute inset-[49.86%_86.24%_23.67%_7.36%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p12e1f080} fill="var(--fill-0, #191919)" id="Vector_7" />
        </svg>
      </div>
      <div className="absolute inset-[48.32%_78.15%_24.65%_12.54%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p36d14600} fill="var(--fill-0, #191919)" id="Vector_8" />
        </svg>
      </div>
      <div className="absolute inset-[47.02%_71.02%_26.35%_23.03%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p226f1100} fill="var(--fill-0, #191919)" id="Vector_9" />
        </svg>
      </div>
      <div className="absolute inset-[46.07%_65.31%_18.74%_27.98%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p3ba7dff0} fill="var(--fill-0, #191919)" id="Vector_10" />
        </svg>
      </div>
      <div className="absolute inset-[45.17%_60.32%_28.36%_33.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p29d0cf80} fill="var(--fill-0, #191919)" id="Vector_11" />
        </svg>
      </div>
      <div className="absolute inset-[44.14%_55.24%_29.39%_38.48%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p395134c0} fill="var(--fill-0, #191919)" id="Vector_12" />
        </svg>
      </div>
      <div className="absolute inset-[43.31%_50.38%_30.1%_43.68%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8298 10.3803">
          <path d={svgPaths.p3b97a100} fill="var(--fill-0, #191919)" id="Vector_13" />
        </svg>
      </div>
      <div className="absolute inset-[42.49%_46.24%_31.01%_48.38%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p35a1ca00} fill="var(--fill-0, #191919)" id="Vector_14" />
        </svg>
      </div>
      <div className="absolute inset-[40.91%_38.72%_32.11%_54.57%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p36058d00} fill="var(--fill-0, #191919)" id="Vector_15" />
        </svg>
      </div>
      <div className="absolute inset-[39.05%_29.89%_33.25%_60.16%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p31bf67c0} fill="var(--fill-0, #191919)" id="Vector_16" />
        </svg>
      </div>
      <div className="absolute inset-[37.04%_18.94%_35.27%_71.11%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p34e5a020} fill="var(--fill-0, #191919)" id="Vector_17" />
        </svg>
      </div>
      <div className="absolute inset-[27.81%_13.47%_36.8%_79.72%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p2dc8d7a0} fill="var(--fill-0, #191919)" id="Vector_18" />
        </svg>
      </div>
      <div className="absolute inset-[35.27%_9.22%_37.67%_84.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70634 10.5651">
          <path d={svgPaths.pf65c00} fill="var(--fill-0, #191919)" id="Vector_19" />
        </svg>
      </div>
      <div className="absolute inset-[25.64%_7%_38.38%_89.65%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p5ef3800} fill="var(--fill-0, #191919)" id="Vector_20" />
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[25.36%_7.07%_19.01%_7.29%]" data-name="Group">
      <div className="absolute inset-[49.59%_86.31%_23.94%_7.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p8a0d000} fill="var(--fill-0, #191919)" id="Vector_21" />
        </svg>
      </div>
      <div className="absolute inset-[48.05%_78.22%_24.93%_12.47%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.pec88580} fill="var(--fill-0, #191919)" id="Vector_22" />
        </svg>
      </div>
      <div className="absolute inset-[46.75%_71.1%_26.63%_22.95%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.pdd13e40} fill="var(--fill-0, #191919)" id="Vector_23" />
        </svg>
      </div>
      <div className="absolute inset-[45.8%_65.38%_19.01%_27.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.pd1c0d00} fill="var(--fill-0, #191919)" id="Vector_24" />
        </svg>
      </div>
      <div className="absolute inset-[44.85%_60.39%_28.68%_33.21%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p112fd6e0} fill="var(--fill-0, #191919)" id="Vector_25" />
        </svg>
      </div>
      <div className="absolute inset-[43.87%_55.32%_29.66%_38.39%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p37131c00} fill="var(--fill-0, #191919)" id="Vector_26" />
        </svg>
      </div>
      <div className="absolute inset-[43%_50.45%_30.41%_43.61%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8298 10.3803">
          <path d={svgPaths.p343cea00} fill="var(--fill-0, #191919)" id="Vector_27" />
        </svg>
      </div>
      <div className="absolute inset-[42.21%_46.31%_31.28%_48.3%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p36a9e500} fill="var(--fill-0, #191919)" id="Vector_28" />
        </svg>
      </div>
      <div className="absolute inset-[40.59%_38.8%_32.43%_54.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p18765c00} fill="var(--fill-0, #191919)" id="Vector_29" />
        </svg>
      </div>
      <div className="absolute inset-[38.78%_29.96%_33.53%_60.08%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p39e42dc0} fill="var(--fill-0, #191919)" id="Vector_30" />
        </svg>
      </div>
      <div className="absolute inset-[36.77%_19.01%_35.54%_71.03%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p3dc5c280} fill="var(--fill-0, #191919)" id="Vector_31" />
        </svg>
      </div>
      <div className="absolute inset-[27.53%_13.54%_37.08%_79.65%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p14d18980} fill="var(--fill-0, #191919)" id="Vector_32" />
        </svg>
      </div>
      <div className="absolute inset-[34.99%_9.29%_37.95%_84.85%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70634 10.5651">
          <path d={svgPaths.p170a1100} fill="var(--fill-0, #191919)" id="Vector_33" />
        </svg>
      </div>
      <div className="absolute inset-[25.36%_7.07%_38.66%_89.58%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p7b05100} fill="var(--fill-0, #191919)" id="Vector_34" />
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[25.05%_7.15%_19.29%_7.21%]" data-name="Group">
      <div className="absolute inset-[49.31%_86.39%_24.22%_7.21%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p23715400} fill="var(--fill-0, #191919)" id="Vector_35" />
        </svg>
      </div>
      <div className="absolute inset-[47.77%_78.3%_25.21%_12.4%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p5fcf800} fill="var(--fill-0, #191919)" id="Vector_36" />
        </svg>
      </div>
      <div className="absolute inset-[46.47%_71.17%_26.9%_22.88%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p7104980} fill="var(--fill-0, #191919)" id="Vector_37" />
        </svg>
      </div>
      <div className="absolute inset-[45.52%_65.46%_19.29%_27.83%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p2f9e3600} fill="var(--fill-0, #191919)" id="Vector_38" />
        </svg>
      </div>
      <div className="absolute inset-[44.58%_60.47%_28.95%_33.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p244b81c0} fill="var(--fill-0, #191919)" id="Vector_39" />
        </svg>
      </div>
      <div className="absolute inset-[43.59%_55.39%_29.94%_38.32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p1046ae00} fill="var(--fill-0, #191919)" id="Vector_40" />
        </svg>
      </div>
      <div className="absolute inset-[42.72%_50.52%_30.69%_43.54%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p3e2f300} fill="var(--fill-0, #191919)" id="Vector_41" />
        </svg>
      </div>
      <div className="absolute inset-[41.93%_46.39%_31.56%_48.23%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p28212200} fill="var(--fill-0, #191919)" id="Vector_42" />
        </svg>
      </div>
      <div className="absolute inset-[40.32%_38.87%_32.7%_54.43%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p1e537f80} fill="var(--fill-0, #191919)" id="Vector_43" />
        </svg>
      </div>
      <div className="absolute inset-[38.5%_30.03%_33.81%_60.01%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p3828c580} fill="var(--fill-0, #191919)" id="Vector_44" />
        </svg>
      </div>
      <div className="absolute inset-[36.49%_19.08%_35.82%_70.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p106ada00} fill="var(--fill-0, #191919)" id="Vector_45" />
        </svg>
      </div>
      <div className="absolute inset-[27.22%_13.62%_37.4%_79.58%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p14d18980} fill="var(--fill-0, #191919)" id="Vector_46" />
        </svg>
      </div>
      <div className="absolute inset-[34.71%_9.36%_38.23%_84.78%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p3bb83d00} fill="var(--fill-0, #191919)" id="Vector_47" />
        </svg>
      </div>
      <div className="absolute inset-[25.05%_7.15%_38.97%_89.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p5740d00} fill="var(--fill-0, #191919)" id="Vector_48" />
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[24.77%_7.23%_19.57%_7.14%]" data-name="Group">
      <div className="absolute inset-[49.03%_86.46%_24.5%_7.14%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p182344f0} fill="var(--fill-0, #191919)" id="Vector_49" />
        </svg>
      </div>
      <div className="absolute inset-[47.46%_78.37%_25.52%_12.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p19171800} fill="var(--fill-0, #191919)" id="Vector_50" />
        </svg>
      </div>
      <div className="absolute inset-[46.19%_71.24%_27.18%_22.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p2caedd40} fill="var(--fill-0, #191919)" id="Vector_51" />
        </svg>
      </div>
      <div className="absolute inset-[45.25%_65.53%_19.57%_27.76%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p3aa84980} fill="var(--fill-0, #191919)" id="Vector_52" />
        </svg>
      </div>
      <div className="absolute inset-[44.3%_60.54%_29.23%_33.06%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p3a1cf600} fill="var(--fill-0, #191919)" id="Vector_53" />
        </svg>
      </div>
      <div className="absolute inset-[43.31%_55.47%_30.22%_38.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p3f878700} fill="var(--fill-0, #191919)" id="Vector_54" />
        </svg>
      </div>
      <div className="absolute inset-[42.45%_50.6%_30.97%_43.46%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p2317eb80} fill="var(--fill-0, #191919)" id="Vector_55" />
        </svg>
      </div>
      <div className="absolute inset-[41.66%_46.46%_31.84%_48.16%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p1859200} fill="var(--fill-0, #191919)" id="Vector_56" />
        </svg>
      </div>
      <div className="absolute inset-[40.04%_38.94%_32.98%_54.36%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p8213d00} fill="var(--fill-0, #191919)" id="Vector_57" />
        </svg>
      </div>
      <div className="absolute inset-[38.22%_30.1%_34.08%_59.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p3510e900} fill="var(--fill-0, #191919)" id="Vector_58" />
        </svg>
      </div>
      <div className="absolute inset-[36.21%_19.16%_36.1%_70.89%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p140ab700} fill="var(--fill-0, #191919)" id="Vector_59" />
        </svg>
      </div>
      <div className="absolute inset-[26.94%_13.69%_37.67%_79.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.paa40b40} fill="var(--fill-0, #191919)" id="Vector_60" />
        </svg>
      </div>
      <div className="absolute inset-[34.44%_9.43%_38.5%_84.71%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p2c46e400} fill="var(--fill-0, #191919)" id="Vector_61" />
        </svg>
      </div>
      <div className="absolute inset-[24.77%_7.23%_39.25%_89.42%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98179 14.0458">
          <path d={svgPaths.pfa56c80} fill="var(--fill-0, #191919)" id="Vector_62" />
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[24.5%_7.3%_19.84%_7.07%]" data-name="Group">
      <div className="absolute inset-[48.76%_86.53%_24.77%_7.07%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p3c72ce00} fill="var(--fill-0, #191919)" id="Vector_63" />
        </svg>
      </div>
      <div className="absolute inset-[47.18%_78.44%_25.8%_12.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p10fc72c0} fill="var(--fill-0, #191919)" id="Vector_64" />
        </svg>
      </div>
      <div className="absolute inset-[45.88%_71.31%_27.5%_22.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p40c8b70} fill="var(--fill-0, #191919)" id="Vector_65" />
        </svg>
      </div>
      <div className="absolute inset-[44.97%_65.6%_19.84%_27.69%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p22c9db00} fill="var(--fill-0, #191919)" id="Vector_66" />
        </svg>
      </div>
      <div className="absolute inset-[44.02%_60.61%_29.51%_32.99%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p363cb140} fill="var(--fill-0, #191919)" id="Vector_67" />
        </svg>
      </div>
      <div className="absolute inset-[43.04%_55.54%_30.49%_38.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p11d9cd30} fill="var(--fill-0, #191919)" id="Vector_68" />
        </svg>
      </div>
      <div className="absolute inset-[42.17%_50.67%_31.24%_43.39%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p102aa080} fill="var(--fill-0, #191919)" id="Vector_69" />
        </svg>
      </div>
      <div className="absolute inset-[41.38%_46.53%_32.11%_48.09%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p3a028f0} fill="var(--fill-0, #191919)" id="Vector_70" />
        </svg>
      </div>
      <div className="absolute inset-[39.76%_39.01%_33.26%_54.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p8213d00} fill="var(--fill-0, #191919)" id="Vector_71" />
        </svg>
      </div>
      <div className="absolute inset-[37.95%_30.18%_34.36%_59.87%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p2280e180} fill="var(--fill-0, #191919)" id="Vector_72" />
        </svg>
      </div>
      <div className="absolute inset-[35.94%_19.23%_36.37%_70.82%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p1aae1f80} fill="var(--fill-0, #191919)" id="Vector_73" />
        </svg>
      </div>
      <div className="absolute inset-[26.67%_13.76%_37.95%_79.43%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p22145d00} fill="var(--fill-0, #191919)" id="Vector_74" />
        </svg>
      </div>
      <div className="absolute inset-[34.16%_9.51%_38.78%_84.64%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1287a980} fill="var(--fill-0, #191919)" id="Vector_75" />
        </svg>
      </div>
      <div className="absolute inset-[24.5%_7.3%_39.53%_89.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98179 14.0458">
          <path d={svgPaths.p3f9078f0} fill="var(--fill-0, #191919)" id="Vector_76" />
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[24.22%_7.37%_20.12%_7%]" data-name="Group">
      <div className="absolute inset-[48.48%_86.6%_25.05%_7%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p10a10780} fill="var(--fill-0, #191919)" id="Vector_77" />
        </svg>
      </div>
      <div className="absolute inset-[46.9%_78.51%_26.07%_12.18%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p2f81bd80} fill="var(--fill-0, #191919)" id="Vector_78" />
        </svg>
      </div>
      <div className="absolute inset-[45.6%_71.39%_27.77%_22.66%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p1b772b00} fill="var(--fill-0, #191919)" id="Vector_79" />
        </svg>
      </div>
      <div className="absolute inset-[44.69%_65.68%_20.12%_27.61%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p28a39c00} fill="var(--fill-0, #191919)" id="Vector_80" />
        </svg>
      </div>
      <div className="absolute inset-[43.75%_60.68%_29.78%_32.92%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p29b28300} fill="var(--fill-0, #191919)" id="Vector_81" />
        </svg>
      </div>
      <div className="absolute inset-[42.76%_55.61%_30.77%_38.1%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p19624c00} fill="var(--fill-0, #191919)" id="Vector_82" />
        </svg>
      </div>
      <div className="absolute inset-[41.89%_50.74%_31.52%_43.32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p361f6600} fill="var(--fill-0, #191919)" id="Vector_83" />
        </svg>
      </div>
      <div className="absolute inset-[41.1%_46.61%_32.39%_48.01%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p17d1b000} fill="var(--fill-0, #191919)" id="Vector_84" />
        </svg>
      </div>
      <div className="absolute inset-[39.49%_39.09%_33.53%_54.21%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p18671200} fill="var(--fill-0, #191919)" id="Vector_85" />
        </svg>
      </div>
      <div className="absolute inset-[37.67%_30.25%_34.64%_59.79%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p25c72c80} fill="var(--fill-0, #191919)" id="Vector_86" />
        </svg>
      </div>
      <div className="absolute inset-[35.66%_19.3%_36.65%_70.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p1880a00} fill="var(--fill-0, #191919)" id="Vector_87" />
        </svg>
      </div>
      <div className="absolute inset-[26.39%_13.83%_38.23%_79.36%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p7ef09f0} fill="var(--fill-0, #191919)" id="Vector_88" />
        </svg>
      </div>
      <div className="absolute inset-[33.88%_9.58%_39.05%_84.56%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1287a980} fill="var(--fill-0, #191919)" id="Vector_89" />
        </svg>
      </div>
      <div className="absolute inset-[24.22%_7.37%_39.8%_89.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98179 14.0458">
          <path d={svgPaths.pe455800} fill="var(--fill-0, #191919)" id="Vector_90" />
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[23.94%_7.45%_20.39%_6.92%]" data-name="Group">
      <div className="absolute inset-[48.21%_86.68%_25.33%_6.92%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p34697000} fill="var(--fill-0, #191919)" id="Vector_91" />
        </svg>
      </div>
      <div className="absolute inset-[46.63%_78.59%_26.35%_12.11%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p33ac8170} fill="var(--fill-0, #191919)" id="Vector_92" />
        </svg>
      </div>
      <div className="absolute inset-[45.32%_71.47%_28.05%_22.58%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p169bcd00} fill="var(--fill-0, #191919)" id="Vector_93" />
        </svg>
      </div>
      <div className="absolute inset-[44.42%_65.76%_20.4%_27.53%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p33987300} fill="var(--fill-0, #191919)" id="Vector_94" />
        </svg>
      </div>
      <div className="absolute inset-[43.47%_60.76%_30.06%_32.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p37aa66f1} fill="var(--fill-0, #191919)" id="Vector_95" />
        </svg>
      </div>
      <div className="absolute inset-[42.48%_55.68%_31.05%_38.03%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p372aab80} fill="var(--fill-0, #191919)" id="Vector_96" />
        </svg>
      </div>
      <div className="absolute inset-[41.62%_50.81%_31.8%_43.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p3cfba900} fill="var(--fill-0, #191919)" id="Vector_97" />
        </svg>
      </div>
      <div className="absolute inset-[40.83%_46.68%_32.66%_47.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p341df300} fill="var(--fill-0, #191919)" id="Vector_98" />
        </svg>
      </div>
      <div className="absolute inset-[39.21%_39.16%_33.81%_54.14%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p21d4ab80} fill="var(--fill-0, #191919)" id="Vector_99" />
        </svg>
      </div>
      <div className="absolute inset-[37.36%_30.32%_34.95%_59.72%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p1d2ff200} fill="var(--fill-0, #191919)" id="Vector_100" />
        </svg>
      </div>
      <div className="absolute inset-[35.38%_19.37%_36.92%_70.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p24c58b00} fill="var(--fill-0, #191919)" id="Vector_101" />
        </svg>
      </div>
      <div className="absolute inset-[26.11%_13.92%_38.5%_79.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p17c3f800} fill="var(--fill-0, #191919)" id="Vector_102" />
        </svg>
      </div>
      <div className="absolute inset-[33.61%_9.66%_39.33%_84.48%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70634 10.5651">
          <path d={svgPaths.p3c5fd00} fill="var(--fill-0, #191919)" id="Vector_103" />
        </svg>
      </div>
      <div className="absolute inset-[23.94%_7.45%_40.08%_89.2%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p3fc0b300} fill="var(--fill-0, #191919)" id="Vector_104" />
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[23.67%_7.52%_20.67%_6.85%]" data-name="Group">
      <div className="absolute inset-[47.93%_86.75%_25.6%_6.85%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p1c7bcfc0} fill="var(--fill-0, #191919)" id="Vector_105" />
        </svg>
      </div>
      <div className="absolute inset-[46.35%_78.66%_26.63%_12.04%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p11f6d70} fill="var(--fill-0, #191919)" id="Vector_106" />
        </svg>
      </div>
      <div className="absolute inset-[45.05%_71.54%_28.32%_22.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p45e9500} fill="var(--fill-0, #191919)" id="Vector_107" />
        </svg>
      </div>
      <div className="absolute inset-[44.14%_65.83%_20.67%_27.46%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p21569200} fill="var(--fill-0, #191919)" id="Vector_108" />
        </svg>
      </div>
      <div className="absolute inset-[43.19%_60.83%_30.34%_32.77%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p2532100} fill="var(--fill-0, #191919)" id="Vector_109" />
        </svg>
      </div>
      <div className="absolute inset-[42.17%_55.76%_31.36%_37.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p395134c0} fill="var(--fill-0, #191919)" id="Vector_110" />
        </svg>
      </div>
      <div className="absolute inset-[41.34%_50.89%_32.07%_43.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p2173aa00} fill="var(--fill-0, #191919)" id="Vector_111" />
        </svg>
      </div>
      <div className="absolute inset-[40.55%_46.75%_32.94%_47.87%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p36423200} fill="var(--fill-0, #191919)" id="Vector_112" />
        </svg>
      </div>
      <div className="absolute inset-[38.93%_39.24%_34.08%_54.06%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p36058d00} fill="var(--fill-0, #191919)" id="Vector_113" />
        </svg>
      </div>
      <div className="absolute inset-[37.08%_30.39%_35.23%_59.65%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p2b78fb80} fill="var(--fill-0, #191919)" id="Vector_114" />
        </svg>
      </div>
      <div className="absolute inset-[35.11%_19.45%_37.2%_70.6%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p39fb1400} fill="var(--fill-0, #191919)" id="Vector_115" />
        </svg>
      </div>
      <div className="absolute inset-[25.84%_13.99%_38.78%_79.2%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p2dc8d7a0} fill="var(--fill-0, #191919)" id="Vector_116" />
        </svg>
      </div>
      <div className="absolute inset-[33.33%_9.74%_39.61%_84.41%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70634 10.5651">
          <path d={svgPaths.p23a5fa80} fill="var(--fill-0, #191919)" id="Vector_117" />
        </svg>
      </div>
      <div className="absolute inset-[23.67%_7.52%_40.36%_89.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p5ef3800} fill="var(--fill-0, #191919)" id="Vector_118" />
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[23.39%_7.59%_20.99%_6.78%]" data-name="Group">
      <div className="absolute inset-[47.65%_86.82%_25.88%_6.78%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p9d71200} fill="var(--fill-0, #191919)" id="Vector_119" />
        </svg>
      </div>
      <div className="absolute inset-[46.07%_78.73%_26.9%_11.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p3e8c2000} fill="var(--fill-0, #191919)" id="Vector_120" />
        </svg>
      </div>
      <div className="absolute inset-[44.77%_71.61%_28.6%_22.43%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p3492f800} fill="var(--fill-0, #191919)" id="Vector_121" />
        </svg>
      </div>
      <div className="absolute inset-[43.83%_65.9%_20.99%_27.39%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.pd1c0d00} fill="var(--fill-0, #191919)" id="Vector_122" />
        </svg>
      </div>
      <div className="absolute inset-[42.92%_60.91%_30.61%_32.69%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p68d8700} fill="var(--fill-0, #191919)" id="Vector_123" />
        </svg>
      </div>
      <div className="absolute inset-[41.89%_55.83%_31.64%_37.88%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p1ba9c700} fill="var(--fill-0, #191919)" id="Vector_124" />
        </svg>
      </div>
      <div className="absolute inset-[41.06%_50.96%_32.35%_43.1%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p87a4e20} fill="var(--fill-0, #191919)" id="Vector_125" />
        </svg>
      </div>
      <div className="absolute inset-[40.24%_46.83%_33.26%_47.79%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p24ed0e70} fill="var(--fill-0, #191919)" id="Vector_126" />
        </svg>
      </div>
      <div className="absolute inset-[38.66%_39.31%_34.36%_53.98%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p2ba3ee80} fill="var(--fill-0, #191919)" id="Vector_127" />
        </svg>
      </div>
      <div className="absolute inset-[36.8%_30.47%_35.5%_59.58%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p18884080} fill="var(--fill-0, #191919)" id="Vector_128" />
        </svg>
      </div>
      <div className="absolute inset-[34.83%_19.52%_37.48%_70.53%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p239c1000} fill="var(--fill-0, #191919)" id="Vector_129" />
        </svg>
      </div>
      <div className="absolute inset-[25.56%_14.06%_39.05%_79.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p14d18980} fill="var(--fill-0, #191919)" id="Vector_130" />
        </svg>
      </div>
      <div className="absolute inset-[33.06%_9.81%_39.88%_84.34%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70634 10.5651">
          <path d={svgPaths.p170a1100} fill="var(--fill-0, #191919)" id="Vector_131" />
        </svg>
      </div>
      <div className="absolute inset-[23.39%_7.59%_40.63%_89.06%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p7b05100} fill="var(--fill-0, #191919)" id="Vector_132" />
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[23.12%_7.66%_21.26%_6.7%]" data-name="Group">
      <div className="absolute inset-[47.34%_86.9%_26.19%_6.7%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p22af4800} fill="var(--fill-0, #191919)" id="Vector_133" />
        </svg>
      </div>
      <div className="absolute inset-[45.8%_78.8%_27.18%_11.89%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p21181830} fill="var(--fill-0, #191919)" id="Vector_134" />
        </svg>
      </div>
      <div className="absolute inset-[44.5%_71.69%_28.88%_22.36%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p3e8a42a0} fill="var(--fill-0, #191919)" id="Vector_135" />
        </svg>
      </div>
      <div className="absolute inset-[43.55%_65.97%_21.26%_27.32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p18955e00} fill="var(--fill-0, #191919)" id="Vector_136" />
        </svg>
      </div>
      <div className="absolute inset-[42.64%_60.98%_30.89%_32.62%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p69f06c0} fill="var(--fill-0, #191919)" id="Vector_137" />
        </svg>
      </div>
      <div className="absolute inset-[41.62%_55.9%_31.91%_37.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p37ad570} fill="var(--fill-0, #191919)" id="Vector_138" />
        </svg>
      </div>
      <div className="absolute inset-[40.79%_51.04%_32.62%_43.02%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p25c65f40} fill="var(--fill-0, #191919)" id="Vector_139" />
        </svg>
      </div>
      <div className="absolute inset-[39.96%_46.91%_33.53%_47.71%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p27c5c1c0} fill="var(--fill-0, #191919)" id="Vector_140" />
        </svg>
      </div>
      <div className="absolute inset-[38.38%_39.39%_34.64%_53.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p249b3e80} fill="var(--fill-0, #191919)" id="Vector_141" />
        </svg>
      </div>
      <div className="absolute inset-[36.53%_30.54%_35.78%_59.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p2faee780} fill="var(--fill-0, #191919)" id="Vector_142" />
        </svg>
      </div>
      <div className="absolute inset-[34.56%_19.59%_37.75%_70.45%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p595fe80} fill="var(--fill-0, #191919)" id="Vector_143" />
        </svg>
      </div>
      <div className="absolute inset-[25.29%_14.13%_39.33%_79.06%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p17c3f800} fill="var(--fill-0, #191919)" id="Vector_144" />
        </svg>
      </div>
      <div className="absolute inset-[32.78%_9.88%_40.16%_84.26%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p3bb83d00} fill="var(--fill-0, #191919)" id="Vector_145" />
        </svg>
      </div>
      <div className="absolute inset-[23.12%_7.66%_40.91%_88.99%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p2348bd00} fill="var(--fill-0, #191919)" id="Vector_146" />
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[22.84%_7.74%_21.54%_6.62%]" data-name="Group">
      <div className="absolute inset-[47.06%_86.98%_26.47%_6.62%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p182344f0} fill="var(--fill-0, #191919)" id="Vector_147" />
        </svg>
      </div>
      <div className="absolute inset-[45.52%_78.88%_27.46%_11.82%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p29cd0000} fill="var(--fill-0, #191919)" id="Vector_148" />
        </svg>
      </div>
      <div className="absolute inset-[44.22%_71.76%_29.15%_22.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p159ba200} fill="var(--fill-0, #191919)" id="Vector_149" />
        </svg>
      </div>
      <div className="absolute inset-[43.27%_66.05%_21.54%_27.24%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.pf1d8000} fill="var(--fill-0, #191919)" id="Vector_150" />
        </svg>
      </div>
      <div className="absolute inset-[42.37%_61.06%_31.16%_32.54%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p1ff99300} fill="var(--fill-0, #191919)" id="Vector_151" />
        </svg>
      </div>
      <div className="absolute inset-[41.34%_55.97%_32.19%_37.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.pd7b3200} fill="var(--fill-0, #191919)" id="Vector_152" />
        </svg>
      </div>
      <div className="absolute inset-[40.51%_51.11%_32.9%_42.95%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p3b620f00} fill="var(--fill-0, #191919)" id="Vector_153" />
        </svg>
      </div>
      <div className="absolute inset-[39.68%_46.98%_33.81%_47.64%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p18f9d680} fill="var(--fill-0, #191919)" id="Vector_154" />
        </svg>
      </div>
      <div className="absolute inset-[38.11%_39.46%_34.91%_53.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p8213d00} fill="var(--fill-0, #191919)" id="Vector_155" />
        </svg>
      </div>
      <div className="absolute inset-[36.25%_30.61%_36.06%_59.43%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p3b84c870} fill="var(--fill-0, #191919)" id="Vector_156" />
        </svg>
      </div>
      <div className="absolute inset-[34.28%_19.67%_38.03%_70.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p2d445200} fill="var(--fill-0, #191919)" id="Vector_157" />
        </svg>
      </div>
      <div className="absolute inset-[25.01%_14.21%_39.61%_78.99%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p2d96f000} fill="var(--fill-0, #191919)" id="Vector_158" />
        </svg>
      </div>
      <div className="absolute inset-[32.5%_9.95%_40.43%_84.19%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1ff5870} fill="var(--fill-0, #191919)" id="Vector_159" />
        </svg>
      </div>
      <div className="absolute inset-[22.84%_7.74%_41.18%_88.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p2a8616f0} fill="var(--fill-0, #191919)" id="Vector_160" />
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[22.56%_7.81%_21.81%_6.55%]" data-name="Group">
      <div className="absolute inset-[46.79%_87.05%_26.75%_6.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p2695cc00} fill="var(--fill-0, #191919)" id="Vector_161" />
        </svg>
      </div>
      <div className="absolute inset-[45.25%_78.96%_27.73%_11.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p20ebcb00} fill="var(--fill-0, #191919)" id="Vector_162" />
        </svg>
      </div>
      <div className="absolute inset-[43.94%_71.83%_29.43%_22.22%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p22d44950} fill="var(--fill-0, #191919)" id="Vector_163" />
        </svg>
      </div>
      <div className="absolute inset-[43%_66.12%_21.81%_27.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p37623ff0} fill="var(--fill-0, #191919)" id="Vector_164" />
        </svg>
      </div>
      <div className="absolute inset-[42.09%_61.13%_31.44%_32.47%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p300a7000} fill="var(--fill-0, #191919)" id="Vector_165" />
        </svg>
      </div>
      <div className="absolute inset-[41.07%_56.04%_32.47%_37.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p32e7c500} fill="var(--fill-0, #191919)" id="Vector_166" />
        </svg>
      </div>
      <div className="absolute inset-[40.24%_51.19%_33.18%_42.87%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p5393a80} fill="var(--fill-0, #191919)" id="Vector_167" />
        </svg>
      </div>
      <div className="absolute inset-[39.41%_47.05%_34.08%_47.57%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p32032f00} fill="var(--fill-0, #191919)" id="Vector_168" />
        </svg>
      </div>
      <div className="absolute inset-[37.83%_39.53%_35.19%_53.77%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p35f3a280} fill="var(--fill-0, #191919)" id="Vector_169" />
        </svg>
      </div>
      <div className="absolute inset-[35.98%_30.68%_36.33%_59.36%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p10ff5b00} fill="var(--fill-0, #191919)" id="Vector_170" />
        </svg>
      </div>
      <div className="absolute inset-[33.96%_19.75%_38.34%_70.3%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p3deca40} fill="var(--fill-0, #191919)" id="Vector_171" />
        </svg>
      </div>
      <div className="absolute inset-[24.73%_14.28%_39.88%_78.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p132bc680} fill="var(--fill-0, #191919)" id="Vector_172" />
        </svg>
      </div>
      <div className="absolute inset-[32.19%_10.02%_40.75%_84.12%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1287a980} fill="var(--fill-0, #191919)" id="Vector_173" />
        </svg>
      </div>
      <div className="absolute inset-[22.56%_7.81%_41.46%_88.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p1a0e6500} fill="var(--fill-0, #191919)" id="Vector_174" />
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[22.29%_7.88%_22.09%_6.48%]" data-name="Group">
      <div className="absolute inset-[46.51%_87.12%_27.02%_6.48%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p2635d400} fill="var(--fill-0, #191919)" id="Vector_175" />
        </svg>
      </div>
      <div className="absolute inset-[44.97%_79.03%_28.01%_11.66%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p31598f00} fill="var(--fill-0, #191919)" id="Vector_176" />
        </svg>
      </div>
      <div className="absolute inset-[43.67%_71.9%_29.7%_22.15%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p255f0700} fill="var(--fill-0, #191919)" id="Vector_177" />
        </svg>
      </div>
      <div className="absolute inset-[42.72%_66.19%_22.09%_27.1%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p23c91d00} fill="var(--fill-0, #191919)" id="Vector_178" />
        </svg>
      </div>
      <div className="absolute inset-[41.81%_61.2%_31.72%_32.4%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p3ab5f400} fill="var(--fill-0, #191919)" id="Vector_179" />
        </svg>
      </div>
      <div className="absolute inset-[40.79%_56.12%_32.74%_37.59%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p188a0a80} fill="var(--fill-0, #191919)" id="Vector_180" />
        </svg>
      </div>
      <div className="absolute inset-[39.92%_51.26%_33.49%_42.8%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p26e09900} fill="var(--fill-0, #191919)" id="Vector_181" />
        </svg>
      </div>
      <div className="absolute inset-[39.13%_47.12%_34.36%_47.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p12c62700} fill="var(--fill-0, #191919)" id="Vector_182" />
        </svg>
      </div>
      <div className="absolute inset-[37.55%_39.6%_35.46%_53.69%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p3e9c1200} fill="var(--fill-0, #191919)" id="Vector_183" />
        </svg>
      </div>
      <div className="absolute inset-[35.7%_30.77%_36.61%_59.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p1840f100} fill="var(--fill-0, #191919)" id="Vector_184" />
        </svg>
      </div>
      <div className="absolute inset-[33.69%_19.82%_38.62%_70.23%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p2b26d180} fill="var(--fill-0, #191919)" id="Vector_185" />
        </svg>
      </div>
      <div className="absolute inset-[24.46%_14.35%_40.16%_78.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p17819300} fill="var(--fill-0, #191919)" id="Vector_186" />
        </svg>
      </div>
      <div className="absolute inset-[31.91%_10.1%_41.03%_84.05%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1287a980} fill="var(--fill-0, #191919)" id="Vector_187" />
        </svg>
      </div>
      <div className="absolute inset-[22.29%_7.88%_41.74%_88.77%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.pb445600} fill="var(--fill-0, #191919)" id="Vector_188" />
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[22.01%_7.95%_22.37%_6.41%]" data-name="Group">
      <div className="absolute inset-[46.23%_87.19%_27.3%_6.41%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p12e1f080} fill="var(--fill-0, #191919)" id="Vector_189" />
        </svg>
      </div>
      <div className="absolute inset-[44.69%_79.1%_28.28%_11.59%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p2d800e80} fill="var(--fill-0, #191919)" id="Vector_190" />
        </svg>
      </div>
      <div className="absolute inset-[43.39%_71.98%_29.98%_22.07%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p38c70cf0} fill="var(--fill-0, #191919)" id="Vector_191" />
        </svg>
      </div>
      <div className="absolute inset-[42.45%_66.26%_22.37%_27.03%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p24323b00} fill="var(--fill-0, #191919)" id="Vector_192" />
        </svg>
      </div>
      <div className="absolute inset-[41.5%_61.27%_32.03%_32.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p37aa66f1} fill="var(--fill-0, #191919)" id="Vector_193" />
        </svg>
      </div>
      <div className="absolute inset-[40.51%_56.2%_33.02%_37.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p372aab80} fill="var(--fill-0, #191919)" id="Vector_194" />
        </svg>
      </div>
      <div className="absolute inset-[39.64%_51.33%_33.77%_42.73%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p1fe34bf0} fill="var(--fill-0, #191919)" id="Vector_195" />
        </svg>
      </div>
      <div className="absolute inset-[38.86%_47.2%_34.64%_47.42%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p44ce480} fill="var(--fill-0, #191919)" id="Vector_196" />
        </svg>
      </div>
      <div className="absolute inset-[37.24%_39.68%_35.78%_53.62%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p21d4ab80} fill="var(--fill-0, #191919)" id="Vector_197" />
        </svg>
      </div>
      <div className="absolute inset-[35.42%_30.84%_36.88%_59.2%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p2c51d700} fill="var(--fill-0, #191919)" id="Vector_198" />
        </svg>
      </div>
      <div className="absolute inset-[33.41%_19.89%_38.9%_70.15%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p24c58b00} fill="var(--fill-0, #191919)" id="Vector_199" />
        </svg>
      </div>
      <div className="absolute inset-[24.14%_14.42%_40.47%_78.77%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p2c350b00} fill="var(--fill-0, #191919)" id="Vector_200" />
        </svg>
      </div>
      <div className="absolute inset-[31.64%_10.17%_41.3%_83.97%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1287a980} fill="var(--fill-0, #191919)" id="Vector_201" />
        </svg>
      </div>
      <div className="absolute inset-[22.01%_7.95%_42.01%_88.7%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p2c9c5100} fill="var(--fill-0, #191919)" id="Vector_202" />
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[21.7%_8.03%_22.64%_6.33%]" data-name="Group">
      <div className="absolute inset-[45.96%_87.27%_27.57%_6.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p8a0d000} fill="var(--fill-0, #191919)" id="Vector_203" />
        </svg>
      </div>
      <div className="absolute inset-[44.38%_79.18%_28.6%_11.52%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p11f6d70} fill="var(--fill-0, #191919)" id="Vector_204" />
        </svg>
      </div>
      <div className="absolute inset-[43.12%_72.05%_30.26%_22%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.pdd13e40} fill="var(--fill-0, #191919)" id="Vector_205" />
        </svg>
      </div>
      <div className="absolute inset-[42.17%_66.34%_22.64%_26.95%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p16d27600} fill="var(--fill-0, #191919)" id="Vector_206" />
        </svg>
      </div>
      <div className="absolute inset-[41.22%_61.35%_32.31%_32.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p38c52780} fill="var(--fill-0, #191919)" id="Vector_207" />
        </svg>
      </div>
      <div className="absolute inset-[40.24%_56.27%_33.29%_37.44%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p10a037f0} fill="var(--fill-0, #191919)" id="Vector_208" />
        </svg>
      </div>
      <div className="absolute inset-[39.37%_51.4%_34.04%_42.66%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p132c8a00} fill="var(--fill-0, #191919)" id="Vector_209" />
        </svg>
      </div>
      <div className="absolute inset-[38.58%_47.27%_34.91%_47.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p36423200} fill="var(--fill-0, #191919)" id="Vector_210" />
        </svg>
      </div>
      <div className="absolute inset-[36.96%_39.75%_36.06%_53.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p90a0900} fill="var(--fill-0, #191919)" id="Vector_211" />
        </svg>
      </div>
      <div className="absolute inset-[35.15%_30.91%_37.16%_59.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p1c987080} fill="var(--fill-0, #191919)" id="Vector_212" />
        </svg>
      </div>
      <div className="absolute inset-[33.14%_19.96%_39.17%_70.08%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p39fb1400} fill="var(--fill-0, #191919)" id="Vector_213" />
        </svg>
      </div>
      <div className="absolute inset-[23.87%_14.5%_40.75%_78.7%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p1f7e1700} fill="var(--fill-0, #191919)" id="Vector_214" />
        </svg>
      </div>
      <div className="absolute inset-[31.36%_10.24%_41.58%_83.9%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1ff5870} fill="var(--fill-0, #191919)" id="Vector_215" />
        </svg>
      </div>
      <div className="absolute inset-[21.7%_8.03%_42.33%_88.62%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p3d9b9180} fill="var(--fill-0, #191919)" id="Vector_216" />
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[21.42%_8.11%_22.92%_6.26%]" data-name="Group">
      <div className="absolute inset-[45.68%_87.34%_27.85%_6.26%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p389be600} fill="var(--fill-0, #191919)" id="Vector_217" />
        </svg>
      </div>
      <div className="absolute inset-[44.1%_79.25%_28.88%_11.45%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p3e8c2000} fill="var(--fill-0, #191919)" id="Vector_218" />
        </svg>
      </div>
      <div className="absolute inset-[42.84%_72.12%_30.53%_21.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p616dd00} fill="var(--fill-0, #191919)" id="Vector_219" />
        </svg>
      </div>
      <div className="absolute inset-[41.89%_66.41%_22.92%_26.88%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p113fe200} fill="var(--fill-0, #191919)" id="Vector_220" />
        </svg>
      </div>
      <div className="absolute inset-[40.95%_61.42%_32.58%_32.18%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.pa890c00} fill="var(--fill-0, #191919)" id="Vector_221" />
        </svg>
      </div>
      <div className="absolute inset-[39.96%_56.35%_33.57%_37.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p3ef2d700} fill="var(--fill-0, #191919)" id="Vector_222" />
        </svg>
      </div>
      <div className="absolute inset-[39.09%_51.48%_34.32%_42.58%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p103e8e00} fill="var(--fill-0, #191919)" id="Vector_223" />
        </svg>
      </div>
      <div className="absolute inset-[38.3%_47.34%_35.19%_47.28%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p20637600} fill="var(--fill-0, #191919)" id="Vector_224" />
        </svg>
      </div>
      <div className="absolute inset-[36.69%_39.82%_36.33%_53.48%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p27ae7700} fill="var(--fill-0, #191919)" id="Vector_225" />
        </svg>
      </div>
      <div className="absolute inset-[34.87%_30.98%_37.44%_59.06%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.pa075800} fill="var(--fill-0, #191919)" id="Vector_226" />
        </svg>
      </div>
      <div className="absolute inset-[32.86%_20.04%_39.45%_70.01%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p239c1000} fill="var(--fill-0, #191919)" id="Vector_227" />
        </svg>
      </div>
      <div className="absolute inset-[23.59%_14.57%_41.03%_78.62%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p32f69240} fill="var(--fill-0, #191919)" id="Vector_228" />
        </svg>
      </div>
      <div className="absolute inset-[31.08%_10.32%_41.86%_83.83%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1287a980} fill="var(--fill-0, #191919)" id="Vector_229" />
        </svg>
      </div>
      <div className="absolute inset-[21.42%_8.11%_42.6%_88.54%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p7b05100} fill="var(--fill-0, #191919)" id="Vector_230" />
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[21.14%_8.18%_23.2%_6.19%]" data-name="Group">
      <div className="absolute inset-[45.4%_87.41%_28.13%_6.19%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p1a115700} fill="var(--fill-0, #191919)" id="Vector_231" />
        </svg>
      </div>
      <div className="absolute inset-[43.83%_79.32%_29.15%_11.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p5ec6200} fill="var(--fill-0, #191919)" id="Vector_232" />
        </svg>
      </div>
      <div className="absolute inset-[42.52%_72.19%_30.85%_21.85%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p2a656300} fill="var(--fill-0, #191919)" id="Vector_233" />
        </svg>
      </div>
      <div className="absolute inset-[41.62%_66.48%_23.2%_26.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p2ea662f0} fill="var(--fill-0, #191919)" id="Vector_234" />
        </svg>
      </div>
      <div className="absolute inset-[40.67%_61.49%_32.86%_32.11%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p256f1f00} fill="var(--fill-0, #191919)" id="Vector_235" />
        </svg>
      </div>
      <div className="absolute inset-[39.68%_56.42%_33.85%_37.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.pa563600} fill="var(--fill-0, #191919)" id="Vector_236" />
        </svg>
      </div>
      <div className="absolute inset-[38.82%_51.55%_34.6%_42.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p1543f580} fill="var(--fill-0, #191919)" id="Vector_237" />
        </svg>
      </div>
      <div className="absolute inset-[38.03%_47.41%_35.46%_47.21%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p20c30780} fill="var(--fill-0, #191919)" id="Vector_238" />
        </svg>
      </div>
      <div className="absolute inset-[36.41%_39.89%_36.61%_53.4%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p17351b00} fill="var(--fill-0, #191919)" id="Vector_239" />
        </svg>
      </div>
      <div className="absolute inset-[34.59%_31.06%_37.71%_58.99%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p2eb27af0} fill="var(--fill-0, #191919)" id="Vector_240" />
        </svg>
      </div>
      <div className="absolute inset-[32.58%_20.11%_39.72%_69.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p595fe80} fill="var(--fill-0, #191919)" id="Vector_241" />
        </svg>
      </div>
      <div className="absolute inset-[23.31%_14.64%_41.3%_78.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p116b92f0} fill="var(--fill-0, #191919)" id="Vector_242" />
        </svg>
      </div>
      <div className="absolute inset-[30.81%_10.39%_42.13%_83.76%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p2c46e400} fill="var(--fill-0, #191919)" id="Vector_243" />
        </svg>
      </div>
      <div className="absolute inset-[21.14%_8.18%_42.88%_88.47%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p2348bd00} fill="var(--fill-0, #191919)" id="Vector_244" />
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[20.87%_8.25%_23.47%_6.12%]" data-name="Group">
      <div className="absolute inset-[45.13%_87.48%_28.4%_6.12%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p15ca5d00} fill="var(--fill-0, #191919)" id="Vector_245" />
        </svg>
      </div>
      <div className="absolute inset-[43.55%_79.4%_29.43%_11.3%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p29cd0000} fill="var(--fill-0, #191919)" id="Vector_246" />
        </svg>
      </div>
      <div className="absolute inset-[42.25%_72.27%_31.12%_21.78%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p1536bf40} fill="var(--fill-0, #191919)" id="Vector_247" />
        </svg>
      </div>
      <div className="absolute inset-[41.34%_66.56%_23.47%_26.73%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p39a71e00} fill="var(--fill-0, #191919)" id="Vector_248" />
        </svg>
      </div>
      <div className="absolute inset-[40.39%_61.56%_33.14%_32.04%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p1ba7aa00} fill="var(--fill-0, #191919)" id="Vector_249" />
        </svg>
      </div>
      <div className="absolute inset-[39.41%_56.49%_34.12%_37.22%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p33371430} fill="var(--fill-0, #191919)" id="Vector_250" />
        </svg>
      </div>
      <div className="absolute inset-[38.54%_51.62%_34.87%_42.44%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p2bfae232} fill="var(--fill-0, #191919)" id="Vector_251" />
        </svg>
      </div>
      <div className="absolute inset-[37.75%_47.49%_35.74%_47.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p1d89180} fill="var(--fill-0, #191919)" id="Vector_252" />
        </svg>
      </div>
      <div className="absolute inset-[36.13%_39.97%_36.88%_53.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p30dd0580} fill="var(--fill-0, #191919)" id="Vector_253" />
        </svg>
      </div>
      <div className="absolute inset-[34.32%_31.13%_37.99%_58.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p159be880} fill="var(--fill-0, #191919)" id="Vector_254" />
        </svg>
      </div>
      <div className="absolute inset-[32.31%_20.18%_40%_69.86%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p1a7fb200} fill="var(--fill-0, #191919)" id="Vector_255" />
        </svg>
      </div>
      <div className="absolute inset-[23.04%_14.73%_41.58%_78.47%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p2d96f000} fill="var(--fill-0, #191919)" id="Vector_256" />
        </svg>
      </div>
      <div className="absolute inset-[30.53%_10.46%_42.41%_83.68%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1ff5870} fill="var(--fill-0, #191919)" id="Vector_257" />
        </svg>
      </div>
      <div className="absolute inset-[20.87%_8.25%_43.16%_88.39%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p2a8616f0} fill="var(--fill-0, #191919)" id="Vector_258" />
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[20.59%_8.33%_23.75%_6.04%]" data-name="Group">
      <div className="absolute inset-[44.85%_87.56%_28.68%_6.04%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p6a7f080} fill="var(--fill-0, #191919)" id="Vector_259" />
        </svg>
      </div>
      <div className="absolute inset-[43.27%_79.47%_29.7%_11.23%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p2f81bd80} fill="var(--fill-0, #191919)" id="Vector_260" />
        </svg>
      </div>
      <div className="absolute inset-[41.97%_72.35%_31.4%_21.7%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p14e33d00} fill="var(--fill-0, #191919)" id="Vector_261" />
        </svg>
      </div>
      <div className="absolute inset-[41.06%_66.64%_23.75%_26.65%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p22520d80} fill="var(--fill-0, #191919)" id="Vector_262" />
        </svg>
      </div>
      <div className="absolute inset-[40.12%_61.64%_33.41%_31.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p17268600} fill="var(--fill-0, #191919)" id="Vector_263" />
        </svg>
      </div>
      <div className="absolute inset-[39.13%_56.56%_34.4%_37.15%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p2c2ea000} fill="var(--fill-0, #191919)" id="Vector_264" />
        </svg>
      </div>
      <div className="absolute inset-[38.26%_51.69%_35.15%_42.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p2c03b600} fill="var(--fill-0, #191919)" id="Vector_265" />
        </svg>
      </div>
      <div className="absolute inset-[37.47%_47.56%_36.02%_47.06%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p2676800} fill="var(--fill-0, #191919)" id="Vector_266" />
        </svg>
      </div>
      <div className="absolute inset-[35.86%_40.04%_37.16%_53.26%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p3ab74d70} fill="var(--fill-0, #191919)" id="Vector_267" />
        </svg>
      </div>
      <div className="absolute inset-[34%_31.2%_38.3%_58.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p18e3c380} fill="var(--fill-0, #191919)" id="Vector_268" />
        </svg>
      </div>
      <div className="absolute inset-[32.03%_20.25%_40.28%_69.79%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p239c1000} fill="var(--fill-0, #191919)" id="Vector_269" />
        </svg>
      </div>
      <div className="absolute inset-[22.76%_14.8%_41.86%_78.4%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p132bc680} fill="var(--fill-0, #191919)" id="Vector_270" />
        </svg>
      </div>
      <div className="absolute inset-[30.26%_10.54%_42.68%_83.6%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1287a980} fill="var(--fill-0, #191919)" id="Vector_271" />
        </svg>
      </div>
      <div className="absolute inset-[20.59%_8.33%_43.43%_88.32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p1a0e6500} fill="var(--fill-0, #191919)" id="Vector_272" />
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[20.31%_8.4%_24.02%_5.97%]" data-name="Group">
      <div className="absolute inset-[44.58%_87.63%_28.95%_5.97%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p2238b780} fill="var(--fill-0, #191919)" id="Vector_273" />
        </svg>
      </div>
      <div className="absolute inset-[43%_79.54%_29.98%_11.16%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p30298d00} fill="var(--fill-0, #191919)" id="Vector_274" />
        </svg>
      </div>
      <div className="absolute inset-[41.7%_72.42%_31.68%_21.63%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p1627e080} fill="var(--fill-0, #191919)" id="Vector_275" />
        </svg>
      </div>
      <div className="absolute inset-[40.79%_66.71%_24.02%_26.58%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p3880f100} fill="var(--fill-0, #191919)" id="Vector_276" />
        </svg>
      </div>
      <div className="absolute inset-[39.84%_61.71%_33.69%_31.89%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.p3474a5d0} fill="var(--fill-0, #191919)" id="Vector_277" />
        </svg>
      </div>
      <div className="absolute inset-[38.82%_56.64%_34.71%_37.08%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.p3f71af00} fill="var(--fill-0, #191919)" id="Vector_278" />
        </svg>
      </div>
      <div className="absolute inset-[37.99%_51.77%_35.42%_42.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p13fba240} fill="var(--fill-0, #191919)" id="Vector_279" />
        </svg>
      </div>
      <div className="absolute inset-[37.2%_47.63%_36.29%_46.99%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p2c03e100} fill="var(--fill-0, #191919)" id="Vector_280" />
        </svg>
      </div>
      <div className="absolute inset-[35.58%_40.12%_37.44%_53.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96595 10.5343">
          <path d={svgPaths.p27806d80} fill="var(--fill-0, #191919)" id="Vector_281" />
        </svg>
      </div>
      <div className="absolute inset-[33.73%_31.27%_38.58%_58.77%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.p1b4ff1b0} fill="var(--fill-0, #191919)" id="Vector_282" />
        </svg>
      </div>
      <div className="absolute inset-[31.75%_20.33%_40.55%_69.72%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.pecc4000} fill="var(--fill-0, #191919)" id="Vector_283" />
        </svg>
      </div>
      <div className="absolute inset-[22.48%_14.87%_42.13%_78.32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p17819300} fill="var(--fill-0, #191919)" id="Vector_284" />
        </svg>
      </div>
      <div className="absolute inset-[29.98%_10.62%_42.96%_83.53%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p2c46e400} fill="var(--fill-0, #191919)" id="Vector_285" />
        </svg>
      </div>
      <div className="absolute inset-[20.31%_8.4%_43.71%_88.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.pb445600} fill="var(--fill-0, #191919)" id="Vector_286" />
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[20.04%_8.47%_24.34%_5.89%]" data-name="Group">
      <div className="absolute inset-[44.26%_87.71%_29.27%_5.89%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.pb90b700} fill="var(--fill-0, #191919)" id="Vector_287" />
        </svg>
      </div>
      <div className="absolute inset-[42.72%_79.61%_30.26%_11.08%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8316 10.5497">
          <path d={svgPaths.p1c6ba300} fill="var(--fill-0, #191919)" id="Vector_288" />
        </svg>
      </div>
      <div className="absolute inset-[41.42%_72.49%_31.95%_21.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84665 10.3957">
          <path d={svgPaths.p1ca244f0} fill="var(--fill-0, #191919)" id="Vector_289" />
        </svg>
      </div>
      <div className="absolute inset-[40.47%_66.78%_24.34%_26.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97518 13.7378">
          <path d={svgPaths.p24323b00} fill="var(--fill-0, #191919)" id="Vector_290" />
        </svg>
      </div>
      <div className="absolute inset-[39.57%_61.79%_33.96%_31.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51515 10.3341">
          <path d={svgPaths.pc5fb000} fill="var(--fill-0, #191919)" id="Vector_291" />
        </svg>
      </div>
      <div className="absolute inset-[38.54%_56.71%_34.99%_37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34846 10.3341">
          <path d={svgPaths.pb986700} fill="var(--fill-0, #191919)" id="Vector_292" />
        </svg>
      </div>
      <div className="absolute inset-[37.71%_51.85%_35.7%_42.21%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82979 10.3803">
          <path d={svgPaths.p1b3f2880} fill="var(--fill-0, #191919)" id="Vector_293" />
        </svg>
      </div>
      <div className="absolute inset-[36.88%_47.71%_36.61%_46.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00094 10.3495">
          <path d={svgPaths.p32c04b00} fill="var(--fill-0, #191919)" id="Vector_294" />
        </svg>
      </div>
      <div className="absolute inset-[35.31%_40.19%_37.71%_53.1%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96596 10.5343">
          <path d={svgPaths.p21d4ab80} fill="var(--fill-0, #191919)" id="Vector_295" />
        </svg>
      </div>
      <div className="absolute inset-[33.45%_31.35%_38.86%_58.7%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8019 10.8116">
          <path d={svgPaths.pd905480} fill="var(--fill-0, #191919)" id="Vector_296" />
        </svg>
      </div>
      <div className="absolute inset-[31.48%_20.4%_40.83%_69.65%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8004 10.8116">
          <path d={svgPaths.p3b1bf700} fill="var(--fill-0, #191919)" id="Vector_297" />
        </svg>
      </div>
      <div className="absolute inset-[22.21%_14.94%_42.41%_78.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1188 13.8148">
          <path d={svgPaths.p1ae33a80} fill="var(--fill-0, #191919)" id="Vector_298" />
        </svg>
      </div>
      <div className="absolute inset-[29.7%_10.69%_43.23%_83.46%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70636 10.5651">
          <path d={svgPaths.p1d644100} fill="var(--fill-0, #191919)" id="Vector_299" />
        </svg>
      </div>
      <div className="absolute inset-[20.04%_8.47%_43.98%_88.18%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.98178 14.0458">
          <path d={svgPaths.p2c9c5100} fill="var(--fill-0, #191919)" id="Vector_300" />
        </svg>
      </div>
    </div>
  );
}


function Group27() {
  return (
    <div className="absolute contents inset-[22.84%_9.2%_27.22%_6.63%]" data-name="Group">
      <div className="absolute inset-[47.05%_88.45%_32.06%_6.63%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.32288 8.15813">
          <path d={svgPaths.p1b773100} fill="var(--fill-0, #FAFAFA)" id="Vector_301" />
        </svg>
      </div>
      <div className="absolute inset-[45.43%_80.35%_33.06%_11.82%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6432 8.39761">
          <path d={svgPaths.p3d78b600} fill="var(--fill-0, #FAFAFA)" id="Vector_302" />
        </svg>
      </div>
      <div className="absolute inset-[44.16%_73.22%_34.78%_22.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67124 8.22025">
          <path d={svgPaths.p30a81100} fill="var(--fill-0, #FAFAFA)" id="Vector_303" />
        </svg>
      </div>
      <div className="absolute inset-[43.22%_67.51%_27.22%_27.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.79955 11.5404">
          <path d={svgPaths.p7707a00} fill="var(--fill-0, #FAFAFA)" id="Vector_304" />
        </svg>
      </div>
      <div className="absolute inset-[42.31%_62.52%_36.75%_32.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.32288 8.17354">
          <path d={svgPaths.p1807d900} fill="var(--fill-0, #FAFAFA)" id="Vector_305" />
        </svg>
      </div>
      <div className="absolute inset-[41.32%_57.43%_37.79%_37.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.17691 8.15372">
          <path d={svgPaths.p33828980} fill="var(--fill-0, #FAFAFA)" id="Vector_306" />
        </svg>
      </div>
      <div className="absolute inset-[40.46%_52.55%_38.49%_42.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67124 8.22025">
          <path d={svgPaths.p1a422380} fill="var(--fill-0, #FAFAFA)" id="Vector_307" />
        </svg>
      </div>
      <div className="absolute inset-[39.71%_48.46%_39.36%_47.64%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79318 8.1721">
          <path d={svgPaths.pbb72b00} fill="var(--fill-0, #FAFAFA)" id="Vector_308" />
        </svg>
      </div>
      <div className="absolute inset-[38.11%_40.91%_40.5%_53.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.80835 8.35242">
          <path d={svgPaths.p1a486e00} fill="var(--fill-0, #FAFAFA)" id="Vector_309" />
        </svg>
      </div>
      <div className="absolute inset-[36.2%_32.06%_41.74%_59.43%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6443 8.61457">
          <path d={svgPaths.p272d3080} fill="var(--fill-0, #FAFAFA)" id="Vector_310" />
        </svg>
      </div>
      <div className="absolute inset-[34.23%_21.11%_43.71%_70.38%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6443 8.61457">
          <path d={svgPaths.p2d593000} fill="var(--fill-0, #FAFAFA)" id="Vector_311" />
        </svg>
      </div>
      <div className="absolute inset-[25.01%_15.68%_45.19%_78.99%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.92305 11.6329">
          <path d={svgPaths.p9ef7a00} fill="var(--fill-0, #FAFAFA)" id="Vector_312" />
        </svg>
      </div>
      <div className="absolute inset-[32.53%_11.4%_45.98%_84.2%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.53328 8.39016">
          <path d={svgPaths.p15f7f440} fill="var(--fill-0, #FAFAFA)" id="Vector_313" />
        </svg>
      </div>
      <div className="absolute inset-[22.84%_9.2%_46.75%_88.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.80609 11.8754">
          <path d={svgPaths.p1d189bc0} fill="var(--fill-0, #FAFAFA)" id="Vector_314" />
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[22.84%_9.2%_27.22%_6.63%]" data-name="Group">
      <div className="absolute inset-[47.05%_88.45%_32.06%_6.63%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.32288 8.15813">
          <path d={svgPaths.p1b773100} fill="var(--fill-0, #FAFAFA)" id="Vector_315" />
        </svg>
      </div>
      <div className="absolute inset-[45.43%_80.35%_33.06%_11.82%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6432 8.39761">
          <path d={svgPaths.p3d78b600} fill="var(--fill-0, #FAFAFA)" id="Vector_316" />
        </svg>
      </div>
      <div className="absolute inset-[44.16%_73.22%_34.78%_22.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67124 8.22025">
          <path d={svgPaths.p30a81100} fill="var(--fill-0, #FAFAFA)" id="Vector_317" />
        </svg>
      </div>
      <div className="absolute inset-[43.22%_67.51%_27.22%_27.25%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.79955 11.5404">
          <path d={svgPaths.p7707a00} fill="var(--fill-0, #FAFAFA)" id="Vector_318" />
        </svg>
      </div>
      <div className="absolute inset-[42.31%_62.52%_36.75%_32.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.32288 8.17354">
          <path d={svgPaths.p1807d900} fill="var(--fill-0, #FAFAFA)" id="Vector_319" />
        </svg>
      </div>
      <div className="absolute inset-[41.32%_57.43%_37.79%_37.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.17691 8.15372">
          <path d={svgPaths.p33828980} fill="var(--fill-0, #FAFAFA)" id="Vector_320" />
        </svg>
      </div>
      <div className="absolute inset-[40.46%_52.55%_38.49%_42.96%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67124 8.22025">
          <path d={svgPaths.p1a422380} fill="var(--fill-0, #FAFAFA)" id="Vector_321" />
        </svg>
      </div>
      <div className="absolute inset-[39.71%_48.46%_39.36%_47.64%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79318 8.1721">
          <path d={svgPaths.pbb72b00} fill="var(--fill-0, #FAFAFA)" id="Vector_322" />
        </svg>
      </div>
      <div className="absolute inset-[38.11%_40.91%_40.5%_53.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.80835 8.35242">
          <path d={svgPaths.p1a486e00} fill="var(--fill-0, #FAFAFA)" id="Vector_323" />
        </svg>
      </div>
      <div className="absolute inset-[36.2%_32.06%_41.74%_59.43%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6443 8.61457">
          <path d={svgPaths.p272d3080} fill="var(--fill-0, #FAFAFA)" id="Vector_324" />
        </svg>
      </div>
      <div className="absolute inset-[34.23%_21.11%_43.71%_70.38%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6443 8.61457">
          <path d={svgPaths.p2d593000} fill="var(--fill-0, #FAFAFA)" id="Vector_325" />
        </svg>
      </div>
      <div className="absolute inset-[25.01%_15.68%_45.19%_78.99%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.92305 11.6329">
          <path d={svgPaths.p9ef7a00} fill="var(--fill-0, #FAFAFA)" id="Vector_326" />
        </svg>
      </div>
      <div className="absolute inset-[32.53%_11.4%_45.98%_84.2%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.53328 8.39016">
          <path d={svgPaths.p15f7f440} fill="var(--fill-0, #FAFAFA)" id="Vector_327" />
        </svg>
      </div>
      <div className="absolute inset-[22.84%_9.2%_46.75%_88.91%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.80609 11.8754">
          <path d={svgPaths.p1d189bc0} fill="var(--fill-0, #FAFAFA)" id="Vector_328" />
        </svg>
      </div>
    </div>
  );
}


function Group3() {
  return (
    <div className="absolute contents inset-[-0.02%_0.01%_-0.01%_0]" data-name="Group">
      <div className="absolute flex inset-[-0.02%_0.01%_-0.01%_0] items-center justify-center">
        <div className="flex-none h-[32.05px] rotate-[-2.74deg] w-[147.296px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.296 32.0497">
              <path d={svgPaths.p3fab00f0} fill="var(--fill-0, #D63089)" id="Vector_329" />
            </svg>
          </div>
        </div>
      </div>
      
    </div>
  );
}

function Textos4() {
  return (
    <div className="absolute contents inset-[-0.02%_0.01%_-0.01%_0]" data-name="Textos">
      <Group3 />
    </div>
  );
}

function UmMes() {
  return (
    <div className="aspect-[96.52999877929688/25.350000381469727] overflow-clip relative size-full" data-name="um mês 1">
      <Textos4 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[0_-0.01%_0.03%_-0.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.0185 29.9911">
        <g id="Group_4">
          <path d={svgPaths.p18277b00} fill="var(--fill-0, #E52034)" id="Vector_330" />
          <path d={svgPaths.p1b9e5800} fill="var(--fill-0, #E52034)" id="Vector_2_4" />
          <path d={svgPaths.p17856200} fill="var(--fill-0, #E52034)" id="Vector_3_4" />
          <path d={svgPaths.p39dc1300} fill="var(--fill-0, #E52034)" id="Vector_4_3" />
          <path d={svgPaths.p27a03b00} fill="var(--fill-0, #E52034)" id="Vector_5_3" />
          <path d={svgPaths.p128c2700} fill="var(--fill-0, #E52034)" id="Vector_6_3" />
          <path d={svgPaths.p298a8500} fill="var(--fill-0, #E52034)" id="Vector_7_3" />
          <path d={svgPaths.p3ee2f400} fill="var(--fill-0, #E52034)" id="Vector_8_2" />
          <path d={svgPaths.p47ee380} fill="var(--fill-0, #E52034)" id="Vector_9_2" />
          <path d={svgPaths.p15084a00} fill="var(--fill-0, #E52034)" id="Vector_10_2" />
          <path d={svgPaths.pbc74900} fill="var(--fill-0, #E52034)" id="Vector_11_2" />
          <path d={svgPaths.p1951d600} fill="var(--fill-0, #E52034)" id="Vector_12_2" />
          <path d={svgPaths.p39899b00} fill="var(--fill-0, #E52034)" id="Vector_13_2" />
          <path d={svgPaths.p8df1200} fill="var(--fill-0, #E52034)" id="Vector_14_2" />
          <path d={svgPaths.p1ab3e100} fill="var(--fill-0, #E52034)" id="Vector_15_2" />
          <path d={svgPaths.p32c03a00} fill="var(--fill-0, #E52034)" id="Vector_16_2" />
          <path d={svgPaths.p2aede980} fill="var(--fill-0, #E52034)" id="Vector_17_2" />
          <path d={svgPaths.p3c81cf80} fill="var(--fill-0, #E52034)" id="Vector_18_2" />
          <path d={svgPaths.p1587cbc0} fill="var(--fill-0, #E52034)" id="Vector_19_2" />
          <path d={svgPaths.p2d371c0} fill="var(--fill-0, #E52034)" id="Vector_20_2" />
          <path d={svgPaths.p94db080} fill="var(--fill-0, #E52034)" id="Vector_21_2" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[24px] text-center w-full">
        <p>
          <span className="leading-[1.3]">{`Modelo boutique, `}</span>
          <span className="leading-[1.3]">{`Atendimento `}</span>
          <span className="leading-[1.3] text-[#191919]">sob medida</span>
          <span className="leading-[1.3] text-[#d92b8a]">.</span>
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">Boutique não é tamanho, é comprometimento. Cada cliente tem um time que conhece seu negócio com profundidade. Cada estratégia é criada para um cliente só — do diagnóstico à entrega.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center justify-center relative w-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[9px] py-[25px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[24px] text-center w-full">
        <p>
          <span className="leading-[1.3] text-[#191919]">{`SEO e GEO em sinergia `}</span>
          <span className="leading-[1.3]">na sua estratégia.</span>
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">Enquanto o mercado ainda debate o que é GEO, a Papoca já mede, monitora e otimiza presença em IAs — com análise de mais de 1 milhão de prompts em 9 LLMs.</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center justify-center relative w-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch" data-name="Component 7">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[9px] py-[25px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[24px] items-stretch md:items-start relative shrink-0 w-full">
      <Component3 />
      <Component4 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[24px] text-center w-full">
        <p>
          <span className="leading-[1.3] text-[#191919]">Transparência total</span>
          <span className="leading-[1.3]">. Flexibilidade real.</span>
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">Sem pacote. Sem hora vendida. Só o que gera resultado. Plataforma própria, relatórios sem enrolação e estratégia que se adapta conforme o mercado.</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center justify-center relative w-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[9px] py-[25px] relative size-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[24px] text-center w-full">
        <p>
          <span className="leading-[1.3]">{`Estratégia local. `}</span>
          <span className="leading-[1.3] text-[#191919]">Alcance global</span>
          <span className="leading-[1.3]">.</span>
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">LATAM, Estados Unidos e Europa: com redatores nativos em PT, ES, EN e FR, e estratégia local para cada mercado. Sem adaptação de última hora.</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center justify-center relative w-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="Component 7">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[9px] py-[25px] relative w-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[24px] items-stretch md:items-start relative shrink-0 w-full">
      <Component5 />
      <Component6 />
    </div>
  );
}


function NavbarResponsive() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="bg-[#191919] shrink-0 w-full z-50 sticky top-0" data-name="Navbar">
      <div className="flex h-[80px] items-center justify-between px-4 sm:px-8 lg:px-[75px] w-full max-w-[1366px] mx-auto">
        <Frame3 />
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#191919] px-6 pb-6 flex flex-col gap-4">
          <a href="#contato" className="text-white font-semibold text-lg" onClick={() => setOpen(false)}>Fale conosco</a>
          <a href="#resultados" className="text-white text-base" onClick={() => setOpen(false)}>Resultados</a>
          <a href="#servicos" className="text-white text-base" onClick={() => setOpen(false)}>Serviços</a>
        </div>
      )}
    </nav>
  );
}

export default function LpCmo() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full overflow-x-hidden" data-name="LP - CMO">
      <NavbarResponsive />
      <Header />
      <ResultadosSection />
      <PorqueSection />
      <ServicosSection />
      <SobreSection />
    </div>
  );
}
