# NextLeap IT Solutions: Development Execution Plan

## OVERVIEW
This document outlines the step-by-step execution plan to transform the single-page Vite/React skeleton into a dynamic, multi-page lead-generation website for NextLeap IT Solutions. The primary goal of every page is to drive users toward the Contact Us form[cite: 1].

---

## PHASE 1: Architecture & Routing (DO NOT TOUCH STYLING/ANIMATIONS YET)

**Task 1: Install Dependencies**
* Install `react-router-dom` to enable multi-page navigation.

**Task 2: Scaffold the Core Pages**
* Create a new folder at `src/pages`.
* Create five distinct, empty React components: `Home.tsx`, `Services.tsx`, `Packages.tsx`, `Content.tsx`, and `Contact.tsx`[cite: 1]. 
* Inside each file, render a simple full-screen `div` containing an `h1` with the page name.

**Task 3: Restructure App.tsx**
* Wipe the stacked landing page layout currently in `App.tsx`.
* Wrap the application in `<BrowserRouter>`.
* Set up the following exact routes: `/`, `/services`, `/packages`, `/content`, and `/contact`.
* **Crucial:** Move all existing sections (Navbar, HeroSection, LogoCloud, MetricsSection, ProblemsWeSolve, ServicesSection, Footer) strictly inside the newly created `Home.tsx` component to preserve the existing UI.

**Task 4: Wire the Navigation**
* Open the global `Navbar` component.
* Replace all standard HTML `<a>` tags with `Link` components from `react-router-dom`.
* Ensure the navigation links exactly to the five configured routes.
* Ensure the NextLeap logo (the teal-to-blue gradient) is prominent in the header and links back to `/`[cite: 1].

---

## PHASE 2: Global Elements & Homepage Revamp

**Task 1: Homepage Optimization**
* Update the Hero section to clearly state what NextLeap does and who the target audience is (business clients evaluating an IT partner)[cite: 1].
* Ensure the primary Call-To-Action (CTA) explicitly drives users to the Contact Us page[cite: 1].
* Add `npx shadcn@latest add @react-bits/laser-flow-TS-TW` and apply the `Laser Flow` animation strictly as the background for the Home Hero section. 
* Replace the generic "ProblemsWeSolve" grid with the `Magic Bento` component from ReactBits.

**Task 2: Homepage Services Summary**
* Locate the existing placeholder `ServicesSection`.
* Delete the 6 template services and replace them with a summary grid of the 9 actual services: Web Development, App Development, Ads (Meta, Facebook), Business Consulting, Data, Basic IT Training, Automation, Video Editing, and SEO, GEO, AEO[cite: 1].
* Apply the ReactBits `Spotlight Card` component to these 9 cards.
* Ensure each card links to its specific section on the `/services` page.

---

## PHASE 3: Services & Packages Pages

**Task 1: Build the Services Page (`/services`)**
* Create 9 dedicated, distinct sections for each of the services: Web Development, App Development, Ads (Meta, Facebook), Business Consulting, Data, Basic IT Training, Automation, Video Editing, and SEO, GEO, AEO[cite: 1].
* Give each section a unique ID so it can be anchored/linked to directly[cite: 1].
* Integrate the ReactBits `Line Sidebar` component as a scroll-progress dot navigation down the left or right side of the page.
* Add a CTA at the end of every individual service section directing the user to the Contact Us page[cite: 1].

**Task 2: Build the Packages Page (`/packages`)**
* Design 3 to 4 package tier cards based on scope and inclusions (e.g., Starter, Growth, Partner)[cite: 1].
* Map each package clearly to the specific services it includes[cite: 1].
* **Strict Constraint:** Do NOT display pricing on this page under any circumstances[cite: 1].
* Apply the ReactBits `Star Border` component exclusively to the "Recommended" or "Featured" tier card.
* Ensure the CTA for every package routes directly to the Contact Us page for a custom quote[cite: 1].

---

## PHASE 4: Content Hub & Lead Capture

**Task 1: Build the Content Hub (`/content`)**
* Create a grid listing page for articles and insights[cite: 1].
* Build a clean, text-and-image-focused individual article template for future blog posts[cite: 1].
* Keep animations strictly minimal on this page (fade-in only) to prioritize readability.

**Task 2: Build the Contact Us Page (`/contact`) (CRITICAL PATH)**
* Build the primary lead capture form.
* Include the following mandatory fields: Name, Business Name, Email, Phone, Service(s) of interest, and Message[cite: 1].
* Implement the ReactBits `Stepper` component to break the form into 3 steps: (1) Info, (2) Services, (3) Message.
* Include a hidden "honeypot" field for basic, frictionless spam protection[cite: 1].
* Display direct contact details (Email/Phone) alongside the form[cite: 1].
* Build a clear "Success/Confirmation" UI state that replaces the form upon successful submission[cite: 1].

---

## PHASE 5: Polish, Performance, & SEO

**Task 1: Micro-Interactions**
* Add the ReactBits `Click Spark` animation to all primary CTA buttons site-wide.
* If rendering on desktop, implement the `Target Cursor` component. 

**Task 2: SEO Fundamentals**
* Because SEO/GEO/AEO is a core service, ensure fast page load times and Core Web Vitals are respected[cite: 1].
* Add `react-helmet-async` to manage per-page meta titles and descriptions.
* Ensure semantic HTML (H1, H2, H3) is used logically across all newly created pages[cite: 1].