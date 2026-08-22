'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon } from '@/components/ui/icons'

import type { ICategoryItem } from '@/types/sections/category.interface'

import { cn } from '@/lib/utils'

export interface CategoryListItemProps {
	item: ICategoryItem
	className?: string
}

export function CategoryListItem({ item, className }: CategoryListItemProps) {
	return (
		<li className='w-full'>
			<Link
				href={item.href}
				className={cn(
					'flex-1 bg-black-10 flex flex-col min-w-45',
					'p-5 lg:p-6 2xl:p-7.5',
					'rounded-[10px] 2xl:rounded-xl border border-black-15',
					className
				)}
			>
				<Image
					src={item.image}
					alt={item.title}
					width={235}
					height={252}
					className='w-full shrink-0!'
				/>

				<div className='w-full flex justify-between'>
					<h5
						className={cn(
							'text-white font-semibold leading-[150%]',
							'text-sm lg:text-base 2xl:text-lg'
						)}
					>
						{item.title}
					</h5>

					<ArrowRightIcon
						color='white'
						className='size-5 lg:size-6 2xl:size-7.5'
					/>
				</div>
			</Link>
		</li>
	)
}
