type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  footerText?: string;
};

export type Footer6Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer6 = (props: Footer6Props) => {
  const { logo, footerText } = {
    ...Footer6Defaults,
    ...props,
  };

  return (
    <footer
      id="relume"
      className="bg-white px-4 md:px-[5%] py-12 md:py-18 lg:py-20"
    >
      <div className="container max-w-[1280px] px-0 md:px-4 lg:px-[5%]">
        <div className="flex flex-col gap-8">
          <div className="h-px w-full bg-black" />
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
            <a href={logo.url}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-4 md:max-h-5 w-auto"
              />
            </a>
            <p className="text-sm leading-[1.5] capitalize text-center sm:text-left">
              {footerText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer6Defaults: Props = {
  logo: {
    url: "#",
    src: "/Vibe-hero-logo.png",
    alt: "Vibe Hero Logo",
  },
  footerText: "© 2026 Vibe Hero. Wszelkie prawa zastrzeżone.",
};
