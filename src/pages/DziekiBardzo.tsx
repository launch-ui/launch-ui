import { ArrowRight, Calendar, CheckCircle, Rocket, Users } from "lucide-react";
import { SEO } from "../components/SEO";

export default function DziekiBardzo() {
  return (
    <>
      <SEO
        title="Witamy w społeczności! | Vibe Hero"
        description="Email potwierdzony! Witamy w społeczności Vibe Hero. Otrzymasz dostęp i wszystkie szczegóły na email."
        url="https://vibehero.pl/dzieki-bardzo"
        noindex={true}
      />

      <main className="relative min-h-screen w-full bg-white">
        <section className="flex min-h-screen items-center justify-center px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-green-500/40 bg-green-500/20">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="font-h1 mb-6 text-4xl font-bold tracking-tight text-black md:text-6xl">
              Dziękujemy bardzo! 🎉
            </h1>

            <p className="mb-4 text-2xl font-medium text-gray-700">
              Email potwierdzony!
            </p>

            {/* Welcome Cards */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {/* Community Access */}
              <div className="rounded-[3px] border-[3px] border-black bg-white p-6">
                <div className="mb-4 flex justify-center">
                  <Users className="text-primary h-10 w-10" />
                </div>
                <h3 className="font-heading mb-3 text-lg font-semibold text-black">
                  Społeczność
                </h3>
                <p className="text-sm text-gray-700">
                  Dostęp do community od października. Codzienne coworking, Q&A
                  i wsparcie.
                </p>
              </div>

              {/* Sprint Info */}
              <div className="rounded-[3px] border-[3px] border-black bg-white p-6">
                <div className="mb-4 flex justify-center">
                  <Rocket className="text-primary h-10 w-10" />
                </div>
                <h3 className="font-heading mb-3 text-lg font-semibold text-black">
                  Sprint
                </h3>
                <p className="text-sm text-gray-700">
                  2 tygodnie intensywnego tworzenia produktu z prawdziwym
                  feedbackiem.
                </p>
              </div>

              {/* Updates */}
              <div className="rounded-[3px] border-[3px] border-black bg-white p-6">
                <div className="mb-4 flex justify-center">
                  <Calendar className="text-primary h-10 w-10" />
                </div>
                <h3 className="font-heading mb-3 text-lg font-semibold text-black">
                  Aktualizacje
                </h3>
                <p className="text-sm text-gray-700">
                  Otrzymasz wszystkie ważne informacje i harmonogram na email.
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="border-primary mb-12 rounded-[3px] border-[3px] bg-white p-8">
              <h2 className="font-heading mb-6 text-2xl font-bold text-black">
                Co dalej?
              </h2>

              <div className="mx-auto max-w-2xl space-y-4 text-left">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary mt-1.5 h-3 w-3 flex-shrink-0 rounded-full"></div>
                  <div>
                    <p className="font-medium text-black">
                      Otrzymasz email z szczegółami
                    </p>
                    <p className="text-sm text-gray-700">
                      Harmonogram, linki do community i wszystko co potrzebne
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary mt-1.5 h-3 w-3 flex-shrink-0 rounded-full"></div>
                  <div>
                    <p className="font-medium text-black">Masz pytania?</p>
                    <p className="text-sm text-gray-700">
                      Odezwij się do mnie na{" "}
                      <a
                        href="mailto:yo@wozu.co"
                        className="text-primary hover:text-primary/90 underline"
                      >
                        yo@wozu.co
                      </a>{" "}
                      lub{" "}
                      <a
                        href="https://linkedin.com/in/woz"
                        className="text-primary hover:text-primary/90 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/">
                <button className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-[3px] border-0 px-8 py-3 text-base font-bold text-white uppercase transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  Poznaj szczegóły sprintu
                </button>
              </a>

              <a href="mailto:yo@wozu.co">
                <button className="rounded-[3px] border-[3px] border-black bg-white px-8 py-3 text-base font-bold text-black transition-colors hover:bg-gray-50">
                  Masz pytania? Napisz do nas
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
