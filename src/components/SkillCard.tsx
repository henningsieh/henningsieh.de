import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { SkillCategory } from "@/types"

export const SkillCard = ({
  title,
  icon: Icon,
  color,
  skills,
}: SkillCategory) => (
  <Card className="card-hover">
    <CardHeader>
      <CardTitle className={`flex items-center text-xl text-${color}`}>
        <Icon className="mr-2" /> {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className={`bg-${color}/10 text-${color} transition-colors hover:bg-${color}/20`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
)
