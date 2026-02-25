type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  quote: string;
  logo?: ImageProps;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName?: string;
  companyUrl?: string;
  sectionId?: string;
};

export type Testimonial1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial1 = (props: Testimonial1Props) => {
  const {
    quote,
    logo,
    avatar,
    name,
    position,
    companyName,
    companyUrl,
    sectionId,
  } = {
    ...Testimonial1Defaults,
    ...props,
  };
  return (
    <section
      id={sectionId || "relume"}
      className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black"
    >
      <div className="container w-full max-w-2xl md:max-w-lg px-0 md:px-4 lg:px-[5%]">
        <div className="border-primary flex flex-col items-center rounded-[3px] border-[3px] bg-white p-8 md:p-12">
          {logo && (
            <div className="mb-6 md:mb-8">
              {companyUrl ? (
                <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                  <img src={logo.src} alt={logo.alt} className="max-h-14" />
                </a>
              ) : (
                <img src={logo.src} alt={logo.alt} className="max-h-14" />
              )}
            </div>
          )}
          <blockquote className="font-heading text-xl font-bold md:text-2xl">
            {quote}
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4">
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold">{name}</p>
              <p>
                <span>{position}</span>
                {companyName && (
                  <>
                    ,{" "}
                    {companyUrl ? (
                      <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {companyName}
                      </a>
                    ) : (
                      <span>{companyName}</span>
                    )}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial1Defaults: Props = {
  quote:
    '"Dzięki VibeHero wdrożyłem MVP mojego produktu w zaledwie 3 godziny. Design wygląda dokładnie jak w Figmie, pixel-perfect. Kurs pokazał mi nie tylko narzędzia, ale cały proces od pomysłu do działającego produktu. To zmieniło moje podejście do wdrażania projektów."',
  logo: {
    src: "/jakub_logo.png",
    alt: "Neat Design Studio",
  },
  avatar: {
    src: "/jakub.png",
    alt: "Jakub Wojnar-Płeszka",
  },
  name: "Jakub Wojnar-Płeszka",
  position: "Freelance Product Designer",
  companyName: "Neat Design Studio",
  companyUrl: "https://www.neatdesign.studio/",
};
