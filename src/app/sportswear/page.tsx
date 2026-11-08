import type { Metadata } from "next";
import Link from "next/link";
import { createBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sportswear Manufacturer in China",
  description:
    "Sportswear manufacturing in China for European brands: activewear, compression, seamless knits, moisture-wicking programs — MOQ 100–300, DDP to the EU.",
  alternates: { canonical: "/sportswear" },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "Sportswear", path: "/sportswear" }]);

const capabilities = [
  {
    t: "Activewear & training",
    d: "Ergonomic training garments on moisture-wicking micro-polyester, ergonomic paneling for movement, mesh ventilation zones, and durable constructions for gym and teamwear programs.",
  },
  {
    t: "Compression & base layers",
    d: "Polyamide/elastane 4-way stretch programs with graded compression, flatlock and bonded seam options, and fabrics tested for stretch, recovery and pilling.",
  },
  {
    t: "Seamless & knits",
    d: "Seamless circular knitwear for ergonomic zoning, specialized meshes, and body-mapped constructions that reduce seams where chafe or breathability matters.",
  },
  {
    t: "Performance validation",
    d: "Fabric and garment testing turned into buyer requirements: wicking and drying behavior, stretch and recovery, colorfastness to sweat and washing — documented before bulk.",
  },
];

export default function Sportswear() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Sportswear</p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          Sportswear Manufacturing in China, for European Brands.
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Performance apparel is decided at the fabric level and proven at the seam level. We
          develop and manufacture activewear, compression and seamless programs for European brands
          — performance synthetics sourced in the Yangtze River Delta, fit engineering, testing and
          AQL 2.5 final inspection, with MOQ from 100 pieces and DDP delivery to the EU.
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

      <div className="bg-foreground text-background p-10 md:p-12 mb-20">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-6 text-white">From claims to specifications</h2>
        <p className="text-gray-300 font-light leading-relaxed">
          "Moisture-wicking" is a claim; a wicking test on your exact fabric is a fact. Our programs
          convert performance language into documented buyer requirements — fabric tests, seam
          standards and QC levels written into the tech pack — so the garment that ships performs
          like the garment that was sold.
        </p>
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
          Build your activewear line.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:bg-accent transition-colors">
            Start a Sportswear Project
          </Link>
          <Link href="/insights/find-clothing-manufacturer-china" className="px-10 py-4 border border-foreground font-medium uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
            Supplier Selection Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
