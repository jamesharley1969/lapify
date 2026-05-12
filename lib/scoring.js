// ============================================================
// Lapify — Scoring Engine
// Scores every laptop in the database against the user's
// wizard answers and returns the top 3 matches.
// Supports multi-select use cases (answers.use is an array).
// ============================================================

const budgetRanges = {
    'under400':  [0,    400],
    '400to700':  [401,  700],
    '700to1000': [701, 1000],
    'over1000':  [1001, 9999],
}

// ── Powerhouse detection ─────────────────────────────────────
// Returns true if the selected use cases demand a high-end machine.
export function isPowerhouseCombination(uses) {
    if (!Array.isArray(uses) || uses.length === 0) return false
    if (uses.includes('3d'))                                                   return true
    if (uses.length >= 4)                                                      return true
    if (uses.includes('gaming') && uses.includes('creative') && uses.includes('coding')) return true
    return false
}

// ── Minimum budget tier for a given use set ──────────────────
export function getMinBudgetInfo(uses) {
    if (!Array.isArray(uses) || uses.length === 0) return null
    if (uses.includes('gaming') && (uses.includes('creative') || uses.includes('coding')))
        return { label: '£900+', message: 'Gaming combined with creative or coding work needs mid-to-high spec hardware.' }
    if (uses.includes('gaming'))
        return { label: '£700+', message: 'Gaming laptops with a dedicated GPU typically start around £700.' }
    if (uses.includes('creative'))
        return { label: '£700+', message: 'Photo and video editing runs best on mid-range hardware and above.' }
    if (uses.includes('coding'))
        return { label: '£500+', message: 'For coding and data work, a mid-range machine will serve you well.' }
    if (uses.includes('work') && uses.length > 1)
        return { label: '£500+', message: 'Combining work with other tasks benefits from a slightly higher budget.' }
    return null
}

