import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import FaqContent, { FAQ } from './FaqContent';
import styles from './Faq.module.css';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions About Construction & Interior Design',
  description: 'Get answers to common questions about construction costs, timelines, interior design process, and more. MSI Construction — 30+ years experience in Delhi NCR.',
  alternates: { canonical: 'https://www.msiconstruction.in/faq' },
  openGraph: { 
    title: 'Frequently Asked Questions About Construction & Interior Design', 
    description: 'Get answers to common questions about construction costs, timelines, interior design process, and more. MSI Construction — 30+ years experience in Delhi NCR.', 
    url: 'https://www.msiconstruction.in/faq', 
    type: 'website' 
  }
};

const faqs: FAQ[] = [
  // General
  { question: "How long has MSI Construction been in business?", answer: "MSI Construction has been proudly serving the Delhi NCR region for over 30 years, bringing decades of experience and expertise to every project we undertake.", category: "General" },
  { question: "What areas do you serve?", answer: "We primarily serve Delhi, Gurgaon, Noida, and the wider National Capital Region (NCR). We are open to considering select projects outside this immediate area based on the scope and requirements.", category: "General" },
  { question: "Are you licensed and insured?", answer: "Yes, MSI Construction is fully licensed, insured, and bonded. We maintain comprehensive liability insurance to protect our clients, our team, and your property throughout the construction process.", category: "General" },
  { question: "Do you offer warranties on your work?", answer: "Absolutely. We stand behind the quality of our craftsmanship and materials. We provide a comprehensive warranty on all structural work and pass along manufacturer warranties on materials and fixtures used.", category: "General" },
  { question: "Can I see examples of your previous work?", answer: "Yes, we have an extensive portfolio of past projects available on our website. We are also happy to provide references from past clients upon request.", category: "General" },
  
  // Residential Construction
  { question: "How long does a typical custom home build take?", answer: "A custom home build typically takes between 10 to 18 months, depending on the size, complexity, and specific requirements of the project. We provide a detailed timeline during the planning phase.", category: "Residential Construction" },
  { question: "Can I use my own architect?", answer: "Yes, we are highly experienced in collaborating with independent architects and designers. We can also provide design-build services if you prefer a single point of contact.", category: "Residential Construction" },
  { question: "Do you handle all necessary permits and approvals?", answer: "Yes, our team handles the entire permitting process, ensuring all plans comply with local building codes and regulations in Delhi NCR before construction begins.", category: "Residential Construction" },
  { question: "What type of materials do you use for residential projects?", answer: "We source only premium, durable materials suited for the specific climate and aesthetic requirements of your home. We prioritize quality and longevity in every material choice.", category: "Residential Construction" },
  { question: "How involved will I be during the construction process?", answer: "We maintain open communication throughout the project. You will have regular progress meetings and updates, and you can be as involved as you wish in the decision-making process.", category: "Residential Construction" },

  // Commercial Construction
  { question: "What types of commercial projects do you undertake?", answer: "We handle a wide range of commercial projects, including office buildings, retail spaces, hospitality venues, and institutional facilities. Our portfolio includes both ground-up construction and tenant improvements.", category: "Commercial Construction" },
  { question: "How do you ensure commercial projects stay on schedule?", answer: "We use advanced project management techniques and software to closely monitor progress, anticipate potential delays, and coordinate subcontractors efficiently to ensure timely completion.", category: "Commercial Construction" },
  { question: "Can you manage construction while our business remains open?", answer: "Yes, we frequently perform phased construction and off-hours work to minimize disruption to your ongoing business operations.", category: "Commercial Construction" },
  { question: "Do you provide sustainable or green building options?", answer: "Yes, we are experienced in incorporating sustainable building practices and materials, and we can guide you through LEED certification or other green building standards if desired.", category: "Commercial Construction" },
  { question: "What safety protocols do you follow on commercial sites?", answer: "Safety is our top priority. We adhere to strict OSHA-compliant safety protocols, conduct regular site inspections, and ensure all personnel are properly trained and equipped.", category: "Commercial Construction" },

  // Interior Design
  { question: "What is your interior design process?", answer: "Our process begins with an in-depth consultation to understand your vision, lifestyle, and budget. We then proceed through concept development, space planning, material selection, and final implementation.", category: "Interior Design" },
  { question: "Do you provide 3D renderings of the proposed design?", answer: "Yes, we offer high-quality 3D renderings and virtual walkthroughs so you can visualize the design and make informed decisions before any physical work begins.", category: "Interior Design" },
  { question: "Can you incorporate my existing furniture into a new design?", answer: "Absolutely. We can seamlessly integrate your cherished pieces into the new design scheme, ensuring a cohesive and personalized space.", category: "Interior Design" },
  { question: "Do you handle the procurement of furniture and decor?", answer: "Yes, we offer complete procurement services. We source, purchase, track, and manage the installation of all furniture, fixtures, and accessories.", category: "Interior Design" },
  { question: "How long does the interior design phase typically take?", answer: "The design phase usually takes 4 to 8 weeks, depending on the scope of the project and the speed of decision-making. We ensure all details are finalized before moving to procurement or construction.", category: "Interior Design" },

  // Renovation
  { question: "Do I need to move out during a major renovation?", answer: "It depends on the scope of the project. For extensive whole-house renovations, moving out is often recommended for safety and speed. For smaller projects, we implement strategies to minimize disruption while you stay in the home.", category: "Renovation" },
  { question: "How do you handle unexpected issues during a renovation?", answer: "Renovations can sometimes reveal hidden issues. We maintain a contingency budget and communicate immediately if something unexpected arises, providing you with options and recommendations before proceeding.", category: "Renovation" },
  { question: "Can you help with historical home restorations?", answer: "Yes, we have experience in respectfully restoring historical properties, ensuring updates meet modern standards while preserving the architectural integrity and original character of the home.", category: "Renovation" },
  { question: "Will a renovation increase the value of my home?", answer: "Strategic renovations, particularly in kitchens, bathrooms, and adding square footage, typically yield a high return on investment and significantly increase property value.", category: "Renovation" },

  // Pricing & Payment
  { question: "How do you provide cost estimates?", answer: "After a thorough consultation and review of your requirements, we provide a detailed, itemized estimate outlining all anticipated costs, ensuring transparency from the start.", category: "Pricing & Payment" },
  { question: "What are your payment terms?", answer: "Payment terms are typically structured in milestones tied to project progress. A standard schedule includes a deposit upon signing, progress payments at specific phases, and a final payment upon completion and satisfaction.", category: "Pricing & Payment" },
  { question: "How do you handle change orders?", answer: "If you wish to make changes during the project, we will provide a written Change Order detailing the scope of the change and any impact on cost or schedule. Work will only proceed once you have approved and signed the Change Order.", category: "Pricing & Payment" },
  { question: "Are there any hidden costs I should be aware of?", answer: "We strive for complete transparency. Our initial estimates are comprehensive. Any potential additional costs are discussed upfront, and we always recommend setting aside a contingency fund for unforeseen circumstances or mid-project upgrades.", category: "Pricing & Payment" }
];

