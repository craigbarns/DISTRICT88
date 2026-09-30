# B — Audit GEO, entité et registre des faits / J — Données structurées

Audit du 24 septembre 2026. Document de travail, non publié sur le site. Aucune modification applicative dans ce livrable.

## Conclusion

Le site donne déjà une identité B2B intelligible : développement et fabrication de vêtements en Chine, cinq familles de produits, étapes de développement et coordonnées. L'accueil a pu être lu par un outil de recherche web avec son texte, ses liens et ses réponses FAQ. Le problème prioritaire est la profondeur des preuves : les capacités techniques, la nature des opérations, les projets, l'origine des images et les allégations de matières certifiées ne sont pas documentés dans les éléments consultés.

La stratégie recommandée consiste à rendre les compétences réelles vérifiables, à répondre aux décisions des acheteurs et à raccorder ces réponses à une demande de devis. Ajouter davantage de mots clés, de robots autorisés ou de schémas ne prouve ni l'expertise ni la capacité de livraison.

## Périmètre et niveaux de confiance

- **Fourni par le propriétaire (U)** : information présente dans le brief utilisateur ; utilisable pour préparer les contenus, sans prétendre à une vérification indépendante.
- **Observé (O)** : texte ou configuration lu dans le dépôt, l'export local, ou le site public. Prouve que l'information est affichée, pas qu'elle est vraie.
- **Vérifié (V)** : preuve primaire appropriée consultée, avec périmètre, date et origine. Les faits relatifs aux plateformes de recherche ci-dessous sont vérifiés dans leurs documentations ; aucune licence d'entreprise, commande, rapport d'essai ou certification District 88 n'a été fourni.
- **À confirmer (C)** : pièce ou validation métier nécessaire avant d'étendre ou de renforcer la déclaration publique.

Sources locales examinées : `src/lib/site.ts`, `src/lib/faq.ts`, `src/app/layout.tsx`, `src/app/{about,capabilities,services,materials,our-work,faq,contact}/page.tsx`, `src/app/robots.ts`, `src/components/{HomePage,FaqAccordion}.tsx`, `public/llms.txt`, exports HTML locaux. Le fichier `AGENTS.md` a été lu ; aucune API Next.js n'a été modifiée.

