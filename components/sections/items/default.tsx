import {
  BlocksIcon,
  FastForwardIcon,
  RocketIcon,
  ScanFaceIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Co będziesz mieć po 2 tygodniach",
  items = [
    {
      title: "Działający produkt, którym możesz się pochwalić",
      description:
        "Stworzysz działającą aplikację z główną funkcją - coś, co możesz pokazać znajomym i potencjalnym klientom.",
      icon: <RocketIcon className="h-6 w-6" />,
    },
    {
      title: "Sprawdzony sposób na kolejne pomysły",
      description:
        "Opanujesz metodę Vibe Hero, dzięki której każdy następny pomysł zamienisz w działający produkt w rekordowym tempie.",
      icon: <BlocksIcon className="h-6 w-6" />,
    },
    {
      title: "Prawdziwy feedback od użytkowników",
      description:
        "Pozyskasz pierwsze opinie o swoim produkcie - od społeczności lub rzeczywistych userów.",
      icon: <ScanFaceIcon className="h-6 w-6" />,
    },
    {
      title: "Widoczny postęp zamiast wiecznych planów",
      description:
        "Przełamiesz paraliż planowania i zobaczysz konkretne rezultaty swojej pracy.",
      icon: <FastForwardIcon className="h-6 w-6" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-16 sm:gap-24">
        <h2
          className="animate-appear max-w-[640px] text-center text-3xl leading-tight font-bold opacity-0 sm:text-4xl sm:leading-tight lg:text-5xl"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid w-full max-w-6xl auto-rows-fr grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 lg:gap-20">
            {items.map((item, index) => (
              <Item
                key={index}
                className="animate-appear text-center opacity-0 sm:text-left"
                style={{
                  animationDelay: `${index * 150 + 300}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ItemTitle className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-start">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription className="mt-4">
                  {item.description}
                </ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
