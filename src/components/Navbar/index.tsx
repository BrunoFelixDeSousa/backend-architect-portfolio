import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import type { Language } from "../../i18n/types/i18n";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { NavbarDesktop } from "./components/navbarDesktop";
import { NavbarMobile } from "./components/NavbarMobile";

const langLabels: Record<Language, string> = { en: "EN", pt: "PT", es: "ES" };

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fica observando o scroll para adicionar a classe de fundo e borda quando o usuário rolar a página
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { key: "about", label: t.nav.about },
    { key: "skills", label: t.nav.skills },
    { key: "projects", label: t.nav.projects },
    { key: "philosophy", label: t.nav.philosophy },
    { key: "blog", label: t.nav.blog },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <Link
          to="/"
          reloadDocument={true}
          className="font-mono text-primary font-bold text-lg"
        >
          {"Felix.run()"}
        </Link>

        <NavbarDesktop
          navItems={navItems}
          langLabels={langLabels}
          language={language}
          setLanguage={setLanguage}
        />

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <NavbarMobile
        mobileOpen={mobileOpen}
        navItems={navItems}
        langLabels={langLabels}
        language={language}
        setLanguage={setLanguage}
        setMobileOpen={setMobileOpen}
      />
    </motion.nav>
  );
}
