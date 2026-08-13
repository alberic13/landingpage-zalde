"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TestimonialSection.module.css";

const TESTIMONIAL_LOGOS = [
  { id: 1, name: "Brand Logo 1", src: "/images/testimonial_brand_1.svg" },
  { id: 2, name: "Brand Logo 2", src: "/images/testimonial_brand_2.svg" },
  { id: 3, name: "Brand Logo 3", src: "/images/testimonial_brand_3.svg" },
  { id: 4, name: "Brand Logo 4", src: "/images/testimonial_brand_4.svg" },
  { id: 5, name: "Brand Logo 5", src: "/images/testimonial_brand_5.svg" },
  { id: 6, name: "Brand Logo 6", src: "/images/testimonial_brand_6.svg" },
];

export default function TestimonialSection() {
  const [activeLogoId, setActiveLogoId] = useState(1);

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
              {TESTIMONIAL_LOGOS.map((logo) => {
                const isActive = activeLogoId === logo.id;
                return (
                  <div
                    key={logo.id}
                    className={`${styles.brandLogoItem} ${isActive ? styles.activeLogo : ""}`}
                    onMouseEnter={() => setActiveLogoId(logo.id)}
                    title={logo.name}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={48}
                      height={48}
                      style={{ width: "48px", height: "48px" }}
                      className={styles.brandSvg}
                    />
                  </div>
                );
              })}
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
