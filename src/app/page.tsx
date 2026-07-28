import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionProcess from "@/components/SectionProcess";
import SectionFounders from "@/components/SectionFounders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionProcess />
        <SectionFounders />
      </main>
      <Footer />
    </>
  );
}
