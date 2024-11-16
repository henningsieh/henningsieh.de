// src/data/index.ts:

import { SkillCategory } from "@/types"
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
