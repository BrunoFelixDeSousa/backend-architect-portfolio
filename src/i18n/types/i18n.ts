import type { translations } from "../translations";

export type Language = "pt" | "en" | "es";

export type TranslationType = (typeof translations)[Language];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}
