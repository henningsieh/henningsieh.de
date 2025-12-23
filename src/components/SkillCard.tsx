import { Badge } from "@/components/ui/badge"
import { SkillCategory } from "@/types"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export const SkillCard = ({ title, icon: Icon, color, skills }: SkillCategory) => {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  }

  const bgColorClasses = {
    primary: "bg-primary/10 hover:bg-primary/20",
    secondary: "bg-secondary/10 hover:bg-secondary/20",
    accent: "bg-accent/10 hover:bg-accent/20",
  }

  return (
    <Card className="card-hover">
      <CardHeader className="p-4">
        <CardTitle className={`flex items-center p-0 text-xl ${colorClasses[color as keyof typeof colorClasses]}`}>
          <Icon className="mr-2 h-5 w-5 flex-shrink-0" />
          <span className="flex-grow truncate">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className={`${bgColorClasses[color as keyof typeof bgColorClasses]} ${colorClasses[color as keyof typeof colorClasses]}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
