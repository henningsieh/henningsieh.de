# AGENTS.md

## Project Overview

This is **henningsieh.de**, a static, single-page portfolio homepage for Henning Sieh (IT Consultant / Full-Stack Developer / Requirements Engineer). It is built as a **Next.js 16 App Router static export** and deployed as plain HTML/CSS/JS. The tech stack is:

- **Next.js** `^16.2.7` with React `^19.2.7` and React DOM `^19.2.7`
- **TypeScript** `^6.0.3` with strict mode enabled
- **Tailwind CSS v4** `^4.3.0` (CSS-based configuration, no `tailwind.config.ts`)
- **shadcn/ui** "new-york" style, `zinc` base color, CSS variables enabled
- **next-themes** `^0.4.6` for dark/light/system theming
- **lucide-react** `^1.17.0` for icons
- **Bun** as the package manager (lockfile: `bun.lock`)

The site is exported with `output: "export"` and served from the resulting `out/` directory.

## Architecture

### Routing model

This project uses the **Next.js App Router**. The application source lives under `src/app/`.

```
src/
├── app/
│   ├── globals.css              # Tailwind v4 theme, CSS variables, custom @utility classes
│   ├── layout.tsx               # Root layout: fonts, theme provider, nav, footer, analytics
│   ├── page.tsx                 # Home / one-sheet portfolio page
│   ├── impressum/
│   │   └── page.tsx             # Legal imprint page
│   ├── robots.ts                # Static robots.txt generator
│   ├── sitemap.ts               # Static sitemap.xml generator
│   └── fonts/
│       ├── GeistVF.woff         # Geist Sans variable font
│       └── GeistMonoVF.woff     # Geist Mono variable font
├── components/
│   ├── ui/                      # shadcn/ui primitives (generated, do not edit)
│   ├── motion/                  # Animation wrapper components
│   └── *.tsx                    # Custom composite components
├── data/
│   └── index.ts                 # All portfolio content (hardcoded data)
├── lib/
│   ├── utils.ts                 # cn() + helper functions
│   └── motion.ts                # Unused Framer Motion presets (reference only)
└── types/
    └── index.ts                 # Shared TypeScript types
```

### Static export constraints

Because `next.config.ts` sets `output: "export"`, the following Next.js features are **not available** and must not be introduced:

- **No Server Actions** (no `async` form actions, no `server-only` mutations).
- **No ISR / revalidation** (every route is fully pre-rendered at build time).
- **No dynamic API routes** (`route.ts` handlers are not generated).
- **No `next/image` image optimization server** — images served by the static export are always unoptimized.
- **No `useRouter` programmatic navigation** that calls `router.push()` — only `<Link>` and anchor links are valid.
- **No runtime server fetches** in pages/components; all data must be static at build time.
- **No middleware** (`middleware.ts` is ignored in static export).

### Data flow

All portfolio content is **hardcoded in TypeScript** in `src/data/index.ts`. There is no CMS, no Markdown/MDX, and no API calls. Content includes:

- `basicData` — name, job title, contact, address, tax/bank info
- `performancePromises` — value proposition cards
- `skills` — skill categories and items
- `technologies` — technology stack grouped by domain
- `aboutData` — about section paragraphs
- `experiences` — work history timeline
- `ctaSection`, `uiStrings` — CTA and UI labels
- `metaDataDescription`, `metaDataKeywords`, `jsonLd` — SEO metadata

Page metadata in `src/app/page.tsx` and JSON-LD structured data are derived from these exports.

### Data shape reference

Types are defined in `src/types/index.ts`. When adding or editing content in `src/data/index.ts`, match these shapes exactly.

**`Experience`** (used by `experiences`):

```ts
{
  year: string           // e.g. "2023 - 2025"
  company: string        // employer / organization name
  role: string           // job title
  project?: string       // optional project name
  highlights: string[]   // bullet points
}
```

**`Skill`** (used by `skills`):

```ts
{
  title: string         // card heading
  icon: LucideIcon      // imported from lucide-react
  color: string         // "primary" | "secondary" | "accent"
  skills: string[]      // list of skill strings rendered as badges
}
```

**`Value`** (used by `performancePromises.points`):

```ts
{
  icon: LucideIcon
  title: string
  description: string
}
```

**`AboutData`**:

