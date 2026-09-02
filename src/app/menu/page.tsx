import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DietMark } from "@/components/ui/diet-mark";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config";
import { menu } from "@/lib/menu-data";
import { dishes } from "@/lib/dish-data";
import { buildBreadcrumbSchema } from "@/lib/schema";

const title = "Full Menu & Prices";

export const metadata: Metadata = {
  title,
  description:
    "The full Biryani & More menu with prices: chicken, mutton, prawns, egg and veg dum biryani, combos, meals, add-ons and drinks in Salt Lake Sector V.",
  alternates: { canonical: `${siteConfig.url}/menu` },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description:
      "Every biryani, combo, add-on and drink with current prices. Salt Lake Sector V and New Town.",
    url: `${siteConfig.url}/menu`,
    type: "website",
  },
};

/** Slugs that have a full dish page, so menu rows can link through. */
const dishBySlugId = new Map(dishes.map((d) => [d.menuItemId, d]));

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([{ name: "Menu", path: "/menu" }])),
        }}
      />

      <section className="bg-cream pt-10 pb-14 sm:pt-14 sm:pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-charcoal/55">
            <Link href="/" className="hover:text-maroon-600">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-charcoal/80">Menu</span>
          </nav>

          <div className="mt-8">
            <SectionHeading
              eyebrow="Full menu"
              title="Every dish, with prices"
              lead="All biryani is dum-cooked after you order and served with raita and salad. Prices in rupees, inclusive of taxes."
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "whatsapp", size: "md" })}
            >
              Order on WhatsApp
            </a>
            <Link
              href="/corporate-catering"
              className={buttonVariants({ variant: "outline", size: "md" })}
            >
              Ordering for a team?
            </Link>
          </div>
        </div>
      </section>

      {/* Dish pages, surfaced first */}
      <section className="bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="The biryanis" title="Read about each one" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish, i) => (
              <Reveal key={dish.slug} delay={i * 0.06}>
                <Link
                  href={`/menu/${dish.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-shadow hover:shadow-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-semibold text-charcoal">
                      {dish.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm text-charcoal/65">{dish.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-maroon-600">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full flat menu, no tabs, so every item is crawlable */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col gap-14">
            {menu.map((category) => (
              <div key={category.id}>
                <h2 className="font-display text-2xl font-semibold text-charcoal">
                  {category.title}
                </h2>
                {category.subtitle && (
                  <p className="mt-1.5 text-sm italic text-charcoal/70">{category.subtitle}</p>
                )}

                <ul className="mt-6 divide-y divide-charcoal/8">
                  {category.items.map((item) => {
                    const dish = dishBySlugId.get(item.id);
                    return (
                      <li key={item.id} className="py-5">
                        <div className="flex items-baseline gap-1">
                          <span className="flex items-center gap-2.5">
                            <DietMark dietary={item.dietary} />
                            <h3 className="font-display text-lg font-semibold text-charcoal">
                              {dish ? (
                                <Link
                                  href={`/menu/${dish.slug}`}
                                  className="underline-offset-4 hover:text-maroon-600 hover:underline"
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                item.name
                              )}
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
                              <Badge
                                key={badge}
                                variant={
                                  badge === "Best Seller"
                                    ? "bestseller"
                                    : badge === "Chef's Recommendation"
                                      ? "chef"
                                      : "new"
                                }
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-xs text-charcoal/65">
            Images are for illustration purposes only.
          </p>
        </div>
      </section>
    </>
  );
}
