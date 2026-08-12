import Image from "next/image";
import Link from "next/link";
import styles from "./BlogSection.module.css";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/images/blog_1.png",
    link: "#blog-1",
  },
  {
    id: 2,
    title: "What are your safeguarding responsibilities and how can you manage them?",
    image: "/images/blog_2-7ba33a.png",
    link: "#blog-2",
  },
  {
    id: 3,
    title: "Revamping the Membership Model with Triathlon Australia",
    image: "/images/blog_3.png",
    link: "#blog-3",
  },
];

export default function BlogSection() {
  return (
    <section className="section" id="blog">
      <div className={`container ${styles.blogContainer}`}>
        {/* Header */}
        <div className={styles.headerArea}>
          <h2 className={styles.sectionTitle}>Caring is the new marketing</h2>
          <p className={styles.sectionSubtitle}>
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.
          </p>
        </div>

        {/* Floating Cards Grid */}
        <div className={styles.postsGrid}>
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className={styles.postCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 368px"
                  className={styles.cardImage}
                />
              </div>

              {/* Floating Content Box */}
              <div className={styles.floatingBox}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <Link href={post.link} className={styles.readMoreLink} id={`blog-readmore-${post.id}`}>
                  <span>Readmore</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