```ts
{
  title: string
  paragraphs: string[]
}
```

**`SectionData`**:

```ts
{
  title: string
  subtitle: string
}
```

**`CTASection`**:

```ts
{
  title: string
  description: string
  primaryButton: string
  secondaryButton: string
}
```

**`UIStrings`**:

```ts
{
  contactButton: string
  scrollIndicator: string
  projectLabel: string
  showMore: string
  showLess: string
}
```

**`Technologies`**:

```ts
Record<string, string[]>
```

The keys are used as `Tabs` values in the technologies section. Do not change keys without also updating `Portfolio.tsx`.

**`basicData`** is a plain object (not an interface). Key fields include `name`, `jobTitle`, `tagline`, `mobile`, `email`, `url`, `location`, `address`, `tax_info`, `bank_info`, `occupationalCategory`, and `social`.

## SEO & Metadata Conventions

### Page metadata

Metadata is exported from each page via Next.js `Metadata`. The home page metadata lives in `src/app/page.tsx`. Key fields include:

- `metadataBase`: `new URL(basicData.url)`
- `title`: template-based, e.g. `"Henning Sieh - IT Consulting"` and `"%s | Henning Sieh"`
- `description`: `metaDataDescription`
- `keywords`: `metaDataKeywords`
- `openGraph`: German locale (`de_DE`), canonical URL, avatar image (`/avatar-315.jpg`)
- `twitter`: `summary_large_image` card with the same avatar image
- `robots`: index/follow enabled
- `verification.google`: Search Console verification string

### JSON-LD structured data

`jsonLd` is an array of schema.org objects exported from `src/data/index.ts`.

It currently contains three entries:

1. **`@type: "Person"`** — describes Henning Sieh with `@id` `${basicData.url}/#person`
2. **`@type: "WebSite"`** — describes the site with `@id` `${basicData.url}/#website`
3. **`@type: "WebPage"`** — describes the imprint page at `/impressum`

### Where structured data is injected

JSON-LD is **injected in `src/app/page.tsx`**, not in `layout.tsx`. Each entry is rendered as a separate `<script type="application/ld+json">` tag inside `<main>`:

```tsx
export default function Home() {
  return (
    <main>
      {jsonLd.map((entry, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />
      ))}
      <PortfolioOneSheet />
    </main>
  )
}
```

### Rules when editing metadata or JSON-LD

- Keep `@id` values stable and consistent. The `WebSite` publisher references `#person`; the `WebPage` provider references `#person`.
- The person entity uses the full avatar path (`${basicData.url}/avatar-315.jpg`), while OpenGraph/Twitter use the root-relative path `/avatar-315.jpg`.
- Update `metaDataKeywords` and `metaDataDescription` in `src/data/index.ts` if the copy changes; they feed both `<meta>` tags and JSON-LD.
- `robots.ts` and `sitemap.ts` are static metadata generators in `src/app/` and are pre-rendered to `robots.txt` and `sitemap.xml` in the `out/` directory.
- The `sitemap.ts` lists `https://henningsieh.de` and `https://henningsieh.de/impressum`. Add new routes there if pages are added.

## Styling Rules

### Tailwind usage

This project uses **Tailwind CSS v4** with a CSS-based configuration. There is **no `tailwind.config.ts`** file despite the `components.json` reference. All theme configuration is declared in `src/app/globals.css` using `@theme`.

- Utility-first styling is mandatory.
- Prefer Tailwind utilities over custom CSS.
- Use the custom `@utility` classes defined in `globals.css` for repeated complex patterns (see below).
- Always combine utilities with `cn()`; never use string concatenation for class names.

### Custom theme tokens (`@theme` block in `globals.css`)

Colors:

