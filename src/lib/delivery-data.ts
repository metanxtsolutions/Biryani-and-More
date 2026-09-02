import { siteConfig } from "./site-config";

/**
 * Content for /biryani-delivery.
 *
 * One combined page rather than separate Sector V and New Town pages. Two
 * near-identical locality pages with the area name swapped is the textbook
 * doorway-page pattern, and we do not have enough genuinely different material
 * about each area to justify splitting them. If per-area detail arrives later
 * (delivery times, named office parks, area-specific offers), splitting becomes
 * defensible.
 */

export interface DeliveryRoute {
  method: string;
  areas: readonly string[];
  detail: string;
  best: string;
}

export const deliveryRoutes: DeliveryRoute[] = [
  {
    method: "Our own riders",
    areas: siteConfig.inHouseDeliveryAreas,
    detail:
      "Order on WhatsApp or by phone and the food comes straight from our kitchen with our own delivery team. No app in the middle, so we can take special instructions and commit to a delivery time.",
    best: "Best value, and the only way to get a specific delivery slot",
  },
  {
    method: "Swiggy and Zomato",
    areas: siteConfig.marketplaceDeliveryAreas,
    detail:
      "A wider radius than we cover ourselves, with live tracking, platform offers and your saved payment methods. Search for Biryani and More on either app.",
    best: "Best if you are outside our own delivery zone or want live tracking",
  },
];

export interface DeliveryFaq {
  question: string;
  answer: string;
}

export const deliveryFaqs: DeliveryFaq[] = [
  {
    question: "Which areas do you deliver biryani to?",
    answer: `Our own riders deliver to ${siteConfig.inHouseDeliveryAreas.join(" and ")}. Through Swiggy and Zomato we reach a wider area including ${siteConfig.marketplaceDeliveryAreas.join(", ")}. Our kitchen is at ${siteConfig.contact.address.street}, ${siteConfig.contact.address.locality}, so Sector V addresses are usually a short run away.`,
  },
  {
    question: "Do you deliver to New Town?",
    answer:
      "Yes. New Town is covered by our own delivery team, so you can order directly on WhatsApp rather than going through a delivery app. It is also served by our Swiggy and Zomato listings if you would rather use those.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Every biryani is dum-cooked after you order rather than kept warm and scooped out, so it takes a little longer than reheated food. Tell us your address when you order and we will confirm the timing before you pay, rather than giving you an estimate that slips.",
  },
  {
    question: "What are your delivery hours?",
    answer: `We deliver ${siteConfig.contact.hours.display.toLowerCase()}. Evening and late orders are normal for us, so a dinner order at 10 PM is not a problem.`,
  },
  {
    question: "Is it cheaper to order direct instead of on Swiggy or Zomato?",
    answer:
      "Ordering direct avoids the delivery platform's mark-up, which is why we point people there first. Message us on WhatsApp and we will confirm the total, including any delivery charge for your address, before you pay anything.",
  },
  {
    question: "Can I order biryani for delivery to my office?",
    answer:
      "Yes. Single orders go through WhatsApp, Swiggy or Zomato like any other. For a whole team, our corporate catering starts at 10 people with a per-head quote and a fixed delivery time.",
  },
  {
    question: "Do you deliver just outside these areas?",
    answer:
      "Sometimes. We extend our own delivery zone depending on demand and how busy the kitchen is. Message us with your address and we will tell you honestly whether we can reach you rather than taking the order and letting it arrive cold.",
  },
];
