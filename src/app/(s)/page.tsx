import type { Metadata } from 'next'

import { getGenres } from '@/lib/genres/actions'
import { toGenreCategoryItems } from '@/lib/genres/utils'

import { Home } from './Home'

export const metadata: Metadata = {
	title: 'Home'
}

export default async function HomePage() {
	const genres = await getGenres()
	const genreItems = toGenreCategoryItems(genres, 'movie')

	return <Home genres={genreItems} />
}
