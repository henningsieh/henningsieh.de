"use client"

import { ArrowUpIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setVisible((prev) => {
            if (prev && scrollY < 50) return false
            if (!prev && scrollY > 100) return true
            return prev
          })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Link href="#home">
      <Button
        className={`fixed bottom-8 right-8 z-50 cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:bg-primary/90 hover:shadow-xl focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 ${visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
          }`}
        aria-label="Back to top"
      >
        <ArrowUpIcon className="h-5 w-5" />
      </Button>
    </Link>
  )
}
