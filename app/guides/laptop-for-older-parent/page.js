import Link from 'next/link'
import GuideLayout, { guideMetadata, QuickAnswer } from '@/components/GuideLayout'

const SLUG = 'laptop-for-older-parent'
export const metadata = guideMetadata(SLUG)

export default function Guide() {
    return (
        <GuideLayout
            slug={SLUG}
            intro="When you're buying for a parent or grandparent, the fastest or flashiest laptop is rarely the right one. What matters is a clear screen, a comfortable keyboard, and something that won't confuse them or need constant fixing."
        >
            <QuickAnswer>
                <p>
                    For most older relatives who mainly use email, video calls, the news and online shopping, a
                    <strong> 14&ndash;15.6&Prime; Chromebook with a Full HD screen and 8GB of RAM</strong> is the simplest, safest and
                    best-value choice — usually £300&ndash;£500. If they already use an iPhone and you have a bigger budget,
                    a <strong>MacBook Air</strong> is excellent. Choose Windows only if they&rsquo;re already comfortable with it or need a Windows-only program.
                </p>
            </QuickAnswer>

            <h2>What matters most</h2>

            <h3>1. A big, clear screen</h3>
            <p>
                Go for <strong>14 to 15.6 inches</strong> and a <strong>Full HD (1920 &times; 1080)</strong> resolution. Avoid screens
                listed as &ldquo;HD&rdquo; or &ldquo;1366 &times; 768&rdquo;: text looks fuzzy and there&rsquo;s less room to make it bigger. A
                bright screen helps too if they&rsquo;ll use it near a window.
            </p>

            <h3>2. A comfortable keyboard and trackpad</h3>
            <p>
                A full-size keyboard with clear key labels makes a real difference. A 15.6&Prime; laptop often includes a number pad, which
                some people find reassuring. If they struggle with trackpads, a plug-in mouse costs about £10 and solves it.
            </p>

            <h3>3. Simplicity over power</h3>
            <p>
                Email and video calls don&rsquo;t need a powerful laptop. What they need is something that starts quickly, updates
                itself quietly and doesn&rsquo;t throw up confusing pop-ups. That&rsquo;s why we often suggest a Chromebook: there&rsquo;s
                no antivirus to renew and very little to go wrong. Our{' '}
                <Link href="/guides/chromebook-vs-windows-vs-macbook">Chromebook vs Windows vs MacBook guide</Link> explains the differences.
            </p>

            <h3>4. A decent webcam and speakers</h3>
            <p>
                If seeing the grandchildren on video calls is the main reason for the laptop, look for a <strong>1080p webcam</strong>
                (sometimes listed as &ldquo;FHD camera&rdquo;) rather than 720p, and read reviews about the speakers.
            </p>

            <h3>5. Weight matters less than you think</h3>
            <p>
                If it&rsquo;ll mostly stay on the kitchen table, a slightly heavier laptop with a bigger screen is better than an ultra-light one
                with a small screen. If they&rsquo;ll carry it between rooms or take it travelling, aim for under 1.7kg.
            </p>

            <h2>What to avoid</h2>
            <ul>
                <li><strong>The cheapest Windows laptops</strong> (4GB of RAM, 64GB &ldquo;eMMC&rdquo; storage). They&rsquo;re slow and fill up with updates, which leads to lots of worried phone calls.</li>
                <li><strong>Gaming laptops.</strong> They&rsquo;re heavy, noisy, have shorter battery life and cost more for power that won&rsquo;t be used.</li>
                <li><strong>Old stock Chromebooks</strong> near their update end date. Check how long the model will get updates for.</li>
                <li><strong>Paying for extras at checkout</strong> such as antivirus subscriptions or setup services. You can do this yourself in half an hour (see below).</li>
            </ul>

            <h2>Set it up before you hand it over</h2>
            <p>An hour of setup saves weeks of phone support. Before you give it to them:</p>
            <ol>
                <li><strong>Run all the updates</strong> so they don&rsquo;t start the moment they switch it on.</li>
                <li><strong>Make text bigger.</strong> Increase the display scaling and default browser zoom until it&rsquo;s comfortable for them to read.</li>
                <li><strong>Sign them in</strong> to their email and the video-call apps they&rsquo;ll use, and add bookmarks for the sites they visit most.</li>
                <li><strong>Remove clutter.</strong> Uninstall trial software and pin only the few things they need to the taskbar or shelf.</li>
                <li><strong>Set up remote help</strong> so you can see their screen when they ring with a problem: Chrome Remote Desktop works on Chromebooks and Windows, Quick Assist is built into Windows, and Screen Sharing works on a Mac.</li>
                <li><strong>Agree a safe place for passwords</strong>, and have a quick chat about scam emails and calls (no genuine company will ask them to install software or read out a code).</li>
            </ol>

            <h2>The bottom line</h2>
            <p>
                Spend on the screen, keyboard and simplicity, not on raw power. A well-chosen £300&ndash;£500 laptop, set up properly,
                will serve most older relatives happily for years.
            </p>
        </GuideLayout>
    )
}
