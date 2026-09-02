import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Bike, Clock, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/lib/site-config";
import { deliveryRoutes, deliveryFaqs } from "@/lib/delivery-data";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const title = "Biryani Delivery in Salt Lake, Sector V & New Town";

export const metadata: Metadata = {
  title,
  // Under 160 characters so it is not truncated in results.
  description:
    "Dum biryani delivered across Salt Lake, Sector V and New Town. Order direct on WhatsApp for our own riders, or on Swiggy and Zomato for a wider radius.",
  alternates: { canonical: `${siteConfig.url}/biryani-delivery` },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description:
      "Dum biryani delivered across Salt Lake, Sector V and New Town. Order direct for our own riders, or on Swiggy and Zomato.",
    url: `${siteConfig.url}/biryani-delivery`,
    type: "website",
  },
};

export default function BiryaniDeliveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(deliveryFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([{ name: "Delivery areas", path: "/biryani-delivery" }])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-maroon-900 py-16 text-cream sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-cream/55">
              <Link href="/" className="hover:text-saffron-300">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-cream/80">Delivery areas</span>
            </nav>

            <h1 className="font-display text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Biryani delivery in Salt Lake, Sector V and New Town
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              We cook from a kitchen at {siteConfig.contact.address.street},{" "}
              {siteConfig.contact.address.locality}. There are two ways to get it to you, and
              which one is best depends on where you are.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl()}
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

            <p className="mt-8 flex items-center gap-2 text-sm text-cream/60">
              <Clock className="h-4 w-4 shrink-0 text-saffron-300" aria-hidden="true" />
              Open {siteConfig.contact.hours.display}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-warm">
              <Image
                src="/images/signature-chicken-dum-biryani.jpg"
                alt="Signature chicken dum biryani packed with raita and salad, ready for delivery"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Two routes */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Two ways to get it"
            title="Which one applies to you"
            lead="Direct orders are cheaper and let us commit to a delivery time. The apps reach further and give you live tracking."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {deliveryRoutes.map((route, i) => (
              <Reveal key={route.method} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-3xl border p-8 ${
                    i === 0
                      ? "border-maroon-600/25 bg-white shadow-soft"
                      : "border-charcoal/8 bg-white/60"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      i === 0 ? "bg-maroon-50 text-maroon-600" : "bg-cream-soft text-charcoal/70"
                    }`}
                  >
                    {i === 0 ? (
                      <Bike className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>

                  <h2 className="font-display mt-5 text-xl font-semibold text-charcoal">
                    {route.method}
                  </h2>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-maroon-500">
                    {route.best}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {route.areas.map((area) => (
                      <li
                        key={area}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm ${
                          i === 0
                            ? "bg-maroon-600 font-medium text-cream"
                            : "border border-charcoal/12 text-charcoal/75"
                        }`}
                      >
                        {i === 0 && (
                          <MapPin
                            className="h-3.5 w-3.5 text-saffron-300"
                            aria-hidden="true"
                          />
                        )}
                        {area}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 flex-1 text-sm leading-relaxed text-charcoal/70">
                    {route.detail}
                  </p>

                  {i === 0 ? (
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "primary",
                        size: "md",
                        className: "mt-6 w-full",
                      })}
                    >
                      Order on WhatsApp
                    </a>
                  ) : (
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={siteConfig.ordering.swiggy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "outline", size: "md" })}
                      >
                        Swiggy
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                      {siteConfig.ordering.zomato && (
                        <a
                          href={siteConfig.ordering.zomato}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonVariants({ variant: "outline", size: "md" })}
                        >
                          Zomato
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}

                  {i === 1 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      <PlatformBadge platform="swiggy" />
                      <PlatformBadge platform="zomato" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why timing differs */}
      <section className="bg-cream-soft py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="On timing"
            title="Why ours takes a few minutes longer"
            lead="Worth knowing before you order, because it is a deliberate trade-off rather than slow service."
          />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-charcoal/75">
            <p>
              A lot of biryani on delivery apps is cooked in bulk in the morning and held warm
              until someone orders it. It goes out fast because it has been sitting there.
            </p>
            <p>
              We dum-cook after the order lands. The handi is sealed and finished on low heat,
              which is where the flavour actually comes from, and it cannot be rushed without
              becoming a different dish. So we are a few minutes behind the reheated option,
              and the food is better for it.
            </p>
            <p>
              For anything time-critical, a scheduled office lunch or a party with a fixed
              serving time, order direct and tell us the time you need it. We cook backwards
              from that.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Delivery FAQ"
            title="Questions about getting it to you"
          />
          <Reveal delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {deliveryFaqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`delivery-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <p className="mt-10 text-center text-sm text-charcoal/65">
            Feeding a team or a party instead?{" "}
            <Link
              href="/corporate-catering"
              className="font-medium text-maroon-600 underline-offset-4 hover:underline"
            >
              Corporate catering
            </Link>{" "}
            and{" "}
            <Link
              href="/party-orders"
              className="font-medium text-maroon-600 underline-offset-4 hover:underline"
            >
              party orders
            </Link>{" "}
            both come with a fixed delivery time.
          </p>
        </div>
      </section>
    </>
  );
}
