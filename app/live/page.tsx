import type { Metadata } from "next";

import { LiveFormModal } from "@/components/live-form-modal";
import Navbar from "@/components/sections/navbar/default";
import GlobalWebGLBackground from "@/components/ui/global-webgl-background";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

const valuePoints = [
  {
    icon: "🔴",
    text: "Praktyka, nie teoria – zobaczysz, jak realnie wygląda proces vibe codingu.",
  },
  {
    icon: "⚡",
    text: 'Od pomysłu do apki – tempo, które pozwala wyjść z blokady "kiedyś to zrobię".',
  },
  {
    icon: "❓",
    text: "Q&A na żywo – odpowiem na Twoje pytania o AI, no-code i vibe coding.",
  },
];

const agendaItems = [
  "Start i setup – pokażę stack (Lovable + Supabase).",
  "Budowanie apki – w godzinę tworzę aplikację, której faktycznie potrzebuję (trackowanie kalorii + treningi).",
  "Q&A – Twoje pytania, moje odpowiedzi.",
  "Vibe Hero Sprint – na koniec opowiem o sprincie i pokażę, jak możesz dołączyć.",
];

export const metadata: Metadata = {
  title: "Live coding: Zbuduj apkę w godzinę | Vibe Hero",
  description:
    "Dołącz do live codingu 2 października. Zobacz, jak w godzinę powstaje aplikacja z wykorzystaniem AI (Lovable + Supabase).",
  openGraph: {
    title: "Live coding: Zbuduj apkę w godzinę | Vibe Hero",
    description:
      "Zapisz się na live 2 października i poznaj vibe coding w praktyce.",
    url: `${siteConfig.url}/live`,
  },
};

export default function LivePage() {
  return (
    <>
      <GlobalWebGLBackground />

      <main className="relative min-h-screen w-full">
        <Navbar />

        <Section className="flex min-h-screen flex-col justify-center gap-10 pt-32 pb-24 text-center md:pt-40">
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-brand text-sm font-semibold tracking-[0.3em] uppercase">
              2 października • czwartek • 19:00
            </p>
            <h1 className="text-3xl leading-tight font-bold text-balance sm:text-4xl sm:leading-tight lg:text-5xl">
              Zbuduj apkę w godzinę.
              <span className="block">
                Live coding z AI (Lovable + Supabase).
              </span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed sm:text-xl">
              2 października pokażę, jak w praktyce wygląda vibe coding – od
              pomysłu do działającej aplikacji w 60 minut.{" "}
              <strong>Zapisz się, żeby dostać link do wydarzenia.</strong>
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <LiveFormModal triggerText="Zapisz się na live'a" />
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl space-y-12 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                Dlaczego warto być na Live?
              </h2>
              <p className="text-muted-foreground text-lg">
                Krótki, konkretny live o tym, jak używam AI i no-code, żeby w
                godzinę dowieźć działającą apkę.
              </p>
            </div>
            <ul className="space-y-6 text-left text-lg sm:text-xl">
              {valuePoints.map((point) => (
                <li
                  key={point.text}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <span className="text-2xl leading-none">{point.icon}</span>
                  <p className="leading-relaxed text-white/90">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-4xl space-y-10 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                Agenda Live’a
              </h2>
              <p className="text-muted-foreground text-lg">
                Konkretne kroki, które przejdziemy razem na żywo.
              </p>
            </div>
            <div className="mx-auto max-w-3xl text-left">
              <ol className="space-y-5 text-lg sm:text-xl">
                {agendaItems.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <span className="bg-brand mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="leading-relaxed text-white/90">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        <Section className="relative overflow-hidden">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                Zapisz się i bądź na żywo
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl">
                Wpisz swój email, a wyślę Ci link do wydarzenia na 2
                października.
              </p>
            </div>
            <LiveFormModal className="self-center" />
          </div>
        </Section>
      </main>
    </>
  );
}
