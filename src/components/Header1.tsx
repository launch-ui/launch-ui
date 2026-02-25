import { Button } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  subtext?: string;
  image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header1 = (props: Header1Props) => {
  const { heading, description, subtext, image } = {
    ...Header1Defaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="px-4 md:px-[5%] pt-8 pb-0 md:pt-8 md:pb-0 lg:pt-8 lg:pb-0 bg-white text-black"
    >
      <div className="container px-0">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="text-left">
            <h1 className="font-h1 mb-5 text-left text-6xl font-bold md:mb-6 md:text-9xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md text-left">{description}</p>
            <div className="mt-6 flex flex-col items-start gap-4 pb-4 md:mt-8">
              <div className="flex flex-wrap gap-4">
                <a href="#pricing">
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-[3px] border-0 px-6 py-3">
                    Dołącz do nas
                  </Button>
                </a>
              </div>
              {subtext && (
                <p className="text-left text-xs whitespace-pre-line md:text-sm">
                  {subtext}
                </p>
              )}
            </div>
          </div>
          <div>
            <picture>
              <source
                srcSet={image.src.replace(/\.(png|jpg|jpeg)$/, ".webp")}
                type="image/webp"
              />
              <img
                src={image.src}
                className="w-full object-cover"
                alt={image.alt}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header1Defaults: Props = {
  heading: "Zamień pomysł w działającą apkę z pierwszymi userami",
  description:
    "Dołącz do osób, które na codzień zamieniają swoje pomysły w działające aplikacje za pomocą AI.",
  subtext:
    "60+ osób w społeczności · LIVE w każdą środę · 5 warsztatów w archiwum",
  image: {
    src: "/vibe-hero-heroimg.png",
    alt: "Vibe Hero illustration",
  },
};
