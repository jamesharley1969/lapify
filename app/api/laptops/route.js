import { NextResponse } from 'next/server'
import { supabase }     from '@/lib/supabase'
import { scoreAllLaptops } from '@/lib/scoring'

export async function POST(request) {
    try {
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
