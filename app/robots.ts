import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // Explicitly invite AI Search Engines
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot', 'Bingbot'],
        allow: '/',
      }
    ],
    sitemap: 'https://snnlies.vercel.app/sitemap.xml',
    host: 'https://snnlies.vercel.app',
  }
}
