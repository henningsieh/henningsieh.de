# Prompt: Refactor Next.js Portfolio (Server/Client Split + Centralized Framer Motion)

## Goal

Refactor a Next.js App Router one-page portfolio into a **hybrid architecture**:

* Server Components for static rendering and SEO-critical content
* Client Components only where interactivity is required
* Keep `framer-motion` but **centralize and reuse motion logic**
* Reduce hydration overhead and unnecessary JS execution

---

## Hard Constraints

* Keep `framer-motion` (`motion`) in the project
* Do NOT spread motion variants across the app
* Avoid per-component duplication of animation logic
* Do NOT convert everything to `"use client"`
* Maintain current UI/UX behavior

---

## Target Architecture

### 1. Server Components (default)

Use Server Components for:

* Page structure (sections, layout)
* Static text content
* Data mapping (skills, experiences, technologies)
* Non-interactive UI composition

Rules:

* No `useState`, `useEffect`
* No `framer-motion`
* No scroll listeners
* No event handlers

---

### 2. Client Components (isolated islands only)

Only use `"use client"` for:

* Scroll-based UI state (e.g. back-to-top button)
* Toggle interactions (e.g. show more/less)
* Smooth scrolling interactions
* Animation wrappers (if required)

---

## 3. Centralized Framer Motion Strategy (MANDATORY)

Create a single shared motion module:

### `/lib/motion.ts`

```ts
export const motionPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },

  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
}
```

---

## 4. Central Motion Wrapper Components

Create reusable wrappers instead of repeating `motion.div`.

### `/components/motion/FadeIn.tsx`

```tsx
"use client"

import { motion } from "framer-motion"
import { motionPresets } from "@/lib/motion"

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...motionPresets.fadeInUp}>
      {children}
    </motion.div>
  )
}
```

---

### `/components/motion/Stagger.tsx`

```tsx
"use client"

import { motion } from "framer-motion"
import { motionPresets } from "@/lib/motion"

export function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...motionPresets.staggerContainer}>
      {children}
    </motion.div>
  )
}
```

---

## 5. Usage Rules

Replace all inline motion usage:

### ❌ DO NOT:

```tsx
<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />
```

### ✅ DO:

```tsx
<FadeIn>
  <Section />
</FadeIn>
```

or

```tsx
<Stagger>
  <Items />
</Stagger>
```

---

## 6. Client Component Isolation Pattern

Move ALL stateful logic into small components:

### Example responsibilities:

* `BackToTopButton.tsx` (client only)
* `ExperienceToggle.tsx` (client only)
* `ScrollHandler.tsx` (optional abstraction)

Server page imports them like:

```tsx
<BackToTopButton />
<ExperienceToggle />
```

---

## 7. Performance Targets

After refactor:

* Reduce main-thread JS execution significantly
* Reduce Total Blocking Time
* Keep LCP unchanged or improved
* Remove animation duplication overhead
* Reduce hydration scope

---

## 8. Key Principle

> Server renders structure. Client enhances interaction. Motion is reusable infrastructure, not per-component logic.

