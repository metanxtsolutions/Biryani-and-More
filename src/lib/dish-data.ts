import type { DietaryTag } from "./menu-data";

/**
 * Long-form content for /menu/[slug].
 *
 * Five sibling pages built from one template would be the same doorway-page
 * problem as duplicate locality pages, so every field here is written per dish.
 * The intro, highlights and FAQs answer different questions for each one: what
 * mutton needs that chicken does not, why prawns are timed differently, why the
 * veg version is not an afterthought. Prices and dietary tags stay in
 * menu-data.ts as the single source of truth.
 */

export interface Dish {
  slug: string;
  name: string;
  /** Matches the id in menu-data.ts so price and dietary tag stay in one place. */
  menuItemId: string;
  image: string;
  imageAlt: string;
  /** Short line under the H1. */
  tagline: string;
  /**
   * Tail of the meta description, appended after "Name, price.".
   * Written to land the whole string near 150 characters rather than
   * truncating a longer sentence and cutting it mid-word.
   */
  metaTail: string;
  /** Two or three paragraphs of genuinely dish-specific copy. */
  intro: string[];
  highlights: { label: string; detail: string }[];
  goodFor: string;
  faqs: { question: string; answer: string }[];
  /** Slugs of two dishes to cross-link at the foot of the page. */
  related: string[];
}

