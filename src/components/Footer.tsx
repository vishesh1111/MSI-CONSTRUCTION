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
              <a href="/msi-profile.pdf" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
              <Link href="#">ARCHITECTURE</Link>
              <Link href="#">INTERIOR DESIGN</Link>
              <Link href="#">PRESS</Link>
            </div>
          </div>

          <div className={styles.subscribeBlock}>
            <h4 className={styles.blockTitle}>CONTACT</h4>
            <div className={styles.linksList}>
              <div className={styles.contactDropdownWrapper}>
                <span className={styles.contactDropdownTrigger}>Phone Numbers ▾</span>
                <div className={styles.contactDropdownCard}>
                  <a href="tel:+919810040889" style={{textTransform: 'none'}}>+91 98100 40889</a>
                  <a href="tel:+919319444747" style={{textTransform: 'none'}}>+91 93194 44747</a>
                </div>
              </div>
              <a href="mailto:mohdtaushif@gmail.com" style={{textTransform: 'none'}}>E-mail : mohdtaushif@gmail.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2024 MSI CONSTRUCTION.</p>
          <p>ARCHITECTURAL PRECISION - LUXURY MASTERY</p>
        </div>
      </Reveal>
    </footer>
  );
}
