export const metadata = {
  title: "Manufacturing Services | DISTRICT 88",
  description: "End-to-end garment manufacturing services in China from development to quality control.",
};

const services = [
  {
    title: "Product Development",
    desc: "Turning sketches and ideas into technical reality. We assist with pattern making, grading, and construction solutions.",
  },
  {
    title: "Material Sourcing",
    desc: "Leveraging our network in China to source the exact fabrics and trims your collection requires, balancing quality, performance, and cost.",
  },
  {
    title: "Sampling",
    desc: "Precision prototyping. We provide iterative sampling to ensure fit, fabric drape, and construction meet your exact standards before bulk production.",
  },
  {
    title: "Manufacturing",
    desc: "Scalable production lines equipped for both delicate fashion garments and complex technical sportswear.",
  },
  {
    title: "Quality Control",
    desc: "Rigorous inspection protocols integrated at every stage of the manufacturing process, not just at the end.",
  },
  {
    title: "Packaging & Coordination",
    desc: "Custom finishing, private label packaging, and coordination for seamless international dispatch.",
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">Comprehensive Manufacturing Solutions.</h1>
        </div>
        <div className="flex items-end">
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            We provide an end-to-end manufacturing infrastructure, allowing brands to focus on design and marketing while we handle technical execution.
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
