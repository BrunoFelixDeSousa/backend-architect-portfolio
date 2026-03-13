import { useLanguage } from "../../i18n/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          {t.footer.built} ⚡
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}