import { cn } from "@/lib/utils";

import Glow from "../../ui/glow";
import { Section } from "../../ui/section";
import { WaitlistModal } from "../../waitlist-modal";

interface CTAProps {
  title?: string;
  subtitle?: string;
  benefits?: string[] | false;
  className?: string;
}

export default function CTA({
  title = "Chcesz wskoczyć do vibe codingu?",
  subtitle = "Za 2 tygodnie będziesz miał działający produkt zamiast kolejnego rozgrzebanego pomysłu",
  benefits = false,
  className,
}: CTAProps) {
  return (
    <Section
      className={cn("group relative overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(to bottom, var(--background) 0%, var(--background) 60%, transparent 100%)",
      }}
    >
      <div className="max-w-container relative z-10 mx-auto">
        {/* Main CTA Box */}
        <div className="border-brand/20 from-brand/10 to-brand/5 mx-auto max-w-4xl rounded-3xl border bg-gradient-to-br p-8 text-center backdrop-blur-sm sm:p-12">
          <div className="flex flex-col items-center gap-8 sm:gap-12">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-2xl leading-tight font-bold sm:text-3xl sm:leading-tight lg:text-4xl">
                {title}
              </h2>
              {subtitle && (
                <p className="text-muted-foreground mx-auto max-w-2xl text-lg font-medium sm:text-xl">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Benefits */}
            {benefits !== false && benefits.length > 0 && (
              <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-left text-lg font-medium">
                    {benefit}
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-6">
              <WaitlistModal triggerText="Dołącz do waitlisty" />

              {/* Community info */}
              <p className="text-lg font-bold text-white">
                Dostęp do community od października • 20+ osób już na pokładzie
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
