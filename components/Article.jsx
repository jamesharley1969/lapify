import Link from 'next/link'
import { site } from '@/lib/site'

// Shared layout for guides and info pages.
export default function Article({ eyebrow, title, intro, meta, children, showCta = true }) {
    return (
        <main className="page">
            <article className="article">
                {eyebrow && <div className="article-eyebrow">{eyebrow}</div>}
                <h1 className="article-title">{title}</h1>
                {meta && <div className="article-meta">{meta}</div>}
                {intro && <p className="article-intro">{intro}</p>}

                <div className="prose">{children}</div>

                {showCta && <WizardCta />}
            </article>
        </main>
    )
}

export function WizardCta() {
    return (
        <aside className="cta-box">
            <div>
                <div className="cta-title">Still not sure? Let us narrow it down.</div>
                <p className="cta-text">
                    Answer five plain-English questions and we&rsquo;ll suggest laptops that fit how you&rsquo;ll use it and what you want to spend.
                </p>
            </div>
            <Link href="/" className="btn-buy">Find my laptop →</Link>
        </aside>
    )
}

// Short notice shown on pages that contain retailer links.
export function AffiliateNote() {
    return (
        <p className="affiliate-note">
            If you buy through links on {site.name} we may earn a small commission from the retailer, at no extra cost to you.
            It never changes which laptops we recommend. <Link href="/affiliate-disclosure">How we make money</Link>.
        </p>
    )
}
