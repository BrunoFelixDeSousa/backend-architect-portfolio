import { Link } from "react-router";
import type { Language } from "../../../i18n/translations";

interface NavbarDesktopProps {
  navItems: { key: string; label: string }[];
  langLabels: Record<Language, string>;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function NavbarDesktop({
  navItems,
  langLabels,
  language,
  setLanguage,
}: Readonly<NavbarDesktopProps>) {
  return (
    <div className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.key}
          to={`#${item.key}`}
          className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
      <div className="flex items-center gap-1 ml-4 border border-border rounded-md overflow-hidden">
        {(Object.keys(langLabels) as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-2.5 py-1 text-xs font-mono transition-colors ${
              language === lang
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {langLabels[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
