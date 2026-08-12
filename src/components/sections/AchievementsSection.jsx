import Image from "next/image";
import styles from "./AchievementsSection.module.css";

const STATS_DATA = [
  {
    id: 1,
    number: "2,245,341",
    label: "Members",
    iconSrc: "/images/achieve_icon_1.svg",
  },
  {
    id: 2,
    number: "46,328",
    label: "Clubs",
    iconSrc: "/images/achieve_icon_2.svg",
  },
  {
    id: 3,
    number: "828,867",
    label: "Event Bookings",
    iconSrc: "/images/achieve_icon_3.svg",
  },
  {
    id: 4,
    number: "1,926,436",
    label: "Payments",
    iconSrc: "/images/achieve_icon_4.svg",
  },
];

export default function AchievementsSection() {
  return (
    <section className={styles.achievementsSection} id="achievements">
      <div className={`container ${styles.achievementsContainer}`}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>
            Helping a local <br />
            <span className="text-primary-green">business reinvent itself</span>
          </h2>
          <p className={styles.subtitle}>
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className={styles.rightGrid}>
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.iconBox}>
                <Image
                  src={stat.iconSrc}
                  alt={stat.label}
                  width={48}
                  height={48}
                  className={styles.statIconSvg}
                />
              </div>
              <div className={styles.statText}>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
