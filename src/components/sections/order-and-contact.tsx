import { Phone, MapPin, Clock, ExternalLink, Building2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/lib/site-config";

export function OrderAndContact() {
  return (
    <section id="order" className="bg-charcoal py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow justify-center text-saffron-400">Order now</p>
          <h2 className="font-display mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-5xl">
            Fresh dum biryani is one tap away
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Order on your preferred platform, or message us directly and our own riders
            bring it to you in Sector V and New Town.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "whatsapp", size: "lg" })}
          >
            Order on WhatsApp
          </a>
          <a
            href={siteConfig.ordering.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Swiggy
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          {/* Hidden until the real Zomato listing URL is set in site-config. */}
          {siteConfig.ordering.zomato && (
            <a
              href={siteConfig.ordering.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Zomato
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </Reveal>

        <Reveal delay={0.15} className="mt-6">
          <a
            href="/corporate-catering"
            className="inline-flex items-center gap-2 text-sm font-medium text-saffron-300 underline-offset-4 hover:underline"
          >
            <Building2 className="h-4 w-4" aria-hidden="true" />
            Planning an office lunch or party? See bulk orders
          </a>
        </Reveal>

        <Reveal
          id="contact"
          delay={0.2}
          className="mx-auto mt-16 grid max-w-2xl gap-6 border-t border-cream/12 pt-10 text-left sm:grid-cols-3"
        >
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-saffron-400" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-cream/50">Call</p>
              <a href={getTelUrl()} className="text-sm font-medium hover:text-saffron-300">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-saffron-400" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-cream/50">Kitchen</p>
              <p className="text-sm font-medium">
                {siteConfig.contact.address.street}, {siteConfig.contact.address.locality}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-saffron-400" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-cream/50">Hours</p>
              <p className="text-sm font-medium">{siteConfig.contact.hours.display}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
