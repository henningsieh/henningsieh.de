import { Badge } from "@/components/ui/badge"
import { Skill } from "@/types"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export const SkillCard = ({ title, icon: Icon, color, skills }: Skill) => {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  }

  const iconBgClasses = {
    primary: "bg-primary/10",
    secondary: "bg-secondary/10",
    accent: "bg-accent/10",
  }

  const badgeBgClasses = {
    primary: "bg-primary/10 hover:bg-primary/20 border-primary/20 text-foreground",
    secondary: "bg-secondary/10 hover:bg-secondary/20 border-secondary/20 text-foreground",
    accent: "bg-accent/10 hover:bg-accent/20 border-accent/20 text-foreground",
  }

  return (
    <Card className="h-full rounded-lg border border-border bg-card/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconBgClasses[color as keyof typeof iconBgClasses]}`}
        >
          <Icon className={`h-6 w-6 ${colorClasses[color as keyof typeof colorClasses]}`} />
        </div>
        <CardTitle className="text-xl font-semibold leading-tight text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className={`transition-colors duration-200 ${badgeBgClasses[color as keyof typeof badgeBgClasses]}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
