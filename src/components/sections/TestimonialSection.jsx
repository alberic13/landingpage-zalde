import Image from "next/image";
import Link from "next/link";
import styles from "./TestimonialSection.module.css";

const TESTIMONIAL_LOGOS = [
  { id: 1, name: "Client Logo 1", src: "/images/client_logo_1.svg" },
  { id: 2, name: "Client Logo 2", src: "/images/client_logo_2.svg" },
  { id: 3, name: "Client Logo 3", src: "/images/client_logo_3.svg" },
  { id: 4, name: "Client Logo 4", src: "/images/client_logo_4.svg" },
  { id: 5, name: "Client Logo 5", src: "/images/client_logo_5.svg" },
  { id: 6, name: "Client Logo 6", src: "/images/client_logo_6.svg" },
];

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection} id="testimonials">
      <div className={`container ${styles.testimonialContainer}`}>
        {/* Tesla 3D Emblem Image */}
        <div className={styles.avatarWrapper}>
          <Image
            src="/images/testimonial_tesla.png"
            alt="Tesla 3D Emblem"
            width={280}
            height={280}
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
              {TESTIMONIAL_LOGOS.map((logo) => (
                <div key={logo.id} className={styles.logoBadge} title={logo.name}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={40}
                    height={40}
                    style={{ width: "40px", height: "40px" }}
                    className={styles.brandSvg}
                  />
                </div>
              ))}
            </div>

            <Link href="#all-customers" className={styles.meetLink} id="meet-all-customers-link">
              <span>Meet all customers</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
