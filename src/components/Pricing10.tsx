type Props = {
  footerText?: string;
};

export type Pricing10Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Pricing10 = (props: Pricing10Props) => {
  return (
    <section
      id="relume"
      className="w-full bg-[#1d62d4] px-0 md:px-[5%] pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28"
    >
      <div className="w-full mx-auto px-4 max-w-[800px] md:px-0">
        {/* Sekcja tytułu - centered */}
        <div className="mx-auto mb-10 max-w-[800px] text-center md:mb-12 lg:mb-16">
          <h2 className="font-heading text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Brzmi znajomo?
          </h2>
        </div>

        {/* Bloki problemów - left aligned w wąskim containerze */}
        <div className="mx-auto max-w-[800px] space-y-8 text-left text-white">
          <div>
            <h3 className="font-heading mb-3 text-2xl font-bold md:text-3xl">
              Masz pomysł. Dobry pomysł.
            </h3>
            <p className="text-base leading-relaxed md:text-lg">
              Ale między "mam pomysł" a "mam działającą apkę" jest przepaść.
              Pojawiają się setki narzędzi. Tysiące tutoriali. Milion promptów
              do przetestowania. Po tygodniach masz 42 otwarte zakładki. Do
              działającego produktu jeszcze długa droga.
            </p>
          </div>

          <div>
            <h3 className="font-heading mb-3 text-2xl font-bold md:text-3xl">
              Budujesz sam. Nikt nie powie Ci, czy idziesz w dobrym kierunku.
            </h3>
            <p className="text-base leading-relaxed md:text-lg">
              Utknąłeś na jakimś błędzie? Szukasz na Stack Overflow. Pytasz
              ChatGPT. Próbujesz sam. Tracisz 3 godziny na coś, co ktoś inny
              rozwiązał w 5 minut.
            </p>
          </div>

          <div>
            <h3 className="font-heading mb-3 text-2xl font-bold md:text-3xl">
              Perfekcjonizm Cię blokuje.
            </h3>
            <p className="text-base leading-relaxed md:text-lg">
              "Jeszcze tylko to jedno. Jeszcze ten feature. Jeszcze dopracuję
              design." Projekt nigdy nie wychodzi na światło dzienne i już na
              dobre rozgościł się w szufladzie.
            </p>
          </div>

          <div>
            <h3 className="font-heading mb-3 text-2xl font-bold md:text-3xl">
              Tutorial hell.
            </h3>
            <p className="text-base leading-relaxed md:text-lg">
              Oglądasz. Uczysz się. Wiesz coraz więcej. Ale nie budujesz nic
              swojego. Kolejny kurs. Kolejny tutorial. Kolejny tydzień bez
              dowiezionego efektu..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
