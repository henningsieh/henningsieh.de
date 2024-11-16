import { skillsData } from "@/data"

export const getDescription = () => {
  const topSkills = skillsData
    .slice(0, 3)
    .map((category) => category.title)
    .join(", ")

  return `Senior IT Consultant und Full-Stack Entwickler mit 20 Jahren Erfahrung in ${topSkills}. Spezialisiert auf moderne Webtechnologien, skalierbare Lösungen und technische Beratung.`
}
