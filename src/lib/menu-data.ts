/**
 * Menu content and pricing transcribed directly from the real Biryani & More
 * printed menu/poster. Photos are stock images for illustration only (not the
 * actual dishes). This is flagged in the UI, matching the source menu's own disclaimer.
 */

export type DietaryTag = "veg" | "non-veg" | "egg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  dietary: DietaryTag;
  badges?: Array<"Best Seller" | "Chef's Recommendation" | "New">;
  spiceLevel?: 1 | 2 | 3;
  serves?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const signatureBiryanis: MenuItem[] = [
  {
    id: "signature-chicken-dum-biryani",
    name: "Signature Chicken Dum Biryani",
    description:
      "Long grain basmati rice cooked with tender chicken, aromatic spices & saffron, slow-cooked dum style. Served with raita and salad.",
    price: 299,
    dietary: "non-veg",
    badges: ["Best Seller"],
    serves: "1",
    image: "/images/signature-chicken-dum-biryani.jpg",
  },
  {
    id: "mutton-dum-biryani",
    name: "Mutton Dum Biryani",
    description:
      "Succulent mutton cooked with premium basmati rice and traditional spices in slow-cooked dum style. Served with raita and salad.",
    price: 399,
    dietary: "non-veg",
    badges: ["Chef's Recommendation"],
    serves: "1",
    image: "/images/mutton-dum-biryani.jpg",
  },
  {
    id: "prawns-biryani",
    name: "Prawns Biryani",
    description:
      "Juicy prawns cooked with fragrant rice, fresh herbs and aromatic biryani spices. Served with raita and salad.",
    price: 349,
    dietary: "non-veg",
    serves: "1",
    image: "/images/prawns-biryani.jpg",
  },
];

export const menu: MenuCategory[] = [
  {
    id: "signature",
    title: "Signature Biryani",
    subtitle: "Fresh dum biryani, made fresh, served hot",
    items: [
      ...signatureBiryanis,
      {
        id: "egg-biryani",
        name: "Egg Biryani",
        description:
          "Aromatic biryani with perfectly cooked eggs, fragrant basmati rice and traditional spices. Served with raita and salad.",
        price: 199,
        dietary: "egg",
        serves: "1",
      },
      {
        id: "veg-dum-biryani",
        name: "Veg Dum Biryani",
        description:
          "Fragrant basmati rice cooked dum style with fresh vegetables, herbs and biryani spices. Served with raita and salad.",
        price: 189,
        dietary: "veg",
        serves: "1",
        image: "/images/veg-dum-biryani.jpg",
      },
    ],
  },
  {
    id: "combos",
    title: "Biryani Combos",
    subtitle: "Biryani + raita + salad + beverage",
    items: [
      {
        id: "chicken-biryani-combo",
        name: "Chicken Biryani Combo",
        description: "Chicken Biryani + Raita + Salad + Beverage",
        price: 349,
        dietary: "non-veg",
      },
      {
        id: "mutton-biryani-combo",
        name: "Mutton Biryani Combo",
        description: "Mutton Biryani + Raita + Salad + Beverage",
        price: 449,
        dietary: "non-veg",
      },
      {
        id: "prawns-biryani-combo",
        name: "Prawns Biryani Combo",
        description: "Prawns Biryani + Raita + Salad + Beverage",
        price: 399,
        dietary: "non-veg",
      },
      {
        id: "egg-biryani-combo",
        name: "Egg Biryani Combo",
        description: "Egg Biryani + Raita + Salad + Beverage",
        price: 249,
        dietary: "egg",
      },
      {
        id: "veg-biryani-combo",
        name: "Veg Biryani Combo",
        description: "Veg Biryani + Raita + Salad + Beverage",
        price: 239,
        dietary: "veg",
      },
    ],
  },
  {
    id: "meal-for-one",
    title: "Meal for One",
    subtitle: "Biryani + raita + salad",
    items: [
      {
        id: "chicken-biryani-meal",
        name: "Chicken Biryani Meal",
        description: "Chicken Biryani + Raita + Salad",
        price: 329,
        dietary: "non-veg",
      },
      {
        id: "mutton-biryani-meal",
        name: "Mutton Biryani Meal",
        description: "Mutton Biryani + Raita + Salad",
        price: 479,
        dietary: "non-veg",
      },
      {
        id: "prawns-biryani-meal",
        name: "Prawns Biryani Meal",
        description: "Prawns Biryani + Raita + Salad",
        price: 429,
        dietary: "non-veg",
      },
      {
        id: "egg-biryani-meal",
        name: "Egg Biryani Meal",
        description: "Egg Biryani + Raita + Salad",
        price: 279,
        dietary: "egg",
      },
      {
        id: "veg-biryani-meal",
        name: "Veg Biryani Meal",
        description: "Veg Biryani + Raita + Salad",
        price: 259,
        dietary: "veg",
      },
    ],
  },
  {
    id: "addons",
    title: "Extra / Add-ons",
    items: [
      {
        id: "extra-chicken-piece",
        name: "Extra Chicken Piece",
        description: "One extra piece of chicken added to your order.",
        price: 99,
        dietary: "non-veg",
      },
      {
        id: "extra-mutton-piece",
        name: "Extra Mutton Piece",
        description: "One extra piece of mutton added to your order.",
        price: 129,
        dietary: "non-veg",
      },
      {
        id: "extra-prawns",
        name: "Extra Prawns (5 pcs)",
        description: "Five extra prawns added to your order.",
        price: 139,
        dietary: "non-veg",
      },
      {
        id: "extra-egg",
        name: "Extra Egg",
        description: "One extra boiled egg.",
        price: 35,
        dietary: "egg",
      },
      {
        id: "extra-raita",
        name: "Extra Raita",
        description: "An additional portion of cooling raita.",
        price: 35,
        dietary: "veg",
      },
      {
        id: "extra-salan",
        name: "Extra Salan (Gravy)",
        description: "An additional portion of salan gravy.",
        price: 25,
        dietary: "veg",
      },
      {
        id: "extra-salad",
        name: "Extra Salad",
        description: "An additional portion of fresh salad.",
        price: 25,
        dietary: "veg",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    items: [
      {
        id: "masala-chaas",
        name: "Masala Chaas",
        description: "Spiced, chilled buttermilk.",
        price: 59,
        dietary: "veg",
      },
      {
        id: "sweet-lassi",
        name: "Sweet Lassi",
        description: "Chilled, thick, and lightly sweetened yoghurt lassi.",
        price: 79,
        dietary: "veg",
      },
      {
        id: "fresh-lime-soda",
        name: "Fresh Lime Soda",
        description: "Chilled soda with fresh lime, sweet or salted.",
        price: 69,
        dietary: "veg",
      },
      {
        id: "packaged-drinking-water",
        name: "Packaged Drinking Water",
        description: "Sealed bottled water.",
        price: 25,
        dietary: "veg",
      },
      {
        id: "soft-drink-can",
        name: "Soft Drink (Can)",
        description: "Chilled Coke, Sprite, or Thums Up.",
        price: 50,
        dietary: "veg",
      },
    ],
  },
];

export const dietaryLabel: Record<DietaryTag, string> = {
  veg: "Veg",
  "non-veg": "Non-Veg",
  egg: "Egg",
};
