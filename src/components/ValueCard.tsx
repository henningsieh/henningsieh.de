import { Value } from "@/types"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export const ValueCard = ({ icon: Icon, title, description }: Value) => {
  return (
    <Card className="h-full rounded-lg border border-border bg-card/50 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold leading-tight text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
