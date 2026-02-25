import { Button } from "@relume_io/relume-ui";

type Props = {
    heading: string;
    subheadline: string;
    ctaText: string;
};

export const FinalCTA = (props: Partial<Props>) => {
    const { heading, subheadline, ctaText } = { ...FinalCTADefaults, ...props };

    return (
        <section className="px-4 md:px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black">
            <div className="container max-w-lg px-0 md:px-4 lg:px-[5%] text-center">
                <h2 className="font-heading mb-4 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    {heading}
                </h2>
                <p className="md:text-lg mb-8 text-gray-700">
                    {subheadline}
                </p>
                <a href="#pricing">
                    <Button className="bg-primary text-white hover:bg-primary/90 rounded-[3px] border-0 px-8 py-4 text-lg font-bold uppercase">
                        {ctaText}
                    </Button>
                </a>
            </div>
        </section>
    );
};

export const FinalCTADefaults: Props = {
    heading: "Gotowy żeby przestać planować i zacząć działać?",
    subheadline: "60+ osób już buduje swoje produkty z AI. Dołącz do nas.",
    ctaText: "Wchodzę do Vibe Hero",
};
