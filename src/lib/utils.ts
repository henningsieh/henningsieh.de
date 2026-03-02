import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Experience, Skill } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSkills = (skillsData: Skill[]) => {
  return skillsData.reduce((acc, category) => {
    return [...acc, ...category.skills]
  }, [] as string[])
}

export const getKeywords = (experiences: Experience[], commonKeywords: string[], allSkills: string[]) => {
  const roles = experiences.map((exp) => exp.role)
  return Array.from(new Set([...commonKeywords, ...allSkills, ...roles]))
}
