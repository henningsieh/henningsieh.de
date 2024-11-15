"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "./ModeToggle";

export default function Component() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/face.png" alt="Profile" />
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "skills", "experience"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === item
                        ? "text-white bg-primary"
                        : "text-foreground hover:bg-primary/10"
                    } transition-colors`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background">
          <div className="pt-20 pb-3 px-2 space-y-1 sm:px-3">
            {["home", "about", "skills", "experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 w-full text-left"
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
        className="min-h-screen flex items-center justify-center gradient-bg"
      >
        <div className="text-center text-white">
          <Avatar className="w-32 h-32 border-4 border-white mx-auto mb-8">
            <AvatarImage src="/face.png" alt="Profile" className="object-cover" />
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Henning Sieh</h1>
          <p className="text-xl md:text-2xl mb-8">
            Senior IT Consultant & Full-Stack Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white"
            >
              <Phone className="mr-2 h-4 w-4" /> +49 170 2786754
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white"
            >
              <Mail className="mr-2 h-4 w-4" /> kontakt@henningsieh.de
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-secondary/10"
      >
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-secondary">Über mich</h2>
          <p className="text-lg text-foreground leading-relaxed">
            Als Senior IT Consultant und Full-Stack Entwickler bringe ich tiefgreifendes
            technisches Know-how und 20 Jahre praktische Erfahrung in der
            Softwarearchitektur und -entwicklung mit.
            <br />
            <br />
            Mein Fokus liegt auf der Implementierung moderner Webtechnologien und der
            Entwicklung skalierbarer, effizienter Lösungen. Mit meinem Hintergrund in
            Requirements Engineering und Softwarearchitektur kann ich komplexe Projekte von
            der Konzeption bis zur Umsetzung erfolgreich begleiten und dabei stets die
            Balance zwischen technischer Exzellenz und geschäftlichen Anforderungen wahren.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-accent/10"
      >
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-accent">Fähigkeiten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
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
                      className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-secondary">
                  <Server className="mr-2" /> DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "CI/CD", "Linux"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-accent">
                  <Database className="mr-2" /> Architektur & Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Microservices", "Serverless", "DDD", "SOLID", "System Design"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                  <GitBranch className="mr-2" /> Methoden & Prozesse
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["IREB", "PRINCE2", "Agile", "ITIL", "TDD"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
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
        className="min-h-screen flex items-center justify-center bg-secondary/10"
      >
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-secondary">Berufserfahrung</h2>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-8">
              {experiences
                .slice(0, showAllExperience ? experiences.length : 5)
                .map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-secondary last:border-l-0"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-secondary" />
                    <h3 className="text-xl font-semibold text-secondary">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{exp.year}</p>
                    <p className="text-foreground">{exp.role}</p>
                  </div>
                ))}
            </div>
          </ScrollArea>
          {experiences.length > 5 && (
            <Button
              variant="outline"
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="mt-8"
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
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/10 bg-background">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            &copy; 2024 Henning Sieh. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Mail className="mr-2 h-4 w-4" /> Kontakt
            </Button>
            <Button variant="ghost" size="sm">
              <MapPin className="mr-2 h-4 w-4" /> Impressum
            </Button>
            <ModeToggle />
          </div>
        </div>
      </footer>
    </div>
  );
}

const experiences = [
  { year: "2023", company: "Diverse KMU und Vereine", role: "Entwicklung und Betrieb" },
  {
    year: "2022",
    company: "LDI Rheinland-Pfalz",
    role: "Init Projekt OZG (Onlinezugangsgesetz)",
  },
  { year: "2021", company: "Sabbatical", role: "Continuing education / self studying" },
  { year: "2020", company: "ITZ-Bund", role: "Requirements Engineer / Solution Architect" },
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
