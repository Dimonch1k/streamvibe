import { MoviesSection } from '@/components/sections/movies-and-shows/movies-section'
import { ShowsSection } from '@/components/sections/movies-and-shows/shows-section'
import { HeroGallery } from '@/components/ui/hero-gallery'

import { heroGalleryListData } from '@/data/movies-and-shows.data'

import { getGenres } from '@/lib/genres/actions'
import { toGenreCategoryItems } from '@/lib/genres/utils'

export async function MoviesAndShows() {
	const genres = await getGenres()
	const movieGenreItems = toGenreCategoryItems(genres, 'movie')
	const showGenreItems = toGenreCategoryItems(genres, 'show')

	return (
		<>
			<HeroGallery listData={heroGalleryListData} />
			<MoviesSection genres={movieGenreItems} />
			<ShowsSection genres={showGenreItems} />
		</>
	)
}
