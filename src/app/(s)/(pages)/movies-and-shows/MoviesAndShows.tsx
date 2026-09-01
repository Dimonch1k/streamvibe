import { MoviesSection } from '@/components/sections/movies-and-shows/movies-section'
import { ShowsSection } from '@/components/sections/movies-and-shows/shows-section'
import { HeroGallery } from '@/components/ui/hero-gallery'

import { heroGalleryListData } from '@/data/movies-and-shows.data'

export function MoviesAndShows() {
	return (
		<>
			<HeroGallery listData={heroGalleryListData} />
			<MoviesSection />
			<ShowsSection />
		</>
	)
}
