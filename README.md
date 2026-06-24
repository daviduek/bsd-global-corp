# BSD Global Corp — Website

Marketing site for **BSD Global Corp**, a Wyoming-based wholesale distributor of
computing and electronics serving resellers, distributors and corporate buyers
across the United States.

Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.
Designed dark and engineered: deep-navy palette, an amber "signal" accent, and a
hero with an animated distribution/circuit network.

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm start
```

---

## Project structure

```
app/
  layout.tsx        Root layout, SEO metadata, fonts
  page.tsx          Home page (composes all sections) + JSON-LD
  globals.css       Tailwind + design tokens / utilities
  icon.svg          Favicon
components/
  Nav.tsx           Sticky navigation + mobile menu
  Hero.tsx          Hero + entity manifest
  DistributionGrid.tsx   Animated network (the signature element)
  Products.tsx      6 product-line categories
  Audience.tsx      Who we serve
  Process.tsx       Source → Stock → Distribute → Export
  Company.tsx       About + differentiators
  Contact.tsx       Quote-request form (mailto) + contact details
  Footer.tsx
  icons.tsx         Inline SVG icon set
  Reveal.tsx        Scroll-reveal wrapper
tailwind.config.ts  Design tokens (colors, fonts)
```

---

## Customize

Common things to edit:

- **Contact details** — `components/Contact.tsx` and `app/page.tsx` (JSON-LD).
  Currently: José Javier Duek · bsdglobalcorp@gmail.com · +54 9 11 3383-2945.
- **Domain** — `app/layout.tsx` (`siteUrl`) once you have the real domain.
- **Product categories / copy** — `components/Products.tsx`, `Audience.tsx`, etc.
- **Colors / fonts** — `tailwind.config.ts`.

The quote form opens the visitor's email client (`mailto:`). To capture
submissions to a database or inbox instead, wire the `handleSubmit` in
`components/Contact.tsx` to a form service (Formspree, Resend, a Next.js API
route, etc.).

---

## Deploy

### A) GitHub + Vercel via the web (no CLI)

1. Create a new repo at https://github.com/new (e.g. `bsd-global-corp`).
2. Upload these files (drag-and-drop in the GitHub UI, or push with git — see below).
3. Go to https://vercel.com/new, import the repo. Vercel auto-detects Next.js —
   keep the defaults and click **Deploy**.
4. Add your custom domain in Vercel → Project → Settings → Domains.

### B) With the CLI

```bash
# 1. Create the repo and push (requires GitHub CLI `gh`, logged in)
git init
git add -A
git commit -m "BSD Global Corp website"
gh repo create bsd-global-corp --public --source=. --remote=origin --push

# 2. Deploy to Vercel (requires `npm i -g vercel`, logged in)
vercel --prod
```

No environment variables are required.
