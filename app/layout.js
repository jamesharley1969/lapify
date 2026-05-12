import './globals.css'

export const metadata = {
    title:       'Lapify — Find Your Perfect Laptop',
    description: 'Answer a few simple questions and we\'ll find the perfect laptop for you. No tech knowledge needed.',
    keywords:    'laptop finder, best laptop UK, which laptop should I buy, laptop recommendation',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <a href="/" className="logo">
                        <div className="logo-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="2" width="18" height="12" rx="2" stroke="white" strokeWidth="1.6" fill="none"/>
                                <line x1="0" y1="15" x2="20" y2="15" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                                <path d="M6.5 9l2.5 2.5 4-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="logo-text">
                            Lap<span>ify</span>
                        </span>
                    </a>
                    <span className="header-tagline">
                        Find your perfect laptop in 2 minutes
                    </span>
                </header>

                {children}

                <footer>
                    Lapify is a member of the{' '}
                    <a href="https://www.awin.com" target="_blank" rel="noopener noreferrer">
                        Awin
                    </a>{' '}
                    affiliate network. · © {new Date().getFullYear()} Lapify
                </footer>
            </body>
        </html>
    )
}
