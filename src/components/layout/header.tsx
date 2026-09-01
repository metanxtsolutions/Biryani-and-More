"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site-config";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#corporate", label: "Corporate & Parties" },
  { href: "#delivery-areas", label: "Delivery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-cream/85 backdrop-blur-md">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-maroon-600">
            Biryani<span className="text-saffron-500">&amp;</span>More
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/75 transition-colors hover:text-maroon-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#order" className={buttonVariants({ variant: "primary", size: "md" })}>
            Order Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-charcoal/5 bg-cream lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-charcoal/80 hover:bg-cream-soft hover:text-maroon-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className={buttonVariants({ variant: "primary", size: "lg", className: "mt-2 w-full" })}
              >
                Order Now
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={buttonVariants({ variant: "whatsapp", size: "lg", className: "mt-2 w-full" })}
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
