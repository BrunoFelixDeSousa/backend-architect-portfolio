import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export function ContactSection() {
      const { t } = useLanguage();

  const links = [
    { icon: Github, label: t.contact.github, href: "https://github.com/BrunoFelixDeSousa" },
    { icon: Linkedin, label: t.contact.linkedin, href: "https://www.linkedin.com/in/brunofelix-dev/" },
    { icon: Mail, label: t.contact.email, href: "mailto:brunofelixdesousa@hotmail.com" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm mb-1">{t.contact.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.contact.title}</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">{t.contact.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-lg neon-border bg-card flex items-center justify-center group-hover:border-primary/60 transition-all">
                <link.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={22} />
              </div>
              <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}