import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout141Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout141 = (props: Layout141Props) => {
  const { tagline, heading, description, buttons, image } = {
    ...Layout141Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 text-left font-semibold md:mb-4">{tagline}</p>
              <h2 className="font-heading rb-5 mb-5 text-left text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md text-left">{description}</p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <a key={index} href="#pricing">
                    <Button {...button}>{button.title}</Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="size-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout141Defaults: Props = {
  tagline: "",
  heading: "Jak podchodzę do rozwoju w vibe Hero",
  description: "",
  buttons: [
    {
      title: "Dołącz do Społeczności",
      className:
        "bg-primary text-white hover:bg-primary/90 rounded-[3px] border-0",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Video placeholder",
  },
};
