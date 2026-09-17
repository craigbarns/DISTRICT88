export const metadata = {
  title: "Premium Fabrics & Materials | DISTRICT 88",
  description: "Explore our material expertise, from premium heavyweight cotton to advanced technical synthetics.",
};

const materials = [
  {
    category: "Cotton & Blends",
    items: "Premium jersey, heavyweight cotton, French Terry, and fleece. (Organic cotton available when certified).",
    app: "Premium T-shirts, hoodies, loungewear.",
    img: "/images/cotton.jpg"
  },
  {
    category: "Performance Synthetics",
    items: "Polyester, nylon, elastane blends, and specialized mesh.",
    app: "Sportswear, cycling jerseys, technical outerwear.",
    img: "/images/synthetic.jpg"
  },
  {
    category: "Technical Textiles",
    items: "Quick-dry fabrics, moisture-wicking materials, breathable membranes, and 4-way stretch fabrics.",
    app: "Running gear, compression wear, high-performance cycling.",
    img: "/images/tech-material.jpg"
  },
];

export default function Materials() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">Materials Matter.</h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          The foundation of every exceptional garment is the fabric. We source, develop, and test materials to meet the specific demands of fashion and performance apparel.
        </p>
      </div>

      <div className="space-y-24">
        {materials.map((mat, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`h-[500px] overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
              <img src={mat.img} alt={mat.category} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className={`space-y-6 ${i % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
              <h2 className="text-3xl font-bold uppercase tracking-wide">{mat.category}</h2>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Materials</h4>
                <p className="text-gray-600 font-light leading-relaxed">{mat.items}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Applications</h4>
                <p className="text-gray-600 font-light leading-relaxed">{mat.app}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
