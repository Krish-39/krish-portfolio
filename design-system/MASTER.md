# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> Canonical path: `design-system/MASTER.md`.

---

**Project:** Krish Ahir Portfolio  
**Generated:** 2026-08-23  
**Source:** UI/UX Pro Max `--design-system` + verified domain searches  
**Product type:** Developer / internship portfolio (recruiter-facing)  
**Stack (when implementing later):** Next.js, TypeScript, Tailwind CSS  
**Design Dials:** Variance 3/10 (Centered / Minimal) | Motion 2/10 (Subtle) | Density 3/10 (Spacious)

---

## How this system was chosen

CLI generation was run with Python 3 via `.cursor/skills/ui-ux-pro-max/scripts/search.py`.

1. **First query** `developer portfolio professional minimal` matched **Minimalism & Swiss Style** and a technical palette, but the landing pattern was **FAQ / Documentation** (wrong product).
2. **Retry** `portfolio personal showcase professional` kept Swiss style and a light monochrome+blue palette, but typography fell through to **Caveat + Quicksand** (too casual for recruiters).
3. **Applied persist query** `resume cv professional` (dials 3 / 2 / 3) produced the **Resume / CV Builder** navy palette, Swiss style, and professional sans pairing — aligned with an internship-seeking site.

Verified domain searches then corrected layout and type without abandoning the persisted tokens:

| Concern | Query | Domain | Verified match | Applied as |
|---|---|---|---|---|
| Product | `personal portfolio` | product | Portfolio/Personal → Swiss + storytelling; avoid Brutalism / Aurora | Swiss visual language; recruiter IA, not motion-theatre |
| Layout | `portfolio grid showcase` | landing | **Portfolio Grid** (Hero name/role → project grid → about → contact) | Primary page pattern |
| Type | `geometric modern portfolio` | typography | **Geometric Modern:** Outfit + Work Sans | Heading/body override (see Typography) |
| Color | `saas professional navy` | color | Resume / CV Builder navy + blue + success green | Color tokens (persisted) |
| Style | `minimalism professional typography` | style | **Minimalism & Swiss Style** | Visual style |
| Motion | dial `--motion 2` | gsap | Subtle scroll reveal, 8–16px y, `power1.out` | Motion |
| A11y | `focus not obscured` / `error summary validation` | ux | WCAG 2.2 focus + form errors | Accessibility |
| Icons | `icon button accessible label` | icons | Phosphor primary, Heroicons fallback | Icons |
| Stack | `image optimization streaming` | nextjs | `next/image`, LCP `priority`, Suspense | Performance (later) |

**Why this direction:** Recruiters in Germany scan for name, role, location, internship date, projects, and contact in seconds. Swiss grid, navy (not AI purple), and restrained motion signal engineering quality. Green is reserved for **availability**, not decoration.

**Rejected from search results (do not use):** FAQ/docs landing; Product Demo + video hero; Bento as the main layout; Brutalism / Aurora / glassmorphism; Caveat/Quicksand; JetBrains Mono as the **display** face; OLED “code dark + run green” as the default theme.

---

## Positioning (content, not decoration)

- **Name:** Krish Ahir
- **Education:** BSc Computer Science (Software Engineering), University of Europe for Applied Sciences, 2024 – Present, Berlin, Germany
- **Positioning line:** Software Engineering Student
- **Supporting statement:** Building full-stack, AI-powered and cloud applications.
- **Location:** Berlin, Germany
- **Availability:** Available for internship from 1 September 2026
- **Supporting areas:** Full-Stack, AI / ML, Backend, Cloud, Data
- **Personality in UI:** curious, technical, practical, detail-oriented — shown through structure, project depth, and systems language, not slogans
- **No profile photo or avatar** in the main design (hero, nav, about, contact)
- **Languages:** German A1 only is confirmed here. Do **not** invent English, Hindi, or other proficiency levels. Add further languages only from Krish’s CV.

---

## Global Rules

### Color Palette

