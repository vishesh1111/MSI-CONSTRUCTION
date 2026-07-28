import styles from "./SectionContact.module.css";
import Reveal from "./Reveal";

export default function SectionContact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <Reveal className={styles.transformation}>
          <div className={styles.transContent}>
            <h2 className={styles.transTitle}>
              BEGIN YOUR<br />
              <span className={styles.italic}>TRANSFORMATION.</span>
            </h2>
            <p className={styles.transDesc}>
              Our collaborative approach is highly exclusive. We accept a limited number of commissions annually to ensure absolute architectural integrity.
            </p>
            <div className={styles.formContactInfo}>
              <a href="tel:+919810040889" className={styles.formPhone}>+91 98100 40889</a>
              <a href="tel:+919319444747" className={styles.formPhone}>+91 93194 44747</a>
              <div className={styles.formSocials}>
                <a href="https://www.instagram.com/msiconstruction.in?igsh=ZTkwOHFtNnZqaHJp" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://wa.me/919319444747" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.transForm}>
            <input type="text" placeholder="FULL NAME" className={styles.input} />
            <input type="email" placeholder="EMAIL ADDRESS" className={styles.input} />
            <input type="tel" placeholder="PHONE NUMBER" className={styles.input} />
            <div className={styles.selectWrapper}>
              <select className={`${styles.input} ${styles.select}`} defaultValue="">
                <option value="" disabled>PROJECT TYPE</option>
                <option value="residential">RESIDENTIAL</option>
                <option value="commercial">COMMERCIAL</option>
                <option value="hospitality">HOSPITALITY</option>
                <option value="retail">RETAIL</option>
                <option value="workplace">WORKPLACE</option>
                <option value="mixed-use">MIXED-USE</option>
                <option value="others">OTHERS</option>
              </select>
            </div>
            <input type="text" placeholder="PROJECT LOCATION" className={styles.input} />
            <textarea placeholder="WHERE DO WE BEGIN?" className={`${styles.input} ${styles.textarea}`}></textarea>
            <button className={styles.submitBtn}><span>SUBMIT INQUIRY</span></button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
