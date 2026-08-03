"use client";

import { useState } from "react";
import styles from "./SectionContact.module.css";
import Reveal from "./Reveal";

export default function SectionContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact_form",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          location: formData.location,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", projectType: "", location: "", message: "" });
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  className={styles.input}
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <div className={styles.selectWrapper}>
                  <select
                    name="projectType"
                    className={`${styles.input} ${styles.select}`}
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
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
                <input
                  type="text"
                  name="location"
                  placeholder="PROJECT LOCATION"
                  className={styles.input}
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="WHERE DO WE BEGIN?"
                  className={`${styles.input} ${styles.textarea}`}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {submitError && (
                  <p className={styles.errorMsg}>{submitError}</p>
                )}
                <button className={styles.submitBtn} type="submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? "SUBMITTING..." : "SUBMIT INQUIRY"}</span>
                </button>
              </form>
            ) : (
              <div className={styles.successState}>
                <h3 className={styles.successTitle}>INQUIRY RECEIVED</h3>
                <p className={styles.successDesc}>
                  Your submission has been logged. Our principal architect will review your brief, and a representative will contact you within 24 hours.
                </p>
                <button
                  className={styles.submitBtn}
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: "1.5rem" }}
                >
                  <span>SUBMIT ANOTHER</span>
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
