import { Bike, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { siteConfig } from "@/lib/site-config";

export function DeliveryAreas() {
  return (
    <section id="delivery-areas" className="bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Delivery areas"
          title="Where we deliver"
          lead="Our own riders cover Sector V and New Town. Everywhere else, order through Swiggy or Zomato."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* In-house delivery */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-maroon-600/20 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-maroon-50 text-maroon-600">
                  <Bike className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">
                    Our own delivery
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-maroon-500">
                    Direct orders · best value
                  </p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {siteConfig.inHouseDeliveryAreas.map((area) => (
                  <li
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full bg-maroon-600 px-4 py-2 text-sm font-medium text-cream"
                  >
                    <MapPin className="h-3.5 w-3.5 text-saffron-300" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex-1 text-sm leading-relaxed text-charcoal/70">
                Order on WhatsApp and our riders bring it straight from our kitchen. There is no
                platform mark-up, and we can take special instructions directly.
              </p>
            </div>
          </Reveal>

          {/* Marketplace delivery */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-white/60 p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-soft text-charcoal/70">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">
                    Swiggy &amp; Zomato
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-charcoal/65">
                    Wider delivery radius
                  </p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {siteConfig.marketplaceDeliveryAreas.map((area) => (
                  <li
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-charcoal/12 px-4 py-2 text-sm text-charcoal/75"
                  >
                    {area}
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex-1 text-sm leading-relaxed text-charcoal/70">
                Prefer live tracking and platform offers? We are listed on both. Just search
                for {siteConfig.name}.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <PlatformBadge platform="swiggy" />
                <PlatformBadge platform="zomato" />
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 flex items-center gap-2 text-sm text-charcoal/60">
          <Clock className="h-4 w-4 shrink-0 text-maroon-500" aria-hidden="true" />
          Open daily, {siteConfig.contact.hours.display}. Just outside these areas? Message us
          on WhatsApp. We extend direct delivery depending on demand.
        </p>
      </div>
    </section>
  );
}
