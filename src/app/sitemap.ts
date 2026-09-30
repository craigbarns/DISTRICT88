export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdated = new Date("2026-09-30T00:00:00.000Z");

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/capabilities", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/materials", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/our-work", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: lastUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
