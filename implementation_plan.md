# Build NextLeap Agency Frontend

We will build the NextLeap IT Solutions frontend based on the provided UI image and the "Refined Agency Homepage" Stitch design. The focus will be on pixel-perfect implementation of the layout, animations, and Tailwind styling.

## User Review Required

> [!IMPORTANT]
> The project will be initialized in the current directory using Vite + React + TS, and we will configure Tailwind v4 according to your global rules. I'll ensure we do not use PostCSS and instead use the Vite Tailwind plugin. 

## Open Questions

> [!WARNING]
> 1. **Project Directory:** Should I initialize the Vite project directly inside the `NextLeap` folder (which currently has the PRD and logo), or should I create a subfolder like `frontend` to keep it organized?
> 2. **Icons:** The Stitch HTML uses Google Material Symbols via a CDN link. Should we stick to that, or would you prefer I install a modern icon library like `lucide-react`?
> 3. **Fonts:** The design uses Geist and Inter. I will import these from Google Fonts/Fontshare. Let me know if you have local font files you'd prefer to use.

## Proposed Changes

We will systematically set up the project and recreate the UI from top to bottom.

### Project Setup

#### [NEW] Vite + React + TS Initialization
We will run `npx create-vite@latest ./ --template react-ts` (or in a subfolder based on your preference).
We will then run `npm install` followed by `npm install tailwindcss @tailwindcss/vite`.

#### [MODIFY] `vite.config.ts`
We will integrate the `@tailwindcss/vite` plugin to eliminate the need for `postcss.config.js`.

#### [MODIFY] `index.html`
We will add Google Fonts (Inter, Geist, JetBrains Mono) and Material Symbols to the `<head>`.

#### [MODIFY] `src/index.css`
Replace all boilerplate with `@import "tailwindcss";` and inject the custom theme tokens (colors, fonts, radii) and CSS classes (e.g., `.gradient-btn`, `.fade-up`, `.bg-grid`) extracted from the Stitch HTML.

### Component Architecture

We will build the homepage by breaking it down into modular functional components.

#### [NEW] `src/components/Navbar.tsx`
Responsive navigation bar with the `NextLeap_logo.png`, links, and the CTA button.

#### [NEW] `src/components/HeroSection.tsx`
The main "Architecting the future of digital business" section, complete with the grid background, CTAs, avatar stack, and the animated dashboard graphic.

#### [NEW] `src/components/LogoCloud.tsx`
The "Trusted by innovative companies" section showing client logos.

#### [NEW] `src/components/MetricsSection.tsx`
The 4 bento-style metric cards (50+ Projects Delivered, 98% Client Satisfaction, etc.).

#### [NEW] `src/components/ProblemsWeSolve.tsx`
The asymmetric bento grid detailing "Systematic friction. Surgical solutions."

#### [NEW] `src/components/ServicesSection.tsx`
The "What We Do" section featuring the 6 core solutions in grid items with hover effects.

#### [NEW] `src/components/CaseStudySection.tsx`
The highlighted "FinTech Scale-Up" case study card.

#### [NEW] `src/components/ProcessSection.tsx`
The 5-step "Discover, Plan, Design, Build, Grow" process timeline.

#### [NEW] `src/components/InsightsSection.tsx`
The 3-column article/blog card grid.

#### [NEW] `src/components/Footer.tsx`
The standard bottom footer.

#### [MODIFY] `src/App.tsx`
Import and stack all components to assemble the complete, responsive homepage.

## Verification Plan

### Manual Verification
- Start the local dev server (`npm run dev`).
- Verify that the layout exactly matches the provided UI image on desktop and mobile.
- Verify that Tailwind classes and animations (like `fade-up`) are working as expected without PostCSS.
