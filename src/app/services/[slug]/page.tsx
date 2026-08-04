import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data';
import styles from './ServicePage.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <JsonLd type="breadcrumb" data={{ items: [
        { name: 'Home', url: 'https://www.msiconstruction.in' },
        { name: 'Services', url: 'https://www.msiconstruction.in/services' },
        { name: service.title, url: `https://www.msiconstruction.in/services/${service.slug}` },
      ]}} />
      <JsonLd type="service" data={{
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        url: `https://www.msiconstruction.in/services/${service.slug}`,
      }} />
      <JsonLd type="faq" data={{ questions: service.faqs }} />
      
      <main className={styles.bgPrimary}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <Reveal>
              <div className={styles.breadcrumb}>
                <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <span>{service.title}</span>
              </div>
              <h1>{service.h1}</h1>
              <p>{service.heroDescription}</p>
            </Reveal>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.mainContent}>
              <Reveal>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={500}
                  className={styles.serviceImage}
                  priority
                />
                
                <div className={styles.content}>
                  {service.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  
                  <h2>Why Choose MSI for {service.title}?</h2>
                  <ul className={styles.features}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className={styles.faqSection}>
                  <h2>Frequently Asked Questions</h2>
                  {service.faqs.map((faq, idx) => (
                    <details key={idx} className={styles.faq}>
                      <summary>{faq.q}</summary>
                      <p>{faq.a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <div className={styles.cta}>
                  <h2>Ready to start your {service.title.toLowerCase()} project?</h2>
                  <p>Our experts are ready to bring your vision to life.</p>
                  <Link href="/contact" className={styles.ctaBtn}>
                    Get a Free Consultation
                  </Link>
                </div>
              </Reveal>
            </div>

            <aside className={styles.sidebar}>
              <Reveal>
                <div className={styles.sidebarCard}>
                  <h3>Related Services</h3>
                  <ul className={styles.relatedList}>
                    {service.relatedServices.map((relatedSlug) => {
                      const related = getServiceBySlug(relatedSlug);
                      if (!related) return null;
                      return (
                        <li key={relatedSlug}>
                          <Link href={`/services/${relatedSlug}`}>
                            {related.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
