import Link from 'next/link'
import { guides } from '@/lib/guides'
import { WizardCta } from '@/components/Article'

export const metadata = {
    title:       'Laptop buying guides',
    description: 'Plain-English laptop buying guides for UK shoppers: how much RAM you need, Chromebook vs Windows vs Mac, buying for a parent and more.',
    alternates:  { canonical: '/guides' },
}

export default function GuidesPage() {
    return (
        <main className="page">
            <div className="article">
                <div className="article-eyebrow">Buying guides</div>
                <h1 className="article-title">Laptop advice without the jargon</h1>
                <p className="article-intro">
                    Short, honest guides to the questions people actually ask when they&rsquo;re buying a laptop.
                    No spec-sheet waffle — just what matters and why.
                </p>

                <div className="guide-grid guide-grid--list">
                    {guides.map(g => (
                        <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card">
                            <span className="guide-card-title">{g.title}</span>
                            <span className="guide-card-summary">{g.summary}</span>
                            <span className="guide-card-meta">{g.readMins} min read</span>
                        </Link>
                    ))}
                </div>

                <WizardCta />
            </div>
        </main>
    )
}
