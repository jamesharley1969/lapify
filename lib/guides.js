// Index of buying guides — used by the guides hub, homepage and sitemap.
// Add a new entry here whenever you publish a new guide page under app/guides/<slug>/.

export const guides = [
    {
        slug:        'how-much-ram-do-i-need',
        title:       'How much RAM do I need in a laptop?',
        summary:     '8GB, 16GB or 32GB? A plain-English answer based on what you actually do, and the one number we wouldn\'t go below in 2026.',
        readMins:    5,
        published:   '2026-10-27',
    },
    {
        slug:        'chromebook-vs-windows-vs-macbook',
        title:       'Chromebook vs Windows vs MacBook: which should you buy?',
        summary:     'The three kinds of laptop explained without the jargon, who each one suits, and the mistakes people make choosing between them.',
        readMins:    7,
        published:   '2026-10-27',
    },
    {
        slug:        'laptop-for-older-parent',
        title:       'Choosing a laptop for an older parent or relative',
        summary:     'What actually matters when you\'re buying for someone who just wants email, video calls and the news — and what to set up before you hand it over.',
        readMins:    6,
        published:   '2026-10-27',
    },
]

export function getGuide(slug) {
    return guides.find(g => g.slug === slug)
}
