import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site-config";

export function WhatsAppFloat() {
  // Charcoal icon rather than white: white on #25D366 is only 1.98:1 and fails
  // the WCAG 1.4.11 non-text contrast minimum of 3:1.
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Biryani & More on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-charcoal shadow-warm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] sm:bottom-8"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
