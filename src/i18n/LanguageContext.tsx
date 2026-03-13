import { createContext, useContext } from "react";
import type { LanguageContextType } from "./types/i18n";

/**
 * Contexto para gerenciar o idioma da aplicação e fornecer as traduções correspondentes.
 */
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

/**
 * Hook para acessar o contexto de idioma.
 * @example
 * ```tsx
 * const { language, setLanguage, t } = useLanguage();
 * ```
 * @returns Objeto contendo o idioma atual, função para alterar o idioma e as traduções.
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
