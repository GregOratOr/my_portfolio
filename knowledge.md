# Project Knowledge Base — `my_portfolio`

> Working notes for anyone (human or AI) editing this repository. Read this before making changes.

---

## 1. What this is

A single-page personal portfolio for **Sarthak Bapte**, built with **Next.js 16 (App Router)** and **TypeScript**, exported as a **static site** and deployed to **GitHub Pages** at `gregorator.uk`.

Two properties drive the whole design:

1. **Content is data, validated at build time.** All personal content lives in `src/content/*.ts`, is described by Zod schemas, and is read in exactly one place. Components are presentation shells.
2. **No personal content is committed.** The four real content files are gitignored; committed `*.example.ts` templates keep a clean clone building. CI overlays the real content from a private repo.

---

## 2. Tech stack

| Layer      | Choice                                                       |
| ---------- | ------------------------------------------------------------ |
| Framework  | Next.js `16.1.1` (App Router, Turbopack, `output: "export"`)  |
| Language   | TypeScript `6.0.3`, `strict` + `noUncheckedIndexedAccess`     |
| UI runtime | React `19.2.3`                                                |
| Styling    | Tailwind CSS v4 (`@tailwindcss/postcss`), tokens in `globals.css` |
| Validation | Zod `4.5.4`                                                   |
| Fonts      | `next/font/google` — Geist Sans + Geist Mono (self-hosted at build) |
| Linting    | ESLint 9 + `eslint-config-next`                               |

Scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `setup:content`, `postinstall`.

---

## 3. Directory map

```
my_portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        Root layout: fonts, metadata from content, no-flash theme script
│   │   ├── page.tsx          Composition root -- the ONLY reader of content
│   │   └── globals.css       Design tokens, base styles, motion, print styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteNav.tsx      Sticky nav, scroll-spy, mobile menu (client)
│   │   │   ├── ThemeToggle.tsx  Stateless dark-mode toggle (client)
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      Name, role, intro, CTAs, at-a-glance band
│   │   │   ├── SkillsSection.tsx    Grouped chips + "currently exploring" panel
│   │   │   ├── TimelineSection.tsx  Work/Education tabs (client)
│   │   │   ├── ProjectsSection.tsx  Responsive grid (server)
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── Section.tsx      Shared section shell (rhythm, width, headings)
│   │       ├── TechChip.tsx     The one way a technology is rendered
│   │       ├── SocialLinks.tsx  Icon row + single SocialIcon
│   │       ├── OrgLogo.tsx      Logo with monogram fallback (client)
│   │       └── ProjectCard.tsx  Card with hover cross-fade (client)
│   ├── content/
│   │   ├── schema.ts         Zod schemas -> all content types
│   │   ├── index.ts          Validates + exports; the single seam
│   │   ├── {profile,skills,experience,projects}.ts          GITIGNORED
│   │   └── {profile,skills,experience,projects}.example.ts  committed templates
│   ├── lib/
│   │   ├── tech/registry.ts  TECH_REGISTRY: label, slug, accent token, category
│   │   ├── tech/TechIcon.tsx Renders an icon from public/, masking mono icons
│   │   ├── theme/accents.ts  Accent token -> literal Tailwind classes
│   │   ├── icons/social.ts   Contact glyph path data
│   │   ├── richtext.tsx      parseRichText + <RichText>
│   │   └── navigation.ts     NAV_SECTIONS, initialsOf()
│   └── types/assets.d.ts     `declare module "*.css"` (TS 6 needs it)
├── public/
│   ├── icons/tech/*.svg      One file per technology (~83 KB total)
│   ├── images/logos/         GITIGNORED
│   ├── images/projects/      GITIGNORED except placeholder.svg
│   ├── resume.pdf            GITIGNORED
│   └── CNAME                 gregorator.uk
├── scripts/init-content.mjs  Scaffolds content files from templates
├── .github/workflows/deploy.yml
├── next.config.mjs           output: export, images.unoptimized, trailingSlash
└── tsconfig.json
```

---

## 4. Data flow

```
schema.ts (Zod) ─┐
                 ├─> content/index.ts ──> app/page.tsx ──> sections ──> ui components
content/*.ts ────┘        (parse + throw on bad content)

lib/tech/registry.ts ──> TechChip / TechIcon ──> public/icons/tech/<slug>.svg
lib/theme/accents.ts ──> literal Tailwind classes
globals.css tokens ────> every component (bg-bg, text-fg, border-line, text-accent, ...)
```

`src/content/index.ts` exports `profile`, `skills`, `experience`, `education`, `projects`, `sortedProjects`, `primaryContact`, `socialContacts`. Nothing else imports the raw content modules.