Persisted from UI/UX Pro Max **Resume / CV Builder** (`Professional navy + section accent + success green`).

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|--------|
| Primary | `#1E3A5F` | `--color-primary` | Nav wordmark, primary buttons, featured project frames |
| On Primary | `#FFFFFF` | `--color-on-primary` | Text/icons on primary |
| Secondary | `#2563EB` | `--color-secondary` | Links, interactive emphasis, tech-chip hover |
| On Secondary | `#FFFFFF` | `--color-on-secondary` | Text on secondary |
| Accent | `#16A34A` | `--color-accent` | **Availability** badge/dot only, not page chrome |
| On Accent | `#000000` | `--color-on-accent` | Text on accent fills |
| Background | `#F8FAFC` | `--color-background` | Page canvas (slate-50) |
| Foreground | `#0F172A` | `--color-foreground` | Body and headings |
| Card | `#FFFFFF` | `--color-card` | Cards, panels |
| Card Foreground | `#0F172A` | `--color-card-foreground` | Card text |
| Muted | `#E9EEF5` | `--color-muted` | Skill group wells, table stripes |
| Muted Foreground | `#475569` | `--color-muted-foreground` | Meta, dates, captions |
| Border | `#CBD5E1` | `--color-border` | Dividers, card edges |
| Destructive | `#DC2626` | `--color-destructive` | Form errors only |
| On Destructive | `#FFFFFF` | `--color-on-destructive` | Error button text |
| Ring | `#1E3A5F` | `--color-ring` | Focus ring |

**CTA mapping (override of “accent = every CTA”):**

- **Primary CTA** (View Projects): `--color-primary` / `--color-on-primary`
- **Secondary CTA** (Download CV): transparent fill, `--color-primary` 1.5px border, `--color-foreground` label
- **Tertiary** (GitHub, LinkedIn): text/icon links, `--color-secondary` on hover
- **Availability** (From 1 September 2026): `--color-accent` indicator + `--color-foreground` text

**Dark mode:** Style supports dark. If added later, invert surfaces (background `#0F172A`, card `#1E293B`, foreground `#F8FAFC`) and **re-measure contrast**. Do not ship dark by copying light hexes. Default implementation: **light**.

**Forbidden palettes:** purple/pink AI gradients (`#7C3AED` and relatives), neon, glassmorphism tints, rainbow skill bars.

### Typography

**CLI default for `resume cv professional`:** Poppins + Open Sans (Modern Professional).  
**Applied pairing (verified `--domain typography` `geometric modern portfolio`):** **Geometric Modern** — stronger, less “template SaaS” than Poppins, still recruiter-readable.

- **Heading font:** Outfit (300–700)
- **Body font:** Work Sans (300–700)
- **Mono (code, hashes, IDs only — not headlines):** `ui-monospace, SFMono-Regular, Menlo, monospace` or JetBrains Mono if a single extra family is justified
- **Mood:** geometric, modern, clean, balanced, contemporary
- **Google Fonts:** [Outfit + Work Sans](https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap)

**Implementation note:** This is a Next.js project, so the eventual implementation should use `next/font` optimization for Outfit and Work Sans rather than a CSS `@import` from Google Fonts.

**Type scale (spacious density):**

| Token | Size | Weight | Line-height | Use |
|-------|------|--------|-------------|-----|
| `--text-hero` | clamp(2.25rem, 4vw, 3.5rem) | 600 | 1.1 | Name only |
| `--text-h1` | clamp(1.75rem, 2.5vw, 2.25rem) | 600 | 1.2 | Section titles |
| `--text-h2` | 1.5rem | 600 | 1.25 | Featured project titles |
| `--text-h3` | 1.25rem | 500 | 1.3 | Card titles |
| `--text-body` | 1rem | 400 | 1.6 | Body (max ~65ch) |
| `--text-small` | 0.875rem | 400 | 1.5 | Meta, chips, nav |
| `--text-eyebrow` | 0.75rem | 500 | 1.4 | Labels, 0.08em tracking, uppercase sparingly |

