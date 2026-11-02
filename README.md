# Krish Ahir — Portfolio

My personal portfolio: who I am, the projects I've built, my skills and education, and a way to get in touch. Built with Next.js 16, React and TypeScript.

## Sections

- **Hero**: name set in Michroma over a cursor-reactive dot field, a car-brochure style spec sheet, and a quick fact strip
- **About**: who I am, interests, focus areas and languages
- **Projects**: screenshots, my role, the data flow, and a case-study dialog (problem, what I built, the tradeoff, what I'd do next), filterable by area
- **Skills** as a spec table, **Deep-dives** (long-form write-ups), **Education**
- **Contact**: opens your mail client with the message pre-filled, plus copy-email and a downloadable CV
- **⌘K / Ctrl+K** command menu to jump to any section, case study, demo or link

## Projects featured

| Project | What it is | Code | Live |
| --- | --- | --- | --- |
| NextFilm | AI-assisted movie discovery (React, Firebase, Gemini) | [repo](https://github.com/Krish-39/AI_SE04_NextFilm) | [demo](https://nextfilm-84dc1.web.app) |
| Jaatland | Clothing storefront (Next.js, TypeScript) | [repo](https://github.com/Krish-39/Jaatland-Project) | [demo](https://store.krriss.cloud) |
| StockMart | Stock tracking web app and Flutter app | [repo](https://github.com/Krish-39/StockMart) | |

Plus cloud deployment, database design, ML and IT-security coursework projects.

## Where the content lives

All text is data, not markup, so updating the site means editing two files:

- `src/data/profile.ts`: name, bio, availability, the hero spec sheet and "NOW" line, about text, skills, education
- `src/data/projects.ts`: every project card and case study

Visual tokens (black-and-white palette, fonts) live at the top of `app/globals.css`. Fonts are self-hosted under `app/fonts/` (SIL OFL, see `app/fonts/OFL.txt`), so builds never need to reach Google Fonts. `design-system/` holds the original design notes and predates this redesign.

## Run locally

Prerequisites: Node.js 20.9+ and npm.

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## License

Code: [MIT](LICENSE). The CV and personal content (bio and project write-ups) are not covered by the license.
