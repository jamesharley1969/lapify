'use client'

import { useState } from 'react'
import {
    User, Smile, Users, Gift,
    Globe, Briefcase, Gamepad2, Palette,
    Backpack, Car, Home,
    Wallet, CreditCard, Gem, Crown,
    LayoutGrid, Command, HelpCircle,
    Code2, Cpu, Zap,
} from 'lucide-react'
import Results from './Results'
import { isPowerhouseCombination, getMinBudgetInfo } from '@/lib/scoring'

// ── Icon map ──────────────────────────────────────────────────
const ICONS = {
    User, Smile, Users, Gift,
    Globe, Briefcase, Gamepad2, Palette,
    Backpack, Car, Home,
    Wallet, CreditCard, Gem, Crown,
    LayoutGrid, Command, HelpCircle,
    Code2, Cpu,
}

// ── Budget tier ordering (for nudge comparison) ───────────────
const BUDGET_ORDER = ['under400', '400to700', '700to1000', 'over1000']

function budgetIsBelow(selected, minimum) {
    return BUDGET_ORDER.indexOf(selected) < BUDGET_ORDER.indexOf(minimum)
}

function minBudgetTier(uses) {
    if (!uses || uses.length === 0) return null
    if (uses.includes('gaming') && (uses.includes('creative') || uses.includes('coding'))) return '700to1000'
    if (uses.includes('gaming') || uses.includes('creative')) return '700to1000'
    if (uses.includes('coding')) return '400to700'
    if (uses.includes('work') && uses.length > 1) return '400to700'
    return null
}

// ── Wizard steps ─────────────────────────────────────────────
const steps = [
    {
        id: 'who',
        question: 'Who is this laptop for?',
        sub: 'This helps us think about the right size and budget.',
        multiSelect: false,
        options: [
            { value: 'me',      icon: 'User',   label: 'Just for me',       desc: "I'll be the one using it" },
            { value: 'child',   icon: 'Smile',  label: 'My child',           desc: 'School work or general use' },
            { value: 'partner', icon: 'Users',  label: 'Partner or parent',  desc: 'Wants something simple & reliable' },
            { value: 'gift',    icon: 'Gift',   label: "It's a gift",        desc: "Not sure exactly what they need" },
        ],
    },
    {
        id: 'use',
        question: 'What will it mainly be used for?',
        sub: 'Pick all that apply.',
        multiSelect: true,
        options: [
            { value: 'web',      icon: 'Globe',     label: 'Web & email',              desc: 'Browsing, social media, streaming' },
            { value: 'work',     icon: 'Briefcase', label: 'Work or studying',          desc: 'Documents, spreadsheets, video calls' },
            { value: 'gaming',   icon: 'Gamepad2',  label: 'Gaming',                    desc: 'Playing PC games' },
            { value: 'creative', icon: 'Palette',   label: 'Creative work',             desc: 'Photos, video editing, music' },
            { value: 'coding',   icon: 'Code2',     label: 'Coding / data work',        desc: 'Development, data science, programming' },
            { value: '3d',       icon: 'Cpu',       label: '3D / engineering / AI',     desc: 'CAD, machine learning, rendering' },
        ],
    },
    {
        id: 'portability',
        question: 'How important is portability?',
        sub: 'This affects weight, size and battery life.',
        multiSelect: false,
        options: [
            { value: 'very',     icon: 'Backpack', label: 'Very important', desc: 'Carried around every day' },
            { value: 'somewhat', icon: 'Car',      label: 'Somewhat',        desc: 'Travels with me occasionally' },
            { value: 'low',      icon: 'Home',     label: 'Not very',        desc: 'Mostly at a desk at home' },
        ],
    },
    {
        id: 'budget',
        question: "What's your budget?",
        sub: "We'll find the best laptop in your price range.",
        multiSelect: false,
        options: [
            { value: 'under400',  icon: 'Wallet',     label: 'Up to £400',    desc: 'Great value options available' },
            { value: '400to700',  icon: 'CreditCard', label: '£400 – £700',   desc: 'The mid-range sweet spot' },
            { value: '700to1000', icon: 'Gem',        label: '£700 – £1,000', desc: 'Premium performance' },
            { value: 'over1000',  icon: 'Crown',      label: '£1,000+',       desc: 'Top of the range' },
        ],
    },
    {
        id: 'brand',
        question: 'Windows or Mac — any preference?',
        sub: 'Both are excellent. This just helps narrow things down.',
        multiSelect: false,
        options: [
            { value: 'windows', icon: 'LayoutGrid', label: 'Windows',       desc: 'More choice, usually better value' },
            { value: 'apple',   icon: 'Command',    label: 'Apple Mac',      desc: 'Premium build, superb battery life' },
            { value: 'none',    icon: 'HelpCircle', label: 'No preference', desc: 'Just show me the best options' },
        ],
    },
]

