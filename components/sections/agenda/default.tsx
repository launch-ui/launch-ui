import { Section } from "../../ui/section";

interface AgendaProps {
  className?: string;
}

export default function Agenda({ className }: AgendaProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div
          className="animate-appear mb-16 text-center opacity-0"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          <p className="text-brand mb-4 text-sm font-medium tracking-wide uppercase">
            Agenda
          </p>
          <h2 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight lg:text-5xl">
            Co znajdziesz w środku
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg sm:text-xl">
            10 dni sprintu, 12 miesięcy w community, dostęp do narzędzi i
            materiałów
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Core */}
          <div
            className="animate-appear opacity-0"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <div className="border-border/50 from-background/80 to-background/40 rounded-2xl border bg-gradient-to-br p-8 shadow-lg backdrop-blur-sm">
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">🔑</span>
                  <h3 className="text-2xl font-bold">Core: Vibe Hero Sprint</h3>
                </div>
              </div>

              {/* Sprint Days */}
              <div className="mb-8 space-y-4">
                {[
                  "Fundamenty",
                  "Wybór narzędzia i kluczowej funkcji",
                  "Plan działania (Now / This Week / Someday)",
                  "Vibe Build #1 (szkielet MVP)",
                  "Onboarding First Approach",
                  "Jak znaleźć pierwszych testerów",
                  "Peer Test w Vibe Hero",
                  "Vibe Build #2 (naprawy, changelog)",
                  "Tiny Sales Test (pierwsze płatności / waitlist)",
                  "Podsumowanie i Next Bet",
                ].map((day, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="bg-brand/10 text-brand mt-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground">{day}</p>
                  </div>
                ))}
              </div>

              {/* Additional Features */}
              <div className="border-border/30 space-y-3 border-t pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-lg">•</span>
                  <p className="text-muted-foreground">
                    Codzienny live coworking online (1h wspólnej pracy)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">•</span>
                  <p className="text-muted-foreground">
                    1x w tygodniu Q&A live (rozwiązujemy blokady na bieżąco)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">•</span>
                  <p className="text-muted-foreground">
                    Demo Day – chwalimy się i pokazujemy co zrobiliśmy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bonus */}
          <div
            className="animate-appear opacity-0"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <div className="border-border/50 from-background/80 to-background/40 rounded-2xl border bg-gradient-to-br p-8 shadow-lg backdrop-blur-sm">
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎁</span>
                  <h3 className="text-2xl font-bold">
                    Bonus: Masterclass po sprincie
                  </h3>
                </div>
              </div>

              {/* Masterclass Topics */}
              <div className="mb-8 space-y-4">
                {[
                  "Jak ogarniać płatności (Stripe / LemonSqueezy)",
                  "Jak sprawić, żeby UI wyglądało dobrze bez designera",
                  "Jak korzystać z AI w Cursorze i Lovable, żeby minimalizować śmieciowy kod",
                  "Jak spinać bazę i API, kiedy MVP rośnie",
                  "Jak pracować z githubem, bez godzin na naukę gita",
                ].map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="bg-brand/10 text-brand mt-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground">{topic}</p>
                  </div>
                ))}
              </div>

              {/* Additional Benefits */}
              <div className="border-border/30 space-y-3 border-t pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-lg">•</span>
                  <p className="text-muted-foreground">
                    Dostęp do wszystkich nagrań ze sprintu i masterclassów
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">•</span>
                  <p className="text-muted-foreground">
                    12 miesięcy w community Vibe Hero – zawsze masz gdzie wrócić
                    po feedback i wsparcie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
