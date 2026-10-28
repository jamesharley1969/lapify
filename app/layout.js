import './globals.css'
import Link from 'next/link'
import { site, navLinks, footerLinks } from '@/lib/site'

export const metadata = {
    metadataBase: new URL(site.url),
    title: {
        default:  'Lapify — Find Your Perfect Laptop',
        template: '%s | Lapify',
    },
    description: 'Answer a few simple questions and we\'ll find the perfect laptop for you. Plain-English laptop buying guides for UK shoppers — no tech knowledge needed.',
    keywords:    'laptop finder, best laptop UK, which laptop should I buy, laptop recommendation, laptop buying guide',
    openGraph: {
        siteName: site.name,
        locale:   'en_GB',
        type:     'website',
    },
}

function Logo() {
    return (
        <Link href="/" className="logo" aria-label="Lapify home">
            <div className="logo-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="1" y="2" width="18" height="12" rx="2" stroke="white" strokeWidth="1.6" fill="none"/>
                    <line x1="0" y1="15" x2="20" y2="15" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                    <path d="M6.5 9l2.5 2.5 4-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <span className="logo-text">
                Lap<span>ify</span>
            </span>
        </Link>
    )
}

export default function RootLayout({ children }) {
    return (
        <html lang="en-GB">
            <body>
                <header>
                    <Logo />
                    <nav className="site-nav" aria-label="Main">
                        {navLinks.map(l => (
                            <Link key={l.href} href={l.href} className="site-nav-link">
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </header>

                {children}

                <footer className="site-footer">
                    <div className="footer-inner">
                        <div className="footer-brand">
                            <Logo />
                            <p className="footer-blurb">
                                Plain-English laptop advice for UK shoppers. We help people who
                                don&rsquo;t want to learn the jargon find a laptop that suits them.
                            </p>
                        </div>
                        <nav className="footer-links" aria-label="Footer">
                            {footerLinks.map(l => (
                                <Link key={l.href} href={l.href}>{l.label}</Link>
                            ))}
                            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
                        </nav>
                    </div>
                    <p className="footer-disclosure">
                        Lapify is reader-supported. When you buy through links on our site we may earn
                        an affiliate commission from the retailer, at no extra cost to you. This never
                        affects which laptops we recommend.{' '}
                        <Link href="/affiliate-disclosure">Learn more</Link>.
                    </p>
                    <p className="footer-copy">© {new Date().getFullYear()} Lapify · lapify.co.uk</p>
                </footer>
            </body>
        </html>
    )
}
