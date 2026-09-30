# Audit SEO & GEO complet — district-88.com

**Site audité :** <https://district-88.com/> — DISTRICT 88 LTD, fabricant de vêtements premium (développement produit, sourcing matières, échantillonnage, production, contrôle qualité) — siège à Hong Kong, opérations à Shanghai et Hangzhou.
**Date de l'audit :** 30 septembre 2026
**Méthode :** crawl manuel des 8 pages, inspection HTML/balises/données structurées, vérification robots.txt / sitemap / llms.txt, recherches d'indexation (`site:district-88.com`), analyse des SERP et des concurrents organiques. Les métriques non mesurables sans outils connectés (volumes de recherche exacts, Domain Rating, trafic estimé) sont signalées comme **estimations**.

***

## 1. Résumé exécutif

**Verdict : la fondation technique est excellente — c'est rare et c'est un vrai avantage. Le problème n'est pas le site, c'est son invisibilité : contenu quasi nul hors pages vitrines, aucune autorité externe, aucune preuve (certifications, clients, MOQ), et zéro présence dans les contenus que Google et les IA citent.**

| Axe                  | Note      | Commentaire                                                                                                           |
| -------------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| Technique SEO        | 🟢 8,5/10 | Rapide (TTFB ~0,19 s), HTTPS, canonicales, sitemap, robots.txt propre                                                |
| On-page              | 🟢 7,5/10 | Titres, descriptions, Hn, schémas — soignés sur les 8 pages                                                           |
| Données structurées  | 🟢 8/10   | Organization, WebSite, FAQPage, Service, ContactPage                                                                  |
| Contenu              | 🔴 3/10   | 8 pages vitrines, pas de blog, pas d'études de cas, pas de pages piliers                                              |
| Autorité / backlinks | 🔴 1/10   | Quasi aucun lien externe ; seules des listings d'annuaires B2B (Panjiva, fobshanghai)                                 |
| E-E-A-T / preuve     | 🔴 2/10   | Aucune certification affichée, aucun client nommé, aucun avis, aucune donnée chiffrée                                 |
| GEO (visibilité IA)  | 🟠 4/10   | Signaux techniques excellents (llms.txt, bots IA autorisés), mais aucune citation externe → les IA n'ont rien à citer |

**Les 3 chantiers qui rapporteront le plus :**

1. **Créer un hub de contenu** (blog/guides) ciblant les requêtes "clothing manufacturer China" — c'est exactement comme ça que les concurrents (Lezhou, Appareify, Leeline, HAPA…) captent le trafic et les citations IA.
2. **Ajouter la preuve** : certifications (OEKO-TEX, BSCI, GRS…), MOQ, délais, noms/logos de clients ou cas chiffrés, avis. C'est le critère n°1 de différenciation dans cette niche — et les IA citent les sources factuelles.
3. **Construire l'autorité externe** : annuaires B2B, listicles "best manufacturers in China", Wikidata, LinkedIn, communiqués — pour exister hors de son propre site.

***

## 2. Audit technique SEO

### 2.1 Ce qui est bien fait ✅

| Élément                   | État constaté                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Vitesse serveur           | TTFB ~0,19 s, page d'accueil 45 Ko — excellent                                                                                                                                            |
| HTTPS + domaine canonique | Redirection propre vers `https://district-88.com`                                                                                                                                          |
| `robots.txt`              | Autorise tout, déclare `Host` et `Sitemap` ; autorise **explicitement** GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, cohere-ai — très bon pour le GEO |
| Sitemap XML               | Valide, 8 URL avec priorités cohérentes                                                                                                                                                    |
| Canonicals                | Présentes sur les 8 pages                                                                                                                                                                  |
| Balises titre             | Uniques, avec mots-clés, 50–65 caractères sur toutes les pages                                                                                                                             |
| Meta descriptions         | Uniques sur les 8 pages (193–310 car.)                                                                                                                                                     |
| Hiérarchie Hn             | Un seul H1 par page, structure H2/H3 logique                                                                                                                                               |
| Images                    | Attributs `alt` présents partout                                                                                                                                                           |
| Données structurées       | `Organization` (avec `knowsAbout`, `keywords`, adresses HK/Shanghai/Hangzhou), `WebSite`, `FAQPage` sur /faq, `Service`+`ItemList` sur /services, `ContactPage` sur /contact               |
| Indexation Google         | Les 8 pages sont indexées (`site:district-88.com` renvoie 7–8 résultats)                                                                                                                   |

### 2.2 Points à corriger ⚠️

