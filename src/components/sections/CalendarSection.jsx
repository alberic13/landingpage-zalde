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
            width={441.53}
            height={433.4}
            style={{ width: "441.53px", height: "433.4px" }}
            className={styles.illustration}
          />
        </div>

        <div className={styles.textColumn}>
          <div className={styles.textBox}>
            <h2 className={styles.title}>
              How to design your site footer like <br />
              we did
            </h2>
            <p className={styles.description}>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt <br />
              molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br />
              libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br />
              nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer <br />
              in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi <br />
              ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
          </div>
          <div className={styles.ctaWrapper}>
            <Link href="#learn-more" className={styles.learnMoreBtn} id="calendar-learn-more-btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
