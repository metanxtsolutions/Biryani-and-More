import { siteConfig } from "./site-config";
import { faqs } from "./faq-data";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneHref,
    servesCuisine: ["Indian", "Biryani", "Hyderabadi", "Kolkata"],
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: siteConfig.contact.hours.opens,
      closes: siteConfig.contact.hours.closes,
    },
    /**
     * Only emitted once siteConfig.ratings.verified is true. See the note in
     * site-config.ts: shipping an unverified aggregateRating is a Google
     * rich-results policy violation.
     */
    ...(siteConfig.ratings.verified
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: siteConfig.ratings.aggregate,
            reviewCount: siteConfig.ratings.count,
            bestRating: siteConfig.ratings.scale,
          },
        }
      : {}),
    areaServed: siteConfig.marketplaceDeliveryAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.png`,
    telephone: siteConfig.contact.phoneHref,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: `${siteConfig.url}/#menu`,
      },
    ],
  };
}
