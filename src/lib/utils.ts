import { skillsData } from "@/data"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAllSkills = () => {
  return skillsData.reduce((acc, category) => {
    return [...acc, ...category.skills]
  }, [] as string[])
}
