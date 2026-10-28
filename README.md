# Krish Ahir — Portfolio

My personal portfolio: who I am, the projects I've built, my skills and education, and a way to get in touch. Built with Next.js 16, React and TypeScript.

## Sections

- **Hero** with a project radar that links straight into each case study
- **Projects**: case studies with my contribution, objective, approach, what I learned, and GitHub / live-demo links, filterable by area
- **Skills** and **Education**
- **Contact** form (opens your mail client with the message pre-filled) and a downloadable CV

## Projects featured

| Project | What it is | Code | Live |
| --- | --- | --- | --- |
| NextFilm | AI-assisted movie discovery (React, Firebase, Gemini) | [repo](https://github.com/Krish-39/AI_SE04_NextFilm) | [demo](https://nextfilm-84dc1.web.app) |
| Jaatland | Clothing storefront (Next.js, TypeScript) | [repo](https://github.com/Krish-39/Jaatland-Project) | [demo](https://store.krriss.cloud) |
| StockMart | Stock tracking web app and Flutter app | [repo](https://github.com/Krish-39/StockMart) | |

Plus cloud deployment, database design, ML and IT-security coursework projects.

## Where the content lives

All text is data, not markup, so updating the site means editing two files:

- `src/data/profile.ts`: name, bio, availability, email, social links, skills, education
- `src/data/projects.ts`: every project card and case study

The visual rules (colors, type, spacing, components) are documented in `design-system/MASTER.md`, with page-specific overrides in `design-system/pages/`.

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
