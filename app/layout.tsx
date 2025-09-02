import "@/app/globals.css";
import "@/styles/convertkit.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import StructuredData from "@/components/seo/structured-data";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "vibe coding sprint",
    "zbuduj produkt w 2 tygodnie",
    "mvp development",
    "coding bootcamp",
    "product development sprint",
    "live coding",
    "coworking online",
    "feedback użytkowników",
    "testowanie produktu",
    "startup development",
    "no-code coding",
    "rapid prototyping",
    "vibe hero",
    "wozu coding",
    "społeczność developerów",
    "polski coding sprint",
  ],
  authors: [
    {
      name: "wozu",
      url: "https://vibehero.pl",
    },
    {
      name: "Vibe Hero",
      url: "https://vibehero.pl",
    },
  ],
  creator: "wozu",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
    creator: "@vibehero",
    site: "@vibehero",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      style={{ colorScheme: "dark" }}
      className={`dark ${inter.variable}`}
    >
      <head>
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${inter.className} bg-background font-sans antialiased`}
      >
        <StructuredData />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
