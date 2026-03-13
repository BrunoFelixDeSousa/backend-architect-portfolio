import { motion } from "framer-motion";
import { Rocket, Atom, Code2 } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-1">
            {t.about.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Code2, text: t.about.p1 },
            { icon: Rocket, text: t.about.p2 },
            { icon: Atom, text: t.about.p3 },
          ].map((item, i) => (
            <motion.div
              key={i+1}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="neon-border rounded-lg p-6 bg-card"
            >
              <item.icon className="text-primary mb-4" size={24} />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-mono text-xs text-muted-foreground mt-10"
        >
          {t.about.interests}
        </motion.p>
      </div>
    </section>
  );
}
