// src/data/index.ts:
import {
  BoxesIcon,
  CodeIcon,
  FileTextIcon,
  GitBranchIcon,
  LayersIcon,
  MonitorIcon,
  ServerIcon,
  UsersIcon,
  WorkflowIcon,
} from "lucide-react"

import { getKeywords, getSkills } from "@/lib/utils"
import type {
  AboutData,
  CTASection,
  Experience,
  PerformancePromises,
  SectionData,
  Skill,
  Technologies,
  UIStrings,
  Value,
} from "@/types"

export const basicData = {
  name: "Henning Sieh",
  jobTitle: "IT Consultant | Full-Stack Developer | Requirements Engineer",
  tagline: "Solution Architect für Software-Projekte, Solution-Designs und Web-Anwendungen.",
  mobile: "+49 170 2786754",
  url: "https://henningsieh.de",
  email: "kontakt@henningsieh.de",
  location: "Maintal (Frankfurt), Germany",
  address: {
    street: "Espenpfad 6",
    zipCode: "63477",
    city: "Maintal",
    region: "Hessen",
    country: "Deutschland",
    country_code: "DE",
    landlinePhoneNumber: "06181 4985597",
  },
  tax_info: {
    tax_number_UStId: "DE279588258",
    tax_authority_city: "Finanzamt Hanau",
  },
  bank_info: {
    name: "BUNQ",
    bic: "BUNQDE82",
    account: {
      holder: "Henning Sieh",
      iban: "DE13 3701 9000 1010 2278 09",
    },
  },
  occupationalCategory: "IT Consulting",
  social: {
    linkedin: "https://www.linkedin.com/in/henningsieh/",
    bluesky: "https://bsky.app/profile/henningsieh.de",
    twitter: "https://twitter.com/henningsieh",
  },
}

// Values
export const performancePromises: PerformancePromises = {
  title: "Leistungsversprechen",
  subtitle: "Was Sie von meiner Arbeit erwarten können",
  points: [
    {
      icon: FileTextIcon,
      title: "Requirements Engineering Excellence",
      description:
        "Anforderungsanalyse nach IREB für komplexe Software-Projekte. Strukturierung von Kundenanforderungen und Erstellung präziser Spezifikationen.",
    },
    {
      icon: BoxesIcon,
      title: "Solution Architecture & Integration",
      description:
        "Erfahrung in Systemarchitektur, API-Design und Integration heterogener Systeme. Fundiertes Verständnis für Middleware, Schnittstellen und Enterprise-Lösungen.",
    },
    {
      icon: UsersIcon,
      title: "Stakeholder Management",
      description:
        "Bewährte Fähigkeit, zwischen Management, Business und Entwicklungsteams zu vermitteln. Technische Lösungen verständlich erklären und Kunden fachlich abholen.",
    },
    {
      icon: CodeIcon,
      title: "Full-Stack Development",
      description:
        "Hands-on Entwicklungskompetenz in modernen Technologien (TypeScript, Node.js, React). API-Entwicklung und technische Prototypen für Proof-of-Concepts.",
    },
    {
      icon: WorkflowIcon,
      title: "Prozessanalyse & Automation",
      description:
        "Business Process Modeling (BPMN) und Erfahrung mit Automatisierungskonzepten. Verständnis für Workflow-Optimierung und DevOps-Praktiken.",
    },
    {
      icon: ServerIcon,
      title: "IT Infrastructure Know-how",
      description:
        "Praktische Erfahrung mit Cloud-Deployments, Docker-Containerisierung und CI/CD-Pipelines. Betrieb von Enterprise-Systemen und Monitoring.",
    },
  ] satisfies Value[],
}

