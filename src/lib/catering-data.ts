import { siteConfig } from "./site-config";

/**
 * Content for /corporate-catering.
 *
 * Deliberately does NOT duplicate the homepage #corporate teaser: that section
 * is a short pitch that links here, this page carries the depth that earns the
 * ranking. Keep them different or Google treats one as thin duplicate content.
 */

export interface CateringTier {
  band: string;
  headcount: string;
  suits: string;
  format: string;
}

/**
 * Headcount bands, not prices. Bulk pricing is quoted per order, so publishing
 * a rate card we cannot honour would do more harm than the SEO is worth.
 * The lowest band starts at siteConfig.catering.minGuests, which is a real
 * minimum: below it we do not take a catering order.
 */
export const cateringTiers: CateringTier[] = [
  {
    band: "Team lunch",
    headcount: `${siteConfig.catering.minGuests} to 25`,
    suits: "A single team, a sprint kickoff, a Friday treat",
    format: "Individually packed meal boxes, labelled veg and non-veg",
  },
  {
    band: "Floor lunch",
    headcount: "25 to 50",
    suits: "A whole floor, a client visit, a monthly all-hands",
    format: "Packed boxes, or bulk handis with serving spoons",
  },
  {
    band: "Event catering",
    headcount: "50 to 100",
    suits: "Product launches, town halls, festival lunches",
    format: "Bulk handis, raita and salad in trays, disposable plates",
  },
  {
    band: "Large event",
    headcount: "100 and above",
    suits: "Company days, weddings, community events",
    format: "Quoted individually, with a kitchen call before we confirm",
  },
];

export interface CateringStep {
  title: string;
  detail: string;
}

export const cateringSteps: CateringStep[] = [
  {
    title: "Tell us the headcount and date",
    detail:
      "Message us on WhatsApp with how many people, which day, and roughly what time you need it delivered.",
  },
  {
    title: "We send a quote and a menu split",
    detail:
      "You get a per-head price and a suggested veg, egg and non-veg split so nobody in the room is left out.",
  },
  {
    title: "Confirm and we block the kitchen",
    detail: `We hold capacity for your date. Please allow at least ${siteConfig.catering.minNoticeHours} hours so everything is cooked fresh on the day rather than made ahead.`,
  },
  {
    title: "We cook fresh and deliver on time",
    detail:
      "Everything is dum-cooked the morning of your event and delivered by our own riders across Sector V and New Town.",
  },
];

export const cateringIncludes = [
  "Dum biryani cooked fresh on the day, never pre-made",
  "Raita and salad included with every portion",
  "Veg, egg and non-veg clearly labelled and packed apart",
  "Heat-retaining, leak-proof packaging for transport",
  "Delivered by our own team in Sector V and New Town",
  "Serving spoons and disposable plates on bulk handi orders",
];

export interface CateringFaq {
  question: string;
  answer: string;
}

/**
 * Written against real search queries ("biryani for 50 people", "minimum order
 * corporate catering"). These also feed the FAQPage schema on this route.
 */
export const cateringFaqs: CateringFaq[] = [
  {
    question: "Can you cater biryani for 50 people?",
    answer:
      "Yes. Fifty guests sits in our event catering band, which we serve either as individually packed meal boxes or as bulk handis with serving spoons, raita and salad in trays. Message us on WhatsApp with your date and we will send a per-head quote.",
  },
  {
    question: "What is the minimum order for corporate catering?",
    answer: `Catering orders start at ${siteConfig.catering.minGuests} people. Below that you are welcome to order from the regular menu on WhatsApp, Swiggy or Zomato, and it will still be cooked fresh, it just does not go through the catering process with a per-head quote.`,
  },
  {
    question: "How much notice do you need for a bulk order?",
    answer: `Please give us at least ${siteConfig.catering.minNoticeHours} hours. Every biryani is dum-cooked to order rather than made in advance, so we block kitchen capacity for your date instead of reheating something prepared earlier. For orders above 100 guests, more notice helps.`,
  },
  {
    question: "Do you deliver corporate orders to offices in Sector V?",
    answer:
      "Yes. Sector V and New Town are covered by our own delivery team, so office lunches do not go through a delivery app and we can hit a specific delivery time. Our kitchen is at MB-106, Krishnapur, Salt Lake Sector V, so most Sector V offices are a short run away.",
  },
  {
    question: "Can you handle vegetarian and non-vegetarian in one order?",
    answer:
      "Yes, and we recommend it. We pack veg, egg and non-veg separately and label each box, so nobody has to guess. Tell us your split when you enquire, or ask us to suggest one based on your headcount.",
  },
  {
    question: "What is on the menu for corporate orders?",
    answer:
      "The full menu is available in bulk: Signature Chicken Dum Biryani, Mutton Dum Biryani, Prawns Biryani, Egg Biryani and Veg Dum Biryani, all served with raita and salad. Add-ons like extra raita, salan and soft drinks can be included in the quote.",
  },
  {
    question: "Do you cater party and family events too?",
    answer:
      "Yes. Birthdays, house parties, festivals and family gatherings are handled the same way as office orders. Tell us the headcount and the date and we will quote it.",
  },
];
