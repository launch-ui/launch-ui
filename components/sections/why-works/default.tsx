import { Section } from "../../ui/section";

interface WhyWorksProps {
  title?: string;
  subtitle?: string;
  items?: string[] | false;
  className?: string;
}

export default function WhyWorks({
  title = "Dlaczego to działa",
  subtitle = "Większość ludzi utyka w wiecznym planowaniu. W Vibe Hero skupiamy się na tym, co naprawdę ma znaczenie.",
  items = [
    "Focus na jedno narzędzie oraz funkcję",
    "Budowanie MVP zamiast komplikowania",
    "Codzienne live'y",
    "Wsparcie społeczności",
    "Szybkie testowanie i wprowadzanie zmian",
  ],
  className,
}: WhyWorksProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-16 sm:gap-24">
        <div className="w-full max-w-5xl">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left: Title + Points */}
            <div className="text-center lg:text-left">
              <h2
                className="animate-appear mb-8 text-3xl leading-tight font-bold opacity-0 sm:text-4xl sm:leading-tight lg:text-5xl"
                style={{
                  animationDelay: "100ms",
                  animationFillMode: "forwards",
                }}
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  className="text-muted-foreground animate-appear mb-8 text-lg leading-relaxed opacity-0 sm:text-xl"
                  style={{
                    animationDelay: "200ms",
                    animationFillMode: "forwards",
                  }}
                >
                  {subtitle}
                </p>
              )}

              {items !== false && items.length > 0 && (
                <div
                  className="animate-appear mt-8 opacity-0"
                  style={{
                    animationDelay: "300ms",
                    animationFillMode: "forwards",
                  }}
                >
                  <ul className="mx-auto max-w-md space-y-4 text-left lg:mx-0">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-brand mt-2.5 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: gFLUO Proof */}
            <div
              className="animate-appear opacity-0"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <div className="border-brand/20 from-brand/5 relative rounded-2xl border bg-gradient-to-br to-transparent p-8 backdrop-blur-sm">
                <div className="from-brand/10 absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent opacity-50" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                      Case study
                    </span>
                  </div>
                  <p className="mb-4 text-lg leading-relaxed">
                    &ldquo;Na codzień tworzę{" "}
                    <a
                      href="https://gfluo.com"
                      className="text-brand font-semibold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      gFLUO.com
                    </a>{" "}
                    – narzędzie, które zaczynało jako szybkie MVP, zarobiło{" "}
                    <span className="text-brand text-xl font-bold">
                      10k zł w przedsprzedaży
                    </span>{" "}
                    i do dzisiaj jest vibe kodowanym produktem.
                  </p>
                  <p className="text-lg leading-relaxed font-medium">
                    Vibe Hero to proces, którym sam się posługuję, żeby dowozić
                    kolejne projekty.&rdquo; <br />- wozu
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
