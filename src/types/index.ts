import { type LucideIcon } from "lucide-react"

export type AboutData = {
  title: string
  paragraphs: string[]
}

export type Value = {
  icon: LucideIcon
  title: string
  description: string
}

export type PerformancePromises = {
  title: string
  subtitle: string
  points: Value[]
}

export type Skill = {
  title: string
  icon: LucideIcon
  color: string
  skills: string[]
}

export type Experience = {
  year: string
  company: string
  role: string
  project?: string
  highlights: string[]
}

export type Technologies = Record<string, string[]>

export type SectionData = {
  title: string
  subtitle: string
}

export type CTASection = {
  title: string
  description: string
  primaryButton: string
  secondaryButton: string
}

export type UIStrings = {
  contactButton: string
  scrollIndicator: string
  projectLabel: string
  showMore: string
  showLess: string
}
