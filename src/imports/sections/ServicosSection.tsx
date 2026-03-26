import React from "react";

export default function ServicosSection() {
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

