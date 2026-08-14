import { Metadata } from 'next';
import Link from 'next/link';
import { getAllLocationSlugs, getLocationBySlug } from '@/lib/locations-data';
import styles from '../seo.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Service Locations | MSI Construction',
  description: 'MSI Construction serves multiple locations including Delhi, Noida, Gurgaon, and more. Find our construction and interior design services near you.',
  alternates: {
    canonical: 'https://www.msiconstruction.in/locations',
  }
};

export default function LocationsIndexPage() {
  const slugs = getAllLocationSlugs();
  const locations = slugs.map((slug) => getLocationBySlug(slug)).filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.msiconstruction.in'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Locations',
        'item': 'https://www.msiconstruction.in/locations'
      }
    ]
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
            <Link href="/">Home</Link> &gt; Locations
          </div>
          <h1>Our Service Locations</h1>
          <p>We provide expert building contractor and interior design services across the Delhi NCR region.</p>
        </section>

        <section className={styles.services}>
          <h2>Find Us in Your City</h2>
          <div className={styles.servicesGrid}>
            {locations.map((location) => location && (
              <Link key={location.slug} href={`/locations/${location.slug}`} className={styles.serviceCard}>
                <h3>{location.city}</h3>
                <p>{location.metaDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Build?</h2>
          <p>Get a Free Quote for your project today.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Contact Us Now
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
