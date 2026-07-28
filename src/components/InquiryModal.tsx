"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./InquiryModal.module.css";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    typology: "",
    location: "",
    vision: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data to backend here
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", typology: "", location: "", vision: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modalContainer}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Registration Marks */}
            <div className={`${styles.regMark} ${styles.regTopLeft}`}></div>
            <div className={`${styles.regMark} ${styles.regTopRight}`}></div>
            <div className={`${styles.regMark} ${styles.regBottomLeft}`}></div>
            <div className={`${styles.regMark} ${styles.regBottomRight}`}></div>

            <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">✕</button>

            <div className={styles.modalGrid}>
              
              {/* Left Column - Information */}
              <div className={styles.leftCol}>
                <div className={styles.brandTag}>MSI CONSTRUCTION</div>
                <h2 className={styles.headline}>BEGIN YOUR TRANSFORMATION.</h2>
                <p className={styles.supportCopy}>
                  Our collaborative approach is highly exclusive. We accept a limited number of commissions annually to ensure absolute architectural integrity.
                </p>
                
                <div className={styles.contactInfo}>
                  <p>DIRECT LINE</p>
                  <a href="tel:+919810040889">+91 98100 40889</a>
                </div>

                <div className={styles.refImageWrapper}>
                  <div className={styles.imageBox}>
                    <Image 
                      src="/GPT/Residential/Living Room/ChatGPT Image Jul 28, 2026, 06_56_20 AM.png" 
                      alt="Reference Architecture" 
                      fill 
                      className={styles.refImg} 
                      sizes="300px"
                    />
                  </div>
                  <p className={styles.refCaption}>REF NO: MSI-7721-ARC</p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className={styles.rightCol}>
                {!isSubmitted ? (
                  <form className={styles.inquiryForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="fullName" className={styles.label}>FULL NAME</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        className={styles.input} 
                        value={formData.fullName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          className={styles.input} 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          className={styles.input} 
                          placeholder="+00 000 000 0000"
                          value={formData.phone}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="typology" className={styles.label}>TYPOLOGY</label>
                        <div className={styles.selectWrapper}>
                          <select 
                            id="typology" 
                            name="typology"
                            className={`${styles.input} ${styles.select}`}
                            value={formData.typology}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>Select Project Type</option>
                            <option value="residential">Residential Architecture</option>
                            <option value="commercial">Commercial Development</option>
                            <option value="interior">Interior Design</option>
                            <option value="restoration">Restoration</option>
                          </select>
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="location" className={styles.label}>LOCATION</label>
                        <input 
                          type="text" 
                          id="location" 
                          name="location"
                          className={styles.input} 
                          placeholder="City / Region"
                          value={formData.location}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="vision" className={styles.label}>WHERE DO WE BEGIN?</label>
                      <textarea 
                        id="vision" 
                        name="vision"
                        className={styles.textarea} 
                        placeholder="Detail your architectural vision and intent..."
                        value={formData.vision}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <span>SUBMIT INQUIRY</span>
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    className={styles.successState}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3 className={styles.successTitle}>INQUIRY RECEIVED</h3>
                    <p className={styles.successDesc}>
                      Your submission has been logged into our system. Our principal architect will review your brief, and a representative will contact you within 24 hours to discuss the commission.
                    </p>
                    <div className={styles.successMarks}>
                      <span className={styles.mark}>■</span>
                      <span className={styles.mark}>■</span>
                      <span className={styles.mark}>■</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
