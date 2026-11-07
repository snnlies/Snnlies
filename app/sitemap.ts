import { MetadataRoute } from 'next'
import { posts } from '../lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://snnlies.vercel.app'
  const lastModified = new Date('2026-11-07')
  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/chat', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/templates', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/features', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/community', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/news', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/updates', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/whats-new', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/whats-next', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/changelog', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/referral', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/status', priority: 0.6, changeFrequency: 'daily' },
    { url: '/support', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/security', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/login', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/signup', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
    { url: '/terms', priority: 0.4, changeFrequency: 'yearly' },
    ...posts.map((p) => ({ url: `/blog/${p.slug}`, priority: 0.7, changeFrequency: 'monthly' as const })),
  ]
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
