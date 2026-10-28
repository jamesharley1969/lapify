import Link from 'next/link'
import Article, { AffiliateNote } from '@/components/Article'
import { getGuide, guides } from '@/lib/guides'
import { site } from '@/lib/site'

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function guideMetadata(slug) {
    const g = getGuide(slug)
    return {
        title:       g.title,
        description: g.summary,
        alternates:  { canonical: `/guides/${slug}` },
        openGraph:   { title: g.title, description: g.summary, type: 'article' },
    }
}

export default function GuideLayout({ slug, intro, children }) {
    const g = getGuide(slug)
    const others = guides.filter(x => x.slug !== slug)

    const jsonLd = {
        '@context':     'https://schema.org',
        '@type':        'Article',
        headline:       g.title,
        description:    g.summary,
        datePublished:  g.published,
        dateModified:   g.updated ?? g.published,
        author:         { '@type': 'Person', name: site.ownerName },
        publisher:      { '@type': 'Organization', name: site.name, url: site.url },
        mainEntityOfPage: `${site.url}/guides/${slug}`,
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Article
                eyebrow={<Link href="/guides">Buying guides</Link>}
                title={g.title}
                meta={`By ${site.ownerName} · Updated ${formatDate(g.updated ?? g.published)} · ${g.readMins} min read`}
                intro={intro}
            >
                {children}
                <AffiliateNote />
            </Article>

            {others.length > 0 && (
                <section className="home-section related">
                    <h2 className="home-h2">More buying guides</h2>
                    <div className="guide-grid">
                        {others.map(o => (
                            <Link key={o.slug} href={`/guides/${o.slug}`} className="guide-card">
                                <span className="guide-card-title">{o.title}</span>
                                <span className="guide-card-summary">{o.summary}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

// Highlighted "quick answer" box at the top of a guide.
export function QuickAnswer({ children }) {
    return (
        <div className="quick-answer">
            <div className="quick-answer-label">Quick answer</div>
            {children}
        </div>
    )
}