Source publique directement lisible : [accueil District 88](https://district-88.com/), consulté le 24/09/2026. Les ouvertures de sous-pages par l'outil web ont rencontré des erreurs de cache ; le crawl HTTP complémentaire de l'audit technique a ensuite permis de contrôler les huit pages publiques, `robots.txt`, `sitemap.xml` et `llms.txt`, tous en 200. Les captures HTML et `live.json` de ce crawl ont été lus : les allégations sensibles et les schémas cités ci-dessous sont également présents en production. Voir le livrable A pour les mesures HTTP et les preuves consolidées.

## B1. Audit des réponses que les moteurs doivent pouvoir extraire

| Question d'un acheteur | État constaté | Amélioration concrète | Priorité |
|---|---|---|---|
| Qui est District 88 ? | Nom légal déclaré, positionnement B2B et adresse HK dans le site ; identité juridique non vérifiée | Fiche d'identité validée avec raison sociale exacte, rôle contractuel, coordonnées et justificatif interne | P1 |
| Où l'entreprise intervient-elle ? | Shanghai/Hangzhou fournis par le propriétaire et affichés ; siège HK ajouté sur le site | Distinguer siège enregistré, bureau opérationnel, équipe locale, atelier partenaire et site de production | P1 |
| Que peut-elle fabriquer ? | Cinq familles présentes ; nombreuses techniques affirmées sans détail | Tableau par famille : types de vêtements, opérations réellement prises en charge, limites, preuves disponibles | P1 |
| Quels marchés sert-elle ? | Marques européennes dans le brief ; « international »/« Worldwide » dans les contenus et schémas | Séparer marchés déjà servis, marchés acceptés et pays ciblés pour l'acquisition ; ne pas inventer de clients US | P1 |
| Comment travaille-t-elle ? | Séquence de sept étapes sur l'accueil ; six groupes de services | Ajouter entrées, livrables, responsable et approbation client à chaque étape ; préciser le rôle des partenaires | P1 |
| Quelles matières maîtrise-t-elle ? | Trois familles et matériaux cités | Donner compositions et propriétés vérifiées par référence ; distinguer conseil matière et disponibilité confirmée | P1 |
| Quel contrôle qualité ? | Contrôles de mesures/confection/finition/emballage évoqués | Expliquer critères d'acceptation, points de contrôle, gestion des écarts et rapports remis ; ne pas ajouter AQL/ISO sans procédure réelle | P1 |
| Quels MOQ/délais/GSM ? | Aucun chiffre public probant repéré ; FAQ actuelle sans réponse dédiée | Expliquer les paramètres de validation d'un devis ; chiffre uniquement avec périmètre catégorie/matière/couleur/style et validité | P1 |
| Quelles certifications ? | Disponibilité de coton biologique certifié évoquée ; aucun certificat consulté | Énoncer le détenteur, le standard, le périmètre produit/site, la validité et la preuve sur demande, après contrôle | P1 |
| Pourquoi choisir District 88 ? | Promesse générale de coordination de bout en bout | Preuves de résolution de problèmes : échantillon modifié, contrôle documenté, produit validé, décision matière expliquée | P1 |

L'accueil et les FAQ contiennent déjà du texte HTML ; il ne faut pas présenter le site comme intégralement illisible sans JavaScript. Le composant FAQ rend les réponses dans le DOM puis masque les réponses fermées avec CSS. La classification `use client` n'implique pas à elle seule une absence du HTML pré-rendu. Vérifier néanmoins l'HTML réellement déployé, l'accessibilité clavier, la lecture mobile et la présence des réponses après déploiement.

Les descriptions des cartes `/our-work` et de certaines catégories deviennent visibles au survol. Elles existent dans le code mais doivent aussi être lisibles sur écran tactile et sans découverte accidentelle. Les spécifications et preuves essentielles doivent apparaître comme contenu principal de la page.

## B2. Registre factuel avant rédaction

Ce registre ne déclare aucune allégation existante fausse : il identifie ce qui reste à démontrer. « À confirmer » n'autorise pas à remplacer une valeur inconnue par une moyenne de marché.

| ID | Déclaration ou sujet | Provenance / statut | Preuve requise et traitement éditorial |
|---|---|---|---|
| F01 | Raison sociale DISTRICT 88 LTD | U + O ; C juridique | Extrait d'immatriculation récent ou document société ; orthographe et statut exacts. Ne pas ajouter numéro/date de fondation sans pièce. |
| F02 | Société de fabrication et sourcing en Chine | U + O ; C périmètre | Description validée du rôle : fournisseur contractant, sourcing, développement, coordination, confection propre ou partenaires. |
| F03 | Équipes/opérations Shanghai et Hangzhou | U + O ; C détails | Contacts opérationnels, fonctions et nature de présence. Ne pas transformer « opérations » en usines détenues. |
| F04 | Siège à Hong Kong, Star House, unité 532B | O accueil, `site.ts`, About, footer ; C | Justificatif de siège/adresse ; distinguer adresse enregistrée et bureau physique ouvert aux visites. Non fourni initialement par le propriétaire. |
| F05 | Mode, sportswear, cyclisme, technique, swimwear | U + O ; C capacités fines | Références de produits réellement développés, dossiers anonymisés et limites par catégorie. Le classement en cinq catégories ne prouve pas toutes les techniques. |
| F06 | T-shirts, hoodies, sweatshirts, pants/shorts, bikinis | U ; O partiel | Valider l'offre par produit avant de créer les pages. Une page streetwear ne doit pas dupliquer la page mode. |
| F07 | Marques européennes établies comme clients | U ; C preuve/publication | Commande ou référence interne et autorisation pour nom/logo/témoignage. Aucun nom client inventé ni déduit d'une photographie. |
| F08 | Marques internationales / marché mondial | O contenu et `areaServed` ; C | Pays livrés documentés ; séparer marchés cibles commerciaux (US/Europe) et expérience démontrée. |
| F09 | Possession d'usine / intégration sous un même toit | O implicite : alt d'image « facility », `/our-work` « under one roof » ; C critique | Confirmer propriété et implantation. En l'absence de preuve, proposer une description exacte de coordination/partenaires ; corriger aussi les alt, légendes et métadonnées. |
| F10 | Six programmes de `/our-work` réellement réalisés | O dépôt ; C critique | Dossier par programme : produit, année/période, rôle, problème, solution, validation, droits photos et permission client. Sinon présenter comme catégories d'application, pas études de cas réalisées. |
| F11 | Coton biologique certifié disponible | O `faq.ts`, `/materials`, `llms.txt` ; C critique | Nom du standard, détenteur, certificat valide, périmètre et traçabilité de la commande. Certification d'une matière/fournisseur ≠ certification de District 88. |
| F12 | Recyclé, durable, usine auditée, certifications sociales | Non attesté dans le corpus ; C | Ne pas ajouter GOTS, GRS, OEKO-TEX, ISO, BSCI ou promesse environnementale par simple convention sectorielle. Exiger preuves et langage adapté au périmètre. |
| F13 | Sublimation avancée, patronage aérodynamique | O accueil/capabilities/work ; C | Références d'exécution, méthodes, validation produit ; « aérodynamique » ne démontre aucun gain chiffré sans essai approprié. |
| F14 | Résistance au chlore, séchage rapide, évacuation d'humidité | O accueil/capabilities/materials/work ; C | Fiches matière et rapports d'essai applicables avec méthode et conditions. Distinguer propriété demandée et performance vérifiée. |
| F15 | Membranes respirantes, stretch quatre directions | O FAQ/materials/work ; C | Fournisseur/référence, composition et essai ; pas de seuil d'étanchéité, MVTR ou certification PPE sans preuve. |
| F16 | Patronage, gradation, sampling, trim sourcing | U partiel + O services/FAQ ; C périmètre | Confirmer qui fait quoi, livrables, outils si utiles et validation avant lancement. |
| F17 | Contrôle qualité à chaque étape | O FAQ/services ; C protocole | Plan QC, points de contrôle, échantillonnage, tolérances, responsabilité et exemple de rapport expurgé. Ne pas publier taux de défaut ou score AQL par défaut. |
| F18 | Production à échelle / capacités mensuelles | O formulation générale ; chiffre absent | Ne publier aucune cadence, nombre de lignes, effectif ou volume mensuel sans preuve datée et attribution aux sites. |
| F19 | MOQ, prix, délais, GSM disponibles | Non documenté | Obtenir grille contextualisée ou indiquer qu'une évaluation du brief est nécessaire. Les GSM d'un guide pédagogique ne sont pas des capacités garanties District 88. |
| F20 | OEM / ODM / private label / CMT | U OEM/ODM + O OEM/private label ; C modèles | Définir propriété du design, matières, responsabilités et service réellement disponible. CMT non confirmé, ne pas l'ajouter pour couvrir un mot clé. |
| F21 | Emballage et coordination export | O FAQ/services ; C limites | Distinguer coordination, exportateur contractuel, transport et Incoterms convenus. Pas de dédouanement/délai de livraison garanti implicite. |
| F22 | Langues parlées et contact +33 | O schéma English/Chinese, numéro français ; C | Valider langues et horaires réels ; numéro +33 ne prouve ni bureau français ni équipe de vente française. |
| F23 | Images de production et de vêtements | O fichiers et alt ; C provenance | Fichiers originaux, droits et lien à un projet/site. Une image illustrative ne doit pas être légendée comme usine ou commande de District 88. |
| F24 | Année de création, équipe, biographies | Absentes du corpus consulté | Collecter parcours, rôles et expérience réels, consentement photo ; ne pas fabriquer un auteur expert ni des années d'expérience. |

Chaque fait accepté doit avoir un propriétaire interne, une preuve privée ou publique, une phrase publique approuvée, les URLs concernées, une date de revue et, si applicable, une date d'expiration. Les pièces confidentielles restent dans le stockage métier autorisé ; le dépôt public ne reçoit que l'information publiable et le statut de vérification.

## B3. Entité et page About à construire

Conserver un nom de marque et une raison sociale cohérents. L'identifiant sémantique existant `https://district-88.com/#organization` est une bonne base. Les termes « apparel manufacturer China », « sourcing partner » et les catégories décrivent l'activité ; ce ne sont pas des raisons sociales alternatives à empiler dans `alternateName`.

Structure recommandée pour `/about` :

1. Une réponse directe à « What does District 88 do? », limitée au périmètre confirmé.
2. Fiche société : identité contractuelle, présence opérationnelle, contact et langues réellement disponibles.
3. Rôle de District 88 et des partenaires à chaque étape ; préciser propriété des sites seulement si démontrée.
4. Catégories servies avec liens vers pages commerciales et exemples autorisés.
5. Équipe : noms, fonctions, responsabilités et expérience vérifiables, avec photo authentique si autorisée.
6. Processus illustré par des livrables réels : brief, fiche matière, révision d'échantillon, approval, rapport QC expurgé.
7. Cas documentés et procédure de demande d'information complémentaire.
8. CTA vers le brief de collection et `/contact`.

Proposition de positionnement fondée sur le brief, à faire valider avec les opérations avant publication :

> District 88 supports apparel brands with product development, sourcing and production in China. The company has operations in Shanghai and Hangzhou and works across fashion apparel, sportswear, cycling apparel, technical apparel and swimwear. Send a product brief or tech pack so the team can assess the scope of your collection.

Cette proposition ne remplace pas les pièces du registre et n'ajoute ni siège HK ni usine propre ni MOQ. Sur les pages futures, les descriptions de l'entité doivent pointer vers le même référentiel interne, puis être adaptées à l'intention de lecture sans créer de contradictions.

## B4. Format éditorial lisible et exploitable

La réponse de 40–80 mots est une règle éditoriale utile pour l'acheteur pressé, **pas une exigence technique d'un moteur IA**. Ne pas forcer tous les sujets dans cette longueur. Les tableaux doivent apporter une décision : caractéristique, impact produit, vérification requise et information à transmettre au fournisseur.

Gabarit commercial recommandé :

- Définition de l'offre et destinataire précis.
- Produits et opérations réellement couverts ; limites importantes.
- Tableau matières/compositions/poids/propriétés avec uniquement les données approuvées ; valeurs inconnues remplacées par un besoin de brief, pas par une estimation présentée comme offre.
- Développement, validation de l'échantillon, production, QC et livrables attendus.
- Preuve authentique : étude de cas, photo contextualisée, exemple technique ou retour d'expérience signé.
- Questions acheteurs, deux à trois liens utiles et un CTA de devis.

Gabarit Insights : titre centré sur la décision de l'acheteur, réponse initiale, auteur réel, dates réelle de publication et de mise à jour, sources datées, tableaux/commentaires originaux, checklist tech pack, page commerciale principale, ressources complémentaires et CTA. Pour chaque tendance : observation sourcée → produit concerné → matière/construction → risque de développement → éléments à fournir au sourcing. Un scénario 2027 doit rester une anticipation attribuée, pas un fait accompli.

Une FAQ possible sans donnée chiffrée inventée :

> **What information is needed to assess a clothing production project?** Provide the garment category, reference images or tech pack, target materials, size range, quantity by style and colour, intended market and delivery requirements. These details give District 88 a basis for reviewing the project and identifying the specifications that still need to be confirmed before a quotation.

Ajouter des liens HTML standards vers les pages commerciales et les preuves ; ne pas réserver l'information essentielle à une image, à une pièce jointe ou à un chatbot. Les PDF techniques peuvent compléter une synthèse HTML lisible. Les articles doivent être signés par un professionnel réel ou une équipe éditoriale identifiée, avec relecteur technique lorsque nécessaire ; pas d'auteur fictif ni de titre professionnel non documenté.

## B5. Exploration IA : recherche et entraînement sont distincts

`src/app/robots.ts` et le `robots.txt` déployé contrôlé autorisent `*` et plusieurs bots explicitement. Cela exprime un accès prévu, pas un crawl réussi par ces bots, une indexation, une recommandation ni une citation. Le bon contrôle combine robots déployé, accès HTTP, éventuel WAF et logs authentifiés. Un simple changement d'user-agent local ne prouve pas qu'une requête provient du fournisseur.

| Plateforme | Contrôle pertinent et sens | Conséquence pour District 88 |
|---|---|---|
| ChatGPT Search | `OAI-SearchBot` pour la recherche ; `GPTBot` concerne l'entraînement ; `ChatGPT-User` est lié aux actions utilisateur et ne pilote pas l'inclusion Search | Vérifier l'accès de recherche et les IP officielles ; une permission d'entraînement n'est pas nécessaire pour choisir l'accès à la recherche. [OpenAI Crawlers](https://developers.openai.com/api/docs/bots) |
| Google AI Overviews / AI Mode | Crawl/indexation Google Search, contenu éligible aux extraits et réglage Search generative AI de la propriété | Contrôler l'inclusion GSC et son héritage, plus l'indexation des pages. [Contrôle Search generative AI](https://support.google.com/webmasters/answer/16908024) |
| Gemini Apps / Vertex AI | `Google-Extended` couvre certains usages d'entraînement et de grounding Gemini ; il ne pilote pas le classement Google Search | Documenter cette décision séparément ; ne pas décrire Google-Extended comme « bot AI Overviews ». [Google common crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended) |
| Claude | `Claude-SearchBot` pour la recherche, `Claude-User` pour les requêtes utilisateur, `ClaudeBot` pour la collecte susceptible de contribuer à l'entraînement | Le wildcard actuel n'exclut pas Claude-SearchBot bien qu'il ne figure pas dans les règles explicites ; absence de ligne dédiée ≠ blocage. [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Perplexity | `PerplexityBot` sert la découverte Search ; `Perplexity-User` répond à une action utilisateur ; la documentation distingue ces usages de l'entraînement des modèles de base | Vérifier l'accès réel et les plages IP officielles en cas de WAF ; une autorisation seule ne garantit pas un résultat. [Perplexity Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) |
| Bing / Copilot | Indexation et préférences de contenu Bing ; rapports AI Performance pour les expériences couvertes | Configurer Webmaster Tools et suivre les URLs citées ; ne pas extrapoler ces données à tous les assistants. [Bing AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) |

Les règles d'entraînement actuellement permissives ne doivent pas être renforcées au nom du SEO. Le choix métier de permettre ou non ces usages est séparé de l'objectif de découverte. Aucun changement de cette politique n'a été effectué dans cet audit.

## B6. `llms.txt` : correction de cohérence, pas chantier prioritaire

Le fichier existe déjà. Son lien FAQ annonce des réponses sur MOQ, délais et conformité alors que les huit questions du dépôt ne les couvrent pas. Il associe également Our Work à des partenariats de marques sans preuve correspondante dans le corpus. Ces résumés doivent être alignés sur les pages et sur le registre.

Priorité P2 : corriger les descriptions trompeuses et éviter d'en faire une source de faits divergente. Priorité P3 : maintien comme index expérimental pour les systèmes qui choisissent de l'utiliser. Il ne remplace ni sitemap, ni HTML, ni contrôles robots. Google précise qu'il n'utilise pas ces fichiers comme mécanisme spécial de visibilité et qu'ils n'apportent ni gain ni perte de classement Search. [Guide Google, section mythes](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting)

## B7. Vérification des références du brief

La recommandation McKinsey est réelle : **The State of Fashion 2026**, pages imprimées 41 et 45 (pages PDF 39 et 43), présente le GEO comme complément du SEO et recommande des informations produit interprétables par les agents. Son contexte est surtout la découverte des produits par les consommateurs et le retail. Cela soutient l'orientation générale ; cela ne démontre pas un effet causal propre à l'apparel sourcing B2B ou aux tableaux GSM/MOQ. [Rapport BoF–McKinsey](https://www.mckinsey.com/~/media/mckinsey/industries/retail/our%20insights/state%20of%20fashion/2026/the-state-of-fashion-2026-vf.pdf)

Les marqueurs `chatgpt-content-reference` du brief ne fournissent pas la bibliographie de l'étude alléguée sur le GEO apparel. Aucune preuve primaire de cette assertion spécifique n'a été établie pendant l'audit. Présenter la publication des caractéristiques vérifiées comme une recommandation d'utilité pour l'acheteur et de réduction des ambiguïtés, sans promesse de citations IA.

La documentation Google actuelle ne prescrit ni longueur de réponse, ni schéma IA spécial, ni démultiplication de pages par formulation de requête. L'expertise originale et la lisibilité pour l'utilisateur sont des critères de travail plus solides. [Guide Google du 10/07/2026](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## J1. Schémas existants et écarts

| Type observé dans le dépôt | Emplacement | Évaluation et action |
|---|---|---|
| `Organization` | Layout global ; rappel Contact | Bonne base d'identité avec `@id` stable. `address` et adresses des `Place` sont des objets sans `@type: PostalAddress` explicite : rendre le type clair. Vérifier raison sociale, lieu, téléphone et langues avant extension. |
| `WebSite` | Layout global | Conserver `publisher` pointant vers la même organisation et langue `en` actuellement. |
| `ItemList` / `Service` | `/services` | Modélisation cohérente de services, mais les descriptions et `areaServed: Worldwide` doivent être vérifiées. Les services ne constituent pas à eux seuls un rich result Google garanti. |
| `FAQPage` | `/faq` | Q/R issues du même tableau que le contenu, bonne cohérence de génération. Ne pas promettre un affichage enrichi Google ; voir changement 2026 ci-dessous. |
| `ContactPage` | `/contact` | Bonne description de page ; référencer l'organisation unique plutôt que maintenir des versions manuelles contradictoires. |
| `BreadcrumbList`, `Article`, `BlogPosting`, `AboutPage` | Non repérés | Ajouter selon les nouvelles pages et leur contenu réel, pas comme types génériques sur toutes les URLs. |

## J2. Plan sémantique cible

| Page | Schéma recommandé | Données utiles / conditions |
|---|---|---|
| Accueil / About | `Organization` unique ; `WebSite` ; `AboutPage` pour About | `name`, `legalName` confirmé, `url`, vrai logo accessible, contact, `PostalAddress` confirmé. `sameAs` uniquement profils officiels contrôlés ; pas de liens concurrents, d'annuaires non vérifiés ou de mots clés. [Google Organization](https://developers.google.com/search/docs/appearance/structured-data/organization) |
| Pilier et offre de fabrication | `WebPage` avec sujet principal `Service`, fournisseur relié à l'organisation ; `BreadcrumbList` si fil visible | `serviceType`, description, public visé, zone réellement servie. Exprimer les capacités en texte ; ne pas inventer prix ou offre catalogue. [Schema.org Service](https://schema.org/Service) |
| Hub Insights / clusters | `CollectionPage`, éventuellement `ItemList` | Lister les articles effectivement accessibles, pas le calendrier à venir. Les pages de cluster doivent avoir une utilité propre. |
| Article Insights | `Article` ou `BlogPosting` | `headline`, `mainEntityOfPage`, `image` réelle, `author` identifié, `publisher`, dates ISO réelles, `inLanguage`. Le contenu visible doit porter ces mêmes dates/auteurs. [Google Article](https://developers.google.com/search/docs/appearance/structured-data/article) |
| Navigation hiérarchique | `BreadcrumbList` | URLs canoniques, libellés lisibles et ordre cohérent avec le chemin visible. [Google Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) |
| Étude de cas publiée | `Article` / `CreativeWork` selon forme | Client seulement avec permission ; sujet, contributeurs réels, date et résultats démontrés. Pas de `Review`/`AggregateRating` pour une présentation rédigée par l'entreprise. |
| FAQ | `FAQPage` facultatif | Questions et réponses visibles, sans contenu promotionnel dissimulé. Conserver pour le sens si utile, sans effort dédié aux rich results. |

**Mise à jour importante au 24/09/2026 : Google a arrêté les FAQ rich results à partir du 7 mai 2026 et retiré leur documentation le 15 juin.** La limitation antérieure aux sites santé/gouvernement n'est donc plus le bon état actuel. Le type Schema.org peut rester valide ; c'est sa fonctionnalité d'affichage Google qui a disparu. [Journal officiel Google, mai et juin 2026](https://developers.google.com/search/updates)

Ne pas utiliser `Product` avec faux prix, avis ou stock sur une offre de fabrication sur devis. Ne pas créer `LocalBusiness`/succursales physiques pour des villes où seule une activité opérationnelle est déclarée. Ne pas renseigner certifications, effectifs, fondateurs, date de création ou métriques d'usine sans preuve. Ne pas présenter `knowsAbout` ou le champ `keywords` comme certification d'expertise.

Recette de validation lors de l'implémentation : parser tous les blocs JSON-LD ; vérifier URLs canoniques, références `@id`, correspondance au contenu visible et absence d'invention ; utiliser Schema.org Validator pour la sémantique et Rich Results Test pour les fonctionnalités Google effectivement supportées. Un test sans erreur ne garantit aucun classement ni affichage.

## B8. International : une entité, des pages réellement localisées

Le dépôt inspecté présente une version anglaise. Aucun besoin d'ajouter hreflang à une page sans équivalent traduit. À l'ouverture de versions linguistiques, prévoir URLs distinctes, contenu réellement traduit et relu par une personne compétente, canonique de chaque version sur elle-même, hreflang réciproque incluant chaque version, codes langue/région valides et `x-default` seulement si pertinent. Ne pas créer une série de pages quasi identiques US/UK/Europe pour simuler des implantations. [Documentation hreflang Google](https://developers.google.com/search/docs/specialty/international/localized-versions)

Une page française doit annoncer la même entité et les mêmes faits approuvés. Traduire le vocabulaire de l'acheteur et le formulaire, vérifier la capacité commerciale de répondre dans la langue. Les marchés cibles ne doivent pas devenir des adresses ou des témoignages fictifs.

## B9. Mesurer l'accès, la visibilité et la qualité commerciale séparément

Les métriques « bot passé », « page indexée », « lien cité », « visite reçue » et « lead qualifié » décrivent des étapes différentes. Aucune ne suffit à prouver la suivante. La validation factuelle reste nécessaire même si une IA reprend une allégation du site.

État documentaire actuel : [Generative AI performance report, GSC](https://support.google.com/webmasters/answer/16984139) annonce un déploiement mondial au 31/08/2026. Le rapport documenté porte sur les **impressions** AI Overviews/AI Mode, avec pages, pays, dates et appareils ; les données restent incluses dans les performances Web. Ne pas les additionner. Il ne documente pas ici des clics, CTR, rangs ou conversions IA séparés. La page mentionne aussi des réserves de disponibilité/données suffisantes : vérifier le compte réel, dont aucun export n'a été consulté pour cet audit.

Ce guide spécifique récent complète la page générale [AI features](https://developers.google.com/search/docs/appearance/ai-features), qui décrit encore l'agrégation Web. Ne pas conclure à l'absence de rapport IA distinct à partir de cette seule page. L'export manuel du rapport est documenté ; l'accès via API/connector doit être vérifié avant de promettre une automatisation.

[Search generative AI control](https://support.google.com/webmasters/answer/16908024) documente l'inclusion par défaut et l'héritage éventuel d'une propriété parente. Vérifier l'état de la propriété District 88 ; aucun réglage réel n'a été inspecté ou changé.

[Bing AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) apporte citations, URLs référencées et requêtes de grounding échantillonnées pour les expériences couvertes. Ce sont des signaux de visibilité, pas une mesure exhaustive des assistants ou un classement. Rapporter les visites identifiables ChatGPT/Perplexity/Gemini/Copilot séparément dans l'analytics, avec une catégorie non attribuable ; le referrer peut être absent.

Suivi éditorial mensuel recommandé : 15–20 questions acheteurs stables, langue/pays/moteur/date et contexte enregistrés, liens réellement cités, exactitude des faits repris. Ce panel est un diagnostic reproductible, pas une part de marché représentative. Relier le trafic mesurable aux RFQ acceptées par le serveur puis à la qualification commerciale. Voir L pour le tableau de bord complet.

## B10. Priorités d'exécution et critères d'acceptation

| Priorité | Action | Responsable recommandé | Terminé lorsque |
|---|---|---|---|
| P0 | Vérifier que le canal RFQ aboutit ; corriger tout échec confirmé | Développement + commercial | Une soumission contrôlée est reçue et exploitable ; pas de lead compté sur un clic seul. Voir audit technique. |
| P1 | Valider F01–F24, en premier lieu usine, cas, coton certifié et performances | Direction + production/QC | Chaque déclaration publiée a une preuve et un périmètre, ou une formulation précise qui n'affirme pas le fait inconnu. |
| P1 | Renforcer About, services, matières, processus et offres prioritaires | Responsable contenu + expert métier | L'acheteur comprend rôle, livrables et conditions ; maillage vers devis ; aucun chiffre inventé. |
| P1 | Transformer les exemples confirmés en études de cas substantielles | Production + commercial | Dossiers originaux, données anonymisées si besoin, images et permission de publication. |
| P1 | Vérifier crawl/indexation et inclusion IA dans les comptes | SEO / propriétaire des comptes | Contrôles consignés ; absence de blocage involontaire prouvée avec HTTP et accès disponibles. |
| P2 | Cohérence JSON-LD, types d'adresse, articles et breadcrumbs | Développement | Validation sémantique et concordance visuelle, sans schéma excessif. |
| P2 | Auteurs, dates, sources et relecture technique dans Insights | Éditorial | Les articles ont un responsable réel, une date justifiée et une contribution métier identifiable. |
| P2 | Corriger résumé FAQ/Our Work dans `llms.txt` | Contenu | Le fichier ne promet plus des réponses ou références absentes. |
| P3 | Veille des standards et expériences IA optionnelles | SEO | Expériences limitées, mesurées et sans priorité sur l'offre et les preuves. |

## Bibliographie et dates de consultation

Tous les liens ci-dessous ont été consultés le **24 septembre 2026**, sauf indication explicite ; les dates de mise à jour ne sont données que lorsqu'affichées dans la source.

| Référence | URL exacte | Date / usage |
|---|---|---|
| District 88, pages publiques | https://district-88.com/ ; https://district-88.com/about ; https://district-88.com/capabilities ; https://district-88.com/services ; https://district-88.com/materials ; https://district-88.com/our-work ; https://district-88.com/faq ; https://district-88.com/contact | Lecture publique et captures du crawl HTTP ; observation, pas preuve indépendante des allégations |
| District 88, fichiers de découverte | https://district-88.com/robots.txt ; https://district-88.com/sitemap.xml ; https://district-88.com/llms.txt | Captures du crawl HTTP ; statut 200 et contenu contrôlés |
| Google, AI features | https://developers.google.com/search/docs/appearance/ai-features | Conditions générales ; à compléter par rapports spécifiques récents |
| Google, AI optimization guide | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide | Mise à jour affichée 10/07/2026 ; SEO, qualité, limites des « astuces » |
| Google, journal de documentation | https://developers.google.com/search/updates | Entrées 08/05/2026 et 15/06/2026 ; fin des FAQ rich results |
| GSC, Search generative AI control | https://support.google.com/webmasters/answer/16908024 | Annonce déploiement mondial au 31/08/2026 ; inclusion/héritage |
| GSC, Generative AI performance | https://support.google.com/webmasters/answer/16984139 | Annonce déploiement mondial au 31/08/2026 ; impressions et dimensions |
| Google common crawlers | https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers | Mise à jour affichée 14/07/2026 ; Google-Extended |
| OpenAI Crawlers | https://developers.openai.com/api/docs/bots | Page officielle recherchée puis récupérée via OpenAI Docs |
| Anthropic crawlers | https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler | Date affichée 07/04/2026 ; usages des trois bots |
| Perplexity Crawlers | https://docs.perplexity.ai/docs/resources/perplexity-crawlers | Usage des bots et vérification IP/WAF |
| Bing AI Performance | https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview | 10/02/2026 ; périmètre du rapport |
| Google Organization | https://developers.google.com/search/docs/appearance/structured-data/organization | Identité et types d'adresse |
| Schema.org Service | https://schema.org/Service | Modélisation sémantique d'une prestation |
| Google Article | https://developers.google.com/search/docs/appearance/structured-data/article | Articles et propriétés adaptées |
| Google Breadcrumb | https://developers.google.com/search/docs/appearance/structured-data/breadcrumb | Navigation et balisage |
| Google localized versions | https://developers.google.com/search/docs/specialty/international/localized-versions | hreflang et versions linguistiques |
| BoF–McKinsey, The State of Fashion 2026 | https://www.mckinsey.com/~/media/mckinsey/industries/retail/our%20insights/state%20of%20fashion/2026/the-state-of-fashion-2026-vf.pdf | Pages imprimées 41/45, PDF 39/43 ; interprétation circonscrite au contexte du rapport |
