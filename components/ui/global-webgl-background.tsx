"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load the WebGL component
const MesmerizingPlanet = dynamic(() => import("./mesmerizing-planet"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-screen bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-pink-800/20" />
  ),
});

export default function GlobalWebGLBackground() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay WebGL loading until after initial render
    const timer = setTimeout(() => {
      setShouldRender(true);
      // Add another small delay for smooth transition
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 100); // Short delay to let page render first

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Static fallback background - always visible */}
      <div className="h-screen w-screen bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-pink-800/20" />

      {/* WebGL layer with smooth transition */}
      {shouldRender && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <MesmerizingPlanet />
        </div>
      )}
    </div>
  );
}
