import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { WaitlistModal } from "../../waitlist-modal";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn("fixed top-0 right-0 left-0 z-50 px-4 pb-4", className)}
    >
      <div className="fade-bottom bg-background/5 absolute left-0 h-24 w-full backdrop-blur-md"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a href={siteConfig.url} className="flex items-center gap-3">
              <Image
                src="/vibe_hero_logo_for_light_bg.png"
                alt="Vibe Hero"
                width={120}
                height={40}
                className="max-h-4 w-auto dark:hidden"
              />
              <Image
                src="/vibe_hero_logo_for_dark_bg.png"
                alt="Vibe Hero"
                width={120}
                height={40}
                className="hidden max-h-4 w-auto dark:block"
              />
            </a>
          </NavbarLeft>
          <NavbarRight>
            <WaitlistModal
              triggerText="Dołącz do waitlisty"
              className="!w-auto text-white"
            />
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
