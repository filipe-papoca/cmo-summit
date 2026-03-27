import React from "react";
import svgPaths from "./svg-hjkq0v1ynh";
import imgLogo from "@/assets/logo-papoca.png";
import imgHero from "@/assets/hero-background.webp";
import imgPalestra from "@/assets/pierre/palestra-pierre-cmo-summit.webp";

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
      <a
        href="#lead-form"
        className="bg-[#d92b8a] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0"
        data-name="CTA Papoca"
      >
        <div aria-hidden="true" className="absolute border-2 border-[#d92b8a] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[18px] sm:text-[20px] lg:text-[24px] tracking-[-0.72px] sm:tracking-[-0.96px] whitespace-normal sm:whitespace-nowrap">
          <p className="leading-[normal]">Fale conosco</p>
        </div>
      </a>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div
        className="h-[45px] overflow-clip relative shrink-0 w-[50px]"
        data-name="Layer_1"
      >
        <Group />
        <div
          className="absolute inset-[91.11%_0_4.02%_95.45%]"
          data-name="Vector"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 2.2771 2.19047"
          >
            <path
              d={svgPaths.p32834200}
              fill="var(--fill-0, #F9F9F9)"
              id="Vector_2"
            />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
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
    <div
      className="content-stretch flex items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function BlocoEsquerdo1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative"
      data-name="Bloco esquerdo"
    >
      <Container />
    </div>
  );
}

function PrimeiraSecao1() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Primeira seção"
    >
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
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4]">
            CMO Summit®
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Frame 45">
          <path d={svgPaths.pef7d600} fill="#D92B8A" id="â" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <Frame41 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px] tracking-[-0.32px]">
        <p className="leading-[1.4]">
          Atendimento direto com os fundadores nos dois dias do evento
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <Frame41 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[16px] tracking-[-0.32px]">
        <p className="leading-[1.4]">
          Estratégia personalizada, não um pacote pronto
        </p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Frame 45_3">
          <path d={svgPaths.pef7d600} fill="var(--fill-0, #D92B8A)" id="â_3" />
        </g>
      </svg>
    </div>
  );
}

