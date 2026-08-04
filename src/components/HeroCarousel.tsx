"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import styles from "./HeroCarousel.module.css";
import Reveal from "./Reveal";

const showcaseImages = [
  { 
    src: "/GPT/Residential/Living Room/luxury-courtyard-interior-design.png",
    ref: "REF NO. 815-LAND",
    title: "COURTYARD",
    alt: "Luxury Courtyard Interior Design by MSI Construction Delhi NCR",
    meta: "8,500 SQ FT • OUTDOOR SANCTUARY • 2022"
  },
  { 
    src: "/GPT/Residential/Exterior/modern-residential-exterior-architecture.png",
    ref: "REF NO. 920-EXT",
    title: "FACADE",
    alt: "Modern Residential Exterior Architecture Design Delhi",
    meta: "12,000 SQ FT • EXTERIOR ARCHITECTURE • 2024"
  },
  { 
    src: "/GPT/Residential/Kitchen/modular-kitchen-interior-design.png",
    ref: "REF NO. 402-KIT",
    title: "KITCHEN",
    alt: "Modular Kitchen Interior Design by MSI Construction",
    meta: "1,200 SQ FT • MODERN INTERIOR • 2023"
  },
  { 
    src: "/GPT/Residential/Wardrobe/custom-wardrobe-closet-design.png",
    ref: "REF NO. 118-WAR",
    title: "CLOSET",
    alt: "Custom Wardrobe and Closet Design MSI Construction",
    meta: "800 SQ FT • CUSTOM MILLWORK • 2023"
  },
  {
    src: "/GPT/Residential/Bedroom/luxury-bedroom-interior-design.png",
    ref: "REF NO. 304-BED",
    title: "BEDROOM",
    alt: "Luxury Bedroom Interior Design by MSI Construction Delhi NCR",
    meta: "1,500 SQ FT • PRIVATE RETREAT • 2024"
  },
  {
    src: "/GPT/Residential/Bathroom/spa-inspired-bathroom-design.png",
    ref: "REF NO. 550-BTH",
    title: "BATHROOM",
    alt: "Spa-Inspired Bathroom Design by MSI Construction",
    meta: "600 SQ FT • SPA INSPIRED • 2023"
  },
  {
    src: "/GPT/Residential/Staircase/architectural-staircase-design.png",
    ref: "REF NO. 210-STR",
    title: "STAIRCASE",
    alt: "Architectural Staircase Design Residential Construction",
    meta: "300 SQ FT • ARCHITECTURAL FEATURE • 2022"
  },
  {
    src: "/GPT/Residential/Living Room/open-concept-living-room-design.png",
    ref: "REF NO. 816-LIV",
    title: "LIVING SPACE",
    alt: "Open Concept Living Room Interior Design Delhi NCR",
    meta: "2,000 SQ FT • OPEN CONCEPT • 2024"
  },
  {
    src: "/GPT/Residential/Exterior/residential-landscape-design.png",
    ref: "REF NO. 921-EXT",
    title: "EXTERIOR",
    alt: "Residential Exterior and Landscape Design MSI Construction",
    meta: "15,000 SQ FT • LANDSCAPE DESIGN • 2023"
  },
  {
    src: "/GPT/Residential/Kitchen/modern-pantry-kitchen-storage.png",
    ref: "REF NO. 403-KIT",
    title: "PANTRY",
    alt: "Modern Pantry and Kitchen Storage Design",
    meta: "400 SQ FT • FUNCTIONAL STORAGE • 2024"
  },
  {
    src: "/GPT/Residential/Bedroom/luxury-master-suite-design.png",
    ref: "REF NO. 305-BED",
    title: "MASTER SUITE",
    alt: "Luxury Master Suite Bedroom Interior Design Delhi",
    meta: "2,200 SQ FT • LUXURY LIVING • 2023"
  },
  {
    src: "/GPT/Residential/Living Room/entertainment-lounge-interior.png",
    ref: "REF NO. 817-LIV",
    title: "LOUNGE",
    alt: "Entertainment Lounge Interior Design by MSI Construction",
    meta: "1,800 SQ FT • ENTERTAINMENT HUB • 2022"
  }
];

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

export default function HeroCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const imageIndex = Math.abs(page % showcaseImages.length);
  const currentIndex = Number.isNaN(imageIndex) ? 0 : imageIndex;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  const goToSlide = (index: number) => {
    setPage([index, index > currentIndex ? 1 : -1]);
  };

  const handleHover = () => {
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1000); // pause for just 1 second on hover, then resume automatically
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 4000); // 4 seconds duration to allow zoom to be visible
    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        paginate(1);
        handleHover();
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
        handleHover();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
      handleHover();
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
      handleHover();
    }
  };

  const currentImage = showcaseImages[currentIndex];

  return (
    <Reveal className={styles.carouselContainer} delay={200}>
      <div 
        className={`${styles.carouselWrapper} ${isPaused ? styles.isPaused : ''}`}
        onTouchStart={handleHover}
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
          >
            <div className={styles.imgContainer}>
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className={styles.img}
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority={true}
              />
            </div>
            
            <div className={styles.overlay}>
              <div className={styles.contentFrame}>
                <div className={styles.cornerTopLeft} />
                <div className={styles.cornerTopRight} />
                <div className={styles.cornerBottomLeft} />
                <div className={styles.cornerBottomRight} />
                
                <div className={styles.textContent}>
                  <h3 className={styles.titleText}>{currentImage.title}</h3>
                  <span className={styles.metaText}>{currentImage.meta}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.dotsContainer}>
          {showcaseImages.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
              onClick={() => { goToSlide(idx); handleHover(); }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Progress Bar */}
        <div key={`progress-${page}`} className={styles.progressBar} />
      </div>
    </Reveal>
  );
}
