# Jitanshu — Portfolio

A production-ready developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**-style primitives.

**Design concept:** the whole site is themed around REST APIs and terminal interfaces — a nod to backend/MERN work. Navigation reads as HTTP routes (`GET /projects`, `POST /contact`), the hero renders like a live API response, and project cards use real HTTP status semantics (`200 OK` for live projects, `202 COMING SOON` for ones in progress) instead of a generic "coming soon" label.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom design tokens — see `tailwind.config.ts`)
- Framer Motion (scroll reveals, hero entrance, nav transitions)
- shadcn/ui-style primitives (`Button`, `Badge`) built with `class-variance-authority`
- `nodemailer` + Gmail SMTP for the contact form API route
- `lucide-react` for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — things to finish

1. **Resume** — drop your PDF at `public/resume.pdf`. The Hero and Contact "Resume" buttons already point to `/resume.pdf`.
2. **Hackathons** — open `lib/data.ts` and fill in the `hackathons` array (name, year, summary, result). Two placeholder entries are there marked `TODO`.
3. **Certifications** — currently shows "coming soon" in the Education card (`components/sections/education.tsx`). Add a `certifications` array to `lib/data.ts` once you have some, and render it the same way `achievements` is rendered.
4. **Project links** — as projects go live, add `liveUrl` / `githubUrl` to the relevant entries in `lib/data.ts` and flip `status` from `"coming-soon"` to `"live"`. The status badge updates automatically.
5. **Domain** — replace the placeholder `https://jitanshu.dev` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your real deployed URL.
6. **Contact form email** — copy `.env.example` to `.env.local` and fill in:
   - `GMAIL_USER` — your Gmail address
   - `GMAIL_APP_PASSWORD` — a Gmail [App Password](https://myaccount.google.com/apppasswords) (not your regular password; requires 2-Step Verification enabled on the Google account)
   - `CONTACT_TO_EMAIL` — where form submissions should land (defaults to `GMAIL_USER`)

   Add the same three variables in your Vercel project's Environment Variables when you deploy.

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, JSON-LD
  page.tsx            Composes all sections
  globals.css          Design tokens, base styles, reduced-motion handling
  sitemap.ts / robots.ts
  api/contact/route.ts Contact form handler (Gmail SMTP)
components/
  layout/              Navbar, Footer
  sections/            Hero, About, Skills, Projects, Experience, Education, Contact
  ui/                   Button, Badge/StatusBadge, SectionHeading (shadcn-style primitives)
  animations/          Reveal (scroll-in-view wrapper)
lib/
  data.ts              All content — single source of truth. Edit this file to update copy.
  utils.ts             cn() class-merge helper
types/
  index.ts             Shared TypeScript types
```

## Editing content

Everything text-based — bio, skills, projects, hackathons, education, achievements, social links — lives in **`lib/data.ts`**. You should not need to touch component files to update copy; edit the data file and the whole site updates.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the three environment variables from `.env.example` in the Vercel project settings.
4. Deploy. Vercel auto-detects Next.js — no build config needed.

## Adding more shadcn/ui components

This project ships two hand-rolled shadcn-style primitives (`Button`, `Badge`) to keep the dependency footprint small. To pull in official shadcn components later:

```bash
npx shadcn@latest init
npx shadcn@latest add card dialog tabs
```

## Accessibility & performance notes

- Visible focus rings on every interactive element (`:focus-visible` in `globals.css`)
- `prefers-reduced-motion` respected — animations collapse to near-instant
- Fonts loaded via `next/font` (self-hosted, no layout shift, no external request)
- Images should use `next/image` if/when you add project screenshots to `public/projects/`
