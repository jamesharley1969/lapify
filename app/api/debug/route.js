import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export async function GET() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    const info = {
        url_present: !!url,
        url_value:   url ? url.slice(0, 30) + '...' : 'MISSING',
        key_present: !!key,
        key_prefix:  key ? key.slice(0, 20) + '...' : 'MISSING',
    }

    if (!url || !key) {
        return NextResponse.json({ status: 'env_missing', info })
    }

    try {
        const supabase = createClient(url, key)

        // Test 1: can we reach the laptops table?
        const { data: laptops, error: laptopsError } = await supabase
            .from('laptops')
            .select('id, name')
            .limit(3)

        // Test 2: can we reach the laptop_full view?
        const { data: view, error: viewError } = await supabase
            .from('laptop_full')
            .select('id, name')
            .limit(3)

        return NextResponse.json({
            status: 'ok',
            info,
            laptops_table: {
                count: laptops?.length ?? 0,
                error: laptopsError?.message ?? null,
                sample: laptops?.map(l => l.name) ?? [],
            },
            laptop_full_view: {
                count: view?.length ?? 0,
                error: viewError?.message ?? null,
                sample: view?.map(l => l.name) ?? [],
            },
        })
    } catch (err) {
        return NextResponse.json({ status: 'exception', error: err.message, info })
    }
}
