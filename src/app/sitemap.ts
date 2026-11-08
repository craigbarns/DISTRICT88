export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdated = new Date("2026-11-08T00:00:00.000Z");

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const, fr: true },
    { path: "/capabilities", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const, fr: true },
    { path: "/materials", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/our-work", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.9, changeFrequency: "weekly" as const, fr: true },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const, fr: true },
    { path: "/fr", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/fr/services", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/fr/faq", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/fr/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cycling", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/swimwear", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/sportswear", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/technical-apparel", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/insights/find-clothing-manufacturer-china", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/oem-vs-odm-clothing-manufacturing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/clothing-manufacturing-cost-china", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/clothing-moq-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/china-vs-portugal-clothing-manufacturing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/china-turkey-vietnam-apparel-sourcing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/apparel-label-requirements-eu-us", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/pfas-reach-apparel-sourcing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/apparel-import-duties-landed-cost", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/tech-pack-guide-fashion-brands", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const enUrl = (path: string) => `${site.url}${path === "" ? "" : path}`;
  const frUrl = (path: string) => `${site.url}${path === "" ? "/fr" : path}`;

  return routes.map((route) => {
    const isFrRoute = route.path.startsWith("/fr");
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${site.url}${route.path}`,
      lastModified: lastUpdated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    };
    if ("fr" in route && route.fr) {
      const enPath = route.path;
      entry.alternates = {
        languages: {
          en: enUrl(enPath),
          fr: frUrl(enPath),
          "x-default": enUrl(enPath),
        },
      };
    } else if (isFrRoute) {
      const enPath = route.path.replace(/^\/fr/, "");
      entry.alternates = {
        languages: {
          en: enUrl(enPath),
          fr: `${site.url}${route.path}`,
          "x-default": enUrl(enPath),
        },
      };
    }
    return entry;
  });
}
