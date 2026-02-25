import React from "react";
import { Box } from "lucide-react";

type Props = {
    className?: string;
};

export type FeaturesGridProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<Props>;

const features = [
    {
        title: "Cotygodniowe masterclassy na żywo",
        description: "Każda środa o 19:00. Wybieramy jeden temat. Od promptowania, przez bazę danych, po landing page i pierwsze sprzedaże. Skupiamy się na praktyce i jasnych krokach do działania."
    },
    {
        title: "Archiwum nagrań",
        description: "Wszystkie poprzednie masterclassy są do obejrzenia kiedy chcesz. W swoim tempie. Wracasz do tego co potrzebujesz."
    },
    {
        title: "Forum i pytania bez czekania",
        description: "Utknąłeś? Wrzuć pytanie. Potrzebujesz feedbacku? Pokaż screenshot. Ja i grupa odpowiadamy na bieżąco. Średni czas odpowiedzi: kilka godzin, nie dni."
    },
    {
        title: "60+ osób w tej samej drodze",
        description: "Nie jesteś sam. Widzisz co budują inni. Wymieniasz się doświadczeniami i łapiesz kontakty z ludźmi, którzy myślą i działają jak Ty."
    }
];

export const FeaturesGrid = (props: FeaturesGridProps) => {
    return (
        <section
            {...props}
            className={`w-full bg-white px-[5%] py-16 md:py-24 lg:py-28 text-black ${props.className || ''}`}
        >
            <div className="container mx-auto max-w-5xl">
                {/* Title Section */}
                <div className="mx-auto mb-10 max-w-[800px] text-center md:mb-12 lg:mb-16">
                    <h2 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                        Co Cię czeka w środku
                    </h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start text-left p-6 md:p-8 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                            <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                                <Box className="w-6 h-6 text-[#ff4c2d]" /> {/* Using primary color hex for now or class if available */}
                            </div>
                            <h3 className="font-heading mb-3 text-xl font-bold md:text-2xl">
                                {feature.title}
                            </h3>
                            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
