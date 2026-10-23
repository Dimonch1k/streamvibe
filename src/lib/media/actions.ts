'use server'

import { createClient } from '@supabase/supabase-js'

import type { Database } from '@/lib/supabase/types'

import type { MediaItem } from './types'

export async function getMovies(): Promise<MediaItem[]> {
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
		.from('media')
		.select(
			'backdrop_path,created_at,description,duration_minutes,id,is_featured,is_published,poster_path,released_at,released_year,slug,title,trailer_url,type,updated_at,video_url,views_count'
		)
		.eq('type', 'movie')
		.order('sort_order')

	if (error) {
		throw new Error(`Unable to load movies: ${error.message}`)
	}

	return data
}

export async function getMedium(slug: string): Promise<MediaItem> {
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
		.from('media')
		.select(
			'backdrop_path,created_at,description,duration_minutes,id,is_featured,is_published,poster_path,released_at,released_year,slug,title,trailer_url,type,updated_at,video_url,views_count'
		)
		.eq('slug', slug)
		.single()

	if (error) {
		throw new Error(`Unable to load movie: ${error.message}`)
	}

	return data
}

export async function getShows(): Promise<MediaItem[]> {
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
		.from('media')
		.select(
			'backdrop_path,created_at,description,duration_minutes,id,is_featured,is_published,poster_path,released_at,released_year,slug,title,trailer_url,type,updated_at,video_url,views_count'
		)
		.eq('type', 'show')
		.order('sort_order')

	if (error) {
		throw new Error(`Unable to load shows: ${error.message}`)
	}

	return data
}
