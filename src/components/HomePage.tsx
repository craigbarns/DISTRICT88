"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/faq";

const categories = [
  { name: "Fashion & Lifestyle", desc: "Everyday essentials to premium fashion collections — from heavy cotton jerseys to delicate finishes.", img: "/images/fashion.jpg" },
  { name: "Sportswear", desc: "Performance garments engineered for movement, built on advanced synthetics and ergonomic construction.", img: "/images/sportswear.jpg" },
  { name: "Cycling", desc: "Technical cycling apparel designed around performance, fit, and functionality — aerodynamic fits and advanced sublimation.", img: "/images/cycling.jpg" },
  { name: "Technical Apparel", desc: "Advanced fabrics and constructions for demanding applications — moisture management, stretch, breathable panels.", img: "/images/technical.jpg" },
  { name: "Swimwear", desc: "Custom swimwear combining fit, materials, and technical construction with high-stretch chlorine-resistant fabrics.", img: "/images/swimwear.jpg" },
];

const stats = [
  { value: "01", label: "Partner — development to production" },
  { value: "05", label: "Product categories manufactured" },
  { value: "07", label: "Controlled steps, brief to quality control" },
  { value: "03", label: "Locations — Hong Kong, Shanghai, Hangzhou" },
];

const processSteps = [
  { num: "01", title: "Brief", desc: "Concept / Inspiration / Existing Product / Tech Pack" },
  { num: "02", title: "Material Sourcing", desc: "Fabrics / Trims / Accessories / Colors" },
  { num: "03", title: "Product Development", desc: "Construction / Measurements / Technical Solutions" },
  { num: "04", title: "Sampling", desc: "Prototype / Fitting / Adjustments" },
  { num: "05", title: "Pre-Production", desc: "Final specifications / Materials / Colors / Details" },
  { num: "06", title: "Manufacturing", desc: "Production at scale" },
  { num: "07", title: "Quality Control", desc: "Measurements / Construction / Finishing / Packaging" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* A high-end macro texture or factory detail for the hero */}
          <img
            src="/images/hero.jpg"
            alt="Premium garment manufacturing at DISTRICT 88 — fabric and production detail"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tight mb-6"
          >
            From Concept to Production.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 font-light"
          >
            Premium Garment Development &amp; Manufacturing in China. <br className="hidden md:block" />
            We support brands from product development to quality control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-foreground font-medium uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              Start Your Project
            </Link>
            <Link
              href="/capabilities"
              className="px-8 py-4 border border-white text-white font-medium uppercase tracking-wider text-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Explore Capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 text-foreground">
              More Than Manufacturing.
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-lg leading-relaxed">
              Great products start long before production. DISTRICT 88 combines product development, material sourcing, and manufacturing expertise to help brands transform concepts and tech packs into production-ready garments.
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Headquartered in Hong Kong with operations in Shanghai and Hangzhou, we are the single
              partner behind international fashion, sportswear, cycling, technical apparel, and
              swimwear collections — from the first sample to final quality control.
            </p>
            <div className="flex items-center space-x-8 text-sm uppercase tracking-widest text-gray-400 font-semibold border-t border-border pt-8">
              <span>Hong Kong</span>
              <span>Shanghai</span>
              <span>Hangzhou</span>
            </div>
          </div>
          <div className="relative h-[600px] w-full">
            <img
              src="/images/machine.jpg"
              alt="Garment production machinery at the DISTRICT 88 manufacturing facility in China"
              className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE MAKE GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">What We Make</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {categories.map((cat, i) => (
              <Link
                href={`/capabilities`}
                key={i}
                className={`group relative overflow-hidden h-[500px] bg-gray-100 ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={cat.img}
                  alt={`${cat.name} — garment manufacturing by DISTRICT 88 in China`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">{cat.name}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 max-w-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 bg-foreground text-background px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-20 text-center">
            One Partner. <br className="md:hidden"/>From Development to Production.
          </h2>

          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center border-b border-gray-800 pb-12 group">
                <div className="text-gray-600 font-mono text-xl mb-4 md:mb-0 md:w-32 group-hover:text-white transition-colors">{step.num}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 group-hover:text-white transition-colors text-gray-300">{step.title}</h3>
                  <p className="text-gray-500 uppercase text-sm tracking-wider">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST, CERTIFICATIONS & PRODUCTION METRICS */}
      <section className="py-24 md:py-32 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              Standards &amp; Verification
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
              Engineered for Compliance. Built for Scale.
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              We bridge international brand expectations with China&apos;s leading garment manufacturing clusters. From accessible MOQs to certified sustainable textiles, every order is backed by transparent metrics and rigorous oversight.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-3xl font-bold text-foreground mb-2">100–300 pcs</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Flexible MOQ</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Accessible minimums per style/colorway for capsule drops, startup collections, and managed inventory risk.
              </p>
            </div>

            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-3xl font-bold text-foreground mb-2">7–14 Days</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Sampling Lead Time</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Rapid proto-sampling and fit testing from confirmed tech packs, accelerating time-to-market before bulk sign-off.
              </p>
            </div>

            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-3xl font-bold text-foreground mb-2">30–45 Days</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Bulk Production</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Predictable mass manufacturing schedules following Pre-Production Sample (PPS) sign-off, with weekly photo updates.
              </p>
            </div>

            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-3xl font-bold text-foreground mb-2">100% Final QC</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">AQL 2.5 Audits</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Multi-stage quality audits covering raw fabric shrinkage, in-line construction, dimensional tolerances, and packaging.
              </p>
            </div>
          </div>

          {/* Certifications & Frameworks */}
          <div className="border border-border p-8 md:p-12 bg-foreground text-background">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Supply Chain Integrity</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                  Internationally Recognized Standards
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  Our audited partner mills and manufacturing lines conform to global environmental and social governance standards, ensuring retail-ready compliance for EU, UK, and North American markets.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-800 p-5 bg-black/30">
                  <div className="font-bold text-white uppercase text-sm tracking-wider mb-1">OEKO-TEX® 100</div>
                  <p className="text-xs text-gray-400 font-light">Certified free from harmful chemicals and skin-irritating toxic dyes.</p>
                </div>
                <div className="border border-gray-800 p-5 bg-black/30">
                  <div className="font-bold text-white uppercase text-sm tracking-wider mb-1">GRS Certified</div>
                  <p className="text-xs text-gray-400 font-light">Verified recycled polyester and nylon chain-of-custody tracking.</p>
                </div>
                <div className="border border-gray-800 p-5 bg-black/30">
                  <div className="font-bold text-white uppercase text-sm tracking-wider mb-1">BSCI &amp; Sedex Audited</div>
                  <p className="text-xs text-gray-400 font-light">Ethical workplace governance, fair wages, and safe manufacturing conditions.</p>
                </div>
                <div className="border border-gray-800 p-5 bg-black/30">
                  <div className="font-bold text-white uppercase text-sm tracking-wider mb-1">GOTS Organic Cotton</div>
                  <p className="text-xs text-gray-400 font-light">Traceable organic cotton cultivation, certified upon request.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="py-32 px-6 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16">
            Questions Brands Ask Us.
          </h2>
          <FaqAccordion items={faqs.slice(0, 5)} />
          <div className="mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center space-x-3 border-b border-foreground pb-1 uppercase tracking-widest text-sm font-medium hover:text-gray-500 transition-colors"
            >
              <span>Read All FAQs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-background flex justify-center text-center px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
            Let&apos;s build your next collection.
          </h2>
          <p className="text-lg text-gray-600 mb-12 font-light">
            Tell us about your project and our team will review your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-4 px-10 py-5 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors"
          >
            <span>Request a Quote</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
