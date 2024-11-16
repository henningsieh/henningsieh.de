"use client"

// src/components/Portfolio.tsx:
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react"
import { useEffect, useState } from "react"
import { ModeToggle } from "./ModeToggle"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { experiences, skillsData } from "@/data"
import { SkillCard } from "./SkillCard"

export default function Component() {
  const [showAllExperience, setShowAllExperience] = useState(false)
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="m-0 flex items-center p-0">
              <Avatar className="h-8 w-8 md:h-11 md:w-11">
                <AvatarImage
                  src="/avatar_Henning-Sieh_315x315.jpg"
                  alt="Profile"
                />
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
              <div className="ml-2 pb-1 text-2xl font-bold leading-relaxed text-primary/60 md:text-5xl">
                Henning Sieh
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-start space-x-4">
                {["home", "about", "skills", "experience"].map((item) => (
                  <Button
                    variant={"ghost"}
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`nav-link rounded-md px-3 text-sm font-medium ${
                      activeSection === item
                        ? "bg-primary text-white"
                        : "text-foreground"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Button>
                ))}
                <ModeToggle />
              </div>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X /> : <Menu />}
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-20 sm:px-3">
            {["home", "about", "skills", "experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link block w-full rounded-md px-3 py-2 text-left text-base font-medium text-foreground hover:bg-primary/10"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="gradient-bg flex min-h-screen items-center justify-center px-2 pb-12 pt-20"
      >
        <Card className="w-full max-w-4xl bg-background/80 p-4 shadow-lg shadow-accent/10">
          <CardContent className="flex flex-col items-center p-0 text-center md:p-4">
            <Avatar className="card-hover mb-8 h-48 w-48 border-4 border-accent md:h-64 md:w-64">
              <AvatarImage
                src="/avatar_Henning-Sieh_315x315.jpg"
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback>HS</AvatarFallback>
            </Avatar>
            <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text pb-4 text-4xl font-bold leading-relaxed text-transparent md:text-6xl">
              Henning Sieh
            </h1>
            <p className="mb-8 text-sm font-bold text-foreground sm:text-2xl md:text-3xl">
              Senior IT Consultant & Full-Stack Developer
            </p>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-primary bg-primary/10 font-bold hover:bg-primary/20"
              >
                <Phone className="mr-2 h-4 w-4" /> +49 170 2786754
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-secondary bg-secondary/10 font-bold hover:bg-secondary/20"
              >
                <Mail className="mr-2 h-4 w-4" /> kontakt@henningsieh.de
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex min-h-screen items-center justify-center bg-secondary/5 px-2 pb-12 pt-20"
      >
        <Card className="mx-auto max-w-4xl shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="section-title">Über mich</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-foreground">
              Als Senior IT Consultant und Full-Stack Entwickler bringe ich
              tiefgreifendes technisches Know-how und 20 Jahre praktische
              Erfahrung in der Softwarearchitektur und -entwicklung mit.
              <br />
              <br />
              Mein Fokus liegt auf der Implementierung moderner Webtechnologien
              und der Entwicklung skalierbarer, effizienter Lösungen. Mit meinem
              Hintergrund in Requirements Engineering und Softwarearchitektur
              kann ich komplexe Projekte von der Konzeption bis zur Umsetzung
              erfolgreich begleiten und dabei stets die Balance zwischen
              technischer Exzellenz und geschäftlichen Anforderungen wahren.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="flex min-h-screen items-center justify-center bg-accent/5 px-2 pb-12 pt-20"
      >
        <Card className="mx-auto max-w-4xl shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="section-title">Fähigkeiten</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skillsData.map((category) => (
                <SkillCard key={category.title} {...category} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="flex min-h-screen items-center justify-center bg-secondary/5 px-2 pb-12 pt-20"
      >
        <Card className="w-[896px] shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="section-title">Berufserfahrung</CardTitle>
          </CardHeader>
          <div className="rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm">
            <ScrollArea className="h-[600px] pr-4">
              <div className="pl-48space-y-8 w-full">
                {experiences
                  .slice(0, showAllExperience ? experiences.length : 5)
                  .map((exp, index) => (
                    <div
                      key={index}
                      className="relative border-l-2 border-accent pb-8 pl-8 last:border-l-0"
                    >
                      <div className="absolute left-0 top-0 h-4 w-4 -translate-x-[9px] rounded-full bg-accent" />
                      <h3 className="text-xl font-semibold text-accent">
                        {exp.company}
                      </h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {exp.year}
                      </p>
                      <p className="text-foreground">{exp.role}</p>
                    </div>
                  ))}
              </div>
            </ScrollArea>
            {experiences.length > 5 && (
              <Button
                variant="outline"
                onClick={() => setShowAllExperience(!showAllExperience)}
                className="nav-link mt-8"
              >
                {showAllExperience ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" /> Weniger anzeigen
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" /> Mehr anzeigen
                  </>
                )}
              </Button>
            )}
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-background px-4 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-muted-foreground">
            &copy; 2024 Henning Sieh. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="nav-link">
              <Mail className="mr-2 h-4 w-4" /> Kontakt
            </Button>
            <Button variant="ghost" size="sm" className="nav-link">
              <MapPin className="mr-2 h-4 w-4" /> Impressum
            </Button>
            <ModeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}
