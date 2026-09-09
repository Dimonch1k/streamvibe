'use client'

import { HeroGallery } from '@/components/ui/hero-gallery'

import { heroGalleryListData } from '@/data/movies-and-shows.data'

export function Show() {
	return (
		<>
			<HeroGallery listData={heroGalleryListData} />
		</>
	)
}
