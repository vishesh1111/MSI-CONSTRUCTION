import type { Metadata } from 'next';
import fs from "fs/promises";
import path from "path";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import SectionContact from "@/components/SectionContact";
import styles from "./Videos.module.css";

// Helper to recursively get all files in a directory
async function getVideoFiles(dir: string): Promise<string[]> {
  try {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getVideoFiles(res) : res;
      })
    );
    return Array.prototype.concat(...files);
  } catch (e) {
    return [];
  }
}

export const metadata: Metadata = {
  title: 'Construction & Interior Design Project Videos',
  description: 'Watch MSI Construction\'s project videos showcasing our residential, commercial, and interior design work across Delhi NCR. See our construction quality and craftsmanship in action.',
  alternates: { canonical: 'https://msiconstruction.in/videos' },
  openGraph: {
    title: 'Project Videos | MSI Construction',
    description: 'Watch our construction and interior design projects come to life.',
    url: 'https://msiconstruction.in/videos',
  },
};

export default async function VideosPage() {
  const publicDir = path.join(process.cwd(), "public");
  
  // Find all video files in the public directory recursively
  const allFiles = await getVideoFiles(publicDir);
  
  const videoFiles = allFiles
    .filter(file => file.endsWith(".mp4") || file.endsWith(".webm") || file.endsWith(".mov"))
    .map(file => file.replace(publicDir, "").replace(/\\/g, "/"));

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <Reveal>
              <span className={styles.subtitle}>VIDEO PORTFOLIO</span>
              <h1 className={styles.title}>
                Our Projects<br />
                In Motion
              </h1>
            </Reveal>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <Reveal>
              {videoFiles.length > 0 ? (
                <div className={styles.videoGrid}>
                  {videoFiles.map((video, idx) => (
                    <div key={idx} className={styles.videoCard}>
                      <video 
                        src={video} 
                        className={styles.videoPlayer} 
                        controls 
                        controlsList="nodownload nofullscreen"
                        preload="metadata"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem" }}>
                  No video projects have been uploaded yet.
                </p>
              )}
            </Reveal>
          </div>
        </section>
        
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
