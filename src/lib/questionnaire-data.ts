export interface Question {
  id: string;
  text: string;
  format: "textarea" | "triple-input" | "triple-textarea";
  placeholder?: string;
  placeholders?: [string, string, string];
}

export interface QuestionnaireSection {
  id: string;
  title: string;
  subtitle: string;
  consigne?: string;
  questions: Question[];
  afterQuestions?: string; // instruction après les questions
}

export const SECTIONS: QuestionnaireSection[] = [
  {
    id: "partie1",
    title: "Tes projets, décisions et blocages actuels",
    subtitle: "Partie 1 sur 5",
    consigne:
      "Cette partie est factuelle. Ne cherche pas à analyser ou résoudre. Décris simplement ce qui est là, maintenant, dans ta vie.",
    questions: [
      {
        id: "B1",
        text: "Quels sont tes 2-3 projets ou transitions en cours en ce moment ?",
        format: "textarea",
        placeholder: "Décris tes projets ou transitions actuels...",
      },
      {
        id: "B2",
        text: "Y a-t-il une décision que tu repousses depuis un moment ? Si oui, laquelle ?",
        format: "textarea",
        placeholder: "Décris la décision que tu repousses...",
      },
      {
        id: "B3",
        text: "Qu’est-ce que tu risquerais de perdre si tu avançais sur cette décision ?",
        format: "textarea",
        placeholder: "Ce que tu pourrais perdre en avançant...",
      },
      {
        id: "B4",
        text: "Qu’est-ce que tu risquerais de perdre si tu ne bougeais PAS ?",
        format: "textarea",
        placeholder: "Ce que tu pourrais perdre en ne bougeant pas...",
      },
      {
        id: "B5",
        text: "Quand tu penses à cette situation, qu’est-ce qui te tiraille le plus ?",
        format: "textarea",
        placeholder: "Ce qui te tiraille le plus...",
      },
      {
        id: "B6",
        text: "Y a-t-il un domaine de ta vie où tu te sens coincé·e entre deux choses importantes ?",
        format: "textarea",
        placeholder: "Le domaine où tu te sens coincé·e...",
      },
      {
        id: "B7",
        text: "Si tu pouvais avancer sans rien perdre, que ferais-tu demain ?",
        format: "textarea",
        placeholder: "Ce que tu ferais si tu n'avais rien à perdre...",
      },
    ],
  },
  {
    id: "partie2",
    title: "Explorer tes vides",
    subtitle: "Partie 2 sur 5",
    consigne:
      "Tes vides (ce qui te manquait le plus) deviennent tes valeurs (ce que tu poursuis le plus).",
    questions: [
      {
        id: "V1_spirituel",
        text: "Qu’est-ce qui te manquait le plus en grandissant sur le plan spirituel ?",
        format: "textarea",
        placeholder: "Connexion, sens, foi, méditation, paix intérieure...",
      },
      {
        id: "V1_mental",
        text: "Qu’est-ce qui te manquait le plus en grandissant sur le plan mental ?",
        format: "textarea",
        placeholder: "Stimulation intellectuelle, curiosité, apprentissage...",
      },
      {
        id: "V1_professionnel",
        text: "Qu’est-ce qui te manquait le plus en grandissant sur le plan professionnel ?",
        format: "textarea",
        placeholder: "Modèle de carrière, ambition, orientation...",
      },
      {
        id: "V1_financier",
        text: "Qu’est-ce qui te manquait le plus en grandissant sur le plan financier ?",
        format: "textarea",
        placeholder: "Sécurité financière, abondance, éducation financière...",
      },
      {
        id: "V1_familial",
        text: "Qu’est-ce qui te manquait le plus en grandissant sur le plan familial ?",
        format: "textarea",
        placeholder: "Présence, affection, stabilité, communication...",
      },
      {
        id: "V1_social",
        text: "Qu’est-ce qui te manquait le plus en grandissant sur le plan social ?",
        format: "textarea",
        placeholder: "Appartenance, amitié, reconnaissance, intégration...",
      },
      {
        id: "V1_physique",
        text: "Qu’est-ce qui te manquait le plus en grandissant sur le plan physique ?",
        format: "textarea",
        placeholder: "Santé, sport, alimentation, confort, sécurité physique...",
      },
      {
        id: "V2",
        text: "Qu’est-ce que tes parents désiraient ou regrettaient de ne pas avoir, dont tu as pris conscience ?",
        format: "textarea",
        placeholder: "Ce que tes parents désiraient ou regrettaient...",
      },
      {
        id: "V3",
        text: "Qu’est-ce que tes amis ou ta fratrie avaient que tu n’avais pas ?",
        format: "textarea",
        placeholder: "Ce que les autres avaient et pas toi...",
      },
      {
        id: "V4",
        text: "Qu’est-ce que tu désirais mais que tu n’arrivais jamais à atteindre ou obtenir ?",
        format: "textarea",
        placeholder: "Ce que tu désirais sans pouvoir l'obtenir...",
      },
      {
        id: "V5",
        text: "Qu’est-ce que les autres te disaient que tu ne pourrais jamais être, faire ou avoir ?",
        format: "textarea",
        placeholder: "Ce qu'on te disait impossible...",
      },
      {
        id: "V6",
        text: "Qu’est-ce que tu avais autrefois et qui t’a été enlevé ou perdu ?",
        format: "textarea",
        placeholder: "Ce qui t'a été enlevé ou perdu...",
      },
      {
        id: "V7",
        text: "Qu’est-ce que tu as essayé de prouver ou de compenser tout au long de ta vie ?",
        format: "textarea",
        placeholder: "Ce que tu as essayé de prouver ou compenser...",
      },
    ],
    afterQuestions:
      "Note tes 3 à 7 plus grands vides perçus",
  },
  {
    id: "partie3",
    title: "Tes valeurs démontrées",
    subtitle: "Partie 3 sur 5",
    consigne:
      "Tes valeurs ne sont pas ce que tu souhaites, elles sont ce que tu vis. Réponds de manière courte et concrète (1 à 3 mots par réponse). Utilise le dernier mois comme référence.",
    questions: [
      {
        id: "D1",
        text: "De quoi remplis-tu ton espace personnel/professionnel ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D2",
        text: "Comment passes-tu ton temps de manière la plus constante ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D3",
        text: "Qu’est-ce qui t’énergise le plus ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D4",
        text: "Sur quoi dépenses-tu ton argent de manière la plus constante ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D5",
        text: "Dans quel domaine de ta vie es-tu le plus organisé et structuré ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D6",
        text: "Sur quoi es-tu le plus fiable, discipliné et concentré ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D7",
        text: "Qu’est-ce qui domine tes pensées au quotidien et se manifeste dans ta réalité ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D8",
        text: "Qu’est-ce que tu visualises constamment pour ta vie qui devient réel ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D9",
        text: "De quoi te parles-tu le plus intérieurement, qui se manifeste dans tes actions ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D10",
        text: "De quoi aimes-tu parler avec les autres ? Quelles conversations t’animent ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D11",
        text: "Qu’est-ce qui t’inspire le plus et qu’ont en commun les personnes qui t’inspirent ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D12",
        text: "Quels objectifs à long terme continues-tu de poursuivre et qui deviennent réels ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
      {
        id: "D13",
        text: "Quels sujets d’étude revisites-tu constamment ?",
        format: "triple-input",
        placeholders: ["Réponse 1", "Réponse 2", "Réponse 3"],
      },
    ],
  },
  {
    id: "partie4",
    title: "Ton Telos · Valeur suprême et mission",
    subtitle: "Partie 4 sur 5",
    consigne:
      "Ta valeur la plus haute est la poursuite la plus significative de ta vie.",
    questions: [
      {
        id: "T1",
        text: "Quelle est ta valeur la plus haute qui se manifeste dans ta vie en ce moment ?",
        format: "textarea",
        placeholder: "Ta valeur la plus haute...",
      },
      {
        id: "T2",
        text: "Que représente cette valeur pour toi ? Que procure-t-elle, crée-t-elle, ou à quoi contribue-t-elle ?",
        format: "textarea",
        placeholder: "Ce que cette valeur représente...",
      },
      {
        id: "T3",
        text: "Comment cela s’aligne-t-il avec ton domaine d’excellence ou de connaissance le plus important ?",
        format: "textarea",
        placeholder: "L'alignement avec ton domaine d'excellence...",
      },
      {
        id: "T4",
        text: "Que dit déjà ta vie sur ce pour quoi tu es ici ?",
        format: "textarea",
        placeholder: "Ce que ta vie dit déjà...",
      },
      {
        id: "T5",
        text: "Que ferais-tu encore si personne ne te payait ?",
        format: "textarea",
        placeholder: "Ce que tu ferais sans être payé·e...",
      },
      {
        id: "T6",
        text: "Qu’est-ce qui apporte le plus de sens ?",
        format: "textarea",
        placeholder: "Ce qui apporte le plus de sens...",
      },
    ],
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  D1: "Espace",
  D2: "Temps",
  D3: "Énergie",
  D4: "Argent",
  D5: "Ordre",
  D6: "Discipline",
  D7: "Pensées",
  D8: "Visualisations",
  D9: "Dialogue interne",
  D10: "Dialogue externe",
  D11: "Inspiration",
  D12: "Objectifs",
  D13: "Apprentissage",
};

export const VALUE_NAME_SUGGESTIONS = [
  // Valeurs fondamentales
  "Liberté", "Autonomie", "Sécurité", "Famille", "Amour",
  "Créativité", "Apprentissage", "Impact", "Contribution", "Reconnaissance",
  "Excellence", "Authenticité", "Aventure", "Stabilité", "Indépendance",
  "Leadership", "Connexion", "Spiritualité", "Santé", "Abondance",
  "Justice", "Croissance", "Expression", "Innovation", "Transmission",
  "Harmonie", "Pouvoir", "Beauté", "Ordre", "Plaisir",
  "Connexion sociale", "Lien", "Communication", "Souveraineté",
  "Sécurité relationnelle", "Bienveillance", "Protection",
  "Accomplissement", "Ambition", "Confort", "Qualité de vie",
  "Intégrité", "Équité", "Foi", "Paix intérieure",
  "Vitalité", "Bien-être", "Connaissance", "Sens",
  "Indépendance financière", "Sécurité financière",
  // Valeurs élargies (source: liste des 211 valeurs)
  "Compassion", "Courage", "Curiosité", "Détermination", "Discipline",
  "Empathie", "Engagement", "Fidélité", "Générosité", "Gratitude",
  "Honnêteté", "Joie", "Loyauté", "Maîtrise", "Respect",
  "Résilience", "Sagesse", "Simplicité", "Solidarité", "Tradition",
  "Vérité", "Confiance en soi", "Discernement", "Persévérance",
  "Adaptabilité", "Chaleur humaine", "Cohérence", "Compétence",
  "Coopération", "Dignité", "Dynamisme", "Élégance", "Endurance",
  "Enthousiasme", "Fiabilité", "Flexibilité", "Force", "Franchise",
  "Grâce", "Humilité", "Lucidité", "Profondeur", "Sérénité",
  "Sincérité", "Richesse", "Succès", "Diversité", "Exploration",
];

// Mapping mots-clés → suggestions de valeurs (regex patterns sans accents)
export const KEYWORD_VALUE_MAP: Record<string, string[]> = {
  // Finance
  "argent|financ|investir|econom|depens|epargn|revenu|salaire|patrimoine|budget|riche":
    ["Abondance", "Sécurité financière", "Indépendance financière"],
  // Famille
  "famille|enfant|parent|conjoint|maison|foyer|mere|pere|frere|soeur|couple|mari|femme|bebe":
    ["Famille", "Connexion", "Amour"],
  // Créativité
  "crea|art|ecrire|dessiner|musique|imagin|peindre|compos|inventer|design|photo|danse|chant":
    ["Créativité", "Expression", "Beauté"],
  // Apprentissage
  "apprendre|etudi|lire|livre|forma|connai|comprend|podcast|savoir|recherch|curi|diplom|certif":
    ["Apprentissage", "Croissance", "Connaissance"],
  // Contribution
  "aider|contribu|impact|donn|servir|partag|volontair|genero|benevo|cause|humanitair":
    ["Contribution", "Impact", "Bienveillance"],
  // Liberté
  "libert|voyage|decouvr|choix|autonomi|independan|explorer|aventur|nomad|evasion":
    ["Liberté", "Aventure", "Autonomie"],
  // Santé
  "sante|sport|corps|exerci|physi|aliment|energie|bien.etre|yoga|meditat|course|muscl|gym|march":
    ["Santé", "Vitalité", "Bien-être"],
  // Leadership
  "leader|diriger|entrepreneur|entrepri|manag|guid|influenc|decid|patron|chef|pilot":
    ["Leadership", "Pouvoir", "Influence"],
  // Reconnaissance
  "reconn|reussi|succes|accompl|excell|performa|compet|fiert|meilleur|premier|gagn|victoir":
    ["Reconnaissance", "Excellence", "Accomplissement"],
  // Spiritualité
  "spirit|medit|priere|conscienc|ame|divin|connect|sacre|croyance|eglise|mosquee|temple":
    ["Spiritualité", "Foi", "Paix intérieure"],
  // Ordre
  "organis|structur|planifi|ordr|efficac|method|system|rang|class|propre|tri|nettoy|menag":
    ["Ordre", "Discipline", "Maîtrise"],
  // Social (élargi)
  "ami|social|communaut|groupe|rencontr|equipe|collecti|reseau|sorti|copain|voisin|club|benevol":
    ["Connexion sociale", "Appartenance", "Communauté"],
  // Sécurité
  "securi|stabili|rassur|ancr|fiabl|certain|garanti|assur|refuge|abri":
    ["Sécurité", "Stabilité", "Confort"],
  // Innovation
  "innov|technol|nouveaut|futur|progres|chang|transform|modern":
    ["Innovation", "Progrès", "Transformation"],
  // Plaisir
  "plaisir|joie|amuse|jeu|rire|deten|vacance|loisir|fete|profiter|kiff|fun":
    ["Plaisir", "Joie", "Légèreté"],
  // Harmonie
  "harmon|equilibr|paix|calme|seren|douceur|balanc|zen|tranquil":
    ["Harmonie", "Équilibre", "Sérénité"],
  // Authenticité
  "authenti|vrai|sincer|honnete|transparen|integrit|fidel":
    ["Authenticité", "Intégrité", "Vérité"],

  // === NOUVEAUX PATTERNS ===

  // Communication / Dialogue
  "communiqu|parl|discus|dialog|convers|ecoute|echang|debat|exprim|mot|langu":
    ["Connexion", "Communication", "Lien"],
  // Relations / Liens affectifs
  "relation|lien|proche|attach|affecti|tendr|intimite|confianc|complic|partena":
    ["Lien", "Sécurité relationnelle", "Connexion"],
  // Technologie / Digital (telephone, pc, etc.)
  "teleph|appel|tel|pc|ordi|internet|ecran|numer|digit|techno|appli|notif|mess":
    ["Connexion", "Innovation", "Efficacité"],
  // Interaction sociale (gens, personnes)
  "gens|personn|monde|autrui|humain|entourage|prochain|semblable|individu":
    ["Connexion sociale", "Lien", "Appartenance"],
  // Transmission / Enseignement
  "transmet|enseign|eduqu|mentor|accompagn|coach|guid|form|tuto|peda":
    ["Transmission", "Impact", "Contribution"],
  // Souveraineté / Contrôle
  "souverain|autosuffisan|maitr|control|propre|independ|autodetermin|autonome":
    ["Souveraineté", "Autonomie", "Indépendance"],
  // Nature / Environnement
  "nature|environn|ecolog|plant|jardin|animal|foret|mer|montagne|terre|bio|durabl":
    ["Harmonie", "Connexion à la nature", "Sérénité"],
  // Confort / Qualité de vie
  "confort|luxe|qualite|deco|vetement|amenag|cocooning|douill|agreabl|beau.lieu":
    ["Confort", "Beauté", "Qualité de vie"],
  // Justice / Éthique
  "justice|equit|egal|droit|ethiqu|moral|defend|cause|engag|militant":
    ["Justice", "Intégrité", "Équité"],
  // Protection / Soin
  "proteg|soin|prend.soin|veille|preserve|securis|matern|patern|shelter|abrit":
    ["Protection", "Sécurité relationnelle", "Bienveillance"],
  // Ambition / Réussite
  "ambiti|but|viser|atteind|objectif|reve|aspir|projet|determin|perse":
    ["Accomplissement", "Excellence", "Ambition"],
  // Travail / Carrière
  "travail|boulot|carrie|metier|professi|productiv|bureau|emploi|poste|missio":
    ["Accomplissement", "Excellence", "Impact"],
  // Gastronomie / Nourriture
  "cuisin|manger|gout|restaurant|saveur|gourmand|recett|repas|chef|gastro|nourrit":
    ["Plaisir", "Qualité de vie", "Créativité"],
  // Religion / Foi
  "dieu|relig|foi|pardon|grace|beni|culte|coran|bible|prophete|saint|eglise":
    ["Spiritualité", "Foi", "Paix intérieure"],
  // Sens / Quête de sens
  "sens|pourquoi|raison|signifi|but.vie|exist|purpose|mission|appel|vocation":
    ["Sens", "Spiritualité", "Accomplissement"],
  // Courage / Détermination
  "courage|oser|risqu|defi|brav|affronter|surmont|depass|intrepid|audac|force":
    ["Courage", "Détermination", "Résilience"],
  // Respect / Dignité
  "respect|dignit|consider|estim|polites|courtois|defer|egalit|trait":
    ["Respect", "Dignité", "Équité"],
  // Solidarité / Coopération
  "solidar|cooper|entraid|collabor|partag|collectif|soutin|mutuel|ensemble":
    ["Solidarité", "Coopération", "Connexion sociale"],
  // Gratitude / Reconnaissance intérieure
  "gratitud|merci|reconnaiss|appreci|chanc|beni|grâce":
    ["Gratitude", "Sérénité", "Joie"],
  // Simplicité / Minimalisme
  "simpl|minimal|essenti|depouill|sobre|frugal|redui|basique|pure":
    ["Simplicité", "Harmonie", "Paix intérieure"],
  // Tradition / Héritage
  "tradition|heritag|ancetre|origin|racine|histoir|coutum|culture|transmiss|passe":
    ["Tradition", "Fidélité", "Transmission"],
  // Adaptabilité / Flexibilité
  "adapt|flexibl|ajust|souple|pivot|chang|evolue|improvise|reagi|agil":
    ["Adaptabilité", "Flexibilité", "Résilience"],
  // Compétence / Expertise
  "competen|expert|maitris|specialit|profond|talent|habil|excell|perfectionn|savoi":
    ["Compétence", "Maîtrise", "Excellence"],
};

export const AVAILABLE_COLORS = [
  { id: "red", label: "Rouge", hex: "#E74C3C" },
  { id: "blue", label: "Bleu", hex: "#3498DB" },
  { id: "green", label: "Vert", hex: "#27AE60" },
  { id: "orange", label: "Orange", hex: "#F39C12" },
  { id: "purple", label: "Violet", hex: "#9B59B6" },
  { id: "pink", label: "Rose", hex: "#E91E63" },
  { id: "teal", label: "Turquoise", hex: "#1ABC9C" },
];
