import type { Metadata } from 'next';
import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import SectionContact from "@/components/SectionContact";
import ProjectsGallery, { ProjectImage } from "@/components/ProjectsGallery";
import styles from "./Projects.module.css";

// Helper to recursively get all files in a directory
async function getFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

export const metadata: Metadata = {
  title: 'Our Construction & Interior Design Projects — Portfolio',
  description: 'View MSI Construction\'s portfolio of completed residential, commercial, and interior design projects across Delhi NCR and India. See our work in luxury homes, offices, hotels, and more.',
  alternates: { canonical: 'https://www.msiconstruction.in/projects' },
  openGraph: {
    title: 'Project Portfolio | MSI Construction',
    description: 'Browse 1000+ completed construction and interior design projects across Delhi, Noida, Gurgaon & India.',
    url: 'https://www.msiconstruction.in/projects',
  },
};

export default async function ProjectsPage() {
  const publicDir = path.join(process.cwd(), "public");
  const gptDir = path.join(publicDir, "GPT");
  
  let projects: ProjectImage[] = [];

  try {
    const allFiles = await getFiles(gptDir);
    
    projects = allFiles
      .filter((file) => !file.includes(".DS_Store"))
      .map((file) => {
        // file path looks like: /.../public/GPT/Residential/Bedroom/image.png
        const relativePath = file.replace(publicDir, "");
        // path parts: ["", "GPT", "Residential", "Bedroom", "image.png"]
        const parts = relativePath.split(path.sep);
        
        const category = parts[2] || "Others";
        // If there's a subcategory (e.g., Bedroom)
        const subcategory = parts.length > 4 ? parts[3] : undefined;
        const rawFilename = parts[parts.length - 1].replace(".png", "").replace(".jpg", "");
        
        // Generate descriptive alt text instead of using raw filenames
        const isGenericName = rawFilename.toLowerCase().startsWith('chatgpt');
        const filename = isGenericName
          ? `${subcategory || category} Interior Design by MSI Construction`
          : rawFilename.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());

        return {
          src: relativePath.replace(/\\/g, "/"), // Ensure web-safe slashes
          category,
          subcategory,
          filename
        };
      });
  } catch (error) {
    console.error("Error reading GPT directory:", error);
  }

  // Use the specific office interior image requested by the user, or fallback
  const targetImage = "/GPT/Commercial/commercial-office-wooden-slat-ceiling-construction.png";
  const bgImage = projects.find((p) => p.src === targetImage)?.src || projects.find((p) => p.category === "Commercial")?.src || "/img/residential-exterior-construction.jpg";

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <Image
              src={bgImage}
              alt="MSI Construction Project Portfolio - Commercial and Interior Design Work"
              fill
              className={styles.heroImg}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>

          <div className={styles.container}>
            <Reveal>
              <span className={styles.subtitle}>PORTFOLIO OF EXCELLENCE</span>
              <h1 className={styles.title}>
                Our Construction &<br />
                Interior Design Projects
              </h1>
            </Reveal>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <ProjectsGallery projects={projects} />
          </div>
        </section>

        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
