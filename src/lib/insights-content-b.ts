import type { Insight } from "./insights-types";

export const insightsB: Insight[] = [
  {
    slug: "clothing-moq-guide",
    metaTitle: "Clothing MOQ Explained: Plan by Style and Colorway",
    metaDesc:
      "Why garment MOQs exist, how mills and factories set them, and how European brands plan quantities by style, fabric and colour without blocking cash flow.",
    h1: "Clothing MOQ Explained: Plan Quantities by Style, Fabric and Colour",
    kicker: "Sourcing guide",
    published: "2026-11-08",
    intro: [
      "The minimum order quantity is the first number every buyer asks for — and the least understood. MOQs are not arbitrary greed; they are the echo of dye lots, machine setups and cutting efficiency. Once you see the mechanics, you can plan a collection that fits both the factory and your cash flow.",
    ],
    sections: [
      {
        h2: "Where MOQs actually come from",
        paras: [
          "Three layers stack. The mill sets minimums per dye lot and per quality (a custom-dyed fabric may need hundreds of meters to be worth running). The factory sets a cutting and sewing minimum per style — under it, setup time makes each piece disproportionately expensive. The trims layer adds its own minimums: custom hardware, woven labels and packaging are produced in runs.",
          "This is why MOQ is quoted per style AND per colorway: three colors do not triple every minimum, but they do multiply fabric dye lots and trim runs.",
        ],
      },
      {
        h2: "Typical numbers in the China market",
        paras: [
          "For developed programs, MOQs of 100–300 pieces per style/colorway are realistic — our own standard range at DISTRICT 88. Below that, only styles sharing fabrics across colorways, or ODM bases with existing stock, remain viable. Custom-milled technical textiles can raise minimums to the mill's dye lot.",
          "Emerging brands should also budget sampling and size-set iterations before bulk: a capsule that skips size sets usually pays for it in returns.",
        ],
      },
      {
        h2: "How to plan a collection against MOQs",
        listTitle: "Practical rules that keep programs viable:",
        list: [
          "Concentrate: fewer styles, deeper per style. One hoodie in 3 colorways beats 6 hoodies in 1 colorway for fabric efficiency and storytelling.",
          "Share fabrics across styles — a 400 GSM French terry that serves a hoodie and a sweatpant splits the dye lot risk in two.",
          "Choose stock or semi-custom fabrics for trend pieces; reserve custom mills for your hero products.",
          "Ask for the MOQ in pieces AND in meters: if your usage per colorway does not reach the dye lot, the mill minimum — not the factory — is your binding constraint.",
          "Plan trial capsules deliberately: accept the higher unit cost as market-testing budget, not as a margin baseline.",
        ],
      },
      {
        h2: "MOQ and cash flow: the EU importer's view",
        paras: [
          "A 30/70 payment structure (30% deposit to secure materials, 70% before dispatch) means inventory capital is committed for the production duration — roughly 30–45 days of bulk after pre-production sample approval, plus freight to your EU warehouse. Plan cash against that calendar, and size the first buy so replenishment, not liquidation, is your second order.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I order below the MOQ?",
        a: "Sometimes: by using stock fabrics, combining colorways inside one dye lot, or accepting ODM bases. Below ~100 pieces per style, options narrow sharply and unit costs rise quickly.",
      },
      {
        q: "Does MOQ apply per colorway?",
        a: "Usually yes for dyed fabrics and custom trims; the style-level sewing minimum is lower than the fabric minimum. Always ask both numbers.",
      },
      {
        q: "What MOQ should a new brand target?",
        a: "100–300 pieces per style/colorway is the practical sweet spot for a developed program — enough for a real size curve and a meaningful launch, small enough to test the market without heavy inventory risk.",
      },
    ],
    cta: "Tell us your style plan and budget — we will tell you where the MOQ walls are and how to route around them.",
  },
  {
    slug: "china-vs-portugal-clothing-manufacturing",
    metaTitle: "China vs Portugal Clothing Manufacturing: EU Decision Guide",
    metaDesc:
      "China or Portugal for garment production? A decision framework for European brands: capability, MOQs, lead times, landed cost, compliance and when each wins.",
    h1: "China vs Portugal Clothing Manufacturing: A Buyer's Decision Framework",
    kicker: "Comparison — EU brands",
    published: "2026-11-08",
    intro: [
      "\"Should we produce in China or Portugal?\" is usually asked as a price question and answered as a loyalty question. The honest answer depends on five variables: what you are making, at what volume, how technical it is, how fast you need it, and how much compliance work you want done for you.",
    ],
    sections: [
      {
        h2: "Capability: what each cluster is genuinely best at",
        paras: [
          "China's Yangtze River Delta basin offers the widest industrial base: technical synthetics, laminated and bonded constructions, seamless knits, sublimation, developed fabric libraries (heavyweight French terry at 400–500 GSM, 4-way stretch, membranes rated 10k–20k), plus the trims ecosystem — custom hardware, YKK programs, private-label finishing.",
          "Portugal excels at premium cut-and-sew knits and wovens, mid-to-high fashion, small-run agility and EU-proximate quality control — with deep strength in jersey, denim and tailored wovens, and shorter, more flexible runs.",
        ],
      },
      {
        h2: "Lead time: factory is not the whole story",
        paras: [
          "Bulk production in our China programs runs 30–45 days after pre-production sample approval, with sampling at 7–14 days. Portugal often quotes similar or slightly shorter production windows — but the logistics flip the total: Shanghai or Ningbo to North European ports is roughly 30–40 days by sea (indicative), while Iberian trucking is days. For replenishment-driven businesses, that difference shapes inventory policy more than factory speed.",
        ],
      },
      {
        h2: "Landed cost: build the comparison, don't feel it",
        paras: [
          "Compare FOB plus freight plus duty plus QC plus development. Portugal wins on freight and payment friction (EUR, EU VAT framework); China usually wins on developed fabric access and technical construction at moderate volumes. A useful exercise: take one hero style and one basic style, quote both countries on the same brief, and compute landed cost per unit AND calendar days from tech pack to warehouse.",
        ],
      },
      {
        h2: "Compliance and administration",
        paras: [
          "Both routes must meet EU requirements: REACH-compliant materials, correct labeling, GPSR responsible person. The difference is operational: with nearshoring, compliance is close to your office; with China production, you need a partner who assembles the file for you — test reports, audit summaries, labeling sets — before goods ship, not after they arrive.",
        ],
      },
      {
        h2: "When each one wins",
        listTitle: "A workable default for EU brands:",
        list: [
          "China: technical categories (cycling, swim, outdoor, performance), developed fabrics, core essentials at steady volumes, private-label detail work.",
          "Portugal: fast replenishment of basics near EU demand, premium cut-and-sew fashion, small exclusive runs where proximity matters.",
          "Hybrid: hero technical programs in China, replenishment basics nearshore — many mature European brands run exactly this split.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Portuguese manufacturing more expensive than Chinese?",
        a: "Typically yes at like-for-like specs, especially on technical construction, but the gap narrows or reverses once freight, duty and speed-to-shelf enter the landed cost — which is why the comparison must be made per style, not per factory.",
      },
      {
        q: "How long does sea freight from China to the EU take?",
        a: "Roughly 30–40 days port to port from Shanghai/Ningbo to North European ports (indicative), plus customs and inland. Express air is a few days at a multiple of the cost.",
      },
      {
        q: "Can I split a collection between China and Portugal?",
        a: "Yes, and it is the norm for many EU brands: technical and developed-fabric programs where China is strongest, replenishment basics nearshore. The discipline is keeping specs identical across both.",
      },
    ],
    cta: "Send us the collection — we will tell you honestly which styles belong in China and which do not.",
  },
  {
    slug: "china-turkey-vietnam-apparel-sourcing",
    metaTitle: "China, Turkey or Vietnam? Compare Apparel Sourcing",
    metaDesc:
      "China vs Turkey vs Vietnam for clothing production: capability, volumes, lead times, EU logistics and compliance — a framework to shortlist without clichés.",
    h1: "China, Turkey or Vietnam? Compare Apparel Sourcing by Project Requirements",
    kicker: "Comparison — EU brands",
    published: "2026-11-08",
    intro: [
      "Country comparisons usually collapse into wage arithmetic. Buyers who actually move production know the real variables: which cluster can build your product, at your volume, inside your calendar, with the compliance file your market requires.",
    ],
    sections: [
      {
        h2: "Capability by category, not by country",
        paras: [
          "China remains the broadest industrial base: performance synthetics, seamless knits, bonded and taped technical constructions, developed fabric libraries, and a complete trims and private-label ecosystem — the reason technical categories (cycling, swimwear, outdoor, activewear) mostly run there.",
          "Turkey is the EU's nearshore: strong in knits, denim, jersey fashion and fast replenishment, with customs advantages for EU-bound goods and short logistics.",
          "Vietnam is the scale play for FOB-sensitive basics and volume programs — strong factories, growing fabric base, longer development loops than China's delta cluster.",
        ],
      },
      {
        h2: "The decision grid that actually works",
        listTitle: "Score each candidate country on:",
        list: [
          "Product fit: does the cluster build this construction at your quality level?",
          "Volume fit: your per-style quantities vs the cluster's efficient run sizes.",
          "Calendar: sampling loops + bulk window + freight to your EU warehouse.",
          "Compliance readiness: REACH/OEKO-TEX® documentation culture, audit availability, GPSR support.",
          "Dependency risk: one supplier vs a cluster with alternatives.",
        ],
      },
      {
        h2: "What buyers underestimate in each direction",
        paras: [
          "China: freight duration to the EU (weeks, plan for it) and the need for an English-speaking technical counterpart.",
          "Turkey: capacity peaks around EU seasons and fabric import dependencies for synthetics.",
          "Vietnam: development depth for highly technical products and longer sampling loops; superb for what it does at scale.",
        ],
      },
      {
        h2: "Compliance travels with the product",
        paras: [
          "Wherever you produce, EU requirements are the same: material compliance (REACH, OEKO-TEX® testing where applicable), fiber/care/origin labeling, and GPSR responsible-person arrangements. Choose the country for capability and cost; choose the partner for the compliance file.",
        ],
      },
    ],
    faq: [
      {
        q: "Which country is cheapest for clothing production?",
        a: "For FOB basics at volume, Vietnam often wins; for technical construction and developed fabrics, China's ecosystem is hard to beat; Turkey's advantage is logistics and EU customs friction. Cheapest FOB rarely equals lowest landed cost per sellable unit.",
      },
      {
        q: "Is Turkey better for EU brands because of customs?",
        a: "Turkey's EU customs relationship and short transit are real advantages for replenishment. For developed technical products, the capability gap versus the Chinese delta cluster is usually the deciding factor.",
      },
      {
        q: "Should I diversify production across countries?",
        a: "Once a category proves stable, adding a second origin reduces dependency risk — but only after specs, QC standards and compliance files are documented well enough to transfer.",
      },
    ],
    cta: "Bring us the project constraints — we will tell you where China is genuinely the right answer, and where it is not.",
  },
];
