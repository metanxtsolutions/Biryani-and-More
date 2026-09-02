import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, getTelUrl } from "@/lib/site-config";

export function CorporateOrders() {
  return (
    <section id="corporate" className="relative overflow-hidden bg-maroon-700 py-20 text-cream sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Corporate &amp; party orders"
            title="Feeding a whole office or a full house?"
            lead="We take bulk and catering orders directly: office lunches, team meetings, client events, birthdays and house parties. Tell us the headcount and we will handle the rest."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {siteConfig.catering.useCases.map((useCase) => (
              <li key={useCase} className="flex items-center gap-3 text-sm text-cream/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron-400/20">
                  <Check className="h-3.5 w-3.5 text-saffron-300" aria-hidden="true" />
                </span>
                {useCase}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {/* Primary action is the full catering page, not the WhatsApp link:
                this section is a teaser, and the internal link is what lets
                /corporate-catering rank. */}
            <Link
              href="/corporate-catering"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              See catering details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={getTelUrl()}
              className={buttonVariants({ variant: "outlineLight", size: "lg" })}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call us
            </a>
          </div>

          <p className="mt-5 text-sm text-cream/55">
            Please give us at least {siteConfig.catering.minNoticeHours}{" "}
            hours&apos; notice for large orders so everything is cooked fresh on the day.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-warm">
            <Image
              src="/images/mutton-dum-biryani.jpg"
              alt="Mutton dum biryani served with raita and salad, ready for a group order"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-cream px-6 py-5 shadow-warm sm:left-6">
            <p className="font-display text-3xl font-semibold text-maroon-700">
              {siteConfig.catering.minNoticeHours}h
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal/60">
              Notice for bulk orders
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