**Do not:** oversized display type that wraps into three decorative lines; all-caps body; script/handwritten headings.

### Spacing Variables

*Density: 3/10 — Spacious (marketing/portfolio, not dashboard)*

| Token | Value | Usage |
|-------|-------|--------|
| `--space-xs` | `8px` / `0.5rem` | Tight gaps |
| `--space-sm` | `12px` / `0.75rem` | Icon + label |
| `--space-md` | `24px` / `1.5rem` | Card padding, chip rows |
| `--space-lg` | `48px` / `3rem` | Block gaps |
| `--space-xl` | `64px` / `4rem` | Section inner padding |
| `--space-2xl` | `80px` / `5rem` | Section vertical rhythm (tablet+) |
| `--space-3xl` | `96px` / `6rem` | Hero padding (laptop+) |

Horizontal page gutter: `1.25rem` (375px) → `2rem` (768px) → `max(2rem, calc((100% - 72rem) / 2))` with **max content width 72rem (1152px)** at 1440px. Do not stretch text to full 1440px.

### Radius, borders, shadows

Swiss style: **near-sharp**, borders over blobs.

| Token | Value | Usage |
|-------|-------|--------|
| `--radius-sm` | `4px` | Buttons, chips, inputs |
| `--radius-md` | `8px` | Cards, images |
| `--radius-lg` | `8px` | Do not escalate to 16–24px pills |
| `--shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.05)` | Optional chip |
| `--shadow-md` | `0 4px 6px rgba(15, 23, 42, 0.06)` | Resting card |
| `--shadow-lg` | `0 10px 15px rgba(15, 23, 42, 0.08)` | Featured hover only |
| `--shadow-xl` | none for UI | No hero glow |

Default cards: **1px `--color-border`**, `--shadow-md` optional. No glass, no gradient fills, no neon outlines.

---

## Layout / pattern

**Applied pattern:** Portfolio Grid (verified landing), not Product Demo.

**Recruiter scan path:** identity → availability → projects → proof (skills/education) → contact.

**Single-page section order:**

1. Hero  
2. About  
3. Featured Projects (NextFilm, Jaatland, AWS Cloud Web Application)  
4. More Projects (flexible grid; add cards without redesign)  
5. Technical Skills  
6. Education  
7. Currently Looking For  
8. Beyond the Code  
9. Contact  

**Grid:** 12-column mental model. Featured: 12 / 12 / 12 stacked on mobile; 12 or 7+5 / 5+7 alternating on ≥1024px. More projects: 1 col (375) → 2 (768) → 3 (1024+). Skills: grouped definition lists or labeled clusters, **never percentage bars**.

**Navigation:** Sticky top bar, `scroll-padding-top` = header height (focus not obscured). Links: Work, About, Skills, Education, Contact. Wordmark “Krish Ahir” → `#top`. Right cluster: GitHub, LinkedIn, Download CV. Mobile: disclosure button with `aria-expanded`, focus trap optional, Esc to close. No avatar.

---

## Component Specs

### Buttons

```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-family: inherit;
  transition: background-color 200ms ease, box-shadow 200ms ease;
  cursor: pointer;
  min-height: 44px;
}
.btn-primary:hover { background: #172e4c; }
.btn-primary:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 3px;
}

.btn-secondary {
  background: transparent;
  color: var(--color-foreground);
  border: 1.5px solid var(--color-primary);
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  transition: background-color 200ms ease, border-color 200ms ease;
  cursor: pointer;
  min-height: 44px;
}
.btn-secondary:hover { background: var(--color-muted); }
```

Ghost/text links for GitHub/LinkedIn: underline on hover, never emoji logos — official Simple Icons or Phosphor.

### Cards — not visually identical

**Shared:** `--color-card`, `--radius-md`, border, title, category eyebrow, 2–3 line description, tech chips, actions (GitHub / Live / Case study as available). Cards are links or contain clearly named links — no unlabeled clickable whole-card without accessible name.

