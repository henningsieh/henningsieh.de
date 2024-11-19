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

export const basicData = {
  name: "Henning Sieh",
  jobTitle: "Senior IT Consultant & Full-Stack Developer",
  mobile: "+49 170 2786754",
  url: "https://henningsieh.de",
  email: "kontakt@henningsieh.de",
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
}

export const experiences = [
  {
    year: "2023 - 2024",
    company: "Diverse KMU und Vereine",
    role: "Beratung, Entwicklung und Betrieb Infrastruktur",
  },
  {
    year: "2022",
    company: "LDI Rheinland-Pfalz",
    role: "Init Projekt OZG (Onlinezugangsgesetz)",
  },
  {
    year: "2021",
    company: "[Sabbatical]",
    role: "Continuing education / Self studying",
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
    title: "Requirements Engineering",
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
    title: "Architectur & Design",
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
    title: "Software Development",
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
  const topSkills = skillsData
    .slice(0, 3)
    .map((category) => category.title)
    .join(", ")

  return `Senior IT Consultant und Full-Stack Entwickler mit 20 Jahren Erfahrung in ${topSkills}. Spezialisiert auf moderne Webtechnologien, skalierbare Lösungen und technische Beratung.`
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
    description:
      "Legal disclosure in accordance with German law (Telemediengesetz §5).",
    provider: {
      "@id": "${basicData.url}/#home",
    },
  },
]
