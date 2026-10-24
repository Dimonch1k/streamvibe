'use client'

import { MovieCards } from '@/components/sections/movie/MovieCards'
import { HeroGallery } from '@/components/ui/hero-gallery'

import type { MediaDetailItem } from '@/lib/media/types'
import { toMediaItems } from '@/lib/media/utils'

export interface ShowProps {
	show: MediaDetailItem
}

export function Show({ show }: ShowProps) {
	const heroData = toMediaItems(show)

	return (
		<>
			<HeroGallery listData={heroData} />
			<MovieCards media={show} />
		</>
	)
}
