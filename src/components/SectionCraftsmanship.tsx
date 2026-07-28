import styles from "./SectionCraftsmanship.module.css";
import Reveal from "./Reveal";

export default function SectionCraftsmanship() {
  const disciplines = [
    {
      icon: "◭",
      title: "BESPOKE DESIGN",
      desc: "Concept to creation, we define architectural languages that stand the test of time."
    },
    {
      icon: "⚙",
      title: "STRUCTURAL ENGINEERING",
      desc: "The intersection of technical brilliance and aesthetic grace in every joint."
    },
    {
      icon: "✧",
      title: "INTERIOR CURATION",
      desc: "Raw materials meticulously sourced to create subtle, emotional living spaces."
    },
    {
      icon: "⌂",
      title: "PROJECT MASTERY",
      desc: "Seamless execution from foundation to handover, managed with total discretion."
    }
  ];

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <span className={styles.subtitle}>OUR CORE DISCIPLINES</span>
          <h2 className={styles.title}>
            A LEGACY OF<br />
            <span className={styles.italic}>CRAFTSMANSHIP.</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {disciplines.map((item, i) => (
            <Reveal key={i} delay={i * 100} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
