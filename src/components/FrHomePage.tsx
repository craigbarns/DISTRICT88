"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { faqsFr } from "@/lib/faq-fr";

const categories = [
  { name: "Mode & Lifestyle", desc: "Des essentiels du quotidien aux collections mode premium — du jersey de coton lourd aux finitions délicates.", img: "/images/fashion.webp" },
  { name: "Sportswear", desc: "Vêtements performants conçus pour le mouvement, sur synthétiques avancés et constructions ergonomiques.", img: "/images/sportswear.webp" },
  { name: "Cyclisme", desc: "Textile cycliste technique pensé pour la performance, l'ajustement et la fonctionnalité — coupes aérodynamiques et sublimation avancée.", img: "/images/cycling.webp" },
  { name: "Vêtements Techniques", desc: "Matières et constructions avancées pour usages exigeants — gestion de l'humidité, stretch, panels respirants.", img: "/images/technical.webp" },
  { name: "Maillots de Bain", desc: "Maillots sur mesure alliant ajustement, matières et construction technique — tissus stretch résistants au chlore.", img: "/images/swimwear.webp" },
];

const stats = [
  { value: "01", label: "Partenaire — du développement à la production" },
  { value: "05", label: "Catégories de produits fabriquées" },
  { value: "07", label: "Étapes contrôlées, du brief au contrôle qualité" },
  { value: "03", label: "Implantations — Hong Kong, Shanghai, Hangzhou" },
];

const processSteps = [
  { num: "01", title: "Brief", desc: "Concept / Inspiration / Produit existant / Tech Pack" },
  { num: "02", title: "Sourcing Matières", desc: "Tissus / Accessoires / Fournitures / Coloris" },
  { num: "03", title: "Développement Produit", desc: "Construction / Mesures / Solutions techniques" },
  { num: "04", title: "Échantillonnage", desc: "Proto / Essayage / Ajustements" },
  { num: "05", title: "Pré-Production", desc: "Spécifications finales / Matières / Coloris / Détails" },
  { num: "06", title: "Fabrication", desc: "Production en série" },
  { num: "07", title: "Contrôle Qualité", desc: "Mesures / Construction / Finitions / Emballage" },
];

