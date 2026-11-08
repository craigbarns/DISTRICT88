"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { navLinks, frNavLinks, site } from "@/lib/site";

const frFooterBlurb = (
  <>
    Développement &amp; fabrication textile premium en Chine — du tech pack à la production
    en série et au contrôle qualité. <br />
    Mode | Sportswear | Cyclisme | Vêtements techniques | Maillots de bain
  </>
);

export default function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const fr = pathname === "/fr" || pathname.startsWith("/fr/");

  return (
    <>
      <Navbar
        links={fr ? frNavLinks : navLinks}
        cta={fr ? "Démarrer un projet" : "Start a Project"}
        ctaHref={fr ? "/fr/contact" : "/contact"}
        darkHeroPaths={fr ? ["/fr"] : ["/"]}
      />
      <main className="min-h-screen">{children}</main>

      {/* Discreet WhatsApp Icon */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={fr ? "Discutez avec DISTRICT 88 sur WhatsApp" : "Chat with DISTRICT 88 on WhatsApp"}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      >
        <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground shadow-lg border border-gray-100">
          {fr ? "Un projet ? Parlons-en." : "Have a project? Talk to our team."}
        </span>
        <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center rounded-none shadow-xl hover:bg-accent transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
        </div>
      </a>

      <Footer
        links={fr ? frNavLinks : navLinks}
        blurb={fr ? frFooterBlurb : undefined}
        exploreLabel={fr ? "Explorer" : undefined}
        contactLabel={fr ? "Contact direct" : undefined}
        contactLinkLabel={fr ? "Contact" : undefined}
        rightsLabel={fr ? "Tous droits réservés." : undefined}
      />
    </>
  );
}
