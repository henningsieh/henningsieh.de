"use client"

import { motion } from "framer-motion"
import { motionPresets } from "@/lib/motion"

export function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...motionPresets.staggerContainer}>
      {children}
    </motion.div>
  )
}
