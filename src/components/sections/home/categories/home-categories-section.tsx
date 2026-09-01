'use client'

import { useState } from 'react'

import { CategoryList } from '@/components/shared/categories/category-list'
import { Section } from '@/components/ui/section'
import { Switcher } from '@/components/ui/switcher'

import { categoriesListData } from '@/data/home.data'

export function HomeCategoriesSection() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex(prev =>
			prev === 0 ? categoriesListData.length - 1 : prev - 1
		)
	}

	const handleNext = () => {
		setActiveIndex(prev =>
			prev === categoriesListData.length - 1 ? 0 : prev + 1
		)
	}

	const handleDotClick = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<Section
			id='categories'
			title='Explore our wide variety of categories'
			description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
			headerChildren={
				<Switcher
					className='hidden lg:inline-flex'
					activeIndex={activeIndex}
					totalItems={categoriesListData.length}
					onPrev={handlePrev}
					onNext={handleNext}
					onDotClick={handleDotClick}
				/>
			}
		>
			<CategoryList
				list={categoriesListData}
				onPrev={handlePrev}
				onNext={handleNext}
			/>
		</Section>
	)
}
