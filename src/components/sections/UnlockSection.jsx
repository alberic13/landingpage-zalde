import Image from "next/image";
import Link from "next/link";
import styles from "./UnlockSection.module.css";

export default function UnlockSection() {
  return (
    <section className="section" id="features">
      <div className={`container ${styles.unlockContainer}`}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/unlock_illustration.svg"
            alt="Pixelgrade Story Illustration"
            width={442}
            height={433}
            style={{ width: "442px", height: "433px" }}
            className={styles.illustration}
          />
        </div>

        <div className={styles.textColumn}>
          <div className={styles.textBox}>
            <h2 className={styles.title}>
              The unseen of spending three <br />
              years at Pixelgrade
            </h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br />
              accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br />
              porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br />
              quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
          </div>
          <div className={styles.ctaWrapper}>
            <Link href="#learn-more" className={styles.learnMoreBtn} id="unlock-learn-more-btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
