import type { Metadata } from "next";
import Link from "next/link";
import { createBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cycling Apparel Manufacturer in China",
  description:
    "Cycling apparel manufacturing in China for European brands: race-fit jerseys, bib shorts with technical chamois, sublimation printing — MOQ 100–300, DDP to the EU.",
  alternates: { canonical: "/cycling" },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "Cycling", path: "/cycling" }]);

const capabilities = [
  {
    t: "Race-fit jerseys",
    d: "Aerodynamic paneling, full sublimation printing with Italian inks, silicone grippers, full-length and aero sleeves, reflective detailing for low-light rides.",
  },
  {
    t: "Bib shorts & knickers",
    d: "Multi-density chamois integration, high-compression Lycra®-type powerbands, laser-cut leg grips, flatlock and bonded seams for pressure-free contact points.",
  },
  {
    t: "Thermal & layering",
    d: "Thermal arm and leg warmers, windproof gilets, winter jackets with brushed interiors and water-repellent shells for variable European seasons.",
  },
  {
    t: "Development support",
    d: "Fit engineering on real body data, pad selection guidance, fabric testing for stretch, recovery and colorfastness under sweat and UV.",
  },
];

export default function Cycling() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Cycling Apparel</p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          Cycling Apparel, Built in China for European Brands.
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Cycling is unforgiving: 200 km in the saddle turns every seam, every pad density and every
          gripper into a product decision. We develop and manufacture race-fit jerseys, bib shorts
          and layering for European cycling brands — from fit engineering to Italian sublimation and
          AQL 2.5 final inspection, with DDP delivery to the EU.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {capabilities.map((c) => (
          <div key={c.t} className="border-t border-border pt-6">
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-3">{c.t}</h2>
            <p className="text-gray-600 font-light leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-8 border border-border bg-gray-50/50">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">MOQ</div>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            100–300 pieces per style/colorway — viable for capsule cycling programs and colorway extensions.
          </p>
        </div>
        <div className="p-8 border border-border bg-gray-50/50">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Timeline</div>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            7–14 days sampling from confirmed tech pack; 30–45 days bulk after pre-production sample sign-off.
          </p>
        </div>
        <div className="p-8 border border-border bg-gray-50/50">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">EU-ready</div>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            European contact, FOB/CIF/DDP Incoterms with EU customs clearance, and materials selected for EU retail compliance.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
          Plan your cycling program.
        </h2>
        <p className="text-lg text-gray-600 font-light mb-10">
          Read the fabric guides first, or send the tech pack directly — either way the quote comes
          back structured and comparable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:bg-accent transition-colors">
            Start a Cycling Project
          </Link>
          <Link href="/insights/tech-pack-guide-fashion-brands" className="px-10 py-4 border border-foreground font-medium uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
            Tech Pack Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
