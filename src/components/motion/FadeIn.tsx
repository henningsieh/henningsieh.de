"use client"

import { motion } from "framer-motion"
import { motionPresets } from "@/lib/motion"

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...motionPresets.fadeInUp}>
      {children}
    </motion.div>
  )
}
