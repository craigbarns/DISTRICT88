import type { Metadata } from "next";
import Link from "next/link";
import { createBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Swimwear Manufacturer in China",
  description:
    "Swimwear manufacturing in China for European brands: chlorine-resistant stretch fabrics, UV-protective rashguards, regenerated nylon bikinis — MOQ 100–300, DDP to the EU.",
  alternates: { canonical: "/swimwear" },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "Swimwear", path: "/swimwear" }]);

const capabilities = [
  {
    t: "Bikinis & one-pieces",
    d: "High-stretch, chlorine-resistant fabrics with UPF-rated options, regenerated nylon (ECONYL-compatible) chains, adjustable ties, molded cups and hardware that survives salt and pool chemistry.",
  },
  {
    t: "Rashguards & surf",
    d: "UV-protective long and short sleeves, flatlock seams that will not chafe, quick-dry body fabrics, graphics-ready surfaces for sublimation and placement prints.",
  },
  {
    t: "Boardshorts & beach",
    d: "Quick-dry woven shorts with secure pockets and drawcord systems, 4-way stretch hybrids, welded or taped details where the look demands it.",
  },
  {
    t: "Fit & testing discipline",
    d: "Stretch and recovery testing, opacity control (the classic swimwear failure), chlorine and UV exposure checks, and fit development on real wear-tests before bulk.",
  },
];

export default function Swimwear() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Swimwear</p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          Swimwear Manufacturing in China, for European Brands.
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Swimwear fails in public: stretch that dies after five swims, lining that turns opaque
          problems visible, seams that chafe. We develop and manufacture swim programs for European
          brands — chlorine-resistant and UV-protective fabrics, regenerated nylon chains, fit
          development and final QC — with MOQ from 100 pieces and DDP delivery to the EU.
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

      <div className="bg-gray-100 p-10 md:p-12 mb-20">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">The swimwear failures we design against</h2>
        <ul className="space-y-3">
          {[
            "Stretch loss: fabrics selected and tested for recovery after repeated chlorine and UV exposure, not just first-wear feel.",
            "Opacity: white and light colorways verified wet and stretched before bulk approval.",
            "Chafe points: seam selection and lining choices matched to movement — the reason swim fit development includes real wear-testing.",
            "Hardware corrosion: metal-free or coated hardware specified for pool and salt environments.",
          ].map((li, i) => (
            <li key={i} className="flex gap-3 text-gray-600 font-light leading-relaxed">
              <span className="text-foreground font-bold shrink-0">—</span>
              <span>{li}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
          Start your swim program.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:bg-accent transition-colors">
            Start a Swimwear Project
          </Link>
          <Link href="/insights/clothing-moq-guide" className="px-10 py-4 border border-foreground font-medium uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
            MOQ Planning Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
