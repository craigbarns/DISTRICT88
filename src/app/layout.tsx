import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  slogan: site.tagline,
  knowsAbout: site.categories,
  keywords: site.keywords.join(", "),
  address: site.locations[0].address,
  location: site.locations.map((loc) => ({
    "@type": "Place",
    name: `${site.name} — ${loc.name} (${loc.role})`,
    address: loc.address,
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phone,
      availableLanguage: ["English", "Chinese"],
      areaServed: "Worldwide",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Premium Garment Manufacturer in China`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, email: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Premium Garment Manufacturer in China`,
    description: site.description,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "DISTRICT 88 — premium garment development and manufacturing in China",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Premium Garment Manufacturer in China`,
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EZE5Z3DLD3" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EZE5Z3DLD3');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>

        {/* Discreet WhatsApp Icon */}
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with DISTRICT 88 on WhatsApp"
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
        >
          <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground shadow-lg border border-gray-100">
            Have a project? Talk to our team.
          </span>
          <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center rounded-none shadow-xl hover:bg-accent transition-colors">
            {/* Minimalist Chat Icon simulating WhatsApp */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </div>
        </a>

        <Footer />
      </body>
    </html>
  );
}
