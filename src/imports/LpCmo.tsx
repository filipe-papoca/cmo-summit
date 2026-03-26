import React from "react";
import svgPaths from "./svg-hjkq0v1ynh";
import imgLogo from "@/assets/logo-papoca.png";
import imgHero from "@/assets/hero-background.webp";

import imgNeosaldina from "@/assets/neosaldina.png";
import imgInter from "@/assets/inter.png";
import imgZoop from "@/assets/zoop.png";

import imgApenasUmMes from "@/assets/em-apenas-um-mes.png";
import imgEmUmAno from "@/assets/em-um-ano.png";
import imgUltimosTresMeses from "@/assets/ultimos-3-meses.png";


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

function Group1() {
  return (
    <div className="absolute inset-[0_-0.01%_0.03%_-0.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.0241 38.7591">
        <g id="Group_2">
          <path d={svgPaths.pc6f3300} fill="var(--fill-0, #E52034)" id="Vector_4" />
          <path d={svgPaths.p22991880} fill="var(--fill-0, #E52034)" id="Vector_2_2" />
          <path d={svgPaths.p353cc800} fill="var(--fill-0, #E52034)" id="Vector_3_2" />
          <path d={svgPaths.p214a650} fill="var(--fill-0, #E52034)" id="Vector_4_2" />
          <path d={svgPaths.p8c2d060} fill="var(--fill-0, #E52034)" id="Vector_5_2" />
          <path d={svgPaths.p3abfa400} fill="var(--fill-0, #E52034)" id="Vector_6_2" />
          <path d={svgPaths.p19f452c0} fill="var(--fill-0, #E52034)" id="Vector_7_2" />
          <path d={svgPaths.p16cbede0} fill="var(--fill-0, #E52034)" id="Vector_8" />
          <path d={svgPaths.p2fac1680} fill="var(--fill-0, #E52034)" id="Vector_9" />
          <path d={svgPaths.p1879b740} fill="var(--fill-0, #E52034)" id="Vector_10" />
          <path d={svgPaths.p100d1000} fill="var(--fill-0, #E52034)" id="Vector_11" />
          <path d={svgPaths.p501f400} fill="var(--fill-0, #E52034)" id="Vector_12" />
          <path d={svgPaths.p2ffacf00} fill="var(--fill-0, #E52034)" id="Vector_13" />
          <path d={svgPaths.p1b9a0540} fill="var(--fill-0, #E52034)" id="Vector_14" />
          <path d={svgPaths.p9c84980} fill="var(--fill-0, #E52034)" id="Vector_15" />
          <path d={svgPaths.p3e2c3e00} fill="var(--fill-0, #E52034)" id="Vector_16" />
          <path d={svgPaths.p34d8d300} fill="var(--fill-0, #E52034)" id="Vector_17" />
          <path d={svgPaths.p1b42f800} fill="var(--fill-0, #E52034)" id="Vector_18" />
          <path d={svgPaths.p2b471580} fill="var(--fill-0, #E52034)" id="Vector_19" />
          <path d={svgPaths.p31366900} fill="var(--fill-0, #E52034)" id="Vector_20" />
          <path d={svgPaths.p265d8d80} fill="var(--fill-0, #E52034)" id="Vector_21" />
        </g>
      </svg>
    </div>
  );
}

function Textos1() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0.03%_-0.01%]" data-name="Textos">
      <Group1 />
    </div>
  );
}

function Zoop() {
  return (
    <div className="h-[38.771px] overflow-clip relative shrink-0 w-[92px]" data-name="Zoop 1">
      <Textos1 />
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

function Group2() {
  return (
    <div className="absolute inset-[0_-0.01%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.0087 13">
        <g id="Group_3">
          <path d={svgPaths.p12600700} fill="var(--fill-0, #CC1423)" id="Vector_5" />
          <path d={svgPaths.pd06e080} fill="var(--fill-0, #CC1423)" id="Vector_2_3" />
          <path d={svgPaths.p3ba2a400} fill="var(--fill-0, #593220)" id="Vector_3_3" />
        </g>
      </svg>
    </div>
  );
}

function Textos2() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0_0]" data-name="Textos">
      <Group2 />
    </div>
  );
}

function Neosaldina() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-[92px]" data-name="Neosaldina 1">
      <Textos2 />
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
            <Inter />
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
            <Zoop />
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
            <Neosaldina />
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[42px] text-center w-full">
        <p className="leading-[1.2]">+61%</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">visibilidade em respostas de IA</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
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

