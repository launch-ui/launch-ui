import {
  PersonStandingIcon,
  UserCheckIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Mockup, MockupFrame } from "../../ui/mockup";
import { Section } from "../../ui/section";
import { WaitlistModal } from "../../waitlist-modal";

interface HeroProps {
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  className?: string;
}

export default function Hero({
  description = "Krótkie lekcje, live Q&A oraz codzienny coworking online.",
  mockup = false,
  badge = (
    <Badge
      variant="secondary"
      className="border-white/20 bg-white/10 text-white backdrop-blur-sm"
    >
      Vibe Coding Sprint
    </Badge>
  ),
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "relative h-screen overflow-hidden bg-transparent pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      {/* WebGL background now handled at main level */}

      {/* Dark overlay to improve text readability on mobile */}
      <div className="absolute inset-0 z-5 bg-black/40 md:bg-black/0" />

      {/* Content */}
      <div className="max-w-container relative z-10 mx-auto flex h-full flex-col justify-start px-4 pt-[15vh] pb-[10vh] md:justify-center md:pt-16 md:pb-4">
        <div className="grid items-center gap-8 md:gap-20 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6 text-left md:gap-12 lg:text-left">
            {/* Main Title with Badge - Hierarchy Level 1 */}
            <div className="space-y-4">
              {badge !== false && (
                <div className="animate-appear opacity-0">{badge}</div>
              )}

              <h1>
                <span className="block bg-gradient-to-r from-white to-white/90 bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl lg:text-5xl">
                  Zbuduj i przetestuj produkt w{" "}
                  <span className="text-brand">2 tygodnie</span>
                </span>
              </h1>

              {/* Program Description - Hierarchy Level 2 */}
              <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
                {description}
              </p>
            </div>

            {/* CTA - Hierarchy Level 4 */}
            <div className="animate-appear flex flex-col gap-4 opacity-0 delay-400">
              <WaitlistModal triggerText="Dołącz do waitlisty" />
            </div>

            {/* Social Proof - Hierarchy Level 3 */}
            <div className="animate-appear opacity-0 delay-500">
              <div className="flex flex-col items-center gap-3 text-sm text-white/60 sm:flex-row sm:gap-4">
                <div className="flex items-center -space-x-1">
                  {[
                    UserIcon,
                    UsersIcon,
                    UserCheckIcon,
                    UserPlusIcon,
                    PersonStandingIcon,
                  ].map((Icon, i) => (
                    <div
                      key={i}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-gray-800 backdrop-blur-sm"
                    >
                      <Icon className="h-3 w-3 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-center font-medium sm:text-left">
                  <span className="block sm:inline">
                    20+ osób już na pokładzie
                  </span>
                  <span className="hidden sm:inline"> • </span>
                  <span className="block sm:inline">
                    dostęp do community od października
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Space */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative">
              {/* Planet is rendered by WebGL background, this is just spacing */}
              <div className="h-96 w-96 opacity-0">
                {/* Invisible spacer for layout */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Content */}
        {mockup !== false && (
          <div className="animate-appear mt-24 opacity-0 delay-700">
            <MockupFrame size="small">
              <Mockup
                type="responsive"
                className="bg-background/10 w-full rounded-xl border border-white/10 backdrop-blur-sm"
              >
                {mockup}
              </Mockup>
            </MockupFrame>
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="from-background/50 absolute right-0 bottom-0 left-0 z-5 h-32 bg-gradient-to-t to-transparent" />
    </Section>
  );
}