export default function FaqPage() {
  const faqData = faqs.map(faq => ({
    questionName: faq.question,
    acceptedAnswerText: faq.answer
  }));

  const breadcrumbItems = [
    { name: 'Home', item: 'https://www.msiconstruction.in/' },
    { name: 'FAQ', item: 'https://www.msiconstruction.in/faq' }
  ];

  return (
    <>
      <JsonLd type="webpage" data={{
        title: 'Frequently Asked Questions | MSI Construction',
        description: 'Get answers to common questions about construction costs, timelines, interior design process, and more.',
        url: 'https://www.msiconstruction.in/faq'
      }} />
      <JsonLd type="breadcrumb" data={{ items: [
        { name: 'Home', url: 'https://www.msiconstruction.in' },
        { name: 'FAQ', url: 'https://www.msiconstruction.in/faq' },
      ]}} />
      <JsonLd type="faq" data={{ questions: faqs.map(faq => ({ q: faq.question, a: faq.answer })) }} />
      <Navbar />
      <main className={styles.faqPage}>
        <Reveal>
          <div className={styles.hero}>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <p className={styles.subtitle}>
              Find answers to common questions about our construction, interior design, and renovation services.
            </p>
          </div>
        </Reveal>
        
        <Reveal>
          <FaqContent faqs={faqs} />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
