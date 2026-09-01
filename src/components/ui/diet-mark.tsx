import type { DietaryTag } from "@/lib/menu-data";
import { dietaryLabel } from "@/lib/menu-data";

const colors: Record<DietaryTag, string> = {
  veg: "var(--color-cardamom-500)",
  "non-veg": "var(--color-maroon-500)",
  egg: "var(--color-saffron-500)",
};

/**
 * The standard Indian FSSAI-style square-and-dot mark diners already scan for:
 * green = veg, brown/red = non-veg, amber = egg.
 */
export function DietMark({ dietary }: { dietary: DietaryTag }) {
  return (
    <span
      className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border-[1.5px]"
      style={{ borderColor: colors[dietary] }}
      title={dietaryLabel[dietary]}
    >
      <span className="sr-only">{dietaryLabel[dietary]}</span>
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: colors[dietary] }}
      />
    </span>
  );
}
