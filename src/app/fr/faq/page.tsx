import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { faqsFr } from "@/lib/faq-fr";
import { site, createBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Fabrication Vêtements en Chine",
  description:
    "MOQ, délais, certifications, Incoterms, livraison UE : des réponses claires pour lancer votre fabrication de vêtements en Chine avec District 88.",
  alternates: {
    canonical: "/fr/faq",
    languages: {
      en: `${site.url}/faq`,
      fr: `${site.url}/fr/faq`,
      "x-default": `${site.url}/faq`,
    },
  },
  openGraph: {
    title: "FAQ | DISTRICT 88",
    description: "MOQ, délais, certifications, Incoterms et livraison UE — tout ce que les marques demandent avant de produire en Chine.",
    images: ["/images/og-image.jpg"],
  },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "FAQ", path: "/fr/faq" }]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsFr.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqFrPage() {
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
          Produire en Chine, sans zone d'ombre.
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
          Les questions que les marques européennes nous posent le plus souvent avant de lancer un
          projet de développement et de fabrication textile avec DISTRICT 88.
        </p>
      </div>

      <FaqAccordion items={faqsFr} />

      <div className="mt-20 text-center">
        <p className="text-gray-600 font-light mb-6">Une question qui n'est pas couverte ici ?</p>
        <Link
          href="/fr/contact"
          className="inline-block px-10 py-4 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors"
        >
          Contactez notre équipe
        </Link>
      </div>
    </div>
  );
}
