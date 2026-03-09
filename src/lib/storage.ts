import { QuestionnaireData, UserInfo } from "./types";

const STORAGE_KEY = "tesvaleurs_questionnaire";

export function saveToStorage(data: Partial<QuestionnaireData>) {
  if (typeof window === "undefined") return;
  const existing = loadFromStorage();
  const merged = { ...existing, ...data };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
}

export function loadFromStorage(): Partial<QuestionnaireData> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function clearStorage() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function getUserInfo(): UserInfo | null {
  const data = loadFromStorage();
  if (data.userInfo?.email) return data.userInfo;
  return null;
}
