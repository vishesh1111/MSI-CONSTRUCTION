"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Reveal from "./Reveal";
import InquiryModal from "./InquiryModal";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname === "/projects") {
        setActiveSection("projects");
      } else if (pathname === "/about") {
        setActiveSection("about");
      } else if (pathname === "/services") {
        setActiveSection("services");
      } else if (pathname === "/contact") {
        setActiveSection("contact");
      } else {
        setActiveSection("");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id], div[id="contact"]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  return (
    <>
      <Reveal className={styles.headerWrap}>
        <header className={styles.header}>
          <div className={styles.container}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/img/MSI_cropped.png" 
                alt="MSI Construction" 
                width={160} 
                height={60} 
                className={styles.logoImg} 
                priority
              />
            </Link>

            <nav className={styles.nav}>
              <Link href="/#home" className={activeSection === "home" ? styles.active : ""}>HOME</Link>
              <Link href="/about" className={activeSection === "about" || activeSection === "about-2" ? styles.active : ""}>ABOUT</Link>
              <Link href="/services" className={activeSection === "services" ? styles.active : ""}>SERVICES</Link>
              <Link href="/projects?filter=RESIDENTIAL" className={activeSection === "projects" ? styles.active : ""}>PROJECTS</Link>
              <a href="/msi-profile.pdf" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
              <Link href="/contact" className={activeSection === "contact" ? styles.active : ""}>CONTACT</Link>
            </nav>

            <div className={styles.actions}>
              <button 
                className={styles.inquireBtn} 
                onClick={() => setIsInquiryModalOpen(true)}
              >
                <span>INQUIRE</span>
              </button>
            </div>
          </div>
        </header>
      </Reveal>

      <InquiryModal 
        isOpen={isInquiryModalOpen} 
        onClose={() => setIsInquiryModalOpen(false)} 
      />
    </>
  );
}
