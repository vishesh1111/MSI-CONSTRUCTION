import styles from "./Footer.module.css";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Reveal className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.logoTitle}>MSI CONSTRUCTION</h3>
            <p className={styles.brandDesc}>
              Defined by architectural precision and a legacy of bespoke luxury environments. We shape the horizon with uncompromising mastery.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/msiconstruction.in?igsh=ZTkwOHFtNnZqaHJp" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/919319444747" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className={styles.linksBlock}>
            <h4 className={styles.blockTitle}>QUICK LINKS</h4>
            <div className={styles.linksList}>
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/projects">PROJECTS</Link>
              <Link href="/blog">BLOG</Link>
              <a href="/msi-profile.pdf" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
              <Link href="/contact">CONTACT</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.blockTitle}>OUR SERVICES</h4>
            <div className={styles.linksList}>
              <Link href="/services/residential-construction">Residential Construction</Link>
              <Link href="/services/commercial-construction">Commercial Construction</Link>
              <Link href="/services/interior-design">Interior Design</Link>
              <Link href="/services/turnkey-projects">Turnkey Projects</Link>
              <Link href="/services/renovation-and-remodeling">Renovation &amp; Remodeling</Link>
              <Link href="/services/industrial-construction">Industrial Construction</Link>
            </div>
          </div>

          <div className={styles.subscribeBlock}>
            <h4 className={styles.blockTitle}>CONTACT</h4>
            <div className={styles.linksList}>
              <span style={{fontSize: '0.85rem', lineHeight: '1.6', opacity: 0.8}}>Plot No -210, Gali No-05, Golden Ranaji Enclave, Nangli Dairy, New Delhi-110043</span>
              <div className={styles.contactDropdownWrapper}>
                <span className={styles.contactDropdownTrigger}>Phone Numbers ▾</span>
                <div className={styles.contactDropdownCard}>
                  <a href="tel:+919319444747" style={{textTransform: 'none'}}>+91 93194 44747</a>
                </div>
              </div>
              <a href="mailto:info@msiconstruction.in" style={{textTransform: 'none'}}>info@msiconstruction.in</a>
              <span style={{fontSize: '0.85rem', lineHeight: '1.6', opacity: 0.8, letterSpacing: '0.05em'}}>GSTIN: 06AFZPT0180Q1ZF</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2026 MSI CONSTRUCTION. | GSTIN: 06AFZPT0180Q1ZF</p>
          <p>ARCHITECTURAL PRECISION - LUXURY INTERIOR</p>
        </div>
      </Reveal>
    </footer>
  );
}
