import Link from 'next/link'
import GuideLayout, { guideMetadata, QuickAnswer } from '@/components/GuideLayout'

const SLUG = 'how-much-ram-do-i-need'
export const metadata = guideMetadata(SLUG)

export default function Guide() {
    return (
        <GuideLayout
            slug={SLUG}
            intro="RAM is one of the few specs that really does change how a laptop feels to use — and one of the easiest to get wrong. Here's how much you need, explained without the jargon."
        >
            <QuickAnswer>
                <ul>
                    <li><strong>Chromebook for web, email and video calls:</strong> 8GB is plenty (4GB at a push).</li>
                    <li><strong>Windows laptop or MacBook for everyday use:</strong> get <strong>16GB</strong>. 8GB still works, but it&rsquo;s the main reason laptops start to feel slow after a year or two.</li>
                    <li><strong>Gaming, video editing, music production or programming:</strong> 16GB minimum, 32GB if you can stretch to it.</li>
                </ul>
            </QuickAnswer>

            <h2>What RAM actually does</h2>
            <p>
                Think of your laptop as a desk. <strong>Storage</strong> (the SSD) is the filing cabinet: it&rsquo;s where all your
                files, photos and apps live. <strong>RAM</strong> (memory) is the desk itself: the space for whatever you&rsquo;re
                working on right now.
            </p>
            <p>
                A small desk is fine if you only do one thing at a time. But open a few browser tabs, a video call, a Word document and
                your email, and a small desk fills up. The laptop then has to keep shuffling things back into the filing cabinet,
                and that&rsquo;s when it starts to feel sluggish, freezes for a second, or makes the fan whirr.
            </p>
            <p>
                More RAM doesn&rsquo;t make a laptop faster at one task. It stops it <em>slowing down</em> when you do several things at once.
            </p>

            <h2>How much RAM for what you do</h2>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr><th>What you&rsquo;ll use it for</th><th>Minimum</th><th>Recommended</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Web, email, streaming, video calls on a Chromebook</td><td>4GB</td><td>8GB</td></tr>
                        <tr><td>Everyday Windows use: web, Office, video calls, homework</td><td>8GB</td><td>16GB</td></tr>
                        <tr><td>MacBook for everyday use</td><td>8GB</td><td>16GB (standard on new MacBook Airs)</td></tr>
                        <tr><td>Working from home with lots of apps and tabs open</td><td>16GB</td><td>16GB</td></tr>
                        <tr><td>Photo editing, light video editing</td><td>16GB</td><td>16–32GB</td></tr>
                        <tr><td>Gaming</td><td>16GB</td><td>16–32GB</td></tr>
                        <tr><td>4K video editing, 3D work, running AI models</td><td>32GB</td><td>32GB+</td></tr>
                    </tbody>
                </table>
            </div>

            <h2>Why we suggest 16GB for most Windows laptops</h2>
            <p>
                Windows 11 will technically run on 4GB, but that&rsquo;s a bare minimum, not a comfortable amount. Web browsers have become
                much more memory-hungry, video calling apps use a lot, and updates add more over the years you&rsquo;ll own the laptop.
            </p>
            <p>
                Microsoft&rsquo;s own &ldquo;Copilot+ PC&rdquo; laptops require at least 16GB, and Apple made 16GB standard on the MacBook Air
                from late 2024 — a good sign of where the baseline now sits. If you&rsquo;re choosing between two similar laptops and one has
                16GB for a little more money, that&rsquo;s usually money well spent.
            </p>

            <h2>Can I just add more RAM later?</h2>
            <p>
                Often, no. Most thin and light laptops — and every current MacBook — have their memory soldered to the main board,
                so what you buy is what you&rsquo;re stuck with. Some larger and gaming laptops do have a slot you can upgrade, but
                it&rsquo;s safest to assume you can&rsquo;t and buy enough from the start.
            </p>

            <h2>Common mix-ups</h2>
            <ul>
                <li>
                    <strong>RAM vs storage.</strong> &ldquo;8GB&rdquo; is RAM; &ldquo;256GB&rdquo; or &ldquo;512GB&rdquo; is storage. Retailers often list
                    them side by side. If you see &ldquo;8GB / 256GB&rdquo;, the first number is the one this guide is about.
                </li>
                <li>
                    <strong>&ldquo;Unified memory&rdquo; on a Mac</strong> is just Apple&rsquo;s name for RAM. Macs use it efficiently, but
                    16GB is still the sensible choice if you&rsquo;ll keep it for years.
                </li>
                <li>
                    <strong>RAM type (DDR4, DDR5, LPDDR5X)</strong> matters far less than the amount. Don&rsquo;t worry about it.
                </li>
            </ul>

            <h2>The bottom line</h2>
            <p>
                For most people buying a Windows laptop or a MacBook today, <strong>16GB is the sweet spot</strong>: enough to stay
                quick for years without paying for power you&rsquo;ll never use. A Chromebook is the main exception, where 8GB is
                comfortable. If you&rsquo;re not sure which type of laptop is right for you, read{' '}
                <Link href="/guides/chromebook-vs-windows-vs-macbook">Chromebook vs Windows vs MacBook</Link>.
            </p>
        </GuideLayout>
    )
}
