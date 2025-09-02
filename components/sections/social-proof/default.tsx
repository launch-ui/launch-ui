import Image from "next/image";

import { Section } from "../../ui/section";

interface SocialProofProps {
  className?: string;
}

export default function SocialProof({ className }: SocialProofProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto">
        {/* Header - no box, just floating */}
        <div
          className="animate-appear mb-16 text-center opacity-0"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight lg:text-5xl">
            Krótko o mnie
          </h2>
        </div>

        {/* Asymmetric layout - no box */}
        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left - Story with intro */}
          <div
            className="animate-appear opacity-0"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            {/* Intro text outside any container */}
            <p className="mb-8 text-2xl font-medium">
              Hej! Tu wozu - tworzę Vibe Hero.
            </p>

            {/* Story content */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>Kiedy zaczynałem, też czułem chaos 😅</p>
              <p>
                Miałem pomysły, ale nie wiedziałem które narzędzie wybrać. Jak
                ogarnąć bazę danych? Co właściwie jest MVP?
              </p>
              <p>Pierwsze próby kończyły się frustracją...</p>
              <p className="text-xl font-semibold">
                Ale z czasem – ucząc się na błędach – dowiozłem projekt, który
                nie tylko działał, ale też zarobił pierwsze pieniądze 💰
              </p>
              <p>
                Teraz chcę skrócić Twoją drogę o lata prób i pomóc Ci wskoczyć
                do vibe codingu tak, żebyś nie utykał w miejscu, tylko ruszył z
                działającym prototypem.
              </p>
            </div>
          </div>

          {/* Right - Floating photo */}
          <div
            className="animate-appear flex justify-center opacity-0 lg:justify-start"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Photo with floating effect */}
              <div className="relative rotate-3 transform overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:rotate-0">
                <Image
                  src="/wozu-photo.JPG"
                  alt="Wozu - Founder of Vibe Hero"
                  width={280}
                  height={350}
                  className="h-96 w-72 scale-x-[-1] object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 280px, 350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
