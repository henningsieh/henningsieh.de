## Plan: Skills-Portfolio auf Job-Offer ausrichten

Die Skills-Sektion wird so umgebaut, dass sie fuer Recruiter und Hiring Manager sofort als Frontend-/Next.js-fit lesbar ist, ohne die Consultant-Positionierung zu verlieren. Der Fokus liegt auf Reordering, klarerem Wording und einer visuellen Priorisierung ueber `primary`/`accent`/`secondary` entsprechend der neuen Wichtigkeit. Inhalte bleiben weitgehend erhalten; es erfolgt nur eine moderate Bereinigung von weniger relevanten Bullets.

**Steps**

1. Baseline erfassen und Zielreihenfolge festlegen
   Abgleich der aktuellen `skillsSection`-Texte und `skills`-Reihenfolge in `/home/henning/_dev/henningsieh.de/src/data/index.ts` mit den Muss-Anforderungen aus `/home/henning/_dev/henningsieh.de/src/data/project.txt` (Next.js server-first, TypeScript, Figma-Umsetzung, Performance, GraphQL/WebSocket, Auth.js, Testing, Vercel).
2. Neue Prioritaetsreihenfolge fuer Skill-Gruppen definieren
   Reihenfolge auf Frontend-Job-Fit optimieren: zuerst Entwicklungsfaehigkeit und Delivery, danach Consulting-/Architektur-Mehrwert, zuletzt Foundations. Vorgeschlagene Reihenfolge:
   1. Frontend & Full-Stack Development
   2. Modern Web Stack & APIs
   3. UI Engineering & Performance
   4. Requirements Engineering
   5. Solution Architecture
   6. IT Consulting & Project Management
   7. Methodologies & Frameworks
   8. IT Infrastructure & Operations
3. Headline und Subtitle fuer `skillsSection` scharfziehen
   Deutsch-first, keyword-stark, HR-tauglich. Empfehlung:
   Titel: `Fachliche Expertise`
   Subtitle: `Full-Stack Web-Entwicklung mit Next.js, TypeScript und Performance-Optimierung - von der Anforderung bis zum produktiven Einsatz`.
4. Wording pro Skill-Gruppe ueberarbeiten (moderate Kuertung)
   Bullets auf Klarheit, ATS-Relevanz und Rollennutzen trimmen:
   - generische Formulierungen konkretisieren (z. B. Next.js App Router/Server Components)
   - schwache oder redundante Begriffe reduzieren
   - ITIL-lastige Punkte in der Consulting-Gruppe moderat kuerzen, damit der Frontend-Fit nicht verwaessert
   - GraphQL nicht als `Beginner` framen, sondern neutral-kompetent formulieren
   - Vercel sichtbar benennen (wenn ohne neue Gruppe/Bloat integrierbar)
     _depends on 2,3_
5. Interne Reihenfolge innerhalb einzelner Gruppen optimieren
   Job-kritische Punkte innerhalb der Gruppe nach oben: Performance/Figma/Testing im oberen Bereich, danach ergaenzende Skills.
   _parallel mit 4_
6. Farb-Hierarchie an neue Priorisierung koppeln
   In `skills` die `color`-Werte neu zuweisen, ohne Komponentenlogik zu aendern:
   - `primary`: Top-Prioritaet (Kernkompetenzen fuer Rolle)
   - `accent`: wichtige Enabler
   - `secondary`: solide Foundations
     Zielverteilung 3-3-2 beibehalten fuer visuelle Balance.
     _depends on 2_
7. Rendering-Impact validieren
   Sicherstellen, dass die geaenderte Reihenfolge und Farbzuordnung in `/home/henning/_dev/henningsieh.de/src/components/Portfolio.tsx` und `/home/henning/_dev/henningsieh.de/src/components/SkillCard.tsx` ohne weitere Codeanpassung korrekt dargestellt wird.
   _depends on 4,5,6_
8. Finaler Content-Review gegen Job-Offer
   Endabgleich auf Intuition, Struktur, Priorisierung, HR-Lesbarkeit und Konsistenz mit den Anforderungen aus `project.txt`. Dokumentation der bewusst ausgeschlossenen Aenderungen (keine neuen Skill-Gruppen, keine starke inhaltliche Expansion).
   _depends on 7_

**Relevant files**

- `/home/henning/_dev/henningsieh.de/src/data/index.ts` - zentrale Anpassung fuer `skillsSection` und `skills` (Reihenfolge, Wording, Farben).
- `/home/henning/_dev/henningsieh.de/src/types/index.ts` - Typkonformitaet fuer `SectionData` und `Skill` pruefen (keine Typaenderung erwartet).
- `/home/henning/_dev/henningsieh.de/src/components/Portfolio.tsx` - bestaetigen, dass Reihenfolge/Farben data-driven uebernommen werden.
- `/home/henning/_dev/henningsieh.de/src/components/SkillCard.tsx` - bestaetigen, wie `color` auf Icon/Badges gemappt wird.
- `/home/henning/_dev/henningsieh.de/src/app/globals.css` - Verifikation der Farbtoken (`--primary`, `--accent`, `--secondary`) und visuelle Hierarchie.
- `/home/henning/_dev/henningsieh.de/src/data/project.txt` - Referenz fuer Priorisierung und Wording-Fit zur Ausschreibung.

**Verification**

1. Type check/lint laufen lassen (`npm run lint` oder vorhandener Check), um sicherzustellen, dass nur Content-Anpassungen ohne Typfehler erfolgt sind.
2. Manuelle Sichtpruefung der Skills-Sektion im Browser (Desktop + Mobile): Reihenfolge, Scanbarkeit, Farb-Hierarchie, Lesefluss.
3. Inhaltlicher Match-Check gegen `project.txt`: jede Muss-Anforderung mindestens einmal klar sichtbar in den ersten Skill-Gruppen.
4. Konsistenzcheck: keine widerspruechlichen Levels (z. B. `Beginner`) bei jobkritischen Technologien.

**Decisions**

- Beschlossen: `Deutsch-first mit gezielten englischen Keywords`.
- Beschlossen: `Reihenfolge + Rewording + moderate Kuertung`.
- In Scope: Reordering, Gruppentitel-/Subtitle-Wording, Bullet-Optimierung, Farbpriorisierung.
- Out of Scope: neue Sektionen, groessere Content-Erweiterung, Komponenten-Refactor, Design-System-Umbau.

**Further Considerations**

1. Soll `Auth.js` explizit in den oberen 3 Gruppen genannt werden (empfohlen), oder reicht die indirekte Abdeckung im Tech-Stack?
2. Soll `GraphQL` als allgemeine Kompetenz neutral formuliert werden, ohne Senioritaetsmarker (empfohlen), um keine Unterpositionierung zu erzeugen?
3. Soll `Vercel` direkt in einem Top-3 Skill-Bullet auftauchen (empfohlen fuer Offer-Fit), sofern kein neuer Skill-Block hinzugefuegt wird?
