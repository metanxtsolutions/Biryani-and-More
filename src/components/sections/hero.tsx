import Image from "next/image";
import { Star, Timer, ShieldCheck, Building2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { siteConfig } from "@/lib/site-config";

const trustStats = [
  {
    icon: Star,
    value: `${siteConfig.ratings.aggregate}★`,
    label: `${siteConfig.ratings.count}+ ratings`,
  },
  { icon: Timer, value: "~40 min", label: "Average delivery" },
  { icon: ShieldCheck, value: "100%", label: "Hygienic kitchen" },
  { icon: Building2, value: "Bulk", label: "Corporate & parties" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-maroon-900">
      {/* Full-bleed food photography */}
      <Image
        src="/images/hero-biryani-handi.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        // Source photo is square (1080x1080) but the hero is a wide banner, so
        // object-cover shows only a horizontal band. Bias it low (85%) to keep
        // the biryani bowl in frame rather than the empty counter above it.
        className="object-cover object-[50%_85%]"
      />

      {/* Warm scrim: keeps display type at AA contrast over the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-maroon-900 via-maroon-900/90 to-maroon-900/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-transparent to-maroon-900/60"
      />

      <div className="relative mx-auto flex min-h-[38rem] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:min-h-[44rem] lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-saffron-300">Cloud Kitchen · Sector V &amp; New Town</p>

          <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Fresh dum biryani,
            <span className="block text-saffron-300">served hot.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Slow-cooked in sealed handis with long-grain basmati, tender meat and whole
            spices, made fresh for every single order. Never pre-cooked, never reheated.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#order" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Order Now
            </a>
            <a
              href="#menu"
              className={buttonVariants({ variant: "outlineLight", size: "lg" })}
            >
              View Full Menu
            </a>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-wider text-cream/50">
              Order from
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <PlatformBadge platform="swiggy" tone="dark" />
              <PlatformBadge platform="zomato" tone="dark" />
              <PlatformBadge platform="direct" tone="dark" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-cream/15 bg-maroon-900/60 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 py-5 lg:justify-center">
              <stat.icon className="h-5 w-5 shrink-0 text-saffron-300" aria-hidden="true" />
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-lg font-semibold leading-none text-cream">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-cream/60">{stat.label}</p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
