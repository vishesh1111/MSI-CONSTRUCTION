import { blogPosts } from '@/lib/blog-data';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.msiconstruction.in';
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>MSI Construction Blog</title>
      <link>${baseUrl}/blog</link>
      <description>Latest insights, trends, and tips on construction and interior design in Delhi NCR.</description>
      <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
      <language>en</language>
      ${blogPosts.map(post => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
          <description><![CDATA[${post.excerpt}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>
      `).join('')}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
