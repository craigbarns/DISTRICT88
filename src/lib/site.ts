export const site = {
  name: "DISTRICT 88 LTD",
  shortName: "DISTRICT 88",
  legalName: "DISTRICT 88 LTD",
  url: "https://district-88.com",
  email: "contact@district-88.com",
  phone: "+33 6 17 18 29 79",
  whatsapp: "https://wa.me/33617182979",
  linkedin: "https://www.linkedin.com/company/district-88-ltd",
  description:
    "Garment manufacturing in China for European brands: development, sourcing, sampling, bulk production and QC. MOQ from 100 pieces, DDP delivery to the EU.",
  tagline: "Premium Garment Development & Manufacturing in China",
  keywords: [
    "garment manufacturer China",
    "clothing manufacturer Hong Kong",
    "apparel manufacturing China",
    "sportswear manufacturer",
    "cycling apparel manufacturer",
    "swimwear manufacturer",
    "technical apparel manufacturing",
    "fashion garment factory China",
    "OEM clothing manufacturer",
    "private label apparel China",
    "tech pack development",
    "garment sampling China",
    "apparel quality control China",
  ],
  categories: [
    "Fashion & Lifestyle",
    "Sportswear",
    "Cycling",
    "Technical Apparel",
    "Swimwear",
  ],
  locations: [
    {
      name: "Hong Kong",
      role: "Head Office",
      address: {
        streetAddress: "Unit No. 532B, 5/F, Star House, No. 3 Salisbury Road",
        addressLocality: "Tsim Sha Tsui",
        addressRegion: "Kowloon",
        addressCountry: "HK",
      },
    },
    { name: "Shanghai", role: "China Operations", address: { addressLocality: "Shanghai", addressCountry: "CN" } },
    { name: "Hangzhou", role: "China Operations", address: { addressLocality: "Hangzhou", addressRegion: "Zhejiang", addressCountry: "CN" } },
  ],
} as const;

export const navLinks = [
  { name: "Capabilities", href: "/capabilities" },
  { name: "Services", href: "/services" },
  { name: "Materials", href: "/materials" },
  { name: "Our Work", href: "/our-work" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
];

export function createBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${site.url}${item.path}`,
      })),
    ],
  };
}
