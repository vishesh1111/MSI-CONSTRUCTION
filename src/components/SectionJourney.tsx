import styles from "./SectionJourney.module.css";
import Reveal from "./Reveal";

export default function SectionJourney() {
  return (
    <section className={styles.section} id="about-2">
      <div className={styles.container}>
        <Reveal className={styles.collaborate} delay={200}>
          <span className={styles.collabSub}>COLLABORATE</span>
          <h2 className={styles.collabTitle}>
            READY TO REFINE YOUR <span className={styles.italic}>VISION?</span>
          </h2>
          <p className={styles.collabDesc}>
            Our team is ready to transform your vision into an architectural reality that transcends the ordinary.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}><span>CONTACT STUDIO</span></a>
            <a href="#founders" className={styles.btnSecondary}><span>MEET THE FOUNDERS</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
