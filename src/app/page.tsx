// src/app/page.tsx:

import PortfolioOneSheet from "@/components/Portfolio"
import { skillsData, experiences } from "@/data"
import { Metadata } from "next"

export default function Home() {
  return (
    <main>
      <PortfolioOneSheet />
    </main>
  )
}

// Helper function to extract all skills from skillsData
const getAllSkills = () => {
  return skillsData.reduce((acc, category) => {
    return [...acc, ...category.skills]
  }, [] as string[])
}

// Helper function to get keywords from data
const getKeywords = () => {
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

// Create description from skills
const getDescription = () => {
  const topSkills = skillsData
    .slice(0, 3)
    .map((category) => category.title)
    .join(", ")

  return `Senior IT Consultant und Full-Stack Entwickler mit 20 Jahren Erfahrung in ${topSkills}. Spezialisiert auf moderne Webtechnologien, skalierbare Lösungen und technische Beratung.`
}

export const metadata: Metadata = {
  metadataBase: new URL("https://henningsieh.de"),
  title: {
    default: "Henning Sieh | Senior IT Consultant & Full-Stack Developer",
    template: "%s | Henning Sieh",
  },
  description: getDescription(),
  keywords: getKeywords(),
  authors: [{ name: "Henning Sieh" }],
  creator: "Henning Sieh",
  publisher: "Henning Sieh",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://henningsieh.de",
    title: "Henning Sieh | Senior IT Consultant & Full-Stack Developer",
    description: getDescription(),
    siteName: "Henning Sieh IT Consulting",
    images: [
      {
        url: "/avatar_Henning-Sieh_315x315.jpg",
        width: 315,
        height: 315,
        alt: "Henning Sieh Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henning Sieh | Senior IT Consultant & Full-Stack Developer",
    description: getDescription(),
    images: ["/avatar_Henning-Sieh_315x315.jpg"],
  },
  alternates: {
    canonical: "https://henningsieh.de",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  other: {
    "JSON-LD": [
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
    ],
  },
}
