export type Language = "en" | "pt" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      philosophy: "Philosophy",
      blog: "Blog",
      contact: "Contact",
    },
    footer: {
      built: "Built with engineering discipline",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      philosophy: "Filosofia",
      blog: "Blog",
      contact: "Contato",
    },
    footer: {
      built: "Construído com disciplina de engenharia",
      rights: "Todos os direitos reservados.",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      philosophy: "Filosofía",
      blog: "Blog",
      contact: "Contacto",
    },
    footer: {
      built: "Construido con disciplina de ingeniería",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

// type para garantir que as traduções sejam do tipo correto, baseado na estrutura definida em `translations` e no tipo `Language`.
export type Translations = (typeof translations)[Language];
