import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionFounders from "@/components/SectionFounders";
import styles from "./About.module.css";

export const metadata: Metadata = {
  title: 'About MSI Construction — 30+ Years of Construction Excellence in India',
  description: 'Learn about MSI Construction, a trusted construction company and interior design firm led by Mr. Tausif. 30+ years of experience delivering projects for JW Marriott, Taj Vivanta & ITC Grand Chola across Delhi NCR and India.',
  alternates: { canonical: 'https://www.msiconstruction.in/about' },
  openGraph: {
    title: 'About MSI Construction — 30+ Years of Construction Excellence',
    description: 'Trusted by JW Marriott, Taj Vivanta & ITC Grand Chola. Premier construction & interior execution company in Delhi NCR.',
    url: 'https://www.msiconstruction.in/about',
  },
};

export default function AboutPage() {


  const whyChooseUs = [
    {
      title: "Precision and Expertise",
      desc: "With years of experience in both construction and interior execution, we are known for our meticulous attention to detail and commitment to executing complex projects seamlessly."
    },
    {
      title: "On-Time, On-Budget Delivery",
      desc: "We understand the importance of deadlines and budgets, and we ensure that every project is completed on schedule, without compromising on quality."
    },
    {
      title: "Comprehensive Execution",
      desc: "Whether it's a large-scale building project or detailed interior work, we handle every aspect of execution, providing a one-stop solution for our clients."
    },
    {
      title: "High-Quality Craftsmanship",
      desc: "We use the finest materials and work with skilled craftsmen, ensuring that every project meets the highest standards of quality, durability, and aesthetics."
    },
    {
      title: "Client-Focused Approach",
      desc: "We pride ourselves on being client-centric, maintaining clear communication throughout the project and ensuring our clients' needs and expectations are always met."
    }
  ];

  const siteServices = [
    "E-2315 Palam Vihar, Gurugram (Civil with Interior)",
    "E-2319 Palam Vihar, Gurugram (Civil with Interior)",
    "F-2473 Palam Vihar, Gurugram (Civil with Interior)",
    "J-1208A Palam Vihar Gurugram (Civil with Interior)",
    "Plot No-824, Sector-14, Gurugram (Civil with complete Interior)",
    "BD-77 Ansal Golf Link, Greater Noida (Civil with Interior)",
    "J W Mariott Hotel, Chandigarh & Aerocity Delhi (Interior Wooden Work)",
    "Hotel Taj Vivanta, Gurugram (Wooden Work)",
    "Sunshine City, Bhiwadi (Complete Interior Work)",
    "ITC Grand Chola Hotel, Chennai, (Interior Wooden Work)"
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>


        {/* Hero H1 */}
        <section className={styles.whySection}>
          <div className={styles.container}>
            <Reveal>
              <h1 className={styles.sectionTitle}>
                ABOUT <span className={styles.italic}>MSI CONSTRUCTION</span>
              </h1>
              <div className={styles.titleLine}></div>
            </Reveal>
          </div>
        </section>

        {/* Why Choose Us Timeline */}
        <section className={styles.whySection}>
          <div className={styles.container}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                WHY CHOOSE <span className={styles.italic}>MSI CONSTRUCTION?</span>
              </h2>
              <div className={styles.titleLine}></div>
            </Reveal>

            <div className={styles.timeline}>
              {whyChooseUs.map((item, index) => (
                <Reveal key={index} delay={index * 200} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        {/* New Investment / Responsibility Section */}
        <section className={styles.manifestoSection}>
          <div className={styles.container}>
            <Reveal className={styles.manifestoBox}>
              <h2 className={styles.manifestoTitle}>
                YOUR INVESTMENT <span className={styles.italic}>OUR RESPONSIBILITY</span>
              </h2>
              <div className={styles.manifestoTextGroup}>
                <p>
                  MSI CONSTRUCTION, led by Mr. Tausif, is a distinguished name in the construction and interior execution industry. Specializing in the precise and high-quality execution of building construction and interior work, MSI CONSTRUCTION has earned a reputation for delivering projects on time and within budget while maintaining the highest standards of craftsmanship and attention to detail.
                </p>
                <p>
                  At MSI CONSTRUCTION, we focus on execution, not design. Our expertise lies in bringing architectural and interior design plans to life with flawless implementation. Whether it's constructing hotels, hostels, hospitals, schools, office buildings, or custom dream homes, we handle every aspect of the construction process with precision. Additionally, we are specialists in executing comprehensive interior work, ensuring that every space we work on is both functional and aesthetically pleasing.
                </p>
                <div className={styles.manifestoLink}>www.msiconstruction.in</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* New Service Provided At Site Section */}
        <section className={styles.locationsSection}>
          <div className={styles.container}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                SERVICE PROVIDED <span className={styles.italic}>AT SITE</span>
              </h2>
              <div className={styles.titleLine}></div>
            </Reveal>
            
            <div className={styles.locationsGrid}>
              {siteServices.map((site, index) => (
                <Reveal key={index} delay={index * 100} className={styles.locationItem}>
                  <span className={styles.bullet}>•</span>
                  <span className={styles.locationText}>{site}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Founders Section */}
        <SectionFounders />

      </main>
      <Footer />
    </>
  );
}
