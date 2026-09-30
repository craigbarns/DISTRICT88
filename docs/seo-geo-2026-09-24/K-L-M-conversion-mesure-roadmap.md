# District 88 — conversion, KPI et plan à 90 jours

24 septembre 2026. Recommandations à mettre en œuvre après l’audit ; pas de configuration Analytics, d’envoi de formulaire commercial ou de publication effectuée pendant cette mission.

## K. Conversion vers des RFQ qualifiées

### Ce qui existe

Le formulaire /contact demande nom, société, e-mail, téléphone, catégorie, quantité, message et pièces jointes. Le composant envoie vers Netlify Forms, affiche un succès sur réponse HTTP correcte et prévoit un état d’erreur. Un lien WhatsApp global et l’adresse e-mail sont présents. Le dépôt installe GA4 `G-EZE5Z3DLD3`, mais ne définit aucun événement explicite de demande de devis ni de navigation article → page commerciale.

La présence du code et du formulaire HTML ne démontre pas la réception d’une demande par l’équipe. Vérifier en préproduction la détection Netlify, l’enregistrement, les pièces jointes et les notifications ; utiliser ensuite un test clairement identifié et rapproché du back-office lorsque l’envoi est autorisé. Aucun faux prospect n’a été envoyé lors de l’audit.

### Parcours recommandé

Article répond à une question → tableau/checklist utile → lien vers le service concerné → explication et preuve sur la page commerciale → brief de projet → contrôle serveur → confirmation → qualification par l’équipe → devis/échantillon → commande.

| Intervention | Comportement attendu | Pourquoi | Priorité |
|---|---|---|---|
| CTA lié au produit | « Send your cycling tech pack » avec catégorie préremplie | Réduit l’effort et garde le contexte | P1 |
| État initial catégorie | Choix vide explicite ou prérempli par contexte ; modifiable | Évite de classer involontairement les demandes en Fashion | P1 |
| Qualification progressive | Société/site, rôle, marché de vente, catégorie, quantité par style/couleur, date souhaitée | Permet d’évaluer faisabilité et adéquation | P1 |
| Champs essentiels seulement | Contact, projet et catégorie ; permettre « quantities to define » | Ne pas exclure un bon projet au stade développement | P1 |
| Pièces jointes | Types, taille et nombre validés réellement côté traitement ; erreurs lisibles | « Max 20MB » affiché ne suffit pas à prouver une limite appliquée | P1 |
| Alternative de brief | Texte et contact e-mail accessibles, y compris mobile | La pièce jointe ne doit pas être une obligation | P1 |
| Confirmation fiable | État accessible après enregistrement confirmé, sans promesse de délai non validée | Évite les faux succès et attentes erronées | P1 |
| CTA article | Un lien contextuel utile puis CTA final | Maintient la lecture et l’intention fournisseur | P2 |
| Preuve près du CTA | Résumé de processus ou cas autorisé de la catégorie | Aide à décider avant le formulaire | P1 |
| Friction mobile | Champs/labels lisibles, clavier adapté, focus erreurs, WhatsApp sans recouvrir Submit | Permet l’action sur petit écran | P1 |

Ne pas imposer une adresse professionnelle au point de rejeter un fondateur utilisant une messagerie grand public. Demander les quantités comme données du projet, pas comme validation d’un MOQ supposé. Ne pas annoncer un devis instantané, une gamme de prix ou un délai de réponse sans engagement réel.

### Qualification métier proposée

La direction valide la définition avant reporting. Une demande est qualifiée lorsque : organisation ou projet de marque identifié ; produit dans le périmètre accepté ; besoin B2B explicite ; informations suffisantes pour une revue de faisabilité ; possibilité de poursuivre un échange. Quantité, budget, échéance et marché sont évalués par l’équipe selon les contraintes réelles, sans seuil universel inventé.

Statuts CRM : nouveau → informations manquantes → qualifié → devis/échantillonnage → gagné/perdu. Motif de non-qualification distinct : demande consommateur, produit hors périmètre, spam, doublon, exigences incompatibles ou données insuffisantes. Les pays prioritaires servent à segmenter, pas à éliminer automatiquement toute demande d’ailleurs.

### Plan de mesure des événements

