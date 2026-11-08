import type { Metadata } from "next";
import ContactForm, { frLabels } from "@/components/ContactForm";
import { site, createBreadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Lancez Votre Production en Chine",
  description:
    "Lancez votre production en Chine : envoyez votre tech pack et vos quantités. Contact européen, MOQ dès 100 pièces, livraison DDP vers l'UE.",
  alternates: {
    canonical: "/fr/contact",
    languages: {
      en: `${site.url}/contact`,
      fr: `${site.url}/fr/contact`,
      "x-default": `${site.url}/contact`,
    },
  },
  openGraph: {
    title: "Contact | DISTRICT 88",
    description: "Envoyez votre tech pack et vos quantités — contact européen, MOQ dès 100 pièces, DDP vers l'UE.",
    images: ["/images/og-image.jpg"],
  },
};

const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "Contact", path: "/fr/contact" }]);

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/fr/contact`,
  name: "Contact DISTRICT 88 LTD",
  url: `${site.url}/fr/contact`,
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

export default function ContactFr() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {/* Formulaire statique caché — détecté par le build bot Netlify (unicité : nom "contact") */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" encType="multipart/form-data" hidden>
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
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
          Donnons vie à votre prochaine collection.
        </h1>
        <p className="text-xl text-gray-600 font-light max-w-2xl">
          Parlez-nous de votre projet : notre équipe — joignable en Europe — étudie vos besoins.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <ContactForm t={frLabels} />
        </div>

        <div className="hidden lg:block bg-gray-100 p-10 h-fit sticky top-32">
          <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-300 pb-4">Contact direct</h3>
          <p className="text-gray-600 font-light mb-8">
            Vous préférez échanger directement avec notre équipe ?
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">WhatsApp</p>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="font-mono text-foreground font-medium hover:text-accent transition-colors">
                {site.phone} (Europe)
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">E-mail</p>
              <a href={`mailto:${site.email}`} className="font-mono text-foreground font-medium hover:text-accent transition-colors">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Siège</p>
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
