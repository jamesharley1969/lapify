import Link from 'next/link'
import GuideLayout, { guideMetadata, QuickAnswer } from '@/components/GuideLayout'

const SLUG = 'chromebook-vs-windows-vs-macbook'
export const metadata = guideMetadata(SLUG)

export default function Guide() {
    return (
        <GuideLayout
            slug={SLUG}
            intro="Before you compare a single laptop, it's worth deciding which of the three kinds you want. Get this right and the rest is easy; get it wrong and no amount of specs will fix it."
        >
            <QuickAnswer>
                <ul>
                    <li><strong>Chromebook</strong> if it&rsquo;s mainly for the internet, email, video calls and Google Docs, and you want it cheap, simple and low-maintenance.</li>
                    <li><strong>Windows</strong> if you need specific software, want to game, or want the widest choice of prices and sizes.</li>
                    <li><strong>MacBook</strong> if you already use an iPhone, want superb battery life and build quality, and your budget starts around £1,000 new.</li>
                </ul>
            </QuickAnswer>

            <h2>Chromebooks: simple, quick and inexpensive</h2>
            <p>
                A Chromebook runs Google&rsquo;s ChromeOS. Almost everything happens in the Chrome web browser, and you sign in with a
                Google account. That sounds limiting, but for a lot of people it&rsquo;s exactly what they already do on a computer.
            </p>
            <h3>Good for</h3>
            <ul>
                <li>Browsing, email, YouTube, Netflix, online shopping and banking</li>
                <li>Video calls (Zoom, Google Meet, Microsoft Teams and WhatsApp all work in the browser)</li>
                <li>Schoolwork, especially if the school uses Google Classroom</li>
                <li>People who don&rsquo;t want to deal with antivirus software, updates or slowdowns</li>
            </ul>
            <h3>Watch out for</h3>
            <ul>
                <li><strong>No traditional Windows or Mac software.</strong> Microsoft Office works through the browser, but the full desktop versions of programs like Photoshop or many games won&rsquo;t install.</li>
                <li><strong>An update end date.</strong> Each Chromebook model gets security updates until a fixed date. Newer models get around ten years, but cheap older stock can be close to its end date, so check before buying.</li>
                <li><strong>&ldquo;Chromebook Plus&rdquo;</strong> models have a better minimum spec (including at least 8GB of RAM). They&rsquo;re worth the small extra cost.</li>
            </ul>

            <h2>Windows laptops: the most choice</h2>
            <p>
                Most laptops sold in the UK run Windows 11. They come from many brands — Lenovo, HP, Dell, Asus, Acer, Microsoft and more —
                at every price from a few hundred pounds to several thousand.
            </p>
            <h3>Good for</h3>
            <ul>
                <li>Running any program you might need, including the full Microsoft Office and work software</li>
                <li>Gaming (Windows has by far the biggest game library)</li>
                <li>Getting exactly the screen size, weight and budget you want</li>
                <li>Anyone used to Windows at work who wants the same thing at home</li>
            </ul>
            <h3>Watch out for</h3>
            <ul>
                <li><strong>Very cheap Windows laptops</strong> with 4GB of RAM or &ldquo;eMMC&rdquo; storage. They&rsquo;re frustratingly slow, and at that price a Chromebook is usually the better buy.</li>
                <li><strong>Pre-installed extras</strong> (trial antivirus, games and pop-ups). Harmless, but worth removing when you set it up.</li>
                <li><strong>Windows 10.</strong> Microsoft&rsquo;s standard support ended in October 2025. Only buy a laptop with Windows 11.</li>
            </ul>

            <h2>MacBooks: polished, long-lasting and pricier</h2>
            <p>
                Apple makes the MacBook Air (thin, light, silent, and enough for most people) and the MacBook Pro (for heavier creative work).
                They run macOS, Apple&rsquo;s own system.
            </p>
            <h3>Good for</h3>
            <ul>
                <li>iPhone owners: messages, photos and passwords sync automatically</li>
                <li>All-day battery life, excellent screens, speakers and trackpads</li>
                <li>Photo, video and music editing</li>
                <li>Lasting a long time: Macs get software updates for many years and hold their resale value well</li>
            </ul>
            <h3>Watch out for</h3>
            <ul>
                <li><strong>The price.</strong> New MacBooks start around £1,000. Refurbished models from reputable sellers can be a good-value alternative.</li>
                <li><strong>Upgrades are expensive.</strong> You can&rsquo;t add memory or storage later, and Apple charges a lot for more at checkout. Choose carefully up front.</li>
                <li><strong>Some games and specialist Windows-only programs</strong> won&rsquo;t run.</li>
            </ul>

            <h2>Side by side</h2>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr><th></th><th>Chromebook</th><th>Windows</th><th>MacBook</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Typical price</td><td>£200–£600</td><td>£300–£2,000+</td><td>From about £1,000</td></tr>
                        <tr><td>Ease of use</td><td>Easiest</td><td>Familiar</td><td>Easy, especially with an iPhone</td></tr>
                        <tr><td>Software</td><td>Web apps and Android apps</td><td>Almost everything</td><td>Most mainstream apps</td></tr>
                        <tr><td>Gaming</td><td>Very limited</td><td>Best</td><td>Limited</td></tr>
                        <tr><td>Maintenance</td><td>Almost none</td><td>Some</td><td>Little</td></tr>
                        <tr><td>Battery life</td><td>Good</td><td>Varies a lot</td><td>Excellent</td></tr>
                    </tbody>
                </table>
            </div>

            <h2>Three questions to decide</h2>
            <ol>
                <li><strong>Is there a specific program you must use?</strong> If it&rsquo;s Windows-only (some work, school or accounting software), get Windows.</li>
                <li><strong>Do you use an iPhone, and is your budget around £1,000?</strong> A MacBook will feel like home.</li>
                <li><strong>Is it mostly for the internet?</strong> A good Chromebook will be cheaper, faster to start and less hassle than a Windows laptop at the same price.</li>
            </ol>
            <p>
                Once you know which type you want, the next decision is usually memory — see{' '}
                <Link href="/guides/how-much-ram-do-i-need">how much RAM you need</Link>. Buying for someone else? Read{' '}
                <Link href="/guides/laptop-for-older-parent">choosing a laptop for an older parent</Link>.
            </p>
        </GuideLayout>
    )
}
