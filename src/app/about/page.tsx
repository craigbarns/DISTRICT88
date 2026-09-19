import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Hong Kong HQ, China Operations",
  description:
    "DISTRICT 88 LTD is a garment development and manufacturing partner headquartered in Hong Kong with operations in Shanghai and Hangzhou, China — supporting international fashion, sportswear, and technical apparel brands.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
          Built in China.<br />Made for International Brands.
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          DISTRICT 88 LTD is a garment development and manufacturing partner headquartered in Hong Kong with operations in Shanghai and Hangzhou. We support international fashion, sportswear, and lifestyle brands throughout product development, material sourcing, sampling, and production in China.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <div className="bg-gray-100 p-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">Our Core Focus</h2>
          <ul className="space-y-6">
            {[
              "Product Expertise",
              "Material Knowledge",
              "Technical Development",
              "Manufacturing Scale",
              "Strict Quality Focus",
              "International Communication"
            ].map((item, i) => (
              <li key={i} className="text-xl font-medium tracking-wide border-b border-gray-300 pb-2">{item}</li>
            ))}
          </ul>
        </div>
        <div className="h-full min-h-[400px] relative">
          <img 
            src="/images/facility.jpg" 
            alt="DISTRICT 88 garment manufacturing facility details in China" 
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </div>

      <div className="border-t border-border pt-16">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-12 text-center">Local Presence. International Business.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Hong Kong</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Head Office</p>
            <p className="text-gray-600 font-light">
              DISTRICT 88 LTD<br />
              Unit No. 532B, 5/F, Star House<br />
              No. 3 Salisbury Road<br />
              Tsim Sha Tsui
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Shanghai</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">China Operations</p>
            <p className="text-gray-600 font-light">Shanghai, China</p>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Hangzhou</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">China Operations</p>
            <p className="text-gray-600 font-light">Hangzhou, Zhejiang, China</p>
          </div>
        </div>
      </div>
    </div>
  );
}
