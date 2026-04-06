import React from "react";
import imgPierre from "@/assets/pierre/pierre-veyrat.jpg";

export default function PalestranteLlmSection() {
  return (
    <section
      id="palestrante"
      className="w-full bg-white px-4 sm:px-8 md:px-[75px] py-16 md:py-24"
    >
      <div className="max-w-[1366px] mx-auto">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-center">
          {/* Left - Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-[#f0f0f0] shadow-lg flex-shrink-0">
              <img
                src={imgPierre}
                alt="Pierre Veyrat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-6">
            <p className="font-['Inter',sans-serif] font-normal text-[#d92b8a] text-[13px] uppercase tracking-widest">
              O PALESTRANTE
            </p>

            <div>
              <h2 className="font-['Inter',sans-serif] font-bold text-[36px] sm:text-[44px] leading-[1.1] text-[#0a0e27] mb-1">
                Pierre Veyrat
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-[15px] text-[#888] uppercase tracking-wide">
                CEO @ AGÊNCIA PAPOCA
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[1.7] text-[#444]">
                Pierre Veyrat é cofundador e CEO da Papoca, agência boutique com
                abordagem mão na massa em SEO, GEO e conteúdo, com atuação global
                e visão local. Ele também compartilha análises e leituras técnicas
                sobre mudanças na busca, como os impactos de Core Updates e da IA
                na SERP.
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[1.7] text-[#444]">
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
