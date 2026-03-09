import { MBTIType, MBTIFamille } from "./types";

export interface MBTITypeInfo {
  value: MBTIType;
  label: string;
  famille: MBTIFamille;
}

export const MBTI_TYPES: MBTITypeInfo[] = [
  // NF
  { value: "INFJ", label: "INFJ · L'Avocat", famille: "NF" },
  { value: "INFP", label: "INFP · Le Médiateur", famille: "NF" },
  { value: "ENFJ", label: "ENFJ · Le Protagoniste", famille: "NF" },
  { value: "ENFP", label: "ENFP · L'Inspirateur", famille: "NF" },
  // NT
  { value: "INTJ", label: "INTJ · L'Architecte", famille: "NT" },
  { value: "INTP", label: "INTP · Le Logicien", famille: "NT" },
  { value: "ENTJ", label: "ENTJ · Le Commandant", famille: "NT" },
  { value: "ENTP", label: "ENTP · L'Innovateur", famille: "NT" },
  // SJ
  { value: "ISTJ", label: "ISTJ · Le Logisticien", famille: "SJ" },
  { value: "ISFJ", label: "ISFJ · Le Défenseur", famille: "SJ" },
  { value: "ESTJ", label: "ESTJ · Le Directeur", famille: "SJ" },
  { value: "ESFJ", label: "ESFJ · Le Consul", famille: "SJ" },
  // SP
  { value: "ISTP", label: "ISTP · Le Virtuose", famille: "SP" },
  { value: "ISFP", label: "ISFP · L'Aventurier", famille: "SP" },
  { value: "ESTP", label: "ESTP · L'Entrepreneur", famille: "SP" },
  { value: "ESFP", label: "ESFP · L'Animateur", famille: "SP" },
];

export function getMBTIFamille(type: MBTIType): MBTIFamille {
  const info = MBTI_TYPES.find((t) => t.value === type);
  return info?.famille ?? "NF";
}

export const MBTI_FAMILLE_LABELS: Record<MBTIFamille, string> = {
  NF: "Intuitifs-Feeling",
  NT: "Intuitifs-Thinking",
  SJ: "Sensoriels-Jugeants",
  SP: "Sensoriels-Percevants",
};

export const MBTI_PEDAGOGIE = `Le MBTI (Myers-Briggs Type Indicator) est un outil qui identifie tes préférences cognitives sur 4 axes : où tu puises ton énergie, comment tu traites l'information, comment tu prends tes décisions, et comment tu t'organises.

Chaque axe te donne une lettre, mais c'est une question de dominance, pas de tout ou rien. Tu peux être 51% Introverti et 49% Extraverti : tu as les deux en toi, l'un domine simplement un peu plus. Ton type peut évoluer selon les années, le contexte de vie et ta propre croissance. Il éclaire tes tendances naturelles, il ne les détermine pas.`;
