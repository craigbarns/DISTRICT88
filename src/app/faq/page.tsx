import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/faq";
import { site, createBreadcrumbJsonLd, alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Garment Manufacturing in China",
  description:
    "MOQ, timelines, certifications, Incoterms, EU delivery: clear answers on starting a garment manufacturing project in China with DISTRICT 88.",
  alternates: alternatesFor('/faq'),
  openGraph: {
    title: `FAQ | ${site.shortName}`,
    description:
      "Minimums, timelines, certifications, Incoterms and EU delivery — everything brands ask before manufacturing in China.",
    images: ["/images/og-image.jpg"],
  },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "FAQ", path: "/faq" }]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-16">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">FAQ</p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          Manufacturing in China, Answered.
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
          The questions international brands ask us most often before starting a garment
          development and manufacturing project with DISTRICT 88.
        </p>
      </div>

      <FaqAccordion items={faqs} />

      <div className="mt-20 text-center">
        <p className="text-gray-600 font-light mb-6">Have a question that is not covered here?</p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors"
        >
          Ask Our Team
        </Link>
      </div>
    </div>
  );
}
