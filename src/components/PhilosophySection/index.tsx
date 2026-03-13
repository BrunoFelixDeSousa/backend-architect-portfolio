import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { Layers, Shield, Box, TrendingUp } from "lucide-react";

const icons = [Layers, Shield, Box, TrendingUp];

export function PhilosophySection() {
    const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-24 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm mb-1">{t.philosophy.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">{t.philosophy.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="terminal-window mb-10 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-terminal-green/60" />
            <span className="font-mono text-xs text-muted-foreground ml-2">architecture.txt</span>
          </div>
          <pre className="p-4 font-mono text-xs text-primary/80 leading-5 overflow-x-auto">
{`  ┌──────────────────────────────────────────┐
  │           Presentation Layer             │
  │         (REST / gRPC / GraphQL)          │
  ├──────────────────────────────────────────┤
  │           Application Layer              │
  │       (Use Cases / Commands / Queries)   │
  ├──────────────────────────────────────────┤
  │             Domain Layer                 │
  │    (Entities / Value Objects / Events)   │
  ├──────────────────────────────────────────┤
  │          Infrastructure Layer            │
  │   (Repositories / Messaging / External)  │
  └──────────────────────────────────────────┘`}
          </pre>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.philosophy.principles.map((principle, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="neon-border rounded-lg p-5 bg-card"
              >
                <Icon className="text-primary mb-3" size={20} />
                <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}