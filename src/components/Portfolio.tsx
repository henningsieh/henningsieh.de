"use client"

// src/components/Portfolio.tsx:
import { SkillCard } from "./SkillCard"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

import { basicData, experiences, skillsData } from "@/data"
import { ChevronDown, ChevronUp, Mail, Phone } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { useState } from "react"

export default function Component() {
  const [showAllExperience, setShowAllExperience] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="gradient-bg flex min-h-screen items-center justify-center px-2 pb-12 pt-20">
        <Card className="w-full max-w-4xl bg-background/80 p-4 shadow-lg shadow-accent/10">
          <CardContent className="flex flex-col items-center p-0 text-center md:p-4">
            <Avatar className="card-hover mb-8 h-48 w-48 border-4 border-accent md:h-64 md:w-64">
              <AvatarImage src="/avatar_Henning-Sieh_315x315.jpg" alt="Profile" className="object-cover" />
              <AvatarFallback>HS</AvatarFallback>
            </Avatar>
            <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text pb-4 text-4xl font-bold leading-relaxed text-transparent md:text-6xl">
              {basicData.name}
            </h1>
            <p className="mb-8 text-sm font-bold text-foreground sm:text-2xl md:text-3xl">{basicData.jobTitle}</p>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-primary bg-primary/10 font-bold hover:bg-primary/30 hover:text-foreground"
              >
                <Link href="tel:+491702786754">
                  <Phone className="mr-2 h-4 w-4" /> {basicData.mobile}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-accent bg-accent/10 font-bold hover:bg-accent/30 hover:text-foreground"
              >
                <Link
                  className="flex items-center gap-2"
                  href={`mailto:${basicData.email}?subject=Kontaktanfrage Website`}
                >
                  <Mail /> {basicData.email}
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex justify-center space-x-4">
              <Button asChild size="icon" variant="outline" className="bg-transparent hover:bg-accent/70">
                <Link href="https://www.linkedin.com/in/henningsieh/" target="_blank" rel="noopener noreferrer">
                  <Image src="/LinkedIn_icon.original.svg" width={20} height={20} className="h-5 w-5" alt={""} />
                  <span className="sr-only">LinkedIn Profile</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/70">
                <Link href="https://bsky.app/profile/henningsieh.de" target="_blank" rel="noopener noreferrer">
                  <Image src="/Bluesky-Logo.original.svg" width={20} height={20} className="h-5 w-5" alt={""} />
                  <span className="sr-only">BlueSky Profile</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section id="about" className="flex min-h-screen items-center justify-center bg-secondary/5 px-2 pb-12 pt-20">
        <Card className="mx-auto max-w-4xl shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="section-title">Über mich</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-foreground">
              Als Senior IT Consultant und Full-Stack Entwickler bringe ich tiefgreifendes technisches Know-how und 20
              Jahre praktische Erfahrung in der Softwarearchitektur und -entwicklung mit.
              <br />
              <br />
              Mein Fokus liegt auf der Implementierung moderner Webtechnologien und der Entwicklung skalierbarer,
              effizienter Lösungen. Mit meinem Hintergrund in Requirements Engineering und Softwarearchitektur kann ich
              komplexe Projekte von der Konzeption bis zur Umsetzung erfolgreich begleiten und dabei stets die Balance
              zwischen technischer Exzellenz und geschäftlichen Anforderungen wahren.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section id="skills" className="flex min-h-screen items-center justify-center bg-primary/10 px-2 pb-12 pt-20">
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
                {experiences.slice(0, showAllExperience ? experiences.length : 5).map((exp, index) => (
                  <div key={index} className="relative border-l-2 border-accent pb-8 pl-8 last:border-l-0">
                    <div className="absolute left-0 top-0 h-4 w-4 -translate-x-[9px] rounded-full bg-accent" />
                    <h3 className="text-xl font-semibold text-accent">{exp.company}</h3>
                    <p className="mb-2 text-sm text-muted-foreground">{exp.year}</p>
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
    </>
  )
}
