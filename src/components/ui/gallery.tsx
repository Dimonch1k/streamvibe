'use client'

import { useState } from 'react'

import type { ICategoryItem } from '@/types/sections/category.interface'

import { cn } from '@/lib/utils'

import { CategoryList } from '../shared/categories/category-list'
import { Switcher } from './switcher'

export interface GalleryProps {
	title: string
	listData: ICategoryItem[]
	className?: string
	itemType?: 'default' | 'compact'
}

export function Gallery({
	title,
	listData,
	className,
	itemType = 'default'
}: GalleryProps) {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex(prev => (prev === 0 ? listData.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setActiveIndex(prev => (prev === listData.length - 1 ? 0 : prev + 1))
	}

	const handleDotClick = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<div className={cn('w-full flex flex-col gap-10 2xl:gap-12.5', className)}>
			<div className='w-full flex items-center justify-between gap-25'>
				<h2 className='text-2xl lg:text-3xl 2xl:text-[38px] font-bold leading-[150%] text-white'>
					{title}
				</h2>

				<Switcher
					className='hidden lg:inline-flex'
					activeIndex={activeIndex}
					totalItems={listData.length}
					onPrev={handlePrev}
					onNext={handleNext}
					onDotClick={handleDotClick}
				/>
			</div>

			<CategoryList
				list={listData}
				itemType={itemType}
				onPrev={handlePrev}
				onNext={handleNext}
			/>
		</div>
	)
}
