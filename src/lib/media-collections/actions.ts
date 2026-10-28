'use server'

import { createClient } from '@supabase/supabase-js'

import type { Database } from '@/lib/supabase/types'

import type { MediaCollectionItem } from './types'

export async function getMediaCollections(): Promise<MediaCollectionItem[]> {
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

	const { data: collections, error: collectionsError } = await supabase
		.from('media_collections')
		.select('id,type,media_type,title,slug,sort_order')
		.eq('is_active', true)
		.neq('type', 'genres')
		.order('sort_order')

	if (collectionsError) {
		throw new Error(
			`Unable to load media collections: ${collectionsError.message}`
		)
	}

	if (collections.length === 0) return []

	const collectionIds = collections.map(collection => collection.id)
	const { data: collectionItems, error: collectionItemsError } = await supabase
		.from('media_collection_items')
		.select('collection_id,media_id,sort_order,badge')
		.in('collection_id', collectionIds)
		.order('sort_order')

	if (collectionItemsError) {
		throw new Error(
			`Unable to load collection items: ${collectionItemsError.message}`
		)
	}

	const mediaIds = [...new Set(collectionItems.map(item => item.media_id))]

	if (mediaIds.length === 0) {
		return collections.map(collection => ({
			id: collection.id,
			type: collection.type,
			mediaType: collection.media_type,
			title: collection.title,
			slug: collection.slug,
			sortOrder: collection.sort_order,
			items: []
		}))
	}

	const [mediaResult, ratingsResult, seasonsResult] = await Promise.all([
		supabase
			.from('media')
			.select(
				'id,slug,title,description,trailer_url,video_url,poster_path,backdrop_path,duration_minutes,views_count,released_at,type'
			)
			.in('id', mediaIds)
			.eq('is_published', true),
		supabase
			.from('media_ratings')
			.select('media_id,rating,votes_count')
			.in('media_id', mediaIds)
			.eq('source', 'streamvibe'),
		supabase.from('seasons').select('show_id').in('show_id', mediaIds)
	])

	if (mediaResult.error) {
		throw new Error(`Unable to load media: ${mediaResult.error.message}`)
	}

	if (ratingsResult.error) {
		throw new Error(
			`Unable to load media ratings: ${ratingsResult.error.message}`
		)
	}

	if (seasonsResult.error) {
		throw new Error(`Unable to load seasons: ${seasonsResult.error.message}`)
	}

	const mediaById = new Map(mediaResult.data.map(media => [media.id, media]))
	const votesByMediaId = new Map(
		ratingsResult.data.map(rating => [rating.media_id, rating.votes_count])
	)
	const ratingsByMediaId = new Map(
		ratingsResult.data.map(rating => [rating.media_id, rating.rating])
	)
	const seasonCountByShowId = new Map<string, number>()

	seasonsResult.data.forEach(season => {
		seasonCountByShowId.set(
			season.show_id,
			(seasonCountByShowId.get(season.show_id) || 0) + 1
		)
	})

	const itemsByCollectionId = new Map<string, MediaCollectionItem['items']>()

	collectionItems.forEach(collectionItem => {
		const media = mediaById.get(collectionItem.media_id)
		if (!media) return

		const items = itemsByCollectionId.get(collectionItem.collection_id) || []
		items.push({
			id: media.id,
			slug: media.slug,
			title: media.title,
			description: media.description,
			trailerUrl: media.trailer_url,
			videoUrl: media.video_url,
			posterPath: media.poster_path,
			backdropPath: media.backdrop_path,
			durationMinutes: media.duration_minutes,
			viewsCount: media.views_count,
			releasedAt: media.released_at,
			mediaType: media.type,
			badge: collectionItem.badge,
			rating: ratingsByMediaId.get(media.id) ?? null,
			votesCount: votesByMediaId.get(media.id) ?? null,
			seasonCount: seasonCountByShowId.get(media.id) || 0
		})
		itemsByCollectionId.set(collectionItem.collection_id, items)
	})

	return collections.map(collection => ({
		id: collection.id,
		type: collection.type,
		mediaType: collection.media_type,
		title: collection.title,
		slug: collection.slug,
		sortOrder: collection.sort_order,
		items: itemsByCollectionId.get(collection.id) || []
	}))
}