| Variant | Visual | Use |
|---------|--------|-----|
| Featured A (NextFilm) | Large 16:10 media left/top, title overlay or adjacent, widest type | AI / recommendation flagship |
| Featured B (Jaatland) | Media right on desktop (alternate), slightly tighter copy | Commerce / full-stack |
| Featured C (AWS) | Architecture/diagram-forward, more muted media treatment | Cloud / systems |
| Standard | Equal-width grid, 4:3 or 16:10 thumb, smaller type | More projects |
| Compact | Text-forward, optional small thumb | Overflow / archive later |

Hover: `box-shadow: var(--shadow-lg)`; **no layout-shifting scale**. Cards remain complete without hover (titles and links visible).

**Project fields:** title, category, short description, technologies, image/visual, GitHub, live demo if any, case study if any.

**Featured categories:** NextFilm — AI-Powered Movie Recommendation System; Jaatland — Full-Stack E-Commerce Web Platform; AWS Cloud Web Application — Highly Available and Scalable Cloud Architecture.

**More projects:** StockMart; Heart Attack Risk Prediction; Secure Network Order System / IT Security; Netflix Sentiment Analysis; Car Modification Business Database; GUI Redesign.

### Tech chips

Muted background, `--text-small`, `--radius-sm`, no neon. Group by project; do not dump every skill on every card.

### Skills

Logical groups only — **no bars, rings, or fake percentages:**

- Programming: Python, SQL, JavaScript, TypeScript, Java  
- Frontend: React, Next.js, HTML, CSS, TailwindCSS  
- Backend: Node.js, REST APIs  
- Data & Analytics: PostgreSQL, Tableau, Data Cleaning, Data Visualization  
- AI / Machine Learning: Machine Learning  
- Cloud: AWS, EC2, RDS, VPC, Load Balancing, Auto Scaling  
- Tools: Git, GitHub  

### Inputs (contact later)

16px minimum text (iOS zoom). Focus: border `--color-ring` + 3px ring at 20% opacity. Errors: inline + optional summary (`role="alert"`, focus heading after failed submit).

### Icons

Phosphor outline, one weight (regular), token sizes (16 / 20 / 24). Decorative: `aria-hidden="true"`. Icon-only: accessible name. No emoji as UI icons.

---

## Section guidance

### Hero

Immediate facts, no photo:

- Krish Ahir  
- Software Engineering Student  
- Building full-stack, AI-powered and cloud applications.  
- Berlin, Germany  
- Available for internship from 1 September 2026 (accent marker)  
- Primary: View Projects (`#projects`)  
- Secondary: Download CV  
- GitHub, LinkedIn  

Typography: name `--text-hero`; positioning `--text-h3` or large body; meta `--text-small`. Whitespace over ornament. No 3D, no gradient mesh, no looping Lottie.

### About

Short, practical, systems-curious. Connect education (UE, Berlin) to internship goal. No avatar.

### Featured / More projects

Projects are the product. Featured = larger, alternating, distinct variants. More = flexible grid. New projects = new cards, same tokens.

### Education

Degree, university, dates, city. Quiet, CV-accurate.

### Currently Looking For

Available for internship from 1 September 2026. Supporting areas include Full-Stack, AI / ML, Backend, Cloud, and Data. Recruiter-plain language. Reuse accent for availability, not a second hero.

### Beyond the Code

Cars, driving, learning how technologies and systems work (web, cloud). **Professional curiosity**, not a meme blog. One restrained visual motif (e.g. line-diagram / typographic aside) if needed — not a car gallery or racing aesthetic.

### Contact

Strong close: Email, LinkedIn, GitHub, Download CV. Repeat availability. Mailto or form; if form, follow error-summary UX.

---

## Interaction / animation

**Dial:** Motion 2/10 Subtle. **Key effects (Swiss):** 200–250ms hover, sharp hierarchy, fast load.

