"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  GitBranch,
  Mail,
  MapPinHouse,
  Phone,
  Server,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "./ModeToggle";

const experiences = [
  { year: "2023", company: "Diverse KMU und Vereine", role: "Entwicklung und Betrieb" },
  {
    year: "2022",
    company: "LDI Rheinland-Pfalz",
    role: "Init Projekt OZG (Onlinezugangsgesetz)",
  },
  { year: "2021", company: "Sabbatical", role: "Continuing education / self studying" },
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
];

const skills = {
  Programmierung: [
    "TypeScript (JavaScript)",
    "Next.js (React)",
    "RESTful APIs",
    "Postgres / SQL",
    "Drizzle / Prisma ORM",
    "Express.js",
  ],
  "DevOps & Tools": ["Git", "Docker", "CI/CD", "Linux (Ubuntu)"],
  "Architektur & Design": [
    "Microservices",
    "Serverless",
    "Domain-Driven Design",
    "SOLID Principles",
    "Design Patterns",
    "System Design",
  ],
  "Methoden & Prozesse": [
    "Requirements Engineering (IREB)",
    "PM (PRINCE2)",
    "Agile (Scrum, Kanban)",
    "IT-Service-Management (ITIL)",
    "Test-Driven Development (TDD)",
    "Code Reviews",
  ],
};

const PortfolioOneSheet = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
      <Card className=" mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-28 h-28 sm:w-32 sm:h-32 border-4 border-primary/60">
              <AvatarImage src="/face.png" className="object-cover" alt="Henning Sieh" />
              <AvatarFallback>HS</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="">Henning Sieh</CardTitle>
          <CardDescription className="text-xl mt-2 text-muted-foreground">
            Senior IT Consultant & Full-Stack Developer
          </CardDescription>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            <Button variant="outline" size="sm" className="text-primary border-primary">
              <Phone className="mr-2 h-4 w-4" /> +49 170 2786754
            </Button>
            <Button variant="ghost" size="sm" className="">
              <Mail className="mr-2 h-4 w-4" /> kontakt@henningsieh.de
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="about" className="mt-6">
            <TabsList className="h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="about">Über mich</TabsTrigger>
              <TabsTrigger value="skills">Fähigkeiten</TabsTrigger>
              <TabsTrigger value="experience">Erfahrung</TabsTrigger>
              <TabsTrigger value="education">Ausbildung</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-lg">Über mich</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Als Senior IT Consultant und Full-Stack Entwickler bringe ich
                    tiefgreifendes technisches Know-how und 20 Jahre praktische Erfahrung in
                    der Softwarearchitektur und -entwicklung mit. <br />
                    <br />
                    Mein Fokus liegt auf der Implementierung moderner Webtechnologien und
                    der Entwicklung skalierbarer, effizienter Lösungen. Mit meinem
                    Hintergrund in Requirements Engineering und Softwarearchitektur kann ich
                    komplexe Projekte von der Konzeption bis zur Umsetzung erfolgreich
                    begleiten und dabei stets die Balance zwischen technischer Exzellenz und
                    geschäftlichen Anforderungen wahren.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="skills">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-lg">Fähigkeiten</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category} className="space-y-2">
                        <h4 className="text-sm font-semibold text-primary flex items-center">
                          {category === "Programmierung" && <Code className="mr-2" />}
                          {category === "DevOps & Tools" && <Server className="mr-2" />}
                          {category === "Architektur & Design" && (
                            <Database className="mr-2" />
                          )}
                          {category === "Methoden & Prozesse" && (
                            <GitBranch className="mr-2" />
                          )}
                          {category}
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-orange-300 text-primary dark:bg-orange-600/40 dark:text-orange-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-lg">Berufserfahrung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    {experiences
                      .slice(0, showAllExperience ? experiences.length : 5)
                      .map((exp, index) => (
                        <div
                          key={index}
                          className="mb-4 pb-4 border-b border-border last:border-b-0"
                        >
                          <h3 className="text-lg font-semibold text-primary">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-muted-foreground">{exp.year}</p>
                          <p className="text-muted-foreground">{exp.role}</p>
                        </div>
                      ))}
                  </ScrollArea>
                  {experiences.length > 5 && (
                    <Button
                      variant="outline"
                      onClick={() => setShowAllExperience(!showAllExperience)}
                      className="mt-4 text-primary border-primary"
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
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-lg">Ausbildung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <h3 className="font-semibold">B. Sc. Technische Informatik</h3>
                      <p>Fachhochschule Kiel (2001 – 2006)</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">IT-Systemelektroniker</h3>
                      <p>Deutsche Telekom AG (1998 – 2001)</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Abitur</h3>
                      <p>Gymnasium Altenholz (1988 – 1997)</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="w-full pt-4 flex flex-col sm:flex-row sm:items-center justify-between ">
        <div className="text-muted-foreground text-sm">
          &copy; 2014 Henning Sieh. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2 py-1">
              <Button variant="link" size="sm" className="text-primary border-primary">
                <Mail className="mr-0 h-4 w-4" /> Kontakt
              </Button>
              <Button variant="link" size="sm" className="text-primary border-primary">
                <MapPinHouse className="mr-0 h-4 w-4" /> Impressum
              </Button>
            </div>
            <div className="flex items-center py-1">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOneSheet;
