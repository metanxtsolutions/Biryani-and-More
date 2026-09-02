import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const title = "Why Does Kolkata Biryani Have a Potato?";
const path = "/why-kolkata-biryani-has-potato";

export const metadata: Metadata = {
  title,
  description:
    "The aloo in Kolkata biryani is usually explained as a poor man's substitute for meat. The historical record does not really support that. Here is what we know.",
  alternates: { canonical: `${siteConfig.url}${path}` },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description:
      "The potato in Kolkata biryani is usually explained as a substitute for meat. The history is more interesting than that.",
    url: `${siteConfig.url}${path}`,
    type: "article",
    images: [{ url: `${siteConfig.url}/images/egg-biryani.jpg` }],
  },
};

/**
 * Written to answer the query directly in the first block, which is what a
 * featured snippet pulls from. Every historical claim below is attributed and
 * hedged, because the potato story is genuinely disputed and this is a
 * restaurant's website, not a history journal.
 */
const faqs = [
  {
    question: "Why does Kolkata biryani have a potato?",
    answer:
      "The potato arrived with Nawab Wajid Ali Shah, the last ruler of Awadh, who was exiled to Metiabruz on the edge of Calcutta in 1856 and brought his Lucknowi cooks with him. Exactly why they added it is disputed. The popular story says meat was too expensive, but contemporary records do not support the idea that the Nawab was short of money. A competing account holds that potatoes were an expensive novelty at the time, and were added as a luxury rather than a saving.",
  },
  {
    question: "Was Wajid Ali Shah really too poor to afford meat?",
    answer:
      "Probably not. He kept a large menagerie in Metiabruz, including tigers and leopards, and reportedly spent around 9,000 rupees a month feeding the animals alone. That is difficult to square with a kitchen that could not afford mutton.",
  },
  {
    question: "What is the difference between Kolkata and Hyderabadi biryani?",
    answer:
      "Kolkata biryani is lighter and less fiery, the rice is paler, the spicing is more aromatic than hot, and it comes with a whole potato and often a boiled egg. Hyderabadi biryani is generally spicier, redder and more heavily masala-forward. They descend from different traditions, Awadhi and Deccani.",
  },
  {
    question: "Does every Kolkata biryani come with an egg?",
    answer:
      "Not every one, but it is common and many places include it as standard. The potato is the more reliable marker. If a biryani in Kolkata arrives without an aloo, most locals will notice.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description:
    "Why Kolkata biryani contains a potato, the popular explanation, the historical evidence that complicates it, and what is actually known.",
  image: `${siteConfig.url}/images/egg-biryani.jpg`,
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}${path}` },
};

export default function AlooStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([{ name: "Why Kolkata biryani has a potato", path }])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-cream pt-10 pb-14 sm:pt-14 sm:pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-charcoal/55">
            <Link href="/" className="hover:text-maroon-600">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-charcoal/80">The aloo</span>
          </nav>

          <p className="eyebrow mt-8 text-maroon-500">The aloo</p>
          <h1 className="font-hero mt-4 text-balance text-3xl leading-[1.05] text-charcoal sm:text-5xl">
            Why does Kolkata biryani have a potato?
          </h1>

          {/* Direct answer first: this is the block a featured snippet pulls from. */}
          <div className="mt-8 rounded-2xl border-l-4 border-maroon-600 bg-maroon-50 px-6 py-5">
            <p className="text-base leading-relaxed text-charcoal/85">
              <span className="font-semibold text-maroon-700">The short answer: </span>
              the potato came to Calcutta with Nawab Wajid Ali Shah, the last ruler of Awadh,
              exiled here in 1856 with his Lucknowi cooks. Why they put it in is genuinely
              disputed. The story everyone tells is that meat had become too expensive. The
              historical record does not really support that.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-warm">
              <Image
                src="/images/egg-biryani.jpg"
                alt="A Kolkata biryani with a whole potato and a browned boiled egg on saffron basmati"
                fill
                priority
                sizes="(min-width: 768px) 48rem, 92vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-charcoal/55">
              The aloo and the egg, the two things that tell you a biryani is from this city.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The story everyone tells */}
      <section className="bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
            The story everyone tells
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/75">
            <p>
              In 1856 the British East India Company removed Wajid Ali Shah, the tenth and
              last Nawab of Awadh, from his throne in Lucknow. He was moved to Metiabruz, then
              on the southern edge of Calcutta, and he brought his court with him: musicians,
              dancers, kite makers, and crucially his kitchen.
            </p>
            <p>
              What those cooks made was Awadhi biryani, sealed in a handi and finished slowly
              over low heat. Lighter than the Deccan style, more perfumed than fiery. That is
              the biryani this city inherited.
            </p>
            <p>
              And the story goes that the Nawab, now a deposed ruler living on a British
              pension, could no longer afford the mutton his kitchen was used to buying. So
              the cooks stretched it. Less meat, more rice, and potatoes to fill the gap.
              A poor man&apos;s substitute that a city then fell in love with.
            </p>
            <p>
              It is a good story. Most people in Kolkata grew up with some version of it.
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
            The problem with that story
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/75">
            <p>
              The Nawab does not appear to have been poor. Contemporary accounts of his years
              in Metiabruz describe a household running on a considerable scale, including a
              private menagerie stocked with tigers and leopards. By some accounts he was
              spending in the region of 9,000 rupees a month simply on feeding the animals.
            </p>
            <p>
              Whatever else that is, it is not the household of a man whose cooks were
              padding out the biryani because mutton had become unaffordable. If you can feed
              tigers, you can buy goat.
            </p>
            <p>
              So the economics at the heart of the popular story do not really hold up.
            </p>
          </div>
        </div>
      </section>

      {/* The better explanation */}
      <section className="bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
            A more likely explanation
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/75">
            <p>
              There is a second account, and it inverts the first entirely. In
              nineteenth-century India the potato was not a cheap staple. It had arrived
              relatively recently, cultivation was limited, and it was expensive and
              unfamiliar enough to be treated as something of a delicacy.
            </p>
            <p>
              On that reading, the potato was not what you added when you ran out of money.
              It was what you added to show off. An exotic import, cooked in saffron, going
              into a dish already built to impress. This version has been put forward by
              Manzilat Fatima, the Nawab&apos;s great-great-granddaughter, who cooks and writes
              about the family&apos;s food.
            </p>
            <p>
              It fits the man better. Wajid Ali Shah was a poet, a patron and a notorious
              aesthete. A kitchen serving him was far more likely to be chasing novelty than
              cutting corners.
            </p>
          </div>
        </div>
      </section>

      {/* What we actually know */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
            What we can actually say
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/75">
            <p>
              Honestly, nobody can prove either version. There is no kitchen note from
              Metiabruz explaining the decision, and both explanations are reconstructions
              made long after the fact.
            </p>
            <p>
              What is not in dispute is the outcome. A biryani travelled from Lucknow to
              Calcutta in 1856, changed here, and became something the city now treats as
              its own. The potato is the clearest marker of that change. Order a biryani
              anywhere in Kolkata and if the aloo is missing, you will hear about it.
            </p>
            <p>
              We think the luxury explanation is the more convincing one. But the more useful
              point is that the potato was never filler, whichever story you prefer. It is
              cooked in the handi with everything else, it takes on the stock and the spice,
              and for a lot of people it is the best thing in the bowl.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="Related questions" title="While we are here" />
          <Reveal delay={0.1} className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`aloo-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-xl font-semibold text-charcoal">
            Where this comes from
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
            We are a kitchen, not a history department, so it is worth saying where we read
            this. If you want to go deeper, these are good starting points.
          </p>
          <ul className="mt-5 grid gap-2.5 text-sm">
            <li>
              <a
                href="https://www.livehistoryindia.com/story/living-culture/who-put-the-potato-in-the-kolkata-biryani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon-600 underline-offset-4 hover:underline"
              >
                Live History India, Who put the potato in the Kolkata biryani?
              </a>
            </li>
            <li>
              <a
                href="https://www.sahapedia.org/the-kolkata-biryani-culture-identity-and-politics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon-600 underline-offset-4 hover:underline"
              >
                Sahapedia, The Kolkata Biryani: Culture, Identity and Politics
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Kolkata_biryani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon-600 underline-offset-4 hover:underline"
              >
                Wikipedia, Kolkata biryani
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maroon-700 py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-balance text-2xl font-semibold sm:text-3xl">
            Ours comes with the aloo. Obviously.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/75">
            Dum-cooked to order in Krishnapur and delivered across Salt Lake Sector V and New
            Town.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/menu/signature-chicken-dum-biryani"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              See the signature biryani
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outlineLight", size: "lg" })}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
