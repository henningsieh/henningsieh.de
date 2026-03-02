"use client"

import { motion } from "framer-motion"
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { SkillCard } from "@/components/SkillCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ValueCard } from "@/components/ValueCard"
import {
  aboutData,
  basicData,
  ctaSection,
  experiences,
  experienceSection,
  performancePromises,
  skills,
  skillsSection,
  technologies,
  technologiesSection,
  uiStrings,
} from "@/data"

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
              <Avatar className="size-36 border-4 border-primary shadow-2xl md:size-48">
                <AvatarImage src="/avatar_Henning-Sieh_315x315.jpg" alt={basicData.name} className="object-cover" />
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold text-foreground md:mb-8 md:text-5xl lg:mb-10 lg:text-6xl"
            >
              {basicData.name}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mb-4 font-mono text-xl font-semibold uppercase tracking-tighter text-primary md:text-2xl lg:text-3xl"
            >
              {basicData.jobTitle}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto text-lg font-semibold text-muted-foreground md:text-xl lg:text-2xl"
            >
              {basicData.tagline}
            </motion.p>

            {/* Contact Buttons */}
            <motion.div
              variants={fadeInUp}
              className="my-6 flex flex-col items-center justify-center gap-4 sm:flex-row md:my-8 lg:my-12"
            >
              <Button asChild size="lg" className="btn-primary min-w-[200px]">
                <Link href={`mailto:${basicData.email}`}>
                  <MailIcon className="mr-2 h-5 w-5" />
                  {uiStrings.contactButton}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline min-w-[200px]">
                <Link href={`tel:${basicData.mobile}`}>
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  {basicData.mobile}
                </Link>
              </Button>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPinIcon className="h-4 w-4" />
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
            <span className="text-sm font-medium">{uiStrings.scrollIndicator}</span>
            <ChevronDownIcon className="h-6 w-6" />
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
            <h2 className="section-title">{aboutData.title}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-relaxed text-muted-foreground ${index < aboutData.paragraphs.length - 1 ? "mb-6" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="values" className="gradient-bg-section scroll-mt-16 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">{performancePromises.title}</h2>
            <p className="section-subtitle mx-auto">{performancePromises.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {performancePromises.points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValueCard {...point} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-16 bg-background px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">{skillsSection.title}</h2>
            <p className="section-subtitle mx-auto">{skillsSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard {...category} />
              </motion.div>
            ))}
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
            <h2 className="section-title">{technologiesSection.title}</h2>
            <p className="section-subtitle mx-auto">{technologiesSection.subtitle}</p>
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
              <Card className="rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {technologies.infrastructure.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automation">
              <Card className="rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {technologies.automation.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration">
              <Card className="rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {technologies.integration.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="development">
              <Card className="rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {technologies.development.map((tech) => (
                      <Badge key={tech} className="tech-badge px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="methodologies">
              <Card className="rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {technologies.methodologies.map((tech) => (
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
            <h2 className="section-title">{experienceSection.title}</h2>
            <p className="section-subtitle mx-auto">{experienceSection.subtitle}</p>
          </motion.div>

          <Card className="rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
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
                            <p className="text-sm italic text-muted-foreground">
                              {uiStrings.projectLabel}
                              {exp.project}
                            </p>
                          )}

                          {exp.highlights && (
                            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <ArrowRightIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
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
                    {showAllExperience ? uiStrings.showLess : uiStrings.showMore}
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
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">{ctaSection.title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">{ctaSection.description}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="btn-primary">
                <Link href={`mailto:${basicData.email}`}>
                  <MailIcon className="mr-2 h-5 w-5" />
                  {ctaSection.primaryButton}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline">
                <Link href="https://www.linkedin.com/in/henningsieh/" target="_blank">
                  <ExternalLinkIcon className="mr-2 h-5 w-5" />
                  {ctaSection.secondaryButton}
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
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
