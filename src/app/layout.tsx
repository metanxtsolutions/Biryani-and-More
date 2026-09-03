import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { StickyOrderBar } from "@/components/layout/sticky-order-bar";
import { siteConfig } from "@/lib/site-config";
import { getLocalBusinessSchema, getRestaurantSchema } from "@/lib/schema";

/**
 * Per Brand & Logo Guidelines V1.0: "Archivo does everything" — display,
 * subhead and body copy all share this one family (weight/tracking set per
 * use), and it's also the logo wordmark's typeface. JetBrains Mono is the
 * separate LABEL face for taglines, eyebrows and FSSAI lines.
 */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Authentic Dum Biryani in Kolkata`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.seoKeywords],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Authentic Dum Biryani in Kolkata`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Authentic Dum Biryani in Kolkata`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: ["Dvkku-Di3X39sU6yjXW7F_HKKXdHVqJUUQPX4MAMYEI", "-R9C-TffVRE4XdvpM-2RA5zM3rUOL21rcy9nv-Yhkjc"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getRestaurantSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <StickyOrderBar />
      </body>
    </html>
  );
}
