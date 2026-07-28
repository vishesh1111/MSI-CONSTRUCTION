import Image from "next/image";
import styles from "./SectionArt.module.css";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

export default function SectionArt() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <Reveal className={styles.heroBanner}>
          <div className={styles.bgImage}>
            <Image src="/img/kitchen.jpg" alt="Art of Precision" fill className={styles.img} />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.bannerContent}>
            <span className={styles.subtitle}>EST. 1985 / MASTERY IN FORM</span>
            <h2 className={styles.title}>
              THE ART OF<br />
              <span className={styles.italic}>PRECISION.</span>
            </h2>
            <p className={styles.description}>
              Architectural tenets defined by asymmetry, form, and function.
              Our ethos is clear: to build what transcends the constraints of time.
            </p>
            <div className={styles.actions}>
              <button className={styles.btnPrimary}><span>EXPLORE VISION</span></button>
              <button className={styles.btnSecondary}><span>CONTACT US</span></button>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.contentSplit} delay={200}>
          <div className={styles.textContent}>
            <span className={styles.smallSubtitle}>01 / THE ETHOS</span>
            <h2 className={styles.splitTitle}>
              REFINING<br />
              THE<br />
              INVISIBLE.
            </h2>
            <p className={styles.splitDesc}>
              Every MSI project begins with a concept of singular
              clarity. We believe that true luxury is felt in the
              unseen details: the way a room breathes, how a shadow
              falls across a hand-carved surface, and the silence of
              perfectly engineered joinery.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <AnimatedCounter to={320} suffix="+" className={styles.statNum} />
                <span className={styles.statLabel}>GLOBAL TEAMS</span>
              </div>
              <div className={styles.statItem}>
                <AnimatedCounter to={25} className={styles.statNum} />
                <span className={styles.statLabel}>YEARS DEFINING</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image src="/img/exterior.jpg" alt="Refining" fill className={styles.img} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
