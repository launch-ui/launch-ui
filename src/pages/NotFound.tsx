import { Navbar1 } from "../components/Navbar1";
import { Footer6 } from "../components/Footer6";
import { SEO } from "../components/SEO";

const navLinks = [
    { title: "Dlaczego Vibe Hero?", url: "/#benefits" },
    { title: "Efekty", url: "/#testimonials" },
    { title: "O mnie", url: "/#about" },
    { title: "FAQ", url: "/#faq" },
];

const logo = {
    url: "/",
    src: "/Vibe-hero-logo.png",
    alt: "Vibe Hero Logo",
};

export default function NotFound() {
    return (
        <>
            <SEO
                title="404 - Nie znaleziono strony | Vibe Hero"
                description="Ups! Strona, której szukasz, nie istnieje."
                url="https://vibehero.pl/404"
                noindex={true}
            />
            <Navbar1 logo={logo} navLinks={navLinks} />
            <main className="pt-16 md:pt-[72px] bg-white text-black min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
                <section className="px-4 py-16 text-center">
                    <h1 className="font-h1 mb-6 text-6xl font-bold tracking-tight text-primary md:text-8xl">
                        404
                    </h1>
                    <p className="mb-8 text-xl leading-relaxed text-gray-700">
                        Ups! Strona, której szukasz, nie istnieje.
                    </p>
                    <a
                        href="/"
                        className="bg-primary hover:bg-primary/90 inline-block rounded-[3px] border-0 px-8 py-3 text-base font-bold text-white uppercase transition-colors"
                    >
                        wróć do strony głównej.
                    </a>
                </section>
            </main>
            <Footer6 logo={logo} />
        </>
    );
}
