import Image from "next/image";
import Link from "next/link";
import styles from "./CalendarSection.module.css";

export default function CalendarSection() {
  return (
    <section className="section" id="calendar">
      <div className={`container ${styles.calendarContainer}`}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/calendar_illustration.svg"
            alt="Mobile Login Pana Illustration"
            width={440}
            height={430}
            style={{ width: "auto", height: "auto" }}
            className={styles.illustration}
          />
        </div>

        <div className={styles.textColumn}>
          <h2 className={styles.title}>
            How to design your site footer like we did
          </h2>
          <p className={styles.description}>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <div className={styles.ctaWrapper}>
            <Link href="#learn-more" className="btn btn-primary" id="calendar-learn-more-btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
