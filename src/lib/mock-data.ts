import { AnalyseGratuite } from "./types";

export const MOCK_ANALYSE_GRATUITE: AnalyseGratuite = {
  mini_analyse:
    "Tes réponses montrent quelque chose de clair : tu n'es pas bloqué par manque de volonté. Tu es bloqué parce qu'une partie de toi veut avancer, construire, décider par toi-même. Et une autre partie, tout aussi forte, protège ce qui compte le plus : la stabilité de tes liens.\n\nCe que la plupart des gens appellent « procrastination » ou « peur d'échouer » est en réalité un mécanisme bien plus intelligent. Ton cerveau détecte un danger que tu ne vois pas consciemment : avancer dans une direction menace quelque chose d'essentiel dans une autre. Alors il freine. Pas par faiblesse. Par fidélité.\n\nChaque fois que tu repousses un projet, que tu tournes en rond sur une décision, que tu te dis « je sais ce que je devrais faire mais je ne le fais pas », c'est ce mécanisme qui parle. La question n'est pas « comment me forcer à agir ». La question est : qu'est-ce que chaque partie de moi essaie de protéger ?\n\nLe rapport premium identifie précisément ces parties, ce qu'elles protègent, et comment les faire coexister au lieu de choisir.",
  conflit_principal: {
    valeur_a: "Souveraineté et autonomie",
    valeur_b: "Sécurité relationnelle",
    phrase:
      "Quand tu imagines te lancer, créer, décider seul, quelque chose s'allume en toi. Une énergie, une certitude.\n\nMais au moment de passer à l'action, un frein se met en place. Ce frein n'est pas de la lâcheté. C'est une protection.\n\nTon système refuse de sacrifier tes liens pour ta liberté. Et il refuse de sacrifier ta liberté pour tes liens.\n\nRésultat : tu restes entre les deux, dans une zone d'immobilité qui ressemble à de l'indécision mais qui est en réalité une tentative de tout préserver.\n\nLe rapport premium révèle les 4 manières concrètes dont ces deux valeurs peuvent avancer ensemble, sans que l'une écrase l'autre.",
  },
  lien_vides_valeurs:
    "Ce que tu n'as pas reçu ne disparaît pas. Ça se transforme en moteur.\n\nLe manque de reconnaissance, le sentiment de ne pas avoir eu le choix, le besoin de prouver que tu peux y arriver seul : tout ça s'est converti en valeurs actives.\n\nCe que tu cherches le plus intensément aujourd'hui est précisément ce qui t'a le plus manqué hier.\n\nC'est pour ça que tes valeurs ne sont pas des préférences. Ce sont des réponses à des blessures. Et c'est aussi pour ça qu'elles peuvent entrer en conflit entre elles : elles ne répondent pas au même manque.\n\nLe rapport premium cartographie ces liens entre tes vides et tes valeurs avec précision, pour que tu comprennes enfin pourquoi certains choix te semblent impossibles.",
  nombre_conflits_supplementaires: 3,
  nombre_blocages_identifies: 2,
};

// Gratuit : 4 valeurs hautes (sur 7)
export const MOCK_HIERARCHIE = [
  {
    rang: 1,
    valeur: "Souveraineté et autonomie",
    score: 92,
    domaine: "Travail",
    description:
      "Tu as besoin de décider par toi-même, de ne dépendre de personne pour tes choix fondamentaux. Cette valeur guide silencieusement la plupart de tes décisions.",
  },
  {
    rang: 2,
    valeur: "Transmission et impact",
    score: 78,
    domaine: "Social",
    description:
      "Ce qui te motive, c'est de laisser une trace. Pas pour l'ego, mais pour le sens. Tu veux que ce que tu fais serve à quelqu'un d'autre après toi.",
  },
  {
    rang: 3,
    valeur: "Sécurité relationnelle",
    score: 71,
    domaine: "Couple",
    description:
      "La stabilité de tes liens est un socle non négociable. Sans elle, rien d'autre ne peut se construire sereinement.",
  },
  {
    rang: 4,
    valeur: "Construction et accomplissement",
    score: 65,
    domaine: "Finances",
    description:
      "Tu es animé par le fait de bâtir. Pas simplement réussir, mais construire quelque chose de tangible, étape par étape.",
  },
];

// Premium : les 7 valeurs hautes dans les 7 domaines de vie
export const MOCK_HIERARCHIE_PREMIUM = [
  ...MOCK_HIERARCHIE,
  {
    rang: 5,
    valeur: "Reconnaissance par la compétence",
    score: 52,
    domaine: "Famille",
    description:
      "Tu veux être reconnu pour ce que tu sais faire, pas pour ce que tu possèdes. La compétence est ta monnaie de légitimité.",
  },
  {
    rang: 6,
    valeur: "Vitalité et mouvement",
    score: 45,
    domaine: "Santé",
    description:
      "Ton corps n'est pas un véhicule passif. Le mouvement, l'énergie physique et la santé sont des valeurs actives qui soutiennent tout le reste.",
  },
  {
    rang: 7,
    valeur: "Sens et cohérence intérieure",
    score: 38,
    domaine: "Spiritualité",
    description:
      "Au-delà de la réussite, tu cherches une cohérence entre ce que tu fais et ce que tu es profondément. L'alignement intérieur est ton repère ultime.",
  },
];
