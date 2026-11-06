import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Hide backend APIs from search engines
    },
    sitemap: 'https://snnlies.vercel.app/sitemap.xml',
  }
}
