import { siteConfig } from "./site-config";

/**
 * Content for /party-orders.
 *
 * Deliberately shares almost nothing with catering-data.ts beyond the kitchen
 * rules. Same kitchen, different buyer: a host feeding guests in the evening,
 * not an office manager feeding a team at 1pm. Near-identical sibling pages get
 * treated as doorway pages, so the occasions, the portion guide and every FAQ
 * here answer questions the corporate page does not.
 */

export interface PartyOccasion {
  title: string;
  detail: string;
}

export const partyOccasions: PartyOccasion[] = [
  {
    title: "Birthdays",
    detail:
      "The easiest dinner decision you will make. One handi in the middle of the table and nobody is stuck in the kitchen.",
  },
  {
    title: "House parties",
    detail:
      "Bulk handis that hold their heat, so guests can serve themselves across the evening instead of eating on a schedule.",
  },
  {
    title: "Pujo and festivals",
    detail:
      "Durga Pujo, Eid, Diwali and family gatherings, when the house is full and cooking for everyone is not realistic.",
  },
  {
    title: "Housewarmings",
    detail:
      "New flat, no working kitchen yet, thirty people arriving. We have done this one plenty of times.",
  },
  {
    title: "Anniversaries and get-togethers",
    detail:
      "Smaller, sit-down evenings where you would rather spend the time with people than at the stove.",
  },
  {
    title: "Kids' parties",
    detail:
      "Egg and veg biryani travel well for younger guests, packed apart from the spicier options.",
  },
];

export interface PortionRow {
  guests: string;
  order: string;
  note: string;
}

/**
 * Answers "how much biryani for 30 people", which is a real search and the
 * question hosts actually get stuck on. Framed in portions from our own menu
 * rather than invented gram weights.
 */
export const portionGuide: PortionRow[] = [
  {
    guests: "10 to 15",
    order: "12 to 17 portions",
    note: "One per guest plus two or three spare. Usually one or two handis.",
  },
  {
    guests: "20 to 30",
    order: "24 to 34 portions",
    note: "Add roughly 15 percent for seconds. Worth splitting across two biryanis.",
  },
  {
    guests: "40 to 50",
    order: "46 to 58 portions",
    note: "Mix chicken with one other so guests have a choice. Raita in trays.",
  },
  {
    guests: "60 and above",
    order: "Quoted for you",
    note: "We talk it through before confirming, including how it will be served.",
  },
];

export const partyPacking = [
  "Bulk handis that hold heat through the evening, with serving spoons",
  "Or individually packed boxes if guests are spread across rooms",
  "Veg, egg and non-veg packed apart and clearly labelled",
  "Raita and salad in separate trays, not mixed through the rice",
  "Disposable plates available on request when you ask for the quote",
  "Delivered to your door in Sector V and New Town by our own riders",
];

export interface PartyFaq {
  question: string;
  answer: string;
}

export const partyFaqs: PartyFaq[] = [
  {
    question: "How much biryani should I order for 30 people?",
    answer:
      "Around 34 portions for 30 guests. One portion per person covers a normal serving, and the extra few cover the people who come back for seconds. If it is a long evening rather than a sit-down dinner, lean towards the higher number.",
  },
  {
    question: "Do you take biryani orders for birthday parties?",
    answer: `Yes. Birthdays are one of the most common party orders we take. Tell us the guest count and the evening you need it, with at least ${siteConfig.catering.minNoticeHours} hours notice, and we will send a per-head quote.`,
  },
  {
    question: "Can you deliver in the evening for a party?",
    answer: `Yes. We are open until ${siteConfig.contact.hours.display.split(" to ")[1]}, so evening party deliveries are normal for us. Give us your serving time when you book and we will time the cooking so it arrives hot rather than sitting around.`,
  },
  {
    question: "Will the biryani still be hot when my guests eat?",
    answer:
      "Bulk handis hold their heat well for a couple of hours, which is why we recommend them over boxes for parties. We also cook to your serving time rather than to the order time, so it leaves our kitchen as late as it sensibly can.",
  },
  {
    question: "Can I change the guest count after I have ordered?",
    answer: `Small changes are usually fine if you tell us before we start cooking, which is roughly ${siteConfig.catering.minNoticeHours} hours before delivery. Larger changes may need a fresh quote, so message us as soon as you know.`,
  },
  {
    question: "Do you deliver party orders to New Town?",
    answer:
      "Yes. New Town and Salt Lake Sector V are both covered by our own delivery team, so a party order does not go through a delivery app and we can commit to a delivery time.",
  },
  {
    question: "Can I order more than one kind of biryani for one party?",
    answer:
      "Yes, and for anything above about twenty guests we recommend it. A common split is chicken as the main option with veg or egg alongside, so vegetarians and children are not an afterthought. Tell us your guest mix and we will suggest a split.",
  },
];
