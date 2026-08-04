import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { blogPosts } from '@/lib/blog-data';
import styles from './BlogPost.module.css';

interface Params {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://www.msiconstruction.in/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.msiconstruction.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }]
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className={styles.main}>
      <JsonLd type="breadcrumb" data={{ items: [
        { name: 'Home', url: 'https://www.msiconstruction.in' },
        { name: 'Blog', url: 'https://www.msiconstruction.in/blog' },
        { name: post.title, url: `https://www.msiconstruction.in/blog/${post.slug}` },
      ]}} />
      <Navbar />

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> &gt; <Link href="/blog">Blog</Link> &gt; <span>{post.title}</span>
            </div>
            <Reveal>
              <div className={styles.category}>{post.category}</div>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorAvatar}>MSI</div>
                  <div className={styles.authorDetails}>
                    <span className={styles.authorName}>{post.author}</span>
                    <div className={styles.postDate}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      <span className={styles.dot}>•</span>
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </header>

        <div className={styles.heroImageWrapper}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className={styles.heroImage}
            priority
            sizes="100vw"
          />
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.contentLayout}>
            <div className={styles.sidebar}>
              <div className={styles.toc}>
                <h3 className={styles.tocTitle}>Table of Contents</h3>
                <ul className={styles.tocList}>
                  <li><a href="#content">Introduction</a></li>
                  <li><a href="#related">Related Articles</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
                <div className={styles.tags}>
                  <h4 className={styles.tagsTitle}>Tags</h4>
                  <div className={styles.tagsList}>
                    {post.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mainContent} id="content">
              {post.content.map((paragraph, index) => (
                <Reveal key={index}>
                  <p className={styles.paragraph}>{paragraph}</p>
                </Reveal>
              ))}
              
              <div className={styles.authorBio}>
                <h3 className={styles.bioTitle}>About the Author</h3>
                <p><strong>{post.author}</strong> is a group of industry experts bringing decades of experience in residential and commercial construction, interior design, and project management in the Delhi NCR region.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className={styles.relatedSection} id="related">
        <div className={styles.container}>
          <Reveal>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
          </Reveal>
          <div className={styles.relatedGrid}>
            {relatedPosts.map(related => (
              <Reveal key={related.slug}>
                <Link href={`/blog/${related.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImageWrapper}>
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className={styles.relatedImage}
                    />
                  </div>
                  <div className={styles.relatedCardContent}>
                    <h3 className={styles.relatedCardTitle}>{related.title}</h3>
                    <div className={styles.relatedReadMore}>Read More <span className={styles.arrow}>→</span></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contact">
        <div className={styles.container}>
          <Reveal>
            <div className={styles.ctaBox}>
              <h2>Ready to Start Your Project?</h2>
              <p>Contact MSI Construction today for a consultation with our experts.</p>
              <Link href="/contact" className={styles.ctaButton}>Get in Touch</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
