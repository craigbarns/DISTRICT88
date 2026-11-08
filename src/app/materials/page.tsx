import type { Metadata } from "next";
import Link from "next/link";
import { createBreadcrumbJsonLd, alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fabric Sourcing & Materials in China",
  description:
    "Fabric sourcing in China: premium cottons, French Terry, performance synthetics, recycled textiles and waterproof-breathable membranes, tested to EU standards.",
  alternates: alternatesFor('/materials'),
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Materials", path: "/materials" },
]);

const materials = [
  {
    category: "Cotton & Premium Knits",
    intro:
      "The backbone of premium fashion programs. Our sourcing network in the Yangtze River Delta covers the full weight spectrum — from lightweight organic jersey to heavyweight fleece — with custom dyeing available on dedicated yarn lots.",
    items: [
      "Combed organic cotton jersey, 180–320 GSM — premium tees and everyday essentials.",
      "Heavyweight French Terry, 400–500 GSM — structured hoodies and premium sweat sets.",
      "Brushed fleece and interlock knits — loungewear, crewnecks, and winter layers.",
      "Custom-dyed yarns and garment washing (stone, enzyme, pigment) on request.",
    ],
    app: "Premium T-shirts, hoodies, sweatpants, loungewear, cut-and-sew fashion.",
    img: "/images/cotton.webp",
  },
  {
    category: "Performance Synthetics",
    intro:
      "Engineered knits and wovens for movement, compression, and durability — developed with mills specialised in activewear and cycling programs, including recycled chains for brands with sustainability targets.",
    items: [
      "Polyamide/elastane 4-way stretch — compression, cycling bibs, second-skin fits.",
      "Moisture-wicking micro-polyester — training tops, running gear, teamwear.",
      "Seamless circular knits and specialised meshes — ergonomic zones, ventilation.",
      "Recycled RPET and regenerated nylon (ECONYL-compatible) — verified chain of custody.",
    ],
    app: "Sportswear, cycling jerseys and bibs, compression wear, activewear.",
    img: "/images/synthetic.webp",
  },
  {
    category: "Technical Textiles & Membranes",
    intro:
      "For demanding applications: waterproof-breathable systems, stretch shells, and swimwear fabrics tested for chlorine and UV exposure — laminated, taped, and bonded in our partner facilities.",
    items: [
      "2-layer and 3-layer laminated waterproof-breathable membranes, 10k/10k to 20k/20k ratings.",
      "DWR water-repellent coatings and fully taped or bonded seams for shells and outerwear.",
      "High-stretch chlorine-resistant swimwear fabrics with UV protection (UPF-rated options).",
      "Ripstop and insulation programs — windproof gilets, utility vests, padded jackets.",
    ],
    app: "Technical outerwear, waterproof shells, softshells, swimwear and rashguards.",
    img: "/images/tech-material.webp",
  },
];

export default function Materials() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">Materials Matter.</h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          The foundation of every exceptional garment is the fabric. We source, develop, and test
          materials to meet the specific demands of European fashion and performance apparel brands —
          balancing handfeel, performance, cost, and compliance.
        </p>
      </div>

      <div className="space-y-24">
        {materials.map((mat, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`h-[500px] overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
              <img
                src={mat.img}
                alt={`${mat.category} sourced and tested by DISTRICT 88 for garment manufacturing in China`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className={`space-y-6 ${i % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
              <h2 className="text-3xl font-bold uppercase tracking-wide">{mat.category}</h2>
              <p className="text-gray-600 font-light leading-relaxed">{mat.intro}</p>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">What we source</h4>
                <ul className={`space-y-2 text-gray-600 font-light leading-relaxed ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  {mat.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Applications</h4>
                <p className="text-gray-600 font-light leading-relaxed">{mat.app}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testing & Verification */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-100 p-12">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Testing &amp; Verification</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-6">
            Every material program is verified before bulk: fabric laboratory testing, shrinkage and
            colour-fastness checks, colour strike-offs and lab dips on your exact quality, then
            in-line and final AQL 2.5 inspections during production.
          </p>
          <p className="text-gray-600 font-light leading-relaxed">
            You receive photo-verified reports at each stage, so fabric decisions are documented —
            not assumed. Trims follow the same discipline: YKK zippers, custom hardware, woven
            labels, and FSC-certified hangtags sourced to specification.
          </p>
        </div>
        <div className="bg-foreground text-background p-12">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-6 text-white">EU-Ready &amp; Certified</h2>
          <p className="text-gray-300 font-light leading-relaxed mb-6">
            Our audited partner mills conform to recognised standards for European retail:
            OEKO-TEX® Standard 100 for harmful substances, GRS for recycled chains of custody, GOTS
            for organic cotton (certified upon request), and BSCI / Sedex social audits.
          </p>
          <p className="text-gray-300 font-light leading-relaxed">
            Tell us your destination market and certifications during the brief, and we match the
            right mills before sampling — so compliance is built into the program, not retrofitted
            before dispatch.
          </p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
          Need a specific fabric?
        </h2>
        <p className="text-lg text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Send your reference, composition, or a physical sample — our sourcing team matches it
          within the Yangtze River Delta network and quotes like-for-like.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-4 px-10 py-5 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors"
        >
          <span>Request a Fabric Quote</span>
        </Link>
      </div>
    </div>
  );
}
