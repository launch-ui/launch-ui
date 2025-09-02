import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  RocketIcon,
  UsersIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import GlobalWebGLBackground from "@/components/ui/global-webgl-background";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Witamy w społeczności! | Vibe Hero Sprint",
  description:
    "Email potwierdzony! Witamy w społeczności Vibe Hero Sprint. Otrzymasz dostęp od października.",
  openGraph: {
    title: "Witamy w społeczności! | Vibe Hero Sprint",
    description:
      "Email potwierdzony! Witamy w społeczności Vibe Hero Sprint. Otrzymasz dostęp od października.",
    url: `${siteConfig.url}/dzieki-bardzo`,
  },
  robots: {
    index: false, // Don't index thank you pages
    follow: false,
  },
};

export default function DziekiBardzoPage() {
  return (
    <>
      <GlobalWebGLBackground />

      <main className="relative min-h-screen w-full">
        <Section className="flex min-h-screen items-center justify-center px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-green-500/40 bg-green-500/20">
                <CheckCircleIcon className="h-12 w-12 text-green-400" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Dziękujemy bardzo! 🎉
            </h1>

            <p className="mb-4 text-2xl font-medium text-gray-300">
              Email potwierdzony!
            </p>

            {/* Welcome Cards */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {/* Community Access */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex justify-center">
                  <UsersIcon className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Społeczność
                </h3>
                <p className="text-sm text-gray-300">
                  Dostęp do community od października. Codzienne coworking, Q&A
                  i wsparcie.
                </p>
              </div>

              {/* Sprint Info */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex justify-center">
                  <RocketIcon className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Sprint
                </h3>
                <p className="text-sm text-gray-300">
                  {siteConfig.stats.duration} intensywnego tworzenia produktu z
                  prawdziwym feedbackiem.
                </p>
              </div>

              {/* Updates */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex justify-center">
                  <CalendarIcon className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Aktualizacje
                </h3>
                <p className="text-sm text-gray-300">
                  Otrzymasz wszystkie ważne informacje i harmonogram na email.
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-12 rounded-lg border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 backdrop-blur-sm">
              <h2 className="mb-6 text-2xl font-bold text-white">Co dalej?</h2>

              <div className="mx-auto max-w-2xl space-y-4 text-left">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand mt-1.5 h-3 w-3 flex-shrink-0 rounded-full"></div>
                  <div>
                    <p className="font-medium text-white">
                      Otrzymasz email z szczegółami
                    </p>
                    <p className="text-sm text-gray-300">
                      Harmonogram, linki do community i wszystko co potrzebne
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand mt-1.5 h-3 w-3 flex-shrink-0 rounded-full"></div>
                  <div>
                    <p className="font-medium text-white">Masz pytania?</p>
                    <p className="text-sm text-gray-300">
                      Odezwij się do mnie na{" "}
                      <a
                        href="mailto:wozu@vibehero.pl"
                        className="text-blue-400 underline hover:text-blue-300"
                      >
                        wozu@vibehero.pl
                      </a>{" "}
                      lub{" "}
                      <a
                        href="https://linkedin.com/in/woz"
                        className="text-blue-400 underline hover:text-blue-300"
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
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-brand hover:bg-brand/90 border-0 px-8 py-3 font-semibold text-white"
              >
                <Link href="/">
                  <ArrowRightIcon className="mr-2 h-4 w-4" />
                  Poznaj szczegóły sprintu
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 bg-white/5 px-8 py-3 text-white hover:bg-white/10"
              >
                <a href={siteConfig.links.email}>Masz pytania? Napisz do nas</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
