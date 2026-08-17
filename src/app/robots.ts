import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/*', '/api/', '/api/*', '/manifest.webmanifest', '/feed.xml'],
    },
    sitemap: 'https://www.msiconstruction.in/sitemap.xml',
  };
}
