import type { Metadata } from "next";
import Link from "next/link";
import { allInsights } from "@/lib/insights";
import { createBreadcrumbJsonLd, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights — Garment Sourcing Guides for European Brands",
  description:
    "Practical guides for European brands manufacturing in China: MOQs, costs, tech packs, compliance (REACH, GPSR), logistics and country comparisons.",
  alternates: { canonical: "/insights" },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "Insights", path: "/insights" }]);

export default function InsightsIndex() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Insights</p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          Sourcing Guides for European Brands.
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Field notes from garment development and manufacturing in China — MOQs, costs, tech
          packs, EU compliance and country comparisons. Written for brand teams, not search engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {allInsights.map((a) => (
          <Link key={a.slug} href={`/insights/${a.slug}`} className="group border-t border-border pt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{a.kicker}</p>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors leading-snug">
              {a.h1}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-sm">{a.metaDesc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-lg text-gray-600 mb-8 font-light">Have a project these guides should be applied to?</p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}
