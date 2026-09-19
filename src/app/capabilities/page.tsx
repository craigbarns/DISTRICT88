import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities — Fashion, Sportswear, Cycling, Technical, Swimwear",
  description:
    "Explore the manufacturing capabilities of DISTRICT 88: Fashion & Lifestyle, Sportswear, Cycling, Technical Apparel, and Swimwear — unified by strict quality control and international communication.",
  alternates: { canonical: "/capabilities" },
};

const capabilities = [
  {
    title: "Fashion & Lifestyle",
    desc: "From everyday essentials to premium fashion collections. We handle everything from heavy cotton jerseys to delicate finishes.",
    img: "/images/fashion.jpg",
    slug: "fashion",
  },
  {
    title: "Sportswear",
    desc: "Performance garments engineered for movement. We utilize advanced synthetics and ergonomic construction.",
    img: "/images/sportswear.jpg",
    slug: "sportswear",
  },
  {
    title: "Cycling",
    desc: "Technical cycling apparel designed around performance, fit, and functionality. Aerodynamic fits and advanced sublimation.",
    img: "/images/cycling.jpg",
    slug: "cycling",
  },
  {
    title: "Technical Apparel",
    desc: "Advanced fabrics and constructions for demanding applications. Moisture management, stretch, and breathable panels.",
    img: "/images/technical.jpg",
    slug: "technical",
  },
  {
    title: "Swimwear",
    desc: "Custom swimwear combining fit, materials, and technical construction with high-stretch chlorine-resistant fabrics.",
    img: "/images/swimwear.jpg",
    slug: "swimwear",
  }
];

export default function Capabilities() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">Capabilities</h1>
        <p className="text-xl text-gray-600 max-w-2xl font-light">
          A broad spectrum of manufacturing expertise, unified by our commitment to quality.
        </p>
      </div>

      <div className="space-y-32">
        {capabilities.map((cap, i) => (
          <div key={cap.slug} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img src={cap.img} alt={`${cap.title} garment manufacturing by DISTRICT 88 in China`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold uppercase tracking-wide">{cap.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">{cap.desc}</p>
              <Link href="/contact" className="inline-block mt-4 border-b border-foreground pb-1 uppercase tracking-widest text-sm font-medium hover:text-gray-500 transition-colors">
                Start a {cap.title} Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
