"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  GitBranch,
  Mail,
  Moon,
  Phone,
  Server,
  Sun,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList } from "./ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

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
    "React",
    "Node.js",
    "Next.js",
    "RESTful APIs",
    "Postgres / SQL",
    "Express.js",
    "HTML5",
    "CSS3",
  ],
  "DevOps & Tools": ["Git", "Docker", "CI/CD", "Linux", "Bash Scripting"],
  "Architektur & Design": [
    "Microservices",
    "Serverless",
    "Domain-Driven Design",
    "SOLID Principles",
    "Design Patterns",
    "System Design",
  ],
  "Methoden & Prozesse": [
    "Agile (Scrum, Kanban)",
    "Test-Driven Development (TDD)",
    "Continuous Integration",
    "Code Reviews",
    "Pair Programming",
  ],
};

const PortfolioOneSheet = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl w-full">
        <div className="mb-8 flex justify-end">
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <Card className="portfolio-card max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="w-32 h-32 border-4 border-primary">
                  <AvatarImage
                    src="/face.png"
                    className="object-cover"
                    alt="Henning Sieh"
                  />
                  <AvatarFallback>HS</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="portfolio-title">Henning Sieh</CardTitle>
              <CardDescription className="portfolio-description">
                Senior IT Consultant & Full-Stack Developer
              </CardDescription>
              <div className="flex justify-center space-x-4 mt-4">
                <Button variant="outline" size="sm" className="portfolio-button">
                  <Phone className="mr-2 h-4 w-4" /> +49 170 2786754
                </Button>
                <Button variant="outline" size="sm" className="portfolio-button">
                  <Mail className="mr-2 h-4 w-4" /> kontakt@henningsieh.de
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="about" className="mt-6">
                <TabsList className="grid w-full grid-cols-4 portfolio-tabs-list">
                  <TabsTrigger value="about" className="portfolio-tab">
                    Über mich
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="portfolio-tab">
                    Fähigkeiten
                  </TabsTrigger>
                  <TabsTrigger value="experience" className="portfolio-tab">
                    Erfahrung
                  </TabsTrigger>
                  <TabsTrigger value="education" className="portfolio-tab">
                    Ausbildung
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-primary">Über mich</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Als erfahrener IT Consultant und Full-Stack Entwickler bringe ich
                        tiefgreifendes technisches Know-how und praktische Erfahrung in der
                        Softwareentwicklung mit. Mein Fokus liegt auf der Implementierung
                        moderner Webtechnologien und der Entwicklung skalierbarer,
                        effizienter Lösungen. Mit meinem Hintergrund in Requirements
                        Engineering und Softwarearchitektur kann ich komplexe Projekte von
                        der Konzeption bis zur Umsetzung erfolgreich begleiten und dabei
                        stets die Balance zwischen technischer Exzellenz und geschäftlichen
                        Anforderungen wahren.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="skills">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-primary">Fähigkeiten</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(skills).map(([category, skillList]) => (
                          <div key={category} className="space-y-2">
                            <h3 className="portfolio-section-title">
                              {category === "Programmierung" && <Code className="mr-2" />}
                              {category === "DevOps & Tools" && <Server className="mr-2" />}
                              {category === "Architektur & Design" && (
                                <Database className="mr-2" />
                              )}
                              {category === "Methoden & Prozesse" && (
                                <GitBranch className="mr-2" />
                              )}
                              {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {skillList.map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="portfolio-skill-badge"
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
                      <CardTitle className="text-primary">Berufserfahrung</CardTitle>
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
                          className="mt-4 portfolio-button"
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
                      <CardTitle className="text-primary">Ausbildung</CardTitle>
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
        </div>
      </div>
    </div>
  );
};

export default PortfolioOneSheet;
