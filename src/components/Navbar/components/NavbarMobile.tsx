import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import type { Language } from "../../../i18n/translations";

interface NavbarMobileProps {
  mobileOpen: boolean;
  navItems: { key: string; label: string }[];
  langLabels: Record<string, string>;
  language: string;
  setLanguage: (lang: Language) => void;
  setMobileOpen: (open: boolean) => void;
}

export function NavbarMobile({
  mobileOpen,
  navItems,
  langLabels,
  language,
  setLanguage,
  setMobileOpen,
}: Readonly<NavbarMobileProps>) {
  return (
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <div className="section-container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={`#${item.key}`}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-1 mt-2">
              {(Object.keys(langLabels) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-1 text-xs font-mono rounded ${
                    language === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground border border-border"
                  }`}
                >
                  {langLabels[lang]}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
