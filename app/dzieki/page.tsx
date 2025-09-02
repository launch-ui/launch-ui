import { CheckCircleIcon, MailIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import GlobalWebGLBackground from "@/components/ui/global-webgl-background";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dziękujemy za zapis! | Vibe Hero Sprint",
  description:
    "Sprawdź swoją skrzynkę email i potwierdź adres, aby dołączyć do Vibe Hero Sprint.",
  openGraph: {
    title: "Dziękujemy za zapis! | Vibe Hero Sprint",
    description:
      "Sprawdź swoją skrzynkę email i potwierdź adres, aby dołączyć do Vibe Hero Sprint.",
    url: `${siteConfig.url}/dzieki`,
  },
  robots: {
    index: false, // Don't index thank you pages
    follow: false,
  },
};

export default function DziekiPage() {
  return (
    <>
      <GlobalWebGLBackground />

      <main className="relative min-h-screen w-full">
        <Section className="flex min-h-screen items-center justify-center px-4">
          <div className="mx-auto max-w-2xl text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-green-500/30 bg-green-500/20">
                <CheckCircleIcon className="h-10 w-10 text-green-400" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Dziękujemy za zapis!
            </h1>

            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              Właśnie wysłaliśmy Ci email potwierdzający na podany adres.
            </p>

            {/* Email Confirmation Card */}
            <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
              <div className="mb-4 flex justify-center">
                <MailIcon className="h-12 w-12 text-blue-400" />
              </div>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                🚨 Ważne: Potwierdź swój email
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                Aby dołączyć do społeczności <strong>Vibe Hero Sprint</strong>,
                musisz potwierdzić swój adres email. Sprawdź swoją skrzynkę
                odbiorczą i kliknij w link potwierdzający.
              </p>

              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">
                      Sprawdź spam/promotional
                    </strong>{" "}
                    - czasem email może trafić do tych folderów
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Nie ma emaila?</strong>{" "}
                    Spróbuj ponownie za kilka minut
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Problemy?</strong> Napisz do
                    nas na{" "}
                    <a
                      href={siteConfig.links.email}
                      className="text-blue-400 underline hover:text-blue-300"
                    >
                      wozu@vibehero.pl
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-brand hover:bg-brand/90 border-0 px-8 py-3 font-semibold text-white"
              >
                <Link href="/">Wróć na stronę główną</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 bg-white/5 px-8 py-3 text-white hover:bg-white/10"
              >
                <a href={siteConfig.links.email}>
                  <MailIcon className="mr-2 h-4 w-4" />
                  Potrzebujesz pomocy?
                </a>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-sm text-gray-400">
                Po potwierdzeniu emaila będziesz mieć dostęp do społeczności od
                października. Otrzymasz również wszystkie aktualizacje o Vibe
                Hero Sprint.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