// Skills
export const skills: Skill[] = [
  {
    title: "Frontend & Full-Stack Development",
    icon: CodeIcon,
    color: "primary",
    skills: [
      "TypeScript-first development & modern JavaScript (ESNext)",
      "React & Next.js framework (App Router, Server Components, SSR/SSG, performance optimization)",
      "API design & implementation (REST)",
      "Relational databases: PostgreSQL, SQLite • ORMs: Prisma, Drizzle",
    ],
  },
  {
    title: "Modern Web Stack & APIs",
    icon: LayersIcon,
    color: "primary",
    skills: [
      "Next.js App Router & Server-First Architecture",
      "Authentication & Authorization Patterns (session, token, role-based access)",
      "tRPC / oRPC & Type-safe API Layers",
      "Drizzle ORM & Prisma (Type-safe Database Access)",
      "WebSocket & Real-time Communication (Socket.IO)",
      "TanStack Query / React Query",
    ],
  },
  {
    title: "UI Engineering & Performance",
    icon: MonitorIcon,
    color: "primary",
    skills: [
      "Performance Optimization (Lazy Loading, Caching)",
      "Figma Design-to-Code Implementation",
      "Playwright E2E & Vitest Unit Testing",
      "Core Web Vitals & Observability",
      "Vercel Deployments & Edge Functions",
      "Tailwind CSS v4 & shadcn/ui Components",
      "Turborepo Monorepo Architecture",
      "next-intl Internationalization (i18n)",
    ],
  },
  {
    title: "Requirements Engineering",
    icon: FileTextIcon,
    color: "accent",
    skills: [
      "Anforderungsanalyse nach IREB",
      "User-Story & Use-Case Modellierung",
      "Stakeholder-Management",
      "Requirements-Spezifikationen",
    ],
  },
  {
    title: "Solution Architecture",
    icon: BoxesIcon,
    color: "accent",
    skills: [
      "Visual System Architecture",
      "API Architecture & Integration",
      "Microservices & SOA",
      "Domain-Driven Design (DDD)",
      "Interface Design & Middleware",
      "Cloud Architecture Patterns",
    ],
  },
  {
    title: "IT Consulting & Project Management",
    icon: UsersIcon,
    color: "accent",
    skills: [
      "Technische Teil-Projektleitung",
      "Kundenberatung & Agile Coaching",
      "Technische Dokumentation",
      "Quality Assurance",
    ],
  },
  {
    title: "Methodologies & Delivery Practices",
    icon: GitBranchIcon,
    color: "secondary",
    skills: ["Test-Driven Development", "Agile & Scrum", "UML & BPMN", "DevOps Practices"],
  },
  {
    title: "IT Infrastructure & Operations",
    icon: ServerIcon,
    color: "secondary",
    skills: [
      "Docker & Container-Orchestrierung",
      "Cloud Deployments",
      "CI/CD Pipeline Design",
      "System Monitoring & Observability",
      "Network Configuration & Security",
      "Linux Server Administration",
    ],
  },
]

// Technologies
export const technologies: Technologies = {
  infrastructure: [
    "Cloud Platforms: Hetzner Cloud, Vercel Infrastructure and CDN",
    "Docker & Container Orchestration",
    "S3 / MinIO Object Storage",
    "Network Management",
    "IT Monitoring",
  ],
  automation: [
    "Workflow Automation",
    "CI/CD Pipelines",
    "Process Automation (BPMN)",
    "DevOps Practices",
    "Configuration Management",
  ],
  integration: [
    "API Management & Design",
    "RESTful APIs (Senior Level, OpenAPI Specification)",
    "GraphQL APIs (Basic Knowledge)",
    "Middleware Integration",
    "Enterprise Service Bus (ESB)",
    "Microservices Architecture",
  ],
  development: [
    "TypeScript/JavaScript",
    "React & Next.js (App Router, Server-side Rendering (SSR))",
    "Node.js & Express",
    "Better Auth, Auth.js (previously NextAuth.js v4)",
    "WebSocket (socket.IO)",
    "Drizzle ORM & Prisma",
    "Type-safe APIs: tRPC, oRPC",
    "TanStack Query / Form / Table",
    "SQL & NoSQL Databases",
    "Git & Version Control",
  ],
  methodologies: [
    "Requirements Engineering (IREB)",
    "Playwright E2E & Vitest Unit Testing",
    "Turborepo Monorepo Architecture",
    "Solution Architecture",
    "UML & BPMN Modeling",
    "SAFe Delivery Model",
    "PRINCE2, ITIL",
  ],
}

