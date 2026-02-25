import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import {
  BiBook,
  BiMobile,
  BiCode,
  BiUserPlus,
  BiTrendingUp,
  BiTestTube,
  BiRefresh,
  BiLayout,
  BiRocket,
} from "react-icons/bi";

type SectionProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  heading: string;
  sections: SectionProps[];
};

export type Layout238Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout238 = (props: Layout238Props) => {
  const { sections, heading } = { ...props, ...Layout238Defaults };
  return (
    <section
      id="sprinty"
      className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black"
    >
      <div className="container px-0 md:px-4 lg:px-[5%]">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="font-heading text-5xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-5 md:mb-6">
                <div className="flex size-10 md:size-12 items-center justify-center">
                  {section.icon}
                </div>
              </div>
              <h3 className="font-heading mb-5 text-left text-2xl font-bold md:mb-6 md:text-2xl">
                {section.heading}
              </h3>
              <p className="text-left">{section.description}</p>
              <div className="mt-6 flex items-center gap-4 md:mt-8">
                {section.buttons.map((button, index) => (
                  <a key={index} href="#pricing">
                    <Button {...button}>{button.title}</Button>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <a href="#pricing">
            <button className="bg-primary hover:bg-primary/90 rounded-[3px] border-0 px-5 py-2.5 text-base leading-[1.5] font-bold text-white uppercase transition-colors">
              Dołącz do Społeczności
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export const Layout238Defaults: Props = {
  heading: "Agenda sprintu",
  sections: [
    {
      icon: <BiBook className="size-10 md:size-12" />,
      heading: "budowanie kontekstu",
      description:
        "Ustalasz jasny cel i zakres. Zamiast miliona pomysłów wybierasz ten, który da się dowieźć w 2 tygodnie.",
      buttons: [],
    },
    {
      icon: <BiMobile className="size-10 md:size-12" />,
      heading: "Wybór aplikacji",
      description:
        "Decydujemy o narzędziu i pierwszej funkcji MVP. Minimum, które ma wartość – bez zbędnych dodatków.",
      buttons: [],
    },
    {
      icon: <BiCode className="size-10 md:size-12" />,
      heading: "vibe coding",
      description:
        "Zaczynamy codzienne sesje, w których krok po kroku budujesz aplikację z AI + no-code. W praktyce, nie w teorii.",
      buttons: [],
    },
    {
      icon: <BiUserPlus className="size-10 md:size-12" />,
      heading: "onboarding userów",
      description:
        "Pokazuję Ci, jak zadbać o UX użytkownika i zaprosić pierwszych ludzi do korzystania z Twojego MVP.",
      buttons: [],
    },
    {
      icon: <BiTrendingUp className="size-10 md:size-12" />,
      heading: "Wstęp do marketingu",
      description:
        "Prosty proces promocji, gdzie wrzucać posty i jak to zrobić.",
      buttons: [],
    },
    {
      icon: <BiTestTube className="size-10 md:size-12" />,
      heading: "pierwszy user test",
      description:
        "Twoje MVP trafia do ludzi. Zbierasz pierwsze reakcje i wiesz, czy idziesz w dobrym kierunku.",
      buttons: [],
    },
    {
      icon: <BiRefresh className="size-10 md:size-12" />,
      heading: "wdrażanie feedbacku",
      description:
        "Iterujesz na podstawie prawdziwych opinii i dodajesz tylko to o co proszą ludzie.",
      buttons: [],
    },
    {
      icon: <BiLayout className="size-10 md:size-12" />,
      heading: "landing page",
      description:
        "Budujesz prostą stronę, która jasno komunikuje, co Twój produkt robi i dlaczego warto.",
      buttons: [],
    },
    {
      icon: <BiRocket className="size-10 md:size-12" />,
      heading: "Demo day",
      description: "Podsumowanie sprintu. Pokazujesz swój projekt innym.",
      buttons: [],
    },
  ],
};
