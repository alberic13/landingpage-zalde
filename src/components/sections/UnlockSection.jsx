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
            width={440}
            height={430}
            style={{ width: "100%", height: "auto" }}
            className={styles.illustration}
          />
        </div>

        <div className={styles.textColumn}>
          <h2 className={styles.title}>
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <div className={styles.ctaWrapper}>
            <Link href="#learn-more" className="btn btn-primary" id="unlock-learn-more-btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