export const dishes: Dish[] = [
  {
    slug: "signature-chicken-dum-biryani",
    name: "Signature Chicken Dum Biryani",
    menuItemId: "signature-chicken-dum-biryani",
    image: "/images/signature-chicken-dum-biryani.jpg",
    imageAlt:
      "Signature chicken dum biryani with long grain basmati, tender chicken and a whole potato, served with raita and salad",
    tagline: "The one most people order, and the one we would hand you first",
    metaTail:
      "Chicken on the bone, saffron rice and the Kolkata aloo, dum-cooked to order. Delivered in Sector V and New Town.",
    intro: [
      "This is the house biryani. Long grain basmati, chicken on the bone, saffron, and the whole spices ground in our own kitchen rather than bought as a mix. It is sealed and finished on low heat, which is the part that cannot be hurried.",
      "It is a Kolkata biryani, so there is a potato in there. That is not a filler or a way to stretch the rice. The aloo sits in the handi and takes on the stock and the spice, and for a lot of people in this city it is the best thing in the bowl.",
      "If you have never ordered from us and you are not sure where to start, start here.",
    ],
    highlights: [
      {
        label: "Chicken on the bone",
        detail: "It holds moisture through the dum and carries more flavour into the rice.",
      },
      {
        label: "The aloo",
        detail: "A whole potato, cooked in the handi rather than added at the end.",
      },
      {
        label: "Balanced heat",
        detail: "Aromatic rather than fiery, so it suits a table with mixed tastes.",
      },
    ],
    goodFor: "A first order, a family dinner, or feeding a group with different spice tolerances.",
    faqs: [
      {
        question: "Is the chicken biryani spicy?",
        answer:
          "It is aromatic rather than hot. The spice is layered for depth, not heat, so most people find it comfortable. If you want it hotter, ask for extra salan when you order.",
      },
      {
        question: "Does the chicken biryani come with a potato?",
        answer:
          "Yes. Kolkata biryani is served with a whole aloo cooked in the handi, and ours is no exception. It is included, not an add-on.",
      },
    ],
    related: ["mutton-dum-biryani", "egg-biryani"],
  },
  {
    slug: "mutton-dum-biryani",
    name: "Mutton Dum Biryani",
    menuItemId: "mutton-dum-biryani",
    image: "/images/mutton-dum-biryani.jpg",
    imageAlt:
      "Mutton dum biryani with a slow-cooked shank, boiled egg and saffron rice, served with raita and salad",
    tagline: "The one that takes the longest, and the one worth waiting for",
    metaTail:
      "Slow-cooked until it falls off the bone, with rice that has taken on the stock. Delivered in Sector V and New Town.",
    intro: [
      "Mutton is the dish that tests a kitchen. It needs far longer on the heat than chicken before it gives way, and if you rush it you get something chewy sitting on top of perfectly good rice. So we do not rush it.",
      "The meat goes in with the marinade and comes out falling off the bone, and everything it released along the way has gone into the rice underneath. That is why the grains around the mutton look darker than the rest of the handi.",
      "It is our most expensive biryani and our chef's pick. If you are ordering for an occasion rather than a Tuesday, this is the one.",
    ],
    highlights: [
      {
        label: "Slow-cooked shank",
        detail: "Long enough that it comes away from the bone without being pulled.",
      },
      {
        label: "Deeper spicing",
        detail: "Mutton stands up to more, so this carries a heavier hand than the chicken.",
      },
      {
        label: "Richer rice",
        detail: "The grains nearest the meat take on the stock, which is the point of dum.",
      },
    ],
    goodFor: "Occasions, guests you want to impress, and anyone who orders mutton on principle.",
    faqs: [
      {
        question: "Why is mutton biryani more expensive than chicken?",
        answer:
          "Mutton costs more to buy and takes considerably longer to cook, which means more kitchen time and more fuel per handi. The price reflects both, not a premium for the name.",
      },
      {
        question: "Is the mutton tender?",
        answer:
          "It should come away from the bone with a spoon. That is the whole reason it goes on longer than the chicken. If a portion ever arrives tough, tell us and we will make it right.",
      },
    ],
    related: ["signature-chicken-dum-biryani", "prawns-biryani"],
  },
  {
    slug: "prawns-biryani",
    name: "Prawns Biryani",
    menuItemId: "prawns-biryani",
    image: "/images/prawns-biryani.jpg",
    imageAlt: "Prawns biryani with whole prawns over saffron basmati, served with raita",
    tagline: "Lighter than the rest of the menu, and timed to the minute",
    metaTail:
      "Prawns added late so they stay firm, with a lighter masala than our meat biryanis. Sector V and New Town.",
    intro: [
      "Prawns are the opposite problem to mutton. Where mutton needs time, prawns need almost none, and a minute too long turns them rubbery. So this biryani is built around timing rather than patience.",
      "The prawns go in late, so they are still firm when the handi opens. The spicing is lighter too, because heavy masala flattens seafood rather than lifting it. What you get is a biryani that tastes cleaner than the meat versions without being bland.",
      "In a city that eats a lot of fish, it is surprising how few kitchens bother doing a prawn biryani properly. We think it is worth the trouble.",
    ],
    highlights: [
      {
        label: "Added late",
        detail: "So they finish firm rather than overcooked in the bottom of the handi.",
      },
      {
        label: "Lighter masala",
        detail: "Tuned so the prawns come through instead of being buried.",
      },
      {
        label: "A change of pace",
        detail: "Noticeably less heavy than the chicken or mutton, without losing the dum character.",
      },
    ],
    goodFor: "Anyone who finds mutton too heavy, and seafood eaters tired of the same two options.",
    faqs: [
      {
        question: "How many prawns are in the biryani?",
        answer:
          "Enough that you get prawns in most spoonfuls rather than hunting for them. If you want more, extra prawns are on the menu as an add-on in portions of five.",
      },
      {
        question: "Is the prawns biryani very spicy?",
        answer:
          "It is the lightest of our non-veg biryanis on spice. The masala is deliberately restrained so the prawns are not overwhelmed.",
      },
    ],
    related: ["mutton-dum-biryani", "veg-dum-biryani"],
  },
  {
    slug: "egg-biryani",
    name: "Egg Biryani",
    menuItemId: "egg-biryani",
    image: "/images/egg-biryani.jpg",
    imageAlt:
      "Egg biryani with a browned boiled egg and a whole potato over fragrant basmati, served with raita",
    tagline: "Aloo, egg, rice. The everyday Kolkata plate",
    metaTail:
      "Aloo, a browned boiled egg and fragrant basmati. Our lowest-priced biryani, dum-cooked to order in Sector V.",
    intro: [
      "Egg biryani is the one people in this city grew up on. It is the cheapest thing on our menu and it is not a lesser version of anything, it is its own dish with its own following.",
      "The eggs are boiled, then browned in the masala before they go into the handi, which is what stops them tasting like a boiled egg dropped onto rice. Alongside the aloo, that is the whole plate: potato, egg, and rice that has taken on everything around it.",
      "It is also the honest answer for anyone who does not eat meat but is not vegetarian, a group most biryani menus quietly ignore.",
    ],
    highlights: [
      {
        label: "Browned, not just boiled",
        detail: "The eggs are fried in the masala first so they carry flavour, not just protein.",
      },
      {
        label: "The cheapest on the menu",
        detail: "Our lowest-priced biryani, and cooked to the same dum as the rest.",
      },
      {
        label: "Marked as egg, not non-veg",
        detail: "So people who eat egg but not meat can order without asking first.",
      },
    ],
    goodFor: "Weeknights, students, and anyone who eats egg but not meat.",
    faqs: [
      {
        question: "Is egg biryani vegetarian?",
        answer:
          "No. It contains egg, so we label it as egg rather than veg or non-veg. If you need a fully vegetarian option, the Veg Dum Biryani is cooked separately.",
      },
      {
        question: "How many eggs come in an egg biryani?",
        answer:
          "One whole boiled egg as standard, browned in the masala, alongside the potato. Extra eggs can be added from the add-ons section.",
      },
    ],
    related: ["veg-dum-biryani", "signature-chicken-dum-biryani"],
  },
  {
    slug: "veg-dum-biryani",
    name: "Veg Dum Biryani",
    menuItemId: "veg-dum-biryani",
    image: "/images/veg-dum-biryani.jpg",
    imageAlt:
      "Veg dum biryani with carrot, beans, peas and cauliflower through saffron basmati, served with raita",
    tagline: "Cooked as a biryani, not as rice with vegetables in it",
    metaTail:
      "Its own handi, same dum as the meat biryanis, not rice with vegetables stirred through. Sector V and New Town.",
    intro: [
      "Most veg biryani is an apology. Somebody boils vegetables, stirs them through pulao, and calls it done because the vegetarians at the table will eat it anyway.",
      "Ours goes in the handi and gets the same dum as everything else. The vegetables are cut to sizes that survive the cooking rather than collapsing into the rice, and the masala is built for them instead of borrowed from the chicken.",
      "If you are the vegetarian who always ends up ordering last and expecting little, this is the one we would like you to try.",
    ],
    highlights: [
      {
        label: "Same dum, same handi",
        detail: "Sealed and slow-cooked exactly like the meat biryanis, not stir-fried.",
      },
      {
        label: "Vegetables that hold up",
        detail: "Cut and timed so carrot, beans, peas and cauliflower keep their texture.",
      },
      {
        label: "Fully vegetarian",
        detail: "No egg, and prepared apart from the non-veg handis.",
      },
    ],
    goodFor: "Vegetarians, mixed tables, and anyone who has been disappointed by veg biryani before.",
    faqs: [
      {
        question: "Is the veg biryani cooked separately from the meat?",
        answer:
          "Yes, it is prepared in its own handi. It contains no egg and no meat, and is labelled veg on the menu.",
      },
      {
        question: "Which vegetables are in the veg dum biryani?",
        answer:
          "Carrot, beans, peas and cauliflower through saffron basmati, with the same whole spices as the rest of the menu. Exact mix varies a little with what is good that day.",
      },
    ],
    related: ["egg-biryani", "prawns-biryani"],
  },
];

export function getDish(slug: string): Dish | undefined {
  return dishes.find((d) => d.slug === slug);
}

export const dietaryNote: Record<DietaryTag, string> = {
  veg: "Vegetarian",
  "non-veg": "Non-vegetarian",
  egg: "Contains egg",
};
