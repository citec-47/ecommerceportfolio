# Ndonyi Maurice — Portfolio

Personal portfolio for **Ndonyi Maurice Djam**, Ecommerce & Digital Marketing
Virtual Assistant and Full-Stack Developer. Built with **Next.js 15 (App
Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add your photo

The hero currently shows a placeholder. To use your real headshot:

1. Save your photo as `public/profile.jpg`
2. In `lib/data.ts`, change `photo: "/profile.svg"` to `photo: "/profile.jpg"`

## Edit your content

All copy, services, skills, and contact details live in **`lib/data.ts`** — edit
that one file to update the whole site.

| What | Where |
| --- | --- |
| Name, role, email, WhatsApp, availability | `lib/data.ts` → `profile` |
| Services / what you do | `lib/data.ts` → `services` |
| Skills & tools | `lib/data.ts` → `skills`, `tools` |
| How-we-work steps | `lib/data.ts` → `process` |

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config.

## Tech

- Next.js 15 · React 19 · TypeScript
- Tailwind CSS v4
- Scroll-reveal animations via IntersectionObserver
- Fully responsive, dark theme, SEO metadata included
