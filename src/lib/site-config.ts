/**
 * Central place for every real-world detail that is currently a placeholder.
 * Replace the TODO values below with real business data before launch.
 * Nothing else in the codebase should hardcode phone numbers, addresses,
 * or marketplace links.
 */

export const siteConfig = {
  name: "Biryani & More",
  shortName: "Biryani & More",
  tagline: "Fresh Dum Biryani · Made Fresh · Served Hot",
  /**
   * Drives the meta description, Open Graph description and schema. Keep it
   * under 160 characters: Google truncates around there, and the previous
   * 231-character version cut off before the order channels were mentioned.
   */
  description:
    "Fresh dum biryani in Salt Lake Sector V and New Town. Chicken, mutton, prawns, egg and veg, cooked to order. Swiggy, Zomato or direct on WhatsApp.",
  /**
   * Must match whichever host Vercel serves as primary. Right now the apex
   * 308-redirects to www, so www is canonical: pointing the canonical tag at a
   * URL that redirects elsewhere splits ranking signals. If you make the apex
   * primary in Vercel, change this to match. This one value drives the
   * canonical tag, sitemap, robots.txt, Open Graph URLs and the JSON-LD @id.
   */
  url: "https://www.biryaniandmore.in",

  /** FSSAI licence number. Indian food businesses must display this publicly. */
  fssaiLicence: "22826136000091",

  contact: {
    phoneDisplay: "+91 70295 58200",
    phoneHref: "+917029558200",
    // International format, digits only, for wa.me deep links.
    whatsappNumber: "917029558200",
    whatsappDefaultMessage: "Hi Biryani & More! I'd like to place an order.",
    email: "orders@biryaniandmore.in",
    address: {
      street: "MB-106, Krishnapur",
      locality: "Salt Lake Sector V, Kolkata",
      region: "West Bengal",
      postalCode: "700102",
      country: "IN",
    },
    hours: {
      display: "1:00 PM to 11:00 PM, all days",
      // 24-hour times for the openingHoursSpecification in schema.org markup.
      opens: "13:00",
      closes: "23:00",
    },
  },

  ratings: {
    // TODO: replace with the real aggregate from Google/Zomato/Swiggy.
    aggregate: 4.6,
    count: 850,
    scale: 5,
    /**
     * Set to true ONLY once the numbers above are real, sourced figures.
     * While false the ratings still show on the page, but we do not emit an
     * aggregateRating in the JSON-LD. Publishing an unverified rating as
     * structured data is a Google rich-results policy violation and can get
     * the site's rich snippets suppressed or manually actioned.
     */
    verified: false,
  },

  /**
   * Three ways to order. No in-house cart/checkout/payment flow. Direct orders
   * are taken over WhatsApp/phone and fulfilled by our own delivery team.
   */
  ordering: {
    // Verified live: Salt Lake outlet listing.
    swiggy:
      "https://www.swiggy.com/city/kolkata/biryani-and-more-salt-lake-rest1370447",
    // TODO: replace with the real Zomato listing. The current URL 404s, so the
    // Zomato buttons are hidden until this is filled in (see zomatoIsLive).
    zomato: "",
  },

  social: {
    instagram: "https://instagram.com/biryaniandmore", // TODO
    facebook: "https://facebook.com/biryaniandmore", // TODO
  },

  /** Areas served by our own in-house delivery team (direct orders). */
  inHouseDeliveryAreas: ["Sector V", "New Town"],

  /** Wider area reachable via the Swiggy and Zomato listings. */
  marketplaceDeliveryAreas: [
    "Salt Lake",
    "Sector V",
    "New Town",
    "Ultadanga",
    "Kankurgachi",
  ],

  /** Corporate / bulk / party catering: a core revenue line, handled directly. */
  catering: {
    /** Both confirmed by the owner on 2 Sep 2026. */
    minGuests: 10,
    minNoticeHours: 24,
    useCases: [
      "Office lunches",
      "Team meetings",
      "Client events",
      "Birthday parties",
      "House parties",
      "Festivals & celebrations",
    ],
  },

  seoKeywords: [
    "Biryani in Kolkata",
    "Biryani in Sector V",
    "Dum Biryani in New Town",
    "Online Biryani Delivery Kolkata",
    "Corporate biryani catering Kolkata",
    "Party order biryani Sector V",
  ],
} as const;

export function getWhatsAppUrl(message: string = siteConfig.contact.whatsappDefaultMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

export function getTelUrl() {
  return `tel:${siteConfig.contact.phoneHref}`;
}
