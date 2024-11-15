"use client"

// src/components/Portfolio.tsx:
import { useState, useEffect } from "react"
import {
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  X,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ModeToggle } from "./ModeToggle"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

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
        className="gradient-bg flex min-h-screen items-center justify-center"
      >
        <div className="text-center">
          <Avatar className="card-hover mx-auto mb-8 h-64 w-64 border-4 border-accent">
            <AvatarImage
              src="/avatar_Henning-Sieh_315x315.jpg"
              alt="Profile"
              className="object-cover"
            />
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>
          <h1 className="bg-gradient-to-r from-accent to-primary bg-clip-text pb-4 text-5xl font-bold leading-relaxed text-transparent md:text-7xl">
            Henning Sieh
          </h1>
          <p className="mb-8 text-base font-bold text-white/90 md:text-4xl">
            Senior IT Consultant & Full-Stack Developer
          </p>
          <div className="flex flex-col justify-center gap-2 px-2 sm:flex-row">
            <Button
              variant="ghost"
              size="lg"
              className="border-[1px] border-white bg-white/20 font-bold hover:bg-white/30"
            >
              <Phone className="mr-2 h-4 w-4" /> +49 170 2786754
            </Button>
            <Button
              // variant="default"
              size="lg"
              className="border-white bg-transparent font-bold"
            >
              <Mail className="mr-2 h-4 w-4" /> kontakt@henningsieh.de
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex min-h-screen items-center justify-center bg-secondary/5"
      >
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h2 className="section-title mb-8">Über mich</h2>
          <div className="card-hover rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm">
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
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="flex min-h-screen items-center justify-center bg-accent/5"
      >
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h2 className="section-title mb-8">Fähigkeiten</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Code className="mr-2" /> Programmierung
                  </CardTitle>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
              <div className="card-hover rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center text-xl font-semibold text-destructive">
                  <Code className="mr-2" /> Programmierung
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Next.js",
                    "RESTful APIs",
                    "Postgres",
                    "Drizzle",
                    "Express.js",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-destructive/10 text-destructive transition-colors hover:bg-destructive/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="card-hover rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center text-xl font-semibold text-secondary">
                  <Server className="mr-2" /> DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "CI/CD", "Linux"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-secondary/10 text-secondary transition-colors hover:bg-secondary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="card-hover rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center text-xl font-semibold text-accent">
                  <Database className="mr-2" /> Architektur & Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Microservices",
                    "Serverless",
                    "DDD",
                    "SOLID",
                    "System Design",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-accent/10 text-accent transition-colors hover:bg-accent/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="card-hover rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center text-xl font-semibold text-primary">
                  <GitBranch className="mr-2" /> Methoden & Prozesse
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["IREB", "PRINCE2", "Agile", "ITIL", "TDD"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="flex min-h-screen items-center justify-center bg-secondary/5"
      >
        <div className="w-[896px] px-4 py-20">
          <h2 className="section-title mb-8">Berufserfahrung</h2>
          <div className="card-hover rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm">
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
        </div>
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

const experiences = [
  {
    year: "2023",
    company: "Diverse KMU und Vereine",
    role: "Entwicklung und Betrieb",
  },
  {
    year: "2022",
    company: "LDI Rheinland-Pfalz",
    role: "Init Projekt OZG (Onlinezugangsgesetz)",
  },
  {
    year: "2021",
    company: "Sabbatical",
    role: "Continuing education / self studying",
  },
  {
    year: "2020",
    company: "ITZ-Bund",
    role: "Requirements Engineer / Solution Architect",
  },
  { year: "2019", company: "ING DiBa", role: "Domain Architect" },
  {
    year: "2018",
    company: "Vorwerk Elektrowerke GmbH Co. KG",
    role: "Requirements Engineer (TESU)",
  },
  {
    year: "2017",
    company: "DB Cargo AG - Deutsche Bahn",
    role: "Business Engineer / Solution Architect (IT)",
  },
  {
    year: "2016",
    company: "Adam Opel AG",
    role: "Programmmanagement, Business Analyst, Solution Designer",
  },
  {
    year: "2015",
    company: "Capgemini Holding GmbH",
    role: "Solution Architect IT / Requirements Engineer",
  },
  {
    year: "2012 – 2014",
    company: "TFG Transfracht GmbH",
    role: "Manager E-Business (Interim-Management)",
  },
]
