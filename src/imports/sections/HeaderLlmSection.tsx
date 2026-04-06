import React, { useState } from "react";
import imgLogo from "@/assets/logo-papoca.png";

export default function HeaderLlmSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27] border-b border-[#1a1f3a]">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-8 md:px-[75px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0">
            <img src={imgLogo} alt="Agência Papoca" className="h-10 w-auto max-w-[60px]" />
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-[#f9f9f9] font-['Inter',sans-serif] text-[15px] hover:text-[#d92b8a] transition-colors">
              Home
            </a>
            <a href="#programa" className="text-[#f9f9f9] font-['Inter',sans-serif] text-[15px] hover:text-[#d92b8a] transition-colors">
              Blog
            </a>
            <a href="#cta-final" className="text-[#f9f9f9] font-['Inter',sans-serif] text-[15px] hover:text-[#d92b8a] transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#hero"
            className="hidden md:block bg-[#d92b8a] text-white font-['Inter',sans-serif] font-semibold px-6 py-2.5 text-[14px] hover:bg-[#c0246a] transition-colors"
          >
            Inscrever-se
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f9f9f9] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t border-[#1a1f3a] pt-4">
            <a href="#hero" className="block text-[#f9f9f9] font-['Inter',sans-serif] text-[14px] hover:text-[#d92b8a]">Home</a>
            <a href="#programa" className="block text-[#f9f9f9] font-['Inter',sans-serif] text-[14px] hover:text-[#d92b8a]">Blog</a>
            <a href="#cta-final" className="block text-[#f9f9f9] font-['Inter',sans-serif] text-[14px] hover:text-[#d92b8a]">Contato</a>
            <a href="#hero" className="block bg-[#d92b8a] text-white font-['Inter',sans-serif] font-semibold px-6 py-2 text-[14px] text-center hover:bg-[#c0246a]">
              Inscrever-se
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
