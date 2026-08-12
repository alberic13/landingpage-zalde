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
        {/* Exact Figma Geometric Logo */}
        <Link href="/" className={styles.logoLink} id="nav-logo">
          <Image
            src="/images/nexcent_figma_logo_icon.svg"
            alt="Nexcent Logo Icon"
            width={35}
            height={24}
            style={{ width: "35px", height: "auto" }}
            className={styles.logoSvg}
            priority
          />
          <span className={styles.logoText}>Nexcent</span>
        </Link>

        {/* Desktop Menu */}
        <nav className={`${styles.navMenu} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          <Link href="#home" className={`${styles.navLink} ${styles.active}`} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="#features" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Features
          </Link>
          <Link href="#community" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Community
          </Link>
          <Link href="#blog" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="#pricing" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </Link>

          {/* Mobile CTA Button */}
          <div className={styles.mobileCta}>
            <Link href="#register" className={styles.registerBtn} onClick={() => setIsMobileMenuOpen(false)}>
              <span>Register Now</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33334M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </nav>

        {/* Right CTA Action */}
        <div className={styles.navActions}>
          <Link href="#register" className={styles.registerBtn} id="header-register-btn">
            <span>Register Now</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33334M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