- `--color-background`: `hsl(var(--background))`
- `--color-foreground`: `hsl(var(--foreground))`
- `--color-card`: `hsl(var(--card))`
- `--color-card-foreground`: `hsl(var(--card-foreground))`
- `--color-popover`: `hsl(var(--popover))`
- `--color-popover-foreground`: `hsl(var(--popover-foreground))`
- `--color-primary`: `hsl(var(--primary))`
- `--color-primary-foreground`: `hsl(var(--primary-foreground))`
- `--color-secondary`: `hsl(var(--secondary))`
- `--color-secondary-foreground`: `hsl(var(--secondary-foreground))`
- `--color-muted`: `hsl(var(--muted))`
- `--color-muted-foreground`: `hsl(var(--muted-foreground))`
- `--color-accent`: `hsl(var(--accent))`
- `--color-accent-foreground`: `hsl(var(--accent-foreground))`
- `--color-destructive`: `hsl(var(--destructive))`
- `--color-destructive-foreground`: `hsl(var(--destructive-foreground))`
- `--color-border`: `hsl(var(--border))`
- `--color-input`: `hsl(var(--input))`
- `--color-ring`: `hsl(var(--ring))`
- `--color-chart-1` through `--color-chart-5`: `hsl(var(--chart-1))` ... `hsl(var(--chart-5))`

Radius:

- `--radius-lg`: `var(--radius)`
- `--radius-md`: `calc(var(--radius) - 2px)`
- `--radius-sm`: `calc(var(--radius) - 4px)`

Fonts:

- `--font-sans`: `var(--font-geist-sans), system-ui, sans-serif`
- `--font-mono`: `var(--font-geist-mono), monospace`

### Custom `@utility` classes

The following custom utilities are defined in `src/app/globals.css` and should be reused instead of rewriting equivalent classes:

- `gradient-bg-hero` — professional diagonal gradient for hero section
- `gradient-bg-section` — subtle vertical section gradient
- `gradient-overlay` — decorative overlay gradient
- `nav-link` — navigation link with animated underline on hover
- `section-title` — responsive bold section heading
- `section-subtitle` — muted responsive subheading
- `gradient-text` — animated gradient text
- `tech-badge` — primary-colored badge for technology tags
- `fade-in` — subtle fade-in animation
- `btn-primary` — primary button styling
- `btn-outline` — outline button styling
- `feature-box` — card-like hoverable feature box
- `timeline-dot` / `timeline-line` — timeline decoration elements

### shadcn/ui variant

- **Style:** `new-york`
- **Base color:** `zinc`
- **CSS variables:** enabled (`cssVariables: true`)
- **Component alias:** `@/components/ui`
- **Utils alias:** `@/lib/utils`

### CSS variable scheme

Light and dark mode values are defined in `globals.css` under `:root` and `.dark`.

**Light mode (`:root`):**

- `--background`: `210 20% 98%`
- `--foreground`: `215 25% 15%`
- `--card`: `0 0% 100%`
- `--card-foreground`: `215 25% 15%`
- `--popover`: `0 0% 100%`
- `--popover-foreground`: `215 25% 15%`
- `--primary`: `215 85% 50%`
- `--primary-foreground`: `0 0% 100%`
- `--secondary`: `215 20% 50%`
- `--secondary-foreground`: `0 0% 100%`
- `--muted`: `210 15% 90%`
- `--muted-foreground`: `215 15% 35%`
- `--accent`: `195 85% 45%`
- `--accent-foreground`: `0 0% 100%`
- `--destructive`: `0 75% 55%`
- `--destructive-foreground`: `0 0% 100%`
- `--border`: `210 20% 88%`
- `--input`: `210 20% 88%`
- `--ring`: `215 85% 50%`
- `--radius`: `0.5rem`

**Dark mode (`.dark`):**

- `--background`: `220 25% 8%`
- `--foreground`: `210 20% 98%`
- `--card`: `220 20% 12%`
- `--card-foreground`: `210 20% 98%`
- `--popover`: `220 20% 12%`
- `--popover-foreground`: `210 20% 98%`
- `--primary`: `215 95% 58%`
- `--primary-foreground`: `220 25% 8%`
- `--secondary`: `215 30% 50%`
- `--secondary-foreground`: `210 20% 98%`
- `--muted`: `220 15% 18%`
- `--muted-foreground`: `210 18% 65%`
- `--accent`: `195 90% 55%`
- `--accent-foreground`: `220 25% 8%`
- `--destructive`: `0 80% 60%`
- `--destructive-foreground`: `0 0% 100%`
- `--border`: `220 20% 20%`
- `--input`: `220 20% 20%`
- `--ring`: `215 95% 58%`

### Class merging

Always use the `cn()` utility from `@/lib/utils` to merge and conditionally apply Tailwind classes. Never concatenate class strings manually.

