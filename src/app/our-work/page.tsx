import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work — Garment Projects by Category",
  description:
    "Selected garment development and manufacturing projects by DISTRICT 88: fashion & lifestyle, sportswear, cycling, technical apparel, and swimwear programs produced for international brands.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: `Our Work | ${site.shortName}`,
    description:
      "Garment programs developed and manufactured in China for international fashion, sportswear, and technical apparel brands.",
  },
};

const projects = [
  {
    title: "Heavyweight Cotton Program",
    category: "Fashion & Lifestyle",
    scope: "Premium jersey and fleece development, from fabric sourcing to bulk production and private label packaging.",
    img: "/images/fashion.jpg",
    span: true,
  },
  {
    title: "Performance Sportswear Line",
    category: "Sportswear",
    scope: "Moisture-wicking training garments engineered with ergonomic construction and durable synthetics.",
    img: "/images/sportswear.jpg",
    span: false,
  },
  {
    title: "Aerodynamic Cycling Collection",
    category: "Cycling",
    scope: "Technical cycling apparel with aerodynamic patterning, advanced sublimation, and precision fit development.",
    img: "/images/cycling.jpg",
    span: false,
  },
  {
    title: "Technical Outerwear Program",
    category: "Technical Apparel",
    scope: "Advanced fabric constructions with breathable membranes, stretch panels, and reinforced detailing for demanding applications.",
    img: "/images/technical.jpg",
    span: true,
  },
  {
    title: "Resort & Competition Swimwear",
    category: "Swimwear",
    scope: "High-stretch, chlorine-resistant swimwear combining technical fit with refined finishing.",
    img: "/images/swimwear.jpg",
    span: false,
  },
  {
    title: "Material Development Library",
    category: "Materials",
    scope: "Sourced and tested fabric programs: cotton blends, performance synthetics, and 4-way stretch technical textiles.",
    img: "/images/tech-material.jpg",
    span: false,
  },
];

export default function OurWork() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">Our Work.</h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          A selection of garment programs developed and manufactured in China for international
          brands — from heavyweight cotton essentials to technical performance collections. Each
          project follows the same path: development, sourcing, sampling, production, and quality
          control under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden h-[450px] bg-gray-100 ${project.span ? "md:col-span-2" : ""}`}
          >
            <img
              src={project.img}
              alt={`${project.title} — ${project.category} garment manufacturing by DISTRICT 88`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-3">
                {project.category}
              </p>
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 max-w-xl leading-relaxed">
                {project.scope}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
          Your project could be next.
        </h2>
        <p className="text-lg text-gray-600 mb-10 font-light">
          Tell us about your collection and our team will review your requirements.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-4 px-10 py-5 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors"
        >
          <span>Start Your Project</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
