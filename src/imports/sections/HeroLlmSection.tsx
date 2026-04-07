import React, { useState } from "react";
import imgHero from "@/assets/hero-webinar.jpg";
import iconRocket from "@/assets/icon-rocket.svg";

export default function HeroLlmSection() {
  const [formData, setFormData] = useState({ nome: "", email: "", empresa: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nome: "", email: "", empresa: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={imgHero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay: strong fade from top + left to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060a1a]/95 via-[#060a1a]/80 to-[#060a1a]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060a1a]/60 via-transparent to-[#060a1a]/40" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-[75px] py-20 md:py-28 min-h-screen flex items-center">
        <div className="max-w-[1366px] mx-auto w-full">
          <div className="grid gap-10 md:gap-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">

            {/* LEFT — Copy */}
            <div className="flex flex-col gap-7">
              <p className="font-['Inter',sans-serif] font-normal text-[#d92b8a] text-[13px] sm:text-[14px] uppercase tracking-widest">
                WEBINAR EXCLUSIVO
              </p>

              <h1 className="font-['Inter',sans-serif] font-bold text-[42px] sm:text-[52px] md:text-[64px] leading-[1.08] text-white tracking-tight">
                Como dominar o share of voice nas IAs?
              </h1>

              <p className="font-['Inter',sans-serif] font-light text-[16px] sm:text-[17px] leading-[1.65] text-[#cdd0de] max-w-[540px]">
                As IAs generativas estão mudando a jornada de compra. Aprenda com
                dados analisados com{" "}
                <span className="text-[#d92b8a] font-medium">
                  mais de 3 milhões de prompts
                </span>{" "}
                como influenciar as IAs e citarem sua marca.
              </p>

              {/* Event badges */}
              <div className="flex flex-wrap gap-6 sm:gap-10 mt-2">
                {/* Data */}
                <div className="flex items-center gap-3">
                  <img src={iconRocket} alt="" aria-hidden="true" className="w-[34px] h-[34px] shrink-0" />
                  <div>
                    <p className="font-['Inter',sans-serif] font-normal text-[11px] text-[#d92b8a] uppercase tracking-widest leading-none mb-1">DATA</p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[15px] text-white">16 de abril</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-center gap-3">
                  <img src={iconRocket} alt="" aria-hidden="true" className="w-[34px] h-[34px] shrink-0" />
                  <div>
                    <p className="font-['Inter',sans-serif] font-normal text-[11px] text-[#d92b8a] uppercase tracking-widest leading-none mb-1">HORÁRIO</p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[15px] text-white">10:00 (Brasília)</p>
                  </div>
                </div>

                {/* Plataforma */}
                <div className="flex items-center gap-3">
                  <img src={iconRocket} alt="" aria-hidden="true" className="w-[34px] h-[34px] shrink-0" />
                  <div>
                    <p className="font-['Inter',sans-serif] font-normal text-[11px] text-[#d92b8a] uppercase tracking-widest leading-none mb-1">PLATAFORMA</p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[15px] text-white">Youtube</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-white p-7 sm:p-9 shadow-2xl w-full">
              <h3 className="font-['Inter',sans-serif] text-center font-bold text-[22px] sm:text-[24px] text-[#0a0e27] mb-6">
                Quero garantir minha vaga!
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="nome" className="block font-['Inter',sans-serif] font-medium text-[13px] text-[#222] mb-1.5">
                      Nome completo <span className="text-[#d92b8a]">*</span>
                    </label>
                    <input
                      type="text" id="nome" name="nome"
                      value={formData.nome} onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 border border-[#ddd] font-['Inter',sans-serif] text-[14px] text-[#222] placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#d92b8a] focus:border-transparent transition"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-['Inter',sans-serif] font-medium text-[13px] text-[#222] mb-1.5">
                      E-mail corporativo <span className="text-[#d92b8a]">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="seu@empresa.com"
                      className="w-full px-4 py-3 border border-[#ddd] font-['Inter',sans-serif] text-[14px] text-[#222] placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#d92b8a] focus:border-transparent transition"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block font-['Inter',sans-serif] font-medium text-[13px] text-[#222] mb-1.5">
                      Empresa <span className="text-[#d92b8a]">*</span>
                    </label>
                    <input
                      type="text" id="empresa" name="empresa"
                      value={formData.empresa} onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="w-full px-4 py-3 border border-[#ddd] font-['Inter',sans-serif] text-[14px] text-[#222] placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#d92b8a] focus:border-transparent transition"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d92b8a] hover:bg-[#c0246a] active:bg-[#a81e5b] text-white font-['Inter',sans-serif] font-bold text-[16px] py-3.5 transition-colors mt-2"
                  >
                    Quero participar agora
                  </button>

                  <p className="font-['Inter',sans-serif] text-[12px] text-[#aaa] text-center">
                    Vagas limitadas para garantir a qualidade do Q&A
                  </p>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-[#d92b8a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-[18px] text-[#0a0e27] mb-2">Inscrição realizada!</p>
                  <p className="font-['Inter',sans-serif] text-[14px] text-[#666]">Verifique seu e-mail para os detalhes.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
