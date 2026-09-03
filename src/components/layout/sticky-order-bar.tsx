import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function StickyOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-cream/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <Link
        href="/#order"
        className={buttonVariants({ variant: "primary", size: "lg", className: "w-full" })}
      >
        Order Now: Fresh Dum Biryani
      </Link>
    </div>
  );
}
