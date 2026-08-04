'use client';

import React, { useState } from 'react';
import styles from './CostEstimator.module.css';

type ProjectType = 'Residential' | 'Commercial' | 'Industrial';
type ConstructionType = 'New Build' | 'Renovation' | 'Interior Design Only';
type QualityLevel = 'Standard' | 'Premium' | 'Luxury';
type Location = 'Delhi' | 'Noida' | 'Gurgaon' | 'Ghaziabad' | 'Faridabad' | 'Greater Noida';

export default function CostEstimatorTool() {
  const [projectType, setProjectType] = useState<ProjectType>('Residential');
  const [constructionType, setConstructionType] = useState<ConstructionType>('New Build');
  const [area, setArea] = useState<number>(1000);
  const [location, setLocation] = useState<Location>('Delhi');
  const [qualityLevel, setQualityLevel] = useState<QualityLevel>('Standard');
  const [floors, setFloors] = useState<number>(1);
  
  const [showResults, setShowResults] = useState<boolean>(false);

  const calculateCost = () => {
    let minRate = 0;
    let maxRate = 0;

    if (constructionType === 'Interior Design Only') {
      if (qualityLevel === 'Standard') { minRate = 800; maxRate = 1200; }
      else if (qualityLevel === 'Premium') { minRate = 1200; maxRate = 2000; }
      else if (qualityLevel === 'Luxury') { minRate = 2000; maxRate = 3500; }
    } else {
      if (qualityLevel === 'Standard') { minRate = 1400; maxRate = 1800; }
      else if (qualityLevel === 'Premium') { minRate = 1800; maxRate = 2500; }
      else if (qualityLevel === 'Luxury') { minRate = 2500; maxRate = 4000; }
      
      if (constructionType === 'Renovation') {
        minRate = Math.round(minRate * 0.7);
        maxRate = Math.round(maxRate * 0.7);
      }
    }

    const minTotal = minRate * area;
    const maxTotal = maxRate * area;

    return { minTotal, maxTotal };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const results = calculateCost();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  const breakdownPercentages = {
    'Structure': 30,
    'Finishing': 25,
    'Electrical': 15,
    'Plumbing': 10,
    'Interior': 20
  };

  const getTimeline = () => {
    if (area < 2000) return '3 - 6 Months';
    if (area < 5000) return '6 - 9 Months';
    if (area < 10000) return '9 - 12 Months';
    return '12+ Months';
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleCalculate} className={styles.formCard}>
        
        {/* Step 1: Project Type */}
        <div className={styles.step}>
          <h2 className={styles.stepTitle}>1. Project Type</h2>
          <div className={styles.grid}>
            {['Residential', 'Commercial', 'Industrial'].map((type) => (
              <div 
                key={type}
                className={`${styles.radioCard} ${projectType === type ? styles.radioCardSelected : ''}`}
                onClick={() => { setProjectType(type as ProjectType); setShowResults(false); }}
              >
                <h3>{type}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Construction Type */}
        <div className={styles.step}>
          <h2 className={styles.stepTitle}>2. Construction Type</h2>
          <div className={styles.grid}>
            {['New Build', 'Renovation', 'Interior Design Only'].map((type) => (
              <div 
                key={type}
                className={`${styles.radioCard} ${constructionType === type ? styles.radioCardSelected : ''}`}
                onClick={() => { setConstructionType(type as ConstructionType); setShowResults(false); }}
              >
                <h3>{type}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Area */}
        <div className={styles.step}>
          <h2 className={styles.stepTitle}>3. Area & Location</h2>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Built-up Area: {area.toLocaleString()} sq ft</label>
            <input 
              type="range" 
              min="500" 
              max="50000" 
              step="100" 
              value={area} 
              onChange={(e) => { setArea(parseInt(e.target.value)); setShowResults(false); }}
              className={styles.rangeInput}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Location</label>
            <select 
              value={location} 
              onChange={(e) => { setLocation(e.target.value as Location); setShowResults(false); }}
              className={styles.selectInput}
            >
              {['Delhi', 'Noida', 'Gurgaon', 'Ghaziabad', 'Faridabad', 'Greater Noida'].map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {constructionType === 'New Build' && projectType === 'Residential' && (
            <div className={styles.inputGroup}>
              <label className={styles.label}>Number of Floors</label>
              <select 
                value={floors} 
                onChange={(e) => { setFloors(parseInt(e.target.value)); setShowResults(false); }}
                className={styles.selectInput}
              >
                {[1, 2, 3, 4, 5].map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Step 4: Quality Level */}
        <div className={styles.step}>
          <h2 className={styles.stepTitle}>4. Quality Level</h2>
          <div className={styles.grid}>
            {[
              { id: 'Standard', desc: 'Good quality materials, functional design' },
              { id: 'Premium', desc: 'High-end materials, modern aesthetics' },
              { id: 'Luxury', desc: 'Imported materials, bespoke luxury design' }
            ].map((q) => (
              <div 
                key={q.id}
                className={`${styles.radioCard} ${qualityLevel === q.id ? styles.radioCardSelected : ''}`}
                onClick={() => { setQualityLevel(q.id as QualityLevel); setShowResults(false); }}
              >
                <h3>{q.id}</h3>
                <p>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {!showResults && (
          <button type="submit" className={styles.buttonPrimary}>
            Calculate Cost Estimate
          </button>
        )}
      </form>

      {/* Results Section */}
      {showResults && (
        <div className={styles.resultsContainer}>
          <h2 className={styles.resultsTitle}>Your Estimated Cost</h2>
          <div className={styles.priceRange}>
            {formatCurrency(results.minTotal)} - {formatCurrency(results.maxTotal)}
          </div>
          
          <h3 className={styles.breakdownTitle}>Estimated Cost Breakdown</h3>
          <div className={styles.breakdown}>
            {Object.entries(breakdownPercentages).map(([key, percent]) => (
              <div key={key} className={styles.breakdownItem}>
                <span>{key} ({percent}%)</span>
                <span>
                  {formatCurrency((results.minTotal * percent) / 100)} - {formatCurrency((results.maxTotal * percent) / 100)}
                </span>
              </div>
            ))}
          </div>
          
          <div className={styles.timeline}>
            <strong>Estimated Timeline:</strong> {getTimeline()}
          </div>
          
          <p className={styles.disclaimer}>
            This is an indicative estimate. Actual costs may vary based on specific requirements, materials, and site conditions. Contact us for a detailed quotation.
          </p>
          
          <a href="/contact" className={styles.buttonPrimary}>
            Get Exact Quote — Contact MSI Construction
          </a>
        </div>
      )}
    </div>
  );
}
