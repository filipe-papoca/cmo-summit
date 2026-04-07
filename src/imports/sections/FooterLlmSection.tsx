import React from "react";
import imgLogo from "@/assets/logo-papoca.png";

export default function FooterLlmSection() {
  return (
    <footer className="w-full bg-[#191919] border-t border-[#1a1f3a] px-4 sm:px-8 md:px-[75px] py-12 md:py-16">
      <div className="max-w-[1366px] mx-auto">
        <div className="grid gap-8 md:grid-cols-1 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <img src={imgLogo} alt="Agência Papoca" className="h-[90px] w-fit" />
            <p className="font-['Inter',sans-serif] font-light text-[14px] text-[#b3b3b3] leading-[1.6]">
              Somos uma agência boutique. Unimos consultoria em SEO e a excelência em criação de conteúdo. Possuímos equipes especializadas em SEO, Marketing de Conteúdo e Inbound Marketing para fazer sua empresa crescer.
            </p>
          </div>

          {/* Empty column for spacing */}
          <div />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1f3a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Inter',sans-serif] font-light text-[12px] text-[#666]">
            © {new Date().getFullYear()} - Agência Papoca
          </p>
          <a
            href="mailto:contato@agenciapapoca.com.br"
            className="font-['Inter',sans-serif] text-[12px] text-[#666] hover:text-[#d92b8a] transition-colors flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="#666" strokeWidth="1.2"/>
              <path d="M1 4.5l6 4 6-4" stroke="#666" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            contato@agenciapapoca.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}
