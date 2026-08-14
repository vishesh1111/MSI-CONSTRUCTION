import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../seo.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionContact from '@/components/SectionContact';

export const metadata: Metadata = {
  title: 'Best Construction Company in Delhi NCR',
  description: 'Looking for the best construction company in Delhi NCR? MSI Construction delivers luxury residential, commercial, and hospitality projects with 30+ years of expertise. Get a free quote today!',
  alternates: {
    canonical: 'https://www.msiconstruction.in/best-construction-company-delhi-ncr',
  }
};

export default function BestConstructionCompanyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'MSI Construction',
    'image': 'https://www.msiconstruction.in/logo.png',
    '@id': 'https://www.msiconstruction.in',
    'url': 'https://www.msiconstruction.in/best-construction-company-delhi-ncr',
    'telephone': '+919319444747',
    'priceRange': '$$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Plot No -210, Gali No-05, Golden Ranaji Enclave, Nangli Dairy',
      'addressLocality': 'New Delhi',
      'addressRegion': 'Delhi',
      'postalCode': '110043',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 28.6821,
      'longitude': 77.0627
    },
    'description': 'The premier construction company in Delhi NCR, specializing in luxury residential, commercial, and hospitality projects.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> &gt; <span>Best Construction Company in Delhi NCR</span>
          </div>
          <h1>Best Construction Company in Delhi NCR</h1>
          <p>Delivering luxury residential, commercial, and hospitality projects with unmatched precision, quality, and on-time execution across Delhi, Noida, and Gurgaon.</p>
        </section>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p>
              Finding the <strong>best construction company in Delhi NCR</strong> can be a daunting task. The region is filled with contractors, but few have the proven track record, resources, and engineering expertise to deliver large-scale, high-end projects flawlessly. At MSI Construction, we have spent over 30 years perfecting the art of building.
            </p>
            <p>
              Whether you are looking to build a custom luxury villa in Gurgaon, a commercial office complex in Noida, or a boutique hotel in South Delhi, our team of expert civil engineers, project managers, and craftsmen ensure your vision is executed to perfection. We are proud to have partnered with industry giants like JW Marriott, Taj Vivanta, and ITC Grand Chola, bringing their architectural blueprints to life.
            </p>
            <h2>Why Choose MSI Construction?</h2>
            <p>
              What sets us apart as the top building contractor in the National Capital Region is our unwavering commitment to quality and transparency. From the initial foundation to the final interior finishing, we handle everything under one roof. Our "execution-first" approach means we don't just promise—we deliver. We use premium-grade materials, adhere strictly to safety protocols, and guarantee on-time completion within your approved budget.
            </p>
          </div>

          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <h3>01</h3>
              <p><strong>30+ Years Experience:</strong> Over three decades of executing landmark projects across India.</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>02</h3>
              <p><strong>Turnkey Solutions:</strong> Complete civil construction and premium interior execution under one roof.</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>03</h3>
              <p><strong>On-Time Delivery:</strong> We respect your deadlines and budget, guaranteeing a smooth handover process.</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>04</h3>
              <p><strong>Premium Quality:</strong> Partnering with top hospitality brands demands perfection, and we bring that same standard to every project.</p>
            </div>
          </div>
        </div>

        <section className={styles.services}>
          <h2>Areas We Serve in Delhi NCR</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Delhi</h3>
              <p>Serving South Delhi, Central Delhi, Vasant Vihar, Defence Colony, and surrounding premium neighborhoods.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Gurgaon (Gurugram)</h3>
              <p>Executing luxury villas, high-rise apartments, and commercial hubs in DLF Phases, Golf Course Road, and Palam Vihar.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Noida & Greater Noida</h3>
              <p>Building corporate offices, industrial spaces, and expansive residential properties across Sector 150, Expressway, and Ansal Golf Link.</p>
            </div>
          </div>
        </section>

        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
