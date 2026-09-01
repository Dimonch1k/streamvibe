import { useState } from 'react'

import type { IHeroGalleryItem } from '@/types/sections/hero.interface'

import { cn } from '@/lib/utils'

import { HeroGalleryListItem } from './hero-gallery-list-item'

export interface HeroGalleryListProps {
	list: IHeroGalleryItem[]
	className?: string
}

export function HeroGalleryList({ list, className }: HeroGalleryListProps) {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex(prev => (prev === 0 ? list.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setActiveIndex(prev => (prev === list.length - 1 ? 0 : prev + 1))
	}

	const handleDotClick = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<ul className={cn('w-full flex flex-col gap-10', className)}>
			<HeroGalleryListItem
				key={activeIndex}
				item={list[activeIndex]}
				activeIndex={activeIndex}
				totalItems={list.length}
				onPrev={handlePrev}
				onNext={handleNext}
				onDotClick={handleDotClick}
			/>
		</ul>
	)
}
