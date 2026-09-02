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

/**
 * Builds FAQPage markup from any question set, so each route can ship the FAQs
 * that actually appear on it. Emitting the homepage FAQs on a different URL
 * would be marking up content that is not on the page.
 */
export function buildFaqSchema(entries: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getFaqSchema() {
  return buildFaqSchema([...faqs]);
}

/**
 * Breadcrumb for an interior route. Google uses this for the trail shown under
 * the result, so the labels should read the way a person would say them.
 */
export function buildBreadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      ...trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.name,
        item: `${siteConfig.url}${crumb.path}`,
      })),
    ],
  };
}

/**
 * Marks the catering offering as a Service provided by the restaurant, which is
 * what lets "corporate catering" queries connect to the LocalBusiness entity.
 */
export function getCateringServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate and party biryani catering",
    serviceType: "Catering",
    description:
      "Bulk dum biryani catering for office lunches, team meetings, client events and parties across Salt Lake Sector V and New Town, Kolkata.",
    provider: {
      "@type": "Restaurant",
      "@id": `${siteConfig.url}/#restaurant`,
      name: siteConfig.name,
      telephone: siteConfig.contact.phoneHref,
    },
    areaServed: siteConfig.marketplaceDeliveryAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url: `${siteConfig.url}/corporate-catering`,
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
