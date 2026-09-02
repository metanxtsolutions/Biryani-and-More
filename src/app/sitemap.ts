import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Add every new route here as it ships. A page Google cannot discover from the
 * sitemap or an internal link may as well not exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/corporate-catering`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/party-orders`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/biryani-delivery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