// About Section
export const aboutData: AboutData = {
  title: "Über mich",
  paragraphs: [
    "Als Senior IT Consultant und Solution Architect bringe ich über 20 Jahre branchenübergreifende Erfahrung in der Konzeption und Umsetzung komplexer IT-Infrastrukturlösungen mit. Mein Schwerpunkt liegt auf Requirements Engineering, Systemintegration und der Automatisierung von Enterprise-Prozessen.",
    "In den vergangenen 5 Jahren habe ich umfangreiche praktische Erfahrung mit Next.js Full-Stack Development gesammelt. Dabei habe ich signifikanten Mehrwert durch den intensiven Einsatz moderner KI-Agenten geschaffen, die Entwicklung beschleunigt und die Codequalität verbessert. (fundierte Erfahrungen mit: GitHub Copilot, Anthropic Claude Code, OpenAI Codex, Google Gemini CLI)",
    "Ich agiere als Schnittstelle zwischen Management, Business-Stakeholdern und Entwicklungsteams. Dabei kombiniere ich fundiertes technisches Know-how in API-Management, Middleware-Integration und Cloud-Technologien mit meiner Fähigkeit, Kundenanforderungen präzise zu analysieren und in maßgeschneiderte Lösungskonzepte zu übersetzen.",
    "Mit Erfahrung aus Projekten bei Netzbetreibern, Finanzdienstleistern, der öffentlichen Verwaltung und der Industrie verstehe ich die spezifischen Herausforderungen unterschiedlicher Branchen. Mein Ziel ist es, komplexe IT-Projekte von der ersten Idee bis zur erfolgreichen Umsetzung zu begleiten und dabei stets die Balance zwischen technischer Exzellenz und geschäftlichen Anforderungen zu wahren.",
  ],
}

// Skills Section
export const skillsSection: SectionData = {
  title: "Fachliche Expertise",
  subtitle:
    "Full-Stack Web-Entwicklung mit Next.js, TypeScript und Performance-Optimierung – von der Anforderung bis zum produktiven Einsatz",
}

// Technologies Section
export const technologiesSection: SectionData = {
  title: "Technologie-Stack",
  subtitle: "Relevante Technologien und Methoden für moderne IT-Projekte",
}

// Experience Section
export const experienceSection: SectionData = {
  title: "Berufserfahrung",
  subtitle: "20+ Jahre Erfahrung in diesen IT-Projekten",
}

// CTA Section
export const ctaSection: CTASection = {
  title: "Bereit für den nächsten Schritt?",
  description:
    "Lassen Sie uns gemeinsam besprechen, wie meine Expertise Ihr Unternehmen bei der Entwicklung und Integration komplexer IT-Infrastrukturlösungen unterstützen kann.",
  primaryButton: "E-Mail senden",
  secondaryButton: "LinkedIn Profil",
}

// UI Strings
export const uiStrings: UIStrings = {
  contactButton: "Kontakt aufnehmen",
  scrollIndicator: "Scroll",
  projectLabel: "Projekt: ",
  showMore: "Mehr Erfahrung anzeigen",
  showLess: "Weniger anzeigen",
}

