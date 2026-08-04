import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionContact from "@/components/SectionContact";

export const metadata: Metadata = {
  title: 'Contact MSI Construction — Get a Free Consultation',
  description: 'Contact MSI Construction for a free construction or interior design consultation. Call +91 93194 44747 or visit us at Nangli Dairy, New Delhi. Serving Delhi, Noida, Gurgaon, Ghaziabad, Faridabad & all India.',
  alternates: { canonical: 'https://www.msiconstruction.in/contact' },
  openGraph: {
    title: 'Contact Us — Free Consultation | MSI Construction',
    description: 'Get a free quote for your construction or interior design project. Call +91 93194 44747.',
    url: 'https://www.msiconstruction.in/contact',
  },
};

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
