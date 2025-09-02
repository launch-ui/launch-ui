import { CheckCircleIcon } from "lucide-react";

import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
}

interface TargetAudienceProps {
  title?: string;
  subtitle?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function TargetAudience({
  title = "Dla kogo to jest",
  subtitle = "Sprawdź, czy to pasuje do Ciebie:",
  items = [
    {
      title: "Masz pomysł, ale nie wiesz od czego zacząć",
      description: "Pomysł w głowie, ale paraliż wyboru narzędzi i kroków",
    },
    {
      title: "Blokuje cię perfekcjonizm",
      description: "Ciągle dodajesz funkcje zamiast wypuścić MVP",
    },
    {
      title: "Boisz się pokazać światu swoją pracę",
      description: "Odkładasz launch bo 'nie jest jeszcze gotowe'",
    },
    {
      title:
        "Jesteś designerem / no-code dev i chcesz przejść na wyższy poziom",
      description: "Znasz Figma/Webflow/Bubble, ale chcesz nauczyć się kodu",
    },
  ],
  className,
}: TargetAudienceProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-16 sm:gap-24">
        {/* Single unified box containing everything */}
        <div
          className="animate-appear w-full max-w-3xl opacity-0"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          <div className="border-border/50 from-background/80 to-background/40 rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-sm sm:p-12">
            {/* Header - closer to content */}
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight lg:text-5xl">
                {title}
              </h2>
              <p className="text-xl font-semibold sm:text-2xl">{subtitle}</p>
            </div>

            {/* Checklist */}
            {items !== false && items.length > 0 && (
              <div className="mb-8 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="animate-appear group opacity-0"
                    style={{
                      animationDelay: `${index * 150 + 300}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <div className="hover:bg-background/30 flex items-start gap-4 rounded-lg p-2 transition-all duration-300">
                      {/* Checkmark */}
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircleIcon className="text-brand h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-left">
                        <h3 className="mb-1 text-lg leading-tight font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA ending - integrated in same box */}
            <div
              className="animate-appear opacity-0"
              style={{
                animationDelay: `${items ? items.length * 150 + 600 : 600}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="border-border/30 border-t pt-4 text-center">
                <p className="text-xl leading-relaxed font-semibold sm:text-2xl">
                  Brzmi znajomo? 👆
                </p>
                <p className="text-muted-foreground mt-2 text-lg">
                  Ten sprint jest właśnie dla Ciebie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
