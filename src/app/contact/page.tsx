import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Start Your Garment Manufacturing Project",
  description:
    "Start a garment manufacturing project with DISTRICT 88: send your tech pack, materials, timelines, and estimated quantities. Headquartered in Hong Kong, operating in Shanghai and Hangzhou, China.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${site.shortName}`,
    description:
      "Tell us about your collection and our team will review your requirements.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/contact`,
  name: "Contact DISTRICT 88 LTD",
  url: `${site.url}/contact`,
  about: { "@id": `${site.url}/#organization` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    email: site.email,
    telephone: site.phone,
    address: site.locations[0].address,
  },
};

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {/* Hidden static form — Netlify's build bot detects forms in the prerendered HTML.
          This must stay in sync with the visible ContactForm fields. */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" />
        <input name="name" />
        <input name="company" />
        <input name="email" />
        <input name="phone" />
        <select name="category"></select>
        <input name="quantity" />
        <textarea name="message"></textarea>
        <input name="attachments" type="file" />
      </form>

      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">Let's build your next collection.</h1>
        <p className="text-xl text-gray-600 font-light max-w-2xl">
          Tell us about your project and our team will review your requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <div className="hidden lg:block bg-gray-100 p-10 h-fit sticky top-32">
          <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-300 pb-4">Direct Contact</h3>
          <p className="text-gray-600 font-light mb-8">
            Prefer to discuss your project directly with our team?
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">WhatsApp</p>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="font-mono text-foreground font-medium hover:text-accent transition-colors">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
              <a href={`mailto:${site.email}`} className="font-mono text-foreground font-medium hover:text-accent transition-colors">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Head Office</p>
              <p className="text-sm text-gray-600 font-light">
                Unit No. 532B, 5/F, Star House<br />
                No. 3 Salisbury Road<br />
                Tsim Sha Tsui, Hong Kong
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
