# 🚀 Nexcent - Modern Landing Page

![Nexcent Landing Page](public/images/hero_illustration.svg)

> A pixel-perfect, high-performance, and fully responsive landing page built with **Next.js 16 (App Router)** and **Vanilla CSS Modules**, based 1:1 on the Figma UI Design (*Minimal Landing Page Design | Community*).

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Pixel-Perfect Figma Audit](#-pixel-perfect-figma-audit)
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

## 🎯 Pixel-Perfect Figma Audit

Project landing page ini telah diperiksa secara menyeluruh (100% Pixel-Perfect Audit) berdasarkan data desain resmi dari [Figma Community Design](https://www.figma.com/design/v6ehHmBScvScfgezLWh64o/Minimal-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design--Community-?node-id=0-1):

### 🎨 1. Design Tokens & Palette Warna
- ✅ **Brand Primary**: `#4CAF4F` (Tombol utama, judul highlight, dan link CTA).
- ✅ **Brand Secondary**: `#263238` (Latar belakang Footer & teks utama CTA Banner).
- ✅ **Neutral Silver**: `#F5F7FA` (Latar belakang Hero Section, Achievements, Testimonial, & CTA Banner).
- ✅ **Neutral Dark Grey**: `#4D4D4D` (Heading H1, H2, H3).
- ✅ **Neutral Grey**: `#717171` (Body Text & Deskripsi).
- ✅ **Tint T5 / Active Highlight**: `#E8F5E9` (Latar hover badge logo & tombol).

### 🧭 2. Header & Navigation (`Navbar.jsx`)
- ✅ **Figma Height**: `84px`.
- ✅ **Figma Container Padding**: `padding: 0 144px` (Desktop).
- ✅ **Logo & Tipografi**: Logo Nexcent 35x24px, teks logo Inter 24px Bold (`#263238`).
- ✅ **Menu Gap**: `50px` antar link navigasi, Inter 16px Medium (`#18191F`).
- ✅ **Tombol Aksyen**: `Sign up` menggunakan `padding: 10px 20px`, `border-radius: 4px`, warna `#4CAF4F`.

### 🚀 3. Hero Section (`HeroSection.jsx`)
- ✅ **Padding**: `96px 144px` (Desktop).
- ✅ **Horizontal Gap**: `104px` antara kolom teks dan vektor ilustrasi.
- ✅ **Heading H1**: Inter 64px SemiBold (Line-height `76px`, `#4D4D4D` + highlight `#4CAF4F`).
- ✅ **Tombol Register**: `padding: 14px 32px`, `border-radius: 4px`, font Inter 16px Medium.
- ✅ **Dimensi Ilustrasi**: Exact `391px x 407px`.

### 🏢 4. Clients Section (`ClientsSection.jsx`)
- ✅ **Title & Subtitle**: H2 Inter 36px SemiBold (`#4D4D4D`), Subtitle 16px Regular (`#717171`).
- ✅ **Logos Row**: 7 logo klien berukuran `48x48px` dengan `justify-content: space-between`.

### 👥 5. Community Section (`CommunitySection.jsx`)
- ✅ **Dimensi Kartu**: Width `299px`, `padding: 24px 32px`, `border-radius: 8px`.
- ✅ **Bayangan Kartu (*Shadow*)**: `box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.2)`.
- ✅ **Judul Kartu**: Inter 28px Bold (`#4D4D4D`), Deskripsi 14px Regular (`#717171`).

### 🔓 6. Unlock & Calendar Section (`UnlockSection.jsx` & `CalendarSection.jsx`)
- ✅ **Ilustrasi Graphic**: Exact `442px x 433px`.
- ✅ **Gabungan Jarak**: `gap: 30px` antara ilustrasi dan teks penjelas.
- ✅ **Teks & Tombol**: H2 36px SemiBold, paragraf 14px, tombol *"Learn More"* `padding: 14px 32px` (`#4CAF4F`).

### 📊 7. Achievements Section (`AchievementsSection.jsx`)
- ✅ **Padding & Background**: `padding: 64px 144px`, background `#F5F7FA`.
- ✅ **Grid Counter**: 2 Baris x 2 Kolom, `gap: 40px` (vertikal) & `gap: 30px` (horizontal).
- ✅ **Angka & Label**: Angka 28px Bold (`#4D4D4D`), Label 16px Regular (`#717171`).
- ✅ **Tampilan HP**: Ikon statistik sejajar 100% lurus vertikal pada mode layar HP.

### 💬 8. Testimonial Section (`TestimonialSection.jsx`)
- ✅ **Padding & Background**: `padding: 32px 144px`, background `#F5F7FA`, `gap: 78px`.
- ✅ **Foto Tesla Emblem**: Width `326px x 326px`, `border-radius: 8px`, `box-shadow: 0px 8px 16px 0px rgba(171, 190, 209, 0.4)`.
- ✅ **Jarak Antar Logo Brand**: **Exact `41px`** sesuai spesifikasi frame `#22:777` di Figma.
- ✅ **Efek Hover**: Active fill `#E8F5E9` + skala animasi halus saat mouse diarahkan.

### 📰 9. Blog Section (`BlogSection.jsx`)
- ✅ **Dimensi Gambar**: Width `368px x 286px`, `border-radius: 8px`.
- ✅ **Floating Box**: Width `285px`, `padding: 16px`, `border-radius: 8px`, `box-shadow: 0px 8px 16px 0px rgba(171, 190, 209, 0.4)`.
- ✅ **Optimasi Performa**: Menggunakan `loading="lazy"` (bebas dari error/warning browser DevTools).

### 📣 10. CTA Banner & Footer (`CtaBanner.jsx` & `Footer.jsx`)
- ✅ **CTA Heading**: Inter 64px SemiBold (`#263238`).
- ✅ **Footer Layout**: Background `#263238`, Grid Columns `2fr 1fr 1fr 1.5fr`, `gap: 48px`.
- ✅ **Ikon Sosial**: 4 tombol lingkaran interaktif (Instagram, Dribbble, Twitter, YouTube) dengan animasi terangkat & *glow shadow*.

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
