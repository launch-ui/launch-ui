import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
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

const DEFAULT_ITEMS: ItemProps[] = [
  {
    title: "Accessibility first",
    description: "Fully WCAG 2.0 compliant, made with best a11y practices",
    icon: <ScanFaceIcon className="size-5 stroke-1" />,
  },
  {
    title: "Responsive design",
    description: "Looks and works great on any device and screen size",
    icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
  },
  {
    title: "Light and dark mode",
    description: "Seamless switching between color schemes, 6 themes included",
    icon: <EclipseIcon className="size-5 stroke-1" />,
  },
  {
    title: "Easy to customize",
    description: "Flexible options to match your product or brand",
    icon: <BlocksIcon className="size-5 stroke-1" />,
  },
  {
    title: "Top-level performance",
    description: "Made for lightning-fast load times and smooth interactions",
    icon: <FastForwardIcon className="size-5 stroke-1" />,
  },
  {
    title: "Production ready",
    description: "Thoroughly tested and launch-prepared",
    icon: <RocketIcon className="size-5 stroke-1" />,
  },
  {
    title: "Made for localization",
    description: "Easy to implement support for multiple languages and regions",
    icon: <LanguagesIcon className="size-5 stroke-1" />,
  },
  {
    title: "CMS friendly",
    description: "Built to work with any headless content management system",
    icon: <SquarePenIcon className="size-5 stroke-1" />,
  },
];

export default function Items({
  title = "Everything you need. Nothing you don't.",
  items = DEFAULT_ITEMS,
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item) => (
              <Item key={item.title}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
