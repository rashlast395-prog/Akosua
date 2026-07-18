# Kumi Ebenezer Tenkorang — Creative Designer Portfolio

A responsive, dark-mode-ready portfolio site for Kumi Ebenezer Tenkorang, a creative designer based in Accra, Ghana. Built with plain HTML, Tailwind CSS, and Alpine.js.

---

## Table of Contents

1. [Site Overview](#site-overview)
2. [File Structure](#file-structure)
3. [Pages & Routing](#pages--routing)
4. [Shared Architecture](#shared-architecture)
5. [Design System](#design-system)
6. [Interactive Features](#interactive-features)
7. [Media & Assets](#media--assets)
8. [Page-by-Page Breakdown](#page-by-page-breakdown)
9. [Data Synchronization](#data-synchronization)
10. [How to Edit](#how-to-edit)
11. [Browser Support](#browser-support)

---

## Site Overview

| Feature | Detail |
|---|---|
| **Name** | Kumi Ebenezer Tenkorang — Creative Designer |
| **Type** | Static multi-page portfolio |
| **Stack** | HTML5, Tailwind CSS (CDN), Alpine.js (CDN), Google Fonts |
| **Mode** | Light / Dark theme toggle |
| **Responsive** | Mobile-first, tested for mobile/tablet/desktop |
| **Hosting** | Any static host (GitHub Pages, Netlify, Vercel, etc.) |

---

## File Structure

```
Akosua/
├── index.html               # Home / hero + about + services + portfolio preview + testimonials + process + contact
├── projects.html            # All projects catalog with category filters and modal detail view
├── case-study.html          # Single project deep-dive page (?id= param)
├── blog.html                # Blog listing with category filter tabs
├── blog-article.html        # Single blog article page
├── README.md                # This file
└── img/
    ├── work 1.jpeg          # Bloom Naturals Identity project image
    ├── work 3.jpeg          # Bloom Brochure / Packaging project image
    ├── work 4.MP4           # Pulse Explainer animation video
    ├── work 5.PNG           # Aurora Monogram / Brand Identity image
    ├── work 6.PNG           # Vertex Wordmark image
    ├── work 7.jpeg          # Bloom Social Campaign image
    ├── work 8.png           # Profile/portrait image (hero, about, blog author)
    ├── work 9.MP4           # Event Recap video
    └── work 10.MP4          # Product Launch Film video
```

---

## Pages & Routing

| File | Purpose | Linked From |
|---|---|---|
| `index.html` | Homepage — hero, services, portfolio grid, testimonials, design process, contact | Site root, every nav link |
| `projects.html` | Filterable project catalog with modal detail popups | Nav "Work", index CTA buttons |
| `case-study.html` | Full case study for one project (`?id=1` through `?id=10`) | projects.html modal, moreProjects cards |
| `blog.html` | Blog listing with category filter tabs | Nav "Blog" |
| `blog-article.html` | Single featured blog article | blog.html featured card, article grid |

All pages share the same nav header and footer. Internal links use relative paths (`index.html`, `projects.html`, `blog.html`, `case-study.html?id=X`).

---

## Shared Architecture

### Common Head Pattern

Every HTML file includes:
- `viewport` meta tag for responsive behavior
- Tailwind CSS via CDN: `https://cdn.tailwindcss.com`
- Alpine.js via CDN: `https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js`
- Google Fonts: **PT Sans** (headings/display) and **DM Sans** (body)

### Tailwind Config

All pages configure the same custom Tailwind theme inline:

```javascript
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['PT Sans','sans-serif'],
        body: ['DM Sans','sans-serif']
      },
      colors: {
        accent: '#FF6B2B',
        'accent-light': '#FF8F5C'
      }
    }
  }
}
```

### Global CSS Utilities

Every page defines these core utility classes in its `<style>` block:

| Class | Purpose |
|---|---|
| `.pf` / `.photo-frame` | Image/video container with `overflow:hidden`, `object-fit:cover`, placeholder background |
| `.reveal` | Scroll-triggered fade-in animation (`opacity:0; translateY` → visible) |
| `.visible` / `.in` | Applied by IntersectionObserver when element enters viewport |
| `.d1`–`.d4` / `.reveal-delay-*` | Staggered animation delays for sequenced reveals |
| `.card-h` / `.project-card` / `.card` | Hover lift transition (`translateY(-3px/-4px)`) |
| `.nav-link` | Animated underline on hover/active |
| `.btn-primary` / `.shimmer` | Shimmer sweep animation on primary buttons |
| `.stag` | Skill tag hover border transition |
| `.nl` | Navigation link underline helper |
| `[x-cloak]` | Hides Alpine.js elements before hydration |
| `.prose-article` / `.prose-cs` | Typography styles for article/case study bodies |

---

## Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `accent` | `#FF6B2B` | Primary brand color — CTAs, active states, badges, progress bar |
| `accent-light` | `#FF8F5C` | Accent hover state |
| Dark bg | `zinc-950` | Page background in dark mode |
| Dark surface | `zinc-900` | Cards, sections in dark mode |
| Light bg | `white` | Page background in light mode |
| Light surface | `zinc-50` | Alternate sections in light mode |

### Typography

| Element | Font | Weight |
|---|---|---|
| `h1`–`h6` | PT Sans | 700 (bold) |
| Body text | DM Sans | 400 (regular) |
| Accent labels | DM Sans | 500 medium, uppercase tracking-widest |
| Hero heading | PT Sans | Bold, `text-5xl` → `text-7xl`, `leading-[1.05]` |
| Section headings | PT Sans | Bold, `text-4xl` → `text-5xl` |

### Spacing & Layout

- Max content width: `max-w-6xl` (`1152px`)
- Section padding: `py-24`
- Grid gap: `gap-6` (cards), `gap-12`–`gap-16` (hero split)
- Card radius: `rounded-2xl`
- Button radius: `rounded-full`
- Image radius: `rounded-3xl` (hero portrait)

---

## Interactive Features

### Dark Mode Toggle

Implemented on every page. Alpine.js stores preference in `localStorage` and respects `prefers-color-scheme` on first visit.

```javascript
dark: localStorage.getItem('theme')==='dark'
  || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
```

Toggle button in header switches between sun/moon SVG icons.

### Scroll Animations

Every page uses `IntersectionObserver` to add `.visible` to `.reveal` elements when they enter the viewport. Config varies slightly per page but typically:

```javascript
{ threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
```

### Nav Scroll Effect

Fixed nav starts transparent, gains `bg-white/90 backdrop-blur-md shadow-sm` after `scrollY > 20`.

### Mobile Menu

Hamburger button toggles `mobileMenu` Alpine state. Menu slides down with `x-transition`. Auto-closes on link click via `@click="mobileMenu=false"`.

### Lightbox (index.html + projects.html)

Clicking a portfolio image/video opens a full-screen overlay with:
- Black backdrop (`bg-black/80 backdrop-blur-sm`)
- Close button + click-outside-to-close
- Animated enter/leave transitions
- Supports both `type:'image'` and `type:'video'`

### Project Modal (projects.html)

Clicking any project card opens a centered modal (`z-[60]`) showing:
- Hero image/video with controls
- Category badge, title, overview
- Objective, Tools, Deliverables, Outcomes grids
- "Read the full case study" link to `case-study.html?id=X`

---

## Media & Assets

All media lives in `/img/` and is referenced via URL-encoded paths (spaces become `%20`):

| File | Type | Used In |
|---|---|---|
| `work 1.jpeg` | Image | projects.html — Bloom Naturals Identity |
| `work 3.jpeg` | Image | projects.html — Bloom Brochure / Packaging |
| `work 4.MP4` | Video | projects.html — Pulse Explainer |
| `work 5.PNG` | Image | index.html — Aurora Monogram; projects.html — Aurora Monogram |
| `work 6.PNG` | Image | projects.html — Vertex Wordmark |
| `work 7.jpeg` | Image | index.html — Bloom Social Campaign; projects.html — Bloom Social Campaign |
| `work 8.png` | Image | index.html — hero portrait + about section; blog-article.html — author avatar |
| `work 9.MP4` | Video | projects.html — Event Recap |
| `work 10.MP4` | Video | projects.html — Product Launch Film |

External images used in blog pages come from Unsplash (`images.unsplash.com`). Avatar images in testimonials come from `i.pravatar.cc`.

---

## Page-by-Page Breakdown

### index.html

**Sections:**
1. **Hero** — `id="hero"` — Two-column grid. Left: "Available for work" label, headline, description, CTAs, stats (30+ projects, 18+ clients, 4y experience). Right: portrait image (`work 8.png`). Lightbox modal for media.
2. **Services** — `id="services"` — 6 service cards: Graphic Design, Brand Identity, Motion Graphics, Video Editing, Social Media Design, Print Design.
3. **Portfolio** — `id="portfolio"` — 3-column grid of featured projects. Each card has an image/video thumbnail, category tags, title, description, and "View project" link. Lightbox-enabled.
4. **About** — `id="about"` — Two-column layout. Right: skills tags. Left: portrait + bio text.
5. **Software** — `id="software"` — 6 tool cards: Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, CapCut, Instagram Edit.
6. **Testimonials** — `id="testimonials"` — 3 client quote cards with star ratings, quotes, names, and roles.
7. **Process** — `id="process"` — 6-step numbered cards: Discover, Research, Develop Concepts, Design & Refine, Present for Feedback, Deliver Final Files.
8. **FAQ** — Referenced in mobile nav (`#faq`).
9. **Contact** — `id="contact"` — Linked from nav and CTAs.

**Alpine data:** `app()` — manages `dark`, `scrolled`, `mm` (mobile menu), `lb` (lightbox state).

### projects.html

**Sections:**
1. **Header** — Portfolio title, description, filter buttons (All, Logo Design, Brand Identity, Social Media, Motion Graphics, Video Editing, Print Design, Packaging).
2. **Project Grid** — 10 projects in a responsive 3-column grid. Each card shows video autoplay thumbnail or static image, category tags, title, description, and "View details" button.
3. **CTA Banner** — "Want your project here?" call-to-action.
4. **Media Lightbox** — Full-screen video/image viewer.
5. **Project Modal** — Detailed view with project metadata, video player, and case study link.

**Alpine data:** `projects()` — manages `dark`, `scrolled`, `mobileMenu`, `filter`, `modalOpen`, `selected`, `lb`, and the `allProjects` array (10 project objects).

**Project data schema:**
```javascript
{
  id: Number,
  title: String,
  category: String,         // 'logo' | 'brand' | 'social' | 'motion' | 'video' | 'print' | 'packaging'
  categoryLabel: String,    // Display name
  tags: [String],
  img: String,              // Image path (if no video)
  video: String,            // Video path (if present)
  year: String,
  desc: String,             // Short description for card
  overview: String,         // Full overview for modal/case study
  objective: String,
  tools: [String],
  deliverables: String,
  outcomes: String
}
```

### case-study.html

A dynamic single-page template that reads `?id=X` from the URL and renders the matching project from the `projects` array.

**Sections:**
1. **Project header** — Category badge, year, title, overview, metadata row (Category, Role, Year, Deliverables).
2. **Hero media** — Full-width video or image.
3. **Prose body** — Overview, Objective, Tools used, Deliverables, Outcomes, Process description, quote block, CTA.
4. **More projects** — 3 related project cards linking to other case studies.
5. **CTA banner** — "Got a similar project?"

**Alpine data:** `article()` — manages `dark`, `scrolled`, `mobileMenu`, `p` (current project), `moreProjects` (3 others excluding current).

### blog.html

**Sections:**
1. **Blog hero** — Title, description, filter tabs (All, Design, Dev, Freelance).
2. **Featured article** — Large card with image, category, date, title, excerpt, and "Read article →" link.
3. **Article grid** — 6 article cards in a 3-column grid. Each has an image, category tag, date, title, excerpt, and "Read more →" link.
4. **Pagination** — Page 1 active, pages 2-3 and ellipsis.

### blog-article.html

**Sections:**
1. **Article header** — Back link, category badge, date, title, excerpt, author bio (avatar + name + social share buttons).
2. **Hero image** — Full-width Unsplash image.
3. **Article body** — Rich prose with headings, paragraphs, lists, blockquotes, inline code, code blocks, horizontal rules.
4. **Related articles** — 3 related post cards.
5. **Reading progress bar** — Fixed orange bar at top of viewport tracking scroll position.

---

## Data Synchronization

The project and article data is duplicated across three files to keep each page self-contained:

| Data | Location |
|---|---|
| **10 projects** | `projects.html` → `allProjects[]` |
| **10 projects** | `case-study.html` → `projects[]` |
| **Blog content** | `blog.html` — hardcoded in article cards |
| **Blog content** | `blog-article.html` — hardcoded in prose |

To keep content in sync:
1. **Projects:** Update the project object in both `projects.html` and `case-study.html`. The `id` field is the single source of truth for linking.
2. **Blog:** Update the featured/article content in both `blog.html` and `blog-article.html` to match.
3. **Images:** Store new work files in `/img/` and reference them in both project data arrays.

---

## How to Edit

### Prerequisites
No build step or package manager required. All dependencies load from CDNs.

### Opening the site
Open `index.html` in any modern browser. For full functionality (Alpine.js reactivity), serve via a local HTTP server rather than `file://` protocol:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Then visit `http://localhost:8080`.

### Adding a new project
1. Add the media file to `/img/`
2. In `projects.html`, append a new object to `allProjects[]`
3. In `case-study.html`, append the same object to `projects[]`
4. Ensure the `id` is unique and referenced consistently

### Changing colors
Edit the Tailwind config block in any HTML file's `<head>`:
```javascript
colors: {
  accent: '#FF6B2B',
  'accent-light': '#FF8F5C'
}
```

### Changing fonts
Edit the Google Fonts `<link>` and the `fontFamily` block in the Tailwind config.

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with ES2017 support

Features requiring modern browsers: CSS custom properties, IntersectionObserver, CSS `backdrop-filter`, Alpine.js reactivity.
