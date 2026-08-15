import Image from "next/image";
import styles from "./CommunitySection.module.css";

const COMMUNITY_CARDS = [
  {
    id: 1,
    title: "Membership\nOrganisations",
    description: "Our membership management\nsoftware provides full automation of\nmembership renewals and payments",
    iconSrc: "/images/community_icon_1.svg",
  },
  {
    id: 2,
    title: "National\nAssociations",
    description: "Our membership management\nsoftware provides full automation of\nmembership renewals and\npayments",
    iconSrc: "/images/community_icon_2.svg",
  },
  {
    id: 3,
    title: "Clubs And\nGroups",
    description: "Our membership management\nsoftware provides full automation of\nmembership renewals and payments",
    iconSrc: "/images/community_icon_3.svg",
  },
];

export default function CommunitySection() {
  return (
    <section className="section" id="community">
      <div className={`container ${styles.communityContainer}`}>
        <div className={styles.headerArea}>
          <h2 className={styles.sectionTitle}>
            Manage your entire community <br />
            in a single system
          </h2>
          <p className={styles.sectionSubtitle}>
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {COMMUNITY_CARDS.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={card.iconSrc}
                  alt={card.title.replace("\n", " ")}
                  width={65}
                  height={56}
                  className={styles.cardIconSvg}
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
