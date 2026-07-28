import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionContact from "@/components/SectionContact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', background: 'var(--bg-primary)', minHeight: '100vh' }}>
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
