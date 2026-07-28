import Image from "next/image";
import styles from "./SectionAtmosphere.module.css";
import Reveal from "./Reveal";

export default function SectionAtmosphere() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={styles.subtitle}>02 / EXCLUSIVE WORKS</span>
            <h2 className={styles.title}>
              CURATION OF<br />
              ATMOSPHERE.
            </h2>
          </div>
          <a href="#collections" className={styles.viewAll}>VIEW ALL COLLECTIONS</a>
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={100} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src="/img/exterior.jpg" alt="The Monolith" fill className={styles.img} />
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>THE MONOLITH</h3>
              <span className={styles.cardLocation}>LOS ANGELES, USA</span>
              <span className={styles.arrow}>↗</span>
            </div>
          </Reveal>
          
          <Reveal delay={200} className={`${styles.card} ${styles.cardOffset}`}>
            <div className={styles.imageWrapper}>
              <Image src="/img/bathroom.jpg" alt="Vessel House" fill className={styles.img} />
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>VESSEL HOUSE</h3>
              <span className={styles.cardLocation}>KYOTO, JP</span>
              <span className={styles.arrow}>↗</span>
            </div>
          </Reveal>

          <Reveal delay={300} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src="/img/home-office.jpg" alt="Ochre Sands" fill className={styles.img} />
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>OCHRE SANDS</h3>
              <span className={styles.cardLocation}>MARRAKESH, MA</span>
              <span className={styles.arrow}>↗</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
