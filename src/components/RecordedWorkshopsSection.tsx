import React from "react";
import { ArrowRight, CheckCircle2, Clock3, Library, PlayCircle } from "lucide-react";
import { Button } from "@relume_io/relume-ui";

type Props = {
  className?: string;
};

export type RecordedWorkshopsSectionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const lessons = [
  { title: "Budujemy bezpieczny backend w Supabase + Lovable", time: "nagranie" },
  { title: "Lepszy design aplikacji budowanych z AI", time: "01:01:48" },
  { title: "Wdrażanie funkcji związanych z AI w aplikacjach", time: "33:52" },
  { title: "Wdrażamy subskrypcję do apki", time: "43:43" },
  { title: "Cursor AI - podstawy", time: "01:28:56" },
  { title: "Marketing, analityka i szukanie problemów do rozwiązania", time: "2h+" },
];

const highlights = [
  "Oglądasz w swoim tempie, bez czekania na kolejny live.",
  "Wracasz do konkretnych tematów, kiedy utkniesz przy projekcie.",
  "Dostajesz praktyczne nagrania z budowania, nie ogólny kurs bez kontekstu.",
];

export const RecordedWorkshopsSection = (props: RecordedWorkshopsSectionProps) => {
  return (
    <section
      {...props}
      className={`w-full bg-[#111418] px-[5%] py-16 text-white md:py-24 lg:py-28 ${
        props.className || ""
      }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-[680px] text-left">
            <div className="eyebrow-label mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.08em] text-white/80">
              <Library className="size-4 text-primary" />
              Archiwum warsztatów
            </div>

            <h2 className="font-heading mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Od razu dostajesz dostęp do nagranych warsztatów
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-white/75 md:text-xl">
              W społeczności Vibe Hero czeka na Ciebie biblioteka nagrań z konkretnymi
              tematami: backend, design, AI features, subskrypcje, Cursor, marketing,
              analityka i przygotowanie apki do produkcji.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="border-l-2 border-primary pl-4">
                <div className="font-heading text-3xl font-bold">14</div>
                <div className="text-sm text-white/60">lekcji</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="font-heading text-3xl font-bold">10h+</div>
                <div className="text-sm text-white/60">materiału</div>
              </div>
              <div className="col-span-2 border-l-2 border-primary pl-4 sm:col-span-1">
                <div className="font-heading text-3xl font-bold">2</div>
                <div className="text-sm text-white/60">sekcje</div>
              </div>
            </div>

            <ul className="mb-8 space-y-4">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="mt-0.5 size-5 flex-none text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <a href="#pricing" className="inline-flex">
              <Button className="group bg-primary px-6 py-3 text-white hover:bg-primary/90 rounded-[3px] border-0">
                Dołącz i oglądaj nagrania
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#262a30] shadow-2xl">
            <div className="flex flex-col gap-4 border-b border-white/10 bg-[#15181d] p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
              <div>
                <h3 className="font-heading text-2xl font-bold">Content</h3>
                <p className="mt-1 text-sm text-white/60 md:text-base">
                  2 sekcje • 14 lekcji • 10 hr 17 min
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
                <Clock3 className="size-4" />
                dostęp od razu
              </div>
            </div>

            <div className="border-b border-white/10 bg-[#15181d] px-5 py-4 md:px-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <PlayCircle className="size-5 text-primary" />
                  <h4 className="font-heading text-xl font-bold">Vibe Sessions</h4>
                </div>
                <p className="text-sm text-white/60">13 lekcji • 9 hr 49 min</p>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.title}
                  className="grid grid-cols-[auto_1fr] gap-4 px-5 py-4 md:grid-cols-[auto_1fr_auto] md:px-6"
                >
                  <div className="mt-1 size-4 rounded-full border-2 border-white/50 bg-white" />
                  <div>
                    <p className="text-base leading-snug text-white/90 md:text-lg">
                      #{String(index + 1).padStart(3, "0")} - {lesson.title}
                    </p>
                  </div>
                  <div className="col-start-2 text-sm text-white/55 md:col-start-auto md:text-base">
                    {lesson.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 bg-[#15181d] px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
              <div className="flex items-center gap-3">
                <PlayCircle className="size-5 text-primary" />
                <span className="font-heading text-xl font-bold">Git i GitHub</span>
              </div>
              <span className="text-sm text-white/60">1 lekcja • 28 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
