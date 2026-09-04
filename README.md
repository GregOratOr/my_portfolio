# Portfolio — [Sarthak Bapte](https://github.com/GregOratOr)

A data-driven personal portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4, deployed as a static site to GitHub Pages.

Live at **[gregorator.uk](https://gregorator.uk)**.

> **This repository contains no personal content.** Every content file is gitignored and replaced by a committed `*.example.ts` template. Clone it, run two commands, and you have a working portfolio with placeholder content ready to edit. See [Content & privacy](#content--privacy).

## Stack

| Layer      | Choice                                                        |
| ---------- | ------------------------------------------------------------- |
| Framework  | Next.js 16.1 (App Router, Turbopack, `output: "export"`)       |
| Language   | TypeScript 6, `strict` + `noUncheckedIndexedAccess`            |
| UI         | React 19                                                      |
| Styling    | Tailwind CSS v4, semantic design tokens in `src/app/globals.css` |
| Validation | Zod 4 — every content file is schema-checked at build time     |
| Hosting    | GitHub Pages via GitHub Actions                               |

## Getting started

```bash
git clone https://github.com/GregOratOr/my_portfolio.git
cd my_portfolio
npm install          # postinstall scaffolds src/content/*.ts from the templates
npm run dev          # http://localhost:3000
```

`npm install` runs `scripts/init-content.mjs`, which copies each `src/content/*.example.ts` to its real filename if it does not already exist. Nothing is ever overwritten, so it is safe to re-run:

```bash
npm run setup:content
```

### Scripts

| Command             | Purpose                                       |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                    |
| `npm run build`     | Static export into `out/`                     |
| `npm start`         | Serve the production build                    |
| `npm run typecheck` | `tsc --noEmit`                                |
| `npm run lint`      | ESLint over the whole repo                    |
| `npm run setup:content` | Create missing content files from templates |

## Content & privacy

All content lives in `src/content/`. Four files are **gitignored** and hold everything personal:

| Gitignored file  | Committed template         | Contents                                    |
| ---------------- | -------------------------- | ------------------------------------------- |
| `profile.ts`     | `profile.example.ts`       | Name, role, location, intro, contacts, site metadata |
| `skills.ts`      | `skills.example.ts`        | Skill selection and levels, "currently exploring" |
| `experience.ts`  | `experience.example.ts`    | Work and education timelines                |
| `projects.ts`    | `projects.example.ts`      | Project cards                               |

Also gitignored: `public/resume.pdf`, `public/images/logos/`, `public/images/projects/` (except `placeholder.svg`), `public/images/portrait.*`, and `public/og-image.*`.

Each template documents its own fields inline. Types come from `src/content/schema.ts`, so your editor autocompletes every field and `npm run typecheck` catches mistakes. At build time each file is parsed with Zod — a bad field fails the build with the exact path rather than silently rendering an empty section.

### How the content layer fits together

```
src/content/schema.ts        Zod schemas -> the TypeScript types
src/content/index.ts         validates each module, exports what the page reads
src/content/profile.ts       your content (gitignored)
src/content/*.example.ts     committed templates
```

`src/app/page.tsx` is the only place that imports content; sections receive it as props.

### Rich text

`intro`, `desc`, and every `bullets` array support inline formatting, rendered as React nodes (no `dangerouslySetInnerHTML`):

- `**bold**`
- `*italic*`
- `__underline__`
- an empty string `""` inserts a paragraph break

```ts
intro: [
  "I specialize in **real-time rendering**.",
  "", // paragraph break
  "Recently working with *Next.js*.",
]
```

## Common edits

**Add a project** — append to `PROJECTS` in `src/content/projects.ts`. Screenshots go in `public/images/projects/`. `featured: true` pins it to the front; omit `link` for a non-clickable card. Several images cross-fade on hover.

**Add a role or degree** — append a `TimelineItemInput` to `EXPERIENCE` or `EDUCATION` in `src/content/experience.ts`. `logo` is optional (a path under `public/` or an absolute URL) and falls back to a monogram of the org name, so a missing logo can never break the build.

**Add a technology** — two steps:

1. Drop the icon at `public/icons/tech/<slug>.svg`. Use `fill="currentColor"` for single-colour icons.
2. Add an entry to `TECH_REGISTRY` in `src/lib/tech/registry.ts`:

```ts
GO: { label: "Go", slug: "go", accent: "cyan", category: "language" },
```

Set `mono: true` for `currentColor` icons — they get tinted with the accent through a CSS mask. Brand-coloured icons render as-is. `accent` is a **token name**, never a CSS class; the literal classes live in `src/lib/theme/accents.ts`.

**Retheme the site** — edit the token block at the top of `src/app/globals.css`. Light values under `:root`, dark under `.dark`. Everything else derives from those variables.

**Change section order or labels** — `src/lib/navigation.ts` (nav + scroll-spy) and `src/app/page.tsx` (composition).

## Deployment

The site is a static export, deployed by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

Because the real content is gitignored, CI pulls it from a **separate private repository** before building. When those credentials are absent — forks, or pull requests from forks — the build falls back to the `*.example.ts` templates and deploys a demo instead of failing.

### One-time setup

1. **Private content repo.** Create a private repo (e.g. `portfolio-content`) with this layout:

   ```
   content/          # profile.ts, skills.ts, experience.ts, projects.ts
   public/           # resume.pdf, images/logos/*, images/projects/*
   ```

   CI copies `content/` over `src/content/` and `public/` over `public/`.

2. **Fine-grained PAT.** Create one scoped to that repo only, with *Repository permissions → Contents: Read-only*. Add it to this repo as the secret `CONTENT_REPO_PAT`, and add a repository **variable** `CONTENT_REPO` set to `your-user/portfolio-content`.

3. **Enable Pages.** Repository *Settings → Pages → Build and deployment → Source: GitHub Actions*.

   > GitHub Pages on a *private* repo requires GitHub Pro. Keeping this repo public is what makes the free tier work — which is exactly why no personal content is committed to it.

4. **Custom domain.** `public/CNAME` holds `gregorator.uk`. In Cloudflare DNS point the apex at GitHub Pages:

   | Type  | Name | Value                   | Proxy    |
   | ----- | ---- | ----------------------- | -------- |
   | CNAME | `@`  | `gregorator.github.io`  | DNS only |
   | CNAME | `www`| `gregorator.github.io`  | DNS only |

   Keep the records **DNS only** (grey cloud) until GitHub finishes issuing the TLS certificate, then enable *Enforce HTTPS* in the Pages settings. If you later turn Cloudflare's proxy on, set SSL/TLS mode to **Full**.

Deploying from a different repo name without a custom domain also needs `basePath: "/<repo>"` in `next.config.mjs`.

## Project structure

```
src/
├── app/                 layout.tsx, page.tsx, globals.css (design tokens)
├── components/
│   ├── layout/          SiteNav (scroll-spy + mobile menu), ThemeToggle, Footer
│   ├── sections/        Hero, Skills, Timeline, Projects, Contact
│   └── ui/              Section, TechChip, SocialLinks, OrgLogo, ProjectCard
├── content/             schema.ts, index.ts, content files + templates
├── lib/
│   ├── tech/            registry.ts (metadata), TechIcon.tsx
│   ├── theme/accents.ts accent tokens -> literal Tailwind classes
│   ├── icons/social.ts  contact glyph paths
│   ├── richtext.tsx     inline formatter
│   └── navigation.ts    section anchors
└── types/               ambient declarations
public/
├── icons/tech/          one SVG per technology (~83 KB total, zero JS)
├── images/              logos, project screenshots (gitignored)
└── CNAME
scripts/init-content.mjs
```

## License

Code is MIT licensed — see [`LICENSE`](LICENSE). Fork it, restyle it, use it for your own portfolio. The content templates are placeholders, not my details.
