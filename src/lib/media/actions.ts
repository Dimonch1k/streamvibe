'use server'

import { createClient } from '@supabase/supabase-js'

import type { Database } from '@/lib/supabase/types'

import type { MediaDetailItem, MediaItem } from './types'

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

export async function getMedium(slug: string): Promise<MediaDetailItem> {
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

	const [languageLinks, genreLinks, credits, ratings, reviews] =
		await Promise.all([
			supabase
				.from('media_languages')
				.select('language_id')
				.eq('media_id', data.id),
			supabase.from('media_genres').select('genre_id').eq('media_id', data.id),
			supabase
				.from('media_people')
				.select('person_id,role,sort_order')
				.eq('media_id', data.id)
				.order('sort_order'),
			supabase
				.from('media_ratings')
				.select('source,rating,votes_count')
				.eq('media_id', data.id),
			supabase
				.from('media_reviews')
				.select('id,first_name,last_name,location,comment,rating')
				.eq('media_id', data.id)
				.eq('is_published', true)
				.order('created_at', { ascending: false })
		])

	for (const result of [languageLinks, genreLinks, credits, ratings, reviews]) {
		if (result.error) {
			throw new Error(`Unable to load media details: ${result.error.message}`)
		}
	}

	const languageIds = languageLinks.data.map(row => row.language_id)
	const genreIds = genreLinks.data.map(row => row.genre_id)
	const personIds = [...new Set(credits.data.map(row => row.person_id))]
	const [languages, genres, people] = await Promise.all([
		languageIds.length
			? supabase.from('languages').select('id,name').in('id', languageIds)
			: Promise.resolve({ data: [], error: null }),
		genreIds.length
			? supabase.from('genres').select('id,name').in('id', genreIds)
			: Promise.resolve({ data: [], error: null }),
		personIds.length
			? supabase
					.from('people')
					.select('id,first_name,last_name,location,photo_path')
					.in('id', personIds)
			: Promise.resolve({ data: [], error: null })
	])

	for (const result of [languages, genres, people]) {
		if (result.error) {
			throw new Error(`Unable to load media details: ${result.error.message}`)
		}
	}

	const peopleById = new Map(people.data.map(person => [person.id, person]))

	return {
		...data,
		languages: languages.data.map(language => language.name),
		genres: genres.data.map(genre => genre.name),
		ratings: ratings.data.map(rating => ({
			source: rating.source,
			rating: rating.rating,
			votesCount: rating.votes_count
		})),
		people: credits.data.flatMap(credit => {
			const person = peopleById.get(credit.person_id)
			return person
				? [
						{
							id: person.id,
							name: `${person.first_name} ${person.last_name}`,
							location: person.location,
							photoPath: person.photo_path,
							role: credit.role
						}
					]
				: []
		}),
		reviews: reviews.data.map(review => ({
			id: review.id,
			name: `${review.first_name} ${review.last_name}`,
			location: review.location,
			comment: review.comment,
			rating: review.rating
		}))
	}
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
