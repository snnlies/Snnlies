import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://snnlies.vercel.app'
  const routes = [
    { url: '', priority: 1.0 },
    { url: '/chat', priority: 1.0 },
    { url: '/templates', priority: 1.0 },
    { url: '/community', priority: 0.9 },
    { url: '/referral', priority: 0.9 },
    { url: '/dashboard', priority: 0.8 },
    { url: '/status', priority: 0.7 },
    { url: '/blog', priority: 0.8 },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'always' as const, // Tells Google to crawl every day
    priority: route.priority,
  }))
  return [...routes]
}
