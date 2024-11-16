"use client"

// src/app/layout.tsx:

import { ThemeProvider } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"

import { Mail, MapPinHouse, Menu, X } from "lucide-react"
import localFont from "next/font/local"
import Link from "next/link"
import { useEffect, useState } from "react"
import "./globals.css"
import { ModeToggle } from "@/components/ModeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const navItems = ["home", "about", "skills", "experience"]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 60) {
          current = section.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen scroll-smooth">
            {/* Navigation */}
            <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <Link href="/" className="m-0 flex items-center p-0">
                    <Avatar className="h-7 w-7 border-2 border-accent md:h-10 md:w-10">
                      <AvatarImage
                        src="/avatar_Henning-Sieh_315x315.jpg"
                        alt="Profile"
                      />
                      <AvatarFallback>HS</AvatarFallback>
                    </Avatar>
                    <div className="ml-2 pb-2 text-2xl font-bold leading-relaxed text-muted-foreground md:text-5xl">
                      Henning Sieh
                    </div>
                  </Link>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-start space-x-4">
                      {navItems.map((item) => (
                        <Button
                          asChild
                          key={item}
                          variant={"ghost"}
                          className={`nav-link rounded-md px-3 text-sm font-semibold ${
                            activeSection === item
                              ? "bg-primary text-white"
                              : "text-foreground"
                          }`}
                        >
                          <Link href={`/#${item}`}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </Link>
                        </Button>
                      ))}
                      <ModeToggle />
                    </div>
                  </div>
                  <div className="flex gap-2 md:hidden">
                    <ModeToggle />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      {menuOpen ? <X /> : <Menu />}
                    </Button>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-20 sm:px-3">
                  {navItems.map((item) => (
                    <Button
                      asChild
                      key={item}
                      variant={"ghost"}
                      onClick={() => setMenuOpen(false)}
                      className="nav-link bg-bg-muted block w-full px-3 py-2 text-left text-base font-semibold text-muted-foreground hover:bg-accent"
                    >
                      <Link href={`#${item}`}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {children}

            {/* Footer */}
            <footer className="border-t border-primary/10 bg-background px-4 py-8">
              <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="text-sm text-muted-foreground">
                  &copy; 2024 Henning Sieh. All rights reserved.
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="nav-link flex items-center gap-1 text-muted-foreground"
                  >
                    <Link href="/#home">
                      <Mail className="mr-2 h-4 w-4" /> Kontakt
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="link"
                    className="nav-link flex items-center gap-1 text-muted-foreground"
                  >
                    <Link href="/impressum">
                      <MapPinHouse className="h-6 w-6" /> Impressum
                    </Link>
                  </Button>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
