'use client'

import { MovieCards } from '@/components/sections/movie/MovieCards'
import { HeroGallery } from '@/components/ui/hero-gallery'

import type { MediaDetailItem } from '@/lib/media/types'
import { toMediaItems } from '@/lib/media/utils'

export interface MovieProps {
	movie: MediaDetailItem
}

export function Movie({ movie }: MovieProps) {
	const heroData = toMediaItems(movie)

	return (
		<>
			<HeroGallery listData={heroData} />
			<MovieCards media={movie} />
		</>
	)
}
