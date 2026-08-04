import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionCraftsmanship from "@/components/SectionCraftsmanship";
import SectionProcess from "@/components/SectionProcess";
import SectionStudio from "@/components/SectionStudio";
import styles from "./Services.module.css";

export const metadata: Metadata = {
  title: 'Construction & Interior Design Services in Delhi NCR',
  description: 'Explore MSI Construction\'s services: residential construction, commercial construction, industrial building, hotel & hospitality construction, interior design, turnkey projects, and specialized property construction across Delhi NCR and India.',
  alternates: { canonical: 'https://msiconstruction.in/services' },
  openGraph: {
    title: 'Construction & Interior Design Services | MSI Construction',
    description: 'Full-service construction and interior design company in Delhi NCR. Residential, commercial, industrial, hospitality & turnkey projects.',
    url: 'https://msiconstruction.in/services',
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Hotel, Hostel & Hospitality Construction",
      desc: "From boutique hotels to large hostels, we execute the construction of hospitality spaces that are not only functional but also inviting and efficient.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 22v-6.57"/><path d="M12 11h.01"/><path d="M12 7h.01"/><path d="M14 15.43V22"/><path d="M15 16a5 5 0 0 0-6 0"/><path d="M16 11h.01"/><path d="M16 7h.01"/><path d="M8 11h.01"/><path d="M8 7h.01"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
    },
    {
      title: "Residential Construction",
      desc: "We build dream homes with careful attention to detail, delivering bespoke, high-quality residential projects that match our clients' exact specifications.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    },
    {
      title: "Commercial Buildings & Offices",
      desc: "We handle office and commercial space construction, ensuring the perfect combination of functionality, comfort, and design that meets business needs.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
    },
    {
      title: "Institutional Construction",
      desc: "We are skilled in constructing schools, hospitals, and other institutional buildings, ensuring safety, accessibility, and compliance with all regulations.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 22 7 12 2"/><rect x="2" y="20" width="20" height="2"/><rect x="6" y="7" width="2" height="13"/><rect x="10" y="7" width="2" height="13"/><rect x="14" y="7" width="2" height="13"/><rect x="18" y="7" width="2" height="13"/></svg>
    },
    {
      title: "Farmhouses & Specialized Properties",
      desc: "Whether it's a luxurious farmhouse or a specialized project, we provide expert execution for unique and custom property builds.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/></svg>
    }
  ];
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: 'var(--bg-primary)' }}>
        {/* Animated Core Services Section */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                OUR CORE SERVICES <span className={styles.italic}>INCLUDE:</span>
              </h2>
              <div className={styles.titleLine}></div>
              <h3 className={styles.subHeading}>Building Construction:</h3>
            </Reveal>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <Reveal key={index} delay={index * 150} className={styles.serviceCard}>
                  <h4 className={styles.serviceTitle}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    {service.title}
                  </h4>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <SectionCraftsmanship />
        <SectionProcess />
        <SectionStudio />
      </main>
      <Footer />
    </>
  );
}
