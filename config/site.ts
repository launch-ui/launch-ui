export const siteConfig = {
  name: "Launch UI",
  url: "https://launchuicomponents.com",
  getStartedUrl:
    "https://launchuicomponents.com/docs/getting-started/introduction",
  ogImage: "https://launchuicomponents.com/og.jpg",
  description:
    "Landing page components built with React, Shadcn/ui and Tailwind that will make your website feel premium.",
  links: {
    twitter: "https://twitter.com/mikolajdobrucki",
    github: "https://github.com/launch-ui/launch-ui",
    email: "mailto:contact@mikolajdobrucki.com",
  },
  pricing: {
    pro: "https://launchui.lemonsqueezy.com/buy/b4798c68-c858-4c34-860b-069b5a0d6c4e",
    team: "https://launchui.lemonsqueezy.com/buy/130d8cfe-e123-464b-9f67-c74c5fedfb45",
  },
  stats: {
    figma: 4752,
    github: 1121,
    cli: 8492,
    total: "14.3k+",
    updated: "14 Aug 2025",
    sections: 72,
    illustrations: 15,
    animations: 14,
    appTemplates: 2,
    websiteTemplates: 4,
  },
};

export type SiteConfig = typeof siteConfig;
