import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: React.ReactNode;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq1 = (props: Faq1Props) => {
  const {
    heading,
    description,
    questions,
  } = {
    ...Faq1Defaults,
    ...props,
  };
  return (
    <section
      id={props.id || "relume"}
      className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black"
    >
      <div className="container max-w-lg px-0 md:px-4 lg:px-[5%]">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="font-heading rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion type="multiple" className="space-y-4">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-gray-50/30 data-[state=open]:bg-white data-[state=open]:border-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="md:text-lg text-left md:py-6 font-bold hover:no-underline hover:text-primary transition-colors">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="text-left md:pb-6 text-gray-600 text-base leading-relaxed">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const Faq1Defaults: Props = {
  heading: "Zanim dołączysz",
  description: "",
  questions: [
    {
      title: "Czy muszę umieć kodować?",
      answer:
        "Nie. Większość osób w grupie to designerzy i przedsiębiorcy bez technicznego backgroundu. Budujemy z narzędziami no-code i AI - bez pisania kodu.",
    },
    {
      title: "Ile czasu to zajmuje?",
      answer:
        "Masterclass to godzina tygodniowo. Reszta - forum, networking - w Twoim tempie. Nie ma obowiązkowych zadań. Bierzesz tyle ile chcesz.",
    },
    {
      title: "A co jeśli to nie dla mnie?",
      answer:
        "Przy subskrypcji miesięcznej - rezygnujesz kiedy chcesz. Przy kwartalnej i rocznej - masz dostęp do końca opłaconego okresu. Bez ukrytych haczyków. Do każdej opcji masz 14 dni na pełny zwrot kosztów.",
    },
    {
      title: "Mogę pogadać przed zakupem?",
      answer:
        "Jasne. Napisz na LinkedIn (linkedin.com/in/woz) albo mail (yo@wozu.co). Odpowiadam osobiście.",
    },
  ],
  footerHeading: "Masz inne pytania?",
  footerDescription: (
    <>
      Napisz bezposrednio:{" "}
      <a href="mailto:yo@wozu.co" className="hover:underline font-semibold">
        yo@wozu.co
      </a>
    </>
  ),
  button: {
    title: "Dołącz do nas",
    variant: "secondary",
    className:
      "bg-primary text-white hover:bg-primary/90 rounded-[3px] border-0 uppercase font-bold px-8 py-3 text-lg",
  },
};
