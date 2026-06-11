'use client'

import {
    Cpu, HardDrive, Monitor, Battery, Scale, Zap, Command, Hand,
    CheckCircle, Search, ShoppingCart, Star,
} from 'lucide-react'
import { getLowestPrice, getWhyText, answerLabels } from '@/lib/scoring'

const AWIN_ID = process.env.NEXT_PUBLIC_AWIN_PUBLISHER_ID ?? ''

function buildAwinUrl(merchantId, destinationUrl) {
    if (!merchantId || !destinationUrl || destinationUrl === '#') return null
    // Feed laptops already have a complete Awin tracking URL — use it directly
    if (destinationUrl.includes('awin1.com')) return destinationUrl
    // Seed laptops have a plain retailer URL — wrap it in a cread.php deep link
    return `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_ID}&ued=${encodeURIComponent(destinationUrl)}`
}

// ── Spec chips ───────────────────────────────────────────────
function specChips(laptop) {
    return [
        laptop.ram_gb             && { Icon: Cpu,       label: `${laptop.ram_gb}GB RAM` },
        laptop.storage_gb         && { Icon: HardDrive, label: `${laptop.storage_gb}GB storage` },
        laptop.screen_size_inches && { Icon: Monitor,   label: `${laptop.screen_size_inches}" screen` },
        laptop.battery_hours      && { Icon: Battery,   label: `${laptop.battery_hours}hr battery` },
        laptop.weight_kg          && { Icon: Scale,     label: `${laptop.weight_kg}kg` },
        laptop.gpu_type === 'dedicated' && { Icon: Zap,     label: 'Dedicated GPU' },
        laptop.os === 'macos'     && { Icon: Command,   label: 'macOS' },
        laptop.touchscreen        && { Icon: Hand,      label: 'Touchscreen' },
    ].filter(Boolean)
}

// ── Result card ──────────────────────────────────────────────
function ResultCard({ laptop, isTop, answers }) {
    const lowestPrice = getLowestPrice(laptop)
    const why         = getWhyText(laptop, answers)
    const prices      = [...(laptop.prices ?? [])].sort((a, b) => a.price - b.price)
    const chips       = specChips(laptop)
    const hasImage    = !!(laptop.image_url && laptop.image_url !== '#')

    return (
        <div className={`result-card${isTop ? ' top-pick' : ''}`}>
            <div className={`result-card-inner${hasImage ? '' : ' no-image'}`}>

                {/* Image — real product photos come via Awin feeds */}
                {hasImage && (
                    <div className="result-image-wrap">
                        <img
                            className="result-image"
                            src={laptop.image_url}
                            alt={laptop.name}
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.parentElement.style.display = 'none'
                                e.currentTarget.closest('.result-card-inner')?.classList.add('no-image')
                            }}
                        />
                    </div>
                )}

                {/* Content */}
                <div className="result-body">
                    {isTop && (
                        <div className="top-pick-badge">
                            <Star size={11} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5, marginTop: -2 }} />
                            Best Match
                        </div>
                    )}

                    <div className="result-header-row">
                        <div>
                            <div className="result-name">{laptop.name}</div>
                            {laptop.description && (
                                <div className="result-tagline">{laptop.description}</div>
                            )}
                        </div>
                        {lowestPrice > 0 && (
                            <div className="result-price-wrap">
                                <div className="result-price-from">from</div>
                                <div className="result-price-amount">£{lowestPrice.toFixed(0)}</div>
                            </div>
                        )}
                    </div>

                    <div className="result-why">{why}</div>

                    <div className="result-specs">
                        {chips.map((chip, i) => (
                            <span key={i} className="spec-chip">
                                <chip.Icon size={13} strokeWidth={1.5} />
                                {chip.label}
                            </span>
                        ))}
                    </div>

                    <div className="result-buttons">
                        {prices.map((retailer, i) => {
                            const href = buildAwinUrl(retailer.merchant_id, retailer.affiliate_url)
                            if (!href) return null
                            const isUsed = retailer.condition && retailer.condition !== 'new'
                            const conditionLabel = retailer.condition === 'refurbished' ? 'Refurb' : retailer.condition === 'used' ? 'Used' : null
                            return (
                                <a
                                    key={retailer.retailer_id ?? i}
                                    href={href}
                                    className={`btn-buy${i > 0 ? ' alt' : ''}`}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                >
                                    {i === 0 && <ShoppingCart size={14} strokeWidth={1.5} />}
                                    {retailer.retailer} — £{Number(retailer.price).toFixed(0)}
                                    {conditionLabel && (
                                        <span className="condition-badge">{conditionLabel}</span>
                                    )}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ── Results page ─────────────────────────────────────────────
export default function Results({ results, answers, onRestart }) {
    const summaryChips = Object.entries(answers).flatMap(([key, val]) => {
        if (Array.isArray(val)) {
            return val.map(v => ({ key: `${key}-${v}`, label: answerLabels[key]?.[v] ?? v }))
        }
        return [{ key, label: answerLabels[key]?.[val] ?? val }]
    })

    if (!results || results.length === 0) {
        return (
            <main>
                <div className="results-header fade-up">
                    <div className="results-icon-wrap">
                        <Search size={44} strokeWidth={1.5} />
                    </div>
                    <div className="results-title">No laptops found yet</div>
                    <div className="results-sub">
                        The product catalogue is still being populated.
                        Check back shortly!
                    </div>
                    <br />
                    <button className="btn-restart" onClick={onRestart}>← Start again</button>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className="fade-up">
                <div className="results-header">
                    <div className="results-icon-wrap">
                        <CheckCircle size={52} strokeWidth={1.25} />
                    </div>
                    <div className="results-title">We found your matches!</div>
                    <div className="results-sub">
                        Here are the laptops that best fit your answers.
                    </div>
                    <div className="answer-summary">
                        {summaryChips.map(({ key, label }) => (
                            <span key={key} className="answer-chip">{label}</span>
                        ))}
                    </div>
                </div>

                <div className="results-list">
                    {results.map((laptop, i) => (
                        <ResultCard
                            key={laptop.id}
                            laptop={laptop}
                            isTop={i === 0}
                            answers={answers}
                        />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: 28 }}>
                    <button className="btn-restart" onClick={onRestart}>
                        ← Start again
                    </button>
                </div>
            </div>
        </main>
    )
}
