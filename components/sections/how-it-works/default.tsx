import {
  CalendarIcon,
  HeartHandshakeIcon,
  PlayIcon,
  UsersIcon,
} from "lucide-react";

import { Section } from "../../ui/section";

interface TimelineItemProps {
  week: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HowItWorksProps {
  title?: string;
  items?: TimelineItemProps[] | false;
  className?: string;
}

export default function HowItWorks({
  title = "Jak to działa",
  items = [
    {
      week: "01",
      title: "Sprint trwa 2 tygodnie\n(poniedziałek–piątek)",
      description:
        "Intensywnie, ale do zrobienia. Wystarczy godzina dziennie. Pracujesz gdy masz czas.",
      icon: <CalendarIcon className="h-6 w-6" />,
    },
    {
      week: "02",
      title: "Codziennie ~10 minut lekcji + konkretne zadanie",
      description: "Krótkie, praktyczne info. Bez zbędnego pierdzielenia.",
      icon: <PlayIcon className="h-6 w-6" />,
    },
    {
      week: "03",
      title: "Coworkingi i Q&A na żywo",
      description: "Pracujemy razem, pytania rozwiązujemy na bieżąco.",
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      week: "04",
      title: "Rok dostępu do społeczności",
      description: "Wsparcie nie kończy się po sprincie. Masz rok na rozwój.",
      icon: <HeartHandshakeIcon className="h-6 w-6" />,
    },
  ],
  className,
}: HowItWorksProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div
          className="animate-appear mb-16 text-center opacity-0"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight lg:text-5xl">
            {title}
          </h2>
        </div>

        {/* Vertical Timeline */}
        {items !== false && items.length > 0 && (
          <div className="relative mx-auto max-w-4xl">
            {/* Central timeline line - hidden on mobile */}
            <div className="from-brand via-brand/50 to-brand/20 absolute top-0 bottom-0 left-8 hidden w-0.5 bg-gradient-to-b sm:left-1/2 sm:block sm:-translate-x-px sm:transform" />

            <div className="space-y-12">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`animate-appear relative flex items-center opacity-0 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                  style={{
                    animationDelay: `${index * 200 + 300}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 z-10 sm:left-1/2 sm:-translate-x-1/2 sm:transform">
                    <div className="bg-brand border-background flex h-16 w-16 items-center justify-center rounded-full border-4 text-white shadow-lg">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-24 sm:ml-0 sm:w-5/12 ${
                      index % 2 === 0
                        ? "sm:mr-auto sm:pr-8"
                        : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <div className="border-border/50 from-background/80 to-background/40 rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
                      {/* Step number */}
                      <div className="mb-3">
                        <span className="bg-brand/10 text-brand inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                          {item.week}
                        </span>
                      </div>

                      <h3 className="mb-3 text-xl leading-tight font-semibold whitespace-pre-line">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
