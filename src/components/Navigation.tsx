"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useSyncExternalStore } from "react"

import { ModeToggle } from "@/components/ModeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { basicData } from "@/data"

const navItems = ["home", "about", "values", "skills", "technologies", "experiences"] as const
type NavItem = (typeof navItems)[number]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeHash = useSyncExternalStore(
    (callback) => {
      window.addEventListener("hashchange", callback)
      return () => window.removeEventListener("hashchange", callback)
    },
    () => (window.location.hash.slice(1) as NavItem) || "home",
    () => "home" as NavItem
  )

  const isActive = (item: NavItem) => {
    return activeHash === item || (item === "home" && !activeHash)
  }

  const nameInitials = basicData.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()

  return (
    <>
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-sm transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="m-0 flex items-center p-0">
              <Avatar className="size-7 border-2 border-accent lg:size-8 xl:size-10">
                <AvatarImage src="/avatar_Henning-Sieh_315x315.jpg" alt="Profile" />
                <AvatarFallback>{nameInitials}</AvatarFallback>
              </Avatar>
              <div className="ml-2 text-nowrap pb-1 text-3xl font-bold text-muted-foreground lg:text-4xl xl:text-5xl">
                {basicData.name}
              </div>
            </Link>
            <div className="hidden md:flex">
              <div className="ml-6 flex items-start gap-0 md:gap-2 lg:gap-4 xl:gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`/#${item}`}
                    className={`nav-link px-2 py-2 text-sm font-semibold transition-colors ${
                      isActive(item) ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
                <ModeToggle />
              </div>
            </div>
            <div className="flex gap-2 md:hidden">
              <ModeToggle />
              <button
                className="p-2 text-foreground transition-colors duration-200 hover:text-primary"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center space-y-4 p-6 pt-20">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`nav-link flex w-fit px-4 py-3 text-center text-lg font-semibold transition-colors ${
                  isActive(item) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
