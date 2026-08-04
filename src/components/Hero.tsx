import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>
              Best Construction Company<br />
              <span className={styles.accent}>& Interior Designer</span><br />
              in Delhi NCR
            </h1>
            <p className={styles.description}>
              30+ years of delivering residential, commercial & industrial<br />
              construction and luxury interior design across India.
            </p>
          </div>
          <div className={styles.navArea}>
            <div className={styles.largeBgText}>MS</div>
            <nav className={styles.heroNav}>
              <Link href="/projects?filter=ALL+WORKS" className={`${styles.btn} ${styles.active}`}><span>ALL WORKS</span></Link>
              <Link href="/projects?filter=RESIDENTIAL" className={styles.btn}><span>RESIDENTIAL</span></Link>
              <Link href="/projects?filter=COMMERCIAL" className={styles.btn}><span>COMMERCIAL</span></Link>
            </nav>
          </div>
        </Reveal>

        <HeroCarousel />

        <Reveal className={styles.ctaGroup} delay={300}>
          <Link href="/projects?filter=RESIDENTIAL" className={styles.btnPrimary}>
            <span>VIEW YOUR PROJECTS</span>
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            <span>CONTACT</span>
          </Link>
        </Reveal>

        <Reveal className={styles.stats} delay={400}>
          <h3 className={styles.statsTitle}>TRUSTED ACROSS INDIA</h3>
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