// Experiences
export const experiences: Experience[] = [
  {
    year: "2023 - 2025",
    company: "SMEs & Non-Profit Organizations",
    role: "Full-Stack Development & Infrastructure Operations",
    highlights: [
      "Cloud-Deployments und CI/CD-Pipelines mit Docker",
      "Betrieb von Mail-Servern, Collaboration-Systemen (Nextcloud)",
      "API-Entwicklung und Form-basierte Anwendungen",
      "Monitoring, Routing und Security-Konfiguration",
    ],
  },
  {
    year: "2022",
    company: "LDI Rheinland-Pfalz",
    role: "Requirements Engineer / Sub-Project Lead",
    project: "Onlinezugangsgesetz, OZG (Online Access Act, EU)",
    highlights: [
      "Requirements-Spezifikation und Stakeholder-Analyse",
      "Technische Teilprojektleitung",
      "Fachliche und funktionale Anforderungserhebung",
      "Durchführung von Experteninterviews und Workshops",
    ],
  },
  {
    year: "2021",
    company: "Sabbatical - Continuing Education",
    role: "Technology & Open Source Skill Refresh",
    highlights: [
      "Full-Stack Development (Node.js, TypeScript, React, Next.js)",
      "Docker-Container-Orchestrierung und Cloud-Deployments",
      "CI/CD-Prozesse und DevOps-Praktiken",
      "PostgreSQL und moderne Entwicklungs-Workflows",
    ],
  },
  {
    year: "2020",
    company: "ITZ-Bund (Federal IT Center)",
    role: "Requirements Engineer / Solution Architect",
    project: "DAC6 EU Directive Implementation",
    highlights: [
      "Anforderungsspezifikation mit DOORS (ITZ-Bund Methodik)",
      "Analyse funktionaler Anforderungen und Business-Prozesse",
      "UML Use-Case Diagramme und BPMN-Prozessmodellierung",
      "Architektur-Design für Bundesbehörden",
    ],
  },
  {
    year: "2019",
    company: "ING DiBa",
    role: "Domain Architect",
    project: "GDPR / Cookie Consent Implementation",
    highlights: [
      "Requirements Engineering und Management",
      "Interface- und Application-Architecture Design",
      "Technische Teilprojektleitung in agiler Umgebung",
      "Koordination von Testing und QA-Aktivitäten",
    ],
  },
  {
    year: "2018",
    company: "IT.Niedersachsen",
    role: "Requirements Engineer",
    project: "Service Account (OZG)",
    highlights: [
      "Analyse rechtlicher und technischer Rahmenbedingungen",
      "Multi-Stakeholder Requirements Management",
      "Solution Architecture Konzepte und IAM-Design",
      "Wireframes und Click-Dummies",
    ],
  },
  {
    year: "2018",
    company: "Vorwerk Elektrowerke GmbH",
    role: "Requirements Engineer",
    highlights: [
      "System-Requirements Engineering",
      "Change-Request-Management",
      "Architektur-Support und System-Testing Definitionen",
    ],
  },
  {
    year: "2017",
    company: "DB Cargo AG (Deutsche Bahn)",
    role: "Business Engineer / Solution Architect",
    highlights: ["Funktionale Application-Architecture", "Stakeholder Management und Quality Assurance"],
  },
  {
    year: "2016",
    company: "Adam Opel AG",
    role: "Program Management / Business Analyst / Solution Designer",
    highlights: ["Teilprojektleitung und Reporting", "Business Requirements und Prozessmodellierung"],
  },
  {
    year: "2015",
    company: "Capgemini Holding GmbH",
    role: "Solution Architect IT / Requirements Engineer",
    highlights: ["Enterprise Solution Architecture", "Requirements Engineering für Großprojekte"],
  },
]

const commonKeywords = [
  "Senior IT Consulting",
  "Software Architecture",
  "Full-Stack Development",
  "Requirements Engineering",
  "IT Berater",
  "Maintal",
  "Hanau",
  "Frankfurt",
  "Deutschland",
  "German IT Consultant",
]

export const userSkills = getSkills(skills)

export const metaDataKeywords = getKeywords(experiences, commonKeywords, userSkills)

export const metaDataDescription =
  "Senior IT Consultant mit 20+ Jahren Erfahrung in Requirements Engineering, Solution Architecture und IT-Infrastruktur. Spezialisiert auf die Schnittstelle zwischen Business-Anforderungen und technischer Umsetzung. Expertise in Enterprise-Systemintegration, API Management und Automatisierung."

export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${basicData.url}/#home`, // Refers to the section where name, email, and phone are listed
    name: basicData.name,
    jobTitle: basicData.jobTitle,
    description: metaDataDescription,
    image: `${basicData.url}/avatar_Henning-Sieh_315x315.jpg`,
    url: basicData.url,
    telephone: basicData.mobile,
    email: basicData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: basicData.address.street,
      addressLocality: basicData.address.city,
      postalCode: basicData.address.zipCode,
      addressRegion: basicData.address.region,
      addressCountry: basicData.address.country_code,
    },
    knowsAbout: userSkills,
    knowsLanguage: ["de", "en"],
    hasOccupation: {
      "@type": "Occupation",
      name: basicData.jobTitle,
      occupationalCategory: basicData.occupationalCategory,
      skills: userSkills,
    },
    workExperience: experiences.map((exp) => ({
      "@type": "WorkPosition",
      name: exp.role,
      organization: { "@type": "Organization", name: exp.company },
      startDate: exp.year.split("-")[0],
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${basicData.url}/#about`, // Align this with your about section
    url: basicData.url,
    name: `${basicData.name} - ${basicData.occupationalCategory}`,
    description: metaDataDescription,
    publisher: { "@id": `${basicData.url}/#home` }, // Refers to the person entity on #home
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "${basicData.url}/impressum",
    url: "${basicData.url}/impressum",
    name: "Impressum",
    description: "Legal disclosure in accordance with German law (Telemediengesetz §5).",
    provider: {
      "@id": "${basicData.url}/#home",
    },
  },
]
