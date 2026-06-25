import { ExternalLinkIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

import { FadeIn } from "@/components/motion/FadeIn"
import { Stagger } from "@/components/motion/Stagger"
import { ScrollIndicator } from "@/components/ScrollIndicator"
import { SkillCard } from "@/components/SkillCard"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

const ExperienceSection = dynamic(() => import("@/components/ExperienceSection").then((mod) => mod.ExperienceSection))
const BackToTopButton = dynamic(() => import("@/components/BackToTopButton").then((mod) => mod.BackToTopButton))

export default function PortfolioOneSheet() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional Introduction */}
      <section
        id="home"
        className="gradient-bg-hero relative flex min-h-screen scroll-mt-16 items-center justify-center px-4 py-20"
      >
        <div className="gradient-overlay" />
        <div className="relative z-10 container max-w-6xl">
          <Stagger>
            <div className="text-center">
              {/* Avatar */}
              <FadeIn>
                <div className="mb-8 flex justify-center">
                  <Avatar className="border-primary size-36 border-4 shadow-2xl md:size-48">
                    <img
                      className="rounded-full object-cover"
                      src="/avatar-192.jpg"
                      srcSet="/avatar-144.jpg 144w, /avatar-192.jpg 192w"
                      sizes="(max-width: 768px) 144px, 192px"
                      width={192}
                      height={192}
                      alt={`${basicData.name} – Senior IT Consultant und Solution Architect`}
                      fetchPriority="high"
                      decoding="async"
                      draggable="false"
                    />
                    <AvatarFallback>HS</AvatarFallback>
                  </Avatar>
                </div>
              </FadeIn>

              {/* Name & Title */}
              <FadeIn>
                <h1 className="text-foreground mb-6 text-4xl font-bold md:mb-8 md:text-5xl lg:mb-10 lg:text-6xl">
                  {basicData.name}
                </h1>
              </FadeIn>

              <FadeIn>
                <p className="text-primary mb-4 font-mono text-xl font-semibold tracking-tighter uppercase md:text-2xl lg:text-3xl">
                  {basicData.jobTitle}
                </p>
              </FadeIn>

              <FadeIn>
                <p className="text-muted-foreground mx-auto text-lg font-semibold md:text-xl lg:text-2xl">
                  {basicData.tagline}
                </p>
              </FadeIn>

              {/* Contact Buttons */}
              <FadeIn>
                <div className="my-6 flex flex-col items-center justify-center gap-4 sm:flex-row md:my-8 lg:my-12">
                  <Button asChild size="lg" className="btn-primary min-w-50">
                    <Link href={`mailto:${basicData.email}`}>
                      <MailIcon className="mr-2 h-5 w-5" />
                      {uiStrings.contactButton}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="btn-outline min-w-50">
                    <Link href={`tel:${basicData.mobile}`}>
                      <PhoneIcon className="mr-2 h-5 w-5" />
                      {basicData.mobile}
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              {/* Location */}
              <FadeIn>
                <div className="text-muted-foreground flex items-center justify-center gap-2">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{basicData.location}</span>
                </div>
              </FadeIn>
            </div>
          </Stagger>
        </div>

        <ScrollIndicator label={uiStrings.scrollIndicator} />
      </section>

      {/* About Section */}
      <section id="about" className="bg-background scroll-mt-16 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title">{aboutData.title}</h2>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-muted-foreground text-lg leading-relaxed ${index < aboutData.paragraphs.length - 1 ? "mb-6" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="values" className="gradient-bg-section scroll-mt-16 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title">{performancePromises.title}</h2>
              <p className="section-subtitle mx-auto">{performancePromises.subtitle}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {performancePromises.points.map((point) => (
              <FadeIn key={point.title}>
                <ValueCard {...point} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-background scroll-mt-16 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title">{skillsSection.title}</h2>
              <p className="section-subtitle mx-auto">{skillsSection.subtitle}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category) => (
              <FadeIn key={category.title}>
                <SkillCard {...category} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="bg-background scroll-mt-16 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title">{technologiesSection.title}</h2>
              <p className="section-subtitle mx-auto">{technologiesSection.subtitle}</p>
            </div>
          </FadeIn>

          <Tabs defaultValue="infrastructure" className="w-full">
            <TabsList className="grid h-fit w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="methodologies">Methodologies</TabsTrigger>
            </TabsList>

            <TabsContent value="infrastructure">
              <Card className="border-border bg-card rounded-lg border shadow-xs transition-shadow duration-300 hover:shadow-md">
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
              <Card className="border-border bg-card rounded-lg border shadow-xs transition-shadow duration-300 hover:shadow-md">
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
              <Card className="border-border bg-card rounded-lg border shadow-xs transition-shadow duration-300 hover:shadow-md">
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
              <Card className="border-border bg-card rounded-lg border shadow-xs transition-shadow duration-300 hover:shadow-md">
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
              <Card className="border-border bg-card rounded-lg border shadow-xs transition-shadow duration-300 hover:shadow-md">
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
      <ExperienceSection experiences={experiences} section={experienceSection} uiStrings={uiStrings} />

      {/* CTA Section */}
      <section className="bg-primary/5 px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl">{ctaSection.title}</h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">{ctaSection.description}</p>
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
          </FadeIn>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  )
}
