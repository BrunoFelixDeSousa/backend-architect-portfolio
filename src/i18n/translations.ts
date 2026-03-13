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
    hero: {
      greeting: "Hello, I'm",
      name: "Bruno Félix",
      role: "Backend Software Engineer",
      tagline:
        "Building scalable systems with Java, clean architecture, and engineering discipline.",
      cta: "View My Work",
      terminal: "$ whoami",
      terminalOutput: "backend-engineer :: java · quarkus · spring-boot",
    },
    about: {
      title: "About Me",
      subtitle: "// who I am",
      p1: "I'm a Backend Software Engineer passionate about building robust, scalable systems with the Java ecosystem. My focus is on Quarkus and Spring Boot, leveraging clean architecture principles and domain-driven design to create production-ready applications.",
      p2: "Beyond code, I'm deeply curious about science, physics, rockets, and space exploration. I believe the same engineering discipline that sends rockets into orbit applies to building great software — precision, testing, and iterative improvement.",
      p3: "I also explore the Node.js ecosystem with NestJS and have foundational knowledge of React and Next.js. My goal is to become a specialist in Java and Quarkus, creating systems that are maintainable, testable, and designed for scale.",
      interests:
        "Science · Rockets · Mathematics · Physics · Anime · Movies · Technology",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "// technologies & practices",
      categories: {
        backend: "Backend Engineering",
        node: "Node Ecosystem",
        frontend: "Frontend",
        practices: "Engineering Practices",
        infra: "Infrastructure",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "// selected work",
      viewCode: "View Source",
      items: [
        {
          title: "Order Management System",
          description:
            "Microservices-based order management system built with Quarkus, implementing hexagonal architecture and DDD patterns. Features event-driven communication and comprehensive test coverage.",
          tech: ["Java", "Quarkus", "PostgreSQL", "Kafka", "Docker"],
          architecture: "Hexagonal Architecture · Event-Driven · CQRS",
        },
        {
          title: "Authentication Service",
          description:
            "Scalable authentication and authorization service built with Spring Boot. Implements OAuth2, JWT token management, and role-based access control with clean separation of concerns.",
          tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
          architecture: "Clean Architecture · Domain-Driven Design",
        },
        {
          title: "API Gateway & Service Mesh",
          description:
            "Cloud-native API gateway implementing rate limiting, circuit breaker patterns, and service discovery. Built for high availability and horizontal scaling.",
          tech: ["Java", "Quarkus", "Docker", "Kubernetes", "gRPC"],
          architecture: "Microservices · Circuit Breaker · Service Discovery",
        },
        {
          title: "Real-time Notification Engine",
          description:
            "Event-driven notification system supporting email, SMS, and push notifications. Built with NestJS and message queues for reliable delivery.",
          tech: ["Node.js", "NestJS", "RabbitMQ", "MongoDB", "Docker"],
          architecture: "Event-Driven · Publisher-Subscriber · Queue-Based",
        },
      ],
    },
    philosophy: {
      title: "Engineering Philosophy",
      subtitle: "// how I build software",
      principles: [
        {
          title: "Clean Architecture",
          description: "Business rules at the center, frameworks at the edges. Dependencies always point inward, making systems testable and framework-independent.",
        },
        {
          title: "Test-Driven Confidence",
          description: "Automated tests are not optional. Unit tests validate logic, integration tests verify contracts, and end-to-end tests confirm behavior.",
        },
        {
          title: "Domain-Driven Design",
          description: "Software should speak the language of the business. Bounded contexts, aggregates, and value objects create expressive, maintainable models.",
        },
        {
          title: "Scalability by Design",
          description: "Systems should be designed for growth from day one. Stateless services, event-driven patterns, and cloud-native principles enable horizontal scaling.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle: "// let's build something great",
      description: "Interested in collaborating on backend systems, discussing software architecture, or just talking about rockets and physics? Let's connect.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
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
    hero: {
      greeting: "Olá, eu sou",
      name: "Bruno Félix",
      role: "Engenheiro de Software Backend",
      tagline:
        "Construindo sistemas escaláveis com Java, arquitetura limpa e disciplina de engenharia.",
      cta: "Ver Meu Trabalho",
      terminal: "$ whoami",
      terminalOutput: "engenheiro-backend :: java · quarkus · spring-boot",
    },
    about: {
      title: "Sobre Mim",
      subtitle: "// quem sou eu",
      p1: "Sou Engenheiro de Software Backend apaixonado por construir sistemas robustos e escaláveis com o ecossistema Java. Meu foco é em Quarkus e Spring Boot, utilizando princípios de arquitetura limpa e design orientado a domínio para criar aplicações prontas para produção.",
      p2: "Além do código, tenho profunda curiosidade por ciência, física, foguetes e exploração espacial. Acredito que a mesma disciplina de engenharia que envia foguetes ao espaço se aplica à construção de software de qualidade — precisão, testes e melhoria contínua.",
      p3: "Também exploro o ecossistema Node.js com NestJS e tenho conhecimento fundamental de React e Next.js. Meu objetivo é me tornar especialista em Java e Quarkus, criando sistemas que sejam manuteníveis, testáveis e projetados para escala.",
      interests:
        "Ciência · Foguetes · Matemática · Física · Anime · Filmes · Tecnologia",
    },
    skills: {
      title: "Stack Técnica",
      subtitle: "// tecnologias e práticas",
      categories: {
        backend: "Engenharia Backend",
        node: "Ecossistema Node",
        frontend: "Frontend",
        practices: "Práticas de Engenharia",
        infra: "Infraestrutura",
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "// trabalhos selecionados",
      viewCode: "Ver Código",
      items: [
        {
          title: "Sistema de Gestão de Pedidos",
          description:
            "Sistema de gestão de pedidos baseado em microsserviços construído com Quarkus, implementando arquitetura hexagonal e padrões DDD. Possui comunicação orientada a eventos e cobertura abrangente de testes.",
          tech: ["Java", "Quarkus", "PostgreSQL", "Kafka", "Docker"],
          architecture: "Arquitetura Hexagonal · Event-Driven · CQRS",
        },
        {
          title: "Serviço de Autenticação",
          description:
            "Serviço escalável de autenticação e autorização construído com Spring Boot. Implementa OAuth2, gestão de tokens JWT e controle de acesso baseado em papéis.",
          tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
          architecture: "Clean Architecture · Domain-Driven Design",
        },
        {
          title: "API Gateway & Service Mesh",
          description:
            "API gateway cloud-native implementando rate limiting, padrões circuit breaker e service discovery. Construído para alta disponibilidade e escalabilidade horizontal.",
          tech: ["Java", "Quarkus", "Docker", "Kubernetes", "gRPC"],
          architecture: "Microsserviços · Circuit Breaker · Service Discovery",
        },
        {
          title: "Motor de Notificações em Tempo Real",
          description:
            "Sistema de notificações orientado a eventos suportando email, SMS e push notifications. Construído com NestJS e filas de mensagens para entrega confiável.",
          tech: ["Node.js", "NestJS", "RabbitMQ", "MongoDB", "Docker"],
          architecture:
            "Event-Driven · Publisher-Subscriber · Baseado em Filas",
        },
      ],
    },
    philosophy: {
      title: "Filosofia de Engenharia",
      subtitle: "// como construo software",
      principles: [
        {
          title: "Arquitetura Limpa",
          description: "Regras de negócio no centro, frameworks nas bordas. Dependências sempre apontam para dentro, tornando sistemas testáveis e independentes de framework.",
        },
        {
          title: "Confiança em Testes",
          description: "Testes automatizados não são opcionais. Testes unitários validam lógica, testes de integração verificam contratos, e testes end-to-end confirmam comportamento.",
        },
        {
          title: "Design Orientado a Domínio",
          description: "Software deve falar a linguagem do negócio. Contextos delimitados, agregados e objetos de valor criam modelos expressivos e manuteníveis.",
        },
        {
          title: "Escalabilidade por Design",
          description: "Sistemas devem ser projetados para crescimento desde o primeiro dia. Serviços stateless, padrões event-driven e princípios cloud-native permitem escalabilidade horizontal.",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "// vamos construir algo incrível",
      description: "Interessado em colaborar em sistemas backend, discutir arquitetura de software, ou apenas conversar sobre foguetes e física? Vamos nos conectar.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
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
    hero: {
      greeting: "Hola, soy",
      name: "Bruno Félix",
      role: "Ingeniero de Software Backend",
      tagline:
        "Construyendo sistemas escalables con Java, arquitectura limpia y disciplina de ingeniería.",
      cta: "Ver Mi Trabajo",
      terminal: "$ whoami",
      terminalOutput: "ingeniero-backend :: java · quarkus · spring-boot",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "// quién soy",
      p1: "Soy Ingeniero de Software Backend apasionado por construir sistemas robustos y escalables con el ecosistema Java. Mi enfoque está en Quarkus y Spring Boot, utilizando principios de arquitectura limpia y diseño orientado al dominio para crear aplicaciones listas para producción.",
      p2: "Más allá del código, tengo profunda curiosidad por la ciencia, la física, los cohetes y la exploración espacial. Creo que la misma disciplina de ingeniería que envía cohetes al espacio se aplica a la construcción de gran software — precisión, pruebas y mejora iterativa.",
      p3: "También exploro el ecosistema Node.js con NestJS y tengo conocimiento fundamental de React y Next.js. Mi objetivo es convertirme en especialista en Java y Quarkus, creando sistemas que sean mantenibles, testeables y diseñados para escalar.",
      interests:
        "Ciencia · Cohetes · Matemáticas · Física · Anime · Películas · Tecnología",
    },
    skills: {
      title: "Stack Técnico",
      subtitle: "// tecnologías y prácticas",
      categories: {
        backend: "Ingeniería Backend",
        node: "Ecosistema Node",
        frontend: "Frontend",
        practices: "Prácticas de Ingeniería",
        infra: "Infraestructura",
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "// trabajos seleccionados",
      viewCode: "Ver Código",
      items: [
        {
          title: "Sistema de Gestión de Pedidos",
          description:
            "Sistema de gestión de pedidos basado en microservicios construido con Quarkus, implementando arquitectura hexagonal y patrones DDD. Presenta comunicación orientada a eventos y cobertura completa de pruebas.",
          tech: ["Java", "Quarkus", "PostgreSQL", "Kafka", "Docker"],
          architecture: "Arquitectura Hexagonal · Event-Driven · CQRS",
        },
        {
          title: "Servicio de Autenticación",
          description:
            "Servicio escalable de autenticación y autorización construido con Spring Boot. Implementa OAuth2, gestión de tokens JWT y control de acceso basado en roles.",
          tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
          architecture: "Clean Architecture · Domain-Driven Design",
        },
        {
          title: "API Gateway & Service Mesh",
          description:
            "API gateway cloud-native implementando rate limiting, patrones circuit breaker y service discovery. Construido para alta disponibilidad y escalabilidad horizontal.",
          tech: ["Java", "Quarkus", "Docker", "Kubernetes", "gRPC"],
          architecture: "Microservicios · Circuit Breaker · Service Discovery",
        },
        {
          title: "Motor de Notificaciones en Tiempo Real",
          description:
            "Sistema de notificaciones orientado a eventos soportando email, SMS y push notifications. Construido con NestJS y colas de mensajes para entrega confiable.",
          tech: ["Node.js", "NestJS", "RabbitMQ", "MongoDB", "Docker"],
          architecture: "Event-Driven · Publisher-Subscriber · Basado en Colas",
        },
      ],
    },
    philosophy: {
      title: "Filosofía de Ingeniería",
      subtitle: "// cómo construyo software",
      principles: [
        {
          title: "Arquitectura Limpia",
          description: "Reglas de negocio en el centro, frameworks en los bordes. Las dependencias siempre apuntan hacia adentro, haciendo los sistemas testeables e independientes del framework.",
        },
        {
          title: "Confianza en Pruebas",
          description: "Las pruebas automatizadas no son opcionales. Las pruebas unitarias validan lógica, las de integración verifican contratos, y las end-to-end confirman comportamiento.",
        },
        {
          title: "Diseño Orientado al Dominio",
          description: "El software debe hablar el lenguaje del negocio. Contextos delimitados, agregados y objetos de valor crean modelos expresivos y mantenibles.",
        },
        {
          title: "Escalabilidad por Diseño",
          description: "Los sistemas deben diseñarse para crecer desde el primer día. Servicios stateless, patrones event-driven y principios cloud-native permiten escalabilidad horizontal.",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "// construyamos algo grandioso",
      description: "¿Interesado en colaborar en sistemas backend, discutir arquitectura de software, o simplemente hablar sobre cohetes y física? Conectemos.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      built: "Construido con disciplina de ingeniería",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;
