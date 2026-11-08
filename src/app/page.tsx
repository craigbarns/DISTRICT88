import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garment Manufacturer in China for European Brands",
  description:
    "Garment manufacturing in China for European brands: development, sourcing, sampling, bulk production and QC. MOQ from 100 pieces, DDP delivery to the EU.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Garment Manufacturer in China for European Brands | DISTRICT 88",
    description:
      "From tech pack to bulk production — one partner for garment development, material sourcing, manufacturing, and quality control in China, with DDP delivery to the EU.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Page() {
  return <HomePage />;
}
