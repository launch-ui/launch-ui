import { siteConfig } from "@/config/site";

export default function StructuredData() {
  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Vibe Hero Sprint - Zbuduj produkt w 2 tygodnie",
    description: siteConfig.description,
    provider: {
      "@type": "Organization",
      name: "Vibe Hero",
      url: siteConfig.url,
    },
    courseMode: "online",
    educationalLevel: "Intermediate",
    teaches: [
      "MVP Development",
      "Product Testing",
      "User Feedback Collection",
      "Rapid Prototyping",
      "Startup Development",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT14D", // 14 days
      instructor: {
        "@type": "Person",
        name: "wozu",
        description: "Twórca Vibe Hero i gFLUO.com",
      },
    },
    offers: {
      "@type": "Offer",
      price: "499",
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
      validThrough: "2025-08-30",
      url: siteConfig.getStartedUrl,
    },
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vibe Hero",
    url: siteConfig.url,
    logo: `${siteConfig.url}/vibe_hero_logo_for_light_bg.png`,
    description: "Społeczność dla twórców produktów cyfrowych",
    founder: {
      "@type": "Person",
      name: "wozu",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@vibehero.com",
      contactType: "customer service",
    },
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "pl-PL",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const eventLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Vibe Hero Sprint",
    description: siteConfig.description,
    startDate: "2025-02-01",
    endDate: "2025-02-14",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: siteConfig.url,
    },
    organizer: {
      "@type": "Organization",
      name: "Vibe Hero",
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      price: "499",
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      url: siteConfig.getStartedUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventLd),
        }}
      />
    </>
  );
}
