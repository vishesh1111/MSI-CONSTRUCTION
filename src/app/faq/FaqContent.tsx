'use client';

import React, { useState, useMemo } from 'react';
import styles from './Faq.module.css';

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface FaqContentProps {
  faqs: FAQ[];
}

const CATEGORIES = [
  'All',
  'General',
  'Residential Construction',
  'Commercial Construction',
  'Interior Design',
  'Renovation',
  'Pricing & Payment'
];

export default function FaqContent({ faqs }: FaqContentProps) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeTab === 'All' || faq.category === activeTab;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeTab, searchQuery]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <input 
          type="text" 
          placeholder="Search for questions..." 
          className={styles.searchBar}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className={styles.tabs}>
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`${styles.tab} ${activeTab === category ? styles.activeTab : ''}`}
              onClick={() => {
                setActiveTab(category);
                setOpenIndex(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.faqList}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.accordion} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className={styles.icon}>+</span>
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            No matching questions found. Please try a different search term or category.
          </div>
        )}
      </div>
    </div>
  );
}
