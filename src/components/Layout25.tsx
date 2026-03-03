
import type { ButtonProps } from "@relume_io/relume-ui";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

type ImageProps = {
  src: string;
  alt?: string;
};

type StatsProps = {
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  tagline: string;
  stats: StatsProps[];
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout25Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout25 = (props: Layout25Props) => {
  const { tagline, heading, description, stats, image } = {
    ...Layout25Defaults,
    ...props,
  };
  return (
    <section
      id={props.id || "relume"}
      className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black"
    >
      <div className="container px-0 md:px-4 lg:px-[5%]">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <img
            src={image.src}
            className="w-full object-cover"
            alt={image.alt}
          />
          <div>
            <p className="mb-3 text-left font-semibold md:mb-4">{tagline}</p>
            <h2 className="font-heading mb-5 text-left text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md mb-6 text-left md:mb-8">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="font-heading mb-2 text-left text-3xl font-bold md:text-3xl lg:text-4xl">
                    {stat.title}
                  </h3>
                  <p className="text-left text-lg">{stat.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium mr-2">moje sociale:</span>
              <a
                href="https://linkedin.com/in/woz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://www.youtube.com/@wojtekwoz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF0000] transition-colors"
              >
                <FaYoutube size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout25Defaults: Props = {
  tagline: "O Autorze",
  heading: "Hej, tu wozu!",
  description:
    "Pomagam zamieniać pomysły w działające aplikacje z AI.\n\n3 lata temu byłem tam, gdzie Ty teraz. Na początku nie miałem nawet pomysłów. Produkt chciałem zbudować ale nie wiedziałem od czego zacząć, ani jak.\n\nMetodą prób i błędów w końcu przełamałem blokadę i stworzyłem pierwszy produkt. Potem drugi. Potem trzeci... i tak do dzisiaj.\n\nOd tej pory:",
  stats: [
    {
      title: "50,000+ PLN",
      description: "zarobionych na apkach z AI",
    },
    {
      title: "100+",
      description: "osób przeprowadzonych od pomysłu do MVP",
    },
    {
      title: "71",
      description: "osób w społeczności, które budują razem ze mną",
    }
  ],
  buttons: [
    {
      title: "Dołącz do nas",
      className:
        "bg-primary text-white hover:bg-primary/90 rounded-[3px] border-0",
    },
  ],
  image: {
    src: "./wozu-photo.jpg",
    alt: "Wozu photo",
  },
};
