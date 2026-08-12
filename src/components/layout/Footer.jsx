"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Column 1: Company Info & Socials */}
        <div className={styles.companyCol}>
          <Link href="/" className={styles.logoLink} id="footer-logo">
            <Image
              src="/images/nexcent_figma_logo_icon.svg"
              alt="Nexcent Logo Icon"
              width={35}
              height={24}
              style={{ width: "35px", height: "auto" }}
              className={styles.logoSvg}
            />
            <span className={styles.logoText}>Nexcent</span>
          </Link>

          <div className={styles.copyrightBox}>
            <p>Copyright © 2026 zalde wesclic</p>
            <p>All rights reserved</p>
          </div>

          <div className={styles.socialIcons}>
            <a href="#instagram" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#dribbble" className={styles.socialIcon} aria-label="Dribbble">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72M2 12c5.6 0 10.36.87 14 3.7M5 19.5C9 12 13 8 21.5 7.5" />
              </svg>
            </a>
            <a href="#twitter" className={styles.socialIcon} aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#youtube" className={styles.socialIcon} aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.linksList}>
            <li><Link href="#about">About us</Link></li>
            <li><Link href="#blog">Blog</Link></li>
            <li><Link href="#contact">Contact us</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Support</h4>
          <ul className={styles.linksList}>
            <li><Link href="#help">Help center</Link></li>
            <li><Link href="#terms">Terms of service</Link></li>
            <li><Link href="#legal">Legal</Link></li>
            <li><Link href="#privacy">Privacy policy</Link></li>
            <li><Link href="#status">Status</Link></li>
          </ul>
        </div>

        {/* Column 4: Stay Up To Date Form */}
        <div className={styles.subscribeCol}>
          <h4 className={styles.colTitle}>Stay up to date</h4>
          <form className={styles.emailForm} onSubmit={handleSubmit} id="footer-email-form">
            <input
              type="email"
              placeholder="Your email address"
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="footer-email-input"
            />
            <button type="submit" className={styles.sendButton} aria-label="Send email" id="footer-email-submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
