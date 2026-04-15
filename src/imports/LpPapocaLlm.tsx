import React, { useEffect } from "react";
import HeaderLlmSection from "./sections/HeaderLlmSection";
import HeroLlmSection from "./sections/HeroLlmSection";
import ProgramaLlmSection from "./sections/ProgramaLlmSection";
import EstatisticasLlmSection from "./sections/EstatisticasLlmSection";
import PalestranteLlmSection from "./sections/PalestranteLlmSection";
import CTAFinalLlmSection from "./sections/CTAFinalLlmSection";
import FooterLlmSection from "./sections/FooterLlmSection";

export default function LpPapocaLlm() {
  useEffect(() => {
    const title = "Como sua marca aparece nas IAs? | Webinar GEO  |  Papoca";
    const description =
      "Aprenda com dados de +3 milhões de prompts como as IAs escolhem quais marcas citar. Webinar gratuito com Pierre Veyrat, CEO da Agência Papoca.";

    document.title = title;

    const upsertMeta = (
      selector: string,
      attribute: "name" | "property",
      key: string,
      value: string,
    ) => {
      let meta = document.head.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      meta.content = value;
    };

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  }, []);

  return (
    <main className="w-full bg-[#0a0e27] overflow-x-hidden">
      <HeaderLlmSection />
      <HeroLlmSection />
      <ProgramaLlmSection />
      <EstatisticasLlmSection />
      <PalestranteLlmSection />
      <CTAFinalLlmSection />
      <FooterLlmSection />
    </main>
  );
}
