"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        {/* Geometric Logo */}
        <Link href="/" className={styles.logoLink} id="nav-logo">
          <Image
            src="/images/nexcent_figma_logo_icon.svg"
            alt="Nexcent Logo Icon"
            width={35}
            height={24}
            className={styles.logoSvg}
          />
          <span className={styles.logoText}>Nexcent</span>
        </Link>

        {/* Desktop Menu */}
        <nav className={`${styles.navMenu} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          <Link href="#home" className={`${styles.navLink} ${styles.active}`} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="#clients" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Service
          </Link>
          <Link href="#community" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Feature
          </Link>
          <Link href="#blog" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Product
          </Link>
          <Link href="#testimonial" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Testimonial
          </Link>
          <Link href="#faq" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </Link>

          {/* Mobile CTA Buttons */}
          <div className={styles.mobileCta}>
            <Link href="#login" className={styles.loginBtn} onClick={() => setIsMobileMenuOpen(false)}>
              Login
            </Link>
            <Link href="#signup" className={styles.signUpBtn} onClick={() => setIsMobileMenuOpen(false)}>
              Sign up
            </Link>
          </div>
        </nav>

        {/* Right CTA Action Buttons */}
        <div className={styles.navActions}>
          <Link href="#login" className={styles.loginBtn} id="header-login-btn">
            Login
          </Link>
          <Link href="#signup" className={styles.signUpBtn} id="header-signup-btn">
            Sign up
          </Link>

          {/* Hamburger Mobile Toggle */}
          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar1Open : ""}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar2Open : ""}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar3Open : ""}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
