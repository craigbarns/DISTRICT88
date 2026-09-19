import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/capabilities", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/materials", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/our-work", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
