import React from "react";

type Props = {
    className?: string;
};

export type TestimonialsSectionProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<Props>;

const testimonials = [
    {
        quote:
            '"Dzięki VibeHero wdrożyłem MVP mojego produktu w zaledwie 3 godziny. Design wygląda dokładnie jak w Figmie, pixel-perfect. Kurs pokazał mi nie tylko narzędzia, ale cały proces od pomysłu do działającego produktu. To zmieniło moje podejście do wdrażania projektów."',
        name: "Jakub Wojnar-Płeszka",
        position: "Freelance Product Designer",
        companyName: "Neat Design Studio",
        companyUrl: "https://www.neatdesign.studio/",
        avatar: "/jakub.png",
    },
    {
        quote:
            '"Sprint Vibe Hero to idealny sposób, żeby przejść od pomysłu do działającego MVP. Konkretna wiedza, zero lania wody - zdecydowanie polecam."',
        name: "Krzysztof Wieczorek",
        position: "Framer Expert, Design System Designer",
        companyName: "LinkedIn",
        companyUrl: "https://www.linkedin.com/in/k-wieczorek/",
        avatar: "/krzysztof.png",
    },
    {
        quote:
            '"Zaczynałam Vibe Hero z jedynie pomysłem w mojej głowie, ale z dość skromnym doświadczeniem w vibe-kodowaniu. Ukończyłam kurs z konkretnym planem na produkt i jego promocję oraz działającym prototypem, który cały czas rozwijam. Najbardziej podobało mi się to, że ten kurs naprawdę stawia na działanie - w przeciwieństwie do wielu innych, które kończą się na „tutorial hell". Coworkingi świetnie motywują do pracy i pomagają wygospodarować na nią czas, a lekcje są krótkie i zadaniowe, więc każdego dnia robisz realne postępy, zamiast spędzać godziny na oglądaniu tutorialu."',
        name: "Izabela Król",
        position: "Product Designer, No-code Developer",
        companyName: "Zobacz projekt na linkedIn",
        companyUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7371227354054070272/",
        avatar: "/iza.png",
    },
];

export const TestimonialsSection = (props: TestimonialsSectionProps) => {
    // Separate testimonials
    const featuredTestimonial = testimonials[2]; // Izabela
    const sideTestimonials = [testimonials[0], testimonials[1]]; // Jakub, Krzysztof

    const TestimonialCard = ({ testimonial, className }: { testimonial: typeof testimonials[0], className?: string }) => (
        <div
            className={`flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50/50 p-6 md:p-8 hover:bg-gray-50 transition-colors duration-300 ${className}`}
        >
            <div className="mb-6 md:mb-8 flex-1 flex flex-col justify-center">
                <blockquote className="text-base leading-relaxed md:text-lg italic text-gray-700 text-center">
                    {testimonial.quote}
                </blockquote>
            </div>

            <div className="flex items-center justify-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <div className="flex-none">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="size-12 rounded-full object-cover bg-gray-200"
                    />
                </div>
                <div>
                    <div className="font-semibold text-lg leading-tight">
                        {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 leading-tight mt-1">
                        {testimonial.position}
                        {testimonial.companyName && (
                            <span className="block mt-0.5">
                                <a
                                    href={testimonial.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline hover:text-primary transition-colors"
                                >
                                    {testimonial.companyName}
                                </a>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section
            {...props}
            className={`w-full bg-white px-[5%] py-16 md:py-24 lg:py-28 text-black ${props.className || ''}`}
        >
            <div className="container mx-auto">
                <div className="mx-auto mb-10 text-center md:mb-12 lg:mb-16 max-w-[800px]">
                    <h2 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                        Co mówią osoby, które już budują z nami
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Left Column - Featured Testimonial (Izabela) */}
                    <div className="lg:h-full">
                        <TestimonialCard testimonial={featuredTestimonial} className="h-full" />
                    </div>

                    {/* Right Column - Stacked Testimonials (Jakub & Krzysztof) */}
                    <div className="flex flex-col gap-8">
                        {sideTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
