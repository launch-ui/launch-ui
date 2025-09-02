import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: false, // Let Next.js handle preloading automatically
  fallback: ["system-ui", "arial"], // Fallback fonts
  adjustFontFallback: true, // Reduce layout shift
  variable: "--font-inter",
});
