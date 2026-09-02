import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ShieldCheck, Clock, Bike, Users } from "lucide-react";
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
  cateringTiers,
  cateringSteps,
  cateringIncludes,
  cateringFaqs,
} from "@/lib/catering-data";
import {
  buildFaqSchema,
  buildBreadcrumbSchema,
  getCateringServiceSchema,
} from "@/lib/schema";

const title = "Corporate Biryani Catering in Salt Lake & Sector V";

export const metadata: Metadata = {
  title,
  // Kept under 160 characters so Google does not truncate before the CTA.
  description:
    "Bulk dum biryani for office lunches and events in Salt Lake Sector V and New Town. Cooked fresh on the day, delivered by our team. Get a per-head quote.",
  alternates: { canonical: `${siteConfig.url}/corporate-catering` },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description:
      "Bulk dum biryani for office lunches, team meetings and client events in Salt Lake Sector V and New Town. Cooked fresh on the day.",
    url: `${siteConfig.url}/corporate-catering`,
    type: "website",
  },
};

const quoteMessage =
  "Hi Biryani & More! I'd like a quote for corporate catering. Headcount: , Date: , Delivery time: ";

export default function CorporateCateringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqSchema(cateringFaqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getCateringServiceSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Corporate catering", path: "/corporate-catering" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-maroon-700 py-16 text-cream sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-cream/55">
              <Link href="/" className="hover:text-saffron-300">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-cream/80">Corporate catering</span>
            </nav>

            <h1 className="font-display text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Corporate biryani catering in Salt Lake and Sector V
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Office lunches, team meetings, client events and festival days, from{" "}
              {siteConfig.catering.minGuests} people upwards. Tell us the headcount and the
              date, and we cook fresh dum biryani that morning and deliver it with our own
              riders.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Get a per-head quote
              </a>
              <a
                href={getTelUrl()}
                className={buttonVariants({ variant: "outlineLight", size: "lg" })}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-cream/15 pt-7 sm:grid-cols-4">
              <div>
                <dt className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-cream/55">
                  <Users className="h-3.5 w-3.5 text-saffron-300" aria-hidden="true" />
                  Minimum
                </dt>
                <dd className="font-display mt-1.5 text-lg font-semibold">
                  {siteConfig.catering.minGuests} guests
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-cream/55">
                  <Clock className="h-3.5 w-3.5 text-saffron-300" aria-hidden="true" />
                  Notice
                </dt>
                <dd className="font-display mt-1.5 text-lg font-semibold">
                  {siteConfig.catering.minNoticeHours} hours
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-cream/55">
                  <Bike className="h-3.5 w-3.5 text-saffron-300" aria-hidden="true" />
                  Delivery
                </dt>
                <dd className="font-display mt-1.5 text-lg font-semibold">Our own team</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-cream/55">
                  <ShieldCheck className="h-3.5 w-3.5 text-saffron-300" aria-hidden="true" />
                  Licence
                </dt>
                <dd className="font-display mt-1.5 text-lg font-semibold">FSSAI certified</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-warm">
              <Image
                src="/images/mutton-biryani-combo.jpg"
                alt="A Biryani and More catering portion: dum biryani with raita, salad and a chilled sherbet"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Headcount bands */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How much you need"
            title="Order sizes we handle"
            lead={`Catering starts at ${siteConfig.catering.minGuests} people. Pricing is quoted per order rather than fixed, because it depends on the dish split and the date, so these bands tell you roughly what to expect.`}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cateringTiers.map((tier, i) => (
              <Reveal key={tier.band} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-white p-6 shadow-soft">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-maroon-500">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    {tier.band}
                  </span>
                  <p className="font-display mt-3 text-2xl font-semibold text-charcoal">
                    {tier.headcount}
                    <span className="ml-1.5 text-sm font-normal text-charcoal/55">guests</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{tier.suits}</p>
                  <p className="mt-4 border-t border-charcoal/10 pt-4 text-sm leading-relaxed text-charcoal/65">
                    {tier.format}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="From headcount to delivered, in four steps"
          />

          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {cateringSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <li className="border-t-2 border-maroon-600/25 pt-5">
                  <span className="font-display text-sm font-semibold text-maroon-500">
                    Step {i + 1}
                  </span>
                  <h3 className="font-display mt-2 text-lg font-semibold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{step.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="What is included"
              title="Everything arrives ready to serve"
              lead="No assembly at your end, and nothing forgotten. Every catering order goes out complete."
            />
            <ul className="mt-8 grid gap-3">
              {cateringIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maroon-50">
                    <Check className="h-3 w-3 text-maroon-600" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-warm">
              <Image
                src="/images/signature-chicken-dum-biryani.jpg"
                alt="Signature Chicken Dum Biryani served with raita and salad"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-soft py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Catering FAQ"
            title="Questions we get from office teams"
          />
          <Reveal delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {cateringFaqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`catering-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-charcoal py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow justify-center text-saffron-400">Get a quote</p>
            <h2 className="font-display mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Tell us the headcount and the date
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/70">
              Send it on WhatsApp and we will come back with a per-head price and a suggested
              veg, egg and non-veg split. No obligation.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "whatsapp", size: "lg" })}
              >
                Get a per-head quote
              </a>
              <a
                href={getTelUrl()}
                className={buttonVariants({ variant: "outlineLight", size: "lg" })}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {siteConfig.contact.phoneDisplay}
              </a>
            </div>
            <p className="mt-8 text-sm text-cream/55">
              Kitchen at {siteConfig.contact.address.street},{" "}
              {siteConfig.contact.address.locality}. Open{" "}
              {siteConfig.contact.hours.display}.{" "}
              <Link href="/" className="text-saffron-300 underline-offset-4 hover:underline">
                See the full menu
              </Link>{" "}
              or{" "}
              <Link
                href="/party-orders"
                className="text-saffron-300 underline-offset-4 hover:underline"
              >
                book a party order
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
