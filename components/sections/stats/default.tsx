import { siteConfig } from "@/config/site";

import { Section } from "../../ui/section";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

function formatToThousands(value: number) {
  return Math.round(value / 100) / 10;
}

const DEFAULT_STATS: StatItemProps[] = [
  {
    label: "used by",
    value: formatToThousands(siteConfig.stats.figma),
    suffix: "k",
    description: "designers on Figma Community",
  },
  {
    label: "over",
    value: siteConfig.stats.github,
    description: "clones and forks of the template on GitHub",
  },
  {
    label: "already",
    value: formatToThousands(siteConfig.stats.cli),
    suffix: "k",
    description: "installations with shadcn/ui CLI",
  },
  {
    label: "includes",
    value: siteConfig.stats.sections,
    description: "blocks and sections",
  },
];

export default function Stats({
  items = DEFAULT_STATS,
  className,
}: StatsProps) {
  return (
    <Section className={className}>
      <div className="container mx-auto max-w-[960px]">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {items.map((item) => (
              <div
                key={`${item.label}-${item.description}`}
                className="flex flex-col items-start gap-3 text-left"
              >
                {item.label && (
                  <div className="text-muted-foreground text-sm font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                    {item.value}
                  </div>
                  {item.suffix && (
                    <div className="text-brand text-2xl font-semibold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm font-semibold text-pretty">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
