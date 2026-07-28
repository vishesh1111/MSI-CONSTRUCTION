import styles from "./SectionProcess.module.css";
import Reveal from "./Reveal";

export default function SectionProcess() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "An intimate consultation to define your lifestyle needs and aesthetic aspirations."
    },
    {
      num: "02",
      title: "DRAFTING",
      desc: "Precise architectural renderings and material mockups for tactile approval."
    },
    {
      num: "03",
      title: "EXECUTION",
      desc: "Master craftsmen and site leads coordinate to bring the vision to life with zero compromise."
    },
    {
      num: "04",
      title: "CURATION",
      desc: "Final styling and curation of all the spaces of your new masterwork."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <h2 className={styles.title}>THE PROCESS</h2>
          <div className={styles.line}></div>
        </Reveal>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 200} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.ctaBanner} delay={200}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>READY TO DEFINE YOUR SPACE?</h2>
            <p className={styles.ctaDesc}>
              We are currently accepting inquiries for late 2024 projects. Join our waitlist for a private design consultation.
            </p>
            <div className={styles.actions}>
              <div className={styles.contactDropdownWrapper}>
                <a href="#contact" className={styles.btnPrimary}><span>BOOK A CONSULTATION</span></a>
                <div className={styles.contactDropdownCard}>
                  <a href="tel:+919810040889" style={{textTransform: 'none'}}>+91 98100 40889</a>
                  <a href="tel:+919319444747" style={{textTransform: 'none'}}>+91 93194 44747</a>
                </div>
              </div>
              <a href="/msi-profile.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}><span>VIEW OUR STANDARDS</span></a>
            </div>
          </div>
          <div className={styles.compassIcon}>
             ◭
          </div>
        </Reveal>
      </div>
    </section>
  );
}
