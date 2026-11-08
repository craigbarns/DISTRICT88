import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allInsights, type Insight } from "@/lib/insights";
import { site } from "@/lib/site";

export default function ArticlePage({ article }: { article: Insight }) {
  const related = allInsights.filter((i) => i.slug !== article.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${site.url}/insights/${article.slug}`,
    headline: article.h1,
    description: article.metaDesc,
    datePublished: article.published,
    author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/insights/${article.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${site.url}/insights` },
      { "@type": "ListItem", position: 3, name: article.h1, item: `${site.url}/insights/${article.slug}` },
    ],
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{article.kicker}</p>
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-tight">{article.h1}</h1>
      <p className="text-sm text-gray-400 uppercase tracking-widest mb-12">
        Published {new Date(article.published).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {site.shortName} Team
      </p>

      {article.intro.map((p, i) => (
        <p key={i} className={`text-gray-600 font-light leading-relaxed mb-6 ${i === 0 ? "text-xl" : "text-lg"}`}>
          {p}
        </p>
      ))}

      {article.sections.map((s, i) => (
        <section key={i} className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6">{s.h2}</h2>
          {s.paras?.map((p, j) => (
            <p key={j} className="text-lg text-gray-600 font-light leading-relaxed mb-5">{p}</p>
          ))}
          {s.listTitle && <p className="text-lg text-foreground font-medium mb-4">{s.listTitle}</p>}
          {s.list && (
            <ul className="space-y-3 mb-6">
              {s.list.map((li, j) => (
                <li key={j} className="flex gap-3 text-gray-600 font-light leading-relaxed">
                  <span className="text-foreground font-bold shrink-0">—</span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8">Frequently asked</h2>
        <div className="border-t border-border">
          {article.faq.map((f, i) => (
            <div key={i} className="border-b border-border py-6">
              <h3 className="text-lg font-medium mb-2">{f.q}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 bg-gray-100 p-10">
        <p className="text-xl text-foreground font-light leading-relaxed mb-8">{article.cta}</p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-3 px-8 py-4 bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:bg-accent transition-colors"
        >
          <span>Start Your Project</span>
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* Related */}
      <section className="mt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Keep reading</h2>
        <div className="space-y-4">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/insights/${r.slug}`}
              className="block border-b border-border pb-4 group"
            >
              <span className="text-lg font-medium group-hover:text-accent transition-colors">{r.h1}</span>
              <span className="block text-sm text-gray-400 mt-1">{r.kicker}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
