"use client"

import { ChevronDownIcon } from "lucide-react"

export function ScrollIndicator({ label }: { label: string }) {
  return (
    <div
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      onClick={() =>
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
      }
      role="button"
      aria-label={label}
    >
      <div className="flex cursor-pointer flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
        <span className="text-sm font-medium">{label}</span>
        <ChevronDownIcon className="animate-bounce-indicator h-6 w-6" />
      </div>
    </div>
  )
}
