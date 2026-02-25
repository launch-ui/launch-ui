import React from "react";

type Props = {
    className?: string;
};

export type CommunityPreviewSectionProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<Props>;

export const CommunityPreviewSection = (props: CommunityPreviewSectionProps) => {
    return (
        <section
            {...props}
            className={`w-full bg-white px-[5%] py-16 md:py-24 lg:py-28 text-black ${props.className || ''}`}
        >
            <div className="container mx-auto">
                <div className="mx-auto mb-10 text-center md:mb-12 lg:mb-16 max-w-[800px]">
                    <h2 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                        Zobacz jak to wygląda od środka
                    </h2>
                </div>

                <div className="mx-auto w-full max-w-6xl">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-200 shadow-xl">
                        <img
                            src="/vibehero-screenshot.png"
                            alt="Vibe Hero Community Platform Screenshot"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
