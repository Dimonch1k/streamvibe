import type { Metadata } from 'next'

import { getGenres } from '@/lib/genres/actions'
import { toGenreCategoryItems } from '@/lib/genres/utils'
import { getMediaCollections } from '@/lib/media-collections/actions'
import {
	toHeroGalleryItems,
	toMediaCollectionGalleries
} from '@/lib/media-collections/utils'

import { MoviesAndShows } from './MoviesAndShows'

export const metadata: Metadata = {
	title: 'Movies And Shows'
}

export default async function MoviesAndShowsPage() {
	const [genres, collections] = await Promise.all([
		getGenres(),
		getMediaCollections()
	])

	return (
		<MoviesAndShows
			heroItems={toHeroGalleryItems(collections)}
			movieGenres={toGenreCategoryItems(genres, 'movie')}
			showGenres={toGenreCategoryItems(genres, 'show')}
			movieGalleries={toMediaCollectionGalleries(collections, 'movie')}
			showGalleries={toMediaCollectionGalleries(collections, 'show')}
		/>
	)
}
