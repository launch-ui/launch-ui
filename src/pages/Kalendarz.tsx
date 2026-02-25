import { Calendar } from "lucide-react";
import { SEO } from "../components/SEO";

export default function Kalendarz() {
  return (
    <>
      <SEO
        title="Kalendarz Wydarzeń | Vibe Hero"
        description="Zobacz nadchodzące wydarzenia, coworkingi i sprinty Vibe Hero. Subskrybuj kalendarz, aby być na bieżąco."
        url="https://vibehero.pl/kalendarz"
      />

      <main className="relative min-h-screen w-full bg-white">
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            {/* Header with Icon */}
            <div className="mb-12 text-center">
              <div className="mb-8 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D73159]/30 bg-[#D73159]/10">
                  <Calendar className="h-10 w-10 text-[#D73159]" />
                </div>
              </div>

              {/* Title - highest hierarchy */}
              <h1 className="font-h1 mb-6 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
                Kalendarz Vibe Hero
              </h1>

              {/* Subtitle - second hierarchy */}
              <p className="mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
                Wszystkie nadchodzące wydarzenia, coworkingi i sprinty w jednym
                miejscu
              </p>

              {/* CTA Button - interactive color */}
              <a
                href="https://calendar.google.com/calendar/u/0?cid=NTk0NzU3YWU5NWE3YzFkMjAzNGU2YTY4ZDM4OGM3NTMzNjU5ZjA3YmQxYTZmYWRiOTcxODI5OWQ0MjI3Zjg2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#D73159] hover:bg-[#D73159]/90 mb-16 rounded-[3px] border-0 px-6 py-3 text-base font-bold uppercase text-white transition-colors">
                  Subskrybuj kalendarz
                </button>
              </a>
            </div>

            {/* Calendar Embed */}
            <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[3px] border-[3px] border-gray-200 bg-white shadow-sm">
              <div
                className="relative w-full"
                style={{ paddingBottom: "46.875%" }}
              >
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=594757ae95a7c1d2034e6a68d388c7533659f07bd1a6fadb9718299d4227f866%40group.calendar.google.com&ctz=Europe%2FWarsaw"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  frameBorder="0"
                  scrolling="no"
                  title="Kalendarz Vibe Hero"
                ></iframe>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <p className="text-sm text-gray-600 md:text-base">
                Subskrybuj kalendarz, aby automatycznie otrzymywać powiadomienia
                o nadchodzących wydarzeniach
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
