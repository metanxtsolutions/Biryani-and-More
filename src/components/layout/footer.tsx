import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/social";
import { BrandMark } from "@/components/ui/brand-mark";
import { siteConfig, getTelUrl } from "@/lib/site-config";
import { reviews } from "@/lib/reviews-data";
import Link from "next/link";

// Same rule as the header nav: only link to "Reviews" once that section
// actually renders something. See reviews.tsx.
const showReviews = siteConfig.ratings.verified || reviews.length > 0;

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <BrandMark variant="reversed" tileSize={28} wordmarkClassName="text-lg" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {siteConfig.tagline}. Freshly dum-cooked, hygienically prepared, and delivered fast
            across Kolkata.
          </p>
          {(siteConfig.social.instagram || siteConfig.social.facebook) && (
            <div className="mt-4 flex gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Biryani & More on Instagram"
                  className="rounded-full bg-cream/10 p-2 transition-colors hover:bg-saffron-400 hover:text-charcoal"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Biryani & More on Facebook"
                  className="rounded-full bg-cream/10 p-2 transition-colors hover:bg-saffron-400 hover:text-charcoal"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-saffron-400">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li><Link href="/#menu" className="hover:text-saffron-300">Full Menu</Link></li>
            <li><Link href="/corporate-catering" className="hover:text-saffron-300">Corporate Catering</Link></li>
            <li><Link href="/party-orders" className="hover:text-saffron-300">Party Orders</Link></li>
            <li><Link href="/#why-us" className="hover:text-saffron-300">Why Choose Us</Link></li>
            {showReviews && (
              <li><Link href="/#reviews" className="hover:text-saffron-300">Customer Reviews</Link></li>
            )}
            <li><Link href="/biryani-delivery" className="hover:text-saffron-300">Delivery Areas</Link></li>
            <li><Link href="/why-kolkata-biryani-has-potato" className="hover:text-saffron-300">Why the potato?</Link></li>
            <li><Link href="/#faq" className="hover:text-saffron-300">FAQ</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-saffron-400">
            Delivery Areas
          </h2>
          <p className="mt-4 text-xs uppercase tracking-wider text-cream/45">Our own riders</p>
          <ul className="mt-2 space-y-1.5 text-sm text-cream/75">
            {siteConfig.inHouseDeliveryAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs uppercase tracking-wider text-cream/45">
            Via Swiggy &amp; Zomato
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-cream/75">
            {siteConfig.marketplaceDeliveryAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-saffron-400">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-400" aria-hidden="true" />
              <span>
                {siteConfig.contact.address.street}, {siteConfig.contact.address.locality}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-saffron-400" aria-hidden="true" />
              <a href={getTelUrl()} className="hover:text-saffron-300">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-saffron-400" aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-saffron-300">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-5 text-center text-xs text-cream/65 sm:px-8">
        <p>FSSAI Licence No. {siteConfig.fssaiLicence}</p>
        <p className="mt-1.5">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
