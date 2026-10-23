'use client'

import { HeroGallery } from '@/components/ui/hero-gallery'

import { MediaItem } from '@/lib/media/types'
import { toMediaItems } from '@/lib/media/utils'

export interface MovieProps {
	movie: MediaItem
}

export function Movie({ movie }: MovieProps) {
	const heroData = toMediaItems(movie)

	console.log(heroData)
	return (
		<>
			<HeroGallery listData={heroData} />
		</>
	)
}
