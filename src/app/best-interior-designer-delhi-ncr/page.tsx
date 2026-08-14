import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../seo.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionContact from '@/components/SectionContact';

export const metadata: Metadata = {
  title: 'Best Interior Designer in Delhi NCR',
  description: 'MSI Construction is the best interior designer and execution firm in Delhi NCR. We specialize in luxury residential, corporate offices, and 5-star hotel interiors. Book a consultation!',
  alternates: {
    canonical: 'https://www.msiconstruction.in/best-interior-designer-delhi-ncr',
  }
};

export default function BestInteriorDesignerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'MSI Construction - Interior Design',
    'image': 'https://www.msiconstruction.in/logo.png',
    '@id': 'https://www.msiconstruction.in',
    'url': 'https://www.msiconstruction.in/best-interior-designer-delhi-ncr',
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
    'description': 'Top-rated interior design and execution firm in Delhi NCR. Specialists in high-end woodwork, luxury residential, and hospitality interiors.'
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
            <Link href="/">Home</Link> &gt; <span>Best Interior Designer in Delhi NCR</span>
          </div>
          <h1>Best Interior Designer in Delhi NCR</h1>
          <p>Transforming spaces with bespoke interior design and flawless execution for luxury homes, corporate offices, and 5-star hotels across Delhi, Gurugram, and Noida.</p>
        </section>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p>
              When searching for the <strong>best interior designer in Delhi NCR</strong>, you need more than just a visionary—you need a team capable of flawless execution. At MSI Construction, we bridge the gap between stunning architectural design and precise implementation. We are renowned across the region for our mastery in premium interior fit-outs, bespoke woodwork, and high-end residential styling.
            </p>
            <p>
              Your space is a reflection of your lifestyle or brand. Whether it is an opulent penthouse in South Delhi, a modern corporate headquarters in Noida, or a luxury hotel suite in Gurugram, our interior execution team ensures every detail is perfect. We have proudly executed interior woodwork and fit-outs for prestigious clients like JW Marriott (Chandigarh & Aerocity), Taj Vivanta, and ITC Grand Chola.
            </p>
            <h2>Our Interior Design & Execution Expertise</h2>
            <p>
              Unlike standard interior designers who hand over a 3D render and leave you to find contractors, MSI Construction offers a complete turnkey solution. We source the finest materials globally—from Italian marble to premium hardwoods and custom lighting fixtures. Our master craftsmen and site supervisors work meticulously to ensure the final result looks exactly like the design concept, delivered on time and without cost overruns.
            </p>
          </div>

          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <h3>01</h3>
              <p><strong>Luxury Residential Interiors:</strong> Creating elegant, comfortable, and highly personalized living spaces (Villas, Apartments, Farmhouses).</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>02</h3>
              <p><strong>Hospitality & Commercial:</strong> Proven expertise in executing 5-star hotel interiors, premium restaurants, and modern office spaces.</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>03</h3>
              <p><strong>Master Woodwork & Joinery:</strong> Unmatched craftsmanship in custom furniture, wardrobes, wall paneling, and modular kitchens.</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>04</h3>
              <p><strong>Flawless Execution:</strong> We manage the entire process, ensuring strict adherence to the design vision and timeline.</p>
            </div>
          </div>
        </div>

        <section className={styles.services}>
          <h2>Transforming Spaces Across the NCR</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Luxury Homes in Delhi</h3>
              <p>Providing bespoke interior design solutions for farmhouses in Chhatarpur and luxury apartments in South and Central Delhi.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Corporate & Residential in Gurugram</h3>
              <p>Executing modern office interiors and high-end residential styling in DLF Cyber City, Golf Course Road, and surrounding premium sectors.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Commercial Hubs in Noida</h3>
              <p>Delivering turnkey interior fit-outs for retail spaces, corporate towers, and expansive villas along the Noida Expressway.</p>
            </div>
          </div>
        </section>

        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
