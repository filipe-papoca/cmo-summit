import React from "react";
import imgPierre from "@/assets/pierre/pierre-veyrat.webp";

export default function PalestranteLlmSection() {
  return (
    <section
      id="palestrante"
      className="w-full bg-[#f9f9f9] px-4 sm:px-8 md:px-[75px] py-16 md:py-24"
    >
      <div className="max-w-[1366px] mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] max-w-full rounded-full overflow-hidden border-4 border-[#ececec] shadow-lg flex-shrink-0">
              <img
                src={imgPierre}
                alt="Pierre Veyrat"
                className="w-full h-full object-cover object-[center_22%]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-['Inter',sans-serif] font-bold text-[#d92b8a] text-[20px] uppercase tracking-widest">
              O PALESTRANTE
            </p>

            <div>
              <h2 className="font-['Inter',sans-serif] font-bold text-[36px] sm:text-[44px] leading-[1.1] text-[#051a30] mb-1">
                Pierre Veyrat
              </h2>
              <p className="font-['Inter',sans-serif] font-light text-[24px] text-black uppercase tracking-wide">
                CEO @ AGÊNCIA PAPOCA
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-['Inter',sans-serif] font-light text-[16px] sm:text-[16px] leading-[1.7] text-[#444]">
                Pierre Veyrat é cofundador e CEO da Papoca, agência boutique com
                abordagem mão na massa em SEO, GEO e conteúdo, com atuação global
                e visão local. Ele também compartilha análises e leituras técnicas
                sobre mudanças na busca, como os impactos de Core Updates e da IA
                na SERP.
              </p>
              <p className="font-['Inter',sans-serif] font-light text-[15px] sm:text-[16px] leading-[1.7] text-[#444]">
                Neste webinar, Pierre compartilhará insights exclusivos de como as
                marcas devem se posicionar para não serem ignoradas pelos novos
                mecanismos de resposta direta que estão substituindo os links de
                busca tradicionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
