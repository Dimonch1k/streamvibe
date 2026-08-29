'use client'

import { ICategoryItem } from '@/types/sections/category.interface'

import { cn } from '@/lib/utils'

import { CategoryList } from '../shared/categories/category-list'
import { Switcher } from './switcher'

export interface GalleryProps {
	title: string
	listData: ICategoryItem[]
	className?: string
}

export function Gallery({ title, listData, className }: GalleryProps) {
	return (
		<div className={cn('w-full flex flex-col gap-10 2xl:gap-12.5', className)}>
			<div className='w-full flex items-center justify-between gap-25'>
				<h2 className='text-2xl lg:text-3xl 2xl:text-[38px] font-bold leading-[150%] text-white'>
					{title}
				</h2>

				<Switcher />
			</div>

			<CategoryList list={listData} />
		</div>
	)
}
