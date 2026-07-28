"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import styles from "./HeroCarousel.module.css";
import Reveal from "./Reveal";

const showcaseImages = [
  { src: "/GPT/Residential/Exterior/ChatGPT Image Jul 28, 2026, 06_53_54 AM.png", alt: "Exterior" },
  { src: "/GPT/Residential/Living Room/ChatGPT Image Jul 28, 2026, 06_56_20 AM.png", alt: "Living Room" },
  { src: "/GPT/Residential/Kitchen/ChatGPT Image Jul 28, 2026, 06_28_42 AM.png", alt: "Kitchen" },
  { src: "/GPT/Residential/Wardrobe/ChatGPT Image Jul 28, 2026, 06_54_16 AM.png", alt: "Wardrobe" }
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

  const handleInteraction = () => {
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, [paginate]);

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

  const currentImage = showcaseImages[currentIndex];

  return (
    <Reveal className={styles.carouselContainer} delay={200}>
      <div 
        className={styles.carouselWrapper}
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
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className={styles.img}
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority={true}
            />
            <div className={styles.overlay}>
              <span className={styles.imageAlt}>{currentImage.alt}</span>
            </div>
          </motion.div>
        </AnimatePresence>

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
          {showcaseImages.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
              onClick={() => { goToSlide(idx); handleInteraction(); }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
