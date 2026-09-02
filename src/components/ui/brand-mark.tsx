import { cn } from "@/lib/utils";

/**
 * The "Biryani & More" logo lockup, per Brand & Logo Guidelines V1.0
 * (direction 1a, "The Tile"): a monogram tile plus wordmark.
 *
 * Colours and the 18%-of-tile corner radius are fixed to the guideline's
 * exact values rather than the site's theme tokens — a trademark's ink
 * doesn't retheme with the page around it. "reversed" is for dark
 * surfaces (guideline's "HORIZONTAL · REVERSED" asset): the tile switches
 * from Handi Red to Saffron so it still reads against a dark ground.
 */

const HANDI_RED = "#A6301F";
const SAFFRON = "#F2C14B";
const CHARCOAL = "#1B1A17";
const BONE = "#FBF8F1";

interface BrandMarkProps {
  variant?: "primary" | "reversed";
  tileSize?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  className?: string;
}

export function BrandMark({
  variant = "primary",
  tileSize = 32,
  showWordmark = true,
  wordmarkClassName,
  className,
}: BrandMarkProps) {
  const tileBg = variant === "primary" ? HANDI_RED : SAFFRON;
  const tileInk = variant === "primary" ? BONE : CHARCOAL;
  const wordmarkInk = variant === "primary" ? CHARCOAL : BONE;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="font-brand flex shrink-0 items-center justify-center font-extrabold"
        style={{
          width: tileSize,
          height: tileSize,
          borderRadius: tileSize * 0.18,
          background: tileBg,
          color: tileInk,
          fontSize: tileSize * 0.34,
          letterSpacing: "-0.045em",
        }}
      >
        B&amp;M
      </span>
      {showWordmark && (
        <span
          className={cn("font-brand font-bold", wordmarkClassName)}
          style={{ color: wordmarkInk, letterSpacing: "-0.035em", lineHeight: 0.95 }}
        >
          Biryani &amp; More
        </span>
      )}
    </span>
  );
}
