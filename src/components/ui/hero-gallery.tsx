'use client'

import type { IHeroGalleryItem } from '@/types/sections/hero.interface'

import { cn } from '@/lib/utils'

import { HeroGalleryList } from '../shared/hero/hero-gallery-list'

export interface HeroGalleryProps {
	listData: IHeroGalleryItem[]
	className?: string
}

export function HeroGallery({ listData, className }: HeroGalleryProps) {
	return (
		<div className={cn('w-full flex flex-col gap-10 2xl:gap-12.5', className)}>
			<HeroGalleryList list={listData} />
		</div>
	)
}
