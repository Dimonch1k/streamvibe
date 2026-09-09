'use server'

import { createClient } from '@supabase/supabase-js'

import type { Database } from '@/lib/supabase/types'

import type { GenreItem } from './types'

export async function getGenres(): Promise<GenreItem[]> {
	const url = process.env.NEXT_PUBLIC_SUPABASE_URL
	const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

	if (!url || !anonKey) {
		throw new Error(
			'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.'
		)
	}

	const supabase = createClient<Database>(url, anonKey, {
		auth: { persistSession: false }
	})

	const { data, error } = await supabase
		.from('genres')
		.select('id,slug,name,image_path')
		.order('sort_order')

	if (error) {
		throw new Error(`Unable to load genres: ${error.message}`)
	}

	return data.map(genre => {
		if (!genre.image_path) {
			throw new Error(`Genre "${genre.name}" has no image`)
		}

		return {
			id: genre.id,
			slug: genre.slug,
			name: genre.name,
			imagePath: genre.image_path
		}
	})
}
