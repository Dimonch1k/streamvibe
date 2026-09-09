import {
	heroGalleryListData,
	moviesMustWatchListData,
	moviesPopularTopListData,
	moviesReleasesListData,
	moviesTrendingListData,
	showsMustWatchListData,
	showsPopularTopListData,
	showsReleasesListData,
	showsTrendingListData
} from '@/data/movies-and-shows.data'

import type { ICategoryItem } from '@/types/sections/category.interface'
import type { IHeroGalleryItem } from '@/types/sections/hero.interface'

export interface IMediaItem extends ICategoryItem {
	id: string
	description?: string
	type: 'movie' | 'show'
}

/**
 * Converts item title or image path into a URL-friendly slug ID
 */
const generateSlugId = (
	item: ICategoryItem | IHeroGalleryItem,
	fallbackPrefix: string,
	index: number
): string => {
	if (item.title) {
		return item.title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)+/g, '')
	}
	if (item.image) {
		const fileName = item.image.split('/').pop()?.split('.')[0] || ''
		return fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
	}
	return `${fallbackPrefix}-${index}`
}

/**
 * Aggregates all movie static data sources into normalized IMediaItem objects
 */
export const getAllMovies = (): IMediaItem[] => {
	const collections: Array<{ list: (ICategoryItem | IHeroGalleryItem)[] }> = [
		{ list: heroGalleryListData },
		{ list: moviesPopularTopListData },
		{ list: moviesTrendingListData },
		{ list: moviesReleasesListData },
		{ list: moviesMustWatchListData }
	]

	const moviesMap = new Map<string, IMediaItem>()

	collections.forEach(({ list }) => {
		list.forEach((item, index) => {
			const id = generateSlugId(item, 'movie', index)
			const description = 'description' in item ? item.description : undefined

			if (!moviesMap.has(id)) {
				moviesMap.set(id, {
					...item,
					id,
					description,
					type: 'movie'
				})
			}
		})
	})

	return Array.from(moviesMap.values())
}

/**
 * Aggregates all show static data sources into normalized IMediaItem objects
 */
export const getAllShows = (): IMediaItem[] => {
	const collections: Array<{ list: ICategoryItem[] }> = [
		{ list: showsPopularTopListData },
		{ list: showsTrendingListData },
		{ list: showsReleasesListData },
		{ list: showsMustWatchListData }
	]

	const showsMap = new Map<string, IMediaItem>()

	collections.forEach(({ list }) => {
		list.forEach((item, index) => {
			const id = generateSlugId(item, 'show', index)

			if (!showsMap.has(id)) {
				showsMap.set(id, {
					...item,
					id,
					type: 'show'
				})
			}
		})
	})

	return Array.from(showsMap.values())
}

/**
 * Fetches movie by ID slug
 */
export const getMovie = async (id: string): Promise<IMediaItem | null> => {
	const movies = getAllMovies()
	return movies.find(movie => movie.id === id) || null
}

/**
 * Fetches show by ID slug
 */
export const getShow = async (id: string): Promise<IMediaItem | null> => {
	const shows = getAllShows()
	return shows.find(show => show.id === id) || null
}
