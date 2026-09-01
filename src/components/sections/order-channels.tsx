import { ExternalLink, Bike } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config";

interface OrderChannel {
  key: "swiggy" | "zomato" | "direct";
  accent: string;
  name: string;
  description: string;
  href: string;
  cta: string;
  featured?: boolean;
}

/**
 * A channel is only listed once it has a real URL. Shipping a card whose button
 * goes nowhere is worse than omitting the card, so an empty URL in site-config
 * hides that channel until the real listing link is filled in.
 */
const allChannels: OrderChannel[] = [
  {
    key: "swiggy",
    accent: "#FC8019",
    name: "Swiggy",
    description:
      "Find us on Swiggy with live tracking, offers and your saved payment methods.",
    href: siteConfig.ordering.swiggy,
    cta: "Order on Swiggy",
  },
  {
    key: "zomato",
    accent: "#E23744",
    name: "Zomato",
    description:
      "Browse the full menu, reviews and ratings, and order through Zomato delivery.",
    href: siteConfig.ordering.zomato,
    cta: "Order on Zomato",
  },
  {
    key: "direct",
    accent: "var(--color-cardamom-500)",
    name: "Direct from our kitchen",
    description: `Message us on WhatsApp and our own riders deliver across ${siteConfig.inHouseDeliveryAreas.join(" and ")}. Best value, with no platform mark-up.`,
    href: getWhatsAppUrl(),
    cta: "Order on WhatsApp",
    featured: true,
  },
];

const channels = allChannels.filter((channel) => channel.href.length > 0);

export function OrderChannels() {
  return (
    <section id="order-channels" className="relative grain bg-cream py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Three ways to order"
          title="Order however suits you best"
          lead="We are live on both major delivery platforms, and we run our own delivery team for Sector V and New Town."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.key} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 transition-shadow hover:shadow-warm ${
                  channel.featured
                    ? "border-maroon-600/25 bg-white shadow-soft"
                    : "border-charcoal/8 bg-white/60"
                }`}
              >
                {channel.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-maroon-600 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream">
                    Best value
                  </span>
                )}

                <span
                  aria-hidden="true"
                  className="h-1.5 w-12 rounded-full"
                  style={{ background: channel.accent }}
                />

                <h3 className="font-display mt-5 text-xl font-semibold text-charcoal">
                  {channel.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                  {channel.description}
                </p>

                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: channel.featured ? "primary" : "outline",
                    size: "md",
                    className: "mt-6 w-full",
                  })}
                >
                  {channel.key === "direct" ? (
                    <Bike className="h-4 w-4" aria-hidden="true" />
                  ) : null}
                  {channel.cta}
                  {channel.key !== "direct" && (
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  )}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
