import Image from "next/image";
import Link from "next/link";
import styles from "./SectionFounders.module.css";
import Reveal from "./Reveal";

interface Props {
  isHomepage?: boolean;
}

export default function SectionFounders({ isHomepage = false }: Props) {
  const founders = [
    {
      name: "MOHD. TAUSIF",
      role: "Visionary",
      image: "/img/tausif-founder-msi-construction.jpg"
    },
    {
      name: "SHUAIBH KHAN",
      role: "Visionary",
      image: "/img/shuaibh-khan-msi-construction.jpg"
    }
  ];

  return (
    <section className={styles.section} id="founders">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <span className={styles.subtitle}>MINDSET</span>
          <h2 className={styles.title}>The Visionaries</h2>
          <p className={styles.desc}>
            A collective of rogue thinkers and master craftsmen dedicated to redefining the built environment.
          </p>
        </Reveal>

        {isHomepage ? (
          <Reveal className={styles.actionContainer}>
            <Link href="/about#founders" className={styles.button}>
              <span>VIEW MSI FOUNDERS</span>
            </Link>
          </Reveal>
        ) : (
          <div className={styles.grid}>
            {founders.map((founder, index) => (
              <Reveal key={index} delay={index * 200} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={founder.image} 
                    alt={founder.name} 
                    fill 
                    className={styles.img} 
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{founder.name}</h3>
                  <p className={styles.role}>{founder.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
