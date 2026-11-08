import type { Metadata } from "next";
import { site, alternatesFor, createBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fabrication Vêtements Clé en Main en Chine",
  description:
    "Un seul partenaire du tech pack à la livraison : développement, sourcing, échantillonnage, fabrication, contrôle qualité AQL et logistique DDP vers l'Europe.",
  alternates: {
    canonical: "/fr/services",
    languages: {
      en: `${site.url}/services`,
      fr: `${site.url}/fr/services`,
      "x-default": `${site.url}/services`,
    },
  },
  openGraph: {
    title: "Services | DISTRICT 88",
    description:
      "Développement produit, sourcing, échantillonnage, fabrication, contrôle qualité et logistique DDP vers l'Europe.",
    images: ["/images/og-image.jpg"],
  },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "Services", path: "/fr/services" }]);

const services = [
  {
    title: "Développement Produit",
    desc: "Transformer croquis et idées en réalité technique. Patronage, gradation et solutions de construction.",
  },
  {
    title: "Sourcing Matières",
    desc: "Notre réseau en Chine pour sourcer exactement les tissus et fournitures de votre collection, en équilibrant qualité, performance et coût.",
  },
  {
    title: "Échantillonnage",
    desc: "Prototypage de précision. Un échantillonnage itératif pour garantir tombé, drapé et construction conformes à vos standards avant la série.",
  },
  {
    title: "Fabrication",
    desc: "Lignes de production adaptables, du vêtement mode délicat au textile technique complexe.",
  },
  {
    title: "Contrôle Qualité",
    desc: "Protocoles d'inspection rigoureux intégrés à chaque étape de la fabrication — pas seulement à la fin.",
  },
  {
    title: "Emballage & Coordination",
    desc: "Finitions personnalisées, packaging marque blanche et coordination de l'expédition internationale, jusqu'à la livraison DDP en Europe.",
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services de fabrication textile — DISTRICT 88 LTD",
  itemListElement: services.map((srv, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: srv.title,
      description: srv.desc,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: "Europe",
    },
  })),
};

export default function ServicesFr() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Une Infrastructure Complète de Fabrication.
          </h1>
        </div>
        <div className="flex items-end">
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Nous fournissons une infrastructure de fabrication de bout en bout : les marques se
            concentrent sur le design et le marketing, nous gérons l'exécution technique — du tech
            pack à la livraison DDP en Europe.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-24">
        {services.map((srv, i) => (
          <div key={i} className="border-t border-border pt-6">
            <div className="text-gray-400 font-mono text-sm mb-4">0{i + 1}</div>
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">{srv.title}</h3>
            <p className="text-gray-600 font-light leading-relaxed">{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
