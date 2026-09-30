# A — Audit SEO technique de DISTRICT 88

Audit du **24 septembre 2026**, effectué en lecture seule sur le dépôt et le site public. Aucun fichier applicatif ni réglage de production n'a été modifié.

## Conclusion

Le site dispose d'une base technique exploitable : **8 pages commerciales/institutionnelles, toutes accessibles en HTTP 200, avec contenu HTML initial, title, description, canonical et un H1**. Le sitemap et robots.txt fonctionnent. Aucune panne générale ni interdiction d'indexation n'a été constatée. **Être accessible et indexable ne prouve pas une indexation effective par Google.**

Les priorités sont la fiabilité des affirmations existantes, le poids des images, la qualification et la mesure des demandes, puis l'expansion raisonnée des contenus. L'accueil référence **6 014 167 octets de JPEG**, sans variantes responsive ni chargement différé. Le formulaire prévoit un envoi Netlify mais sa réception effective n'a pas été testée. Le code GA4 ne contient aucun événement de succès RFQ. Une propriété Search Console accessible couvre `https://www.district-88.com/`, alors que le site canonique est sans `www` : cette propriété ne suffit pas pour piloter tout le site.

Les Core Web Vitals, sessions, classements, backlinks et conversions restent **non mesurés**, pas nuls : PageSpeed a répondu HTTP 429 ; les requêtes de données GA4/GSC via le connecteur ont échoué avec `LICENSE_NOT_FOUND`.

## 1. Périmètre et méthode

- Dépôt audité : `craigbarns/DISTRICT88`, commit `5ce2aa08753956e41ca53fd1693686bca6ec5f1d`.
- Instructions lues : `AGENTS.md`, `CLAUDE.md`. Pas de code Next.js écrit et pas de rebuild nécessaire pour cet audit.
- Architecture : Next.js `16.3.5`, React `19.2.8`, App Router dans `src/app`, export statique via `output: 'export'`, Netlify publie `out`. Voir [configuration Next](../../next.config.ts), [configuration Netlify](../../netlify.toml), [dépendances](../../package.json).
- Contrôles live : GET publics des 8 routes, robots, sitemap, llms, URL inexistante, variantes HTTP/www/slash/HTML ; extraction de métadonnées, liens, Hn, JSON-LD, images et scripts depuis le HTML initial. Collecte principale à 08:22 UTC.
- **18 réponses documentées**, puis contrôles supplémentaires de redirections et **25 ressources statiques**. Les 11 images JPEG du live sont identiques aux fichiers locaux par SHA-256.
- Preuves reproductibles : [inventaire HTTP et HTML extrait](evidence/http-audit.json), [poids et cache des assets](evidence/asset-audit.json). Les tailles désignent les octets du corps de réponse non compressé, pas un waterfall navigateur.
- Aucun formulaire envoyé, aucune demande de devis créée, aucun message adressé à l'entreprise. Pas d'accès aux journaux Netlify, à la boîte de réception, aux certificats fournisseurs ou aux dossiers de production.
- Pas de crawl exhaustif de liens externes entrants ; pas de mesure Lighthouse locale ni de test visuel navigateur mobile réalisé. Les observations mobile ci-dessous reposent sur les styles et le HTML déployés.

## 2. Inventaire des pages et de leur indexabilité

Toutes les URL ci-dessous ont un canonical vers elles-mêmes sur `https://district-88.com`, une directive `index, follow`, une description distincte et un seul H1. Aucune directive HTTP `X-Robots-Tag: noindex` n'a été observée. Toutes les pages possèdent `lang="en"` et une meta viewport responsive.

