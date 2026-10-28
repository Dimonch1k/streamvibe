import { ICategoryItem } from '@/types/sections/category.interface'
import type { IHeroGalleryItem } from '@/types/sections/hero.interface'

import type {
	MediaCollectionGallery,
	MediaCollectionItem,
	MediaCollectionMediaItem,
	MediaType
} from './types'

function getImageUrl(imagePath: string, label: string) {
	const supabaseStorageImagesUrl =
		process.env.NEXT_PUBLIC_SUPABASE_STORAGE_IMAGES_URL

	if (!supabaseStorageImagesUrl) {
		throw new Error('Missing NEXT_PUBLIC_SUPABASE_STORAGE_IMAGES_URL.')
	}

	if (!imagePath) {
		throw new Error(`${label} has no image path.`)
	}

	const encodedPath = imagePath
		.split('/')
		.map(segment => encodeURIComponent(segment))
		.join('/')

	return `${supabaseStorageImagesUrl}/${encodedPath}`
}

function getMediaHref(item: MediaCollectionMediaItem) {
	return `/${item.mediaType === 'movie' ? 'movies' : 'shows'}/${item.slug}`
}

function formatDuration(minutes: number | null) {
	if (!minutes) return undefined

	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60

	if (!hours) return `${remainingMinutes}min`
	if (!remainingMinutes) return `${hours}h`

	return `${hours}h ${remainingMinutes}min`
}

function formatCount(value: number | null) {
	if (!value) return undefined
	if (value < 1_000) return String(value)

	const formattedValue =
		value >= 10_000 ? Math.round(value / 1_000) : value / 1_000

	return `${formattedValue}K`
}

function formatReleasedAt(value: string | null) {
	if (!value) return undefined

	return new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	}).format(new Date(value))
}

function toGalleryItem(
	collection: MediaCollectionItem,
	item: MediaCollectionMediaItem
): ICategoryItem {
	const baseItem = {
		href: getMediaHref(item),
		image: getImageUrl(item.posterPath, item.title)
	}

	switch (collection.type) {
		case 'popular_top_10':
			return {
				...baseItem,
				title: item.title,
				badge: item.badge || 'Top 10 In',
				has_arrow_icon: true
			}
		case 'trending':
			return {
				...baseItem,
				time: formatDuration(item.durationMinutes),
				views:
					item.mediaType !== 'show' ? formatCount(item.viewsCount) : undefined,
				season_number: item.mediaType === 'show' ? item.seasonCount : undefined
			}
		case 'new_releases':
			return {
				...baseItem,
				time:
					item.mediaType === 'show'
						? formatDuration(item.durationMinutes)
						: undefined,
				season_number: item.mediaType === 'show' ? item.seasonCount : undefined,
				released_at:
					item.mediaType !== 'show'
						? formatReleasedAt(item.releasedAt)
						: undefined
			}
		case 'must_watch':
			return {
				...baseItem,
				time: formatDuration(item.durationMinutes),
				rating_number: item.rating ?? undefined,
				votes_count: item.votesCount ?? undefined
			}
		default:
			return baseItem
	}
}

export function toMediaCollectionGalleries(
	collections: MediaCollectionItem[],
	mediaType: MediaType
): MediaCollectionGallery[] {
	return collections
		.filter(
			collection =>
				collection.mediaType === mediaType &&
				collection.type !== 'hero' &&
				collection.items.length > 0
		)
		.map(collection => ({
			id: collection.id,
			title: collection.title,
			itemType: collection.type === 'popular_top_10' ? 'default' : 'compact',
			items: collection.items.map(item => toGalleryItem(collection, item))
		}))
}

export function toHeroGalleryItems(
	collections: MediaCollectionItem[]
): IHeroGalleryItem[] {
	const heroCollection = collections.find(
		collection => collection.type === 'hero'
	)

	if (!heroCollection) return []

	return heroCollection.items.map(item => ({
		href: getMediaHref(item),
		image: getImageUrl(item.backdropPath || item.posterPath, item.title),
		title: item.title,
		description: item.description || '',
		videoUrl: item.videoUrl || item.trailerUrl
	}))
}