// ── Sub-components ───────────────────────────────────────────

function CheckIcon() {
    return (
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <polyline points="1,4.5 4,7.5 10,1" stroke="white" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function PowerhouseScreen({ onContinue, onBack }) {
    return (
        <main>
            <div className="powerhouse-screen fade-up">
                <div className="powerhouse-icon">
                    <Zap size={36} strokeWidth={1.5} />
                </div>
                <h2 className="powerhouse-title">You need a powerhouse</h2>
                <p className="powerhouse-sub">
                    The workloads you've chosen — gaming, creative, coding, 3D or AI —
                    demand serious hardware. We'll focus on <strong>£1,000+ machines</strong> built
                    to handle everything you've described without breaking a sweat.
                </p>
                <div className="powerhouse-specs">
                    <div className="ph-spec"><span className="ph-spec-icon">🧠</span> 16–32GB memory</div>
                    <div className="ph-spec"><span className="ph-spec-icon">🎮</span> Dedicated GPU</div>
                    <div className="ph-spec"><span className="ph-spec-icon">⚡</span> High-performance CPU</div>
                    <div className="ph-spec"><span className="ph-spec-icon">💾</span> Fast SSD storage</div>
                </div>
                <button className="btn-continue powerhouse-cta" onClick={onContinue}>
                    Find my powerhouse laptop →
                </button>
                <button className="btn-back powerhouse-back" onClick={onBack}>
                    ← Back to use cases
                </button>
            </div>
        </main>
    )
}

function WizardStep({ step, stepIndex, total, selected, onSelect, onNext, onBack, answers }) {
    const isSingleCol = step.options.length <= 3
    const remaining   = total - stepIndex - 1

    // For multi-select steps, selected is an array
    const isSelected  = (val) => step.multiSelect
        ? (Array.isArray(selected) && selected.includes(val))
        : selected === val

    const isAnswered  = step.multiSelect
        ? (Array.isArray(selected) && selected.length > 0)
        : !!selected

    // Budget nudge — shown on the budget step
    const uses       = Array.isArray(answers.use) ? answers.use : []
    const nudgeInfo  = step.id === 'budget' ? getMinBudgetInfo(uses) : null
    const minTier    = step.id === 'budget' ? minBudgetTier(uses) : null
    const showWarn   = nudgeInfo && selected && minTier && budgetIsBelow(selected, minTier)

    return (
        <main>
            <div className="fade-up" key={stepIndex}>

                {/* Segmented progress */}
                <div className="progress-area">
                    <div className="progress-meta">
                        <span className="step-label">Step {stepIndex + 1} of {total}</span>
                        <span className="step-count">
                            {remaining} question{remaining !== 1 ? 's' : ''} to go
                        </span>
                    </div>
                    <div className="progress-segments">
                        {Array.from({ length: total }, (_, i) => (
                            <div
                                key={i}
                                className={`progress-segment${i <= stepIndex ? ' filled' : ''}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Question card */}
                <div className="question-card">
                    <div className="question-text">{step.question}</div>
                    <div className={`question-sub${step.multiSelect ? ' question-sub--multi' : ''}`}>
                        {step.sub}
                    </div>

                    {/* Budget nudge banner */}
                    {nudgeInfo && (
                        <div className={`budget-nudge${showWarn ? ' budget-nudge--warn' : ''}`}>
                            <span className="budget-nudge-icon">{showWarn ? '⚠️' : '💡'}</span>
                            <span>
                                {showWarn
                                    ? `${nudgeInfo.message} You may find options limited at this budget — results will show the best available.`
                                    : `Based on your needs, we recommend at least ${nudgeInfo.label}. ${nudgeInfo.message}`
                                }
                            </span>
                        </div>
                    )}

                    <div className={`options-grid${isSingleCol ? ' cols-1' : ''}`}>
                        {step.options.map(opt => {
                            const sel  = isSelected(opt.value)
                            const Icon = ICONS[opt.icon]
                            return (
                                <button
                                    key={opt.value}
                                    className={`option-card${sel ? ' selected' : ''}`}
                                    onClick={() => onSelect(step.id, opt.value, step.multiSelect)}
                                >
                                    <div className="option-icon">
                                        {Icon && <Icon size={20} strokeWidth={1.5} />}
                                    </div>
                                    <div className="option-content">
                                        <span className="option-label">{opt.label}</span>
                                        <span className="option-desc">{opt.desc}</span>
                                    </div>
                                    <div className={`option-check${step.multiSelect ? ' option-check--square' : ''}`}>
                                        {sel && <CheckIcon />}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Nav — outside card */}
                <div className="nav-buttons">
                    <button className="btn-back" onClick={onBack} disabled={stepIndex === 0}>
                        ← Back
                    </button>
                    <button className="btn-continue" onClick={onNext} disabled={!isAnswered}>
                        {stepIndex === total - 1 ? 'Show my matches →' : 'Continue →'}
                    </button>
                </div>

            </div>
        </main>
    )
}

function LoadingScreen() {
    return (
        <main>
            <div className="loading-screen fade-up">
                <div className="loading-spinner" />
                <div className="loading-text">Finding your perfect match…</div>
                <div className="loading-sub">Searching hundreds of laptops for you</div>
            </div>
        </main>
    )
}

// ── Main component ───────────────────────────────────────────

export default function Wizard() {
    const [phase, setPhase]             = useState('wizard')  // wizard | powerhouse | loading | results
    const [currentStep, setCurrentStep] = useState(0)
    const [answers, setAnswers]         = useState({})
    const [results, setResults]         = useState(null)
    const [error, setError]             = useState(null)

    const step = steps[currentStep]

    const handleSelect = (stepId, value, multiSelect) => {
        if (multiSelect) {
            setAnswers(prev => {
                const current = Array.isArray(prev[stepId]) ? prev[stepId] : []
                const updated = current.includes(value)
                    ? current.filter(v => v !== value)   // deselect
                    : [...current, value]                 // select
                return { ...prev, [stepId]: updated }
            })
        } else {
            setAnswers(prev => ({ ...prev, [stepId]: value }))
        }
    }

    const handleNext = async () => {
        const currentAnswer = answers[step.id]
        const isAnswered = step.multiSelect
            ? (Array.isArray(currentAnswer) && currentAnswer.length > 0)
            : !!currentAnswer

        if (!isAnswered) return

        // After the use step — check for powerhouse
        if (step.id === 'use') {
            const uses = Array.isArray(currentAnswer) ? currentAnswer : []
            if (isPowerhouseCombination(uses)) {
                setAnswers(prev => ({ ...prev, budget: 'over1000' }))
                setPhase('powerhouse')
                return
            }
        }

        if (currentStep < steps.length - 1) {
            // Powerhouse users skip the budget step (already auto-set)
            const nextStep = currentStep + 1
            const isPH     = isPowerhouseCombination(
                Array.isArray(answers.use) ? answers.use : []
            )
            if (isPH && steps[nextStep]?.id === 'budget') {
                setCurrentStep(nextStep + 1)
            } else {
                setCurrentStep(nextStep)
            }
            return
        }

        // Final step — submit
        setPhase('loading')
        setError(null)
        try {
            const res = await fetch('/api/laptops', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(answers),
            })
            if (!res.ok) throw new Error('Server error')
            const data = await res.json()
            setResults(data.results)
            setPhase('results')
        } catch (err) {
            console.error(err)
            setError('Something went wrong fetching recommendations. Please try again.')
            setPhase('wizard')
            setCurrentStep(steps.length - 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            // Powerhouse users skip budget step going backwards too
            const prevStep = currentStep - 1
            const isPH     = isPowerhouseCombination(
                Array.isArray(answers.use) ? answers.use : []
            )
            if (isPH && steps[prevStep]?.id === 'budget') {
                setCurrentStep(prevStep - 1)
            } else {
                setCurrentStep(prevStep)
            }
        }
    }

    const handlePowerhouseContinue = () => {
        setPhase('wizard')
        const portabilityIndex = steps.findIndex(s => s.id === 'portability')
        setCurrentStep(portabilityIndex)
    }

    const handlePowerhouseBack = () => {
        setPhase('wizard')
        setAnswers(prev => ({ ...prev, budget: undefined }))
        setCurrentStep(steps.findIndex(s => s.id === 'use'))
    }

    const handleRestart = () => {
        setPhase('wizard')
        setCurrentStep(0)
        setAnswers({})
        setResults(null)
        setError(null)
    }

    if (phase === 'powerhouse') return <PowerhouseScreen onContinue={handlePowerhouseContinue} onBack={handlePowerhouseBack} />
    if (phase === 'loading')    return <LoadingScreen />
    if (phase === 'results')    return <Results results={results} answers={answers} onRestart={handleRestart} />

    return (
        <>
            {error && (
                <div style={{
                    background: '#FEF2F2', color: '#B91C1C', border: '1px solid #FECACA',
                    borderRadius: 10, padding: '12px 16px', margin: '0 auto 16px',
                    maxWidth: 560, fontSize: 14, textAlign: 'center'
                }}>
                    ⚠️ {error}
                </div>
            )}
            <WizardStep
                step={step}
                stepIndex={currentStep}
                total={steps.length}
                selected={answers[step?.id]}
                onSelect={handleSelect}
                onNext={handleNext}
                onBack={handleBack}
                answers={answers}
            />
        </>
    )
}
