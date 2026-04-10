import React, { useState } from "react";
import imgHero from "@/assets/hero-webinar.webp";
import imgCalendar from "@/assets/calendar.png";
import imgTimer from "@/assets/timer.png";
import imgVideo from "@/assets/video.png";

export default function HeroLlmSection() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="hero" className="relative py-32 md:py-0 min-h-screen md:pt-8 w-full overflow-hidden bg-[#051a30]">
      <img
        src={imgHero}
        alt=""
        aria-hidden="true"
        loading="eager"
        onLoad={() => setHeroLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
          heroLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000]/95 via-[#000]/80 to-[#000]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000]/60 via-transparent to-[#000]/40" />
      
      <div className="relative z-10 px-4 sm:px-8 min-h-screen flex items-center">
        <div className="max-w-[1366px] mx-auto w-full">
          <div className="grid gap-10 md:gap-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
            <div className="flex flex-col gap-7">
              <p className="font-['Inter',sans-serif] font-normal text-[#d92b8a] text-[13px] sm:text-[14px] uppercase tracking-widest">
                WEBINAR EXCLUSIVO
              </p>

              <h1 className="font-['Inter',sans-serif] font-bold text-[32px] md:text-[42px] lg:text-[68px] leading-[1.08] text-[#f9f9f9] tracking-tight">
                Como dominar o share of voice nas IAs?
              </h1>

              <p className="font-['Inter',sans-serif] font-light text-[16px] sm:text-[17px] leading-[1.65] text-white max-w-[540px]">
                As IAs generativas estão mudando a jornada de compra. Aprenda
                com dados analisados com{" "}
                <span className="text-[#d92b8a] font-medium">
                  mais de 3 milhões de prompts
                </span>{" "}
                como influenciar as IAs e citarem sua marca.
              </p>

              <div className="flex flex-wrap gap-6 sm:gap-10 mt-2">
                <div className="flex items-center gap-3">
                  <img
                    src={imgCalendar}
                    alt=""
                    aria-hidden="true"
                    className="w-[28px] h-[28px] shrink-0 object-contain"
                  />
                  <div>
                    <p className="font-['Inter',sans-serif] font-normal text-[11px] text-white uppercase tracking-widest leading-none mb-1">
                      DATA
                    </p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#f9f9f9]">
                      23 de abril
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={imgTimer}
                    alt=""
                    aria-hidden="true"
                    className="w-[28px] h-[28px] shrink-0 object-contain"
                  />
                  <div>
                    <p className="font-['Inter',sans-serif] font-normal text-[11px] text-white uppercase tracking-widest leading-none mb-1">
                      HORÁRIO
                    </p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#f9f9f9]">
                      10:00 (Brasília)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={imgVideo}
                    alt=""
                    aria-hidden="true"
                    className="w-[28px] h-[28px] shrink-0 object-contain"
                  />
                  <div>
                    <p className="font-['Inter',sans-serif] font-normal text-[11px] text-white uppercase tracking-widest leading-none mb-1">
                      PLATAFORMA
                    </p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#f9f9f9]">
                      YouTube
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="form-llm"
              className="bg-[#f9f9f9] rounded-[16px] p-7 sm:p-9 shadow-2xl w-full"
            >
              <h3 className="font-['Inter',sans-serif] text-center font-bold text-[22px] sm:text-[24px] text-[#D92B8A] mb-6">
                Garanta sua vaga!
              </h3>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-[#d92b8a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="#f9f9f9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-[18px] text-[#051a30] mb-2">Inscrição enviada!</p>
                  <p className="font-['Inter',sans-serif] text-[14px] text-[#666]">Recebemos seus dados e já vamos entrar em contato.</p>
                </div>
              ) : (
                <>
                  <iframe
                    title="mailchimp-submit-frame"
                    name="mailchimp-submit-frame"
                    className="hidden"
                    onLoad={() => {
                      if (submitting) {
                        setSubmitting(false);
                        setSubmitted(true);
                      }
                    }}
                  />
                  <form
                    action="https://agenciapapoca.us17.list-manage.com/subscribe/post?u=200cd0a061548e0c1a0d7f162&id=bf2293ff48&f_id=004aade3f0"
                    method="post"
                    target="mailchimp-submit-frame"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate flex flex-col gap-4"
                    onSubmit={() => setSubmitting(true)}
                  >
                    <div>
                      <label htmlFor="mce-FNAME" className="block font-['Inter',sans-serif] font-medium text-[13px] text-[#222] mb-1.5">
                        Nome completo <span className="text-[#d92b8a]">*</span>
                      </label>
                      <input
                        type="text"
                        id="mce-FNAME"
                        name="FNAME"
                        required
                        placeholder="Seu nome"
                        className="w-full rounded-[10px] px-4 py-3 border border-[#ddd] font-['Inter',sans-serif] text-[14px] text-[#222] placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#d92b8a] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="mce-EMAIL" className="block font-['Inter',sans-serif] font-medium text-[13px] text-[#222] mb-1.5">
                        E-mail corporativo <span className="text-[#d92b8a]">*</span>
                      </label>
                      <input
                        type="email"
                        id="mce-EMAIL"
                        name="EMAIL"
                        required
                        placeholder="seu@email.com"
                        className="w-full rounded-[10px] px-4 py-3 border border-[#ddd] font-['Inter',sans-serif] text-[14px] text-[#222] placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#d92b8a] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="mce-MMERGE9" className="block font-['Inter',sans-serif] font-medium text-[13px] text-[#222] mb-1.5">
                        Celular <span className="text-[#d92b8a]">*</span>
                      </label>
                      <input
                        type="text"
                        id="mce-MMERGE9"
                        name="MMERGE9"
                        inputMode="tel"
                        required
                        pattern="^\(\d{2}\)\s9\d{4}-\d{4}$"
                        title="Use o formato (11) 99999-9999"
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
                        className="w-full rounded-[10px] px-4 py-3 border border-[#ddd] font-['Inter',sans-serif] text-[14px] text-[#222] placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#d92b8a] focus:border-transparent transition"
                      />
                    </div>
                    <input type="hidden" name="tags" value="8333510,8333498" />
                    <div aria-hidden="true" className="absolute left-[-5000px]">
                      <input type="text" name="b_200cd0a061548e0c1a0d7f162_bf2293ff48" tabIndex={-1} defaultValue="" />
                    </div>
                    <p className="font-['Inter',sans-serif] text-[12px] text-[#555] text-left">
                      <span className="text-[#D92B8A]">*</span> Vagas limitadas para garantir a qualidade do Q&A
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-[10px] bg-[#d92b8a] hover:bg-[#c0246a] active:bg-[#a81e5b] text-[#f9f9f9] font-['Inter',sans-serif] font-bold text-[16px] py-3.5 transition-colors mt-2"
                    >
                      {submitting ? "Enviando..." : "Quero participar agora"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
