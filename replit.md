# NewsDelivered.com

## Overview

NewsDelivered.com is a marketing website for an email newsletter management service. The company offers end-to-end newsletter creation, delivery, and optimization for businesses. The site serves as both a marketing landing page and a platform with interactive tools including a newsletter builder demo, RSS feed channel browser, and client example showcases.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend-Only SPA
This is a client-side single-page application with no backend API or database. All data is either static, fetched from external RSS feeds, or generated client-side.

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (dev server on port 5000, host 0.0.0.0)
- **Routing**: React Router DOM with client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll reveals, hover effects, and transitions
- **State Management**: React Query (@tanstack/react-query) for RSS feed caching, React useState for local component state
- **Charts**: Recharts (used in PainSolution component for 80/20 pie chart)
- **Font**: Poppins (Google Fonts)

### Path Aliases
The `@/` alias maps to `./src/` directory. All imports use this pattern (e.g., `@/components/ui/button`).

### Production Serving
A simple Node.js HTTP server (`server.js`) serves the built `dist/` directory with SPA fallback (all routes fall back to `index.html`). It runs on port 80 (or `process.env.PORT`).

### Page Structure
- `/` — Marketing landing page with Hero, PainSolution, HowItWorks, Pricing, ServicesOverview, FinalCTA sections
- `/services` — Detailed services page
- `/channels` — RSS feed channel browser (categories like Daily News, Health & Wellness, etc.)
- `/channels/:channelId` — Sources within a channel
- `/channels/:channelId/sources/:sourceId` — Individual RSS feed view
- `/tools` — Tools overview page
- `/demo` — Interactive newsletter builder with brand scraping, content generation, and live preview
- `/example/:clientId` — Client newsletter showcases (e.g., ClearCardio, Harik Thompson CPAs)
- `/contact` — Calendly booking integration
- `/clearcardio` — Embedded iframe to external Lovable app
- Blog routes under `/example/harikthompsoncpas/blog/*`

### Component Architecture
- **Layout components**: `Header`, `Footer` — used across all pages
- **Marketing sections**: `Hero`, `PainSolution`, `HowItWorks`, `Pricing`, `FinalCTA`, `ServicesOverview`, `SocialProof`, `HomeFAQ`, etc.
- **UI primitives**: Full shadcn/ui component library in `src/components/ui/`
- **Newsletter builder**: Multi-component system in `src/components/newsletter-builder/` with `EditorSidebar`, `NewsletterPreview`, `UrlInput`, `BrandTab`, `ContentTab`, `FeaturesTab`
- **Blog**: `BlogLayout` component for article pages
- **Custom hooks**: `use-mobile` (responsive breakpoint), `use-toast` (notification system)

### Data Layer
- **Channel/RSS data**: Static TypeScript data in `src/data/channelSources.ts` defining RSS feed URLs organized by channel categories
- **RSS parsing**: Client-side XML parsing via `src/utils/rssParser.ts` using multiple CORS proxy fallbacks (isomorphic-git, allorigins) with 60-minute in-memory caching
- **Demo persistence**: Newsletter builder state saved to localStorage under key `newsdelivered_demo`
- **External API**: The demo newsletter builder calls `https://stellabot.app` for brand/website scraping enrichment

### Design System
- HSL-based CSS custom properties defined in `src/index.css`
- Primary color: Blue (221° hue)
- Custom variants: `hero` button variant, `shadow-elegant`, `shadow-glow` utilities
- Gradient classes: `bg-gradient-hero`, `bg-gradient-elegant`
- Dark mode support configured but primarily light-themed

## External Dependencies

- **Calendly**: Contact page links to `https://calendly.com/stephencolwell` for booking consultations
- **StellaBot API** (`https://stellabot.app`): Used by the Demo page's brand scraping feature to enrich brand data from URLs
- **CORS Proxies**: RSS feed fetching uses multiple proxy services as fallbacks:
  - `cors.isomorphic-git.org`
  - `api.allorigins.win`
  - `allorigins.hexlet.app`
  - `api.allorigins.workers.dev`
- **Google Fonts**: Poppins font family loaded via CDN
- **External iframe**: ClearCardio page embeds `https://newsdelivered-clearcardio.lovable.app/`
- **No database**: The application has no database. All data is static or fetched from external feeds at runtime.
- **No authentication**: The site is fully public with no auth system.