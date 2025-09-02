import dynamic from "next/dynamic";

import Hero from "../components/sections/hero/default";
import Navbar from "../components/sections/navbar/default";
import GlobalWebGLBackground from "../components/ui/global-webgl-background";

// Lazy load components that are below the fold
const Items = dynamic(() => import("../components/sections/items/default"), {
  loading: () => <div className="bg-muted/20 h-screen animate-pulse" />,
});

const WhyWorks = dynamic(
  () => import("../components/sections/why-works/default"),
  {
    loading: () => <div className="bg-muted/20 h-screen animate-pulse" />,
  },
);

const TargetAudience = dynamic(
  () => import("../components/sections/target-audience/default"),
  {
    loading: () => <div className="bg-muted/20 h-screen animate-pulse" />,
  },
);

const SocialProof = dynamic(
  () => import("../components/sections/social-proof/default"),
  {
    loading: () => <div className="bg-muted/20 h-screen animate-pulse" />,
  },
);

const HowItWorks = dynamic(
  () => import("../components/sections/how-it-works/default"),
  {
    loading: () => <div className="bg-muted/20 h-screen animate-pulse" />,
  },
);

const Agenda = dynamic(() => import("../components/sections/agenda/default"), {
  loading: () => <div className="bg-muted/20 h-screen animate-pulse" />,
});

const CTA = dynamic(() => import("../components/sections/cta/default"), {
  loading: () => <div className="bg-muted/20 h-64 animate-pulse" />,
});

export default function Home() {
  return (
    <>
      {/* Global WebGL Background - fixed 100vw 100vh */}
      <GlobalWebGLBackground />

      <main className="relative min-h-screen w-full">
        <Navbar />
        <Hero />
        <Items />
        <WhyWorks />
        <TargetAudience />
        <SocialProof />
        <HowItWorks />
        <Agenda />
        <CTA />
      </main>
    </>
  );
}
