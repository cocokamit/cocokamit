# heherson.dev — Portfolio of Heherson A. Amit

An interactive, multi-page portfolio for **Heherson A. Amit**, a software engineer and web developer from Cebu, Philippines.
Built with **React 18 + Vite**, **Three.js** (via React Three Fiber), **Framer Motion** and **Lenis** smooth scrolling.

## Run

```bash
npm install
npm run dev       # http://localhost:5173 (also on your LAN for phone testing)
npm run build     # production build in dist/
npm run preview   # serve the build
```

Deploy `dist/` to Vercel, Netlify or Cloudflare Pages. SPA rewrites are already set (`vercel.json`, `public/_redirects`).

## Pages

| Route | What's on it |
| --- | --- |
| `/` | 3D hero (a laptop that types code; click it to open/close the lid), client marquee that speeds up with scroll, count-up stats, a pinned horizontal-scroll project rail, scroll-lit statement, services |
| `/work` | All 14 projects with animated filter pills (Web / Mobile / Desktop / Enterprise), tilt + spotlight cards |
| `/work/:slug` | Case study: screenshot gallery in browser or phone frames, lightbox, impact numbers, story, source link, next project |
| `/about` | Portrait, story, experience timeline that draws itself as you scroll, values |
| `/skills` | Brand-coloured icon cloud plus skill cards with animated proficiency rings |
| `/future` | 3D planet with future skills orbiting it (hover a label to pause its orbit), roadmap 2026–2029, future projects, "currently learning" bars |
| `/contact` | Project-builder form (EmailJS, with a mailto fallback), copy-email button, live Cebu clock |

## Interaction details

- **Pointer:** a custom cursor with a dot and a trailing ring. It grows over links and shows a contextual label ("View", "Open", "Copy", "Send") over anything with `data-cursor`. It turns pink over the 3D laptop and hides on touch devices.
- **Motion:** curtain page transitions, masked word reveals, magnetic buttons, 3D tilt cards with a pointer spotlight, text scramble in the nav, a circular-reveal mobile menu, a scroll progress bar and film grain.
- **Icons:** brand logos come from `react-icons` (Simple Icons, Tabler, Devicons). Hand-drawn duotone icons for everything else are in `src/components/Icon.jsx`.
- **Performance and accessibility:** pages and 3D scenes are lazy-loaded, canvases stop rendering when off-screen, and screenshots are WebP. The site respects `prefers-reduced-motion`, has a skip link and keeps focus outlines visible.

## Editing content

Every word is in **`src/data/content.js`**: profile, stats, clients, experience, skills, projects, roadmap, future projects and future skills.
To add a project, add screenshots to `src/assets/work/<name>/`, import them at the top of the file and add an entry to `projects`.

## Inspiration

- [Bruno Simon](https://bruno-simon.com): playful, explorable 3D portfolio
- [Brittany Chiang](https://brittanychiang.com): clear developer portfolio structure
- [Awwwards portfolio winners](https://www.awwwards.com/inspiration_search/winner_category_portfolio/): page transitions, pinned scroll, cursor work
- Locomotive and Studio Freight agency sites: smooth scroll and scroll-driven reveals
- Linear and Vercel: dark UI, hairline borders and restrained accents
