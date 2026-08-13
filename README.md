# 🚀 Nexcent - Modern Landing Page

![Nexcent Landing Page](public/images/hero_illustration.svg)

> A pixel-perfect, high-performance, and fully responsive landing page built with **Next.js 16 (App Router)** and **Vanilla CSS Modules**, based 1:1 on the Figma UI Design (*Minimal Landing Page Design | Community*).

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Clean Code & Performance](#-clean-code--performance)

---

## 🌟 Overview

**Nexcent** is a modern SaaS / Agency landing page designed for membership management platforms, community software, and national associations. 

This project strictly follows best practices in modern web development:
- **1:1 Figma Design Match**: Exact typography, colors, padding, and spacing (e.g. 41px logo gap in Testimonial Section).
- **Responsive Layout**: Fluid design tailored for Desktop, Tablet, Mobile (iPhone SE, Android), and Large screens.
- **Clean Code Architecture**: Zero dead code, modular CSS, component scoping, and 100% ESLint compliance.
- **Optimized Performance**: Next.js Image Optimization, lazy loading for below-the-fold assets, and zero preloading browser warnings.

---

## ✨ Key Features

### 🧩 Sections & Components
1. **Header / Navbar**:
   - Sticky navbar with brand logo icon.
   - Smooth navigation links (`Home`, `Service`, `Feature`, `Product`, `Testimonial`, `FAQ`).
   - Mobile hamburger menu drawer with smooth toggle state.
2. **Hero Section**:
   - Headline banner with high-contrast green accent (`#4CAF4F`).
   - Call-to-action `Register` button and modern vector illustration.
3. **Clients Section**:
   - Showcase row displaying 7 trusted client brand badges.
4. **Community Section**:
   - 3 feature cards (*Membership Organisations*, *National Associations*, *Clubs And Groups*) with custom icons and floating shadow.
5. **Unlock Section**:
   - Split-layout section highlighting platform capabilities with custom vector illustrations.
6. **Achievements Section**:
   - Key platform statistics grid (*2,245,341 Members*, *46,328 Clubs*, *828,867 Event Bookings*, *1,926,436 Payments*).
   - Icons align 100% straight vertically on mobile screens.
7. **Calendar Section**:
   - Detailed feature overview paired with vector calendar artwork.
8. **Testimonial Section**:
   - Customer testimonial quote from Tim Smith (*British Dragon Boat Racing Association*).
   - Tesla emblem avatar graphic.
   - Interactive 6 brand logo badges with active hover scale & `#E8F5E9` green background highlight.
   - Direct link to *"Meet all customers"*.
9. **Blog Section**:
   - 3 floating article cards with image wrappers and *"Readmore"* CTA links.
   - Optimized with `loading="lazy"` for zero browser preload warnings.
10. **CTA Banner**:
    - Full-width call-to-action section (*"Pellentesque suscipit fringilla libero eu"*).
11. **Footer**:
    - Multi-column footer layout (Company Info, Links, Support, Newsletter Form).
    - 4 interactive social media icon buttons (*Instagram*, *Dribbble*, *Twitter*, *YouTube*) with custom hover animations (`translateY(-4px)` & glow shadow).

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: Vanilla CSS Modules (`*.module.css`) & Global CSS Custom Properties (`:root` tokens)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google`
- **Linting & Code Quality**: ESLint

---

## 📁 Project Structure

```text
landingpage-zalde/
├── public/
│   └── images/                # Vector SVGs & PNG assets (clean & optimized)
├── src/
│   ├── app/
│   │   ├── globals.css        # Global CSS variables, reset, and layout container
│   │   ├── layout.js          # Root layout, metadata & fonts
│   │   ├── page.js            # Main home page assembling all section components
│   │   └── page.module.css    # Page layout wrapper styles
│   └── components/
│       ├── layout/
│       │   ├── Navbar.jsx
│       │   ├── Navbar.module.css
│       │   ├── Footer.jsx
│       │   └── Footer.module.css
│       └── sections/
│           ├── HeroSection.jsx & module.css
│           ├── ClientsSection.jsx & module.css
│           ├── CommunitySection.jsx & module.css
│           ├── UnlockSection.jsx & module.css
│           ├── AchievementsSection.jsx & module.css
│           ├── CalendarSection.jsx & module.css
│           ├── TestimonialSection.jsx & module.css
│           ├── BlogSection.jsx & module.css
│           └── CtaBanner.jsx & module.css
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18.17.0 or higher) installed on your system.

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd c:\xampp\htdocs\landingpage-zalde
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```text
   http://localhost:3000
   ```

---

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Builds the optimized production bundle |
| `npm run start` | Starts the production server |
| `npx eslint .` | Runs ESLint to check for code quality and style issues |

---

## 🎯 Clean Code & Performance

- **0 ESLint Errors & Warnings**: Validated with `npx eslint .`.
- **Fast Production Build**: Compiles statically in ~1.2 seconds.
- **Zero Preload Warnings**: All images use appropriate loading strategies (`loading="lazy"` for below-the-fold content).
- **Responsive & Accessible**: Fully usable across screen sizes with semantic HTML markup.

---

Created with ❤️ for **Nexcent Landing Page**.
