import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://snnlies.vercel.app'
  
  const routes = [
    '', '/chat', '/templates', '/community', '/referral', 
    '/dashboard', '/status', '/blog', '/news', '/updates', '/privacy', '/terms', '/support'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
