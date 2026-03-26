import React from "react";
import imgPalestra from "@/assets/pierre/palestra-pierre-cmo-summit.webp";
import { useForm } from "react-hook-form";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/app/components/ui/form";

type FormValues = { email: string };

export default function PalestraPierreSection() {
  const methods = useForm<FormValues>({
    defaultValues: { email: "" },
    mode: "onSubmit",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    setError(null);
    localStorage.setItem("palestra_pierre_email", values.email);

    const API_KEY = import.meta.env.VITE_MAILSEND_API_KEY as string | undefined;
    const LIST_ID = import.meta.env.VITE_MAILSEND_LIST_ID as string | undefined;
    const API_URL =
      (import.meta.env.VITE_MAILSEND_API_URL as string | undefined) ||
      "https://api.mailsend.com/v1";

    if (API_KEY && LIST_ID) {
      try {
        const res = await fetch(`${API_URL}/lists/${LIST_ID}/contacts`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: values.email }),
        });
        if (!res.ok) {
          setError("Não foi possível enviar agora. Tente novamente.");
        }
      } catch {
        setError("Falha de rede ao enviar. Tente novamente.");
      }
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <section className="bg-[#191919] w-full content-stretch px-4 sm:px-8 lg:px-[75px] py-10 lg:py-[80px]">
      <div className="max-w-[1366px] mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
        <div className="flex flex-col gap-6">
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
          <div className="rounded-[2px] overflow-hidden">
            <img src={imgPalestra} alt="Palestra no CMO Summit sobre GEO" className="w-full h-[270px] rounded-md object-cover object-center" /> 
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] gap-4 not-italic text-[#f9f9f9] text-[14px] sm:text-[16px] w-full">
            <p className="leading-[1.5]">
              IAs se tornam a interface principal de busca e recomendação, comprimindo o funil em um fluxo conversacional.
              43% dos consumidores já descobriram marcas via IA e 86% confiam moderada/altamente nessas recomendações.
            </p>
            <p className="leading-[1.5]">
              O foco migra para presença nas respostas geradas, seu share of voice em ambientes generativos.
              Surge o GEO, que expande o SEO com cinco pilares: SEO técnico, conteúdo on‑page, PR digital, presença social e reputação construída por usuários.
              GEO é responsabilidade da empresa inteira: produto, atendimento e CS também viram conteúdo que influencia a IA.
            </p>
          </div>

          <div className="bg-[#f9f9f9] p-4 sm:p-6 rounded-[2px]">
            <Form {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-4">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#191919] text-[16px]">
                  <p>Receba o conteúdo da palestra por e-mail</p>
                </div>

                <FormField
                  control={methods.control}
                  name="email"
                  rules={{
                    required: "Informe seu e-mail",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "E-mail inválido",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#191919]">E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="bg-[#d92b8a] hover:bg-[#c02679] text-white">
                  {submitting ? "Enviando..." : "Enviar"}
                </Button>

                {submitted && (
                  <p className="text-[#191919] text-sm">
                    Obrigado! Em breve você receberá o conteúdo da palestra no seu e-mail.
                  </p>
                )}
                {error && <p className="text-red-600 text-sm">{error}</p>}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
