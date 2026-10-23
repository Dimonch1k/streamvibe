'use client'

import type { IHeroGalleryItem } from '@/types/sections/hero.interface'

import { cn } from '@/lib/utils'

import { HeroGalleryList } from '../shared/hero/hero-gallery-list'
import { HeroGalleryListItem } from '../shared/hero/hero-gallery-list-item'

export interface HeroGalleryProps {
	listData: IHeroGalleryItem[]
	className?: string
}

export function HeroGallery({ listData, className }: HeroGalleryProps) {
	return (
		<div className={cn('w-full flex flex-col gap-10 2xl:gap-12.5', className)}>
			{listData.length === 1 ? (
				<HeroGalleryListItem
					key={listData[0].videoUrl ?? listData[0].title}
					item={listData[0]}
					totalItems={listData.length}
					activeIndex={0}
				/>
			) : (
				<HeroGalleryList list={listData} />
			)}
		</div>
	)
}
