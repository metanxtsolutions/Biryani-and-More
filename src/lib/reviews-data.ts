/**
 * TODO: these are placeholder testimonials for layout purposes only.
 * Replace every entry with real, sourced customer reviews (Google/Zomato/Swiggy)
 * before this site goes live. Do not publish placeholder quotes as genuine.
 */

export interface Review {
  name: string;
  area: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
}

export const reviews: Review[] = [
  {
    name: "Ananya",
    area: "Sector V",
    rating: 5,
    quote:
      "Ordered for the whole office and the Signature Chicken Dum Biryani was fresh, generous, and reached us hot within 40 minutes.",
  },
  {
    name: "Rohit",
    area: "Salt Lake",
    rating: 5,
    quote:
      "The Mutton Dum Biryani has real dum flavour, not the usual watered-down version you get on delivery apps.",
  },
  {
    name: "Priya",
    area: "New Town",
    rating: 5,
    quote:
      "Veg Dum Biryani is now our regular Friday order. The packaging keeps it hot and nothing ever spills.",
  },
  {
    name: "Debojit",
    area: "Ultadanga",
    rating: 4,
    quote:
      "Consistent quality every time we order, and the portion sizes are generous for the price.",
  },
];
