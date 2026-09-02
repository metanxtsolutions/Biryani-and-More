import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const facts = [
  { label: "Core focus", value: "Dum Biryani" },
  { label: "Kitchen type", value: "Cloud Kitchen" },
  { label: "Cooking style", value: "Slow & Sealed" },
  { label: "Based in", value: "Sector V" },
];

export function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={0.1} className="relative order-last lg:order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-warm">
            <Image
              src="/images/mutton-biryani-combo.jpg"
              alt="A full Biryani and More meal: dum biryani served with raita, salad and a Gondhoraj sherbet"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow="About us"
            title="One dish, done properly"
          />

          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/75">
            <p>
              Biryani &amp; More exists to do one thing exceptionally well: authentic dum
              biryani, cooked fresh for every single order. It is never held under a warmer
              and never reheated.
            </p>
            <p>
              We keep the menu deliberately short because a smaller, better menu beats a
              long one. Chicken, mutton, prawns, egg and veg, each with premium basmati,
              fresh proteins and whole ground spices, from a clean and hygienic kitchen.
            </p>
            <p>
              We serve office teams in Sector V, families in New Town, and everyone in
              between, through Swiggy, Zomato and our own delivery riders. Same standard
              on order one and order one hundred.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-charcoal/12 pt-7 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.7rem] uppercase tracking-wider text-charcoal/65">
                  {fact.label}
                </dt>
                <dd className="font-display mt-1.5 text-base font-semibold text-charcoal">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
