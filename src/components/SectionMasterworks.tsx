import Image from "next/image";
import styles from "./SectionMasterworks.module.css";
import Reveal from "./Reveal";

export default function SectionMasterworks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.headerSplit}>
          <div className={styles.headerText}>
            <span className={styles.subtitle}>OUR EXPERTISE</span>
            <h2 className={styles.title}>
              CURATED<br />
              <span className={styles.italic}>MASTERWORKS</span>
            </h2>
            <p className={styles.description}>
              We do not merely build; we curate environments that serve as the
              silent canvas for a life of distinction. Explore our specialized
              collections of architecture and innovation.
            </p>
          </div>
          <div className={styles.headerImage}>
            <div className={styles.imageWrapper}>
              <Image src="/img/modular-kitchen-interior-design.jpg" alt="Curated Masterworks" fill className={styles.img} />
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.collection} delay={200}>
          <div className={styles.collImageWrapper}>
            <Image src="/img/modular-kitchen-interior-design.jpg" alt="Kitchen Collection" fill className={styles.img} />
          </div>
          <div className={styles.collText}>
            <h3 className={styles.collTitle}>THE KITCHEN<br />COLLECTION</h3>
            <p className={styles.collDesc}>
              The heart of the home reimagined as a precision instrument. Our
              bespoke kitchen environments blend industrial-grade performance
              with the aesthetics of a private gallery.
            </p>
            <ul className={styles.featureList}>
              <li>CUSTOM OBSIDIAN CABINETRY</li>
              <li>SMART INTEGRATION</li>
              <li>ARTISAN METAL WORK</li>
            </ul>
            <button className={styles.exploreBtn}><span>EXPLORE COLLECTION</span></button>
          </div>
        </Reveal>

        <Reveal className={`${styles.collection} ${styles.collectionReverse}`} delay={200}>
          <div className={styles.collImageWrapper}>
            <div className={styles.compositeImage}>
               <Image src="/img/luxury-bathroom-interior-design.jpg" alt="Sanctuary Collection" fill className={styles.img} />
            </div>
          </div>
          <div className={styles.collText}>
            <h3 className={styles.collTitle}>THE SANCTUARY<br />COLLECTION</h3>
            <p className={styles.collDesc}>
              Master suites designed for restoration. We prioritize acoustic
              isolation, circadian lighting, and tactile luxury to create an
              uncompromising private retreat.
            </p>
            <blockquote className={styles.quote}>
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </blockquote>
          </div>
        </Reveal>

        <Reveal className={styles.collection} delay={200}>
          <div className={styles.collImageWrapper}>
            <div className={styles.splitImages}>
              <div className={styles.imgHalf}>
                 <Image src="/img/residential-exterior-construction.jpg" alt="Commercial Grandeur" fill className={styles.img} />
              </div>
              <div className={styles.imgHalf2}>
                 <Image src="/img/home-office-interior-design.jpg" alt="Commercial Grandeur" fill className={styles.img} />
              </div>
            </div>
          </div>
          <div className={styles.collText}>
            <span className={styles.tinySub}>Corporate Identity</span>
            <h3 className={styles.collTitle}>COMMERCIAL<br />GRANDEUR</h3>
            <p className={styles.collDesc}>
              Defining the physical identity of brands. From boutique retail
              spaces to corporate headquarters, we build spaces that command
              respect.
            </p>
            <a href="/msi-profile.pdf" target="_blank" rel="noopener noreferrer" className={styles.solidBtn}><span>VIEW PORTFOLIO</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
