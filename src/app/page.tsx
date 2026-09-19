import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Premium Garment Manufacturer in China — Fashion, Sportswear, Technical Apparel`,
  description:
    "DISTRICT 88 LTD is a premium garment development and manufacturing partner in China (Hong Kong HQ, Shanghai & Hangzhou operations). Product development, material sourcing, sampling, bulk production, and quality control for international fashion, sportswear, cycling, technical apparel, and swimwear brands.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Premium Garment Manufacturer in China`,
    description:
      "From tech pack to bulk production — one partner for garment development, material sourcing, manufacturing, and quality control in China.",
  },
};

export default function Page() {
  return <HomePage />;
}
