import Link from 'next/link'
import Article from '@/components/Article'
import { site } from '@/lib/site'

export const metadata = {
    title:       'Privacy policy',
    description: 'What personal information Lapify collects, why, and your rights under UK data protection law.',
    alternates:  { canonical: '/privacy' },
}

// TODO(James): review this against how the site actually works before relying on it.
// If you add analytics, a newsletter or price alerts, this page must be updated first.
export default function PrivacyPage() {
    return (
        <Article
            eyebrow="Legal"
            title="Privacy policy"
            meta={`Last updated ${site.policiesUpdated}`}
            intro="We collect as little as possible. You don't need an account to use Lapify, and we don't ask for your name or email to get recommendations."
            showCta={false}
        >
            <h2>Who we are</h2>
            <p>
                Lapify (lapify.co.uk) is run by {site.ownerName}, based in the United Kingdom, who is the
                &ldquo;controller&rdquo; of any personal data described here. You can contact us
                at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
            </p>

            <h2>What we collect and why</h2>
            <h3>Your quiz answers</h3>
            <p>
                When you use the laptop finder, your answers (for example &ldquo;for a child&rdquo;, &ldquo;mostly web and email&rdquo;,
                &ldquo;under £400&rdquo;) are sent to our server so we can work out your matches. We don&rsquo;t ask for anything that
                identifies you, we don&rsquo;t link answers to you, and we don&rsquo;t store them once your results have been shown.
            </p>

            <h3>Technical information</h3>
            <p>
                Like almost every website, our hosting provider (Vercel) automatically processes technical information such as
                your IP address, browser type and the pages you request, so the site can be delivered securely and problems can be
                diagnosed. This is kept for a short period. Our lawful basis is our legitimate interest in running a secure, working website.
            </p>

            <h3>If you email us</h3>
            <p>
                If you contact us, we&rsquo;ll use your email address and message only to reply. We keep correspondence for up to
                two years unless you ask us to delete it sooner. Our lawful basis is our legitimate interest in responding to you.
            </p>

            <h3>When you click through to a retailer</h3>
            <p>
                Buy buttons take you to retailers through an affiliate network such as Awin. The network and the retailer
                collect information about that visit (including cookies on their own websites) so the sale can be tracked and
                credited to us. They do this as independent controllers under their own privacy policies — for example{' '}
                <a href="https://www.awin.com/gb/privacy" target="_blank" rel="noopener noreferrer">Awin&rsquo;s privacy policy</a>.
                We receive reports of sales and commission, but not your name, address or payment details.
            </p>

            <h2>Who we share data with</h2>
            <p>
                We use a small number of service providers to run the site: Vercel (website hosting) and Supabase (our laptop and
                price database, which holds product information, not visitor data). They act on our instructions. Some of these
                providers may process data outside the UK; where they do, they use legal safeguards such as the UK International
                Data Transfer Addendum or standard contractual clauses. We never sell personal data.
            </p>

            <h2>Cookies</h2>
            <p>
                Lapify itself doesn&rsquo;t currently set any tracking or advertising cookies. See our{' '}
                <Link href="/cookies">cookie policy</Link> for details.
            </p>

            <h2>Your rights</h2>
            <p>
                Under UK data protection law you have the right to ask for a copy of personal data we hold about you, and to ask us
                to correct, delete or restrict it, or to object to how we use it. Email us to make a request — we&rsquo;ll respond within
                one month. If you&rsquo;re unhappy with how we&rsquo;ve handled your data, you can complain to the Information
                Commissioner&rsquo;s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>

            <h2>Children</h2>
            <p>
                Lapify is intended for adults buying a laptop, including for their children. We don&rsquo;t knowingly collect personal data from children.
            </p>

            <h2>Changes</h2>
            <p>
                We&rsquo;ll update this page if the way we handle data changes — for example if we add analytics or price alerts — and
                change the date at the top.
            </p>
        </Article>
    )
}
