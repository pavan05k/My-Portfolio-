# Pavan Mareed – Developer Portfolio

React + Vite + Tailwind CSS v4 + Framer Motion + Lucide icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build
```

## Things you need to fill in (all in `src/data.js`)

Anything set to `PLACEHOLDER` renders as a muted button with a "Link not added yet" tooltip and does nothing on click, so no broken links ever reach visitors.

| What | Where in `src/data.js` |
| --- | --- |
| LinkedIn URL | `links.linkedin` |
| GitHub + Live Demo link per project | `projects[i].github`, `projects[i].demo` |
| Project screenshots | `projects[i].image` (put the image in `/public`, e.g. `'/travel.png'`). Until then an abstract preview is shown. |
| Certificate links | `certifications[i].link` |
| Resume | Place your PDF at `public/Pavan_Mareed_Resume.pdf` (or change `links.resume`) |

Also update in `index.html`: `og:url` and `og:image` (a 1200×630 image) once you know your deployed URL.

## Contact form

Validation runs client-side. To send real emails:

1. Create a free account at https://www.emailjs.com, add an email service and a template using the variables `from_name`, `from_email`, `subject`, `message`, `to_email`.
2. Copy `.env.example` to `.env` and fill in the three `VITE_EMAILJS_*` values.
3. Rebuild / restart. On Vercel/Netlify, add the same variables in the project settings.

Without these values the form does **not** claim to send anything: it opens the visitor's email app with the message pre-filled and says so.

## Deploy

`npm run build`, then upload `/dist` to Vercel, Netlify, Cloudflare Pages or GitHub Pages (for GitHub Pages in a sub-path, set `base` in `vite.config.js`).

## Structure

```
src/
  data.js            ← all content & links
  App.jsx
  hooks/             ← useTheme, useActiveSection, useTyping
  components/        ← Navbar, Hero, About, Skills, Projects, Education,
                       Achievements, Certifications, Leadership, Contact, Footer, …
    ui/              ← Reveal, Tilt, Counter, TechIcon, SocialIcons, LinkButton
```
