import React from "react";

const steps = [
  {
    numero: "01",
    titulo: "A nova entidade navegando na internet",
    descricao:
      "Como as IAs estão navegando na internet para buscar informações e compilar dados.",
  },
  {
    numero: "02",
    titulo: "A nova jornada de compra",
    descricao:
      "A confiança nas IAs está aumentando. Quanto do seu funil já está acontecendo fora da sua visão?",
  },
  {
    numero: "03",
    titulo: "Como as IAs escolhem quem citar?",
    descricao:
      "Análise com mais de 3 milhões de prompts para dizer com propriedade de onde vêm as menções nas IAs?",
  },
  {
    numero: "04",
    titulo: "Na prática: como é um diagnóstico de GEO?",
    descricao:
      "E o principal: como criar um plano de ação à partir de um diagnóstico real, com dados reais.",
  },
];

export default function ProgramaLlmSection() {
  return (
    <section
      id="programa"
      className="w-full bg-white px-4 sm:px-8 md:px-[75px] py-16 md:py-24"
    >
      <div className="max-w-[1366px] mx-auto">
        {/* Label */}
        <p className="font-['Inter',sans-serif] font-normal text-[#d92b8a] text-[13px] uppercase tracking-widest mb-6">
          O PROGRAMA
        </p>

        {/* Heading */}
        <h2 className="font-['Inter',sans-serif] font-bold text-[32px] sm:text-[44px] md:text-[52px] leading-[1.15] text-[#0a0e27] tracking-tight mb-8 max-w-[900px]">
          O que você vai aprender em 50 minutos de imersão.
        </h2>

        {/* Description */}
        <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[1.6] text-[#444] mb-16 max-w-[860px]">
          Depois do sucesso da{" "}
          <span className="text-[#d92b8a] font-medium">
            palestra do Pierre Veyrat no CMO Summit
          </span>
          , e de muitos pedidos de quem não pode estar presente, vamos apresentar
          o conteúdo na íntegra neste webinar.
        </p>

        {/* Steps Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="font-['Inter',sans-serif] font-bold text-[80px] md:text-[100px] leading-none text-[#e8eaf0] select-none">
                {step.numero}
              </span>
              <h3 className="font-['Inter',sans-serif] font-bold text-[16px] sm:text-[17px] leading-[1.3] text-[#0a0e27]">
                {step.titulo}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[1.6] text-[#666]">
                {step.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
