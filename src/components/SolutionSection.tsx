import React from "react";

type Props = {
    className?: string;
};

export type SolutionSectionProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<Props>;

export const SolutionSection = (props: SolutionSectionProps) => {
    return (
        <section
            {...props}
            className={`w-full bg-white px-0 md:px-[5%] pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28 text-black ${props.className || ''}`}
        >
            <div className="w-full mx-auto px-4 max-w-[800px] md:px-0">
                {/* Sekcja tytułu - centered */}
                <div className="mx-auto mb-10 max-w-[800px] text-center md:mb-12 lg:mb-16">
                    <h2 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
                        A co jeśli nie musisz tego robić sam?
                    </h2>
                </div>

                {/* Bloki rozwiązań - left aligned w wąskim containerze */}
                <div className="mx-auto max-w-[800px] space-y-10 text-left text-black">
                    <div>
                        <h3 className="font-heading mb-4 text-2xl font-bold md:text-3xl">
                            Wyobraź sobie:
                        </h3>
                        <p className="text-base leading-relaxed md:text-lg">
                            <strong>Utknąłeś o 22:00 na błędzie w bazie danych.</strong> Na forum wrzucasz screenshot i opis co tam się podziało. Po krótkim czasie ja, albo ktoś z grupy odpisuje: "Miałem to samo, zmień to na X". Działa.
                        </p>
                    </div>

                    <div>
                        <p className="text-base leading-relaxed md:text-lg">
                            <strong>Nie wiesz czy Twój landing ma sens.</strong> Wrzucasz linka. Dostajesz 3 konkretne uwagi od osób, które same budują produkty.
                        </p>
                    </div>

                    <div>
                        <p className="text-base leading-relaxed md:text-lg">
                            <strong>Jest poniedziałek. Bierzesz udział w sprincie, gdzie zdzwaniamy się na live cowork.</strong> Przez godzinę pracujesz nad swoim projektem obok innych. Robisz więcej niż przez cały poprzedni tydzień albo i miesiąc sam.
                        </p>
                    </div>

                    <div className="pt-8">
                        <h3 className="font-heading mb-4 text-2xl font-bold md:text-3xl">
                            To właśnie jest esencją społeczności Vibe Hero.
                        </h3>
                        <p className="text-base leading-relaxed md:text-lg text-gray-700">
                            Dziesiątki osób, które tak jak Ty zamieniają pomysły w działające aplikacje. Designerzy. Przedsiębiorcy. Twórcy. Ludzie, którzy robią, nie tylko planują. W myśl idei "Consume less. Create more."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
