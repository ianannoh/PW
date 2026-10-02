# Portfolio Website

Personal portfolio and project showcase for **Ian Annoh**, Software Developer (MEAN Stack).

A single-page-application built with **Angular 19** that presents an overview, professional skills, industry project case studies, and contact details. It is a fully static, client-side rendered site — no backend, no database, all content is hard-coded in the components.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Screenshots / Pages](#screenshots--pages)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Routing](#routing)
- [Adding Content](#adding-content)
- [Assets](#assets)
- [Styling Conventions](#styling-conventions)
- [Testing](#testing)
- [Deployment](#deployment)

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Angular 19.2 (standalone components, no NgModules) |
| Language | TypeScript 5.7 |
| Routing | `@angular/router` 19.2 |
| Change detection | Zone.js with `provideZoneChangeDetection({ eventCoalescing: true })` |
| Styling | Plain component-scoped CSS (no CSS framework in the app itself) |
| Testing | Karma + Jasmine |
| Build | `@angular-devkit/build-angular:application` |

There are **no runtime dependencies beyond Angular itself** — no UI library, no HTTP client calls, no state management package. All images and fonts are self-hosted in `public/assets`.

---

## Features

- **Responsive layout** — a persistent desktop sidebar that collapses into a hamburger menu on tablet/mobile.
- **About page** — bio, overview, educational background timeline, hobbies, and a downloadable CV (PDF).
- **Projects index** — two groups of project cards:
  - *Live websites* — cards link out to external, production URLs (`target="_blank"`).
  - *Systems/platforms* — cards route internally to a case-study subpage.
- **Project case-study pages** — hero/metadata block (year, team size, role), overview copy, and a reusable image slider for screenshots.
- **Skills page** — skill tiles grouped into Languages, Frontend, Backend, Database, and Practices, each with an icon.
- **Contact page** — GitHub, LinkedIn, and Instagram links with icons.
- **Scroll restoration** — the viewport is reset to the top on every route change.
- **Document titles** — per-route `title` values for browser tabs and SEO.
- **Custom typography** — self-hosted **Onest** font family (9 weights) with a fluid type scale.

---

## Screenshots / Pages

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | About | Bio, education, overview, hobbies, CV link |
| `/projects` | Projects | Grid of all projects (live sites + systems) |
| `/professional-skills` | Skills | Skill categories with icons |
| `/contact` | Contact | Social/professional links |
| `/projects/ggrs` | GNAPS case study | Ghana National Arms Management Portal |
| `/projects/vdt-cms` | VDT CMS case study | Vandzilah Technology website CMS |
| `/projects/vitals-first` | Vitals First case study | Clinic patient-vitals analytics platform |

---

## Project Structure

```
src/
├── main.ts                     # Bootstrap entry point
├── index.html                  # Shell with <app-root>
├── styles.css                  # Global reset, Onest @font-face, fluid type scale
│
├── app/
│   ├── app.component.*         # Layout shell: sidebar + <router-outlet>
│   ├── app.config.ts           # Providers (router, zone change detection)
│   └── app.routes.ts           # All route definitions
│
├── core/
│   └── side-bar/               # Navigation: desktop rail / mobile drawer
│
├── pages/
│   ├── about/                  # About page (default route)
│   ├── home/                   # Projects index (route: /projects)
│   ├── skills/                 # Professional skills
│   ├── contact/                # Contact links
│   └── project-subpages/
│       ├── ggrs/               # GNAPS case study
│       ├── vdt-cms/            # VDT CMS case study
│       └── vitals-first/       # Vitals First case study
│
└── shared/
    └── slider/                 # Reusable image carousel (@Input images: string[])

public/
├── favicon.ico
└── assets/
    ├── about/                  # Portrait, university logos, CV PDF
    ├── contact/                # Social/contact icons
    ├── fonts/onest/            # Onest TTF weights
    ├── home/                   # Project backgrounds, logos, screenshots
    ├── sidebar/                # Full + short logo
    └── skills/                 # Skill / technology icons
```

Each component is a standalone component with four files: `.ts`, `.html`, `.css`, `.spec.ts`.

---

## Getting Started

### Prerequisites

- **Node.js 20+** (Angular 19 supports Node `^18.19.1 || ^20.11.1 || >=22.0.0`)
- **npm 10+** (ships with Node 20)

### Install

```bash
npm install
```

### Run the dev server

```bash
npm start
# or
ng serve
```

Open <http://localhost:4200/>. The app hot-reloads on file changes.

### Build

```bash
npm run build          # production build -> dist/portfolio-website
npm run watch          # development build in watch mode
```

Production build settings (`angular.json`):
- output hashing: `all`
- initial bundle budget: 500 kB warning / 1 MB error
- per-component style budget: 4 kB warning / 8 kB error

---

## Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `npm start` | `ng serve` | Dev server on `http://localhost:4200` |
| `npm run build` | `ng build` | Production build into `dist/` |
| `npm run watch` | `ng build --watch --configuration development` | Unoptimized watch build |
| `npm test` | `ng test` | Karma/Jasmine unit tests in Chrome |
| `npm run ng` | `ng` | Pass-through to the Angular CLI |

---

## Routing

All routes live in `src/app/app.routes.ts` and are eager-loaded (no lazy `loadComponent` yet):

```ts
export const routes: Routes = [
  { path: '', component: AboutComponent, title: 'About | Ian Annoh' },
  { path: 'professional-skills', component: SkillsComponent, title: 'Professional Skills | Ian Annoh' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Ian Annoh' },
  { path: 'projects', component: HomeComponent, title: 'Projects | Ian Annoh' },
  { path: 'projects/ggrs', component: GgrsComponent },
  { path: 'projects/vdt-cms', component: VdtCmsComponent },
  { path: 'projects/vitals-first', component: VitalsFirstComponent },
];
```

Scroll-to-top on navigation is handled in `app.component.ts:18` by filtering `NavigationEnd` events and calling `ViewportScroller.scrollToPosition([0, 0])`.

---

## Adding Content

**Add a project card** — edit the arrays in `src/pages/home/home.component.ts`:

```ts
protected systemProjects: IProjects[] = [
  {
    img1: "/assets/home/ggrs-bg.webp",   // background image
    img2: "/assets/home/ggrs-logo.svg",  // logo overlay
    header: "Ghana National Arms Management Portal (GNAPS)",
    date: "November, 2025",
    type: "Legal & Regulatory Tech",
    route: "/projects/ggrs",             // internal → RouterLink
  },
];

protected websiteProjects: IProjects[] = [
  { /* route: "https://…" → external link, opens in new tab */ },
];
```

`systemProjects` render with `routerLink`; `websiteProjects` render with `href` + `target="_blank" rel="noopener"`.

**Add a project case study**

```bash
ng generate component pages/project-subpages/my-project
```

Then:
1. Add the route in `app.routes.ts`.
2. Fill in the component's `images: string[]` for `<app-slider [images]="images">`.
3. Drop screenshots into `public/assets/home/`.

**Add a skill** — append to the relevant array in `src/pages/skills/skills.component.ts` (`languages`, `frontend`, `backend`, `database`, `practices`) and place the icon in `public/assets/skills/`.

**Add a contact link** — append to `contacts: IContact[]` in `src/pages/contact/contact.component.ts`.

---

## Assets

All static files are served from `public/assets` and copied verbatim by the build (`angular.json` assets glob `**/*`). Reference them with an absolute path from the site root:

```html
<img src="/assets/about/ian.jpg" alt="Ian Annoh image">
```

Directory convention: `assets/<page-or-feature>/<file>`, e.g. `assets/skills/typeScript-logo.svg`.

Images mix formats (`.webp`, `.png`, `.jpg`, `.jpeg`, `.svg`). Consider standardising to WebP/SVG to reduce payload — the project backgrounds are the heaviest files in the repo.

---

## Styling Conventions

- **Component-scoped CSS only.** Global rules live in `src/styles.css`; everything else stays in the component's `.css` file (enforced by Angular's emulated encapsulation, plus a 4 kB/8 kB per-component style budget).
- **No CSS preprocessor** — plain CSS with custom-property accents.
- **Layout**: `app.component.css` is a flex row — `side-bar` at 23%, `main` at 77%. Below 1080px the layout stacks and the sidebar becomes an off-canvas drawer toggled by `showSideBar` in `side-bar.component.ts`.
- **Typography**: Onest is loaded via a single `@font-face` for `Onest-Regular.ttf` and applied globally with a `font-family: "Onest", sans-serif` reset. The other 8 weights are present in `public/assets/fonts/onest/` but not yet declared.
- **Responsive breakpoints** used throughout: `736/737px` (mobile → tablet) and `1080px` (tablet → desktop). Heading sizes are scaled in `styles.css` rather than per component.
- **Class naming** is mostly lowercase-hyphenated (`.section-one`, `.header`, `.box`), with a few legacy exceptions such as `.container`, `.mode`, and `.showSideBar`.

---

## Testing

Unit tests are scaffolded per component (Jasmine + Karma, Chrome):

```bash
npm test
```

The default CLI-generated specs are still in place and assert on component creation plus basic `h1` rendering. They have not been expanded to cover the sidebar toggle, slider index wrapping, or route configuration.

---

## Deployment

The build emits a fully static bundle to `dist/portfolio-website/browser`, so it can be hosted on any static host:

```bash
npm run build
# then deploy dist/portfolio-website/browser
```

Works out of the box with GitHub Pages, Netlify, Vercel, Cloudflare Pages, or Firebase Hosting.

**If deploying to a sub-path** (e.g. GitHub Pages project sites), update the `<base href="/">` in `src/index.html` to `/<repo-name>/` so the router can resolve deep links, and make sure the host serves `index.html` for unknown paths (SPA fallback).

---

[//]: # (## License)

[//]: # ()
[//]: # (Not specified. Add a `LICENSE` file before publishing publicly.)
