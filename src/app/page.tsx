import { Hero } from "@/components/sections/hero";
import { OrderChannels } from "@/components/sections/order-channels";
import { SignatureBiryanis } from "@/components/sections/signature-biryanis";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FullMenu } from "@/components/sections/full-menu";
import { CorporateOrders } from "@/components/sections/corporate-orders";
import { Reviews } from "@/components/sections/reviews";
import { DeliveryAreas } from "@/components/sections/delivery-areas";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { OrderAndContact } from "@/components/sections/order-and-contact";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema()) }}
      />
      <Hero />
      <OrderChannels />
      <SignatureBiryanis />
      <WhyChooseUs />
      <FullMenu />
      <CorporateOrders />
      <Reviews />
      <DeliveryAreas />
      <About />
      <Faq />
      <OrderAndContact />
    </>
  );
}