function Group5() {
  return (
    <div className="absolute contents inset-[20.04%_7%_18.74%_5.89%]" data-name="Group">
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
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

function Group4() {
  return (
    <div className="absolute contents inset-[20.04%_7%_18.74%_5.89%]" data-name="Group">
      <Group5 />
      <Group27 />
      <Group28 />
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
      <Group4 />
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

function Frame4() {
  return (
    <div className="min-h-px min-w-px relative w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="md:flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[9px] py-[17px] relative size-full">
          <img alt="Logo Inter" src={imgInter} className="max-w-full h-auto" />
          <Frame4 />
          <img alt="61% em apenas um mês" src={imgApenasUmMes} className="max-w-full h-auto" />
        </div>
      </div>
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

function Textos5() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0.03%_-0.01%]" data-name="Textos">
      <Group29 />
    </div>
  );
}

function Zoop1() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-[71px]" data-name="Zoop 1">
      <Textos5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Zoop1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[42px] text-center w-full">
        <p className="leading-[1.2]">+70%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">termos ranqueados no Top 10</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[9.62%_8.83%_2.32%_11.58%]" data-name="Group">
      <div className="absolute flex inset-[49.44%_81.88%_25.21%_11.67%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p34d6f400} fill="var(--fill-0, #191919)" id="Vector_331" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[48.55%_76.95%_26.23%_16.24%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p283ec100} fill="var(--fill-0, #191919)" id="Vector_332" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[48.04%_73.45%_27.32%_20.84%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pe702c72} fill="var(--fill-0, #191919)" id="Vector_333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.17%_67.01%_28.23%_26.45%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p2c3d2800} fill="var(--fill-0, #191919)" id="Vector_334" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.69%_65.39%_30.15%_30.89%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81503 12.3559">
              <path d={svgPaths.p22e75000} fill="var(--fill-0, #191919)" id="Vector_335" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.09%_62.89%_30.26%_32.25%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p32bb4600} fill="var(--fill-0, #191919)" id="Vector_336" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.35%_61.71%_30.9%_34.47%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.p3d519680} fill="var(--fill-0, #191919)" id="Vector_337" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[43.1%_54.74%_29.36%_36.15%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p6869900} fill="var(--fill-0, #191919)" id="Vector_338" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[43.06%_49.8%_31.73%_43.39%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p1472cd00} fill="var(--fill-0, #191919)" id="Vector_339" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.55%_46.31%_32.81%_47.99%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p220b1900} fill="var(--fill-0, #191919)" id="Vector_340" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.13%_39.3%_33.69%_53.08%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p33ffd00} fill="var(--fill-0, #191919)" id="Vector_341" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.26%_28.07%_34.36%_62.2%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p20cb4700} fill="var(--fill-0, #191919)" id="Vector_342" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.26%_23.28%_37.03%_69.91%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p376b1100} fill="var(--fill-0, #191919)" id="Vector_343" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.64%_19.5%_38.03%_74.39%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p376c5e80} fill="var(--fill-0, #191919)" id="Vector_344" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.58%_14.87%_38.72%_78.31%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p27b6bb00} fill="var(--fill-0, #191919)" id="Vector_345" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.92%_11.09%_39.74%_82.8%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83801 9.36923">
              <path d={svgPaths.p8750b80} fill="var(--fill-0, #191919)" id="Vector_346" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.27%_8.83%_41.11%_86.82%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74863 12.4105">
              <path d={svgPaths.p100ebec0} fill="var(--fill-0, #191919)" id="Vector_347" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[9.43%_8.91%_2.52%_11.51%]" data-name="Group">
      <div className="absolute flex inset-[49.25%_81.95%_25.4%_11.6%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p2fef8000} fill="var(--fill-0, #191919)" id="Vector_348" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[48.35%_77.02%_26.43%_16.17%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.pf175b00} fill="var(--fill-0, #191919)" id="Vector_349" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.84%_73.53%_27.52%_20.77%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p19f23b00} fill="var(--fill-0, #191919)" id="Vector_350" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.97%_67.08%_28.43%_26.37%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p1dbf8800} fill="var(--fill-0, #191919)" id="Vector_351" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.5%_65.46%_30.35%_30.81%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81503 12.3559">
              <path d={svgPaths.p133ead00} fill="var(--fill-0, #191919)" id="Vector_352" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.89%_62.96%_30.45%_32.18%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71083 11.0467">
              <path d={svgPaths.pe3a9d80} fill="var(--fill-0, #191919)" id="Vector_353" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.12%_61.78%_31.13%_34.4%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.p2925fa00} fill="var(--fill-0, #191919)" id="Vector_354" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.9%_54.82%_29.56%_36.08%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p322e3e80} fill="var(--fill-0, #191919)" id="Vector_355" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.86%_49.87%_31.92%_43.32%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p1472cd00} fill="var(--fill-0, #191919)" id="Vector_356" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.35%_46.38%_33.01%_47.92%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pc80180} fill="var(--fill-0, #191919)" id="Vector_357" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.93%_39.37%_33.88%_53%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p37ee6c00} fill="var(--fill-0, #191919)" id="Vector_358" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.06%_28.14%_34.56%_62.13%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p1c706000} fill="var(--fill-0, #191919)" id="Vector_359" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.06%_23.35%_37.23%_69.83%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p1daabe00} fill="var(--fill-0, #191919)" id="Vector_360" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.44%_19.57%_38.22%_74.32%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p23d10500} fill="var(--fill-0, #191919)" id="Vector_361" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.38%_14.95%_38.92%_78.24%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p27d95e70} fill="var(--fill-0, #191919)" id="Vector_362" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.72%_11.16%_39.94%_82.72%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p2a93c300} fill="var(--fill-0, #191919)" id="Vector_363" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.08%_8.91%_41.31%_86.75%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74863 12.4105">
              <path d={svgPaths.p19f17200} fill="var(--fill-0, #191919)" id="Vector_364" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[9.23%_8.98%_2.71%_11.43%]" data-name="Group">
      <div className="absolute flex inset-[49.05%_82.04%_25.6%_11.52%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p1ec87d00} fill="var(--fill-0, #191919)" id="Vector_365" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[48.15%_77.09%_26.63%_16.1%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p16974800} fill="var(--fill-0, #191919)" id="Vector_366" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.65%_73.61%_27.71%_20.69%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1d5e94c0} fill="var(--fill-0, #191919)" id="Vector_367" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.78%_67.15%_28.63%_26.3%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p321b3100} fill="var(--fill-0, #191919)" id="Vector_368" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.3%_65.54%_30.54%_30.74%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p2e22eb80} fill="var(--fill-0, #191919)" id="Vector_369" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.7%_63.04%_30.65%_32.1%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p1884a080} fill="var(--fill-0, #191919)" id="Vector_370" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.92%_61.85%_31.32%_34.32%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.p2925fa00} fill="var(--fill-0, #191919)" id="Vector_371" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.71%_54.89%_29.76%_36.01%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.pe480c00} fill="var(--fill-0, #191919)" id="Vector_372" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.66%_49.94%_32.12%_43.24%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p19758000} fill="var(--fill-0, #191919)" id="Vector_373" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.15%_46.45%_33.21%_47.85%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pdc6fc00} fill="var(--fill-0, #191919)" id="Vector_374" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.73%_39.45%_34.08%_52.93%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p371ae680} fill="var(--fill-0, #191919)" id="Vector_375" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.87%_28.22%_34.75%_62.05%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p2f6a5d00} fill="var(--fill-0, #191919)" id="Vector_376" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.87%_23.42%_37.43%_69.76%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p2f62b180} fill="var(--fill-0, #191919)" id="Vector_377" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.25%_19.66%_38.42%_74.24%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.pb8afc80} fill="var(--fill-0, #191919)" id="Vector_378" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.15%_15.02%_39.15%_78.16%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p27d95e70} fill="var(--fill-0, #191919)" id="Vector_379" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.52%_11.23%_40.14%_82.65%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p3da64800} fill="var(--fill-0, #191919)" id="Vector_380" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[26.88%_8.98%_41.51%_86.67%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p29ad91f0} fill="var(--fill-0, #191919)" id="Vector_381" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[9%_9.05%_2.91%_11.35%]" data-name="Group">
      <div className="absolute flex inset-[48.86%_82.11%_25.79%_11.44%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p37a000} fill="var(--fill-0, #191919)" id="Vector_382" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.96%_77.16%_26.83%_16.02%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p299f9f0} fill="var(--fill-0, #191919)" id="Vector_383" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.45%_73.68%_27.91%_20.62%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p38e1fa80} fill="var(--fill-0, #191919)" id="Vector_384" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.58%_67.23%_28.83%_26.23%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p1e355100} fill="var(--fill-0, #191919)" id="Vector_385" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.07%_65.61%_30.78%_30.67%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p1624f200} fill="var(--fill-0, #191919)" id="Vector_386" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.5%_63.11%_30.85%_32.03%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p3574b320} fill="var(--fill-0, #191919)" id="Vector_387" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.72%_61.93%_31.52%_34.25%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.p176700} fill="var(--fill-0, #191919)" id="Vector_388" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.51%_54.96%_29.95%_35.94%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.pe3ce200} fill="var(--fill-0, #191919)" id="Vector_389" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.46%_50.01%_32.32%_43.17%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p26599f00} fill="var(--fill-0, #191919)" id="Vector_390" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.96%_46.52%_33.4%_47.78%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p2a7b6080} fill="var(--fill-0, #191919)" id="Vector_391" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.54%_39.53%_34.27%_52.85%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p8b5be80} fill="var(--fill-0, #191919)" id="Vector_392" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.67%_28.29%_34.95%_61.98%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p518f280} fill="var(--fill-0, #191919)" id="Vector_393" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.67%_23.5%_37.63%_69.69%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p1f3b9d80} fill="var(--fill-0, #191919)" id="Vector_394" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.05%_19.73%_38.61%_74.17%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p3e5e6e80} fill="var(--fill-0, #191919)" id="Vector_395" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.95%_15.09%_39.34%_78.09%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p2f977300} fill="var(--fill-0, #191919)" id="Vector_396" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.33%_11.32%_40.33%_82.57%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83801 9.36923">
              <path d={svgPaths.p12505e00} fill="var(--fill-0, #191919)" id="Vector_397" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[26.68%_9.05%_41.71%_86.6%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p2111f980} fill="var(--fill-0, #191919)" id="Vector_398" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[8.8%_9.12%_3.11%_11.28%]" data-name="Group">
      <div className="absolute flex inset-[48.62%_82.18%_26.02%_11.37%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.paff3c40} fill="var(--fill-0, #191919)" id="Vector_399" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.76%_77.24%_27.02%_15.95%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p3c18e800} fill="var(--fill-0, #191919)" id="Vector_400" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.26%_73.75%_28.1%_20.54%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p2fdce300} fill="var(--fill-0, #191919)" id="Vector_401" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.38%_67.3%_29.02%_26.16%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p4908880} fill="var(--fill-0, #191919)" id="Vector_402" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.87%_65.68%_30.97%_30.59%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p39e0be80} fill="var(--fill-0, #191919)" id="Vector_403" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.27%_63.18%_31.08%_31.96%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p3f93f300} fill="var(--fill-0, #191919)" id="Vector_404" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.52%_62%_31.72%_34.18%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.pbf49700} fill="var(--fill-0, #191919)" id="Vector_405" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.31%_55.04%_30.15%_35.86%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.pec7800} fill="var(--fill-0, #191919)" id="Vector_406" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.27%_50.09%_32.52%_43.1%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p12a8fe00} fill="var(--fill-0, #191919)" id="Vector_407" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.76%_46.6%_33.6%_47.7%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p2dbc8cc0} fill="var(--fill-0, #191919)" id="Vector_408" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.34%_39.6%_34.47%_52.78%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p26e5c400} fill="var(--fill-0, #191919)" id="Vector_409" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.47%_28.36%_35.15%_61.91%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p247ac800} fill="var(--fill-0, #191919)" id="Vector_410" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.47%_23.57%_37.82%_69.61%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p1dff1d80} fill="var(--fill-0, #191919)" id="Vector_411" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.86%_19.8%_38.81%_74.09%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p39040180} fill="var(--fill-0, #191919)" id="Vector_412" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.75%_15.17%_39.54%_78.02%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p2f977300} fill="var(--fill-0, #191919)" id="Vector_413" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.13%_11.39%_40.53%_82.5%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83801 9.36923">
              <path d={svgPaths.p1879ea00} fill="var(--fill-0, #191919)" id="Vector_414" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[26.49%_9.12%_41.9%_86.53%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.pbe69a00} fill="var(--fill-0, #191919)" id="Vector_415" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[8.6%_9.2%_3.3%_11.21%]" data-name="Group">
      <div className="absolute flex inset-[48.43%_82.26%_26.22%_11.3%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p19b09800} fill="var(--fill-0, #191919)" id="Vector_416" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.56%_77.31%_27.22%_15.88%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p3784d100} fill="var(--fill-0, #191919)" id="Vector_417" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.06%_73.83%_28.3%_20.47%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p32661000} fill="var(--fill-0, #191919)" id="Vector_418" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.18%_67.37%_29.22%_26.08%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p3454c400} fill="var(--fill-0, #191919)" id="Vector_419" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.68%_65.77%_31.17%_30.51%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p23a25d40} fill="var(--fill-0, #191919)" id="Vector_420" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.07%_63.26%_31.28%_31.89%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p97aaa00} fill="var(--fill-0, #191919)" id="Vector_421" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.33%_62.07%_31.92%_34.11%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.paa9d9a} fill="var(--fill-0, #191919)" id="Vector_422" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.11%_55.11%_30.35%_35.79%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p2b34ac00} fill="var(--fill-0, #191919)" id="Vector_423" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.07%_50.16%_32.71%_43.03%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p17a90280} fill="var(--fill-0, #191919)" id="Vector_424" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.56%_46.67%_33.8%_47.63%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p35f5fb00} fill="var(--fill-0, #191919)" id="Vector_425" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.14%_39.67%_34.67%_52.7%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.pf7c7e00} fill="var(--fill-0, #191919)" id="Vector_426" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.27%_28.43%_35.35%_61.84%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p2d7e2180} fill="var(--fill-0, #191919)" id="Vector_427" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.28%_23.64%_38.02%_69.54%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p18655340} fill="var(--fill-0, #191919)" id="Vector_428" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.63%_19.87%_39.04%_74.02%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p39040180} fill="var(--fill-0, #191919)" id="Vector_429" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.56%_15.24%_39.74%_77.94%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p2c047280} fill="var(--fill-0, #191919)" id="Vector_430" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.94%_11.46%_40.73%_82.42%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83801 9.36923">
              <path d={svgPaths.pa8c8400} fill="var(--fill-0, #191919)" id="Vector_431" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[26.29%_9.2%_42.1%_86.46%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p271e8440} fill="var(--fill-0, #191919)" id="Vector_432" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[8.41%_9.27%_3.5%_11.14%]" data-name="Group">
      <div className="absolute flex inset-[48.23%_82.33%_26.42%_11.23%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p2c0c4680} fill="var(--fill-0, #191919)" id="Vector_433" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.36%_77.38%_27.42%_15.8%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p293a3800} fill="var(--fill-0, #191919)" id="Vector_434" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.86%_73.9%_28.5%_20.4%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p29d6d700} fill="var(--fill-0, #191919)" id="Vector_435" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.99%_67.44%_29.42%_26.01%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18246 11.4967">
              <path d={svgPaths.p13aaac00} fill="var(--fill-0, #191919)" id="Vector_436" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.48%_65.84%_31.36%_30.44%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81503 12.3559">
              <path d={svgPaths.p35037880} fill="var(--fill-0, #191919)" id="Vector_437" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.87%_63.33%_31.47%_31.81%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p2258d100} fill="var(--fill-0, #191919)" id="Vector_438" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.13%_62.14%_32.11%_34.03%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.p35668800} fill="var(--fill-0, #191919)" id="Vector_439" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.88%_55.18%_30.58%_35.72%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p12b232f2} fill="var(--fill-0, #191919)" id="Vector_440" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.87%_50.23%_32.91%_42.95%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p2f521400} fill="var(--fill-0, #191919)" id="Vector_441" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.37%_46.75%_33.99%_47.55%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p219619a0} fill="var(--fill-0, #191919)" id="Vector_442" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.95%_39.75%_34.87%_52.63%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p2d005400} fill="var(--fill-0, #191919)" id="Vector_443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.08%_28.51%_35.54%_61.76%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p32d3ef00} fill="var(--fill-0, #191919)" id="Vector_444" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.08%_23.71%_38.22%_69.47%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p25545900} fill="var(--fill-0, #191919)" id="Vector_445" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.43%_19.95%_39.24%_73.95%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.pbbbd380} fill="var(--fill-0, #191919)" id="Vector_446" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.36%_15.31%_39.94%_77.87%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p3a7d2200} fill="var(--fill-0, #191919)" id="Vector_447" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.74%_11.53%_40.92%_82.35%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83801 9.36923">
              <path d={svgPaths.p8750b80} fill="var(--fill-0, #191919)" id="Vector_448" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[26.09%_9.27%_42.3%_86.38%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p111584f0} fill="var(--fill-0, #191919)" id="Vector_449" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[8.21%_9.35%_3.73%_11.06%]" data-name="Group">
      <div className="absolute flex inset-[48.03%_82.4%_26.62%_11.15%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p2a649d00} fill="var(--fill-0, #191919)" id="Vector_450" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.17%_77.46%_27.61%_15.72%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.pd73ccf2} fill="var(--fill-0, #191919)" id="Vector_451" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.66%_73.97%_28.7%_20.33%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pd4d8b40} fill="var(--fill-0, #191919)" id="Vector_452" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.79%_67.52%_29.62%_25.94%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18246 11.4967">
              <path d={svgPaths.p1c773180} fill="var(--fill-0, #191919)" id="Vector_453" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.28%_65.91%_31.56%_30.37%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81503 12.3559">
              <path d={svgPaths.p22e75000} fill="var(--fill-0, #191919)" id="Vector_454" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.68%_63.41%_31.67%_31.73%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p32bb4600} fill="var(--fill-0, #191919)" id="Vector_455" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.93%_62.22%_32.31%_33.96%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.p7ef59f0} fill="var(--fill-0, #191919)" id="Vector_456" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.69%_55.26%_30.77%_35.63%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p6869900} fill="var(--fill-0, #191919)" id="Vector_457" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.67%_50.31%_33.11%_42.88%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p2f521400} fill="var(--fill-0, #191919)" id="Vector_458" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.17%_46.82%_34.19%_47.48%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pc0f5f40} fill="var(--fill-0, #191919)" id="Vector_459" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.75%_39.82%_35.06%_52.56%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p3347ac80} fill="var(--fill-0, #191919)" id="Vector_460" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.88%_28.58%_35.74%_61.69%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p2fc9f500} fill="var(--fill-0, #191919)" id="Vector_461" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.88%_23.79%_38.42%_69.4%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p25545900} fill="var(--fill-0, #191919)" id="Vector_462" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.23%_20.02%_39.44%_73.88%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p376c5e80} fill="var(--fill-0, #191919)" id="Vector_463" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.17%_15.39%_40.13%_77.79%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p3e2b3970} fill="var(--fill-0, #191919)" id="Vector_464" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.54%_11.61%_41.12%_82.28%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83801 9.36923">
              <path d={svgPaths.p328b0e00} fill="var(--fill-0, #191919)" id="Vector_465" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.86%_9.35%_42.52%_86.3%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74863 12.4105">
              <path d={svgPaths.p3eb24d00} fill="var(--fill-0, #191919)" id="Vector_466" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[8.02%_9.43%_3.93%_10.99%]" data-name="Group">
      <div className="absolute flex inset-[47.84%_82.47%_26.81%_11.08%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p2fef8000} fill="var(--fill-0, #191919)" id="Vector_467" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.97%_77.54%_27.81%_15.65%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p39107400} fill="var(--fill-0, #191919)" id="Vector_468" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.47%_74.05%_28.89%_20.25%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p30b8b500} fill="var(--fill-0, #191919)" id="Vector_469" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.59%_67.59%_29.81%_25.86%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p12c47d00} fill="var(--fill-0, #191919)" id="Vector_470" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.09%_65.98%_31.76%_30.3%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81503 12.3559">
              <path d={svgPaths.p133ead00} fill="var(--fill-0, #191919)" id="Vector_471" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.48%_63.48%_31.86%_31.66%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71083 11.0467">
              <path d={svgPaths.pe3a9d80} fill="var(--fill-0, #191919)" id="Vector_472" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.73%_62.29%_32.51%_33.89%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.p2d4de012} fill="var(--fill-0, #191919)" id="Vector_473" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.49%_55.34%_30.97%_35.56%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p322e3e80} fill="var(--fill-0, #191919)" id="Vector_474" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.48%_50.38%_33.31%_42.81%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p4b32600} fill="var(--fill-0, #191919)" id="Vector_475" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.97%_46.9%_34.39%_47.4%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1c093a70} fill="var(--fill-0, #191919)" id="Vector_476" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.55%_39.89%_35.26%_52.48%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p2b6af280} fill="var(--fill-0, #191919)" id="Vector_477" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.68%_28.65%_35.94%_61.62%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p292e7900} fill="var(--fill-0, #191919)" id="Vector_478" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.65%_23.86%_38.65%_69.32%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p1bf97380} fill="var(--fill-0, #191919)" id="Vector_479" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.03%_20.09%_39.63%_73.8%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p23d10500} fill="var(--fill-0, #191919)" id="Vector_480" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.97%_15.47%_40.33%_77.72%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p27d95e70} fill="var(--fill-0, #191919)" id="Vector_481" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.34%_11.68%_41.32%_82.21%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p17102880} fill="var(--fill-0, #191919)" id="Vector_482" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.67%_9.43%_42.72%_86.23%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74863 12.4105">
              <path d={svgPaths.p15426900} fill="var(--fill-0, #191919)" id="Vector_483" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[7.82%_9.5%_4.13%_10.92%]" data-name="Group">
      <div className="absolute flex inset-[47.64%_82.55%_27.01%_11.01%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p1ec87d00} fill="var(--fill-0, #191919)" id="Vector_484" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.74%_77.61%_28.04%_15.58%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p15958780} fill="var(--fill-0, #191919)" id="Vector_485" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.27%_74.12%_29.09%_20.18%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1c0d2e00} fill="var(--fill-0, #191919)" id="Vector_486" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.4%_67.66%_30.01%_25.79%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p3ed71c80} fill="var(--fill-0, #191919)" id="Vector_487" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.89%_66.06%_31.96%_30.22%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p2e22eb80} fill="var(--fill-0, #191919)" id="Vector_488" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.29%_63.56%_32.06%_31.59%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p1884a080} fill="var(--fill-0, #191919)" id="Vector_489" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.54%_62.37%_32.7%_33.81%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.p14aa0f00} fill="var(--fill-0, #191919)" id="Vector_490" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.29%_55.41%_31.17%_35.49%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.pe480c00} fill="var(--fill-0, #191919)" id="Vector_491" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.25%_50.45%_33.54%_42.73%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p1e91fa00} fill="var(--fill-0, #191919)" id="Vector_492" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.78%_46.97%_34.58%_47.33%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p2d829000} fill="var(--fill-0, #191919)" id="Vector_493" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.32%_39.97%_35.49%_52.41%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p8d8f400} fill="var(--fill-0, #191919)" id="Vector_494" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.48%_28.72%_36.13%_61.55%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p241abff0} fill="var(--fill-0, #191919)" id="Vector_495" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.45%_23.93%_38.84%_69.25%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p10cc7f80} fill="var(--fill-0, #191919)" id="Vector_496" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.84%_20.17%_39.83%_73.73%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p23624400} fill="var(--fill-0, #191919)" id="Vector_497" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.77%_15.54%_40.52%_77.64%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p148b6d00} fill="var(--fill-0, #191919)" id="Vector_498" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.15%_11.75%_41.52%_82.13%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p1b24000} fill="var(--fill-0, #191919)" id="Vector_499" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.47%_9.5%_42.92%_86.15%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p29ad91f0} fill="var(--fill-0, #191919)" id="Vector_500" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[7.62%_9.57%_4.32%_10.84%]" data-name="Group">
      <div className="absolute flex inset-[47.44%_82.62%_27.21%_10.93%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.paff3c40} fill="var(--fill-0, #191919)" id="Vector_501" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.55%_77.68%_28.24%_15.5%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p299f9f0} fill="var(--fill-0, #191919)" id="Vector_502" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.07%_74.19%_29.29%_20.11%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pf9bbb80} fill="var(--fill-0, #191919)" id="Vector_503" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.16%_67.74%_30.24%_25.72%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p1f374600} fill="var(--fill-0, #191919)" id="Vector_504" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.69%_66.13%_32.15%_30.15%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p63a9800} fill="var(--fill-0, #191919)" id="Vector_505" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.09%_63.63%_32.26%_31.51%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p3574b320} fill="var(--fill-0, #191919)" id="Vector_506" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.34%_62.44%_32.9%_33.73%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.pbf49700} fill="var(--fill-0, #191919)" id="Vector_507" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.1%_55.48%_31.36%_35.42%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.pe3ce200} fill="var(--fill-0, #191919)" id="Vector_508" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.05%_50.52%_33.73%_42.66%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p1765e1f0} fill="var(--fill-0, #191919)" id="Vector_509" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.58%_47.04%_34.78%_47.26%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p3a8c9400} fill="var(--fill-0, #191919)" id="Vector_510" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.12%_40.04%_35.69%_52.34%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p989a972} fill="var(--fill-0, #191919)" id="Vector_511" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.29%_28.8%_36.33%_61.47%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p13815680} fill="var(--fill-0, #191919)" id="Vector_512" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.26%_24.01%_39.04%_69.18%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p3640b740} fill="var(--fill-0, #191919)" id="Vector_513" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.64%_20.24%_40.03%_73.66%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.pcd41600} fill="var(--fill-0, #191919)" id="Vector_514" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.57%_15.61%_40.72%_77.57%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p2f977300} fill="var(--fill-0, #191919)" id="Vector_515" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.95%_11.83%_41.71%_82.06%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p9bd3200} fill="var(--fill-0, #191919)" id="Vector_516" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.27%_9.57%_43.12%_86.08%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p2111f980} fill="var(--fill-0, #191919)" id="Vector_517" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[7.42%_9.64%_4.52%_10.77%]" data-name="Group">
      <div className="absolute flex inset-[47.24%_82.69%_27.41%_10.86%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p22646480} fill="var(--fill-0, #191919)" id="Vector_518" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.35%_77.76%_28.43%_15.43%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p3c18e800} fill="var(--fill-0, #191919)" id="Vector_519" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.84%_74.26%_29.52%_20.03%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p2318a900} fill="var(--fill-0, #191919)" id="Vector_520" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.97%_67.81%_30.44%_25.65%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p85ef700} fill="var(--fill-0, #191919)" id="Vector_521" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.49%_66.2%_32.35%_30.08%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p19fa93f0} fill="var(--fill-0, #191919)" id="Vector_522" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.89%_63.7%_32.46%_31.44%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p3133d6f1} fill="var(--fill-0, #191919)" id="Vector_523" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.15%_62.52%_33.1%_33.66%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.pbf49700} fill="var(--fill-0, #191919)" id="Vector_524" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.9%_55.55%_31.56%_35.34%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.pec7800} fill="var(--fill-0, #191919)" id="Vector_525" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.85%_50.6%_33.93%_42.59%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.pe5b8db0} fill="var(--fill-0, #191919)" id="Vector_526" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.35%_47.12%_35.01%_47.18%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p3c537100} fill="var(--fill-0, #191919)" id="Vector_527" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.93%_40.11%_35.89%_52.27%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.pa136c00} fill="var(--fill-0, #191919)" id="Vector_528" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.09%_28.87%_36.53%_61.4%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p2ed6b070} fill="var(--fill-0, #191919)" id="Vector_529" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.06%_24.08%_39.24%_69.1%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p26088480} fill="var(--fill-0, #191919)" id="Vector_530" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.44%_20.31%_40.23%_73.58%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p1a1f0d00} fill="var(--fill-0, #191919)" id="Vector_531" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.38%_15.68%_40.92%_77.5%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p1ba86e00} fill="var(--fill-0, #191919)" id="Vector_532" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.72%_11.9%_41.94%_81.99%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p15726a00} fill="var(--fill-0, #191919)" id="Vector_533" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.07%_9.64%_43.31%_86.01%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.pbe69a00} fill="var(--fill-0, #191919)" id="Vector_534" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[7.23%_9.72%_4.72%_10.7%]" data-name="Group">
      <div className="absolute flex inset-[47.05%_82.76%_27.6%_10.79%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p29b9f200} fill="var(--fill-0, #191919)" id="Vector_535" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.15%_77.83%_28.63%_15.36%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p3784d100} fill="var(--fill-0, #191919)" id="Vector_536" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.64%_74.34%_29.72%_19.96%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p35426800} fill="var(--fill-0, #191919)" id="Vector_537" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.77%_67.89%_30.63%_25.56%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p3454c400} fill="var(--fill-0, #191919)" id="Vector_538" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.3%_66.27%_32.55%_30%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p288b0200} fill="var(--fill-0, #191919)" id="Vector_539" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.69%_63.77%_32.65%_31.37%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p97aaa00} fill="var(--fill-0, #191919)" id="Vector_540" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.92%_62.59%_33.33%_33.59%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.paa9d9a} fill="var(--fill-0, #191919)" id="Vector_541" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.7%_55.63%_31.76%_35.27%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p2b34ac00} fill="var(--fill-0, #191919)" id="Vector_542" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.66%_50.68%_34.12%_42.51%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p17a90280} fill="var(--fill-0, #191919)" id="Vector_543" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.15%_47.19%_35.21%_47.11%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p759a480} fill="var(--fill-0, #191919)" id="Vector_544" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.73%_40.18%_36.08%_52.19%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p2742da70} fill="var(--fill-0, #191919)" id="Vector_545" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.86%_28.95%_36.76%_61.32%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p2d7e2180} fill="var(--fill-0, #191919)" id="Vector_546" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.87%_24.16%_39.43%_69.02%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p18655340} fill="var(--fill-0, #191919)" id="Vector_547" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.24%_20.38%_40.42%_73.51%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p1a1f0d00} fill="var(--fill-0, #191919)" id="Vector_548" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.18%_15.76%_41.12%_77.43%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p2ef39080} fill="var(--fill-0, #191919)" id="Vector_549" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.52%_11.97%_42.14%_81.91%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p3d999200} fill="var(--fill-0, #191919)" id="Vector_550" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[24.88%_9.72%_43.51%_85.94%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p271e8440} fill="var(--fill-0, #191919)" id="Vector_551" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[7.03%_9.79%_4.92%_10.63%]" data-name="Group">
      <div className="absolute flex inset-[46.85%_82.84%_27.8%_10.72%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.pab78000} fill="var(--fill-0, #191919)" id="Vector_552" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.95%_77.9%_28.83%_15.29%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.pe58e100} fill="var(--fill-0, #191919)" id="Vector_553" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.45%_74.42%_29.91%_19.88%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1fab5880} fill="var(--fill-0, #191919)" id="Vector_554" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.58%_67.96%_30.83%_25.49%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18246 11.4967">
              <path d={svgPaths.p13aaac00} fill="var(--fill-0, #191919)" id="Vector_555" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.1%_66.35%_32.74%_29.93%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p3897ca00} fill="var(--fill-0, #191919)" id="Vector_556" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.5%_63.85%_32.85%_31.29%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p1d5b4d00} fill="var(--fill-0, #191919)" id="Vector_557" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.72%_62.66%_33.52%_33.51%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.p35668800} fill="var(--fill-0, #191919)" id="Vector_558" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.51%_55.7%_31.96%_35.2%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p3ffff800} fill="var(--fill-0, #191919)" id="Vector_559" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.46%_50.75%_34.32%_42.43%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p2f521400} fill="var(--fill-0, #191919)" id="Vector_560" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.95%_47.26%_35.41%_47.04%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pc40ab00} fill="var(--fill-0, #191919)" id="Vector_561" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.53%_40.26%_36.28%_52.12%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p2bf79d80} fill="var(--fill-0, #191919)" id="Vector_562" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.67%_29.03%_36.95%_61.24%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p32d3ef00} fill="var(--fill-0, #191919)" id="Vector_563" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.67%_24.23%_39.63%_68.95%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p25545900} fill="var(--fill-0, #191919)" id="Vector_564" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.05%_20.46%_40.62%_73.44%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.8245 9.36923">
              <path d={svgPaths.p2a7208a0} fill="var(--fill-0, #191919)" id="Vector_565" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.98%_15.83%_41.31%_77.35%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p3a7d2200} fill="var(--fill-0, #191919)" id="Vector_566" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.32%_12.04%_42.34%_81.84%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p10754180} fill="var(--fill-0, #191919)" id="Vector_567" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[24.68%_9.79%_43.71%_85.86%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p111584f0} fill="var(--fill-0, #191919)" id="Vector_568" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[6.83%_9.86%_5.11%_10.54%]" data-name="Group">
      <div className="absolute flex inset-[46.66%_82.92%_27.99%_10.63%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p2f6e7500} fill="var(--fill-0, #191919)" id="Vector_569" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.76%_77.97%_29.03%_15.21%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.pb795af0} fill="var(--fill-0, #191919)" id="Vector_570" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.25%_74.49%_30.11%_19.81%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pd4d8b40} fill="var(--fill-0, #191919)" id="Vector_571" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.38%_68.04%_31.03%_25.42%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18246 11.4967">
              <path d={svgPaths.p348919c0} fill="var(--fill-0, #191919)" id="Vector_572" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.9%_66.42%_32.94%_29.86%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p10e79b00} fill="var(--fill-0, #191919)" id="Vector_573" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.3%_63.92%_33.05%_31.22%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p34f4f900} fill="var(--fill-0, #191919)" id="Vector_574" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.52%_62.74%_33.72%_33.44%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.p7ef59f0} fill="var(--fill-0, #191919)" id="Vector_575" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.31%_55.77%_32.15%_35.13%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p2d137d00} fill="var(--fill-0, #191919)" id="Vector_576" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.26%_50.82%_34.52%_42.36%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p2f521400} fill="var(--fill-0, #191919)" id="Vector_577" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.76%_47.33%_35.6%_46.97%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1befc380} fill="var(--fill-0, #191919)" id="Vector_578" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.33%_40.33%_36.48%_52.05%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p2b6c5200} fill="var(--fill-0, #191919)" id="Vector_579" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.47%_29.1%_37.15%_61.17%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p2fc9f500} fill="var(--fill-0, #191919)" id="Vector_580" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.47%_24.31%_39.83%_68.88%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p25545900} fill="var(--fill-0, #191919)" id="Vector_581" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.85%_20.54%_40.81%_73.36%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p23d10500} fill="var(--fill-0, #191919)" id="Vector_582" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.75%_15.9%_41.54%_77.28%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p3a7d2200} fill="var(--fill-0, #191919)" id="Vector_583" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.13%_12.13%_42.53%_81.76%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83801 9.36923">
              <path d={svgPaths.p328b0e00} fill="var(--fill-0, #191919)" id="Vector_584" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[24.48%_9.86%_43.91%_85.79%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p101865b0} fill="var(--fill-0, #191919)" id="Vector_585" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[6.6%_9.93%_5.31%_10.47%]" data-name="Group">
      <div className="absolute flex inset-[46.46%_82.99%_28.19%_10.56%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p288ca300} fill="var(--fill-0, #191919)" id="Vector_586" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.56%_78.05%_29.22%_15.14%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p2a400080} fill="var(--fill-0, #191919)" id="Vector_587" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.06%_74.56%_30.3%_19.73%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p30b8b500} fill="var(--fill-0, #191919)" id="Vector_588" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.18%_68.11%_31.22%_25.35%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p16571400} fill="var(--fill-0, #191919)" id="Vector_589" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.67%_66.49%_33.17%_29.79%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p70c1000} fill="var(--fill-0, #191919)" id="Vector_590" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.1%_63.99%_33.25%_31.15%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.pfb31500} fill="var(--fill-0, #191919)" id="Vector_591" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.32%_62.81%_33.92%_33.37%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.p2d4de012} fill="var(--fill-0, #191919)" id="Vector_592" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.11%_55.85%_32.35%_35.05%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p1d5e4400} fill="var(--fill-0, #191919)" id="Vector_593" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.07%_50.9%_34.72%_42.29%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p4b32600} fill="var(--fill-0, #191919)" id="Vector_594" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.56%_47.41%_35.8%_46.89%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p2f342400} fill="var(--fill-0, #191919)" id="Vector_595" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.14%_40.41%_36.67%_51.97%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p2b6af280} fill="var(--fill-0, #191919)" id="Vector_596" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.27%_29.17%_37.35%_61.1%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p292e7900} fill="var(--fill-0, #191919)" id="Vector_597" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.27%_24.38%_40.02%_68.8%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p21b0ec80} fill="var(--fill-0, #191919)" id="Vector_598" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.66%_20.61%_41.01%_73.28%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p15101d80} fill="var(--fill-0, #191919)" id="Vector_599" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.55%_15.98%_41.74%_77.21%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p313b7a00} fill="var(--fill-0, #191919)" id="Vector_600" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.93%_12.2%_42.73%_81.69%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p17102880} fill="var(--fill-0, #191919)" id="Vector_601" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[24.29%_9.93%_44.1%_85.72%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p16a82480} fill="var(--fill-0, #191919)" id="Vector_602" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[6.4%_10.01%_5.5%_10.4%]" data-name="Group">
      <div className="absolute flex inset-[46.23%_83.07%_28.42%_10.49%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p1ec87d00} fill="var(--fill-0, #191919)" id="Vector_603" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.36%_78.12%_29.42%_15.07%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p39f25000} fill="var(--fill-0, #191919)" id="Vector_604" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.86%_74.64%_30.5%_19.66%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1c0d2e00} fill="var(--fill-0, #191919)" id="Vector_605" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.99%_68.18%_31.42%_25.27%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p2de1100} fill="var(--fill-0, #191919)" id="Vector_606" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.47%_66.57%_33.37%_29.71%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p3747d000} fill="var(--fill-0, #191919)" id="Vector_607" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.87%_64.07%_33.48%_31.08%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p12c5d680} fill="var(--fill-0, #191919)" id="Vector_608" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.13%_62.88%_34.12%_33.3%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.p3bd60000} fill="var(--fill-0, #191919)" id="Vector_609" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.91%_55.92%_32.55%_34.98%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p1db6900} fill="var(--fill-0, #191919)" id="Vector_610" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.87%_50.97%_34.91%_42.22%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.pd2cd100} fill="var(--fill-0, #191919)" id="Vector_611" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.36%_47.48%_36%_46.82%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p31cddfc0} fill="var(--fill-0, #191919)" id="Vector_612" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[28.94%_40.48%_36.87%_51.89%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p1beab900} fill="var(--fill-0, #191919)" id="Vector_613" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.07%_29.24%_37.54%_61.03%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p241abff0} fill="var(--fill-0, #191919)" id="Vector_614" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.08%_24.45%_40.22%_68.73%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p30165780} fill="var(--fill-0, #191919)" id="Vector_615" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.43%_20.68%_41.24%_73.21%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p23624400} fill="var(--fill-0, #191919)" id="Vector_616" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.36%_16.05%_41.94%_77.13%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p37ac6d80} fill="var(--fill-0, #191919)" id="Vector_617" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.74%_12.27%_42.93%_81.61%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p1b24000} fill="var(--fill-0, #191919)" id="Vector_618" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[24.09%_10.01%_44.3%_85.65%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p331908d0} fill="var(--fill-0, #191919)" id="Vector_619" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[6.21%_10.08%_5.7%_10.33%]" data-name="Group">
      <div className="absolute flex inset-[46.03%_83.14%_28.62%_10.42%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.paff3c40} fill="var(--fill-0, #191919)" id="Vector_620" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.16%_78.19%_29.62%_14.99%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p1fa20600} fill="var(--fill-0, #191919)" id="Vector_621" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.66%_74.71%_30.7%_19.59%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p38904b00} fill="var(--fill-0, #191919)" id="Vector_622" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.79%_68.25%_31.62%_25.2%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.pefbb200} fill="var(--fill-0, #191919)" id="Vector_623" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.28%_66.65%_33.56%_29.63%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p3703080} fill="var(--fill-0, #191919)" id="Vector_624" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.67%_64.14%_33.67%_31%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p27dd6b00} fill="var(--fill-0, #191919)" id="Vector_625" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.93%_62.95%_34.31%_33.22%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99372 12.165">
              <path d={svgPaths.p179d4200} fill="var(--fill-0, #191919)" id="Vector_626" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.68%_55.99%_32.78%_34.91%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p3848b000} fill="var(--fill-0, #191919)" id="Vector_627" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.67%_51.04%_35.11%_42.14%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.pd2cd100} fill="var(--fill-0, #191919)" id="Vector_628" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.16%_47.55%_36.2%_46.75%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p38aad1f0} fill="var(--fill-0, #191919)" id="Vector_629" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[28.75%_40.56%_37.07%_51.82%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p9da6500} fill="var(--fill-0, #191919)" id="Vector_630" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.88%_29.32%_37.74%_60.95%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p2afe5300} fill="var(--fill-0, #191919)" id="Vector_631" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.88%_24.52%_40.42%_68.66%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p3640b740} fill="var(--fill-0, #191919)" id="Vector_632" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.23%_20.76%_41.44%_73.14%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.pcd41600} fill="var(--fill-0, #191919)" id="Vector_633" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.16%_16.12%_42.14%_77.06%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p22d9f900} fill="var(--fill-0, #191919)" id="Vector_634" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.54%_12.34%_43.12%_81.54%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p9bd3200} fill="var(--fill-0, #191919)" id="Vector_635" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[23.89%_10.08%_44.5%_85.57%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p15dd2730} fill="var(--fill-0, #191919)" id="Vector_636" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[6.01%_10.16%_5.9%_10.25%]" data-name="Group">
      <div className="absolute flex inset-[45.83%_83.21%_28.82%_10.34%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p22646480} fill="var(--fill-0, #191919)" id="Vector_637" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.97%_78.27%_29.81%_14.91%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p13226980} fill="var(--fill-0, #191919)" id="Vector_638" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.46%_74.78%_30.9%_19.52%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p2b795b00} fill="var(--fill-0, #191919)" id="Vector_639" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.59%_68.33%_31.81%_25.13%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.pa877980} fill="var(--fill-0, #191919)" id="Vector_640" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.08%_66.72%_33.76%_29.56%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p2e49dff0} fill="var(--fill-0, #191919)" id="Vector_641" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.48%_64.21%_33.87%_30.93%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p2dbc8300} fill="var(--fill-0, #191919)" id="Vector_642" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.73%_63.03%_34.51%_33.15%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.p27c4600} fill="var(--fill-0, #191919)" id="Vector_643" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.49%_56.06%_32.98%_34.83%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p242a0d00} fill="var(--fill-0, #191919)" id="Vector_644" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.47%_51.12%_35.31%_42.07%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p1b81be00} fill="var(--fill-0, #191919)" id="Vector_645" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.97%_47.63%_36.39%_46.67%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1027d900} fill="var(--fill-0, #191919)" id="Vector_646" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[28.55%_40.63%_37.26%_51.75%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p93a000} fill="var(--fill-0, #191919)" id="Vector_647" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.68%_29.39%_37.94%_60.88%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.8602">
              <path d={svgPaths.p2ed6b070} fill="var(--fill-0, #191919)" id="Vector_648" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.68%_24.6%_40.62%_68.59%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p1cafb480} fill="var(--fill-0, #191919)" id="Vector_649" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.03%_20.83%_41.64%_73.07%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p1a1f0d00} fill="var(--fill-0, #191919)" id="Vector_650" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.96%_16.19%_42.33%_76.99%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p28129a80} fill="var(--fill-0, #191919)" id="Vector_651" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.34%_12.42%_43.32%_81.47%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p3d999200} fill="var(--fill-0, #191919)" id="Vector_652" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[23.7%_10.16%_44.69%_85.49%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p380b8b00} fill="var(--fill-0, #191919)" id="Vector_653" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[5.82%_10.24%_6.13%_10.18%]" data-name="Group">
      <div className="absolute flex inset-[45.64%_83.28%_29.01%_10.27%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.p32babdc0} fill="var(--fill-0, #191919)" id="Vector_654" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.77%_78.35%_30.01%_14.84%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.pe58e100} fill="var(--fill-0, #191919)" id="Vector_655" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.27%_74.86%_31.09%_19.44%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.pf815f80} fill="var(--fill-0, #191919)" id="Vector_656" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.39%_68.4%_32.01%_25.05%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p2d580000} fill="var(--fill-0, #191919)" id="Vector_657" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.89%_66.79%_33.96%_29.49%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.pad3080} fill="var(--fill-0, #191919)" id="Vector_658" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.28%_64.29%_34.06%_30.85%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p97aaa00} fill="var(--fill-0, #191919)" id="Vector_659" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.53%_63.1%_34.71%_33.08%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.p1fb3a700} fill="var(--fill-0, #191919)" id="Vector_660" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.29%_56.15%_33.17%_34.75%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p2b34ac00} fill="var(--fill-0, #191919)" id="Vector_661" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.28%_51.19%_35.51%_42%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p8cf9f80} fill="var(--fill-0, #191919)" id="Vector_662" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.77%_47.71%_36.59%_46.59%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p228cb200} fill="var(--fill-0, #191919)" id="Vector_663" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[28.35%_40.7%_37.46%_51.67%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.p2da3580} fill="var(--fill-0, #191919)" id="Vector_664" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.48%_29.46%_38.14%_60.81%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p298dfb00} fill="var(--fill-0, #191919)" id="Vector_665" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.48%_24.67%_40.81%_68.51%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p5cebd80} fill="var(--fill-0, #191919)" id="Vector_666" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.83%_20.9%_41.83%_72.99%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82451 9.36923">
              <path d={svgPaths.p1a1f0d00} fill="var(--fill-0, #191919)" id="Vector_667" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.77%_16.28%_42.53%_76.91%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p2ef39080} fill="var(--fill-0, #191919)" id="Vector_668" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.14%_12.49%_43.52%_81.4%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p3a350970} fill="var(--fill-0, #191919)" id="Vector_669" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[23.47%_10.24%_44.92%_85.42%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.pa2b2a00} fill="var(--fill-0, #191919)" id="Vector_670" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[5.62%_10.31%_6.33%_10.11%]" data-name="Group">
      <div className="absolute flex inset-[45.44%_83.36%_29.21%_10.2%] items-center justify-center">
        <div className="flex-none h-[9.301px] rotate-[-8.17deg] w-[8.347px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34661 9.30104">
              <path d={svgPaths.pab78000} fill="var(--fill-0, #191919)" id="Vector_671" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.54%_78.42%_30.24%_14.77%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p135a3cf0} fill="var(--fill-0, #191919)" id="Vector_672" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.07%_74.93%_31.29%_19.37%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1b7b17f0} fill="var(--fill-0, #191919)" id="Vector_673" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.2%_68.47%_32.21%_24.98%] items-center justify-center">
        <div className="flex-none h-[11.497px] rotate-[-8.17deg] w-[8.182px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18247 11.4967">
              <path d={svgPaths.p30adab00} fill="var(--fill-0, #191919)" id="Vector_674" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.69%_66.87%_34.16%_29.41%] items-center justify-center">
        <div className="flex-none h-[12.356px] rotate-[-8.17deg] w-[3.815px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81504 12.3559">
              <path d={svgPaths.p3b02c480} fill="var(--fill-0, #191919)" id="Vector_675" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.09%_64.37%_34.26%_30.78%] items-center justify-center">
        <div className="flex-none h-[11.047px] rotate-[-8.17deg] w-[5.711px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.71084 11.0467">
              <path d={svgPaths.p1d5b4d00} fill="var(--fill-0, #191919)" id="Vector_676" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.34%_63.17%_34.91%_33.01%] items-center justify-center">
        <div className="flex-none h-[12.165px] rotate-[-8.17deg] w-[3.994px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99373 12.165">
              <path d={svgPaths.p110a8900} fill="var(--fill-0, #191919)" id="Vector_677" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.1%_56.22%_33.37%_34.68%] items-center justify-center">
        <div className="flex-none h-[9.642px] rotate-[-8.17deg] w-[12.285px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2849 9.64199">
              <path d={svgPaths.p3ffff800} fill="var(--fill-0, #191919)" id="Vector_678" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.08%_51.26%_35.7%_41.93%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[8.918px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91759 9.16466">
              <path d={svgPaths.p1f4ab400} fill="var(--fill-0, #191919)" id="Vector_679" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.58%_47.78%_36.78%_46.52%] items-center justify-center">
        <div className="flex-none h-[9.165px] rotate-[-8.17deg] w-[7.247px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24687 9.16466">
              <path d={svgPaths.p1c0c3f80} fill="var(--fill-0, #191919)" id="Vector_680" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[28.12%_40.78%_37.69%_51.6%] items-center justify-center">
        <div className="flex-none h-[12.779px] rotate-[-8.17deg] w-[9.616px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61556 12.7787">
              <path d={svgPaths.pb1080f1} fill="var(--fill-0, #191919)" id="Vector_681" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.28%_29.53%_38.33%_60.74%] items-center justify-center">
        <div className="flex-none h-[9.86px] rotate-[-8.17deg] w-[13.199px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1993 9.86019">
              <path d={svgPaths.p1bc2f470} fill="var(--fill-0, #191919)" id="Vector_682" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.25%_24.74%_41.04%_68.44%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89386 9.36923">
              <path d={svgPaths.p5cebd80} fill="var(--fill-0, #191919)" id="Vector_683" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.64%_20.98%_42.03%_72.92%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.825px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.8245 9.36923">
              <path d={svgPaths.p2a7208a0} fill="var(--fill-0, #191919)" id="Vector_684" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.57%_16.35%_42.72%_76.83%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[8.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89387 9.36923">
              <path d={svgPaths.p3a7d2200} fill="var(--fill-0, #191919)" id="Vector_685" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.95%_12.56%_43.72%_81.32%] items-center justify-center">
        <div className="flex-none h-[9.369px] rotate-[-8.17deg] w-[7.838px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.838 9.36923">
              <path d={svgPaths.p10754180} fill="var(--fill-0, #191919)" id="Vector_686" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[23.27%_10.31%_45.12%_85.34%] items-center justify-center">
        <div className="flex-none h-[12.41px] rotate-[-8.17deg] w-[4.749px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.74862 12.4105">
              <path d={svgPaths.p4878d80} fill="var(--fill-0, #191919)" id="Vector_687" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[4.95%_8.83%_1.65%_10.11%]" data-name="Group">
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
      <Group50 />
      <Group51 />
      <Group52 />
      <Group53 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[8.3%_11.05%_8.96%_10.84%]" data-name="Group">
      <div className="absolute flex inset-[48.15%_84.1%_31.85%_10.93%] items-center justify-center">
        <div className="flex-none h-[7.364px] rotate-[-8.17deg] w-[6.403px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.40256 7.36446">
              <path d={svgPaths.p25fd8780} fill="var(--fill-0, #FAFAFA)" id="Vector_688" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.24%_79.14%_32.88%_15.51%] items-center justify-center">
        <div className="flex-none h-[7.229px] rotate-[-8.17deg] w-[7.003px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00253 7.22929">
              <path d={svgPaths.p2e75b400} fill="var(--fill-0, #FAFAFA)" id="Vector_689" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.71%_75.67%_33.98%_20.09%] items-center justify-center">
        <div className="flex-none h-[7.231px] rotate-[-8.17deg] w-[5.331px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33146 7.2314">
              <path d={svgPaths.p2faf2980} fill="var(--fill-0, #FAFAFA)" id="Vector_690" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.86%_69.2%_34.91%_25.71%] items-center justify-center">
        <div className="flex-none h-[9.547px] rotate-[-8.17deg] w-[6.278px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.27779 9.54652">
              <path d={svgPaths.p28fb9800} fill="var(--fill-0, #FAFAFA)" id="Vector_691" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.36%_67.61%_36.86%_30.14%] items-center justify-center">
        <div className="flex-none h-[10.406px] rotate-[-8.17deg] w-[1.882px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.88203 10.4057">
              <path d={svgPaths.p3c754c00} fill="var(--fill-0, #FAFAFA)" id="Vector_692" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.79%_65.1%_36.93%_31.51%] items-center justify-center">
        <div className="flex-none h-[9.096px] rotate-[-8.17deg] w-[3.791px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79133 9.09647">
              <path d={svgPaths.p3c98d200} fill="var(--fill-0, #FAFAFA)" id="Vector_693" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.01%_63.93%_37.57%_33.73%] items-center justify-center">
        <div className="flex-none h-[10.232px] rotate-[-8.17deg] w-[2.049px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.04928 10.232">
              <path d={svgPaths.p145f7940} fill="var(--fill-0, #FAFAFA)" id="Vector_694" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.84%_56.96%_35.96%_35.39%] items-center justify-center">
        <div className="flex-none h-[7.705px] rotate-[-8.17deg] w-[10.395px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3947 7.70541">
              <path d={svgPaths.p37246200} fill="var(--fill-0, #FAFAFA)" id="Vector_695" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.74%_51.99%_38.38%_42.66%] items-center justify-center">
        <div className="flex-none h-[7.229px] rotate-[-8.17deg] w-[6.991px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99124 7.22929">
              <path d={svgPaths.p16126280} fill="var(--fill-0, #FAFAFA)" id="Vector_696" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.22%_48.52%_39.48%_47.25%] items-center justify-center">
        <div className="flex-none h-[7.231px] rotate-[-8.17deg] w-[5.32px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32005 7.2314">
              <path d={svgPaths.p2f1ca250} fill="var(--fill-0, #FAFAFA)" id="Vector_697" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.86%_41.51%_40.35%_52.34%] items-center justify-center">
        <div className="flex-none h-[10.821px] rotate-[-8.17deg] w-[7.681px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68128 10.821">
              <path d={svgPaths.p23cf6b80} fill="var(--fill-0, #FAFAFA)" id="Vector_698" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.9%_30.28%_41.07%_61.46%] items-center justify-center">
        <div className="flex-none h-[7.924px] rotate-[-8.17deg] w-[11.268px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2683 7.92361">
              <path d={svgPaths.p36c64900} fill="var(--fill-0, #FAFAFA)" id="Vector_699" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.96%_25.48%_43.73%_69.17%] items-center justify-center">
        <div className="flex-none h-[7.414px] rotate-[-8.17deg] w-[6.966px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.96612 7.4139">
              <path d={svgPaths.p3ed59dc0} fill="var(--fill-0, #FAFAFA)" id="Vector_700" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.35%_21.69%_44.74%_73.68%] items-center justify-center">
        <div className="flex-none h-[7.402px] rotate-[-8.17deg] w-[5.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.89426 7.4023">
              <path d={svgPaths.p278b4800} fill="var(--fill-0, #FAFAFA)" id="Vector_701" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.24%_17.08%_45.45%_77.57%] items-center justify-center">
        <div className="flex-none h-[7.414px] rotate-[-8.17deg] w-[6.966px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.96612 7.4139">
              <path d={svgPaths.p398ba100} fill="var(--fill-0, #FAFAFA)" id="Vector_702" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.64%_13.29%_46.42%_82.07%] items-center justify-center">
        <div className="flex-none h-[7.416px] rotate-[-8.17deg] w-[5.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.89424 7.41593">
              <path d={svgPaths.p19780200} fill="var(--fill-0, #FAFAFA)" id="Vector_703" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.99%_11.05%_47.76%_86.09%] items-center justify-center">
        <div className="flex-none h-[10.472px] rotate-[-8.17deg] w-[2.792px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.79166 10.4722">
              <path d={svgPaths.p20666a00} fill="var(--fill-0, #FAFAFA)" id="Vector_704" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[8.3%_11.05%_8.96%_10.84%]" data-name="Group">
      <div className="absolute flex inset-[48.15%_84.1%_31.85%_10.93%] items-center justify-center">
        <div className="flex-none h-[7.364px] rotate-[-8.17deg] w-[6.403px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.40256 7.36446">
              <path d={svgPaths.p25fd8780} fill="var(--fill-0, #FAFAFA)" id="Vector_705" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[47.24%_79.14%_32.88%_15.51%] items-center justify-center">
        <div className="flex-none h-[7.229px] rotate-[-8.17deg] w-[7.003px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00253 7.22929">
              <path d={svgPaths.p2e75b400} fill="var(--fill-0, #FAFAFA)" id="Vector_706" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.71%_75.67%_33.98%_20.09%] items-center justify-center">
        <div className="flex-none h-[7.231px] rotate-[-8.17deg] w-[5.331px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33146 7.2314">
              <path d={svgPaths.p2faf2980} fill="var(--fill-0, #FAFAFA)" id="Vector_707" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.86%_69.2%_34.91%_25.71%] items-center justify-center">
        <div className="flex-none h-[9.547px] rotate-[-8.17deg] w-[6.278px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.27779 9.54652">
              <path d={svgPaths.p28fb9800} fill="var(--fill-0, #FAFAFA)" id="Vector_708" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.36%_67.61%_36.86%_30.14%] items-center justify-center">
        <div className="flex-none h-[10.406px] rotate-[-8.17deg] w-[1.882px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.88203 10.4057">
              <path d={svgPaths.p3c754c00} fill="var(--fill-0, #FAFAFA)" id="Vector_709" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[39.79%_65.1%_36.93%_31.51%] items-center justify-center">
        <div className="flex-none h-[9.096px] rotate-[-8.17deg] w-[3.791px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79133 9.09647">
              <path d={svgPaths.p3c98d200} fill="var(--fill-0, #FAFAFA)" id="Vector_710" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[37.01%_63.93%_37.57%_33.73%] items-center justify-center">
        <div className="flex-none h-[10.232px] rotate-[-8.17deg] w-[2.049px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.04928 10.232">
              <path d={svgPaths.p145f7940} fill="var(--fill-0, #FAFAFA)" id="Vector_711" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.84%_56.96%_35.96%_35.39%] items-center justify-center">
        <div className="flex-none h-[7.705px] rotate-[-8.17deg] w-[10.395px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3947 7.70541">
              <path d={svgPaths.p37246200} fill="var(--fill-0, #FAFAFA)" id="Vector_712" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.74%_51.99%_38.38%_42.66%] items-center justify-center">
        <div className="flex-none h-[7.229px] rotate-[-8.17deg] w-[6.991px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99124 7.22929">
              <path d={svgPaths.p16126280} fill="var(--fill-0, #FAFAFA)" id="Vector_713" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.22%_48.52%_39.48%_47.25%] items-center justify-center">
        <div className="flex-none h-[7.231px] rotate-[-8.17deg] w-[5.32px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32005 7.2314">
              <path d={svgPaths.p2f1ca250} fill="var(--fill-0, #FAFAFA)" id="Vector_714" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.86%_41.51%_40.35%_52.34%] items-center justify-center">
        <div className="flex-none h-[10.821px] rotate-[-8.17deg] w-[7.681px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68128 10.821">
              <path d={svgPaths.p23cf6b80} fill="var(--fill-0, #FAFAFA)" id="Vector_715" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.9%_30.28%_41.07%_61.46%] items-center justify-center">
        <div className="flex-none h-[7.924px] rotate-[-8.17deg] w-[11.268px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2683 7.92361">
              <path d={svgPaths.p36c64900} fill="var(--fill-0, #FAFAFA)" id="Vector_716" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.96%_25.48%_43.73%_69.17%] items-center justify-center">
        <div className="flex-none h-[7.414px] rotate-[-8.17deg] w-[6.966px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.96612 7.4139">
              <path d={svgPaths.p3ed59dc0} fill="var(--fill-0, #FAFAFA)" id="Vector_717" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.35%_21.69%_44.74%_73.68%] items-center justify-center">
        <div className="flex-none h-[7.402px] rotate-[-8.17deg] w-[5.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.89426 7.4023">
              <path d={svgPaths.p278b4800} fill="var(--fill-0, #FAFAFA)" id="Vector_718" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.24%_17.08%_45.45%_77.57%] items-center justify-center">
        <div className="flex-none h-[7.414px] rotate-[-8.17deg] w-[6.966px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.96612 7.4139">
              <path d={svgPaths.p398ba100} fill="var(--fill-0, #FAFAFA)" id="Vector_719" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.64%_13.29%_46.42%_82.07%] items-center justify-center">
        <div className="flex-none h-[7.416px] rotate-[-8.17deg] w-[5.894px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.89424 7.41593">
              <path d={svgPaths.p19780200} fill="var(--fill-0, #FAFAFA)" id="Vector_720" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.99%_11.05%_47.76%_86.09%] items-center justify-center">
        <div className="flex-none h-[10.472px] rotate-[-8.17deg] w-[2.792px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.79166 10.4722">
              <path d={svgPaths.p20666a00} fill="var(--fill-0, #FAFAFA)" id="Vector_721" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[4.95%_8.83%_1.65%_10.11%]" data-name="Group">
      <Group32 />
      <Group54 />
      <Group55 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[4.95%_0.19%_1.65%_0.18%]" data-name="Group">
      <div className="absolute flex inset-[5.43%_0.19%_5.48%_0.18%] items-center justify-center">
        <div className="flex-none h-[146.757px] rotate-[-93.2deg] w-[28.38px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3805 146.757">
              <path d={svgPaths.pe28d800} fill="var(--fill-0, #D63089)" id="Vector_722" />
            </svg>
          </div>
        </div>
      </div>
      <Group31 />
    </div>
  );
}

