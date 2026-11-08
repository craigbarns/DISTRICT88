export interface InsightSection {
  h2: string;
  paras?: string[];
  list?: string[];
  listTitle?: string;
}

export interface InsightFaq {
  q: string;
  a: string;
}

export interface Insight {
  slug: string; // e.g. "find-clothing-manufacturer-china" → /insights/<slug>
  metaTitle: string; // rendered as `${metaTitle} | District 88`
  metaDesc: string; // ≤160 chars
  h1: string;
  kicker: string; // eyebrow label, e.g. "Sourcing guide"
  published: string; // ISO date
  intro: string[];
  sections: InsightSection[];
  faq: InsightFaq[];
  cta: string; // closing CTA line
}
