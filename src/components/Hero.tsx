import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>
              Awesome Interior<br />
              <span className={styles.accent}>Designing Services</span><br />
              For Your Home
            </h1>
            <p className={styles.description}>
              A curated selection of architectural milestones, defined<br />
              by structural integrity and the silent poetry of space.
            </p>
          </div>
          <div className={styles.navArea}>
            <div className={styles.largeBgText}>MS</div>
            <nav className={styles.heroNav}>
              <button className={styles.active}><span>ALL WORKS</span></button>
              <button><span>RESIDENTIAL</span></button>
              <button><span>COMMERCIAL</span></button>
              <button><span>RESTORATION</span></button>
            </nav>
          </div>
        </Reveal>

        <Reveal className={styles.grid} delay={200}>
          <div className={styles.gridCol1}>
            <div className={styles.imageWrapper1}>
              <Image src="/GPT/Residential/Exterior/ChatGPT Image Jul 28, 2026, 06_53_54 AM.png" alt="Exterior" fill className={styles.img} />
            </div>
            <div className={styles.imageWrapper2}>
              <Image src="/GPT/Residential/Living Room/ChatGPT Image Jul 28, 2026, 06_56_20 AM.png" alt="Living Room" fill className={styles.img} />
            </div>
          </div>
          <div className={styles.gridCol2}>
            <div className={styles.imageWrapper3}>
              <Image src="/GPT/Residential/Kitchen/ChatGPT Image Jul 28, 2026, 06_28_42 AM.png" alt="Kitchen" fill className={styles.img} />
            </div>
            <div className={styles.imageWrapper4}>
              <Image src="/GPT/Residential/Wardrobe/ChatGPT Image Jul 28, 2026, 06_54_16 AM.png" alt="Wardrobe" fill className={styles.img} />
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.ctaGroup} delay={300}>
          <Link href="/projects" className={styles.btnPrimary}>
            <span>VIEW YOUR PROJECTS</span>
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            <span>CONTACT</span>
          </Link>
        </Reveal>

        <Reveal className={styles.stats} delay={400}>
          <h3 className={styles.statsTitle}>THE PURSUIT OF PRECISION</h3>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <AnimatedCounter to={42} className={styles.statNumber} />
              <span className={styles.statLabel}>CITIES REACHED</span>
            </div>
            <div className={styles.statItem}>
              <AnimatedCounter to={1000} suffix="+" className={styles.statNumber} />
              <span className={styles.statLabel}>PROJECTS COMPLETED</span>
            </div>
            <div className={styles.statItem}>
              <AnimatedCounter to={30} suffix="+" className={styles.statNumber} />
              <span className={styles.statLabel}>YEARS OF EXPERIENCE</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
