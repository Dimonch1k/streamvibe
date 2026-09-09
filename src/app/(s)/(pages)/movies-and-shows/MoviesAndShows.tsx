import { MoviesSection } from '@/components/sections/movies-and-shows/movies-section'
import { ShowsSection } from '@/components/sections/movies-and-shows/shows-section'
import { HeroGallery } from '@/components/ui/hero-gallery'

import type { ICategoryItem } from '@/types/sections/category.interface'
import type { IHeroGalleryItem } from '@/types/sections/hero.interface'

import type { MediaCollectionGallery } from '@/lib/media-collections/types'

export interface MoviesAndShowsProps {
	heroItems: IHeroGalleryItem[]
	movieGenres: ICategoryItem[]
	showGenres: ICategoryItem[]
	movieGalleries: MediaCollectionGallery[]
	showGalleries: MediaCollectionGallery[]
}

export function MoviesAndShows({
	heroItems,
	movieGenres,
	showGenres,
	movieGalleries,
	showGalleries
}: MoviesAndShowsProps) {
	return (
		<>
			{heroItems.length > 0 && <HeroGallery listData={heroItems} />}
			<MoviesSection
				genres={movieGenres}
				galleries={movieGalleries}
			/>
			<ShowsSection
				genres={showGenres}
				galleries={showGalleries}
			/>
		</>
	)
}
