import { CheckCircle, Mail } from "lucide-react";
import { SEO } from "../components/SEO";

export default function Dzieki() {
  return (
    <>
      <SEO
        title="Dziękujemy za zapis! | Vibe Hero"
        description="Sprawdź swoją skrzynkę email i potwierdź adres, aby dołączyć do Vibe Hero."
        url="https://vibehero.pl/dzieki"
        noindex={true}
      />

      <main className="relative min-h-screen w-full bg-white">
        <section className="flex min-h-screen items-center justify-center px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-500/30 bg-green-500/20">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="font-h1 mb-6 text-4xl font-bold tracking-tight text-black md:text-5xl">
              Dziękujemy za zapis!
            </h1>

            <p className="mb-8 text-xl leading-relaxed text-gray-700">
              Właśnie wysłaliśmy Ci email potwierdzający na podany adres.
            </p>

            {/* Email Confirmation Card */}
            <div className="border-primary mb-8 rounded-[3px] border-[3px] bg-white p-6 md:p-8">
              <div className="mb-4 flex justify-center">
                <Mail className="text-primary h-12 w-12" />
              </div>

              <h2 className="font-heading mb-4 text-2xl font-semibold text-black">
                🚨 Ważne: Potwierdź swój email
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                Aby dołączyć do społeczności <strong>Vibe Hero</strong>, musisz
                potwierdzić swój adres email. Sprawdź swoją skrzynkę odbiorczą i
                kliknij w link potwierdzający.
              </p>

              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary mt-1 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <p className="text-gray-700">
                    <strong className="text-black">
                      Sprawdź spam/promotional
                    </strong>{" "}
                    - czasem email może trafić do tych folderów
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary mt-1 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <p className="text-gray-700">
                    <strong className="text-black">Nie ma emaila?</strong>{" "}
                    Spróbuj ponownie za kilka minut
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary mt-1 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <p className="text-gray-700">
                    <strong className="text-black">Problemy?</strong> Napisz do
                    nas na{" "}
                    <a
                      href="mailto:yo@wozu.co"
                      className="text-primary hover:text-primary/90 underline"
                    >
                      yo@wozu.co
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/">
                <button className="bg-primary hover:bg-primary/90 rounded-[3px] border-0 px-8 py-3 text-base font-bold text-white uppercase transition-colors">
                  Wróć na stronę główną
                </button>
              </a>

              <a href="mailto:yo@wozu.co">
                <button className="flex items-center gap-2 rounded-[3px] border-[3px] border-black bg-white px-8 py-3 text-base font-bold text-black transition-colors hover:bg-gray-50">
                  <Mail className="h-4 w-4" />
                  Potrzebujesz pomocy?
                </button>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 border-t-[3px] border-gray-200 pt-8">
              <p className="text-sm text-gray-600">
                Po potwierdzeniu emaila będziesz mieć dostęp do społeczności.
                Otrzymasz również wszystkie aktualizacje o Vibe Hero.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
