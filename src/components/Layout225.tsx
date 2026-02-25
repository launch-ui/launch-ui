import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { MdSchedule } from "react-icons/md";
import { BiRocket, BiGroup } from "react-icons/bi";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  icon: React.ReactNode;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  heading?: string;
  image: ImageProps;
  featureSections: FeatureSection[];
};

export type Layout225Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout225 = (props: Layout225Props) => {
  const { heading, image, featureSections } = {
    ...Layout225Defaults,
    ...props,
  };
  return (
    <section
      id="community"
      className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black"
    >
      <div className="container px-0 md:px-4 lg:px-[5%]">
        {heading && (
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="font-heading text-5xl font-bold md:text-7xl lg:text-8xl">
              {heading}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:gap-y-8 py-2">
              {featureSections.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row self-start"
                >
                  <div className="mb-3 md:mb-0 md:mr-6 flex-none self-start">
                    <div className="flex size-10 md:size-12 items-center justify-center">
                      {section.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading mb-3 text-left text-2xl font-bold md:mb-4 md:text-2xl">
                      {section.heading}
                    </h3>
                    <p className="text-left">{section.description}</p>
                    <div className="mt-5 flex items-center gap-x-4 md:mt-6">
                      {section.buttons.map((button, index) => (
                        <a key={index} href="#pricing">
                          <Button {...button}>{button.title}</Button>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout225Defaults: Props = {
  heading: "Jak wygląda społeczność",
  image: {
    src: "/community-screenshot.png",
    alt: "Community screenshot",
  },
  featureSections: [
    {
      icon: <MdSchedule className="size-10 md:size-12" />,
      heading: "codzienne coworkingi",
      description:
        "Najfajniejsza część community - codziennie można zadać pytanie, złapać się z innymi i wspólnie robić progress. Mega szansa do pogadania o podejściu do ai, pro tipach\n\nW trakcie sprintów coworkingi dzieją się 2x dziennie.",
      buttons: [],
    },
    {
      icon: <BiRocket className="size-10 md:size-12" />,
      heading: "Sprinty vibe hero",
      description:
        "Co 2 miesiące odbywa się 2 tygodniowy sprint, podczas którego można przejść od pomysłu do zbudowania działającej apki. Działa świetnie na motywację do pracy i pozwala robić mega progress. Codzienne dzielę się jedną krótką lekcją i bez zbędnych ceregieli przechodzisz do działania.",
      buttons: [],
    },
    {
      icon: <BiGroup className="size-10 md:size-12" />,
      heading: "masterclass, forum i czat",
      description:
        "Masz dostęp do dodatkowych treści, możesz zadawać pytania albo dzielić się zajawką. Otaczanie się ludźmi, którzy budują rzeczy sprawia, że jesteś na bieżąco i budujesz kontakty. W grupie raźniej!",
      buttons: [
        {
          title: "Dołącz",
          className:
            "bg-primary text-white hover:bg-primary/90 rounded-[3px] border-0",
        },
      ],
    },
  ],
};