Example:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", isActive && "active-class", className)} />
```

### Dark mode strategy

Dark mode is **class-based** via `next-themes`. The `ThemeProvider` in `src/components/ThemeProvider.tsx` uses:

```tsx
attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange
```

The `html` element receives `class="dark"` or `class="light"` (or inherits from system). Theme toggling is handled by `ModeToggle`.

## Component Conventions

### Component locations

- **shadcn/ui primitives:** `src/components/ui/` — generated by the shadcn CLI. Do not edit these files by hand.
- **Custom composite components:** `src/components/`
- **Motion/animation wrappers:** `src/components/motion/`
- **Shared helpers:** `src/lib/utils.ts`

### Naming and exports

- Use **PascalCase** filenames for components (e.g., `Portfolio.tsx`, `ValueCard.tsx`).
- Use **named exports** for reusable components (e.g., `export function Navigation()`).
- Default exports are acceptable for page components and lazy-loaded sections.

### Props

- Always type props with TypeScript interfaces or inline type annotations.
- Avoid `any`. Strict mode is enabled; implicit `any` will fail the build.
- Prefer destructuring props in the function signature.

### Motion components

Animation wrappers live in `src/components/motion/`. They use **CSS scroll-driven animations** defined in `globals.css`, not Framer Motion.

**`FadeIn`** — wraps a single block so it fades/slides up when it enters the viewport.

```tsx
import { FadeIn } from "@/components/motion/FadeIn"

<FadeIn>
  <div>Content animates in on scroll</div>
</FadeIn>
```

- Props: `children: React.ReactNode`
- Applies the class `animate-fade-in-up` (`animation-timeline: view()`)

**`Stagger`** — wraps a list of children so they animate in with staggered timing.

```tsx
import { Stagger } from "@/components/motion/Stagger"

<Stagger>
  {items.map((item) => <div key={item.id}>{item}</div>)}
</Stagger>
```

- Props: `children: React.ReactNode`
- Applies the class `stagger-children`, which uses `animation-timeline: view()` plus `animation-delay` per nth-child (up to 6 children)

> Do not reach for `framer-motion` for scroll-driven effects. It is installed but unused. Prefer these wrappers to keep animations lightweight and SSR-safe.

### Installed shadcn components

The following shadcn/ui primitives are installed:

- `avatar` — `Avatar`, `AvatarImage`, `AvatarFallback`
- `badge` — `Badge` with variants
- `button` — `Button` with variants, supports `asChild`
- `card` — `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `dropdown-menu` — full dropdown menu primitive set
- `scroll-area` — `ScrollArea`, `ScrollBar`
- `tabs` — `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`

### Adding new shadcn components

Use the shadcn CLI with Bun:

```bash
bunx shadcn add <component-name>
```

Examples:

```bash
bunx shadcn add separator
bunx shadcn add sheet
```

Do not copy components from other projects into `src/components/ui/`. Always install through the CLI so the style, aliases, and Tailwind v4 conventions stay consistent.

## TypeScript Rules

- **Strict mode:** enabled (`"strict": true` in `tsconfig.json`).
- **No implicit any:** enforced.
- **Module resolution:** `bundler`.
- **Path alias:** only `@/*` → `./src/*`.
- **No type assertions** (`as`) without explicit justification.
- Prefer explicit return types for exported functions where clarity helps.

## File & Folder Conventions

### Where to add new files

- **New pages:** add `src/app/<route>/page.tsx`.
- **New custom components:** add `src/components/<ComponentName>.tsx`.
- **New motion wrappers:** add `src/components/motion/<Name>.tsx`.
- **New shared helpers:** add to `src/lib/utils.ts` or create `src/lib/<name>.ts`.
- **New types:** add to `src/types/index.ts`.
- **New static assets:** add to `public/` (images, SVGs, etc.).

### Image handling

- Static assets (avatar images, SVG logos) live in `public/`.
- The site is statically exported, so `next/image` does not perform server-side optimization.
- Always add the `unoptimized` prop when using `next/image`, or prefer a plain `<img>` tag.
- The hero avatar deliberately uses a plain `<img>` tag with `srcSet`/`sizes` for full manual control and to avoid hydration/layout constraints.
- The Bluesky SVG uses `next/image` with `unoptimized` because SVG optimization is also disabled.
- Prefer `loading="lazy"` and `decoding="async"` for below-the-fold images; use `fetchPriority="high"` for the hero avatar.

