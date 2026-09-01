import { cn } from "@/lib/utils";

/**
 * "Available on" badges. Deliberately typographic rather than reproductions of
 * the Swiggy/Zomato logos. We use their brand colour as an accent dot only.
 */
const platformStyles = {
  swiggy: { label: "Swiggy", dot: "#FC8019" },
  zomato: { label: "Zomato", dot: "#E23744" },
  direct: { label: "Direct Delivery", dot: "var(--color-cardamom-500)" },
} as const;

export type PlatformKey = keyof typeof platformStyles;

export function PlatformBadge({
  platform,
  tone = "light",
  className,
}: {
  platform: PlatformKey;
  tone?: "light" | "dark";
  className?: string;
}) {
  const { label, dot } = platformStyles[platform];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm",
        tone === "light"
          ? "bg-charcoal/5 text-charcoal/80"
          : "bg-cream/12 text-cream/90",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ background: dot }}
      />
      {label}
    </span>
  );
}