export default function FrHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/images/hero.webp"
            alt="Fabrication textile premium chez DISTRICT 88 — détail matières et production pour marques européennes"
            fetchPriority="high"
            decoding="async"
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
            Du Concept à la Production. Pour les Marques Européennes.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 font-light"
          >
            Fabrication de vêtements en Chine pour les marques européennes de mode, de sport et de
            textile technique.{" "}
            <br className="hidden md:block" />
            Du tech pack à la production en série et au contrôle qualité — avec livraison DDP vers
            l'UE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/fr/contact"
              className="px-8 py-4 bg-white text-foreground font-medium uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              Démarrer un projet
            </Link>
            <Link
              href="/fr/services"
              className="px-8 py-4 border border-white text-white font-medium uppercase tracking-wider text-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Nos services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 text-foreground">
              Plus Qu'un Fabricant.
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-lg leading-relaxed">
              Les beaux produits commencent bien avant la production. DISTRICT 88 réunit
              développement produit, sourcing matières et expertise de fabrication pour transformer
              concepts et tech packs en vêtements prêts pour la production.
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Siège à Hong Kong, opérations à Shanghai et Hangzhou : nous sommes le partenaire
              unique des collections mode, sportswear, cyclisme, textile technique et maillots de
              bain des marques européennes — du premier échantillon au contrôle qualité final,
              avec un contact en Europe et une livraison DDP vers l'UE.
            </p>
            <div className="flex items-center space-x-8 text-sm uppercase tracking-widest text-gray-400 font-semibold border-t border-border pt-8">
              <span>Hong Kong</span>
              <span>Shanghai</span>
              <span>Hangzhou</span>
            </div>
          </div>
          <div className="relative h-[600px] w-full">
            <img
              src="/images/machine.webp"
              alt="Machines de production textile dans l'atelier de fabrication DISTRICT 88 en Chine"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
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

      {/* CE QUE NOUS FABRIQUONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">Ce que nous fabriquons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {categories.map((cat, i) => (
              <Link
                href="/fr/services"
                key={i}
                className={`group relative overflow-hidden h-[500px] bg-gray-100 ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={cat.img}
                  alt={`${cat.name} — fabrication textile par DISTRICT 88 en Chine`}
                  loading="lazy"
                  decoding="async"
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

      {/* PROCESSUS */}
      <section className="py-32 bg-foreground text-background px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-20 text-center">
            Un Seul Partenaire. <br className="md:hidden" />Du Développement à la Production.
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

      {/* NORMES & CERTIFICATIONS */}
      <section className="py-24 md:py-32 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              Normes &amp; Vérifications
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
              Conçu pour la Conformité. Taillé pour l'Échelle.
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Nous faisons le pont entre les exigences des marques européennes et les meilleurs
              clusters de fabrication textile de Chine. Des MOQ accessibles aux textiles certifiés,
              chaque commande s'appuie sur des métriques transparentes et un contrôle rigoureux.
            </p>
          </div>

          {/* Bandeau Europe */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Contact en Europe</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Ligne directe et WhatsApp en Europe (+33), horaires CET pour vos appels, revues
                d'échantillons et points de production.
              </p>
            </div>
            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Livraison DDP vers l'UE</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Fret mer et air porte-à-porte avec dédouanement géré — FOB, CIF ou DDP, selon vos
                Incoterms.
              </p>
            </div>
            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Conformité marché UE</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Matières et QC alignés sur les attentes du commerce européen : tests OEKO-TEX®,
                GRS, GOTS et audits sociaux BSCI / Sedex.
              </p>
            </div>
          </div>

          {/* Métriques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-3xl font-bold text-foreground mb-2">100–300 pcs</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">MOQ flexible</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Minimums accessibles par modèle/coloris pour les capsules, collections de
                démarrage et gestion du risque d'inventaire.
              </p>
            </div>

            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-3xl font-bold text-foreground mb-2">7–14 Jours</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Délai d'échantillonnage</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Proto-échantillons et essayages rapides à partir de tech packs confirmés, pour
                accélérer le time-to-market avant le lancement série.
              </p>
            </div>

            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-3xl font-bold text-foreground mb-2">30–45 Jours</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Production en série</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Plannings de fabrication prévisibles après validation de l'échantillon de
                pré-production (PPS), avec mises à jour photo hebdomadaires.
              </p>
            </div>

            <div className="p-8 border border-border bg-gray-50/50 hover:border-foreground transition-colors">
              <div className="text-3xl font-bold text-foreground mb-2">100% QC final</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Audits AQL 2.5</div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Contrôles multi-étapes : rétrécissement des tissus bruts, construction en ligne,
                tolérances dimensionnelles et emballage.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="border border-border p-8 md:p-12 bg-foreground text-background">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Intégrité de la chaîne</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                  Des Standards Internationaux Reconnus
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  Nos filatures et lignes de production partenaires auditées respectent les normes
                  environnementales et sociales internationales, pour une conformité prête à la
                  vente sur les marchés de l'Union européenne et du Royaume-Uni.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-800 p-5 bg-black/30">
                  <div className="font-bold text-white uppercase text-sm tracking-wider mb-1">OEKO-TEX® 100</div>
                  <p className="text-xs text-gray-400 font-light">Testé sans substances nocives ni colorants toxiques irritants.</p>
                </div>
                <div className="border border-gray-800 p-5 bg-black/30">
                  <div className="font-bold text-white uppercase text-sm tracking-wider mb-1">Certifié GRS</div>
                  <p className="text-xs text-gray-400 font-light">Traçabilité vérifiée des chaînes polyester et nylon recyclés.</p>
                </div>
                <div className="border border-gray-800 p-5 bg-black/30">
                  <div className="font-bold text-white uppercase text-sm tracking-wider mb-1">Audités BSCI &amp; Sedex</div>
                  <p className="text-xs text-gray-400 font-light">Gouvernance sociale éthique, salaires équitables et conditions de fabrication sûres.</p>
                </div>
                <div className="border border-gray-800 p-5 bg-black/30">
                  <div className="font-bold text-white uppercase text-sm tracking-wider mb-1">Coton bio GOTS</div>
                  <p className="text-xs text-gray-400 font-light">Culture de coton biologique traçable, certifié sur demande.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16">
            Les questions des marques européennes.
          </h2>
          <FaqAccordion items={faqsFr.slice(0, 5)} />
          <div className="mt-12">
            <Link
              href="/fr/faq"
              className="inline-flex items-center space-x-3 border-b border-foreground pb-1 uppercase tracking-widest text-sm font-medium hover:text-gray-500 transition-colors"
            >
              <span>Voir toutes les FAQ</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background flex justify-center text-center px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
            Donnons vie à votre prochaine collection.
          </h2>
          <p className="text-lg text-gray-600 mb-12 font-light">
            Parlez-nous de votre projet : notre équipe étudie vos besoins.
          </p>
          <Link
            href="/fr/contact"
            className="inline-flex items-center space-x-4 px-10 py-5 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-accent transition-colors"
          >
            <span>Demander un devis</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
