import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/*', '/api/', '/api/*', '/_next/'],
    },
    sitemap: 'https://msiconstruction.in/sitemap.xml',
  };
}
