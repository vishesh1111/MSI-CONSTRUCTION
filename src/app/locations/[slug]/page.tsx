import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations-data';
import styles from './LocationPage.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  
  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://msiconstruction.com/locations/${location.slug}`,
    }
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://msiconstruction.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Locations',
        'item': 'https://msiconstruction.com/locations'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': location.city,
        'item': `https://msiconstruction.com/locations/${location.slug}`
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
            <Link href="/">Home</Link> &gt; <Link href="/locations">Locations</Link> &gt; {location.city}
          </div>
          <h1>{location.h1}</h1>
          <p>Expert building contractors and interior designers serving {location.city}, {location.state}</p>
        </section>

        <div className={styles.content}>
          <div className={styles.textSection}>
            {location.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.highlights}>
            {location.highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightCard}>
                <h3>{`0${index + 1}`}</h3>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <section className={styles.services}>
          <h2>Our Services in {location.city}</h2>
          <div className={styles.servicesGrid}>
            <Link href="/services/construction" className={styles.serviceCard}>
              <h3>Residential Construction</h3>
              <p>Premium home building services in {location.city}, delivering luxury and structural integrity.</p>
            </Link>
            <Link href="/services/interior-design" className={styles.serviceCard}>
              <h3>Interior Design</h3>
              <p>Bespoke interior styling for homes and offices across {location.city}.</p>
            </Link>
            <Link href="/services/commercial" className={styles.serviceCard}>
              <h3>Commercial Construction</h3>
              <p>State-of-the-art corporate offices and retail spaces built to exact specifications.</p>
            </Link>
          </div>
        </section>

        <section className={styles.faq}>
          <h2>Frequently Asked Questions in {location.city}</h2>
          <div className={styles.faqList}>
            {location.faqs.map((faq, index) => (
              <details key={index} className={styles.faqItem}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Build in {location.city}?</h2>
          <p>Get a Free Quote for Your {location.city} Project today.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Contact Us Now
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
