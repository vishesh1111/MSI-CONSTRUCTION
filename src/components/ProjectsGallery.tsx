"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectsGallery.module.css";
import Reveal from "./Reveal";

export type ProjectImage = {
  src: string;
  category: string;
  subcategory?: string;
  filename: string;
};

interface ProjectsGalleryProps {
  projects: ProjectImage[];
}

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("RESIDENTIAL");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ["ALL WORKS", "RESIDENTIAL", "COMMERCIAL", "OTHERS"];
  
  // Extract unique subcategories for Residential
  const residentialSubcategories = Array.from(
    new Set(
      projects
        .filter((p) => p.category === "Residential" && p.subcategory)
        .map((p) => p.subcategory!)
    )
  ).sort();

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "ALL WORKS") return true;
    if (activeCategory.toLowerCase() !== project.category.toLowerCase()) return false;
    
    if (activeCategory === "RESIDENTIAL" && activeSubcategory) {
      return project.subcategory?.toLowerCase() === activeSubcategory.toLowerCase();
    }
    
    return true;
  });

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
  };

  const lightboxElement = (
    <AnimatePresence>
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            ✕
          </button>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={styles.lightboxContent}
            // Do NOT stop propagation here, so clicking empty space closes it
          >
            <div 
              className={styles.lightboxImgWrapper}
              onClick={(e) => e.stopPropagation()} // Only stop propagation when clicking the actual image
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.filename}
                fill
                className={styles.lightboxImg}
                sizes="100vw"
                quality={100}
              />
            </div>
            <div 
              className={styles.lightboxCaption}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.subcategory ? selectedImage.subcategory : selectedImage.category}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className={styles.galleryContainer}>
        <Reveal className={styles.filterNav}>
          <div className={styles.primaryFilters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
                onClick={() => handleCategoryClick(cat)}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          <AnimatePresence>
            {activeCategory === "RESIDENTIAL" && residentialSubcategories.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.secondaryFiltersWrapper}
              >
                <div className={styles.secondaryFilters}>
                  {residentialSubcategories.map((subcat) => (
                    <button
                      key={subcat}
                      className={`${styles.subFilterBtn} ${activeSubcategory === subcat ? styles.activeSub : ""}`}
                      onClick={() => setActiveSubcategory(subcat === activeSubcategory ? null : subcat)}
                    >
                      <span>{subcat.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        <motion.div layout className={styles.masonryGrid}>
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.5) }}
                key={project.src}
                className={styles.masonryItem}
                onClick={() => setSelectedImage(project)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.src}
                    alt={project.filename}
                    fill
                    className={styles.img}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.projectCategory}>
                        {project.subcategory ? project.subcategory : project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {mounted && createPortal(lightboxElement, document.body)}
    </>
  );
}
