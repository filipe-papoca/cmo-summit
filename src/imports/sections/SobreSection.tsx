import React from "react";
import imgLogo from "@/assets/logo-papoca.png";

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

export default function SobreSection() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[15px] items-start px-4 sm:px-8 md:px-[75px] py-10 md:py-[60px] relative w-full">
        <div className="h-[91px] overflow-clip relative shrink-0 w-[100px]" data-name="Layer_1">
          <img alt="Logo Papoca" className="absolute max-w-none object-cover max-h-[70px]" src={imgLogo} />
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

