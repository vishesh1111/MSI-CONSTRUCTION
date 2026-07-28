"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SectionStudio.module.css";
import Reveal from "./Reveal";

export default function SectionStudio() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.studioBanner}>
          <div className={styles.studioContent}>
            <span className={styles.studioSubtitle}>GLOBAL HEADQUARTERS</span>
            <h3 className={styles.studioTitle}>THE STUDIO</h3>
            <p className={styles.studioAddress}>
              Plot No -210, Gali No-05, Golden Ranaji Enclave<br />
              Nangli Diary, New Delhi-110043
            </p>
            
            <div className={styles.formContainer}>
              <AnimatePresence mode="wait">
                {!isFormOpen && !isSubmitted ? (
                  <motion.button 
                    key="req-btn"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={styles.studioBtn}
                    onClick={() => setIsFormOpen(true)}
                  >
                    <span>REQUEST A VISIT</span>
                  </motion.button>
                ) : isFormOpen && !isSubmitted ? (
                  <motion.form 
                    key="req-form"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0 }}
                    className={styles.formWrapper}
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.inputGroup}>
                      <input 
                        type="tel" 
                        placeholder="YOUR PHONE NUMBER"
                        className={styles.inputField}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoFocus
                        required
                      />
                      <button type="submit" className={styles.submitArrow}>
                        ➔
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="req-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={styles.successMessage}
                  >
                    WE WILL CONTACT YOU SHORTLY.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
