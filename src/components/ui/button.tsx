import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-saffron-500 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-maroon-600 text-cream shadow-warm hover:bg-maroon-700 active:bg-maroon-900",
        secondary:
          "bg-saffron-400 text-charcoal hover:bg-saffron-500 shadow-soft",
        outline:
          "border-2 border-maroon-600 text-maroon-600 hover:bg-maroon-600 hover:text-cream",
        /**
         * Outline button for use ON dark backgrounds. A separate variant rather
         * than a className override, because buttonVariants() concatenates
         * without tailwind-merge, so an override would lose to the base variant in
         * the cascade and render maroon-on-maroon.
         */
        outlineLight:
          "border-2 border-cream/50 text-cream hover:bg-cream hover:text-maroon-700 focus-visible:ring-offset-charcoal",
        ghost: "text-maroon-600 hover:bg-maroon-50",
        /**
         * Dark text on WhatsApp green, not white: white-on-#25D366 is only
         * 1.98:1 and fails WCAG AA. Charcoal keeps the recognisable brand
         * green while reaching ~8.8:1.
         */
        whatsapp: "bg-[#25D366] text-charcoal hover:bg-[#1ebe57] shadow-soft",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
