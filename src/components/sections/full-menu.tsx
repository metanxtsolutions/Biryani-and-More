"use client";

import { useMemo, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { DietMark } from "@/components/ui/diet-mark";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { menu, type DietaryTag } from "@/lib/menu-data";

const dietaryFilters: Array<{ value: DietaryTag | "all"; label: string }> = [
  { value: "all", label: "All" },
  { value: "veg", label: "Veg" },
  { value: "non-veg", label: "Non-Veg" },
  { value: "egg", label: "Egg" },
];

const badgeVariantMap = {
  "Best Seller": "bestseller",
  "Chef's Recommendation": "chef",
  New: "new",
} as const;

export function FullMenu() {
  const [dietary, setDietary] = useState<DietaryTag | "all">("all");

  const filteredMenu = useMemo(
    () =>
      menu.map((category) => ({
        ...category,
        items: category.items.filter((item) => dietary === "all" || item.dietary === dietary),
      })),
    [dietary]
  );

  return (
    <section id="menu" className="relative grain bg-cream-soft py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Full menu"
          title="Everything on the menu"
          lead="Every biryani is served with raita and salad. Prices in ₹, inclusive of taxes."
        />

        <div
          role="group"
          aria-label="Filter menu by dietary preference"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {dietaryFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={dietary === filter.value}
              onClick={() => setDietary(filter.value)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                dietary === filter.value
                  ? "border-maroon-600 bg-maroon-600 text-cream"
                  : "border-charcoal/15 text-charcoal/70 hover:border-maroon-400 hover:text-maroon-600"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <Tabs.Root defaultValue={menu[0].id} className="mt-10">
          <Tabs.List
            aria-label="Menu categories"
            className="flex flex-wrap justify-center gap-1 border-y border-charcoal/10 py-3"
          >
            {menu.map((category) => (
              <Tabs.Trigger
                key={category.id}
                value={category.id}
                className="rounded-full px-4 py-2 text-sm font-semibold text-charcoal/70 transition-colors hover:text-maroon-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 data-[state=active]:bg-maroon-50 data-[state=active]:text-maroon-600"
              >
                {category.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {filteredMenu.map((category) => (
            <Tabs.Content
              key={category.id}
              value={category.id}
              className="focus-visible:outline-none"
            >
              {category.subtitle && (
                <p className="mt-8 text-center text-sm italic text-charcoal/70">
                  {category.subtitle}
                </p>
              )}

              {category.items.length === 0 ? (
                <p className="mt-10 text-center text-sm text-charcoal/60">
                  Nothing in this category matches that filter.
                </p>
              ) : (
                <ul className="mt-8 divide-y divide-charcoal/8">
                  {category.items.map((item) => (
                    <li key={item.id} className="py-5">
                      <div className="flex items-baseline gap-1">
                        <span className="flex items-center gap-2.5">
                          <DietMark dietary={item.dietary} />
                          <h3 className="font-display text-lg font-semibold text-charcoal">
                            {item.name}
                          </h3>
                        </span>

                        <span aria-hidden="true" className="leader" />

                        <span className="font-display shrink-0 text-lg font-semibold text-maroon-600">
                          ₹{item.price}
                        </span>
                      </div>

                      <p className="mt-1.5 max-w-2xl pl-[1.625rem] text-sm leading-relaxed text-charcoal/70">
                        {item.description}
                      </p>

                      {item.badges && item.badges.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-2 pl-[1.625rem]">
                          {item.badges.map((badge) => (
                            <Badge key={badge} variant={badgeVariantMap[badge]}>
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <p className="mt-12 text-center text-xs text-charcoal/65">
          Images are for illustration purposes only.
        </p>
      </div>
    </section>
  );
}