function Textos6() {
  return (
    <div className="absolute contents inset-[4.95%_0.19%_1.65%_0.18%]" data-name="Textos">
      <Group30 />
    </div>
  );
}

function Component3Meses() {
  return (
    <div className="aspect-[109.01000213623047/30.059999465942383] overflow-clip relative shrink-0 w-full" data-name="3 meses 2">
      <Textos6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="min-h-px min-w-px relative w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-center relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="md:flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch" data-name="Component 6">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[9px] py-[17px] relative size-full">
          <img alt="Logo Zoop" src={imgZoop} className="max-w-full h-auto" />
          <Frame6 />
          <img alt="70% em três meses" src={imgUltimosTresMeses} className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[0_-0.01%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.681 20.7762">
        <g id="Group_5">
          <path d={svgPaths.p7182780} fill="var(--fill-0, #CC1423)" id="Vector_723" />
          <path d={svgPaths.p16bd5e00} fill="var(--fill-0, #CC1423)" id="Vector_2_5" />
          <path d={svgPaths.p15c13d00} fill="var(--fill-0, #593220)" id="Vector_3_5" />
        </g>
      </svg>
    </div>
  );
}

function Textos7() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0_0]" data-name="Textos">
      <Group56 />
    </div>
  );
}

function Neosaldina1() {
  return (
    <div className="h-[20.776px] overflow-clip relative shrink-0 w-[148.667px]" data-name="Neosaldina 1">
      <Textos7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[30px] relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Neosaldina1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[42px] text-center w-full">
        <p className="leading-[1.2]">+109%</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">volume de conversões</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[35.86%_6.87%_25.16%_7.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_6">
          <path d={svgPaths.p327e4d00} fill="var(--fill-0, #191919)" id="Vector_724" />
          <path d={svgPaths.p16075680} fill="var(--fill-0, #191919)" id="Vector_2_6" />
          <path d={svgPaths.p22c83400} fill="var(--fill-0, #191919)" id="Vector_3_6" />
          <path d={svgPaths.p27320b00} fill="var(--fill-0, #191919)" id="Vector_4_4" />
          <path d={svgPaths.p3a396700} fill="var(--fill-0, #191919)" id="Vector_5_4" />
          <path d={svgPaths.p20c6ae80} fill="var(--fill-0, #191919)" id="Vector_6_4" />
          <path d={svgPaths.p1bdae400} fill="var(--fill-0, #191919)" id="Vector_7_4" />
          <path d={svgPaths.p4963800} fill="var(--fill-0, #191919)" id="Vector_8_3" />
        </g>
      </svg>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-[35.56%_6.99%_25.46%_7.53%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_7">
          <path d={svgPaths.p3f161b00} fill="var(--fill-0, #191919)" id="Vector_725" />
          <path d={svgPaths.p1ce23900} fill="var(--fill-0, #191919)" id="Vector_2_7" />
          <path d={svgPaths.p18bbb200} fill="var(--fill-0, #191919)" id="Vector_3_7" />
          <path d={svgPaths.p32db3100} fill="var(--fill-0, #191919)" id="Vector_4_5" />
          <path d={svgPaths.p1e190800} fill="var(--fill-0, #191919)" id="Vector_5_5" />
          <path d={svgPaths.p33faf500} fill="var(--fill-0, #191919)" id="Vector_6_5" />
          <path d={svgPaths.pfa43000} fill="var(--fill-0, #191919)" id="Vector_7_5" />
          <path d={svgPaths.pf3f9500} fill="var(--fill-0, #191919)" id="Vector_8_4" />
        </g>
      </svg>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[35.26%_7.11%_25.76%_7.41%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_8">
          <path d={svgPaths.p2f618080} fill="var(--fill-0, #191919)" id="Vector_726" />
          <path d={svgPaths.p185f1c50} fill="var(--fill-0, #191919)" id="Vector_2_8" />
          <path d={svgPaths.p2a3fce00} fill="var(--fill-0, #191919)" id="Vector_3_8" />
          <path d={svgPaths.p269a8800} fill="var(--fill-0, #191919)" id="Vector_4_6" />
          <path d={svgPaths.p6f17a80} fill="var(--fill-0, #191919)" id="Vector_5_6" />
          <path d={svgPaths.p2390e780} fill="var(--fill-0, #191919)" id="Vector_6_6" />
          <path d={svgPaths.p24ba0d80} fill="var(--fill-0, #191919)" id="Vector_7_6" />
          <path d={svgPaths.p3d4f0100} fill="var(--fill-0, #191919)" id="Vector_8_5" />
        </g>
      </svg>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute inset-[34.96%_7.23%_26.06%_7.29%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_9">
          <path d={svgPaths.p313fa000} fill="var(--fill-0, #191919)" id="Vector_727" />
          <path d={svgPaths.p37d62400} fill="var(--fill-0, #191919)" id="Vector_2_9" />
          <path d={svgPaths.p59e37c0} fill="var(--fill-0, #191919)" id="Vector_3_9" />
          <path d={svgPaths.p31f39100} fill="var(--fill-0, #191919)" id="Vector_4_7" />
          <path d={svgPaths.p16abf500} fill="var(--fill-0, #191919)" id="Vector_5_7" />
          <path d={svgPaths.pbc9f980} fill="var(--fill-0, #191919)" id="Vector_6_7" />
          <path d={svgPaths.p1ee0c4b8} fill="var(--fill-0, #191919)" id="Vector_7_7" />
          <path d={svgPaths.p87c9440} fill="var(--fill-0, #191919)" id="Vector_8_6" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute inset-[34.66%_7.35%_26.36%_7.18%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_10">
          <path d={svgPaths.p2eb4f900} fill="var(--fill-0, #191919)" id="Vector_728" />
          <path d={svgPaths.p2fde5100} fill="var(--fill-0, #191919)" id="Vector_2_10" />
          <path d={svgPaths.p59e37c0} fill="var(--fill-0, #191919)" id="Vector_3_10" />
          <path d={svgPaths.p27b67ff0} fill="var(--fill-0, #191919)" id="Vector_4_8" />
          <path d={svgPaths.p16579100} fill="var(--fill-0, #191919)" id="Vector_5_8" />
          <path d={svgPaths.p255c9100} fill="var(--fill-0, #191919)" id="Vector_6_8" />
          <path d={svgPaths.pf9db700} fill="var(--fill-0, #191919)" id="Vector_7_8" />
          <path d={svgPaths.p2c69ba80} fill="var(--fill-0, #191919)" id="Vector_8_7" />
        </g>
      </svg>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute inset-[34.36%_7.48%_26.66%_7.06%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_11">
          <path d={svgPaths.p34654400} fill="var(--fill-0, #191919)" id="Vector_729" />
          <path d={svgPaths.pc676900} fill="var(--fill-0, #191919)" id="Vector_2_11" />
          <path d={svgPaths.p1d7eb900} fill="var(--fill-0, #191919)" id="Vector_3_11" />
          <path d={svgPaths.p2a71b4f0} fill="var(--fill-0, #191919)" id="Vector_4_9" />
          <path d={svgPaths.p170b0800} fill="var(--fill-0, #191919)" id="Vector_5_9" />
          <path d={svgPaths.p2390e780} fill="var(--fill-0, #191919)" id="Vector_6_9" />
          <path d={svgPaths.p1fc24380} fill="var(--fill-0, #191919)" id="Vector_7_9" />
          <path d={svgPaths.p2be7d80} fill="var(--fill-0, #191919)" id="Vector_8_8" />
        </g>
      </svg>
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute inset-[34.06%_7.6%_26.96%_6.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_12">
          <path d={svgPaths.p36d81700} fill="var(--fill-0, #191919)" id="Vector_730" />
          <path d={svgPaths.p1bc34500} fill="var(--fill-0, #191919)" id="Vector_2_12" />
          <path d={svgPaths.p20cfd600} fill="var(--fill-0, #191919)" id="Vector_3_12" />
          <path d={svgPaths.p26136f80} fill="var(--fill-0, #191919)" id="Vector_4_10" />
          <path d={svgPaths.p3a2bfd00} fill="var(--fill-0, #191919)" id="Vector_5_10" />
          <path d={svgPaths.p3b9c7c00} fill="var(--fill-0, #191919)" id="Vector_6_10" />
          <path d={svgPaths.p11b94000} fill="var(--fill-0, #191919)" id="Vector_7_10" />
          <path d={svgPaths.p185cce80} fill="var(--fill-0, #191919)" id="Vector_8_9" />
        </g>
      </svg>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute inset-[33.76%_7.72%_27.26%_6.82%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_13">
          <path d={svgPaths.p207b2800} fill="var(--fill-0, #191919)" id="Vector_731" />
          <path d={svgPaths.p2cbd2770} fill="var(--fill-0, #191919)" id="Vector_2_13" />
          <path d={svgPaths.p3f796080} fill="var(--fill-0, #191919)" id="Vector_3_13" />
          <path d={svgPaths.p1802e600} fill="var(--fill-0, #191919)" id="Vector_4_11" />
          <path d={svgPaths.p1a78500} fill="var(--fill-0, #191919)" id="Vector_5_11" />
          <path d={svgPaths.p22a7e740} fill="var(--fill-0, #191919)" id="Vector_6_11" />
          <path d={svgPaths.p1fc24380} fill="var(--fill-0, #191919)" id="Vector_7_11" />
          <path d={svgPaths.p20374a00} fill="var(--fill-0, #191919)" id="Vector_8_10" />
        </g>
      </svg>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute inset-[33.46%_7.84%_27.56%_6.7%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_14">
          <path d={svgPaths.p1d04cf00} fill="var(--fill-0, #191919)" id="Vector_732" />
          <path d={svgPaths.p1bc34500} fill="var(--fill-0, #191919)" id="Vector_2_14" />
          <path d={svgPaths.p3f796080} fill="var(--fill-0, #191919)" id="Vector_3_14" />
          <path d={svgPaths.p18371680} fill="var(--fill-0, #191919)" id="Vector_4_12" />
          <path d={svgPaths.p1a78500} fill="var(--fill-0, #191919)" id="Vector_5_12" />
          <path d={svgPaths.p3ed15700} fill="var(--fill-0, #191919)" id="Vector_6_12" />
          <path d={svgPaths.p89bd900} fill="var(--fill-0, #191919)" id="Vector_7_12" />
          <path d={svgPaths.p3701e470} fill="var(--fill-0, #191919)" id="Vector_8_11" />
        </g>
      </svg>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute inset-[33.12%_7.96%_27.9%_6.58%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_15">
          <path d={svgPaths.pd367400} fill="var(--fill-0, #191919)" id="Vector_733" />
          <path d={svgPaths.pc676900} fill="var(--fill-0, #191919)" id="Vector_2_15" />
          <path d={svgPaths.p180b6b00} fill="var(--fill-0, #191919)" id="Vector_3_15" />
          <path d={svgPaths.pa66d900} fill="var(--fill-0, #191919)" id="Vector_4_13" />
          <path d={svgPaths.p165eba00} fill="var(--fill-0, #191919)" id="Vector_5_13" />
          <path d={svgPaths.p176ae600} fill="var(--fill-0, #191919)" id="Vector_6_13" />
          <path d={svgPaths.p3591c900} fill="var(--fill-0, #191919)" id="Vector_7_13" />
          <path d={svgPaths.p18b16000} fill="var(--fill-0, #191919)" id="Vector_8_12" />
        </g>
      </svg>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute inset-[32.82%_8.08%_28.2%_6.46%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_16">
          <path d={svgPaths.p30119380} fill="var(--fill-0, #191919)" id="Vector_734" />
          <path d={svgPaths.p3cbf1500} fill="var(--fill-0, #191919)" id="Vector_2_16" />
          <path d={svgPaths.p59e37c0} fill="var(--fill-0, #191919)" id="Vector_3_16" />
          <path d={svgPaths.pfd1e200} fill="var(--fill-0, #191919)" id="Vector_4_14" />
          <path d={svgPaths.p165eba00} fill="var(--fill-0, #191919)" id="Vector_5_14" />
          <path d={svgPaths.p3a3aff80} fill="var(--fill-0, #191919)" id="Vector_6_14" />
          <path d={svgPaths.p3591c900} fill="var(--fill-0, #191919)" id="Vector_7_14" />
          <path d={svgPaths.p3c854700} fill="var(--fill-0, #191919)" id="Vector_8_13" />
        </g>
      </svg>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute inset-[32.52%_8.2%_28.5%_6.34%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_17">
          <path d={svgPaths.p13413e80} fill="var(--fill-0, #191919)" id="Vector_735" />
          <path d={svgPaths.p3480a000} fill="var(--fill-0, #191919)" id="Vector_2_17" />
          <path d={svgPaths.p3e98d200} fill="var(--fill-0, #191919)" id="Vector_3_17" />
          <path d={svgPaths.p1eb62700} fill="var(--fill-0, #191919)" id="Vector_4_15" />
          <path d={svgPaths.p32564b40} fill="var(--fill-0, #191919)" id="Vector_5_15" />
          <path d={svgPaths.p1693e0b0} fill="var(--fill-0, #191919)" id="Vector_6_15" />
          <path d={svgPaths.p17aa1970} fill="var(--fill-0, #191919)" id="Vector_7_15" />
          <path d={svgPaths.p3c160480} fill="var(--fill-0, #191919)" id="Vector_8_14" />
        </g>
      </svg>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute inset-[32.22%_8.31%_28.8%_6.21%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_18">
          <path d={svgPaths.p769bd80} fill="var(--fill-0, #191919)" id="Vector_736" />
          <path d={svgPaths.p2d021a80} fill="var(--fill-0, #191919)" id="Vector_2_18" />
          <path d={svgPaths.p18e95c40} fill="var(--fill-0, #191919)" id="Vector_3_18" />
          <path d={svgPaths.p3fd13800} fill="var(--fill-0, #191919)" id="Vector_4_16" />
          <path d={svgPaths.p1957bef0} fill="var(--fill-0, #191919)" id="Vector_5_16" />
          <path d={svgPaths.p11a33580} fill="var(--fill-0, #191919)" id="Vector_6_16" />
          <path d={svgPaths.p5941f0} fill="var(--fill-0, #191919)" id="Vector_7_16" />
          <path d={svgPaths.p3893a200} fill="var(--fill-0, #191919)" id="Vector_8_15" />
        </g>
      </svg>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute inset-[31.92%_8.43%_29.1%_6.09%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_19">
          <path d={svgPaths.p1b92e680} fill="var(--fill-0, #191919)" id="Vector_737" />
          <path d={svgPaths.pfb1d300} fill="var(--fill-0, #191919)" id="Vector_2_19" />
          <path d={svgPaths.p20cfd600} fill="var(--fill-0, #191919)" id="Vector_3_19" />
          <path d={svgPaths.pfd1e200} fill="var(--fill-0, #191919)" id="Vector_4_17" />
          <path d={svgPaths.p16abf500} fill="var(--fill-0, #191919)" id="Vector_5_17" />
          <path d={svgPaths.p3b9c7c00} fill="var(--fill-0, #191919)" id="Vector_6_17" />
          <path d={svgPaths.pa705980} fill="var(--fill-0, #191919)" id="Vector_7_17" />
          <path d={svgPaths.p11f1f370} fill="var(--fill-0, #191919)" id="Vector_8_16" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute inset-[31.62%_8.55%_29.4%_5.97%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_20">
          <path d={svgPaths.p7589a80} fill="var(--fill-0, #191919)" id="Vector_738" />
          <path d={svgPaths.p2d021a80} fill="var(--fill-0, #191919)" id="Vector_2_20" />
          <path d={svgPaths.p18bbb200} fill="var(--fill-0, #191919)" id="Vector_3_20" />
          <path d={svgPaths.p32db3100} fill="var(--fill-0, #191919)" id="Vector_4_18" />
          <path d={svgPaths.p30402b00} fill="var(--fill-0, #191919)" id="Vector_5_18" />
          <path d={svgPaths.p3d3e880} fill="var(--fill-0, #191919)" id="Vector_6_18" />
          <path d={svgPaths.p1b7ff300} fill="var(--fill-0, #191919)" id="Vector_7_18" />
          <path d={svgPaths.p2bc11d00} fill="var(--fill-0, #191919)" id="Vector_8_17" />
        </g>
      </svg>
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute inset-[31.32%_8.67%_29.7%_5.85%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_21">
          <path d={svgPaths.p3d77100} fill="var(--fill-0, #191919)" id="Vector_739" />
          <path d={svgPaths.p2d021a80} fill="var(--fill-0, #191919)" id="Vector_2_21" />
          <path d={svgPaths.p18bbb200} fill="var(--fill-0, #191919)" id="Vector_3_21" />
          <path d={svgPaths.p1f5d6d00} fill="var(--fill-0, #191919)" id="Vector_4_19" />
          <path d={svgPaths.p30402b00} fill="var(--fill-0, #191919)" id="Vector_5_19" />
          <path d={svgPaths.p20105080} fill="var(--fill-0, #191919)" id="Vector_6_19" />
          <path d={svgPaths.p1e6e6f00} fill="var(--fill-0, #191919)" id="Vector_7_19" />
          <path d={svgPaths.p3fc62c00} fill="var(--fill-0, #191919)" id="Vector_8_18" />
        </g>
      </svg>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute inset-[31.02%_8.79%_30%_5.73%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4765 15.4381">
        <g id="Group_22">
          <path d={svgPaths.p1798080} fill="var(--fill-0, #191919)" id="Vector_740" />
          <path d={svgPaths.p3cbf1500} fill="var(--fill-0, #191919)" id="Vector_2_22" />
          <path d={svgPaths.p59e37c0} fill="var(--fill-0, #191919)" id="Vector_3_22" />
          <path d={svgPaths.p11d45180} fill="var(--fill-0, #191919)" id="Vector_4_20" />
          <path d={svgPaths.pa286400} fill="var(--fill-0, #191919)" id="Vector_5_20" />
          <path d={svgPaths.p15327000} fill="var(--fill-0, #191919)" id="Vector_6_20" />
          <path d={svgPaths.p11b94000} fill="var(--fill-0, #191919)" id="Vector_7_20" />
          <path d={svgPaths.p32494900} fill="var(--fill-0, #191919)" id="Vector_8_19" />
        </g>
      </svg>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute inset-[30.72%_8.92%_30.3%_5.62%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_23">
          <path d={svgPaths.p3803ee80} fill="var(--fill-0, #191919)" id="Vector_741" />
          <path d={svgPaths.p3480a000} fill="var(--fill-0, #191919)" id="Vector_2_23" />
          <path d={svgPaths.p180b6b00} fill="var(--fill-0, #191919)" id="Vector_3_23" />
          <path d={svgPaths.p235aa500} fill="var(--fill-0, #191919)" id="Vector_4_21" />
          <path d={svgPaths.p2480ab00} fill="var(--fill-0, #191919)" id="Vector_5_21" />
          <path d={svgPaths.p3d3e880} fill="var(--fill-0, #191919)" id="Vector_6_21" />
          <path d={svgPaths.pb3af540} fill="var(--fill-0, #191919)" id="Vector_7_21" />
          <path d={svgPaths.p3155b030} fill="var(--fill-0, #191919)" id="Vector_8_20" />
        </g>
      </svg>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute inset-[30.42%_9.04%_30.59%_5.5%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_24">
          <path d={svgPaths.pe98b00} fill="var(--fill-0, #191919)" id="Vector_742" />
          <path d={svgPaths.p1bc34500} fill="var(--fill-0, #191919)" id="Vector_2_24" />
          <path d={svgPaths.p3e98d200} fill="var(--fill-0, #191919)" id="Vector_3_24" />
          <path d={svgPaths.p13d70b80} fill="var(--fill-0, #191919)" id="Vector_4_22" />
          <path d={svgPaths.pa0fde00} fill="var(--fill-0, #191919)" id="Vector_5_22" />
          <path d={svgPaths.p20105080} fill="var(--fill-0, #191919)" id="Vector_6_22" />
          <path d={svgPaths.p1fc24380} fill="var(--fill-0, #191919)" id="Vector_7_22" />
          <path d={svgPaths.p24bee00} fill="var(--fill-0, #191919)" id="Vector_8_21" />
        </g>
      </svg>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute inset-[30.12%_9.16%_30.89%_5.38%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_25">
          <path d={svgPaths.p27c51bc0} fill="var(--fill-0, #191919)" id="Vector_743" />
          <path d={svgPaths.p1e7d4d80} fill="var(--fill-0, #191919)" id="Vector_2_25" />
          <path d={svgPaths.p25979500} fill="var(--fill-0, #191919)" id="Vector_3_25" />
          <path d={svgPaths.p5121f00} fill="var(--fill-0, #191919)" id="Vector_4_23" />
          <path d={svgPaths.p1378e00} fill="var(--fill-0, #191919)" id="Vector_5_23" />
          <path d={svgPaths.p1cfdf400} fill="var(--fill-0, #191919)" id="Vector_6_23" />
          <path d={svgPaths.p3c39e900} fill="var(--fill-0, #191919)" id="Vector_7_23" />
          <path d={svgPaths.p2bf52480} fill="var(--fill-0, #191919)" id="Vector_8_22" />
        </g>
      </svg>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute inset-[29.78%_9.28%_31.24%_5.26%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.4595 15.4381">
        <g id="Group_26">
          <path d={svgPaths.p3a10b400} fill="var(--fill-0, #191919)" id="Vector_744" />
          <path d={svgPaths.p2f5e8700} fill="var(--fill-0, #191919)" id="Vector_2_26" />
          <path d={svgPaths.p10ab3300} fill="var(--fill-0, #191919)" id="Vector_3_26" />
          <path d={svgPaths.pd158400} fill="var(--fill-0, #191919)" id="Vector_4_24" />
          <path d={svgPaths.p31fcdb00} fill="var(--fill-0, #191919)" id="Vector_5_24" />
          <path d={svgPaths.p59fbd00} fill="var(--fill-0, #191919)" id="Vector_6_24" />
          <path d={svgPaths.p1b3dba00} fill="var(--fill-0, #191919)" id="Vector_7_24" />
          <path d={svgPaths.p32f3c880} fill="var(--fill-0, #191919)" id="Vector_8_23" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[29.78%_6.87%_25.16%_5.26%]" data-name="Group">
      <Group60 />
      <Group61 />
      <Group62 />
      <Group63 />
      <Group64 />
      <Group65 />
      <Group66 />
      <Group67 />
      <Group68 />
      <Group69 />
      <Group70 />
      <Group71 />
      <Group72 />
      <Group73 />
      <Group74 />
      <Group75 />
      <Group76 />
      <Group77 />
      <Group78 />
      <Group79 />
      <Group80 />
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute inset-[32.77%_10.46%_34.23%_6.43%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.1024 13.069">
        <g id="Group_27">
          <path d={svgPaths.p191c8f80} fill="var(--fill-0, #FAFAFA)" id="Vector_745" />
          <path d={svgPaths.p7809700} fill="var(--fill-0, #FAFAFA)" id="Vector_2_27" />
          <path d={svgPaths.p1bff86f2} fill="var(--fill-0, #FAFAFA)" id="Vector_3_27" />
          <path d={svgPaths.p2322ef00} fill="var(--fill-0, #FAFAFA)" id="Vector_4_25" />
          <path d={svgPaths.p13e55700} fill="var(--fill-0, #FAFAFA)" id="Vector_5_25" />
          <path d={svgPaths.p19a2f1c0} fill="var(--fill-0, #FAFAFA)" id="Vector_6_25" />
          <path d={svgPaths.p869b80} fill="var(--fill-0, #FAFAFA)" id="Vector_7_25" />
          <path d={svgPaths.p4edd300} fill="var(--fill-0, #FAFAFA)" id="Vector_8_24" />
        </g>
      </svg>
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute inset-[32.77%_10.46%_34.23%_6.43%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.1024 13.069">
        <g id="Group_28">
          <path d={svgPaths.p191c8f80} fill="var(--fill-0, #FAFAFA)" id="Vector_746" />
          <path d={svgPaths.p7809700} fill="var(--fill-0, #FAFAFA)" id="Vector_2_28" />
          <path d={svgPaths.p1bff86f2} fill="var(--fill-0, #FAFAFA)" id="Vector_3_28" />
          <path d={svgPaths.p2322ef00} fill="var(--fill-0, #FAFAFA)" id="Vector_4_26" />
          <path d={svgPaths.p13e55700} fill="var(--fill-0, #FAFAFA)" id="Vector_5_26" />
          <path d={svgPaths.p19a2f1c0} fill="var(--fill-0, #FAFAFA)" id="Vector_6_26" />
          <path d={svgPaths.p869b80} fill="var(--fill-0, #FAFAFA)" id="Vector_7_26" />
          <path d={svgPaths.p4edd300} fill="var(--fill-0, #FAFAFA)" id="Vector_8_25" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[29.78%_6.87%_25.16%_5.26%]" data-name="Group">
      <Group59 />
      <Group81 />
      <Group82 />
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[-0.01%_0.02%_0.02%_-0.01%]" data-name="Group">
      <div className="absolute flex inset-[-0.01%_0.02%_0.02%_-0.01%] items-center justify-center">
        <div className="flex-none h-[98.526px] rotate-[-87.46deg] w-[35.265px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.2652 98.5257">
              <path d={svgPaths.p30d98100} fill="var(--fill-0, #D63089)" id="Vector_747" />
            </svg>
          </div>
        </div>
      </div>
      <Group58 />
    </div>
  );
}

function Textos8() {
  return (
    <div className="absolute contents inset-[-0.01%_0.02%_0.02%_-0.01%]" data-name="Textos">
      <Group57 />
    </div>
  );
}

function EmUmAno() {
  return (
    <div className="h-[39.603px] max-h-[39.603458404541016px] max-w-[100px] overflow-clip relative shrink-0 w-[100px]" data-name="Em um ano 1">
      <Textos8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="min-h-px min-w-px relative w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="md:flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch" data-name="Component 3">
      <div aria-hidden="true" className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[9px] py-[17px] relative size-full">
          <img alt="Logo Neosaldina" src={imgNeosaldina} className="max-w-full h-auto" />
          <Frame9 />
          <img alt="109% em um ano" src={imgEmUmAno} className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] items-stretch md:items-start relative shrink-0 w-full">
      <Component1 />
      <Component2 />
      <Component />
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

function Section5() {
  return (
    <div id="resultados" className="bg-[#d92b8a] w-full content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[24px] items-start px-4 sm:px-8 lg:px-[75px] py-10 lg:py-[80px] relative shrink-0 w-full max-w-[1366px] mx-auto" data-name="Section 11">
      <Titulo1 />
      <Espaco1 />
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

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Espaco2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[24px] relative shrink-0 w-full" data-name="Espaço">
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="bg-[#191919] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0" data-name="CTA Papoca">
        <div aria-hidden="true" className="absolute border-2 border-[#051a30] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-start leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[28px] tracking-[-1.12px] whitespace-nowrap">
          <p className="leading-[normal]">Ver resultados</p>
        </div>
      </div>
    </div>
  );
}

function Titulo2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[24px] relative shrink-0 w-full max-w-[804px]" data-name="Título">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full">
        <p className="leading-[1.3]">Por que a Papoca?</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[26px] sm:text-[32px] lg:text-[40px] tracking-[-1.2px] w-full">
        <p>
          <span className="leading-[1.2]">{`A única agência boutique de `}</span>
          <span className="leading-[1.2] text-[#d92b8a]">{`SEO & GEO`}</span>
          <span className="leading-[1.2]">{` do Brasil.`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] tracking-[-0.32px] w-full">
        <p className="text-[16px]">
          <span className="leading-[1.4]">{`Boutique não é tamanho, `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic tracking-[0.32px]">é comprometimento</span>
          <span className="leading-[1.4]">. Cada cliente tem um time que conhece seu negócio com profundidade.</span>
        </p>
      </div>
      <div className="grid gap-4 w-full sm:grid-cols-2">
        <div className="border border-[#d92b8a] rounded-[2px] px-[16px] py-[20px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#d92b8a] text-[20px] leading-[1.3] mb-2">
            Modelo boutique, Atendimento sob medida.
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#191919] text-[14px] leading-[1.4]">
            Boutique não é tamanho, é comprometimento. Cada cliente tem um time que conhece seu negócio com profundidade.
          </p>
        </div>
        <div className="border border-[#d92b8a] rounded-[2px] px-[16px] py-[20px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#d92b8a] text-[20px] leading-[1.3] mb-2">
            SEO e GEO em sinergia na sua estratégia.
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#191919] text-[14px] leading-[1.4]">
            Enquanto o mercado ainda debate o que é GEO, a Papoca já mede, monitora e otimiza presença em IAs.
          </p>
        </div>
        <div className="border border-[#d92b8a] rounded-[2px] px-[16px] py-[20px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#d92b8a] text-[20px] leading-[1.3] mb-2">
            Transparência total. Flexibilidade real.
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#191919] text-[14px] leading-[1.4]">
            Sem pacote. Sem hora vendida. Plataforma própria, relatórios claros e estratégia que se adapta ao mercado.
          </p>
        </div>
        <div className="border border-[#d92b8a] rounded-[2px] px-[16px] py-[20px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#d92b8a] text-[20px] leading-[1.3] mb-2">
            Estratégia local. Alcance global.
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#191919] text-[14px] leading-[1.4]">
            LATAM, Estados Unidos e Europa, com redatores nativos em PT, ES, EN e FR e estratégia local para cada mercado.
          </p>
        </div>
      </div>
      <Frame45 />
    </div>
  );
}

function Section6() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-4 sm:px-8 lg:px-[75px] py-10 lg:py-[80px] relative shrink-0 w-full max-w-[1366px] mx-auto" data-name="Section 12">
      <Titulo2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-start min-h-px min-w-px relative" data-name="Section">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] w-full">
        <p className="leading-[1.3]">Serviços</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[0px] text-[32px] sm:text-[40px] tracking-[-1.2px] w-full">
        <p className="leading-[1.2] mb-0 text-[#f9f9f9]">Tudo que você</p>
        <p>
          <span className="leading-[1.2] text-[#f9f9f9]">{`precisa para `}</span>
          <span className="leading-[1.2]">{`SEO, GEO `}</span>
          <span className="leading-[1.2] text-[#f9f9f9]">e conteúdo.</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[14px] sm:text-[16px] w-full">
        <p className="leading-[1.4]">
          Sem pacotes genéricos. Cada escopo é desenhado a partir do diagnóstico do seu negócio.
        </p>
      </div>
      <div className="bg-[#d92b8a] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0 w-full lg:w-[413px]" data-name="CTA Papoca">
        <div aria-hidden="true" className="absolute border-2 border-[#d92b8a] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[20px] sm:text-[24px] lg:text-[28px] tracking-[-0.96px] sm:tracking-[-1.12px] text-center sm:text-left">
          <p className="leading-[normal]">Conversar sobre meu projeto</p>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.5 20">
        <g clipPath="url(#clip0_1_1697)" id="Frame 56">
          <path d="M0 10H596.5" id="Vector 5" stroke="var(--stroke-0, #F9F9F9)" strokeOpacity="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1697">
            <rect fill="white" height="20" width="596.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.5 20">
        <g clipPath="url(#clip0_1_1697)" id="Frame 56_2">
          <path d="M0 10H596.5" id="Vector 5_2" stroke="var(--stroke-0, #F9F9F9)" strokeOpacity="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1697_2">
            <rect fill="white" height="20" width="596.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.5 20">
        <g clipPath="url(#clip0_1_1697)" id="Frame 56_3">
          <path d="M0 10H596.5" id="Vector 5_3" stroke="var(--stroke-0, #F9F9F9)" strokeOpacity="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1697_3">
            <rect fill="white" height="20" width="596.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.5 20">
        <g clipPath="url(#clip0_1_1697)" id="Frame 56_4">
          <path d="M0 10H596.5" id="Vector 5_4" stroke="var(--stroke-0, #F9F9F9)" strokeOpacity="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1697_4">
            <rect fill="white" height="20" width="596.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.5 20">
        <g clipPath="url(#clip0_1_1697)" id="Frame 56_5">
          <path d="M0 10H596.5" id="Vector 5_5" stroke="var(--stroke-0, #F9F9F9)" strokeOpacity="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1697_5">
            <rect fill="white" height="20" width="596.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.5 20">
        <g clipPath="url(#clip0_1_1697)" id="Frame 56_6">
          <path d="M0 10H596.5" id="Vector 5_6" stroke="var(--stroke-0, #F9F9F9)" strokeOpacity="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1697_6">
            <rect fill="white" height="20" width="596.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.5 20">
        <g clipPath="url(#clip0_1_1697)" id="Frame 56_7">
          <path d="M0 10H596.5" id="Vector 5_7" stroke="var(--stroke-0, #F9F9F9)" strokeOpacity="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1697_7">
            <rect fill="white" height="20" width="596.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.5 20">
        <g clipPath="url(#clip0_1_1697)" id="Frame 56_8">
          <path d="M0 10H596.5" id="Vector 5_8" stroke="var(--stroke-0, #F9F9F9)" strokeOpacity="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1697_8">
            <rect fill="white" height="20" width="596.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
      <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[0px] tracking-[-0.48px]">
          <ul>
            <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
              <span className="leading-[1.4]">{`GEO `}</span>
              <span className="leading-[1.4] text-[#d92b8a]">- diagnóstico, monitoramento e otimização de presença em IA</span>
            </li>
          </ul>
        </div>
      </div>
      <Frame58 />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[0.32px] w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.4]">Consultoria e planejamento de SEO</span>
            </li>
          </ul>
        </div>
      </div>
      <Frame59 />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[0.32px] w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.4]">SEO técnico on-page e off-page</span>
            </li>
          </ul>
        </div>
      </div>
      <Frame60 />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[0.32px] w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.4]">Produção e otimização de conteúdo</span>
            </li>
          </ul>
        </div>
      </div>
      <Frame61 />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[0.32px] w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.4]">Link building</span>
            </li>
          </ul>
        </div>
      </div>
      <Frame62 />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[0.32px] w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.4]">Ebooks, infográficos, imagens e vídeos</span>
            </li>
          </ul>
        </div>
      </div>
      <Frame63 />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[0.32px] w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.4]">Web analytics</span>
            </li>
          </ul>
        </div>
      </div>
      <Frame64 />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[0.32px] w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.4]">Criação de landing pages</span>
            </li>
          </ul>
        </div>
      </div>
      <Frame65 />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] tracking-[0.32px] w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.4]">Redatores nativos em PT, ES, EN e FR</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[23px] items-start lg:items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Section1 />
      </div>
      <Frame17 />
    </div>
  );
}

function Section() {
  return (
    <section
      id="servicos"
      className="bg-[#191919] px-4 sm:px-8 lg:px-[75px] py-10 lg:py-[80px] w-full"
      data-name="Section"
    >
      <div className="max-w-[1366px] mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#f9f9f9] text-[16px] w-full">
            <p className="leading-[1.3]">Serviços</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic text-[#d92b8a] text-[0px] text-[32px] sm:text-[40px] tracking-[-1.2px] w-full">
            <p className="leading-[1.2] mb-0 text-[#f9f9f9]">Tudo que você</p>
            <p>
              <span className="leading-[1.2] text-[#f9f9f9]">{`precisa para `}</span>
              <span className="leading-[1.2]">{`SEO, GEO `}</span>
              <span className="leading-[1.2] text-[#f9f9f9]">e conteúdo.</span>
            </p>
          </div>
          <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic text-[#f9f9f9] text-[14px] sm:text-[16px] w-full">
            <p className="leading-[1.4]">
              Sem pacotes genéricos. Cada escopo é desenhado a partir do diagnóstico do seu negócio.
            </p>
          </div>
          <div className="bg-[#d92b8a] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0 w-full lg:w-[413px]" data-name="CTA Papoca">
            <div aria-hidden="true" className="absolute border-2 border-[#d92b8a] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[20px] sm:text-[24px] lg:text-[28px] tracking-[-0.96px] sm:tracking-[-1.12px] text-center sm:text-left">
              <p className="leading-[normal]">Conversar sobre meu projeto</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#d92b8a] text-[16px] leading-[1.4]">
            <span>{`GEO `}</span>
            <span className="text-[#d92b8a]">- diagnóstico, monitoramento e otimização de presença em IA</span>
          </p>
          <ul className="space-y-2 font-['Inter:Bold',sans-serif] font-bold text-[#f9f9f9] text-[16px] leading-[1.4]">
            <li className="list-disc ms-6">Consultoria e planejamento de SEO</li>
            <li className="list-disc ms-6">SEO técnico on-page e off-page</li>
            <li className="list-disc ms-6">Produção e otimização de conteúdo</li>
            <li className="list-disc ms-6">Link building</li>
            <li className="list-disc ms-6">Ebooks, infográficos, imagens e vídeos</li>
            <li className="list-disc ms-6">Web analytics</li>
            <li className="list-disc ms-6">Criação de landing pages</li>
            <li className="list-disc ms-6">Redatores nativos em PT, ES, EN e FR</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Group83() {
  return (
    <div className="absolute inset-[0_9.08%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.9237 91">
        <g id="Group_29">
          <path d="M45.4458 0H0V91H45.4458V0Z" fill="var(--fill-0, #F9F9F9)" id="Vector_748" />
          <g id="Group_2_2">
            <path d={svgPaths.p719c600} fill="var(--fill-0, #F9F9F9)" id="Vector_2_29" />
            <path d={svgPaths.p28fd0d00} fill="var(--fill-0, #F9F9F9)" id="Vector_3_29" />
            <path d={svgPaths.p30284000} fill="var(--fill-0, #F9F9F9)" id="Vector_4_27" />
            <path d={svgPaths.p38bb5080} fill="var(--fill-0, #F9F9F9)" id="Vector_5_27" />
            <path d={svgPaths.p3d7f7e80} fill="var(--fill-0, #F9F9F9)" id="Vector_6_27" />
            <path d={svgPaths.p35291d80} fill="var(--fill-0, #F9F9F9)" id="Vector_7_27" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Heading2Link() {
  return (
    <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-name="Heading 2 → Link">
      <div className="flex flex-col font-['Satoshi:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[14px]">© {new Date().getFullYear()} Agência Papoca</p>
      </div>
    </div>
  );
}

function ListItemLink() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] isolate items-center justify-end leading-[0] min-h-px min-w-px not-italic relative text-right text-white whitespace-nowrap" data-name="List → Item → Link">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Regular',sans-serif] justify-center relative shrink-0 text-[14px] z-[2]">
        <p className="leading-[14px]"></p>
      </div>
      <div className="flex flex-col font-['Satoshi:Regular',sans-serif] justify-center relative shrink-0 text-[16px] z-[1]">
        <p className="leading-[24px]">contato@agenciapapoca.com.br</p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-[10px] pt-[30px] px-[10px] relative w-full">
          <Heading2Link />
          <ListItemLink />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[15px] items-start px-4 sm:px-8 lg:px-[75px] py-10 lg:py-[60px] relative w-full">
        <div className="h-[91px] overflow-clip relative shrink-0 w-[100px]" data-name="Layer_1">
          <img alt="Logo Papoca" className="absolute max-w-none object-cover size-full" src={imgLogo} />
        </div>
        <div className="flex flex-col font-['Satoshi:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[14px] sm:text-[16px] w-full">
          <p className="leading-relaxed">
            Somos uma agência boutique. Unimos consultoria em SEO e excelência em criação de conteúdo​. Possuímos equipes especializadas em SEO, Marketing de Conteúdo e Inbound Marketing para fazer sua empresa crescer.
          </p>
        </div>
        <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.25)] border-solid border-t inset-0 pointer-events-none" />
        </div>
        <Section3 />
      </div>
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
      <Section5 />
      <Section6 />
      <Section />
      <Section2 />
    </div>
  );
}
