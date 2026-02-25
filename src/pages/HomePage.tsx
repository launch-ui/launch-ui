import { Navbar1 } from "../components/Navbar1";
import { Header1 } from "../components/Header1";
import { Pricing10 } from "../components/Pricing10";

import { SolutionSection } from "../components/SolutionSection";
import { FeaturesGrid } from "../components/FeaturesGrid";
import { CommunityPreviewSection } from "../components/CommunityPreviewSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { Layout25 } from "../components/Layout25";
import { PricingSection } from "../components/PricingSection";
import { Faq1 } from "../components/FAQ1";
import { FinalCTA } from "../components/FinalCTA";
import { Footer6 } from "../components/Footer6";
import { SEO } from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Zamień pomysł w działającą apkę z pierwszymi userami"
        description="Dołącz do społeczności i zacznij budować z AI dzięki codziennym coworkingom, sprintom i wsparciu 1:1. 20+ osób już na pokładzie."
        url="https://vibehero.pl"
      />
      <Navbar1 showPromoBanner />
      <main className="bg-white pt-[120px] text-black sm:pt-[108px] md:pt-[116px]">
        <Header1 />
        <Pricing10 />
        <SolutionSection />
        <FeaturesGrid id="benefits" />
        <CommunityPreviewSection />
        <TestimonialsSection id="testimonials" />
        <Layout25 id="about" />
        <PricingSection />

        <Faq1 id="faq" />
        <FinalCTA />
        <Footer6 />
      </main>
    </>
  );
}
