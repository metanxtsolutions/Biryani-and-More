import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
  {
    variants: {
      variant: {
        bestseller: "bg-saffron-400 text-maroon-900",
        chef: "bg-maroon-600 text-cream",
        new: "bg-cardamom-500 text-cream",
        veg: "border border-cardamom-500 text-cardamom-500",
        "non-veg": "border border-maroon-500 text-maroon-500",
        egg: "border border-gold-500 text-gold-500",
        neutral: "bg-cream-soft text-charcoal",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