export function scoreAllLaptops(laptops, answers) {
    return laptops
        .map(laptop => ({ ...laptop, score: scoreLaptop(laptop, answers) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
}

function scoreLaptop(laptop, answers) {
    let score = 0

    const price   = getLowestPrice(laptop)
    const ram     = laptop.ram_gb
    const gpu     = laptop.gpu_type
    const os      = laptop.os
    const weight  = laptop.weight_kg
    const battery = laptop.battery_hours
    const screen  = laptop.screen_size_inches
    const tier    = laptop.processor_tier
    const brand   = laptop.brand
    const storage = laptop.storage_gb

    // Normalise use to an array
    const uses = Array.isArray(answers.use)
        ? answers.use
        : (answers.use ? [answers.use] : [])

    // ── Budget (up to ±45 pts) ───────────────────────────────
    const [minB, maxB] = budgetRanges[answers.budget] ?? [0, 9999]
    if (price >= minB && price <= maxB) {
        score += 40
    } else if (price < minB) {
        score += 12
    } else {
        const overage = price - maxB
        score -= Math.min(45, Math.round(overage / 8))
    }

    // ── Use cases — additive, each use case contributes ─────
    if (uses.includes('web')) {
        score += 8
        if (ram >= 8)      score += 8
        if (battery >= 9)  score += 6
    }

    if (uses.includes('work')) {
        if (ram >= 16)     score += 10
        if (battery >= 10) score += 6
        if (screen <= 14)  score += 4
        if (weight < 1.7)  score += 4
    }

    if (uses.includes('gaming')) {
        score += gpu === 'dedicated' ? 25 : -20
        if (ram >= 16)      score += 6
        if (storage >= 512) score += 3
    }

    if (uses.includes('creative')) {
        if (ram >= 16)           score += 12
        if (tier === 'high')     score += 8
        if (gpu === 'dedicated') score += 6
        if (storage >= 512)      score += 4
    }

    if (uses.includes('coding')) {
        if (ram >= 16)      score += 15
        if (tier === 'high') score += 10
        if (storage >= 512)  score += 5
        if (os === 'macos')  score += 5   // macOS popular for development
    }

    if (uses.includes('3d')) {
        score += gpu === 'dedicated' ? 20 : -20
        if (ram >= 32)           score += 15
        else if (ram >= 16)      score += 5
        if (tier === 'high')     score += 15
        if (storage >= 1000)     score += 8
        else if (storage >= 512) score += 3
    }

    // ── Portability (up to ±25 pts) ─────────────────────────
    switch (answers.portability) {
        case 'very':
            if      (weight < 1.3)  score += 25
            else if (weight < 1.5)  score += 20
            else if (weight < 1.7)  score += 12
            else if (weight < 1.9)  score += 4
            else                    score -= 15
            if      (battery >= 14) score += 12
            else if (battery >= 10) score += 6
            else if (battery >= 8)  score += 2
            break
        case 'somewhat':
            if (weight < 1.8) score += 10
            if (battery >= 9) score += 5
            break
        case 'low':
            if (screen >= 15.6) score += 8
            break
    }

    // ── Brand preference (up to ±30 pts) ────────────────────
    switch (answers.brand) {
        case 'apple':
            score += os === 'macos' ? 30 : -25
            break
        case 'windows':
            score += os === 'windows' ? 10 : -20
            break
    }

    // ── Who it's for (small modifiers) ──────────────────────
    switch (answers.who) {
        case 'child':
            if (price < 500)       score += 10
            if (weight < 1.8)      score += 8
            if (tier === 'budget') score += 5
            break
        case 'partner':
            if (battery >= 9)                                           score += 5
            if (['HP','Dell','Apple','Microsoft'].includes(brand))      score += 5
            break
        case 'gift':
            if (['HP','Dell','Apple','Lenovo'].includes(brand))         score += 5
            break
    }

    return score
}

// ── Helpers ──────────────────────────────────────────────────

export function getLowestPrice(laptop) {
    if (!laptop.prices || laptop.prices.length === 0) return 0
    const prices = laptop.prices.map(p => p.price).filter(p => p != null && p > 0)
    return prices.length > 0 ? Math.min(...prices) : 0
}

export function getCheapestRetailer(laptop) {
    if (!laptop.prices || laptop.prices.length === 0) return null
    return [...laptop.prices]
        .filter(p => p.in_stock && p.price > 0)
        .sort((a, b) => a.price - b.price)[0] ?? null
}

export function getWhyText(laptop, answers) {
    const reasons = []
    const price   = getLowestPrice(laptop)
    const uses    = Array.isArray(answers.use)
        ? answers.use
        : (answers.use ? [answers.use] : [])

    if (uses.includes('gaming') && laptop.gpu_type === 'dedicated')
        reasons.push('Dedicated graphics card — ready for gaming')
    if (uses.includes('3d') && laptop.gpu_type === 'dedicated')
        reasons.push('Dedicated GPU handles 3D, rendering and AI workloads')
    if (uses.includes('coding') && laptop.ram_gb >= 16)
        reasons.push('16GB+ memory — great for coding and data work')
    if (answers.portability === 'very' && laptop.weight_kg < 1.6)
        reasons.push(`Light at just ${laptop.weight_kg}kg — easy to carry every day`)
    if (answers.portability === 'very' && laptop.battery_hours >= 14)
        reasons.push(`${laptop.battery_hours}hr battery — no need to carry a charger`)
    if ((uses.includes('work') || uses.includes('coding')) && laptop.ram_gb >= 16)
        reasons.push('16GB memory — great for multitasking and video calls')
    if (answers.brand === 'apple' && laptop.os === 'macos')
        reasons.push('Apple Mac as you requested')
    if (laptop.brand === 'Apple' && laptop.battery_hours >= 15)
        reasons.push(`Exceptional ${laptop.battery_hours}hr battery life`)
    if (answers.budget === 'under400' && price <= 400)
        reasons.push('Comfortably within your budget')
    if (uses.includes('creative') && laptop.ram_gb >= 16)
        reasons.push('16GB memory handles photo and video editing well')
    if (answers.who === 'child' && price <= 350)
        reasons.push("Good value choice for a child's first laptop")
    if (answers.portability !== 'very' && laptop.screen_size_inches >= 15.6)
        reasons.push('Larger screen — comfortable for long sessions at home')
    if (uses.includes('3d') && laptop.ram_gb >= 32)
        reasons.push('32GB RAM — built for heavy engineering and AI workloads')

    if (reasons.length === 0)
        reasons.push('Solid all-round laptop that matches your answers')

    return reasons.slice(0, 2).map(r => '✓ ' + r).join('  ·  ')
}

// Human-readable labels for the answer summary strip
export const answerLabels = {
    who:         { me: 'For me', child: 'For a child', partner: 'For partner/parent', gift: 'As a gift' },
    use:         { web: 'Web & email', work: 'Work/study', gaming: 'Gaming', creative: 'Creative', coding: 'Coding/data', '3d': '3D/AI/Engineering' },
    portability: { very: 'Very portable', somewhat: 'Some travel', low: 'Mostly at home' },
    budget:      { under400: 'Up to £400', '400to700': '£400–£700', '700to1000': '£700–£1,000', over1000: '£1,000+' },
    brand:       { windows: 'Windows', apple: 'Apple Mac', none: 'No preference' },
}
