import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

const BASE_URL = 'https://msiconstruction.in';

const services = [
  'residential-construction',
  'commercial-construction',
  'industrial-construction',
  'interior-design',
  'renovation-and-remodeling',
  'turnkey-projects',
  'architecture-and-planning',
  'warehouse-construction',
  'factory-construction',
  'office-interior-design',
  'home-renovation',
  'commercial-interior-design',
  'luxury-interior-design',
];

const locations = [
  'delhi',
  'noida',
  'ghaziabad',
  'gurgaon',
  'faridabad',
  'greater-noida',
  'delhi-ncr',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapData: MetadataRoute.Sitemap = [];

  // Core pages
  sitemapData.push(
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/videos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/cost-estimator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }
  );

  // Service pages
  services.forEach((service) => {
    sitemapData.push({
      url: `${BASE_URL}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Location pages
  locations.forEach((location) => {
    sitemapData.push({
      url: `${BASE_URL}/locations/${location}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Service × Location combo pages
  services.forEach((service) => {
    locations.forEach((location) => {
      sitemapData.push({
        url: `${BASE_URL}/services/${service}/${location}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
      });
    });
  });

  // Blog posts
  blogPosts.forEach((post) => {
    sitemapData.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return sitemapData;
}

