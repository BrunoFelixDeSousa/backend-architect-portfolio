import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm mb-1">
            {t.projects.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group neon-border rounded-lg bg-card overflow-hidden hover:border-primary/50 transition-all"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-green/60" />
                <span className="font-mono text-xs text-muted-foreground ml-2">
                  {project.title}
                </span>
              </div>

              <div className="p-5">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="font-mono text-xs text-primary/70 mb-4">
                  {project.architecture}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
                >
                  {t.projects.viewCode} <ExternalLink size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
