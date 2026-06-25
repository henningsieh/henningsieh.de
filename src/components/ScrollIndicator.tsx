"use client"

import { ChevronDownIcon } from "lucide-react"
import { motion } from "framer-motion"

export function ScrollIndicator({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex cursor-pointer flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-sm font-medium">{label}</span>
        <ChevronDownIcon className="h-6 w-6" />
      </motion.div>
    </motion.div>
  )
}