### Font loading

Custom fonts are loaded via `next/font/local` in `src/app/layout.tsx`:

- **Geist Sans** variable: `--font-geist-sans`
- **Geist Mono** variable: `--font-geist-mono`

Both variable fonts are stored in `src/app/fonts/` as `.woff` files.

## Commands

All scripts are defined in `package.json`:

- `dev` — `next dev --turbopack` — starts the development server with Turbopack on `http://localhost:3000`
- `build` — `next build` — builds the static export into `out/`
- `start` — `next start -p 3000 -H 0.0.0.0` — starts the production Next.js server (primarily for preview; production is served as static files)
- `code:lint` — `eslint .` — runs ESLint using the Next.js core-web-vitals + TypeScript configs
- `code:format` — `prettier --write "./**/*.{js,jsx,mjs,cjs,ts,tsx,json,css,md}"` — formats all project files

Use Bun to run scripts:

```bash
bun dev
bun run build
bun run code:lint
bun run code:format
```

## Agent Workflow Guidelines

1. **Check existing shadcn primitives first.** Before building a new UI element, look in `src/components/ui/`. Reuse shadcn components (Button, Card, Badge, Tabs, etc.) and compose them rather than reinventing.

2. **Use existing design tokens.** Before introducing a new color, spacing value, or font, check `src/app/globals.css` and the `@theme` block. Use existing variables and `@utility` classes.

3. **Do not edit `src/components/ui/` directly.** These files are generated by `shadcn add`. If a primitive needs different behavior, wrap it in a custom component under `src/components/`.

4. **Verify static-export compatibility.** Before adding any Next.js feature, confirm it works with `output: "export"`. If it requires a server, ISR, dynamic API routes, or Server Actions, do not add it.

5. **Follow existing custom components as reference.** Patterns for cards, sections, navigation, and animations are already established in `src/components/`. Match their structure and conventions.

6. **One logical change per task.** Do not refactor unrelated code or restyle existing sections while fixing a bug or adding a feature.

7. **Run lint and build before finishing.** Verify your changes pass `bun run code:lint` and `bun run build` without errors.

## Known Constraints & Gotchas

- **`output: "export"` is enabled.** Every route must be statically prerenderable. Server Actions, ISR, middleware, and API routes are not supported.
- **`next/image` requires `unoptimized: true` for static export.** The build will warn or fail if you use optimized images without marking them unoptimized. Prefer `unoptimized` on `next/image` instances or use a plain `<img>` tag.
- **No `tailwind.config.ts` file exists.** Tailwind CSS v4 is configured entirely through CSS in `src/app/globals.css` (`@import 'tailwindcss'`, `@theme`, `@custom-variant`, `@plugin`). Do not create a `tailwind.config.ts` unless explicitly migrating back to v3.
- **`components.json` references `tailwind.config.ts`** but it is intentionally absent. Treat `globals.css` as the source of truth for theming.
- **shadcn components use Tailwind v4 syntax.** You will see utilities such as `focus-visible:outline-hidden`, `bg-linear-to-br`, `shadow-xs`, `backdrop-blur-xs`, and `size-*`. Do not replace these with v3 equivalents.
- **Dark mode is class-based.** Use `dark:` variants and CSS variables; do not rely only on `prefers-color-scheme`.
- **Motion components use CSS scroll-driven animations.** `FadeIn` and `Stagger` in `src/components/motion/` apply CSS classes `animate-fade-in-up` and `stagger-children` that rely on `animation-timeline: view()`. `framer-motion` is installed but currently unused; do not introduce Framer Motion animations unless requested.
- **All content is hardcoded in `src/data/index.ts`.** To update text, skills, experience, or metadata, edit that file — not the components.
- **German-language site.** The root layout uses `lang="de"`, and copy is in German. Keep new copy in German unless explicitly asked otherwise.
- **No runtime environment variables are required for the static site.** The `.env` file contains deployment/webhook variables for Coolify and is not used by the application code.
- **Prettier import order.** Prettier is configured with `@ianvs/prettier-plugin-sort-imports`. Imports are ordered: builtin modules → third-party modules → `@/*` aliases → relative imports. Do not fight this order.
