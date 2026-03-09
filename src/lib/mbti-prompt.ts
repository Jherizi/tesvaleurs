import { MBTIType } from "./types";
import { getMBTIFamille, MBTI_FAMILLE_LABELS } from "./mbti-data";

/**
 * Génère le bloc de system prompt à injecter dans l'analyse premium
 * quand l'utilisateur a renseigné son type MBTI.
 */
export function getMBTIPromptSection(type: MBTIType): string {
  const famille = getMBTIFamille(type);
  const familleLabel = MBTI_FAMILLE_LABELS[famille];

  return `
L'utilisateur a indiqué son type MBTI : ${type} (famille ${famille} ·${familleLabel}).

IMPORTANT : Le MBTI est un outil de dominance cognitive, pas de déterminisme. Le type indiqué reflète une préférence naturelle qui peut évoluer selon les années, le contexte de vie et la croissance personnelle. Utilise cette information pour ÉCLAIRER l'analyse, jamais pour enfermer.

Utilise cette information pour enrichir ton analyse des vides (Partie 2) selon la grille suivante :

PROFILS NF (INFJ, INFP, ENFJ, ENFP) ·Les intuitifs-feeling :
Les vides sont souvent relationnels et identitaires. Ils tournent autour du manque de reconnaissance émotionnelle, de sens, de connexion authentique, d'appartenance vraie. Ces profils compensent en cherchant l'authenticité, la profondeur, la mission de vie. Leurs valeurs hautes gravitent souvent autour de : authenticité, connexion, sens, impact, créativité.

PROFILS NT (INTJ, INTP, ENTJ, ENTP) ·Les intuitifs-thinking :
Les vides sont souvent liés au manque d'autonomie intellectuelle, de maîtrise, de compréhension, de compétence reconnue. Ces profils compensent en cherchant l'expertise, le contrôle par la connaissance, l'indépendance. Leurs valeurs hautes gravitent souvent autour de : compétence, autonomie, compréhension, stratégie, liberté intellectuelle.

PROFILS SJ (ISTJ, ISFJ, ESTJ, ESFJ) ·Les sensoriels-jugeants :
Les vides sont souvent liés au manque de stabilité, de sécurité, de structure, de fiabilité dans l'environnement. Ces profils compensent en construisant de l'ordre, de la prévisibilité, des cadres solides. Leurs valeurs hautes gravitent souvent autour de : sécurité, loyauté, responsabilité, stabilité, appartenance.

PROFILS SP (ISTP, ISFP, ESTP, ESFP) ·Les sensoriels-percevants :
Les vides sont souvent liés au manque de liberté concrète, d'expérience directe, de plaisir, de mouvement. Ces profils compensent en cherchant l'action, la stimulation, l'expérience vivante. Leurs valeurs hautes gravitent souvent autour de : liberté, plaisir, expérience, adaptabilité, présence.

Dans le rapport premium, ajoute une section "Éclairage par ton profil cognitif" après la section sur les vides, qui :
- Nomme le type MBTI (${type}) et sa famille (${famille} ·${familleLabel})
- Explique comment ce profil cognitif colore la manière dont les vides ont été vécus
- Fait le lien entre le type de vides attendus pour ce profil et les vides réellement déclarés par l'utilisateur
- Note les convergences ET les écarts éventuels (un ${type} qui a des vides atypiques pour sa famille, c'est intéressant à souligner)
- Formulations prudentes : "les profils ${type} tendent à...", "il est fréquent que...", "cela pourrait suggérer que..."
- NE PAS enfermer la personne dans son type. Le MBTI éclaire, il ne détermine pas. C'est une dominance qui peut évoluer.
`.trim();
}