function BlocoEsquerdo() {
  return (
    <div
      className="content-stretch flex md:flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative"
      data-name="Bloco esquerdo"
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#f9f9f9] text-[16px] w-full">
          <p className="leading-[1.3]">CMO Summit 2026</p>
        </div>
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic text-[#f9f9f9] text-[26px] sm:text-[32px] lg:text-[40px] tracking-[-1.2px] w-full">
          <p>
            <span className="leading-[1.2]">GEO para CMOs: dominar o </span>
            <span className="leading-[1.2] text-[#d92b8a]">share of voice</span>
            <span className="leading-[1.2]"> nas respostas de IAs</span>
          </p>
        </div>
        <div className="rounded-[2px] overflow-hidden w-full">
          <img
            src={imgPalestra}
            alt="Palestra no CMO Summit sobre GEO"
            className="w-full h-[270px] rounded-md object-cover object-center"
          />
        </div>
      </div>

      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] gap-4 not-italic text-[#f9f9f9] text-[14px] sm:text-[16px] w-full">
        <p className="leading-[1.5]">
          IAs se tornam a interface principal de busca e recomendação,
          comprimindo o funil em um fluxo conversacional. 43% dos consumidores
          já descobriram marcas via IA e 86% confiam moderada/altamente nessas
          recomendações.
        </p>
        <p className="leading-[1.5]">
          O foco migra para presença nas respostas geradas, seu share of voice
          em ambientes generativos. Surge o GEO, que expande o SEO com cinco
          pilares: SEO técnico, conteúdo on‑page, PR digital, presença social e
          reputação construída por usuários. GEO é responsabilidade da empresa
          inteira: produto, atendimento e CS também viram conteúdo que
          influencia a IA.
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch gap-12 flex flex-col gap-3 items-stretch overflow-clip relative shrink-0 w-full">
      <p className="md:flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[24px] text-center">Receba o conteúdo da palestra por e-mail</p>
      <div className="w-full max-w-[600px] mx-auto mt-3">
        <div className="relative rounded-[16px]">
          <div className="overflow-clip rounded-[inherit] size-full">
            <form
              action="https://agenciapapoca.us17.list-manage.com/subscribe/post?u=200cd0a061548e0c1a0d7f162&amp;id=bf2293ff48&amp;f_id=005fade3f0"
              method="post"
              target="_blank"
              className="content-stretch flex flex-col gap-3 p-4 bg-transparent"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="mce-FNAME" className="text-[#f9f9f9] text-sm">Seu nome</label>
                <div className="relative rounded-[16px]">
                  <div className="overflow-clip rounded-[inherit]">
                    <div className="p-3">
                      <input
                        id="mce-FNAME"
                        name="FNAME"
                        type="text"
                        pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$"
                        title="Use apenas letras"
                        className="w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#5d5d5d]"
                        placeholder="Seu nome"
                        onChange={(e) => {
                          const onlyLetters = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
                          e.target.value = onlyLetters;
                        }}
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#f9f9f9] inset-0 pointer-events-none rounded-[16px]" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="mce-EMAIL" className="text-[#f9f9f9] text-sm">Seu e-mail *</label>
                <div className="relative rounded-[16px]">
                  <div className="overflow-clip rounded-[inherit]">
                    <div className="p-3">
                      <input id="mce-EMAIL" name="EMAIL" type="email" required className="w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#5d5d5d]" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#f9f9f9] inset-0 pointer-events-none rounded-[16px]" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="mce-MMERGE9" className="text-[#f9f9f9] text-sm">Celular</label>
                <div className="relative rounded-[16px]">
                  <div className="overflow-clip rounded-[inherit]">
                    <div className="p-3">
                      <input
                        id="mce-MMERGE9"
                        name="MMERGE9"
                        type="text"
                        inputMode="numeric"
                        pattern="^\(\d{2}\)\s9\d{4}-\d{4}$"
                        title="Use o formato (11) 99999-9999"
                        className="w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#5d5d5d]"
                        placeholder="(11) 99999-9999"
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
                          let formatted = digits;
                          if (digits.length > 2 && digits.length <= 7) {
                            formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
                          } else if (digits.length > 7) {
                            formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
                          }
                          e.target.value = formatted;
                        }}
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#f9f9f9] inset-0 pointer-events-none rounded-[16px]" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="mce-MMERGE12" className="text-[#f9f9f9] text-sm">Investimento mensal atual em SEO, GEO e conteúdo</label>
                <div className="relative rounded-[16px]">
                  <div className="overflow-clip rounded-[inherit]">
                    <div className="p-3">
                      <select id="mce-MMERGE12" name="MMERGE12" className="w-full bg-transparent outline-none text-[#f9f9f9]">
                        <option value="" className="text-[#191919]"></option>
                        <option value="Menos de 20k" className="text-[#191919]">Menos de 20k</option>
                        <option value="Entre 20k e 50k" className="text-[#191919]">Entre 20k e 50k</option>
                        <option value="Entre 50k e 100k" className="text-[#191919]">Entre 50k e 100k</option>
                        <option value="Mais de 100k" className="text-[#191919]">Mais de 100k</option>
                      </select>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#f9f9f9] inset-0 pointer-events-none rounded-[16px]" />
                </div>
              </div>

              <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                <input type="text" name="b_200cd0a061548e0c1a0d7f162_bf2293ff48" tabIndex={-1} defaultValue="" />
              </div>

              <div className="bg-[#d92b8a]">
                <div className="p-3 text-center">
                  <input type="submit" name="subscribe" value="Enviar" className="text-[#f9f9f9] cursor-pointer bg-transparent" />
                </div>
              </div>
            </form>
          </div>
          <div aria-hidden="true" className="absolute border border-[#5d5d5d] inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div id="lead-form" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
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
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">
            Seu nome completo
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
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
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">
            Nome da empresa
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
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
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">
            seu@empresa.com
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
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
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">
            (00) 00000-0000
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
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
        <span className="leading-[normal]">
          Investimento mensal atual em SEO, GEO e conteúdo
        </span>
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
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#5d5d5d] text-[16px]">
            Selecione uma faixa
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
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
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[#f9f9f9] text-[24px] text-center">
        Quero conversar com a Papoca
      </p>
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
        <p className="mb-0">
          A equipe da Papoca entrará em contato em até 24h úteis.
        </p>
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

type ContatoFormValues = {
  empresa: string;
  email: string;
  celular: string;
  investimento: string;
};

function Formulario() {
  return (
    <div
      id="contato"
      className="bg-[rgba(25,25,25,0.94)] w-full lg:flex-[1_0_0] lg:min-h-px lg:min-w-px relative"
      data-name="Formulário"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            <Frame20 />
            <div className="w-full">
              <div id="embed-form-lead" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#5d5d5d] border-solid inset-0 pointer-events-none shadow-[0px_15px_36.3px_3px_rgba(0,0,0,0.21)]"
      />
    </div>
  );
}

function PrimeiraSecao() {
  return (
    <div
      className="content-stretch flex flex-col lg:flex-row gap-[24px] items-start relative shrink-0 w-full"
      data-name="Primeira seção"
    >
      <BlocoEsquerdo />
      <Formulario />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src={imgHero}
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(250.103deg, rgba(0, 0, 0, 0) 2.3521%, rgba(0, 0, 0, 0.95) 63.569%)",
          }}
        />
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
      <div
        aria-hidden="true"
        className="absolute border border-[#191919] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[31.5px]">Resultados recentes</p>
      </div>
    </div>
  );
}

