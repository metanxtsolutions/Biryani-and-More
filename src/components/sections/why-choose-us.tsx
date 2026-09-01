import { Flame, Leaf, ShieldCheck, Timer, Package, IndianRupee } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    icon: Flame,
    title: "Slow dum-cooked",
    description:
      "Sealed handi, low heat, no shortcuts. This is how the flavour actually develops.",
  },
  {
    icon: Leaf,
    title: "Premium ingredients",
    description:
      "Long-grain basmati, fresh meat and prawns, whole spices ground in-house.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic kitchen",
    description:
      "A clean, controlled cloud kitchen with the same standard on every order.",
  },
  {
    icon: Timer,
    title: "Cooked to order",
    description:
      "Nothing sits under a warmer. Your biryani starts when your order lands.",
  },
  {
    icon: Package,
    title: "Secure packaging",
    description:
      "Leak-proof, heat-retaining containers so it arrives exactly as it left.",
  },
  {
    icon: IndianRupee,
    title: "Honest portions",
    description:
      "Generous servings at a price that makes ordering again an easy decision.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="Premium quality, without the premium fuss"
          lead="A short menu, done properly. That is the whole strategy."
        />

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06}>
              <div className="border-t border-charcoal/12 pt-6">
                <reason.icon
                  className="h-6 w-6 text-maroon-500"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <h3 className="font-display mt-4 text-lg font-semibold text-charcoal">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
