import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
// @ts-ignore
import { servicesData } from '@/lib/services-data';
// @ts-ignore
import { locationsData } from '@/lib/locations-data';
import styles from './ComboPage.module.css';

// Generate all 91 combinations (13 services × 7 locations)
export function generateStaticParams() {
  const params: { slug: string; location: string }[] = [];
  
  if (servicesData && locationsData) {
    servicesData.forEach((service: any) => {
      locationsData.forEach((loc: any) => {
        params.push({
          slug: service.slug,
          location: loc.slug,
        });
      });
    });
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; location: string }> }): Promise<Metadata> {
  const { slug, location: locationSlug } = await params;
  const service = servicesData?.find((s: any) => s.slug === slug);
  const location = locationsData?.find((l: any) => l.slug === locationSlug);

  if (!service || !location) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  const title = `${service.title} in ${location.city} — MSI Construction`;
  const description = `Looking for ${service.title.toLowerCase()} in ${location.city}? MSI Construction offers premium services with 30+ years experience. Start your project today.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.msiconstruction.in/services/${slug}/${locationSlug}`,
    },
    alternates: {
      canonical: `https://www.msiconstruction.in/services/${slug}/${locationSlug}`,
    }
  };
}

function generateComboContent(service: any, location: any) {
  const city = location.city;
  const state = location.state;
  const sTitle = service.title.toLowerCase();

  return [
    `Looking for ${sTitle} in ${city}? MSI Construction is a leading ${sTitle} company in ${city}, ${state}. With over 30 years of industry experience and a portfolio of 1000+ completed projects, we bring unparalleled expertise to every project in the region.`,
    `Our approach to ${sTitle} in ${city} is defined by our commitment to quality craftsmanship and strict adherence to local regulations. Whether you're planning a new build or a major renovation, our team understands the unique architectural and structural requirements of ${city}. We handle everything from initial planning and approvals to turnkey execution, ensuring a seamless experience.`,
    `When you choose MSI Construction for your ${sTitle} needs in ${city}, you're partnering with a firm that values transparency, luxury, and timely delivery. We take pride in transforming the urban landscape of ${city} and serving our clients with top-tier construction and interior design solutions.`
  ];
}

function generateComboFaqs(service: any, location: any) {
  const sFaqs = service.faqs ? service.faqs.slice(0, 3) : [];
  const lFaqs = location.faqs ? location.faqs.slice(0, 3) : [];
  
  const combined = [...sFaqs, ...lFaqs];
  
  return combined.map((f: any) => {
    return {
      q: f.q.replace(/in (Delhi|Noida|Gurgaon|Gurugram|Haryana|Uttar Pradesh|Delhi NCR|India)/ig, `in ${location.city}`),
      a: f.a.replace(/in (Delhi|Noida|Gurgaon|Gurugram|Haryana|Uttar Pradesh|Delhi NCR|India)/ig, `in ${location.city}`)
    };
  });
}

export default async function ComboPage({ params }: { params: Promise<{ slug: string; location: string }> }) {
  const { slug, location: locationSlug } = await params;
  const service = servicesData?.find((s: any) => s.slug === slug);
  const location = locationsData?.find((l: any) => l.slug === locationSlug);

  if (!service || !location) {
    notFound();
  }

  const generatedContent = generateComboContent(service, location);
  const comboFaqs = generateComboFaqs(service, location);
  const features = service.features || [
    'Turnkey Project Execution',
    '30+ Years of Industry Experience',
    'Uncompromising Quality & Luxury',
    'Timely Delivery & Transparency',
    'Expert Local Knowledge'
  ];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: 'var(--bg-primary)' }}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> <span>&gt;</span>
            <Link href="/services">Services</Link> <span>&gt;</span>
            <Link href={`/services/${service.slug}`}>{service.title}</Link> <span>&gt;</span>
            <span>{location.city}</span>
          </div>
          
          <Reveal className={styles.hero}>
            <h1 className={styles.title}>{service.title} in {location.city} — MSI Construction</h1>
            <p className={styles.subtitle}>
              Delivering premium {service.title.toLowerCase()} tailored to the unique landscape of {location.city}.
            </p>
          </Reveal>

          <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
              <Reveal>
                {generatedContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </Reveal>

              <Reveal>
                <h2>Key Benefits of Our {service.title}</h2>
                <ul>
                  {features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </Reveal>

              {comboFaqs.length > 0 && (
                <Reveal className={styles.faqSection}>
                  <h2>Frequently Asked Questions</h2>
                  {comboFaqs.map((faq: any, idx: number) => (
                    <div key={idx} className={styles.faqItem}>
                      <h3>{faq.q}</h3>
                      <p>{faq.a}</p>
                    </div>
                  ))}
                </Reveal>
              )}
            </div>

            <aside>
              <Reveal className={styles.sidebar}>
                <h3>Explore More</h3>
                <ul className={styles.sidebarList}>
                  <li>
                    <Link href={`/services/${service.slug}`}>
                      View Full {service.title} Service
                    </Link>
                  </li>
                  <li>
                    <Link href={`/locations/${location.slug}`}>
                      More Services in {location.city}
                    </Link>
                  </li>
                </ul>

                <h3 style={{ marginTop: '2rem' }}>Other Locations</h3>
                <ul className={styles.sidebarList}>
                  {locationsData?.filter((l: any) => l.slug !== location.slug).slice(0, 5).map((l: any) => (
                    <li key={l.slug}>
                      <Link href={`/services/${service.slug}/${l.slug}`}>
                        {service.title} in {l.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </aside>
          </div>

          <Reveal className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Start Your {service.title} Project in {location.city}</h2>
            <p className={styles.ctaText}>
              Contact MSI Construction today to discuss your vision and get a free consultation.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              GET IN TOUCH
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