function Textos() {
  return (
    <div className="absolute inset-[-0.02%_-0.02%_-0.08%_0]" data-name="Textos">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 92.0179 23.0223"
      >
        <g id="Textos">
          <path
            d={svgPaths.p34449c00}
            fill="var(--fill-0, #E66C0B)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Inter() {
  return (
    <div
      className="h-[23px] overflow-clip relative shrink-0 w-[92px]"
      data-name="Inter 1"
    >
      <Textos />
    </div>
  );
}

function Frame49() {
  return (
    <div className="h-[66.5px] relative shrink-0 w-[16px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 66.5"
      >
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
      <div
        aria-hidden="true"
        className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none"
      />
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
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 66.5"
      >
        <g id="Frame 53_2">
          <path
            d="M8 8V58.5"
            id="Vector 4_2"
            stroke="var(--stroke-0, #D92B8A)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[63px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[11px] text-center tracking-[-0.22px]">
        <p className="leading-[1.4]">3 MESES</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-[66.5px] relative shrink-0 w-[16px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 66.5"
      >
        <g id="Frame 53_3">
          <path
            d="M8 8V58.5"
            id="Vector 4_3"
            stroke="var(--stroke-0, #D92B8A)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-[63px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none"
      />
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
              <p className="font-['Inter:Black',sans-serif] text-[#d92b8a] text-[14px] leading-[1.2]">
                Inter
              </p>
            </div>
            <Frame49 />
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[0px] tracking-[0.48px]">
              <p className="whitespace-pre-wrap">
                <span className="leading-[1.4] text-[24px]">
                  {`+61% `}
                  <br aria-hidden="true" />
                </span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic text-[#191919] text-[14px] tracking-[-0.28px]">
                  Visibilidade em respostas de IA
                </span>
              </p>
            </div>
            <Frame50 />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none"
        />
      </div>
      <div className="bg-[#f9f9f9] relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start sm:items-center px-[16px] py-[12px] relative w-full">
            <div className="flex items-center justify-center px-[9px] py-[6px] rounded-[2px] border border-[#d92b8a]">
              <p className="font-['Inter:Black',sans-serif] text-[#d92b8a] text-[14px] leading-[1.2]">
                Zoop
              </p>
            </div>
            <Frame52 />
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[0px] tracking-[0.48px]">
              <p className="whitespace-pre-wrap">
                <span className="leading-[1.4] text-[24px]">
                  {`+70% `}
                  <br aria-hidden="true" />
                </span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic text-[#191919] text-[14px] tracking-[-0.28px]">
                  T
                </span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic text-[#191919] text-[14px]">
                  ermos ranqueados no Top 10
                </span>
              </p>
            </div>
            <Frame53 />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none"
        />
      </div>
      <div className="bg-[#f9f9f9] relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start sm:items-center px-[16px] py-[12px] relative w-full">
            <div className="flex items-center justify-center px-[9px] py-[6px] rounded-[2px] border border-[#d92b8a]">
              <p className="font-['Inter:Black',sans-serif] text-[#d92b8a] text-[14px] leading-[1.2]">
                Neosaldina
              </p>
            </div>
            <Frame54 />
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d92b8a] text-[0px] tracking-[0.48px]">
              <p className="whitespace-pre-wrap">
                <span className="leading-[1.4] text-[24px]">
                  {`+109% `}
                  <br aria-hidden="true" />
                </span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic text-[#191919] text-[14px]">
                  Volume de conversões
                </span>
              </p>
            </div>
            <Frame55 />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none"
        />
      </div>
    </div>
  );
}

function Espaco() {
  return (
    <div
      className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative"
      data-name="Espaço"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Frame51 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#051a30] text-[20px] sm:text-[24px] text-left w-full">
            <p className="leading-[31.5px]">
              Resultado não é promessa. É histórico.
            </p>
          </div>
          <Frame46 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[14px] sm:text-[16px] text-center w-full">
            <p className="decoration-solid leading-[24px] sm:leading-[31.5px] underline">
              Ver resultados
            </p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Divisor() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divisor">
      <div className="absolute inset-[-1px_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 596 2"
        >
          <g id="Divisor">
            <path
              d="M0 1H596"
              id="Vector 1"
              stroke="var(--stroke-0, #F9F9F9)"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Titulo() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center min-h-px min-w-px relative"
      data-name="Título"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[0px] text-[32px] sm:text-[48px] xl:text-[60px] tracking-[-0.5px] sm:tracking-[-1.92px] w-full text-center lg:text-left">
        <p className="mb-0">
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic tracking-[-1.92px]">
            Nunca foi
          </span>
          <span className="leading-[1.1]">{` `}</span>
          <span className="font-['Inter:Black_Italic',sans-serif] font-black italic leading-[1.1] tracking-[-1.92px]">
            sorte.
          </span>
        </p>
        <p className="text-[#191919]">
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[1.1]">{`Sempre foi `}</span>
          <span className="font-['Inter:Black',sans-serif] font-black leading-[1.1]">
            Papoca.
          </span>
        </p>
      </div>
      <Divisor />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[14px] sm:text-[18px] lg:text-[24px] tracking-[0.48px] w-full text-center lg:text-left">
        <p>
          <span className="leading-[1.4]">{`A única agência boutique de SEO & GEO do Brasil. `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic">
            Enquanto o mercado ainda debate o que é GEO, a Papoca já mede,
            monitora e otimiza presença em IAs.
          </span>
        </p>
      </div>
      <div
        className="bg-[#191919] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[24px] relative shrink-0"
        data-name="CTA Papoca"
      >
        <div
          aria-hidden="true"
          className="absolute border-2 border-[#051a30] border-solid inset-0 pointer-events-none"
        />
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
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 92.0179 23.0223"
      >
        <g id="Textos_2">
          <path
            d={svgPaths.p34449c00}
            fill="var(--fill-0, #E66C0B)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function Inter1() {
  return (
    <div
      className="h-[23px] overflow-clip relative shrink-0 w-[92px]"
      data-name="Inter 1"
    >
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

function Group3() {
  return (
    <div
      className="absolute contents inset-[-0.02%_0.01%_-0.01%_0]"
      data-name="Group"
    >
      <div className="absolute flex inset-[-0.02%_0.01%_-0.01%_0] items-center justify-center">
        <div className="flex-none h-[32.05px] rotate-[-2.74deg] w-[147.296px]">
          <div className="relative size-full" data-name="Vector">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 147.296 32.0497"
            >
              <path
                d={svgPaths.p3fab00f0}
                fill="var(--fill-0, #D63089)"
                id="Vector_329"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Textos4() {
  return (
    <div
      className="absolute contents inset-[-0.02%_0.01%_-0.01%_0]"
      data-name="Textos"
    >
      <Group3 />
    </div>
  );
}

function UmMes() {
  return (
    <div
      className="aspect-[96.52999877929688/25.350000381469727] overflow-clip relative size-full"
      data-name="um mês 1"
    >
      <Textos4 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[0_-0.01%_0.03%_-0.01%]" data-name="Group">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 71.0185 29.9911"
      >
        <g id="Group_4">
          <path
            d={svgPaths.p18277b00}
            fill="var(--fill-0, #E52034)"
            id="Vector_330"
          />
          <path
            d={svgPaths.p1b9e5800}
            fill="var(--fill-0, #E52034)"
            id="Vector_2_4"
          />
          <path
            d={svgPaths.p17856200}
            fill="var(--fill-0, #E52034)"
            id="Vector_3_4"
          />
          <path
            d={svgPaths.p39dc1300}
            fill="var(--fill-0, #E52034)"
            id="Vector_4_3"
          />
          <path
            d={svgPaths.p27a03b00}
            fill="var(--fill-0, #E52034)"
            id="Vector_5_3"
          />
          <path
            d={svgPaths.p128c2700}
            fill="var(--fill-0, #E52034)"
            id="Vector_6_3"
          />
          <path
            d={svgPaths.p298a8500}
            fill="var(--fill-0, #E52034)"
            id="Vector_7_3"
          />
          <path
            d={svgPaths.p3ee2f400}
            fill="var(--fill-0, #E52034)"
            id="Vector_8_2"
          />
          <path
            d={svgPaths.p47ee380}
            fill="var(--fill-0, #E52034)"
            id="Vector_9_2"
          />
          <path
            d={svgPaths.p15084a00}
            fill="var(--fill-0, #E52034)"
            id="Vector_10_2"
          />
          <path
            d={svgPaths.pbc74900}
            fill="var(--fill-0, #E52034)"
            id="Vector_11_2"
          />
          <path
            d={svgPaths.p1951d600}
            fill="var(--fill-0, #E52034)"
            id="Vector_12_2"
          />
          <path
            d={svgPaths.p39899b00}
            fill="var(--fill-0, #E52034)"
            id="Vector_13_2"
          />
          <path
            d={svgPaths.p8df1200}
            fill="var(--fill-0, #E52034)"
            id="Vector_14_2"
          />
          <path
            d={svgPaths.p1ab3e100}
            fill="var(--fill-0, #E52034)"
            id="Vector_15_2"
          />
          <path
            d={svgPaths.p32c03a00}
            fill="var(--fill-0, #E52034)"
            id="Vector_16_2"
          />
          <path
            d={svgPaths.p2aede980}
            fill="var(--fill-0, #E52034)"
            id="Vector_17_2"
          />
          <path
            d={svgPaths.p3c81cf80}
            fill="var(--fill-0, #E52034)"
            id="Vector_18_2"
          />
          <path
            d={svgPaths.p1587cbc0}
            fill="var(--fill-0, #E52034)"
            id="Vector_19_2"
          />
          <path
            d={svgPaths.p2d371c0}
            fill="var(--fill-0, #E52034)"
            id="Vector_20_2"
          />
          <path
            d={svgPaths.p94db080}
            fill="var(--fill-0, #E52034)"
            id="Vector_21_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
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
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">
          Boutique não é tamanho, é comprometimento. Cada cliente tem um time
          que conhece seu negócio com profundidade. Cada estratégia é criada
          para um cliente só — do diagnóstico à entrega.
        </p>
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
    <div
      className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]"
      data-name="Component 5"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]"
      />
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
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
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
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">
          Enquanto o mercado ainda debate o que é GEO, a Papoca já mede,
          monitora e otimiza presença em IAs — com análise de mais de 1 milhão
          de prompts em 9 LLMs.
        </p>
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
    <div
      className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch"
      data-name="Component 7"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]"
      />
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

function Container16() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d92b8a] text-[24px] text-center w-full">
        <p>
          <span className="leading-[1.3] text-[#191919]">
            Transparência total
          </span>
          <span className="leading-[1.3]">. Flexibilidade real.</span>
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">
          Sem pacote. Sem hora vendida. Só o que gera resultado. Plataforma
          própria, relatórios sem enrolação e estratégia que se adapta conforme
          o mercado.
        </p>
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
    <div
      className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] self-stretch"
      data-name="Component 5"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]"
      />
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
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
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
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center w-full">
        <p className="leading-[15.6px]">
          LATAM, Estados Unidos e Europa: com redatores nativos em PT, ES, EN e
          FR, e estratégia local para cada mercado. Sem adaptação de última
          hora.
        </p>
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
    <div
      className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]"
      data-name="Component 7"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d92b8a] border-solid inset-0 pointer-events-none rounded-[2px]"
      />
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
    <nav
      className="bg-[#191919] shrink-0 w-full z-50 sticky top-0"
      data-name="Navbar"
    >
      <div className="flex h-[80px] items-center justify-between px-4 sm:px-8 lg:px-[75px] w-full max-w-[1366px] mx-auto">
        <Frame3 />
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#191919] px-6 pb-6 flex flex-col gap-4">
          <a
            href="#lead-form"
            className="text-white font-semibold text-lg"
            onClick={() => setOpen(false)}
          >
            Fale conosco
          </a>
          <a
            href="#resultados"
            className="text-white text-base"
            onClick={() => setOpen(false)}
          >
            Resultados
          </a>
          <a
            href="#servicos"
            className="text-white text-base"
            onClick={() => setOpen(false)}
          >
            Serviços
          </a>
        </div>
      )}
    </nav>
  );
}

export default function LpCmo() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full overflow-x-hidden"
      data-name="LP - CMO"
    >
      <NavbarResponsive />
      <Header />
      <ResultadosSection />
      <PorqueSection />
      <ServicosSection />
      <SobreSection />
    </div>
  );
}
