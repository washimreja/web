# Washim Reja — personal site

Single-page site for Washim Reja, independent AI engineer and software developer.
React 19 · Vite 7 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build in dist/
```

Needs Node.js 20.19 or newer.

## Structure

```
src/
  config/site.ts          identity, nav links, contact channels  ← edit this first
  data/content.ts         all page copy
  context/ContactContext  opens the contact dialog from anywhere
  hooks/useActiveSection  scroll-spy for the nav
  components/
    Navbar, Footer, ContactDialog
    ui/        Reveal, Modal, SectionHeading
    sections/  Hero, Capabilities, UseCases, Principles, Memory, SystemFlow,
               Stance, Services, Guides, Faq, FinalCta
  index.css               design tokens (@theme) and type/layout primitives
```

## Before publishing

`src/config/site.ts` ships with `email` and all `socials` empty, so nothing links to an
address that does not exist. Until they are filled in, the contact dialog only copies the
brief to the clipboard and the footer hides the email and social links. To deliver briefs
through a form service or API, replace `deliverBrief` in `src/components/ContactDialog.tsx`.
