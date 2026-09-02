import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { signatureBiryanis } from "@/lib/menu-data";
import { getWhatsAppUrl } from "@/lib/site-config";
import Link from "next/link";

const badgeVariantMap = {
  "Best Seller": "bestseller",
  "Chef's Recommendation": "chef",
  New: "new",
} as const;

export function SignatureBiryanis() {
  return (
    <section id="signature" className="bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Signature biryani"
            title="Slow-cooked, sealed, and worth the wait"
            className="max-w-xl"
          />
          <Link
            href="/#menu"
            className={buttonVariants({
              variant: "ghost",
              size: "md",
              className: "shrink-0 self-start sm:self-auto",
            })}
          >
            See the full menu →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {signatureBiryanis.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow duration-300 hover:shadow-warm">
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-maroon-900">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 90vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-maroon-900/85 via-maroon-900/10 to-transparent"
                  />

                  {item.badges && item.badges.length > 0 && (
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {item.badges.map((badge) => (
                        <Badge key={badge} variant={badgeVariantMap[badge]}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <h3 className="font-display text-xl font-semibold leading-tight text-cream">
                      {item.name}
                    </h3>
                    <span className="font-display shrink-0 text-2xl font-semibold text-saffron-300">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-charcoal/70">
                    {item.description}
                  </p>
                  <a
                    href={getWhatsAppUrl(`Hi! I'd like to order the ${item.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className: "mt-5 w-full",
                    })}
                  >
                    Order {item.name.split(" ")[0]}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
