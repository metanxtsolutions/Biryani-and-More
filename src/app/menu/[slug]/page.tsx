import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DietMark } from "@/components/ui/diet-mark";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/lib/site-config";
import { menu, dietaryLabel, type MenuItem } from "@/lib/menu-data";
import { dishes, getDish, dietaryNote } from "@/lib/dish-data";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

/** Price and dietary tag come from menu-data so there is one source of truth. */
function getMenuItem(id: string): MenuItem | undefined {
  return menu.flatMap((c) => c.items).find((i) => i.id === id);
}

export function generateStaticParams() {
  return dishes.map((dish) => ({ slug: dish.slug }));
}

// params is a Promise in this Next.js version and must be awaited.
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) return {};

  const item = getMenuItem(dish.menuItemId);
  const price = item ? `₹${item.price}` : "";
  const title = `${dish.name} in Salt Lake & Sector V`;

  return {
    title,
    // Composed from a hand-written tail rather than truncated: slicing a longer
    // sentence cut it mid-word, which is what a searcher would see.
    description: `${dish.name}, ${price}. ${dish.metaTail}`,
    alternates: { canonical: `${siteConfig.url}/menu/${dish.slug}` },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: dish.tagline,
      url: `${siteConfig.url}/menu/${dish.slug}`,
      type: "website",
      images: [{ url: `${siteConfig.url}${dish.image}` }],
    },
  };
}

export default async function DishPage({ params }: Props) {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) notFound();

  const item = getMenuItem(dish.menuItemId);
  if (!item) notFound();

  const related = dish.related
    .map((s) => getDish(s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  /** Product schema is what makes the price and availability eligible for rich results. */
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: dish.name,
    description: dish.intro[0],
    image: `${siteConfig.url}${dish.image}`,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      price: item.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/menu/${dish.slug}`,
      seller: { "@type": "Restaurant", "@id": `${siteConfig.url}/#restaurant` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(dish.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Menu", path: "/menu" },
              { name: dish.name, path: `/menu/${dish.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-cream pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-charcoal/55">
            <Link href="/" className="hover:text-maroon-600">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link href="/menu" className="hover:text-maroon-600">
              Menu
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-charcoal/80">{dish.name}</span>
          </nav>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-warm">
                <Image
                  src={dish.image}
                  alt={dish.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-charcoal/12 px-3 py-1 text-xs font-medium text-charcoal/70">
                  <DietMark dietary={item.dietary} />
                  {dietaryLabel[item.dietary]}
                </span>
                {item.badges?.map((badge) => (
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

              <h1 className="font-hero mt-5 text-balance text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-charcoal sm:text-5xl">
                {dish.name}
              </h1>
              <p className="mt-3 text-lg text-charcoal/70">{dish.tagline}</p>

              <p className="font-display mt-6 text-4xl font-semibold text-maroon-600">
                ₹{item.price}
                {item.serves && (
                  <span className="ml-2 align-middle text-sm font-normal text-charcoal/55">
                    serves {item.serves}
                  </span>
                )}
              </p>
              <p className="mt-1.5 text-sm text-charcoal/60">
                Served with raita and salad. {dietaryNote[item.dietary]}.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl(`Hi! I'd like to order the ${dish.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "whatsapp", size: "lg" })}
                >
                  Order on WhatsApp
                </a>
                <a
                  href={siteConfig.ordering.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Swiggy
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-5 text-sm text-charcoal/60">
                Delivered by our own team across{" "}
                <Link
                  href="/biryani-delivery"
                  className="font-medium text-maroon-600 underline-offset-4 hover:underline"
                >
                  Sector V and New Town
                </Link>
                . Open {siteConfig.contact.hours.display}.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The dish itself */}
      <section className="bg-cream-soft py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="About the dish" title={`What makes it ${dish.name.split(" ")[0].toLowerCase() === "signature" ? "the house biryani" : "different"}`} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/75">
              {dish.intro.map((para) => (
                <p key={para.slice(0, 30)}>{para}</p>
              ))}
            </div>
            <p className="mt-7 rounded-2xl bg-maroon-50 px-5 py-4 text-sm text-charcoal/75">
              <span className="font-semibold text-maroon-700">Good for: </span>
              {dish.goodFor}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-5">
              {dish.highlights.map((h) => (
                <li
                  key={h.label}
                  className="rounded-2xl border border-charcoal/8 bg-white p-5 shadow-soft"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maroon-50">
                      <Check className="h-3 w-3 text-maroon-600" aria-hidden="true" />
                    </span>
                    <span className="font-display text-base font-semibold text-charcoal">
                      {h.label}
                    </span>
                  </span>
                  <p className="mt-2 pl-8 text-sm leading-relaxed text-charcoal/70">
                    {h.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading align="center" eyebrow="Questions" title={`About the ${dish.name}`} />
          <Reveal delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {dish.faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`dish-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Related dishes */}
      <section className="bg-cream-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Also on the menu" title="You might prefer one of these" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => {
              const rItem = getMenuItem(r.menuItemId);
              return (
                <Reveal key={r.slug} delay={i * 0.08}>
                  <Link
                    href={`/menu/${r.slug}`}
                    className="group block h-full overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow hover:shadow-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 focus-visible:ring-offset-2"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold text-charcoal">
                        {r.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-charcoal/65">{r.tagline}</p>
                      {rItem && (
                        <p className="font-display mt-3 text-xl font-semibold text-maroon-600">
                          ₹{rItem.price}
                        </p>
                      )}
                    </div>
                  </Link>
                </Reveal>
              );
            })}

            <Reveal delay={0.16}>
              <Link
                href="/menu"
                className="flex h-full flex-col justify-center rounded-3xl border-2 border-dashed border-maroon-600/25 p-8 text-center transition-colors hover:border-maroon-600/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
              >
                <span className="font-display text-lg font-semibold text-maroon-600">
                  See the full menu
                </span>
                <span className="mt-1.5 text-sm text-charcoal/60">
                  Biryanis, combos, add-ons and drinks
                </span>
                <ArrowRight
                  className="mx-auto mt-3 h-5 w-5 text-maroon-500"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-balance text-2xl font-semibold sm:text-3xl">
            Order the {dish.name} today
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl(`Hi! I'd like to order the ${dish.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "whatsapp", size: "lg" })}
            >
              Order on WhatsApp
            </a>
            <a
              href={getTelUrl()}
              className={buttonVariants({ variant: "outlineLight", size: "lg" })}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
