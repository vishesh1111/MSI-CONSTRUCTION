import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import CostEstimatorTool from './CostEstimatorTool';
import styles from './CostEstimator.module.css';

export const metadata: Metadata = {
  title: 'Construction Cost Estimator — Calculate Building Costs in Delhi NCR | MSI Construction',
  description: 'Use our free construction cost calculator to estimate building costs in Delhi, Noida, Gurgaon & NCR. Get instant estimates for residential, commercial & interior design projects.',
  alternates: { canonical: 'https://www.msiconstruction.in/cost-estimator' },
  openGraph: { 
    title: 'Construction Cost Estimator — Calculate Building Costs in Delhi NCR', 
    description: 'Use our free construction cost calculator to estimate building costs in Delhi, Noida, Gurgaon & NCR. Get instant estimates for residential, commercial & interior design projects.', 
    url: 'https://www.msiconstruction.in/cost-estimator', 
    type: 'website' 
  }
};

export default function CostEstimatorPage() {
  return (
    <>
      <JsonLd type="webpage" data={{
        title: 'Construction Cost Estimator',
        description: 'Use our free construction cost calculator to estimate building costs in Delhi, Noida, Gurgaon & NCR. Get instant estimates for residential, commercial & interior design projects.',
        url: 'https://www.msiconstruction.in/cost-estimator'
      }} />
      <JsonLd type="breadcrumb" data={{ items: [
        { name: 'Home', url: 'https://www.msiconstruction.in' },
        { name: 'Cost Estimator', url: 'https://www.msiconstruction.in/cost-estimator' },
      ]}} />
      <Navbar />
      <main className={styles.pageWrapper}>
        <Reveal>
          <div className={styles.hero}>
            <h1>Construction Cost Estimator</h1>
            <p>
              Get an instant, indicative cost estimate for your construction or interior design project in the Delhi NCR region. 
              Adjust the parameters below to see how different choices affect your budget.
            </p>
          </div>
        </Reveal>
        
        <Reveal>
          <CostEstimatorTool />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
