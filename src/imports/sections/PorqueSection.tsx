import React from "react";

export default function PorqueSection() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-4 sm:px-8 md:px-[75px] py-10 md:py-[80px] relative shrink-0 w-full max-w-[1366px] mx-auto" data-name="Section 12">
      <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[24px] relative shrink-0 w-full max-w-[804px]" data-name="Título">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full">
          <p className="leading-[1.3]">Por que a Papoca?</p>
        </div>
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[26px] sm:text-[32px] md:text-[40px] tracking-[-1.2px] w-full">
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
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="bg-[#191919] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0" data-name="CTA Papoca">
            <div aria-hidden="true" className="absolute border-2 border-[#051a30] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-start leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[28px] tracking-[-1.12px] whitespace-nowrap">
              <p className="leading-[normal]">Ver resultados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

