import type { Metadata } from "next";
import FrHomePage from "@/components/FrHomePage";
import { alternatesFor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Fabricant de Vêtements en Chine pour Marques Européennes" },
  description:
    "Fabrication de vêtements en Chine pour marques européennes : développement, sourcing, échantillonnage, production, contrôle qualité. MOQ dès 100 pièces, DDP UE.",
  alternates: {
    canonical: "/fr",
    languages: {
      en: site.url,
      fr: `${site.url}/fr`,
      "x-default": site.url,
    },
  },
  openGraph: {
    title: "Fabricant de Vêtements en Chine pour Marques Européennes | DISTRICT 88",
    description:
      "Du tech pack à la production en série — un seul partenaire pour le développement, le sourcing, la fabrication et le contrôle qualité en Chine, avec livraison DDP vers l'UE.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Page() {
  return <FrHomePage />;
}
