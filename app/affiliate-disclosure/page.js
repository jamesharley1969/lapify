import Link from 'next/link'
import Article from '@/components/Article'
import { site } from '@/lib/site'

export const metadata = {
    title:       'How we make money (affiliate disclosure)',
    description: 'Lapify is free to use and is funded by affiliate commission from UK retailers. Here is exactly how that works and how we keep recommendations independent.',
    alternates:  { canonical: '/affiliate-disclosure' },
}

export default function DisclosurePage() {
    return (
        <Article
            eyebrow="Affiliate disclosure"
            title="How we make money"
            meta={`Last updated ${site.policiesUpdated}`}
            intro="Lapify is free to use. We're funded by commission from retailers when someone buys through our links — here's exactly what that means for you."
            showCta={false}
        >
            <h2>The short version</h2>
            <p>
                Some links on Lapify — including the buy buttons on our laptop recommendations — are
                <strong> affiliate links</strong>. If you click one and then buy something from that retailer, the retailer
                may pay us a small commission. <strong>You pay exactly the same price</strong> as you would going to the
                retailer directly.
            </p>

            <h2>Who we work with</h2>
            <p>
                We work with UK retailers mainly through the <a href="https://www.awin.com/gb" target="_blank" rel="noopener noreferrer">Awin</a> affiliate
                network, and may use other affiliate programmes from time to time. When you click a retailer link, you may
                pass briefly through the affiliate network&rsquo;s website so the sale can be credited to Lapify. See our{' '}
                <Link href="/cookies">cookie policy</Link> for what that involves.
            </p>

            <h2>How we keep recommendations independent</h2>
            <ul>
                <li>Our matching scores laptops only on how well they fit your answers. It doesn&rsquo;t use commission rates.</li>
                <li>When the same laptop is available from several retailers, we list the cheapest price first, whoever it&rsquo;s from.</li>
                <li>Retailers can&rsquo;t pay to be included in our guides or to appear higher in results.</li>
                <li>We&rsquo;ll recommend a cheaper laptop whenever it will do the job — even though that earns us less.</li>
            </ul>

            <h2>Prices and availability</h2>
            <p>
                Prices and stock change frequently. We update them regularly, but the price shown on the retailer&rsquo;s website
                when you buy is the one that applies. Your purchase, delivery, returns and warranty are with the retailer, not with Lapify.
            </p>

            <h2>Questions</h2>
            <p>
                If anything here isn&rsquo;t clear, email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
            </p>
        </Article>
    )
}
