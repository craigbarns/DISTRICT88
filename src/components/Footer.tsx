import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold tracking-widest uppercase">District 88 LTD</h3>
          <p className="text-gray-400 max-w-sm">
            Garment Development & Manufacturing in China. <br />
            Fashion | Sportswear | Cycling | Technical Apparel | Swimwear
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-widest text-gray-500">Head Office</h4>
          <p className="text-sm text-gray-300">
            Unit No. 532B, 5/F, Star House<br />
            No. 3 Salisbury Road<br />
            Tsim Sha Tsui, Hong Kong
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-widest text-gray-500">China Operations</h4>
          <p className="text-sm text-gray-300">
            Shanghai<br />
            Hangzhou
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/capabilities" className="hover:text-white transition-colors">Capabilities</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/materials" className="hover:text-white transition-colors">Materials</Link>
        </div>
        <div>
          &copy; {new Date().getFullYear()} DISTRICT 88 LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
