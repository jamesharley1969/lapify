import Link from 'next/link'
import Wizard from '@/components/Wizard'
import { guides } from '@/lib/guides'

export default function Home() {
    return (
        <>
            <Wizard />

            {/* Crawlable content below the wizard — explains the site to visitors, Google and affiliate reviewers */}
            <section className="home-section">
                <h2 className="home-h2">How Lapify works</h2>
                <ol className="how-steps">
                    <li>
                        <strong>Tell us about you, not specs.</strong>
                        <span>Who it&rsquo;s for, what you&rsquo;ll use it for, whether you&rsquo;ll carry it around and what you want to spend.</span>
                    </li>
                    <li>
                        <strong>We do the translating.</strong>
                        <span>Our matching turns your answers into the things that matter — memory, storage, weight, battery life — and scores every laptop we track.</span>
                    </li>
                    <li>
                        <strong>Compare and buy from UK retailers.</strong>
                        <span>See your best matches with a plain-English reason for each, then compare prices from UK retailers.</span>
                    </li>
                </ol>
            </section>

            <section className="home-section">
                <div className="home-section-head">
                    <h2 className="home-h2">Laptop buying guides</h2>
                    <Link href="/guides" className="text-link">All guides →</Link>
                </div>
                <div className="guide-grid">
                    {guides.map(g => (
                        <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card">
                            <span className="guide-card-title">{g.title}</span>
                            <span className="guide-card-summary">{g.summary}</span>
                            <span className="guide-card-meta">{g.readMins} min read</span>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}
