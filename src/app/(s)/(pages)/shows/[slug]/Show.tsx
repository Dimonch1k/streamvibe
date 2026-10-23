'use client'

import { HeroGallery } from '@/components/ui/hero-gallery'

import type { MediaItem } from '@/lib/media/types'
import { toMediaItems } from '@/lib/media/utils'

export interface ShowProps {
	show: MediaItem
}

export function Show({ show }: ShowProps) {
	const heroData = toMediaItems(show)

	return (
		<>
			<HeroGallery listData={heroData} />
		</>
	)
}
