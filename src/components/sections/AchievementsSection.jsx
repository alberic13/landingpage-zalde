"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./AchievementsSection.module.css";

const STATS_DATA = [
  {
    id: 1,
    targetValue: 2245341,
    label: "Members",
    iconSrc: "/images/achieve_icon_1.svg",
  },
  {
    id: 2,
    targetValue: 46328,
    label: "Clubs",
    iconSrc: "/images/achieve_icon_2.svg",
  },
  {
    id: 3,
    targetValue: 828867,
    label: "Event Bookings",
    iconSrc: "/images/achieve_icon_3.svg",
  },
  {
    id: 4,
    targetValue: 1926436,
    label: "Payments",
    iconSrc: "/images/achieve_icon_4.svg",
  },
];

function AnimatedCounter({ targetValue, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const duration = 2000; // 2 seconds animation duration

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease out cubic function for smooth, satisfying deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * targetValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue]);

  return <>{count.toLocaleString("en-US")}</>;
}

export default function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className={styles.achievementsSection} id="achievements" ref={sectionRef}>
      <div className={`container ${styles.achievementsContainer}`}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>
            Helping a local <br />
            <span className={styles.greenText}>business reinvent itself</span>
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
                <h3 className={styles.statNumber}>
                  <AnimatedCounter targetValue={stat.targetValue} isVisible={isVisible} />
                </h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
