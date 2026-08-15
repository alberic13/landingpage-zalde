import Image from "next/image";
import styles from "./CommunitySection.module.css";

const COMMUNITY_CARDS = [
  {
    id: 1,
    title: (
      <>
        Membership <br /> Organisations
      </>
    ),
    rawTitle: "Membership Organisations",
    description: (
      <>
        Our membership management <br />
        software provides full automation of <br />
        membership renewals and payments
      </>
    ),
    iconSrc: "/images/community_icon_1.svg",
  },
  {
    id: 2,
    title: (
      <>
        National <br /> Associations
      </>
    ),
    rawTitle: "National Associations",
    description: (
      <>
        Our membership management <br />
        software provides full automation of <br />
        membership renewals and <br />
        payments
      </>
    ),
    iconSrc: "/images/community_icon_2.svg",
  },
  {
    id: 3,
    title: (
      <>
        Clubs And <br /> Groups
      </>
    ),
    rawTitle: "Clubs And Groups",
    description: (
      <>
        Our membership management <br />
        software provides full automation of <br />
        membership renewals and payments
      </>
    ),
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
                  alt={card.rawTitle}
                  width={65}
                  height={56}
                  style={{ width: "65px", height: "56px" }}
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
