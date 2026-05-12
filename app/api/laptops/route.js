import { NextResponse }    from 'next/server'
import { createClient }    from '@supabase/supabase-js'
import { scoreAllLaptops } from '@/lib/scoring'

export const dynamic = 'force-dynamic'

export async function POST(request) {
    try {
        // Create client inside handler so env vars are available at runtime
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        )

        const answers = await request.json()

        // Pull all active laptops with their retailer prices from the view
        const { data: laptops, error } = await supabase
            .from('laptop_full')
            .select('*')

        if (error) throw error

        if (!laptops || laptops.length === 0) {
            return NextResponse.json({ results: [], message: 'No laptops in database yet.' })
        }

        const results = scoreAllLaptops(laptops, answers)

        return NextResponse.json({ results })

    } catch (err) {
        console.error('Laptop API error:', err)
        return NextResponse.json(
            { error: 'Failed to fetch recommendations. Please try again.' },
            { status: 500 }
        )
    }
}
