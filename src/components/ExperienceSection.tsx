"use client"

import { ArrowRightIcon } from "lucide-react"
import { useState } from "react"

import { FadeIn } from "@/components/motion/FadeIn"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Experience, SectionData, UIStrings } from "@/types"

export function ExperienceSection({
  experiences,
  section,
  uiStrings,
}: {
  experiences: Experience[]
  section: SectionData
  uiStrings: UIStrings
}) {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="experiences" className="gradient-bg-section scroll-mt-16 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-subtitle mx-auto">{section.subtitle}</p>
          </div>
        </FadeIn>

        <Card className="border-border bg-card rounded-lg border shadow-xs transition-shadow duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <ScrollArea className="h-150 pr-4">
              <div className={`relative ${showAll ? "bg-muted/20 -m-4 rounded-lg p-4" : ""}`}>
                <div className="timeline-line" />
                <div className="space-y-8 pl-8">
                  {experiences.slice(0, showAll ? experiences.length : 6).map((exp, index) => (
                    <FadeIn key={index}>
                      <div className="relative">
                        <div className="timeline-dot absolute top-4.5 -left-1.5 z-50 translate-x-[-22.5px]" />
                        <div className="space-y-2">
                          <div className="flex flex-col gap-2 pt-2 pr-4 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-foreground text-xl font-semibold">{exp.company}</h3>
                            <Badge className="border-primary bg-primary/20 text-primary hover:text-primary-foreground w-fit px-3 py-2 text-xs">
                              {exp.year}
                            </Badge>
                          </div>
                          <p className="text-primary font-medium">{exp.role}</p>
                          {exp.project && (
                            <p className="text-muted-foreground text-sm italic">
                              {uiStrings.projectLabel}
                              {exp.project}
                            </p>
                          )}
                          {exp.highlights && (
                            <ul className="text-muted-foreground mt-3 space-y-1.5 text-sm">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <ArrowRightIcon className="text-accent mt-0.5 h-4 w-4 shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </ScrollArea>

            {experiences.length > 6 && (
              <div className="mt-6 text-center">
                <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                  {showAll ? uiStrings.showLess : uiStrings.showMore}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