| Événement | Déclenchement | Paramètres non personnels | Usage |
|---|---|---|---|
| article_to_commercial | Clic contextuel depuis un article | article_slug, commercial_slug, cluster, link_position | Diagnostic du chemin éditorial |
| rfq_cta_click | Clic vers /contact | source_path, content_type, product_category, cta_position | Mesure d’intention, pas lead |
| rfq_start | Première interaction utile du formulaire | form_id, source_path, product_category | Abandon et friction |
| rfq_error | Erreur d’enregistrement ou validation | form_id, error_type parmi valeurs contrôlées | Fiabilité technique |
| generate_lead | Enregistrement de la RFQ confirmé, une fois par demande | form_id, product_category, has_attachment | Événement clé de soumission |
| contact_channel_click | Clic e-mail ou WhatsApp | channel, source_path | Microconversion, pas soumission reçue |
| qualify_lead | Qualification dans CRM avec règles validées | catégorie, marché et identifiant pseudonyme selon architecture approuvée | Qualité commerciale |
| close_convert_lead | Passage en client confirmé | source et catégorie attribuables | Résultat commercial |

Les événements de lead ci-dessus s’appuient sur la nomenclature [GA4 recommandée pour la génération de prospects](https://support.google.com/analytics/answer/9267735?hl=en). Les événements personnalisés ne sont pas automatiques. Ne pas compter un clic ou un événement générique form_submit comme preuve de livraison d’une RFQ. Contrôler la déduplication client/serveur ; un paramètre event_id ajouté au hasard ne garantit pas une déduplication GA4. Le back-office est la source de vérité des demandes reçues.

Conserver la landing page initiale et la dernière page commerciale utile dans le parcours, sans UTM sur les liens internes. Enregistrer la source dans le CRM si les règles de mesure applicables le permettent. Aucun nom, e-mail, téléphone, message, URL de fichier, nom de fichier ou tech pack ne doit partir dans GA4 ; contrôler également les URL et paramètres. [Règles Google Analytics sur les données personnelles](https://support.google.com/analytics/answer/6366371?hl=en).

Recette : un parcours test par catégorie, un échec de formulaire, une tentative double, une erreur de fichier, un parcours mobile ; comparer événement, demande stockée et notification. Après recette, exclure ces tests des rapports opérationnels. La gestion du consentement et l’information de confidentialité doivent être vérifiées dans le déploiement de la mesure pour les marchés desservis ; cette vérification ne remplace pas la définition des conversions.

## L. Tableau de bord KPI

### État des données au 24 septembre 2026

GA4 District 88 est identifiable via le connecteur, propriété `486860839`. Une connexion Search Console est identifiable uniquement pour `https://www.district-88.com/`. Le domaine canonique observé est `https://district-88.com`. Les requêtes de statistiques GA4/GSC ont renvoyé `LICENSE_NOT_FOUND` : connexion présente, mais extraction par cette API indisponible. Aucune session, impression, position ou conversion réelle n’est donc chiffrée ici. Une donnée manquante est « n.d. », jamais zéro.

Créer/vérifier une propriété Domaine `district-88.com` ou un préfixe HTTPS sans www avec les droits adéquats. L’ancien préfixe www peut aider à examiner une migration, mais ne suffit pas à mesurer le site canonique. Le tableau de bord livré est un modèle opérationnel à alimenter par exports vérifiés ; il n’est pas un dashboard connecté en direct.

### Dictionnaire

| KPI | Définition exacte | Source / fréquence | Segments et décision |
|---|---|---|---|
| Sessions organiques | Sessions classées Organic Search selon la définition GA4 documentée | GA4, semaine et mois | Pays, appareil, landing page, catégorie ; audience fournisseur |
| Impressions non-brand | Impressions des requêtes visibles excluant District 88 et variantes connues | GSC, semaine/mois | Pays, page, requête ; couverture hors marque. Les requêtes anonymisées empêchent un total exhaustif. |
| Clics non-brand | Clics avec le même filtre et périmètre que les impressions | GSC, semaine/mois | CTR calculé clics/impressions, pas moyenne des CTR par ligne |
| Positions commerciales | Position moyenne par requête+page+pays+appareil, ou suivi SERP distinct | GSC / outil dédié, semaine | Ne pas agréger pays/appareils comme un rang absolu ; pas de rang IA inventé |
| Impressions IA Google | Impressions AI Overviews/AI Mode du rapport dédié, si disponible | GSC Generative AI, mensuel | Pages/pays/appareils ; sous-ensemble, ne pas ajouter au total Web |
| Citations Bing/Copilot | Citations de pages dans les surfaces couvertes | Bing Webmaster AI Performance, mensuel | URLs et requêtes de grounding disponibles ; distinct des visites |
| Sessions référentes IA | Sessions avec source/referrer identifiable d’un assistant | GA4, semaine/mois | chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai observés ; liste révisable |
| Sessions article → commercial | Sessions distinctes contenant la séquence article puis page commerciale | GA4 exploration/export, mensuel | Numérateur du taux de passage, évite plusieurs clics d’une même session |
| Taux article → commercial | Sessions article→commercial / sessions ayant consulté un article | Même périmètre/canal/période | Évalue si le guide amène une décision d’achat |
| RFQ reçues | Demandes distinctes enregistrées, hors spam/tests/doublons | Back-office/CRM, hebdomadaire | Distinguer GA4 lead events et demandes opérationnelles |
| Taux de conversion organique | Sessions organiques avec ≥1 RFQ confirmée / sessions organiques | GA4 rapproché back-office, mensuel | Taux de session, distinct du nombre de RFQ/session |
| RFQ organiques qualifiées | Demandes de la cohorte d’acquisition organique validées par l’équipe | CRM, mensuel et maturation à 30/60 jours | Catégorie, marché, landing page et motif |
| Taux de qualification | RFQ qualifiées / RFQ évaluées de la même cohorte d’acquisition | CRM, cohorte mensuelle | Afficher séparément les demandes encore non évaluées |
| Taux RFQ → client | Clients gagnés / RFQ évaluées de la même cohorte, à maturité définie | CRM, trimestre | Éviter comparaison de cohortes récentes et anciennes sans délai commun |
| Revenus attribués | Commandes signées de leads attribuables selon règle documentée | CRM/comptabilité | Pas d’estimation de revenu par session sans base réelle |
| Indexation et erreurs | URLs attendues vs indexées, exclusions, 404 internes | GSC + crawl, semaine | Séparer découvrable/indexable/indexée |
| CWV | LCP, INP, CLS au 75e percentile mobile, fenêtre terrain indiquée | CrUX/GSC si échantillon, mensuel | Les scores Lighthouse sont des diagnostics labo, pas des CWV terrain |

Le [rapport Generative AI de Search Console](https://support.google.com/webmasters/answer/16984139) décrit un déploiement mondial le 31 août 2026 et des impressions pour AI Overviews/AI Mode. Il propose des ventilations page, pays, date et appareil ; l’accès dépend encore du rapport et de données disponibles. Ces impressions sont déjà comprises dans Web Performance. Ce rapport ne donne pas de clics, CTR ou position IA distincts dans la documentation consultée. Les dates y sont en PT ; ne pas fusionner directement avec les journées GA4 sans vérifier le fuseau.

Le [rapport AI Performance de Bing](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) mesure des citations sur les surfaces prises en charge. Une citation n’équivaut ni à un visiteur ni à un lead. La disponibilité dans le compte District 88 n’a pas été confirmée.

Les référents IA sont un minimum observable : applications, redirections, copier-coller, protections et réponses sans clic rendent l’attribution partielle. Gemini peut être une référence identifiable, alors qu’AI Overviews appartient à Google Search ; ne pas les confondre. Ajouter dans le brief une question facultative « How did you hear about District 88? » et rapprocher cette déclaration sans écraser la source mesurée.

### Usage du classeur

L’onglet KPI prévoit douze lignes mensuelles avec entrées vides et formules de taux. Renseigner les seuls mois disposant d’exports complets ; conserver n.d. sinon. Les trois dénominateurs sont différents : sessions organiques, sessions ayant vu un article, RFQ évaluées. Le classeur n’additionne pas les pourcentages et ne remplace pas les champs manquants par zéro. Les totaux de plateformes différentes restent séparés.

Suivre US, FR, GB, DE, IT, ES, NL, DK, SE, NO et autres pays séparément dans la source ; les segments par pays/landing page sont des vues, pas des chiffres ajoutés au total global. Garder des exports anonymisés datés comme source de chaque saisie.

### Objectifs initiaux

J30 : disposer d’une baseline fiable sur une période complète et du comptage de RFQ validé. J60 : comparer pages commerciales et contenus par demandes qualifiées, avec les volumes affichés. J90 : arbitrer les sujets à partir de la qualité des demandes et des signaux de découverte. Fixer seulement alors des cibles chiffrées de leads et conversion avec l’équipe commerciale ; aucun objectif de trafic ou revenu arbitraire n’est une prévision.

Contrôles opérationnels proposés : chaque article publié a une page commerciale liée et un auteur/relecteur réel ; chaque claim quantifié a une preuve ; aucune URL prévue n’est liée comme si elle existait déjà ; aucune soumission de test n’entre dans la baseline. Ce sont des critères de recette, pas des résultats déjà atteints.

## M. Feuille de route à 90 jours

J0 = démarrage de mise en œuvre, à fixer. Les fenêtres ci-dessous sont relatives pour ne pas confondre date d’audit et date de lancement. Le calendrier éditorial propose octobre 2026–septembre 2027 et peut être décalé si les prérequis ne sont pas prêts.

| Période | Livrable / action | Responsable proposé | Dépendance | Critère d’acceptation |
|---|---|---|---|---|
| J1–7 | Registre des faits, modèle fournisseur, siège/opérations, photos/projets | Direction + production | Documents internes | Chaque affirmation classée prouvée, approuvée ou retirée des brouillons |
| J1–7 | Accès GSC domaine canonique, GA4 et formulaires | Web + direction | Droits de compte et méthode d’extraction | Propriété correcte ; baseline exportable ; aucun zéro interprété depuis une donnée indisponible |
| J1–10 | Recette RFQ et pièces jointes, plan d’événements | Développement + commercial | Environnement de test | Requête enregistrée, confirmation cohérente, événement unique et qualification traçable |
| J5–14 | Images, HTML sans dépendance visuelle au JS, mobile | Développement | Mesures labo reproductibles | Tailles responsive, stabilité visuelle, texte/CTA visibles sans JS, comparaison avant/après documentée |
| J7–14 | Titles, descriptions, headings, partage social, URLs .html | SEO + développement | Matrice d’URLs actuelle | Canonicals cohérents, redirections sans boucle, 404 réelle, métadonnées distinctes |
| J8–21 | About, services, materials, distinction projets/exemples | Rédaction + production | Registre des faits | Identité claire, rôles, processus et preuves publiables ; pas de claims non validés |
| J10–21 | Composants Insights : article, cluster, auteur, dates, sources, schema | Développement + éditorial | Architecture et modèle contenu | HTML crawlable, maillage, breadcrumbs, métadonnées, sitemap ; brouillons exclus |
| J15–30 | Trois premières pages commerciales | SEO + production | Faisabilité/QC/RFQ | Intentions distinctes, spécifications vérifiées, CTA contextualisé |
| J15–30 | Lancement éditorial progressif | Rédacteur + expert | Briefs, SERP, sources et landing live | Deux créneaux/semaine si validation satisfaite, sinon report |
| J31–45 | Cycling, sportswear, swimwear | Production + éditorial | Données par catégorie | Contenu propre à la catégorie, références autorisées ou processus documenté |
| J31–60 | Deux cas de développement vérifiables | Direction + production | Dossiers réels, autorisations | Contexte, contraintes, étapes, preuves ; résultat non inventé |
| J31–60 | Guides matières, tech packs et sourcing | Éditorial | Sources et relecture technique | Tableau/checklist original ; lien vers service ; dates/auteur |
| J45–60 | Suivi indexation, premières impressions, chemin vers RFQ | SEO + analyste | Données collectées | Écarts documentés, canonicals choisis et pages orphelines examinés |
| J61–75 | T-shirt, hoodie, technical apparel selon preuves | Production + éditorial | Spécifications propres | Pas de clonage du modèle de contenu ; techniques non confirmées exclues |
| J61–90 | Mentions professionnelles et actifs citables | Direction + contenu | Ressources originales et autorisations | Liste qualifiée et actifs prêts ; tout contact externe autorisé séparément |
| J75–90 | Revue qualification/attribution et priorités éditoriales | Commercial + analyste | Cohortes assez matures | Décisions fondées sur RFQ évaluées ; sources absentes et délais exposés |
| J90 | Revue capacité et prochaine tranche de 90 jours | Direction | Bilan qualité + demande | Réviser pages/langues/sujets, maintenir une cadence soutenable |

### Priorités de décision

P0 = incident critique démontré : impossibilité de crawl/indexation voulue ou RFQ réellement perdue. Aucun P0 confirmé sur les vérifications publiques actuelles ; si la recette prouve un échec de réception, le traitement RFQ passe en P0. P1 = fondations business, données factuelles, mesure, images lourdes et pages prioritaires. P2 = enrichissement, nettoyage des variantes d’URL et amélioration continue. P3 = expérience facultative comme llms.txt ; jamais un substitut au HTML.

### Cadence de production réaliste

Deux publications par semaine représentent 104 créneaux sur 52 semaines, et non huit articles exactement chaque mois. Le mix annuel visé est 42 fabrication/sourcing, 31 tissus/développement, 21 tendances et 10 actualité/réglementation, soit environ 40/30/20/10. Les six clusters servent la navigation ; ces quatre familles servent le pilotage du mix et ne nécessitent pas de dupliquer les articles.

Chaque sujet passe par recherche SERP → sources → entretien technique → rédaction → relecture → mise en page → recette → publication. Les tendances 2027/2028 restent des observations ou hypothèses sourcées selon leur date, jamais une certitude fabriquée. Les articles réglementaires vérifient au moment de publication les textes, marchés, catégories et dates applicables ; ne pas figer une échéance générale à tous les vêtements.

La direction fournit un interlocuteur produit/QC, un rédacteur, une relecture technique et un responsable web/SEO. Si ces ressources ou les preuves manquent, déplacer le créneau et réviser le mix. Une mise à jour utile s’effectue sur l’URL existante avec sa date réelle ; elle ne compte pas artificiellement comme un nouvel article du calendrier.
