import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionCraftsmanship from "@/components/SectionCraftsmanship";
import SectionProcess from "@/components/SectionProcess";
import SectionStudio from "@/components/SectionStudio";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: 'var(--bg-primary)' }}>
        <SectionCraftsmanship />
        <SectionProcess />
        <SectionStudio />
      </main>
      <Footer />
    </>
  );
}
