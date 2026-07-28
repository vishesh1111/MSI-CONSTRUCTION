"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SectionCatalogue.module.css";
import Reveal from "./Reveal";

const CATEGORIES = ["ALL WORKS", "ARCHITECTURE", "INTERIORS", "LANDSCAPES"];

const imageMapping: Record<string, string> = {
  "img_1.png": "ARCHITECTURE",
  "img_2.png": "INTERIORS",
  "img_3.png": "INTERIORS",
  "img_4.png": "INTERIORS",
  "img_5.png": "ARCHITECTURE",
  "img_6.png": "INTERIORS",
  "img_7.png": "INTERIORS",
  "img_8.png": "INTERIORS",
  "img_9.png": "INTERIORS",
  "img_10.png": "INTERIORS",
  "img_11.png": "INTERIORS",
  "img_12.png": "INTERIORS",
  "img_13.png": "INTERIORS",
  "img_14.png": "INTERIORS",
  "img_15.png": "INTERIORS",
  "img_16.png": "INTERIORS",
  "img_17.png": "INTERIORS",
  "img_18.png": "INTERIORS",
  "img_19.png": "INTERIORS",
  "img_20.png": "INTERIORS",
  "img_21.png": "INTERIORS",
  "img_22.png": "INTERIORS",
  "img_23.png": "INTERIORS",
  "img_24.png": "INTERIORS",
  "img_25.png": "INTERIORS",
  "img_26.png": "INTERIORS",
  "img_27.png": "INTERIORS",
  "img_28.png": "INTERIORS",
  "img_29.png": "INTERIORS",
  "img_30.png": "INTERIORS",
  "img_31.png": "INTERIORS",
  "img_32.png": "INTERIORS",
  "img_33.png": "INTERIORS",
  "img_34.png": "INTERIORS",
  "img_35.png": "INTERIORS",
  "img_36.png": "INTERIORS",
  "img_37.png": "ARCHITECTURE",
  "img_38.png": "INTERIORS",
  "img_39.png": "ARCHITECTURE",
  "img_40.png": "ARCHITECTURE",
  "img_41.png": "ARCHITECTURE",
  "img_42.png": "ARCHITECTURE"
};

const images = Object.entries(imageMapping).map(([filename, category], index) => {
  const id = index + 1;
  return {
    id,
    src: `/img/catalogue/${filename}`,
    title: `PROJECT ${id.toString().padStart(3, '0')}`,
    category,
  };
});

export default function SectionCatalogue() {
  const [filter, setFilter] = useState("ALL WORKS");

  const filteredImages = filter === "ALL WORKS" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section className={styles.section} id="catalogue">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <span className={styles.subtitle}>THE ARCHIVE</span>
          <h2 className={styles.title}>
            COMPLETE<br />
            <span className={styles.italic}>CATALOGUE</span>
          </h2>
        </Reveal>

        <Reveal className={styles.filters} delay={200}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterBtnActive : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className={styles.imageCard}
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className={styles.img} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <h3 className={styles.imageTitle}>{img.title}</h3>
                  <span className={styles.imageCategory}>{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
