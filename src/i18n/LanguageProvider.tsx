import { useState, useMemo, type ReactNode } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./LanguageContext";
import type { Language } from "./types/i18n";

/**
 * O provider envolve a aplicação e fornece o estado do idioma e as traduções para todos os componentes filhos.
 * Ele usa `useState` para gerenciar o idioma atual e `useMemo` para otimizar a criação do objeto de contexto, evitando re-renderizações desnecessárias.
 * @example
 * ```tsx
 * <LanguageProvider>
 * <App />
 * </LanguageProvider>
 * ```
 * @param props - Propriedades do componente.
 * @param props.children - Os elementos React que serão envolvidos pelo Provider.
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");
  const t = useMemo(() => translations[language], [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
