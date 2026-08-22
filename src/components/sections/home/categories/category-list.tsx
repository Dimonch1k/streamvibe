'use client'

import type { ICategoryItem } from '@/types/sections/category.interface'

import { cn } from '@/lib/utils'

import { CategoryListItem } from './category-list-item'

export interface CategoryListProps {
	list: ICategoryItem[]
	className?: string
}

export function CategoryList({ list, className }: CategoryListProps) {
	return (
		<ul
			className={cn(
				'w-full flex gap-5 2xl:gap-7.5 overflow-x-scroll pb-3',
				className
			)}
		>
			{list.map((achievement, index) => (
				<CategoryListItem
					key={index}
					item={achievement}
				/>
			))}
		</ul>
	)
}
