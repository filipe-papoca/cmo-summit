import React from "react";

export default function CTAFinalLlmSection() {
  return (
    <section
      id="cta-final"
      className="relative w-full bg-gradient-to-r from-[#d92b8a] to-[#c0246a] px-4 sm:px-8 md:px-[75px] py-16 md:py-24"
    >
      <div className="max-w-[1366px] mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#f9f9f9]">
            Quer saber como sua marca aparece nas LLMs?
          </h2>

          <a
            href="#form-llm"
            className="inline-block bg-[#f9f9f9] text-[#d92b8a] md:text-[28px] font-['Inter:Bold',sans-serif] font-bold px-8 py-3 hover:bg-[#ececec] transition-colors"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
