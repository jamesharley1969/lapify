import Link from 'next/link'
import Article from '@/components/Article'
import { site } from '@/lib/site'

export const metadata = {
    title:       'Cookie policy',
    description: 'Which cookies Lapify uses, which cookies retailers and affiliate networks set when you click through, and how to control them.',
    alternates:  { canonical: '/cookies' },
}

// TODO(James): if you add Google Analytics or any other tracking script, you'll need
// a consent banner BEFORE it loads, and this page must list those cookies.
export default function CookiesPage() {
    return (
        <Article
            eyebrow="Legal"
            title="Cookie policy"
            meta={`Last updated ${site.policiesUpdated}`}
            intro="Cookies are small files a website saves in your browser. Here's what happens on Lapify — the short answer is: very little."
            showCta={false}
        >
            <h2>Cookies set by Lapify</h2>
            <p>
                Lapify doesn&rsquo;t currently set any analytics, advertising or tracking cookies. The laptop finder works
                without cookies — your answers are held in the page while you use it and disappear when you leave.
                Because we don&rsquo;t use non-essential cookies, we don&rsquo;t show a cookie banner.
            </p>

            <h2>Cookies when you click through to a retailer</h2>
            <p>
                When you click a buy button, you&rsquo;re taken to the retailer via an affiliate network such as Awin.
                At that point the network and the retailer may set cookies <strong>on their own websites</strong> to record that
                you arrived from Lapify, so that if you buy something the retailer can credit us with a commission. These
                cookies typically last up to 30 days.
            </p>
            <p>
                Those cookies are controlled by the affiliate network and the retailer, not by Lapify, and the retailer&rsquo;s own
                cookie banner will usually let you choose whether to accept them. For more detail see{' '}
                <a href="https://www.awin.com/gb/privacy" target="_blank" rel="noopener noreferrer">Awin&rsquo;s privacy and cookie information</a>{' '}
                and the cookie policy of the retailer you visit.
            </p>

            <h2>Managing cookies</h2>
            <p>
                You can view, block or delete cookies in your browser settings at any time. Blocking cookies won&rsquo;t stop Lapify
                working, but it may mean a retailer can&rsquo;t tell that you came from us.
            </p>

            <h2>Changes to this policy</h2>
            <p>
                If we start using cookies — for example to understand how many people use the site — we&rsquo;ll ask for your
                consent first and update this page. Questions? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
                See also our <Link href="/privacy">privacy policy</Link>.
            </p>
        </Article>
    )
}