| URL | Statut | HTML, octets | Mots approximatifs* | Title, caractères | H1 actuel | Observation |
|---|---:|---:|---:|---:|---|---|
| [Accueil](https://district-88.com/) | 200 | 45 442 | 575 | 96 | From Concept to Production. | Offre B2B comprise dans le sous-titre ; H1 peu explicite |
| [/capabilities](https://district-88.com/capabilities) | 200 | 40 117 | 226 | 92 | Capabilities | 5 familles sur une seule URL |
| [/services](https://district-88.com/services) | 200 | 39 526 | 254 | 69 | Comprehensive Manufacturing Solutions. | Développement → QC ; peu de profondeur |
| [/materials](https://district-88.com/materials) | 200 | 36 512 | 200 | 86 | Materials Matter. | 3 familles ; pas de tableau d'aide au choix |
| [/our-work](https://district-88.com/our-work) | 200 | 43 735 | 275 | 53 | Our Work. | 6 intitulés de projets, preuves non fournies |
| [/faq](https://district-88.com/faq) | 200 | 46 911 | 485 | 50 | Manufacturing in China, Answered. | 8 questions ; pas de MOQ/délai documenté |
| [/about](https://district-88.com/about) | 200 | 35 058 | 209 | 52 | Built in China. Made for International Brands. | Identité/localisations, sans équipe/historique sourcés |
| [/contact](https://district-88.com/contact) | 200 | 37 554 | 215 | 64 | Let's build your next collection. | RFQ avec pièce jointe et contacts directs |

\* Comptage indicatif du texte HTML hors scripts, navigation et footer inclus ; ce n'est ni la longueur du contenu principal ni un critère de classement. Un faible nombre de mots ne suffit pas à qualifier une page de mauvaise qualité. Ici, le manque concerne surtout les réponses utiles aux acheteurs.

Les 8 routes existent dans le dépôt, sont listées dans le sitemap et sont atteignables depuis chaque page par la navigation/footer. **Aucune page orpheline parmi cet inventaire** ; impossible d'exclure des URL historiques non présentes dans le dépôt sans GSC/logs.

## 3. Crawl, HTTP, sitemap et URL concurrentes

| Contrôle live | Résultat | Action |
|---|---|---|
| `http://district-88.com` | 301 vers HTTPS apex, puis 200 | Conserver |
| `https://www.district-88.com` | 301 vers HTTPS apex, puis 200 | Conserver |
| `http://www.district-88.com` | 301 vers HTTPS www, puis 301 apex | P3 : réduire à un saut si configuration simple |
| `/capabilities/` | 301 vers `/capabilities` | Conserver convention sans slash |
| `/capabilities.html` | 200 ; HTML identique à `/capabilities`, canonical propre | P2 : 301 vers URL propre, sans boucle avec réécriture Netlify |
| `/about.html`, `/index.html` | 200 | P2 : consolider les variantes exportées |
| `/?utm_source=seo-audit` | 200, canonical sans paramètre | Cohérent ; préserver les paramètres nécessaires à l'attribution |
| `/seo-audit-missing-20260924` | Véritable 404 | Bon ; ne pas rediriger toutes les erreurs vers l'accueil |
| `/robots.txt` | 200 `text/plain`, autorisation générale et sitemap | Pas d'obstacle robots constaté |
| `/sitemap.xml` | 200 XML, 8 URL canoniques | Maintenir la génération à chaque nouvelle page |
| `/llms.txt` | 200, 2 397 octets | P3 ; corriger les faits s'il est conservé |

Le site est servi par Netlify avec HTTPS et HSTS `max-age=31536000`. Le crawl n'a détecté aucun lien interne cassé parmi les liens de pages exposés : ils correspondent tous aux 8 routes vérifiées. Les liens WhatsApp et email n'ont pas fait l'objet d'un envoi.

La duplication `.html` est atténuée par le canonical déjà présent ; ce n'est pas un blocage critique. Une redirection cohérente renforce la consolidation et réduit les variantes accessibles. Ne pas remplacer le canonical par `noindex` ou bloquer les doublons dans robots.txt. [Google : consolidation des URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

Le sitemap ne fournit pas de `lastmod`. Ce n'est pas une erreur bloquante. Ajouter un `lastmod` calculé à partir des mises à jour substantielles, particulièrement pour Insights ; ne pas mettre artificiellement la date du build partout. Google ignore `priority` et `changefreq`, déjà présents : ces paramètres ne constituent pas un levier de classement. [Google : sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

**Contrôle de recette futur :** pour toute nouvelle URL, vérifier en live 200, canonical unique, inclusion sitemap, liens HTML, aucun `noindex` inattendu ; pour toute migration, vérifier la cible de chaque 301. Garder les URL existantes fonctionnelles pendant l'ajout des piliers.

## 4. Rendu JavaScript et expérience mobile

Le contenu principal, les liens et les FAQ sont déjà dans le HTML statique. Une extraction sans JavaScript retrouve les capacités, matières, étapes et réponses. **Le site n'est donc pas une coquille vide rendue uniquement côté client.** `HomePage`, `Navbar`, `FaqAccordion` et `ContactForm` sont néanmoins des composants client, avec Framer Motion pour l'accueil/navigation.

Points d'attention précis :

- [HomePage.tsx:50](../../src/components/HomePage.tsx#L50) anime H1, sous-titre et CTA depuis `opacity: 0`. Le HTML initial peut donc contenir du texte visuellement caché tant que l'hydratation n'a pas abouti. Garder l'information essentielle visible par défaut, respecter la réduction des animations et limiter la JS aux éléments interactifs.
- [HomePage.tsx:152](../../src/components/HomePage.tsx#L152) et [our-work/page.tsx:95](../../src/app/our-work/page.tsx#L95) ne révèlent certaines descriptions qu'au survol. Le HTML est lisible par un extracteur, mais l'interaction tactile/clavier n'offre pas une présentation aussi évidente. Montrer les informations importantes par défaut sur mobile et au focus.
- [contact/page.tsx:68](../../src/app/contact/page.tsx#L68) cache la colonne de contact direct sous le breakpoint `lg`. Email reste accessible au footer et WhatsApp est flottant, mais une alternative visible à côté du formulaire serait plus utile en cas d'erreur.
- [FaqAccordion.tsx:27](../../src/components/FaqAccordion.tsx#L27) limite la réponse ouverte à `max-h-96` avec débordement caché. Des réponses longues/traduites peuvent être coupées ; préférer une hauteur naturelle et des relations accessibles bouton/panneau.
- Menu mobile conditionnel après clic : le footer fournit déjà les liens crawlables. Vérifier focus clavier, fermeture et débordement à 320/375/768 px lors de l'implémentation.

Ces éléments sont des **risques démontrés par la logique du code**, pas des scores d'accessibilité ni des échecs CWV mesurés.

## 5. Images, vitesse et Core Web Vitals

| Mesure réelle | Résultat |
|---|---:|
| JPEG uniques | 11 |
| Taille JPEG cumulée | 9 696 579 octets, soit 9,25 Mio |
| JPEG référencés par l'accueil | 7 |
| Taille de ces 7 JPEG | 6 014 167 octets, soit 5,74 Mio |
| Image hero | 881 645 octets ; 1 376 × 768 px |
| Plus gros JPEG | `synthetic.jpg` : 1 030 375 octets |
| Attributs des 22 occurrences d'images dans les 8 pages | `src`, `alt`, `class` uniquement |
| Ressources statiques testées | 25/25 en 200 |
| Cache navigateur des assets contrôlés | `public,max-age=0,must-revalidate` |

Les images n'ont ni `srcset`, ni `sizes`, ni `loading="lazy"`, ni dimensions intrinsèques. Des conteneurs CSS réservent déjà plusieurs hauteurs : **on ne peut pas en déduire un CLS élevé**. L'export configure `images.unoptimized: true`, et le site utilise directement `<img>` ; remplacer aveuglément par `next/image` sans stratégie compatible export ne résoudrait pas le problème.

**P1 :** générer des variantes AVIF/WebP et JPEG de repli à tailles adaptées au design, utiliser `<picture>`/`srcset`/`sizes` ou un loader/CDN compatible avec l'export. Différer les images sous la ligne de flottaison ; laisser le hero prioritaire, sans lazy-loading. Fixer dimensions/ratio. Mesurer le rendu après compression et garder les détails textiles utiles. L'image LCP doit être facilement découvrable ; le fetch prioritaire ne remplace pas la réduction de poids. [web.dev : optimisation LCP](https://web.dev/articles/optimize-lcp).

**P2 :** cache navigateur long et `immutable` pour les assets `_next/static` dont le nom contient un hash. Pour les images, versionner le nom/URL avant de leur donner un cache long ; conserver une politique de revalidation adaptée au HTML. Le CDN Netlify signale déjà des réponses en cache : `max-age=0` navigateur ne signifie pas absence de cache edge.

**Mesures indisponibles :** appel public PageSpeed mobile rejeté en HTTP 429, `RESOURCE_EXHAUSTED`, quota quotidien du service. Aucun score Lighthouse, LCP, INP, CLS, CrUX ou TTFB représentatif n'est publié ici. Les temps de téléchargement du script d'audit ne remplacent pas un test de performance utilisateur.

**Recette :** tester accueil, page commerciale, article et contact sur mobile/desktop ; distinguer lab Lighthouse et terrain CrUX/GSC. Relever LCP, INP, CLS au 75e percentile quand les données terrain existent, poids transféré et comportement formulaire. Objectifs techniques proposés : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 — objectifs, pas résultats obtenus. [web.dev : Web Vitals](https://web.dev/articles/vitals).

## 6. Métadonnées, titres et partage

Les titles et descriptions sont uniques. Les descriptions comptent entre 189 et 306 caractères et plusieurs titles dépassent 80 caractères : risque d'affichage tronqué, sans seuil fixe de pénalité. Réécrire autour de l'intention et d'une proposition factuelle ; éviter d'empiler toutes les familles sur chaque title.

Le H1 de l'accueil pourrait nommer explicitement le service en Chine, en gardant le slogan comme élément secondaire. `/materials` et `/services` gagneraient également à nommer leur sujet plutôt qu'un slogan. Sur `/services`, les sections passent de H1 à H3 ([services/page.tsx:77](../../src/app/services/page.tsx#L77)) ; sur `/materials`, de H2 à H4 ([materials/page.tsx:50](../../src/app/materials/page.tsx#L50)). Corriger en H2/H3 pour la navigation sémantique et l'accessibilité ; il ne s'agit pas d'une pénalité SEO automatique.

**Défaut Open Graph confirmé live :** `/`, `/our-work` et `/contact` redéfinissent partiellement `openGraph` et perdent notamment `og:image` et `og:url`. Les autres pages héritent du titre/URL de l'accueil. Les tags Twitter restent identiques partout. Voir [page.tsx:11](../../src/app/page.tsx#L11), [layout.tsx:70](../../src/app/layout.tsx#L70). Centraliser une fonction de metadata qui fournit à chaque URL son title, sa description, son canonical et un objet OG complet. L'image déclarée 1 200 × 630 est réellement 1 376 × 768 : créer un fichier social adapté ou déclarer sa taille exacte.

L'attribut `meta keywords` global existe, mais ne doit recevoir aucun effort éditorial prioritaire. Les requêtes sont à traiter dans la réponse à l'acheteur, les titres, ancres et informations utiles.

## 7. Données structurées

| Présence dans le HTML live | État | Recommandation |
|---|---|---|
| `Organization` sur 8 pages | JSON syntaxiquement valide, `@id` stable | Vérifier identité, téléphone, adresses, langues réellement proposées |
| `WebSite` sur 8 pages | Lié à l'Organization | Conserver |
| `ItemList` contenant 6 `Service` sur `/services` | Cohérent avec la liste visible | Ajouter des identifiants/URL lorsque les services ont une page utile |
| `FAQPage` sur `/faq` | 8 Q/R correspondant aux textes rendus | Option sémantique seulement ; ne promettre aucun rich result FAQ |
| `ContactPage` sur `/contact` | Organisation liée au même `@id` | Conserver, compléter l'adresse typée |
| `BreadcrumbList` | Absent | Ajouter avec navigation visible sur nouveaux piliers/hubs/articles |
| `Article` | Absent, pas d'article actuel | Ajouter seulement lors de publications, avec auteur/date exacts |

Les objets `address` omettent `"@type": "PostalAddress"` dans Organization/Place/ContactPage ([layout.tsx:28](../../src/app/layout.tsx#L28), [contact/page.tsx:30](../../src/app/contact/page.tsx#L30)). Ajouter le type explicite et passer un validateur Schema.org ; les données de villes ne doivent pas être transformées en adresses d'usines supposées.

**Mise à jour 2026 :** les résultats enrichis FAQ ont été retirés de Google Search à compter du **7 mai 2026**. La documentation FAQ a été supprimée en juin. Conserver une FAQ utile aux acheteurs peut être pertinent ; ajouter ce balisage n'ouvre pas une nouvelle fonctionnalité Google. [Google : journal des changements](https://developers.google.com/search/updates).

Un JSON parseable n'est pas une validation des faits ni une garantie d'éligibilité. N'ajouter ni `Review`, notes, certificats, prix, capacités, MOQ, délais ni profil `sameAs` sans justificatif et contenu visible correspondant.

## 8. Entité, E-E-A-T et preuves

Le nom, l'email, la présence en Chine et les catégories sont cohérents entre dépôt/live. Les éléments suivants doivent toutefois être **validés en interne avant amplification** ; leur présence répétée sur le site n'est pas une vérification indépendante :

| Affirmation existante | Preuve de présence | Validation nécessaire |
|---|---|---|
| Siège/adresse Hong Kong | `src/lib/site.ts:36`, `/about` | Document d'identité légale et adresse utilisable publiquement |
| Opérations Shanghai/Hangzhou | `/about`, FAQ, JSON-LD | Nature des équipes/bureaux, formulation approuvée |
| Production « under one roof » | `src/app/our-work/page.tsx:72` | Modèle réel de production ; supprimer cette implication si non prouvée |
| Projets produits pour marques internationales | `src/app/our-work/page.tsx:18` et `:69` | Dossier projet et droit de publication, même anonymisé |
| Images désignées comme usine District 88 | `HomePage.tsx:114`, `about/page.tsx:41` | Origine, licence, lieu et relation avec District 88 |
| Coton biologique certifié disponible | `src/lib/faq.ts:20` | Certificat, détenteur, périmètre et validité du fournisseur/matière |
| Sublimation, membranes, résistance au chlore, aérodynamisme | Capabilities/Our Work/FAQ | Exemples de réalisation, fiche matière/test et limites techniques |
| QC à chaque étape | `src/lib/faq.ts:30` | Procédure, responsables, contrôles et critères réels |

Améliorations P1/P2 : histoire et équipe identifiables, photos avec provenance, distinction entreprise de sourcing/usines partenaires, cas terrain approuvés, auteur et relecteur technique pour Insights, méthodologie claire de mise à jour. Une étude de cas utile précise problème, spécification, arbitrage, validation et résultat réel ; aucune métrique ne doit être créée pour remplir le modèle.

## 9. Maillage, couverture éditoriale et concurrence interne

L'architecture actuelle est plate et facile à explorer. Cependant, les cinq cartes produit de l'accueil pointent toutes vers `/capabilities` ([HomePage.tsx:140](../../src/components/HomePage.tsx#L140)). Les pages matières/services n'établissent pas de relations contextuelles précises produit → besoin technique → RFQ. Il n'existe ni hub Insights, ni page dédiée par intention d'achat, ni véritable dossier de cas détaillé dans l'inventaire.

Il existe un **risque de chevauchement** entre l'accueil, `/capabilities` et `/services` sur les termes généraux ; aucune cannibalisation de classement n'est démontrée sans données requête/URL. Réserver un sujet principal à chaque URL. Maintenir `/capabilities` comme hub des produits, `/services` comme processus, `/materials` comme hub de choix technique. Relier les cartes à de nouvelles pages spécialisées uniquement une fois leur contenu substantiel et vérifié disponible.

Ne pas lancer deux pages quasi identiques `apparel-sourcing-china` et `fashion-sourcing-china` simplement pour deux synonymes. Même vigilance pour vêtements/apparel/fashion. Le plan d'architecture et la keyword map doivent arbitrer un propriétaire de chaque intention avant publication.

Le maillage cible doit être présent dans de vrais liens HTML : article → page commerciale principale → contact, plus liens vers articles complémentaires et cas réellement disponibles ; retour commercial → ressources utiles. Des liens de footer identiques ne remplacent pas ce contexte.

**Backlinks :** aucun nombre de domaines référents, autorité ou toxicité n'est mesuré. Les opportunités pertinentes sont les liens de partenaires/clients autorisés, profils professionnels légitimes, annuaires vérifiés de salons où l'entreprise participe réellement, contributions techniques originales et citations de guides/outils utiles aux acheteurs. Examiner les liens existants via GSC/export spécialisé avant toute décision de désaveu ; aucune action de ce type n'est justifiée ici.

## 10. Architecture internationale

Le site est actuellement **anglais uniquement**. L'absence de hreflang n'est pas un défaut lorsqu'il n'existe aucune version alternative. Ne pas créer des pages US/UK quasi identiques ou une hreflang vers des pages non traduites.

Conserver d'abord l'anglais mondial et organiser les versions françaises/allemandes éventuelles sous des chemins stables, seulement avec contenu et suivi commercial adaptés. Lorsqu'elles existent : canonical vers chaque version linguistique, hreflang réciproques et auto-référents, sélecteur de langue crawlable, éventuellement `x-default`, absence de redirection IP imposée. Préserver les URL anglaises existantes plutôt que lancer une migration générale sans bénéfice démontré. [Google : sites multilingues et multirégionaux](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).

## 11. RFQ et mesure commerciale

Le formulaire actuel demande nom, société, email, téléphone, catégorie, quantité et message ; il permet des pièces jointes. Nom, email et message sont requis, mais société/catégorie/quantité ne qualifient pas nécessairement le projet. Le sélecteur de catégorie ne définit pas explicitement un état initial vide contrôlé : vérifier l'affichage et éviter une catégorie choisie par défaut à l'insu du prospect.

[ContactForm.tsx:20](../../src/components/ContactForm.tsx#L20) envoie un POST à `/`, puis considère tout `res.ok` comme succès. Le HTML live comporte bien l'identifiant Netlify `form-name`; la détection du formulaire est donc prévue, **mais une réponse HTTP positive ne démontre pas à elle seule que le prospect a été reçu et traité**. Faire un test identifié en staging/recette avec et sans pièce jointe, vérifier la réception Netlify puis la destination commerciale et le traitement des erreurs. Ce test impliquant un envoi n'a pas été réalisé pendant cet audit en lecture seule.

L'interface annonce « Max 20MB » sans contrôle de taille/type côté client ([ContactForm.tsx:115](../../src/components/ContactForm.tsx#L115)). Clarifier limite par fichier/cumul, aligner validation et infrastructure, afficher une erreur avant l'envoi, vérifier plusieurs fichiers. Le message d'erreur propose l'email sans lien direct : rendre le secours cliquable et accessible sur mobile.

GA4 `G-EZE5Z3DLD3` est chargé via `next/script` ([layout.tsx:112](../../src/app/layout.tsx#L112)). Le dépôt n'émet que la configuration, aucun `rfq_submit_success`, `generate_lead` ou statut de qualification. L'éventuel suivi automatique des formulaires dans GA4 n'a pas pu être inspecté et ne doit pas servir de preuve de demande reçue.

**Instrumentation P1 proposée :** CTA commercial, début RFQ, erreur RFQ, succès confirmé, clic email/WhatsApp, puis qualification CRM reliée au lead. Enregistrer page d'entrée, source/medium et catégorie sans envoyer le nom, email, texte libre ou fichiers dans Analytics. Distinguer clic, tentative, réception et lead qualifié. Le tableau de bord du dossier définit les KPI, sans inventer de baseline.

**Accès réellement découverts :** GA4 `DISTRICT 88`, propriété `486860839`; GSC préfixe `https://www.district-88.com/`. Les deux connecteurs sont authentifiés. Quatre requêtes sur 90 jours (sources/sessions, événements, landing pages et recherche) ont été rejetées `LICENSE_NOT_FOUND` pour l'API Supermetrics. Cela prouve une limitation du connecteur, pas l'absence de données. Pour compléter : lire/exporter GA4 et GSC via un accès fonctionnel ; vérifier une propriété GSC domaine `district-88.com` ou préfixe apex. La découverte d'un seul préfixe www ne prouve pas qu'aucune autre propriété n'existe hors de ce compte accessible.

## 12. Registre d'actions priorisé

P0 = blocage critique démontré ou prérequis de véracité ; P1 = impact commercial/visibilité élevé ; P2 = amélioration ; P3 = option.

| ID | Priorité | Action concrète | Responsable proposé | Critère de clôture |
|---|---|---|---|---|
| T01 | P0 éditorial | Auditer les affirmations sensibles avant nouvelle publication | Direction + production | Registre faits/preuves/propriétaire ; aucun fait non validé répliqué |
| T02 | P1 | Optimiser les 7 images de l'accueil et les familles produit | Développement + design | Variantes adaptées, différé hors écran, QA textile, mesure avant/après |
| T03 | P1 | Recette réception RFQ et fichiers, puis événement de succès fiable | Développement + commercial | Demande reçue et événement unique vérifiés sur cas contrôlés |
| T04 | P1 | Rétablir baseline GSC apex/GA4 et données qualifiées | Marketing + analyste | Périmètre correct, collecte validée et définitions documentées |
| T05 | P1 | Créer architecture d'intentions et pages réellement distinctes | SEO + expert métier | Une URL principale par intention ; preuves disponibles |
| T06 | P1 | Développer preuves About/cas et méthode QC | Direction + production | Contenu signé, faits vérifiables, images documentées |
| T07 | P2 | Rendre le contenu important visible au tactile/focus et sans hydratation | Développement | Test mobile/clavier et JS indisponible concluant |
| T08 | P2 | Consolider `.html` vers URL canoniques | Développement | 301 unique, paramètres conservés, aucune boucle/404 régressive |
| T09 | P2 | Corriger title/H1/OG par URL et image de partage | SEO + développement | Tags live complets et spécifiques aux 8 pages |
| T10 | P2 | Mettre en place cache des assets hashés | Développement | Headers vérifiés, mises à jour immédiatement sûres |
| T11 | P2 | Typage PostalAddress et breadcrumbs futurs | Développement | Validation syntaxique/sémantique et correspondance visible |
| T12 | P2 | Ajouter date de modification éditoriale réelle au sitemap | Développement + rédaction | `lastmod` exact, pas date automatique de build |
| T13 | P2 | Renforcer liens contextuels et profondeur utile | SEO + rédaction | Chaque article a commercial + ressources, chaque pilier a ses preuves |
| T14 | P3 | Réduire le double saut HTTP www | Développement | Redirection directe apex, si faisable simplement |
| T15 | P3 | Maintenir llms.txt aligné ou ne pas y investir | Rédaction | Aucune promesse FAQ inexistante, aucun fait non validé |
| T16 | P3 | Traductions et hreflang après validation marché/capacité | Marketing + localisation | Versions complètes, réciproques, adaptées au support réel |

**Aucun P0 technique d'indisponibilité/indexation n'a été démontré.** T01 est un verrou éditorial imposé par la demande de ne rien inventer. Si la recette RFQ démontre une perte de demandes, T03 devient P0 opérationnel. Les résultats de performance/positionnement ne doivent pas être promis avant mesure.

## 13. Portée GEO des correctifs techniques

Les fondations pertinentes sont déjà largement présentes : HTML extractible, identité centrale, liens crawlables, catégories et étapes de service. Les correctifs utiles sont les faits sourcés, les réponses à l'acheteur, la profondeur technique validée et une navigation claire. Le fichier `llms.txt` et l'autorisation de nombreux bots ne prouvent ni lecture, ni recommandation, ni citation.

Google précise en 2026 que ses fonctionnalités génératives s'appuient sur les fondamentaux SEO et que Google Search n'utilise pas `llms.txt` comme mécanisme spécial. Il n'y a donc aucun motif de classer ce fichier devant les preuves, le contenu et les demandes commerciales. [Google : guide d'optimisation IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

Les recommandations détaillées par moteur et la distinction bots de recherche/entraînement figurent dans l'audit GEO du dossier. Le passage de cet audit à l'implémentation doit conserver cette règle : **un fait doit être validé dans le texte visible avant d'être amplifié par le balisage ou les nouveaux contenus**.
