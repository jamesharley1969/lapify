import { site } from '@/lib/site'
import { guides } from '@/lib/guides'

export default function sitemap() {
    const now = new Date()
    const staticPages = ['', '/guides', '/about', '/affiliate-disclosure', '/privacy', '/cookies']
        .map(path => ({
            url: `${site.url}${path}`,
            lastModified: now,
            changeFrequency: path === '' || path === '/guides' ? 'weekly' : 'yearly',
            priority: path === '' ? 1 : path === '/guides' ? 0.8 : 0.3,
        }))
    const guidePages = guides.map(g => ({
        url: `${site.url}/guides/${g.slug}`,
        lastModified: new Date(g.updated ?? g.published),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))
    return [...staticPages, ...guidePages]
}
