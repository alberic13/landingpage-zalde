"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <footer className={styles.footer} id="faq">
      <div className={`container ${styles.footerContainer}`}>
        {/* Column 1: Company Info & Socials */}
        <div className={styles.companyCol}>
          <Link href="/" className={styles.logoLink} id="footer-logo">
            <Image
              src="/images/nexcent_footer_logo_icon.svg"
              alt="Nexcent Logo Icon"
              width={44}
              height={30}
              className={styles.logoSvg}
            />
            <span className={styles.logoText}>Nexcent</span>
          </Link>

          <div className={styles.copyrightBox}>
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>

          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
              id="footer-social-instagram"
            >
              <Image
                src="/images/footer_social_instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
                className={styles.socialSvg}
              />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Dribbble"
              id="footer-social-dribbble"
            >
              <Image
                src="/images/footer_social_dribbble.svg"
                alt="Dribbble"
                width={32}
                height={32}
                className={styles.socialSvg}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Twitter"
              id="footer-social-twitter"
            >
              <Image
                src="/images/footer_social_twitter.svg"
                alt="Twitter"
                width={32}
                height={32}
                className={styles.socialSvg}
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
              id="footer-social-youtube"
            >
              <Image
                src="/images/footer_social_youtube.svg"
                alt="YouTube"
                width={32}
                height={32}
                className={styles.socialSvg}
              />
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
          {isSubmitted && (
            <p className={styles.successMessage}>Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </footer>
  );
}
