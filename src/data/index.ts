// src/data/index.ts:

import { getAllSkills } from "@/lib/utils"
import { SkillCategory } from "@/types"
import { getDescription } from "@/utils"
import {
  Code,
  Database,
  FileText,
  GitBranch,
  Server,
  Users,
} from "lucide-react"

export const experiences = [
  {
    year: "2023 -2024",
    company: "Diverse KMU und Vereine",
    role: "Beratung, Entwicklung und Betrieb",
  },
  {
    year: "2022",
    company: "LDI Rheinland-Pfalz",
    role: "Init Projekt OZG (Onlinezugangsgesetz)",
  },
  {
    year: "2021",
    company: "Sabbatical",
    role: "Continuing education / self studying",
  },
  {
    year: "2020",
    company: "ITZ-Bund",
    role: "Requirements Engineer / Solution Architect",
  },
  { year: "2019", company: "ING DiBa", role: "Domain Architect" },
  {
    year: "2018",
    company: "Vorwerk Elektrowerke GmbH Co. KG",
    role: "Requirements Engineer (TESU)",
  },
  {
    year: "2017",
    company: "DB Cargo AG - Deutsche Bahn",
    role: "Business Engineer / Solution Architect (IT)",
  },
  {
    year: "2016",
    company: "Adam Opel AG",
    role: "Programmmanagement, Business Analyst, Solution Designer",
  },
  {
    year: "2015",
    company: "Capgemini Holding GmbH",
    role: "Solution Architect IT / Requirements Engineer",
  },
  {
    year: "2012 – 2014",
    company: "TFG Transfracht GmbH",
    role: "Manager E-Business (Interim-Management)",
  },
]

export const skillsData: SkillCategory[] = [
  {
    title: "IT Consulting",
    icon: Users,
    color: "accent",
    skills: [
      "Stakeholder Management",
      "Projektleitung",
      "Kundenberatung",
      "Schulungen",
      "Technische Konzepte",
      "Prozessoptimierung",
    ],
  },
  {
    title: "Anforderungsmanagement",
    icon: FileText,
    color: "secondary",
    skills: [
      "Anforderungsanalyse",
      "Spezifikationen",
      "Use-Case Modellierung",
      "Prozessmodellierung",
      "Funktionales Design",
    ],
  },
  {
    title: "Architektur & Design",
    icon: Database,
    color: "primary",
    skills: [
      "Microservices",
      "Serverless",
      "Domain-driven Design (DDD)",
      "SOLID (OOD)",
      "System Design",
      "Process Reengineering",
      "Change Management",
    ],
  },
  {
    title: "Programmierung",
    icon: Code,
    color: "accent",
    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "RESTful APIs",
      "Postgres / SQL",
      "Drizzle",
      "Express.js",
      "PHP (basics)",
      "Java (basics)",
      "C (basics)",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Server,
    color: "secondary",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Windows", "Oracle", "UML"],
  },
  {
    title: "Methoden & Prozesse",
    icon: GitBranch,
    color: "primary",
    skills: ["IREB", "PRINCE2", "ITIL", "Agile", "Scrum", "TDD", "PMI"],
  },
]

export const getKeywords = () => {
  const skills = getAllSkills()
  const roles = experiences.map((exp) => exp.role)
  const baseKeywords = [
    "IT Consulting",
    "Full-Stack Development",
    "Software Architecture",
    "IT Berater",
    "Deutschland",
    "German IT Consultant",
  ]

  return [...new Set([...baseKeywords, ...skills, ...roles])]
}

export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://henningsieh.de/#person",
    name: "Henning Sieh",
    jobTitle: "Senior IT Consultant & Full-Stack Developer",
    description: getDescription(),
    image: "https://henningsieh.de/avatar_Henning-Sieh_315x315.jpg",
    url: "https://henningsieh.de",
    telephone: "+49 170 2786754",
    email: "kontakt@henningsieh.de",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    knowsAbout: getAllSkills(),
    knowsLanguage: ["de", "en"],
    hasOccupation: {
      "@type": "Occupation",
      name: "IT Consultant",
      occupationalCategory: "Software Developer and IT Consultant",
      skills: getAllSkills(),
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
    "@id": "https://henningsieh.de/#website",
    url: "https://henningsieh.de",
    name: "Henning Sieh IT Consulting",
    description: getDescription(),
    publisher: { "@id": "https://henningsieh.de/#person" },
  },
]
