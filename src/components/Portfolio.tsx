"use client"

import { basicData, relevantTechnologies, experiences, skillsData } from "@/data"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, ExternalLink, Mail, MapPin, Phone } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useState } from "react"

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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional Introduction */}
      <section id="home" className="gradient-bg-hero relative min-h-screen flex items-center justify-center px-4 py-20 scroll-mt-16">
        <div className="gradient-overlay" />
        <div className="container max-w-6xl relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="text-center">
            {/* Avatar */}
            <motion.div variants={fadeInUp} className="flex justify-center mb-8">
              <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-primary shadow-2xl">
                <AvatarImage src="/avatar_Henning-Sieh_315x315.jpg" alt={basicData.name} className="object-cover" />
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
            </motion.div>

            {/* Name & Title */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {basicData.name}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-primary font-semibold mb-2">
              {basicData.jobTitle}
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {basicData.tagline}
            </motion.p>

            {/* Contact Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
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
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-background scroll-mt-16">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Als Senior IT Consultant und Solution Architect bringe ich über 20 Jahre branchenübergreifende Erfahrung 
              in der Konzeption und Umsetzung komplexer IT-Infrastrukturlösungen mit. Mein Schwerpunkt liegt auf 
              Requirements Engineering, Systemintegration und der Automatisierung von Enterprise-Prozessen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ich agiere als Schnittstelle zwischen Management, Business-Stakeholdern und Entwicklungsteams. 
              Dabei kombiniere ich fundiertes technisches Know-how in API-Management, Middleware-Integration und 
              Cloud-Technologien mit meiner Fähigkeit, Kundenanforderungen präzise zu analysieren und in 
              maßgeschneiderte Lösungskonzepte zu übersetzen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mit Erfahrung aus Projekten bei Netzbetreibern, Finanzdienstleistern, der öffentlichen Verwaltung 
              und der Industrie verstehe ich die spezifischen Herausforderungen unterschiedlicher Branchen. 
              Mein Ziel ist es, komplexe IT-Projekte von der ersten Idee bis zur erfolgreichen Umsetzung zu begleiten 
              und dabei stets die Balance zwischen technischer Exzellenz und geschäftlichen Anforderungen zu wahren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="gradient-bg-section py-20 px-4 scroll-mt-16">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Kernkompetenzen</h2>
            <p className="section-subtitle mx-auto">
              Fundierte Expertise an der Schnittstelle zwischen Business und Technologie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.skills.map((skill) => (
                          <li key={skill} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
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
      <section id="technologies" className="py-20 px-4 bg-background scroll-mt-16">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Technologie-Stack</h2>
            <p className="section-subtitle mx-auto">Relevante Technologien und Methoden für moderne IT-Projekte</p>
          </motion.div>

          <Tabs defaultValue="infrastructure" className="w-full">
            <TabsList className="h-fit grid w-full grid-cols-2 lg:grid-cols-5">
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
                      <Badge key={tech} className="tech-badge text-sm py-2 px-4">
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
                      <Badge key={tech} className="tech-badge text-sm py-2 px-4">
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
                      <Badge key={tech} className="tech-badge text-sm py-2 px-4">
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
                      <Badge key={tech} className="tech-badge text-sm py-2 px-4">
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
                      <Badge key={tech} className="tech-badge text-sm py-2 px-4">
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
      <section id="experience" className="gradient-bg-section py-20 px-4 scroll-mt-16">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Berufserfahrung</h2>
            <p className="section-subtitle mx-auto">20+ Jahre Erfahrung in anspruchsvollen IT-Projekten</p>
          </motion.div>

          <Card className="professional-card">
            <CardContent className="p-6">
              <ScrollArea className="h-[600px] pr-4">
                <div className={`relative ${showAllExperience ? 'bg-muted/20 rounded-lg p-4 -m-4' : ''}`}>
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
                        <div className="timeline-dot absolute left-0 top-2 -translate-x-[21px]" />

                        <div className="space-y-2">
                          <div className="pt-2 pr-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                            <Badge className="w-fit text-xs bg-primary/20 border-primary hover:text-primary-foreground text-primary px-3 py-2">
                              {exp.year}
                            </Badge>
                          </div>

                          <p className="text-primary font-medium">{exp.role}</p>

                          {exp.project && (
                            <p className="text-sm text-muted-foreground italic">Projekt: {exp.project}</p>
                          )}

                          {exp.highlights && (
                            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-primary/5">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Bereit für den nächsten Schritt?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam besprechen, wie meine Expertise Ihr Unternehmen bei der Entwicklung und Integration
              komplexer IT-Infrastrukturlösungen unterstützen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary text-secondary-foreground">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-lg">{basicData.name}</p>
              <p className="text-sm text-secondary-foreground/80">{basicData.jobTitle}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <Link href={`mailto:${basicData.email}`} className="nav-link hover:text-accent">
                {basicData.email}
              </Link>
              <Link href={`tel:${basicData.mobile}`} className="nav-link hover:text-accent">
                {basicData.mobile}
              </Link>
            </div>

            <div className="flex gap-4">
              <Button asChild size="icon" variant="ghost" className="hover:bg-accent/20">
                <Link
                  href="https://www.linkedin.com/in/henningsieh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image src="/LinkedIn_icon.original.svg" width={20} height={20} alt="LinkedIn" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="ghost" className="hover:bg-accent/20">
                <Link
                  href="https://bsky.app/profile/henningsieh.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bluesky"
                >
                  <Image src="/Bluesky-Logo.original.svg" width={20} height={20} alt="Bluesky" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/70">
            <p>
              © {new Date().getFullYear()} {basicData.name}. Alle Rechte vorbehalten.
            </p>
            <Link href="/impressum" className="nav-link hover:text-accent inline-block mt-2">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
