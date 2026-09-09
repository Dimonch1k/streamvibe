'use client'

import { HeroGallery } from '@/components/ui/hero-gallery'

import { heroGalleryListData } from '@/data/movies-and-shows.data'

export function Movie() {
	return (
		<>
			<HeroGallery listData={heroGalleryListData} />
		</>
	)
}
