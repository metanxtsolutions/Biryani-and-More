import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, PartyPopper, Clock, Bike, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/lib/site-config";
import {
  partyOccasions,
  portionGuide,
  partyPacking,
  partyFaqs,
} from "@/lib/party-data";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const title = "Party Biryani Orders in Salt Lake & New Town";

export const metadata: Metadata = {
  title,
  // Under 160 characters so it is not truncated in results.
  description:
    "Biryani for birthdays, house parties and festivals in Salt Lake and New Town. Bulk handis that stay hot, from 10 guests. Evening delivery by our own team.",
  alternates: { canonical: `${siteConfig.url}/party-orders` },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description:
      "Biryani for birthdays, house parties and festivals in Salt Lake and New Town. Bulk handis that stay hot, delivered in the evening.",
    url: `${siteConfig.url}/party-orders`,
    type: "website",
  },
};

const quoteMessage =
  "Hi Biryani & More! I'd like a quote for a party order. Guests: , Date: , Serving time: ";

export default function PartyOrdersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(partyFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([{ name: "Party orders", path: "/party-orders" }])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-charcoal py-16 text-cream sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-cream/55">
              <Link href="/" className="hover:text-saffron-300">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-cream/80">Party orders</span>
            </nav>

            <h1 className="font-display text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Party biryani orders in Salt Lake and New Town
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Birthdays, house parties, Pujo lunches and housewarmings. One handi in the
              middle of the table, cooked to your serving time, so you get to spend the
              evening with your guests instead of in the kitchen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Get a party quote
              </a>
              <a
                href={getTelUrl()}
                className={buttonVariants({ variant: "outlineLight", size: "lg" })}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-cream/15 pt-7 sm:grid-cols-3">
              <div>
                <dt className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-cream/55">
                  <Users className="h-3.5 w-3.5 text-saffron-400" aria-hidden="true" />
                  From
                </dt>
                <dd className="font-display mt-1.5 text-lg font-semibold">
                  {siteConfig.catering.minGuests} guests
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-cream/55">
                  <Clock className="h-3.5 w-3.5 text-saffron-400" aria-hidden="true" />
                  Evening slots
                </dt>
                <dd className="font-display mt-1.5 text-lg font-semibold">Until 11 PM</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-cream/55">
                  <Bike className="h-3.5 w-3.5 text-saffron-400" aria-hidden="true" />
                  Delivery
                </dt>
                <dd className="font-display mt-1.5 text-lg font-semibold">Our own team</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-warm">
              <Image
                src="/images/mutton-dum-biryani.jpg"
                alt="Mutton dum biryani in a serving bowl with raita and salad, laid out for guests"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Occasions */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we cater"
            title="The evenings people call us for"
            lead="Every one of these is the same kitchen and the same dum biryani. What changes is how we pack it and when it lands at your door."
          />

          <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {partyOccasions.map((occasion, i) => (
              <Reveal key={occasion.title} delay={i * 0.06}>
                <div className="border-t border-charcoal/12 pt-5">
                  <PartyPopper
                    className="h-5 w-5 text-maroon-500"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <h3 className="font-display mt-3.5 text-lg font-semibold text-charcoal">
                    {occasion.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {occasion.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portion guide */}
      <section className="bg-cream-soft py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How much to order"
            title="Working out portions for a party"
            lead="The question every host gets stuck on. One portion per guest is a normal serving, and a little extra covers the people who come back for more."
          />

          <Reveal delay={0.1} className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse bg-white text-left text-sm shadow-soft">
              <caption className="sr-only">
                Suggested biryani portions by number of party guests
              </caption>
              <thead>
                <tr className="bg-maroon-50">
                  <th scope="col" className="px-5 py-3.5 font-semibold text-maroon-700">
                    Guests
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold text-maroon-700">
                    Order roughly
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold text-maroon-700">
                    Worth knowing
                  </th>
                </tr>
              </thead>
              <tbody>
                {portionGuide.map((row) => (
                  <tr key={row.guests} className="border-t border-charcoal/8">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-5 py-4 font-display text-base font-semibold text-charcoal"
                    >
                      {row.guests}
                    </th>
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-maroon-600">
                      {row.order}
                    </td>
                    <td className="px-5 py-4 leading-relaxed text-charcoal/70">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-5 text-sm text-charcoal/60">
            Not sure? Send us the guest count on WhatsApp and we will tell you what we would
            order, including a suggested split between biryanis.
          </p>
        </div>
      </section>

      {/* How we pack for parties */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1} className="order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-warm">
              <Image
                src="/images/veg-dum-biryani.jpg"
                alt="Veg dum biryani served with raita, one of the options for mixed guest lists"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <SectionHeading
              eyebrow="How it arrives"
              title="Packed for a room, not a desk"
              lead="An office lunch wants individual boxes. A party wants something people can serve themselves from, that is still hot an hour in."
            />
            <ul className="mt-8 grid gap-3">
              {partyPacking.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maroon-50">
                    <Check className="h-3 w-3 text-maroon-600" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm text-charcoal/65">
              Feeding an office instead?{" "}
              <Link
                href="/corporate-catering"
                className="font-medium text-maroon-600 underline-offset-4 hover:underline"
              >
                See corporate catering
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-soft py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Party FAQ"
            title="What hosts ask us"
          />
          <Reveal delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {partyFaqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`party-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-maroon-700 py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow justify-center text-saffron-300">Book a party order</p>
            <h2 className="font-display mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Tell us the guest count and the evening
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/75">
              Send it on WhatsApp with your serving time. We will come back with a per-head
              price and tell you honestly how much to order.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "whatsapp", size: "lg" })}
              >
                Get a party quote
              </a>
              <a
                href={getTelUrl()}
                className={buttonVariants({ variant: "outlineLight", size: "lg" })}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {siteConfig.contact.phoneDisplay}
              </a>
            </div>
            <p className="mt-8 text-sm text-cream/60">
              Minimum {siteConfig.catering.minGuests} guests, and please allow{" "}
              {siteConfig.catering.minNoticeHours} hours notice.{" "}
              <Link href="/" className="text-saffron-300 underline-offset-4 hover:underline">
                See the full menu
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
