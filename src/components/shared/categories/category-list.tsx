import type { ICategoryItem } from '@/types/sections/category.interface'

import { cn } from '@/lib/utils'

import { CategoryListItem } from './category-list-item'

export interface CategoryListProps {
	list: ICategoryItem[]
	itemType?: 'default' | 'compact'
	className?: string
}

export function CategoryList({
	list,
	itemType = 'default',
	className
}: CategoryListProps) {
	return (
		<ul
			className={cn(
				'w-full flex gap-5 2xl:gap-7.5 overflow-x-scroll pb-3',
				className
			)}
		>
			{list.map((item, index) => (
				<CategoryListItem
					key={index}
					item={item}
					isCompact={itemType === 'compact'}
				/>
			))}
		</ul>
	)
}
