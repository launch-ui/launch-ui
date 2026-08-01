import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Glow from "../../ui/glow";
import { LinkButton, type LinkButtonProps } from "../../ui/link-button";
import { Section } from "../../ui/section";

interface CTAButtonProps extends Omit<LinkButtonProps, "children"> {
  text: string;
}

interface CTAProps {
  title?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

const DEFAULT_CTA_BUTTONS: CTAButtonProps[] = [
  {
    href: siteConfig.getStartedUrl,
    text: "Get Started",
    variant: "default",
  },
];

export default function CTA({
  title = "Start building",
  buttons = DEFAULT_CTA_BUTTONS,
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {buttons !== false && buttons.length > 0 && (
          <div className="flex justify-center gap-4">
            {buttons.map((button) => (
              <LinkButton
                key={`${button.href}-${button.text}`}
                variant={button.variant || "default"}
                size="lg"
                href={button.href}
                icon={button.icon}
                iconRight={button.iconRight}
              >
                {button.text}
              </LinkButton>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
