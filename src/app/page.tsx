import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionProcess from "@/components/SectionProcess";
import SectionFounders from "@/components/SectionFounders";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'MSI Construction — Best Construction Company & Interior Designer in Delhi NCR',
  description: 'Premier construction company & interior designer in Delhi NCR with 30+ years experience. Residential, commercial & industrial projects. Free consultation — Call +91 93194 44747.',
  alternates: { canonical: 'https://www.msiconstruction.in' },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <JsonLd type="webpage" data={{ title: 'MSI Construction — Best Construction Company & Interior Designer in Delhi NCR', description: 'Premier construction company and interior design firm in Delhi NCR with 30+ years of experience.', url: 'https://www.msiconstruction.in' }} />
        <JsonLd type="faq" data={{ questions: [
          { q: 'What is the cost of construction per sq ft in Delhi NCR?', a: 'Construction costs in Delhi NCR typically range from ₹1,800 to ₹4,500 per sq ft depending on the type of construction, materials used, and project specifications. MSI Construction provides detailed cost estimates after site assessment.' },
          { q: 'Which is the best construction company in Delhi NCR?', a: 'MSI Construction is one of the leading construction companies in Delhi NCR with over 30 years of experience, 1000+ completed projects across 42+ cities. We have delivered projects for JW Marriott, Taj Vivanta, and ITC Grand Chola.' },
          { q: 'Does MSI Construction provide interior design services?', a: 'Yes, MSI Construction offers comprehensive interior design and execution services including residential interiors, commercial interiors, office fit-outs, and luxury interior design across Delhi, Noida, Gurgaon, and pan-India.' },
          { q: 'What types of construction projects does MSI handle?', a: 'MSI Construction handles residential construction, commercial buildings, industrial facilities, hotels, hospitals, schools, warehouses, factories, farmhouses, and turnkey projects. We serve clients across Delhi NCR and India.' },
          { q: 'How long does it take to build a house in Delhi?', a: 'A typical residential construction project in Delhi takes 8-14 months depending on the size, design complexity, and approvals. MSI Construction is known for on-time project delivery with detailed milestone tracking.' },
        ] }} />
        <Hero />
        <SectionProcess />
        <GoogleReviews />
        <SectionFounders isHomepage={true} />
      </main>
      <Footer />
    </>
  );
}