---

## 5. The two invariants worth protecting

**a) Content never contains CSS classes.** The old `techs.js` stored `accent: "text-yellow-400"` and components did `accent.replace("text-", "bg-")`. Because Tailwind only generates classes it finds literally in scanned source, gitignoring content silently killed every colour. Now content and the registry name an **accent token** (`"amber"`), and `src/lib/theme/accents.ts` — a committed file — holds the literal classes. Keep it that way: never move a class string into `src/content/`.

**b) A clean clone must build.** Nothing may `import` a gitignored file that has no committed fallback. Content modules are covered by `*.example.ts` + `postinstall`. Assets (logos, screenshots, resume) are referenced by **path string**, never by static `import`, and every consumer degrades gracefully: `OrgLogo` falls back to a monogram, `ProjectCard` to `placeholder.svg`, the hero hides the CV button when `resumeUrl` is unset.

---

## 6. Icons

- One SVG per technology under `public/icons/tech/`, referenced by the registry `slug`. Zero SVG markup ships in JavaScript.
- `mono: true` means the icon is drawn with `fill="currentColor"`; `TechIcon` paints it through a CSS `mask-image` so it inherits the accent colour. Brand icons render through `<img>`.
- Six concept entries (`RL`, `DL`, `COMPUTERVISION`, `MULTIAGENTSYS`, `SIMULATION`, `OPENCV`) share `concept.svg` — a hash glyph — and differ only by accent.
- The old `MAYA` icon was a 695 KB auto-traced path, 88% of the former monolith. It was replaced with a compact hand-authored mono glyph.

---

## 7. Theming

Tokens live at the top of `src/app/globals.css`: `--bg`, `--surface`, `--surface-2`, `--line`, `--fg`, `--fg-muted`, `--accent`, `--accent-soft`, `--shadow`. Light values under `:root`, dark under `.dark`. `@theme inline` maps them to Tailwind utilities (`bg-bg`, `text-muted`, `border-line`, `text-accent`, `shadow-card`).

Dark mode is **class-based**, not `prefers-color-scheme`:

- `@custom-variant dark (&:where(.dark, .dark *))` makes `dark:` follow the class.
- The inline script in `layout.tsx` sets the class before first paint from `localStorage`, falling back to the OS preference.
- `ThemeToggle` holds no state; which icon shows is decided by CSS from the same class, so there is nothing to hydrate.

Also in `globals.css`: `prefers-reduced-motion` kill switch, and a print stylesheet (`.print-hidden` hides the nav, links get their href appended).

---

## 8. Deployment

`next build` writes a static site to `out/`. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on pushes to `main`:

1. checkout this repo
2. checkout the private content repo (`vars.CONTENT_REPO` + `secrets.CONTENT_REPO_PAT`) into `.content-repo`, **skipped** when either is missing
3. copy `.content-repo/content/` over `src/content/` and `.content-repo/public/` over `public/`
4. `npm ci` (postinstall fills any content file the overlay did not provide)
5. `npm run typecheck`, `npm run build`
6. `upload-pages-artifact` on `./out`, then `deploy-pages`

Notes:

- GitHub Pages on a private repo needs GitHub Pro, so this repo stays **public** — which is why no content is committed.
- No `basePath` is needed because of the custom domain. A project-site URL (`user.github.io/repo/`) would need `basePath: "/repo"`.
- No `.nojekyll` is needed with the artifact publishing path.
- `actions/configure-pages` is deliberately not used: it only parses `next.config.js/.cjs/.mjs` and would overwrite settings this repo owns.

---

## 9. Known gaps / TODO

- **Project screenshots** are still the two original placeholder images. Real per-project captures are outstanding; `public/images/projects/202889.png` is 2.2 MB and should be recompressed when replaced.
- **No OG image.** `profile.site.ogImage` is optional and currently unset, so link previews have no image.
- **External logos** for inGnious, WinPoint, VIT, and Teesside are hotlinked from third-party sites and can break or rate-limit. `OrgLogo` degrades to a monogram, and its tile is deliberately dark because most of those marks are white-on-transparent.
- **`RUST`, `REACT`, `POSTGRESQL`, `ANACONDA`, `JUPYTERLAB`** are in the registry but not in the current skill selection — they exist for the templates and future edits.

---

## 10. Quick commands

```bash
npm install          # deps + scaffold missing content files
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run lint         # eslint .
npm run build        # static export into out/
```

If styles look stale after editing `globals.css`, delete `.next` — Turbopack's dev cache can hold an old compiled stylesheet.
