import type { Metadata } from "next";
import Link from "next/link";
import { createBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technical Apparel Manufacturer in China",
  description:
    "Technical apparel manufacturing in China for European brands: waterproof-breathable shells, bonded softshells, utility garments — membranes 10k–20k, DDP to the EU.",
  alternates: { canonical: "/technical-apparel" },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "Technical Apparel", path: "/technical-apparel" }]);

const capabilities = [
  {
    t: "Waterproof-breathable shells",
    d: "2-layer and 3-layer laminated membranes rated 10k/10k to 20k/20k, fully taped or welded seams, DWR finishing specified fluorine-free where your market requires it, storm and zip garage detailing.",
  },
  {
    t: "Softshells & insulation",
    d: "Bonded softshell constructions, ripstop outer faces, insulated and padded jacket programs — engineered for movement, warmth management and packability.",
  },
  {
    t: "Utility & workwear-grade",
    d: "Multi-pocket utility vests and reinforced constructions with bartack stress points, heavy-duty hardware, and wear-testing on the failure points that matter.",
  },
  {
    t: "Seam & construction engineering",
    d: "Seam selection matched to stretch and stress (taped, welded, flatlock, bartack), waterproof zip integration, and construction QC at every critical junction — not just the final inspection.",
  },
];

export default function TechnicalApparel() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Technical Apparel</p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          Technical Apparel Manufacturing in China, for European Brands.
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Technical garments earn their label in the details: a seam that tapes properly, a membrane
          that keeps its rating after washing, a finish that complies with EU chemistry rules. We
          develop and manufacture shells, softshells and utility programs for European brands —
          laminated in partner facilities, tested to spec, and shipped DDP to the EU.
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
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">EU compliance, built into the program</h2>
        <p className="text-gray-600 font-light leading-relaxed mb-4">
          Technical apparel carries the heaviest compliance load: membrane laminates, DWR chemistry
          (PFAS-free where required), trims and prints — all within REACH scope, all documented.
        </p>
        <ul className="space-y-3">
          {[
            "Mill declarations and OEKO-TEX® Standard 100 test reports for the exact qualities used.",
            "Fluorine-free DWR specification with wash-durability testing on your program.",
            "Labeling set aligned with EU requirements, and GPSR documentation support.",
            "Genuine questions answered in writing before sampling — not discovered at customs.",
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
          Develop your technical line.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:bg-accent transition-colors">
            Start a Technical Project
          </Link>
          <Link href="/insights/pfas-reach-apparel-sourcing" className="px-10 py-4 border border-foreground font-medium uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
            PFAS & REACH Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
