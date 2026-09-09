import { ROUTES } from '@/constants/routes.constants'

import type { ICategoryItem } from '@/types/sections/category.interface'

import type { GenreItem, GenreMediaType } from './types'

const fallbackImagePath = (slug: string) => `/categories/category-${slug}.png`

function getImageUrl(imagePath: string | null, slug: string) {
	if (!imagePath) return fallbackImagePath(slug)

	const supabaseStorageImagesUrl = process.env.SUPABASE_STORAGE_IMAGES_URL

	if (!supabaseStorageImagesUrl) return fallbackImagePath(slug)

	const encodedPath = imagePath
		.split('/')
		.map(segment => encodeURIComponent(segment))
		.join('/')

	return `${supabaseStorageImagesUrl}/${encodedPath}`
}

export function toGenreCategoryItems(
	genres: GenreItem[],
	mediaType: GenreMediaType
): ICategoryItem[] {
	return genres.map(genre => ({
		href:
			mediaType === 'movie'
				? ROUTES.MOVIES_FILTER(genre.slug)
				: ROUTES.SHOWS_FILTER(genre.slug),
		image: getImageUrl(genre.imagePath, genre.slug),
		title: genre.name,
		hasArrowIcon: true
	}))
}
