ZENJI Website – Software Requirements Specification (SRS)
1. Project Overview
Project Goal:
Build a dark-themed, anime-inspired streetwear ecommerce website for ZENJI, capturing a futuristic cyberpunk aesthetic with a minimalist yet visually rich design.
Reference:
Use the provided ZENJI reference site for inspiration, not duplication.
2. Technology Stack
Frontend: React (with Vite), JavaScript
Styling: Tailwind CSS
Animation: Framer Motion (for section/element entrance, scroll reveal, modal, mobile menu, staggered appearance), Lenis (for smooth scrolling), CSS transitions/animations (for hover effects, marquee)
Icons: React Icons or Lucide React
Carousel: Swiper.js (optional, if needed)
Deployment: Vercel
Do NOT use: Next.js, TypeScript, Redux, backend, MongoDB, Firebase, authentication, payment gateway, APIs

3. Visual & Branding Requirements
Background: #050505, #080808, #0D0D0D (no pure white)
Primary Accent: Neon Green (#39FF14) – CTAs, active states, highlights, small labels, borders, glow
Secondary Accent: Neon Pink (#FF1493) – secondary highlights, hover states, collection accents, gradients
Text:
Primary: #F5F5F5
Secondary: #888888
Typography:
Headings: Space Grotesk, Rajdhani, or Orbitron
Body: Inter
Aesthetic:
Dark, minimal, bold, with occasional neon accents. 90% dark, 5% green, 5% pink. Never feel like a gaming or children’s anime site.

4. Homepage Structure
In this order:

Announcement Bar (scrolling, small, topmost, CSS-animated)
Navbar (minimal, desktop and mobile w/ hamburger)
Hero (large visual, headline, call-to-action, product image, subtle neon)
Marquee (moving branded text, neon borders)
Featured Collections (3–4 visually rich collection cards, animated on hover)
Latest Drops (main product grid, 3–4 columns responsive)
Brand Story/Manifesto (typographic, short, animated entry)
Newsletter/CTA (prominent, clear call-to-action)
Footer (very dark, minimal, links, socials, copyright)
5. Functional Requirements
5.1. General
Responsive UI (works from 1920px to 390px)
Highly polished, smooth animations
Clean React component structure (see section 7)
5.2. Announcement Bar
Top of page, looping horizontal scroll, CSS only
5.3. Navbar
Desktop: Minimal layout w/ logo left, links, cart icon right
Mobile: Hamburger menu triggers fullscreen overlay
5.4. Hero Section
Bold heading
Brief description
CTA button (SHOP NOW)
Prominent product/model image
Subtle neon glow(s)
Small decorative/scroll-to-explore element
Staged, cinematic entry animations
5.5. Marquee
Looping text (ZENJI • ANIME STREETWEAR • ...)
Neon border(s)
Continuous movement
5.6. Featured Collections
3–4 collection cards, each with:
Card title
Visual/image
‘View’ arrow
Animated hover: image zoom, neon on border, moving text
Use Framer Motion
5.7. Latest Drops
Product grid:
Use data-driven mapping from /src/data/products.js
Cards: image, name, price, badge
Responsive columns (desktop/tablet/mobile)
Hover: image zoom, “VIEW PRODUCT →” neon
Clicking opens a Quick View modal with product details and frontend-only add to cart
5.8. Brand Story/Manifesto
Large, minimal, impactful typography
Copy: “We don’t follow trends. We create our own story.” etc.
Animated lines (reveal up, glow)
5.9. CTA Section
Large heading (e.g., “Ready to write your story?”), prominent SHOP button
Neon gradient highlight
5.10. Footer
Very dark
Zenji logo
Main links: Shop, Collections, Lookbook
Socials: Instagram, TikTok, Contact
Year/copyright
(Optional) neon accent line
6. Data/Sample Content
Example product structure in /src/data/products.js
id, name, price, category, image, badge (e.g., "NEW")
7. Component Structure
Project directories/files:



src/
 ├─ assets/
 │   ├─ hero/
 │   ├─ products/
 │   └─ collections/
 ├─ components/
 │   ├─ AnnouncementBar.jsx
 │   ├─ Navbar.jsx
 │   ├─ Hero.jsx
 │   ├─ Marquee.jsx
 │   ├─ Collections.jsx
 │   ├─ CollectionCard.jsx
 │   ├─ LatestDrops.jsx
 │   ├─ ProductCard.jsx
 │   ├─ ProductModal.jsx
 │   ├─ Manifesto.jsx
 │   ├─ CTA.jsx
 │   └─ Footer.jsx
 ├─ data/
 │   └─ products.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
8. Non-Functional Requirements
Performance: Site must load quickly; page-load animation <1.5s
Accessibility: Sufficient color contrast, readable font sizes, alt text on key images
Code Quality:
Modular React components
No overlong files/components
Data-driven product rendering
Images:
High-res, consistent style, no watermarks
No random anime/GIFs or low-quality images
9. Out of Scope
Backend/server logic
Authentication
Checkout/payment
API integration
More than one product/collection page (focus only on homepage)
10. Milestones
Project setup & repo structure (0.5d)
Core layout and global styles (0.5d)
Announcement bar, navbar, and hero section (0.5d)
Marquee, collections, and latest drops (1d)
Manifesto, CTA, footer, modals (1d)
Responsive tweaks & QA (0.5d)
Polishing, refactor, deploy (0.5d)