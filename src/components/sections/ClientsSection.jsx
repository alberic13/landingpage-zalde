import Image from "next/image";
import styles from "./ClientsSection.module.css";

const CLIENT_LOGOS = [
  { id: 1, name: "Client Logo 1", src: "/images/client_logo_1.svg" },
  { id: 2, name: "Client Logo 2", src: "/images/client_logo_2.svg" },
  { id: 3, name: "Client Logo 3", src: "/images/client_logo_3.svg" },
  { id: 4, name: "Client Logo 4", src: "/images/client_logo_4.svg" },
  { id: 5, name: "Client Logo 5", src: "/images/client_logo_5.svg" },
  { id: 6, name: "Client Logo 6", src: "/images/client_logo_6.svg" },
  { id: 7, name: "Client Logo 7", src: "/images/client_logo_7.svg" },
];

export default function ClientsSection() {
  return (
    <section className="section" id="clients">
      <div className={`container ${styles.clientsContainer}`}>
        <div className={styles.headerArea}>
          <h2 className={styles.sectionTitle}>Our Clients</h2>
          <p className={styles.sectionSubtitle}>
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className={styles.logosRow}>
          {CLIENT_LOGOS.map((client) => (
            <div key={client.id} className={styles.logoItem} title={client.name}>
              <Image
                src={client.src}
                alt={client.name}
                width={48}
                height={48}
                style={{ width: "48px", height: "48px" }}
                className={styles.clientSvg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