| Problème                                     | Impact                                                                                                                                                                                                                                                              | Action                                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Site 100 % anglais, pas de hreflang**      | Vous perdez les acheteurs francophones et européens qui cherchent "fabricant textile Chine", "confection vêtements Chine". Un résultat de recherche affichait déjà un titre traduit en français (« Solutions de Vêtements Premium »), signe d'une demande FR réelle | Créer une version FR (au minimum accueil + services + contact) avec `hreflang="en"` / `hreflang="fr"` |
| **Aucune page n'a de contenu long**          | Chaque page fait 150–350 mots. Insuffisant pour se positionner sur des requêtes concurrentielles                                                                                                                                                                    | Étoffer capabilities/services à 800–1 500 mots avec FAQ intégrées                                     |
| **Pas de fil d'Ariane (BreadcrumbList)**     | Manque un schéma simple qui améliore l'affichage SERP                                                                                                                                                                                                               | Ajouter le schéma `BreadcrumbList`                                                                    |
| **`sitemap_index.xml` renvoie 404**          | Mineur, mais certains outils le testent                                                                                                                                                                                                                             | Laisser tel quel (sitemap.xml suffit) ou ajouter l'index                                              |
| **Pas de données `lastmod` dans le sitemap** | Signal de fraîcheur absent                                                                                                                                                                                                                                          | Ajouter `<lastmod>` à chaque URL                                                                      |
| **Pas de profil social / `sameAs`**          | Le schéma Organization ne référence aucun profil externe → entité mal reliée dans le Knowledge Graph                                                                                                                                                                | Créer une page LinkedIn entreprise + ajouter `sameAs` dans le schéma                                  |

***

## 3. Audit on-page & contenu

### 3.1 Forces

* Positionnement clair et différenciant : « un seul partenaire du tech pack au contrôle qualité », 5 catégories de produits bien segmentées (Fashion, Sportswear, Cycling, Technical, Swimwear).
* Le processus en 7 étapes (Brief → QC) est un excellent contenu de conversion et un format que les IA aiment citer.
* La FAQ répond à de vraies questions d'acheteurs, avec un schéma `FAQPage` complet.

### 3.2 Lacunes critiques de contenu

| Élément manquant                               | Pourquoi c'est décisif                                                                                                                                                                                                                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MOQ (minimum de commande)**                  | C'est LA première question des acheteurs. Tous les concurrents l'affichent (Yotex : 500 pcs ; Modaknits/Ninghow : 100 pcs). Votre `llms.txt` affirme même que la FAQ couvre les MOQ et délais — **ce n'est pas le cas** : risque d'hallucination des IA et de déception des visiteurs |
| **Certifications** (OEKO-TEX, BSCI, GRS, ISO…) | Critère de shortlist n°1 en B2B textile. Yotex liste Semta, BSCI, Wrap, BV, SGS, GOTS, Oeko-100. District 88 : zéro mention                                                                                                                                                           |
| **Clients / références**                       | Yotex cite Fashion Nova, Splits59, Nordstrom… District 88 : aucun nom, aucun logo, aucun témoignage. La page "Our Work" est générique, sans chiffres ni marque                                                                                                                        |
| **Délais types** (échantillon, production)     | Concurrents : "3-day sample", "25–35 days bulk". District 88 : rien                                                                                                                                                                                                                   |
| **Études de cas chiffrées**                    | "X pièces, délai Y, résultat Z" — le contenu le plus convertissant en B2B                                                                                                                                                                                                             |
| **Blog / guides**                              | Aucun. Voir §5 — c'est le canal d'acquisition principal de vos concurrents                                                                                                                                                                                                            |
| **Équipe / visages**                           | Aucune photo, aucun nom — nuit à la confiance et à l'E-E-A-T                                                                                                                                                                                                                          |

***

## 4. Paysage concurrentiel

### 4.1 Concurrents identifiés sur vos requêtes cibles

Recherches effectuées : « clothing manufacturer China », « sportswear manufacturer China », « cycling apparel manufacturer China », listicles « best garment manufacturers in China ».

