import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold tracking-widest uppercase">District 88 LTD</h3>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Premium garment development &amp; manufacturing in China — from tech pack to bulk
            production and quality control. <br />
            Fashion | Sportswear | Cycling | Technical Apparel | Swimwear
          </p>
          <p className="text-gray-500 text-sm">
            Head office: Tsim Sha Tsui, Hong Kong · Operations: Shanghai &amp; Hangzhou, China
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-widest text-gray-500">Explore</h4>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-widest text-gray-500">Direct Contact</h4>
          <div className="space-y-4 text-sm text-gray-300">
            <p>
              Unit No. 532B, 5/F, Star House<br />
              No. 3 Salisbury Road<br />
              Tsim Sha Tsui, Hong Kong
            </p>
            <a href={`mailto:${site.email}`} className="block hover:text-white transition-colors">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} DISTRICT 88 LTD. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 uppercase tracking-widest text-xs">
          Hong Kong · Shanghai · Hangzhou
        </div>
      </div>
    </footer>
  );
}
