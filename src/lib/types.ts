// ===== Questionnaire Types =====

export interface UserInfo {
  prenom: string;
  nom: string;
  email: string;
}

// Partie 1: Blocages
export interface Partie1Responses {
  B1: string;
  B2: string;
  B3: string;
  B4: string;
  B5: string;
  B6: string;
  B7: string;
}

// Partie 2: Vides
export interface Partie2Responses {
  V1_spirituel: string;
  V1_mental: string;
  V1_professionnel: string;
  V1_financier: string;
  V1_familial: string;
  V1_social: string;
  V1_physique: string;
  V2: string;
  V3: string;
  V4: string;
  V5: string;
  V6: string;
  V7: string;
  videsPerçus: string; // champ libre fin de partie 2
}

// Partie 3: Valeurs démontrées (3 réponses par question)
export interface Partie3Responses {
  D1: [string, string, string];
  D2: [string, string, string];
  D3: [string, string, string];
  D4: [string, string, string];
  D5: [string, string, string];
  D6: [string, string, string];
  D7: [string, string, string];
  D8: [string, string, string];
  D9: [string, string, string];
  D10: [string, string, string];
  D11: [string, string, string];
  D12: [string, string, string];
  D13: [string, string, string];
}

// Regroupement couleurs
export interface ColorGroup {
  color: string;
  label: string; // nom de la valeur donné par l'utilisateur
  items: string[]; // réponses associées
}

// Partie 4: Telos
export interface Partie4Responses {
  T1: string;
  T2: string;
  T3: string;
  T4: string;
  T5: string;
  T6: string;
  missionEtre: string;
  missionFaire: string;
  missionAvoir: string;
  pourquoi1: [string, string, string];
  pourquoi2: [string, string, string];
  pourquoi3: [string, string, string];
  pourquoi4: [string, string, string];
}

// Partie 5: Hiérarchie
export interface ValeurClassee {
  rang: number;
  valeur: string;
  score: number; // pourcentage
  description?: string;
}

// Données complètes du questionnaire
export interface QuestionnaireData {
  userInfo: UserInfo;
  partie1: Partie1Responses;
  partie2: Partie2Responses;
  partie3: Partie3Responses;
  colorGroups: ColorGroup[];
  partie4: Partie4Responses;
  hierarchie: ValeurClassee[];
  mbtiType?: MBTIType;
  completedAt?: string;
}

// ===== MBTI =====

export type MBTIType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export type MBTIFamille = 'NF' | 'NT' | 'SJ' | 'SP';

export interface EclairageMBTI {
  type: MBTIType;
  famille: MBTIFamille;
  analyse: string;
}

// ===== Analyse IA =====

export interface AnalyseGratuite {
  mini_analyse: string;
  conflit_principal: {
    valeur_a: string;
    valeur_b: string;
    phrase: string;
  };
  lien_vides_valeurs: string;
  nombre_conflits_supplementaires: number;
  nombre_blocages_identifies: number;
}

export interface AnalysePremium {
  hierarchie: Array<{
    rang: number;
    valeur: string;
    score: number;
    indices_comportementaux: string[];
    lien_avec_vides: string;
  }>;
  conflits_de_valeurs: Array<{
    valeur_a: string;
    valeur_b: string;
    description: string;
    impact_observe: string;
  }>;
  analyse_blocages_concrets: Array<{
    situation: string;
    valeur_protegee_par_immobilite: string;
    valeur_etouffee: string;
    eclairage: string;
  }>;
  valeurs_protegees_par_blocages: Array<{
    valeur: string;
    mecanisme: string;
  }>;
  coherence_mission_valeurs: string;
  synthese: string;
  eclairage_mbti: EclairageMBTI | null;
}
