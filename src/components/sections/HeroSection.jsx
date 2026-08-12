import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Lessons and insights{" "}
            <span className="text-primary-green">from 8 years</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className={styles.heroCta}>
            <Link href="#register" className="btn btn-primary" id="hero-register-btn">
              Register
            </Link>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/hero_illustration.svg"
            alt="Nexcent Hero Illustration"
            width={390}
            height={407}
            style={{ width: "auto", height: "auto" }}
            priority
            className={styles.heroImage}
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className={styles.paginationDots}>
        <span className={`${styles.dot} ${styles.activeDot}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </section>
  );
}
