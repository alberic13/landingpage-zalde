import Link from "next/link";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.ctaSection} id="demo">
      <div className={`container ${styles.ctaContainer}`}>
        <h2 className={styles.ctaHeading}>
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h2>
        <div className={styles.buttonWrapper}>
          <Link href="#demo" className="btn btn-primary" id="cta-get-demo-btn">
            <span>Get a Demo</span>
            <svg className="btn-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
