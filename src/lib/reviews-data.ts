/**
 * Real, sourced customer reviews (Google/Zomato/Swiggy) go here once they
 * exist. This previously held four invented testimonials with a TODO saying
 * not to publish them as genuine — they got published anyway. A live
 * commercial site cannot show fabricated quotes as real customer feedback,
 * so this ships empty until it can be filled with real ones.
 *
 * The Reviews section (src/components/sections/reviews.tsx) hides itself
 * automatically while this array is empty and siteConfig.ratings.verified
 * is false, so there is nothing else to wire up when real reviews arrive:
 * just populate this array and/or flip `verified` to true.
 */

export interface Review {
  name: string;
  area: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
}

export const reviews: Review[] = [];
