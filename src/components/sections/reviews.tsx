import { Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviews } from "@/lib/reviews-data";
import { siteConfig } from "@/lib/site-config";

/**
 * Renders nothing until there is something real to show: a verified
 * aggregate rating, actual review quotes, or both. See reviews-data.ts for
 * why this is not backfilled with placeholder content.
 */
export function Reviews() {
  const hasVerifiedRating = siteConfig.ratings.verified;
  const hasQuotes = reviews.length > 0;
  if (!hasVerifiedRating && !hasQuotes) return null;

  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Customer reviews"
            title="Regulars keep coming back"
            className="max-w-xl"
          />

          {hasVerifiedRating && (
            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-charcoal/10 bg-white px-5 py-4">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-saffron-400 text-saffron-400" />
                ))}
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-none text-charcoal">
                  {siteConfig.ratings.aggregate}
                  <span className="text-sm font-normal text-charcoal/65"> / 5</span>
                </p>
                <p className="mt-1 text-xs text-charcoal/65">
                  {siteConfig.ratings.count}+ orders rated
                </p>
              </div>
            </div>
          )}
        </div>

        {hasQuotes && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col border-t-2 border-saffron-400 bg-white/70 p-6">
                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-3.5 w-3.5 ${
                          idx < review.rating
                            ? "fill-saffron-400 text-saffron-400"
                            : "text-charcoal/15"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="mt-4 flex-1 font-display text-base leading-relaxed text-charcoal/85">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-5 border-t border-charcoal/8 pt-4 text-sm font-semibold text-charcoal">
                    {review.name}
                    <span className="block text-xs font-normal text-charcoal/65">
                      {review.area}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
