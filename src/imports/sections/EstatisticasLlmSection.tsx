import React from "react";

interface Stat {
  valor: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  {
    valor: "3M",
    label: "Prompts Analisados",
    prefix: "+",
  },
  {
    valor: "500",
    label: "Projetos Entregues",
    prefix: "+",
  },
  {
    valor: "140K",
    label: "Prompts por produto",
    prefix: "+",
  },
  {
    valor: "7",
    label: "LLMs analisadas",
  },
];

export default function EstatisticasLlmSection() {
  return (
    <section
      id="estatisticas"
      className="relative w-full bg-[#0a0e27] px-4 sm:px-8 md:px-[75px] py-16 md:py-24"
    >
      <div className="max-w-[1366px] mx-auto">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left - Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] text-[#f9f9f9]">
                Como dominar o share of voice nas IAs?
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-[#b3b3b3]">
              <p className="font-['Inter:Light',sans-serif] font-light text-[14px] sm:text-[16px] leading-[1.6]">
                Não falamos sobre lorem. Apresentamos o que aprendemos processando milhões de iterações em projetos reais e 815 análises.
              </p>
              <p className="font-['Inter:Light',sans-serif] font-light text-[14px] sm:text-[16px] leading-[1.6]">
                Analise de 7 LLMs diferentes: ChatGPT, Claude, Gemini, Perplexity, Deepseek, Google AI e Deepseek.
              </p>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-[#1a1f3a] rounded-lg p-6 sm:p-8 bg-gradient-to-br from-[#191f35] to-[#0a0e27]"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#d92b8a] leading-[1]">
                    {stat.prefix}
                    {stat.valor}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] md:text-[18px] text-white leading-[1.4]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
