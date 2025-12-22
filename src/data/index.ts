// src/data/index.ts:
import {
  Boxes,
  Cloud,
  Code,
  Database,
  FileText,
  GitBranch,
  Network,
  Server,
  Settings,
  Shield,
  Users,
  Workflow,
} from "lucide-react"

import type { SkillCategory } from "@/types"

export const basicData = {
  name: "Henning Sieh",
  jobTitle: "Senior IT Consultant & Requirements Engineer",
  tagline: "Solution Architect für Enterprise IT-Infrastrukturen & Integrationslösungen",
  mobile: "+49 170 2786754",
  url: "https://henningsieh.de",
  email: "kontakt@henningsieh.de",
  location: "Maintal, Germany",
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

// Value proposition
export const valueProposition = {
  title: "Value Proposition",
  points: [
    {
      icon: FileText,
      title: "Requirements Engineering Excellence",
      description:
        "IREB-fundierte Anforderungsanalyse für komplexe IT-Infrastrukturprojekte. Strukturierung von Kundenanforderungen und Erstellung präziser Spezifikationen.",
    },
    {
      icon: Boxes,
      title: "Solution Architecture & Integration",
      description:
        "Erfahrung in Systemarchitektur, API-Design und Integration heterogener Systeme. Fundiertes Verständnis für Middleware, Schnittstellen und Enterprise-Lösungen.",
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description:
        "Bewährte Fähigkeit, zwischen Management, Business und Entwicklungsteams zu vermitteln. Technische Lösungen verständlich erklären und Kunden fachlich abholen.",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Hands-on Entwicklungskompetenz in modernen Technologien (TypeScript, Node.js, React). API-Entwicklung und technische Prototypen für Proof-of-Concepts.",
    },
    {
      icon: Workflow,
      title: "Prozessanalyse & Automation",
      description:
        "Business Process Modeling (BPMN) und Erfahrung mit Automatisierungskonzepten. Verständnis für Workflow-Optimierung und DevOps-Praktiken.",
    },
    {
      icon: Server,
      title: "IT Infrastructure Know-how",
      description:
        "Praktische Erfahrung mit Cloud-Deployments, Docker-Containerisierung und CI/CD-Pipelines. Betrieb von Enterprise-Systemen und Monitoring.",
    },
  ],
}

// relevant Technologies
export const relevantTechnologies = {
  infrastructure: [
    "Network Management",
    "IT Monitoring",
    "Infrastructure as Code",
    "Docker & Container Orchestration",
    "Cloud Platforms",
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
    "REST/SOAP Services",
    "Middleware Integration",
    "Enterprise Service Bus (ESB)",
    "Microservices Architecture",
  ],
  development: [
    "TypeScript/JavaScript",
    "Node.js & Express",
    "React & Next.js",
    "SQL & NoSQL Databases",
    "Git & Version Control",
  ],
  methodologies: [
    "Requirements Engineering (IREB)",
    "Solution Architecture",
    "UML & BPMN Modeling",
    "Agile/Scrum/SAFe",
    "PRINCE2 & ITIL",
  ],
}

export const experiences = [
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

export const skillsData: SkillCategory[] = [
  {
    title: "Requirements Engineering",
    icon: FileText,
    color: "primary",
    skills: [
      "IREB-fundierte Anforderungsanalyse",
      "Requirements-Spezifikationen",
      "Use-Case & User-Story Modellierung",
      "Stakeholder-Management",
      "Business Process Analysis (BPMN)",
      "Funktionales Design",
    ],
  },
  {
    title: "Solution Architecture",
    icon: Boxes,
    color: "accent",
    skills: [
      "Enterprise System Design",
      "API Architecture & Integration",
      "Microservices & SOA",
      "Domain-Driven Design (DDD)",
      "Interface Design & Middleware",
      "Cloud Architecture Patterns",
    ],
  },
  {
    title: "IT Infrastructure & Operations",
    icon: Server,
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
  {
    title: "Software Development",
    icon: Code,
    color: "primary",
    skills: [
      "TypeScript & JavaScript (ES6+)",
      "Node.js & Express.js",
      "React & Next.js",
      "RESTful API Development",
      "SQL & NoSQL Databases",
      "Git Version Control",
    ],
  },
  {
    title: "IT Consulting & Project Leadership",
    icon: Users,
    color: "accent",
    skills: [
      "Technische Projektleitung",
      "Kundenberatung & Workshops",
      "Team Coordination",
      "Change Management",
      "Technical Documentation",
      "Quality Assurance",
    ],
  },
  {
    title: "Methodologies & Frameworks",
    icon: GitBranch,
    color: "secondary",
    skills: [
      "Agile/Scrum/SAFe",
      "PRINCE2 Foundation",
      "ITIL v3 Foundation",
      "UML & BPMN",
      "DevOps Practices",
      "Test-Driven Development",
    ],
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

const getAllSkills = () => {
  return skillsData.reduce((acc, category) => {
    return [...acc, ...category.skills]
  }, [] as string[])
}
export const allSkills = getAllSkills()

const getKeywords = () => {
  const roles = experiences.map((exp) => exp.role)
  return Array.from(new Set([...commonKeywords, ...allSkills, ...roles]))
}
export const keywords = getKeywords()

const getDescription = () => {
  return `Senior IT Consultant mit 20+ Jahren Erfahrung in Requirements Engineering, Solution Architecture und IT-Infrastruktur. Spezialisiert auf die Schnittstelle zwischen Business-Anforderungen und technischer Umsetzung. Expertise in Enterprise-Systemintegration, API Management und Automatisierung.`
}
export const description = getDescription()

export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${basicData.url}/#home`, // Refers to the section where name, email, and phone are listed
    name: basicData.name,
    jobTitle: basicData.jobTitle,
    description: description,
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
    knowsAbout: allSkills,
    knowsLanguage: ["de", "en"],
    hasOccupation: {
      "@type": "Occupation",
      name: basicData.jobTitle,
      occupationalCategory: basicData.occupationalCategory,
      skills: allSkills,
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
    description: description,
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
