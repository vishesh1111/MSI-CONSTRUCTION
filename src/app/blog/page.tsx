import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { blogPosts } from '@/lib/blog-data';
import styles from './Blog.module.css';

export const metadata: Metadata = {
  title: 'Blog | MSI Construction - Insights & Guides',
  description: 'Read the latest insights, construction guides, interior design trends, and news from MSI Construction experts.',
  alternates: { canonical: 'https://msiconstruction.in/blog' },
  openGraph: { 
    title: 'Blog | MSI Construction', 
    description: 'Read the latest insights, construction guides, interior design trends, and news from MSI Construction experts.', 
    url: 'https://msiconstruction.in/blog', 
    type: 'website' 
  }
};

export default function BlogListingPage() {
  return (
    <main className={styles.main}>
      <JsonLd type="webpage" data={{
        title: 'Blog | MSI Construction',
        description: 'Read the latest insights, construction guides, interior design trends, and news from MSI Construction experts.',
        url: 'https://msiconstruction.in/blog'
      }} />
      <Navbar />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link> &gt; <span>Blog</span>
          </div>
          <Reveal>
            <h1 className={styles.heroTitle}>Our Insights</h1>
            <p className={styles.heroSubtitle}>
              Expert advice, industry trends, and comprehensive guides for your next project.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.blogGridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <Reveal key={post.slug}>
                <Link href={`/blog/${post.slug}`} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={styles.categoryBadge}>{post.category}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.meta}>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className={styles.dot}>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <div className={styles.readMore}>
                      Read More <span className={styles.arrow}>→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
