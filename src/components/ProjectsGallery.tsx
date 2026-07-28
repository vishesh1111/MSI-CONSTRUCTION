"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL WORKS");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  
  // Carousel States
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  // Lightbox State
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const categories = ["ALL WORKS", "RESIDENTIAL", "COMMERCIAL", "OTHERS"];

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const filterParam = params.get("filter");
      if (filterParam) {
        const formatted = filterParam.toUpperCase();
        if (categories.includes(formatted)) {
          setActiveCategory(formatted);
        } else if (formatted === 'RESTORATION') {
          setActiveCategory("OTHERS");
        }
      }
    }
  }, []);

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

  // Calculate actual current index with wrapping
  const imageIndex = Math.abs(page % filteredProjects.length);
  const currentIndex = Number.isNaN(imageIndex) ? 0 : imageIndex;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  const goToSlide = (index: number) => {
    setPage([index, index > currentIndex ? 1 : -1]);
  };

  const handleInteraction = () => {
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Resume after 5 seconds of idle
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Autoplay Logic
  useEffect(() => {
    if (isPaused || selectedImage || filteredProjects.length <= 1) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, selectedImage, paginate, filteredProjects.length]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) return; // Don't navigate carousel if lightbox is open
      if (e.key === "ArrowRight") {
        paginate(1);
        handleInteraction();
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
        handleInteraction();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, paginate]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
    setPage([0, 0]); // Reset carousel on category change
  };
  
  const handleSubCategoryClick = (subcat: string) => {
    setActiveSubcategory(subcat === activeSubcategory ? null : subcat);
    setPage([0, 0]); // Reset carousel
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
      handleInteraction();
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
      handleInteraction();
    }
  };

  const currentProject = filteredProjects[currentIndex];

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
                      onClick={() => handleSubCategoryClick(subcat)}
                    >
                      <span>{subcat.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        {filteredProjects.length > 0 && (
          <Reveal className={styles.carouselContainer}>
            <div 
              style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => {
                setTimeout(() => setIsPaused(false), 3000);
              }}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  className={styles.slideWrapper}
                  onClick={() => setSelectedImage(currentProject)}
                >
                  {currentProject && (
                    <>
                      <Image
                        src={currentProject.src}
                        alt={currentProject.filename}
                        fill
                        className={styles.img}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        priority={true} // Priority loading for current active slide
                      />
                      <div className={styles.overlay}>
                        <div className={styles.overlayContent}>
                          <span className={styles.projectCategory}>
                            {currentProject.subcategory ? currentProject.subcategory : currentProject.category}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {filteredProjects.length > 1 && (
                <>
                  <button 
                    className={`${styles.arrowBtn} ${styles.prev}`} 
                    onClick={() => { paginate(-1); handleInteraction(); }}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button 
                    className={`${styles.arrowBtn} ${styles.next}`} 
                    onClick={() => { paginate(1); handleInteraction(); }}
                    aria-label="Next image"
                  >
                    ›
                  </button>

                  <div className={styles.dotsContainer}>
                    {filteredProjects.map((_, idx) => (
                      <button
                        key={idx}
                        className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
                        onClick={() => { goToSlide(idx); handleInteraction(); }}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </Reveal>
        )}
      </div>

      {mounted && createPortal(lightboxElement, document.body)}
    </>
  );
}
