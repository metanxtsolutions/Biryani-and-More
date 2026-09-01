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
  description:
    "Premium cloud kitchen serving slow dum-cooked chicken, mutton, prawns, egg and veg biryani. Order on Swiggy, Zomato, or direct from our kitchen, with our own delivery across Sector V and New Town, plus corporate and party catering.",
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
      display: "11:00 AM to 11:00 PM, all days",
      // 24-hour times for the openingHoursSpecification in schema.org markup.
      opens: "11:00",
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
   * TODO: replace marketplace URLs with the real live listings.
   */
  ordering: {
    swiggy: "https://www.swiggy.com/restaurants/biryani-and-more-kolkata", // TODO
    zomato: "https://www.zomato.com/kolkata/biryani-and-more", // TODO
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
    minNoticeHours: 24, // TODO: confirm real lead time for bulk orders
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
