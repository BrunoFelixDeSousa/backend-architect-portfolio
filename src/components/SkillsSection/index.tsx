import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

const skillsData = {
  backend: ["Java", "Quarkus", "Spring Boot", "REST APIs", "Microservices", "Hexagonal Architecture", "DDD"],
  node: ["Node.js", "NestJS, Express, Fastify"],
  frontend: ["React", "Next.js"],
  practices: ["Clean Architecture", "DDD", "SOLID", "Automated Testing", "Integration Testing", "Observability"],
  infra: ["Docker", "CI/CD", "Cloud-Native"],
};

const categoryKeys = Object.keys(skillsData) as (keyof typeof skillsData)[];

export function SkillsSection() {
  const { t } = useLanguage();
  const catLabels = t.skills.categories;

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm mb-1">
            {t.skills.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            {t.skills.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="neon-border rounded-lg p-5 bg-card"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4">
                {catLabels[key as keyof typeof catLabels]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-border text-muted-foreground bg-muted/50 hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
