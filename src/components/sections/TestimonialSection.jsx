import Image from "next/image";
import Link from "next/link";
import styles from "./TestimonialSection.module.css";

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection} id="testimonial">
      <div className={`container ${styles.testimonialContainer}`}>
        {/* Tesla Emblem Image */}
        <div className={styles.avatarWrapper}>
          <Image
            src="/images/testimonial_tesla.png"
            alt="Tesla Emblem"
            width={326}
            height={326}
            style={{ width: "100%", height: "100%" }}
            className={styles.avatar}
          />
        </div>

        {/* Testimonial Content */}
        <div className={styles.contentCol}>
          <p className={styles.quoteText}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <div className={styles.authorMeta}>
            <h3 className={styles.authorName}>Tim Smith</h3>
            <p className={styles.authorRole}>
              British Dragon Boat Racing Association
            </p>
          </div>

          <div className={styles.brandsRow}>
            <div className={styles.logosList}>
              <Image
                src="/images/testimonial_brand_logos.svg"
                alt="Client Brand Logos"
                width={497}
                height={48}
                style={{ width: "497px", height: "48px" }}
                className={styles.brandLogosSvg}
              />
            </div>

            <Link href="#all-customers" className={styles.meetLink} id="meet-all-customers-link">
              <span>Meet all customers</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
