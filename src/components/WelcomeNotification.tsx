"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WelcomeNotification.module.css";

export default function WelcomeNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = sessionStorage.getItem("msi_welcomed");
    
    if (!hasVisited) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("msi_welcomed", "true");
      }, 1000);

      // Auto hide after 8 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 9000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  return (
    <div className={styles.notificationWrapper}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={styles.notification}
          >
            <div className={styles.icon}>✧</div>
            <div className={styles.content}>
              <h4 className={styles.title}>Welcome to MS Interior & Construction</h4>
              <p className={styles.message}>Where structural integrity meets visionary design</p>
            </div>
            <button 
              className={styles.closeBtn} 
              onClick={() => setIsVisible(false)}
              aria-label="Close notification"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