**Preferred:** CSS `transition` on color, border, shadow, opacity. Optional CSS `@media (prefers-reduced-motion: no-preference)` fade-up 8–16px / 300–400ms. **Do not add GSAP/ScrollTrigger** unless a later brief requires it. If used, skip under `prefers-reduced-motion` and never leave SEO content `opacity: 0` without a no-JS fallback.

**Do:** hover feedback on links/buttons/cards; visible `:focus-visible`; pressed states without layout jump.  
**Don’t:** parallax, magnetic cursor, SplitText, page-transition theatre, auto-rotating carousels, pulse CTAs.

---

## Responsive behavior

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | 375px | Single column; stacked featured; hamburger nav; 44px targets; hero CTAs full-width stack |
| Tablet | 768px | 2-col more-projects; featured media+copy; expanded nav if space |
| Laptop | 1024px | 3-col more-projects; alternating featured; sticky nav |
| Desktop | 1440px | Same grid, centered 72rem; do not inflate type to fill the screen |

Test 375 and landscape. No horizontal scroll. Sticky header must not cover focus (`scroll-padding-top`).

---

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section` with headings, `footer`
- Heading order: one `h1` (name or site title); sections `h2`; cards `h3`
- Text contrast ≥ 4.5:1; UI components/graphics ≥ 3:1
- Visible focus; do not use `outline: none` without a replacement ring
- Keyboard: skip link, all actions reachable, mobile menu Esc
- `prefers-reduced-motion: reduce` → instant final states
- Images: meaningful `alt`; decorative `alt=""`
- Icon buttons named; decorative icons `aria-hidden`
- Color not the only status cue (availability = text + dot)
- Sticky UI must not fully obscure focus (WCAG 2.2 Focus Not Obscured)
- Forms: labels, `aria-describedby` errors, summary after submit

---

## Performance (implementation later)

- `next/image`; `priority` only on LCP (likely hero or first featured)
- No extra animation libraries by default
- Fonts: `display=swap`; subset if possible
- Optimize project images; no autoplay video in hero
- Minimal client JS: nav disclosure + reduced-motion-safe CSS

---

## UX guidelines

- Recruiter time-to-signal &lt; 10s: name, stack, Berlin, Sept 2026, projects, CV
- Proof over adjectives; technologies named on cards
- External links: GitHub/LinkedIn/demo `rel` as appropriate; indicate new tab in accessible name if `target="_blank"`
- CV download: real file, clear filename, working link
- Do not fake testimonials, metrics, or skill scores

---

## Anti-Patterns (Do NOT Use)

From CLI persist:

- ❌ No live preview of real work (projects must be concrete)
- ❌ Weak ATS/recruiter signals (hide dates, location, or CV)
- ❌ Decorative clutter

Additional:

- ❌ Generic purple/pink AI gradients  
- ❌ Excessive glassmorphism, neon, 3D, or animation  
- ❌ Fake skill percentage bars  
- ❌ Meaningless oversized typography  
- ❌ Emoji as primary icons  
- ❌ Profile photo / avatar as a hero device  
- ❌ Template “developer portfolio” tropes (orbiting tech logos, particle JS)  
- ❌ Identical project cards for featured and archive  
- ❌ Layout-shifting hover scale  
- ❌ Invisible focus, missing `cursor-pointer` on controls  
- ❌ Instant state changes with no 150–300ms transition (unless reduced motion)

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons (Phosphor/Heroicons/Simple Icons)
- [ ] No profile photo in main UI
- [ ] `cursor-pointer` on clickable elements
- [ ] Hover transitions 150–300ms; no layout shift
- [ ] Text contrast 4.5:1; focus visible
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375, 768, 1024, 1440
- [ ] Content not hidden behind fixed nav
- [ ] No horizontal scroll on mobile
- [ ] Internship date and Berlin visible in hero
- [ ] Featured vs more-projects hierarchy clear
- [ ] Skills grouped, no percentage bars
- [ ] Languages: German A1 only unless CV confirms more
