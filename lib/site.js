// ── Site-wide settings ───────────────────────────────────────
// Edit these in one place; every page reads from here.

export const site = {
    name:         'Lapify',
    url:          'https://www.lapify.co.uk',
    // TODO(James): set up this mailbox (e.g. Namecheap email forwarding) or change it.
    contactEmail: 'hello@lapify.co.uk',
    // TODO(James): the name you want shown as the person behind Lapify.
    ownerName:    'James',
    // Shown on the legal pages — bump this when you change them.
    policiesUpdated: '27 October 2026',
}

export const navLinks = [
    { href: '/',       label: 'Find a laptop' },
    { href: '/guides', label: 'Buying guides' },
    { href: '/about',  label: 'About' },
]

export const footerLinks = [
    { href: '/guides',              label: 'Buying guides' },
    { href: '/about',               label: 'About & contact' },
    { href: '/affiliate-disclosure', label: 'How we make money' },
    { href: '/privacy',             label: 'Privacy policy' },
    { href: '/cookies',             label: 'Cookie policy' },
]
