"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ArrowUp, CheckCircle2, ChevronDown, ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { basicData, experiences, relevantTechnologies, skillsData } from "@/data"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function PortfolioOneSheet() {
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          // Hysteresis: show at 100px, hide only when back at 50px
          setShowBackToTop((prev) => {
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
    handleScroll() // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional Introduction */}
      <section
        id="home"
        className="gradient-bg-hero relative flex min-h-screen scroll-mt-16 items-center justify-center px-4 py-20"
      >
        <div className="gradient-overlay" />
        <div className="container relative z-10 max-w-6xl">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="text-center">
            {/* Avatar */}
            <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
              <Avatar className="h-40 w-40 border-4 border-primary shadow-2xl md:h-48 md:w-48">
                <AvatarImage src="/avatar_Henning-Sieh_315x315.jpg" alt={basicData.name} className="object-cover" />
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
            </motion.div>

            {/* Name & Title */}
            <motion.h1 variants={fadeInUp} className="mb-4 text-4xl font-bold text-foreground md:text-6xl">
              {basicData.name}
            </motion.h1>

            <motion.p variants={fadeInUp} className="mb-2 text-xl font-semibold text-primary md:text-2xl">
              {basicData.jobTitle}
            </motion.p>

            <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
              {basicData.tagline}
            </motion.p>

            {/* Contact Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="btn-primary min-w-[200px]">
                <Link href={`mailto:${basicData.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Kontakt aufnehmen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline min-w-[200px]">
                <Link href={`tel:${basicData.mobile}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {basicData.mobile}
                </Link>
              </Button>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{basicData.location}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
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
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 bg-background px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">Über mich</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Als Senior IT Consultant und Solution Architect bringe ich über 20 Jahre branchenübergreifende Erfahrung
              in der Konzeption und Umsetzung komplexer IT-Infrastrukturlösungen mit. Mein Schwerpunkt liegt auf
              Requirements Engineering, Systemintegration und der Automatisierung von Enterprise-Prozessen.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Ich agiere als Schnittstelle zwischen Management, Business-Stakeholdern und Entwicklungsteams. Dabei
              kombiniere ich fundiertes technisches Know-how in API-Management, Middleware-Integration und
              Cloud-Technologien mit meiner Fähigkeit, Kundenanforderungen präzise zu analysieren und in
              maßgeschneiderte Lösungskonzepte zu übersetzen.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mit Erfahrung aus Projekten bei Netzbetreibern, Finanzdienstleistern, der öffentlichen Verwaltung und der
              Industrie verstehe ich die spezifischen Herausforderungen unterschiedlicher Branchen. Mein Ziel ist es,
              komplexe IT-Projekte von der ersten Idee bis zur erfolgreichen Umsetzung zu begleiten und dabei stets die
              Balance zwischen technischer Exzellenz und geschäftlichen Anforderungen zu wahren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="gradient-bg-section scroll-mt-16 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">Kernkompetenzen</h2>
            <p className="section-subtitle mx-auto">
              Fundierte Expertise an der Schnittstelle zwischen Business und Technologie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="professional-card h-full">
                    <CardHeader>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-accent/10 p-2">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.skills.map((skill) => (
                          <li key={skill} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm text-foreground">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="scroll-mt-16 bg-background px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">Technologie-Stack</h2>
            <p className="section-subtitle mx-auto">Relevante Technologien und Methoden für moderne IT-Projekte</p>
          </motion.div>

          <Tabs defaultValue="infrastructure" className="w-full">
            <TabsList className="grid h-fit w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="methodologies">Methodologies</TabsTrigger>
            </TabsList>

            <TabsContent value="infrastructure">
              <Card className="professional-card">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {relevantTechnologies.infrastructure.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automation">
              <Card className="professional-card">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {relevantTechnologies.automation.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration">
              <Card className="professional-card">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {relevantTechnologies.integration.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="development">
              <Card className="professional-card">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {relevantTechnologies.development.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="methodologies">
              <Card className="professional-card">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {relevantTechnologies.methodologies.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="gradient-bg-section scroll-mt-16 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">Berufserfahrung</h2>
            <p className="section-subtitle mx-auto">20+ Jahre Erfahrung in anspruchsvollen IT-Projekten</p>
          </motion.div>

          <Card className="professional-card">
            <CardContent className="p-6">
              <ScrollArea className="h-[600px] pr-4">
                <div className={`relative ${showAllExperience ? "-m-4 rounded-lg bg-muted/20 p-4" : ""}`}>
                  <div className="timeline-line" />
                  <div className="space-y-8 pl-8">
                    {experiences.slice(0, showAllExperience ? experiences.length : 6).map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="relative"
                      >
                        <div className="timeline-dot absolute -left-1.5 top-[18px] z-50 -translate-x-[22.5px]" />

                        <div className="space-y-2">
                          <div className="flex flex-col gap-2 pr-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                            <Badge className="w-fit border-primary bg-primary/20 px-3 py-2 text-xs text-primary hover:text-primary-foreground">
                              {exp.year}
                            </Badge>
                          </div>

                          <p className="font-medium text-primary">{exp.role}</p>

                          {exp.project && (
                            <p className="text-sm italic text-muted-foreground">Projekt: {exp.project}</p>
                          )}

                          {exp.highlights && (
                            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollArea>

              {experiences.length > 6 && (
                <div className="mt-6 text-center">
                  <Button variant="outline" onClick={() => setShowAllExperience(!showAllExperience)}>
                    {showAllExperience ? "Weniger anzeigen" : "Mehr Erfahrung anzeigen"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Bereit für den nächsten Schritt?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Lassen Sie uns gemeinsam besprechen, wie meine Expertise Ihr Unternehmen bei der Entwicklung und
              Integration komplexer IT-Infrastrukturlösungen unterstützen kann.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="btn-primary">
                <Link href={`mailto:${basicData.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  E-Mail senden
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline">
                <Link href="https://www.linkedin.com/in/henningsieh/" target="_blank">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  LinkedIn Profil
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  )
}
