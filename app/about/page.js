import Link from 'next/link'
import Article from '@/components/Article'
import { site } from '@/lib/site'

export const metadata = {
    title:       'About Lapify',
    description: 'Why Lapify exists, how we choose which laptops to recommend, how we make money and how to get in touch.',
    alternates:  { canonical: '/about' },
}

// TODO(James): this is written in your voice as a starting point — edit freely so it sounds like you.
export default function AboutPage() {
    return (
        <Article
            eyebrow="About us"
            title="Laptop buying, minus the jargon"
            intro="Lapify helps everyday UK shoppers find a laptop that suits them, without needing to understand processors, RAM or graphics cards."
        >
            <h2>Why Lapify exists</h2>
            <p>
                Hi, I&rsquo;m {site.ownerName}. I&rsquo;ve worked in IT and digital systems for years, which means I&rsquo;m the
                person friends and family ring when they need a new laptop. The question is always the same:
                <em> &ldquo;Which one should I get?&rdquo;</em> And the answer almost never comes from a spec sheet.
                It comes from asking a few simple questions: who&rsquo;s it for, what will they do on it, will they carry it
                around, and what do they want to spend?
            </p>
            <p>
                Retailer websites aren&rsquo;t built around those questions. They list hundreds of models sorted by
                specifications most people don&rsquo;t understand, which is how people end up overspending on power
                they&rsquo;ll never use, or buying a cheap machine that&rsquo;s painfully slow within a year.
                Lapify turns that conversation into a two-minute quiz anyone can use.
            </p>

            <h2>How we choose what to recommend</h2>
            <ul>
                <li><strong>Your answers come first.</strong> Every laptop we track is scored against what you tell us — budget, uses, portability, who it&rsquo;s for and any preference for Windows or Mac.</li>
                <li><strong>We explain every match.</strong> Each recommendation comes with a plain-English reason, so you can see why it fits rather than just trusting a score.</li>
                <li><strong>Commission doesn&rsquo;t decide rankings.</strong> Our matching doesn&rsquo;t know or use how much a retailer pays. Where a laptop is sold by more than one retailer, we show the cheapest first.</li>
                <li><strong>We&rsquo;d rather you spent less.</strong> If a cheaper laptop will do the job, that&rsquo;s the one we&rsquo;ll point you to.</li>
            </ul>

            <h2>How Lapify is funded</h2>
            <p>
                Lapify is free to use. When you click through to a retailer and buy something, we may earn a small
                commission from that retailer through affiliate networks such as Awin. It costs you nothing extra.
                You can read exactly how this works on our <Link href="/affiliate-disclosure">How we make money</Link> page.
            </p>

            <h2>Get in touch</h2>
            <p>
                Spotted a price that&rsquo;s wrong, got a question about a laptop, or want to work with us?
                Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we&rsquo;ll get back to you,
                usually within two working days.
            </p>
            <p>
                Retailers and brands interested in partnering with Lapify are very welcome to get in touch at the same address.
            </p>
        </Article>
    )
}