| Concurrent                            | Positionnement                           | Forces SEO/GEO observées                                                                                         |
| ------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Yotex Apparel** (yotex-apparel.com) | Sportswear/activewear, Shanghai/Xiamen   | MOQ affiché, certifications, clients nommés (Fashion Nova, Peloton…), présent dans les listicles, LinkedIn actif |
| **Appareify** (appareify.com)         | Full-package, marques startups           | Blog très actif, cité dans de nombreux classements "best manufacturers"                                          |
| **Lezhou Garment**                    | Streetwear/fashion, faible MOQ           | Contenu SEO massif, guides longs                                                                                 |
| **Modaknits**                         | Activewear, clients premium (Lululemon…) | Chiffres de capacité concrets (180 000 pcs/mois), certifications, listicles                                      |
| **Ninghow Apparel**                   | Low-MOQ startups                         | Angle "startup-friendly", contenu pédagogique                                                                    |
| **HAPA Garments**                     | Childrenswear                            | Publie ses propres listicles « 10 Best Manufacturers » → capture les requêtes comparatives                       |
| **TOPOW Sports**                      | Cycling apparel                          | Études de cas + avis clients étoilés en page d'accueil                                                           |
| **LeelineWear / LeelineSourcing**     | Sourcing + fabrication                   | Gros site de contenu, domine les requêtes informationnelles                                                      |
| **Easson Apparel**                    | Knitwear/hoodies                         | Listicles auto-publiés, MOQ et délais affichés                                                                   |
| **Shenzhou International**            | Mega-usine enterprise                    | Inatteignable en volume — mais pas votre cible                                                                   |

***

## 5. Opportunités de mots-clés

### 5.1 Transactionnels — priorité pages piliers

| Mot-clé                                   | Difficulté estimée | Page cible                                                  |
| ----------------------------------------- | ------------------ | ----------------------------------------------------------- |
| garment manufacturer China                | Élevée             | Accueil (déjà optimisée)                                    |
| clothing manufacturer Hong Kong           | Moyenne            | Accueil / About                                             |
| sportswear manufacturer China             | Élevée             | Capabilities → créer page dédiée                            |
| cycling apparel manufacturer              | Moyenne            | **Créer page dédiée /cycling**                              |
| swimwear manufacturer China               | Moyenne            | **Créer page dédiée /swimwear**                             |
| technical apparel manufacturer            | Moyenne            | **Créer page dédiée /technical-apparel**                    |
| private label clothing manufacturer China | Élevée             | Services                                                    |
| tech pack development services            | Faible             | **Créer page /tech-pack** — quasi personne ne la cible bien |

### 5.2 Informationnels — priorité blog (forte valeur GEO)

| Sujet d'article                                                                | Intention                 |
| ------------------------------------------------------------------------------ | ------------------------- |
| How to find a reliable clothing manufacturer in China (guide 2026)             | Recherche + citation IA   |
| Tech pack template : what factories need (avec gabarit téléchargeable)         | Lead magnet + backlinks   |
| MOQ explained : why Chinese factories require minimums                         | Question d'acheteur n°1   |
| Cost breakdown : how much does it cost to manufacture a clothing line in China | Très cité par les IA      |
| Sample vs bulk production : timeline from tech pack to delivery                | Processus — votre force   |
| China vs Portugal vs Turkey vs Bangladesh : where to manufacture               | Comparatif — très demandé |
| OEKO-TEX, GRS, BSCI : which certifications matter when sourcing garments       | Confiance                 |
| Common quality issues in garment production and how QC prevents them           | QC — votre force          |
| How to manufacture cycling apparel : fabrics, sublimation, fit                 | Vertical cycling          |
| Chlorine-resistant fabrics : a brand's guide to swimwear manufacturing         | Vertical swimwear         |

***

## 6. Analyse GEO (optimisation pour les moteurs IA)

### 6.1 Vos atouts GEO ✅
* `robots.txt` autorise explicitement tous les crawlers IA.
* `llms.txt` présent et structuré.
* Schéma `Organization` riche.
* FAQ au format question/réponse directe avec schéma `FAQPage`.

### 6.2 Vos blocages GEO 🔴
* Aucune mention tierce.
* Aucune donnée chiffrée publique (MOQ, capacité, délais).
* Risque d'incohérence `llms.txt` résolu suite à mise à niveau.

***

## 7. Plan d'action priorisé

### 🔴 Immédiat (semaine 1–2) — quick wins (Implémenté)
1. Enrichir la FAQ : MOQ, délais, certifications, conditions de paiement, export + schéma FAQPage.
2. Corriger/aligner `llms.txt`.
3. Ajouter `sameAs` (LinkedIn) au schéma Organization.
4. Créer une section "Proof" sur l'accueil (métriques + certifications).
5. Ajouter `<lastmod>` au sitemap et le schéma `BreadcrumbList`.

### 🟠 Court terme (mois 1–3) — contenu & autorité
6. Pages piliers par catégorie : /cycling, /swimwear, /sportswear, /technical-apparel.
7. Lancer le blog avec les 5 premiers guides clés.
8. Version française minimum viable (accueil + services + contact + hreflang).
9. Inscriptions B2B & profils d'entreprise.
10. Études de cas détaillées avec chiffres concrets.
