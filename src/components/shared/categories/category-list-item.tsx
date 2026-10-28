'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui'
import {
	ArrowRightIcon,
	ClockIcon,
	EyeIcon,
	StackIcon
} from '@/components/ui/icons'

import type { ICategoryItem } from '@/types/sections/category.interface'

import { cn } from '@/lib/utils'

import { CategoryListItemRating } from './category-list-item-rating'

export interface CategoryListItemProps {
	item: ICategoryItem
	className?: string
	isCompact?: boolean
}

export function CategoryListItem({
	item,
	className,
	isCompact = false
}: CategoryListItemProps) {
	return (
		<li className='w-full flex flex-col'>
			<Link
				href={item.href}
				className={cn(
					'flex-1 bg-black-10 flex flex-col min-w-45 lg:min-w-55 2xl:min-w-69',
					isCompact
						? 'gap-3 lg:gap-4 2xl:gap-5 p-3 lg:p-4 2xl:p-5'
						: 'p-5 lg:p-6 2xl:p-7.5',
					'rounded-[10px] 2xl:rounded-xl border border-black-15',
					className
				)}
			>
				<Image
					unoptimized
					src={item.image}
					alt={item.title || item.image}
					width={235}
					height={252}
					className='w-full h-full object-cover'
					draggable={false}
				/>

				<div className='flex justify-between items-center gap-1'>
					{item.title && item.badge ? (
						<div className='flex-1 flex flex-col gap-1'>
							<span className='w-fit h-fit text-xs lg:text-xs 2xl:text-base text-white bg-red-45 p-2 2xl:p-2.5 rounded font-semibold leading-[50%]'>
								{item.badge}
							</span>

							<h5
								className={cn(
									'text-white font-semibold leading-[150%]',
									'text-sm lg:text-base 2xl:text-lg'
								)}
							>
								{item.title}
							</h5>
						</div>
					) : item.title ? (
						<h5
							className={cn(
								'text-white font-semibold leading-[150%]',
								'text-sm lg:text-base 2xl:text-lg'
							)}
						>
							{item.title}
						</h5>
					) : null}

					{item.has_arrow_icon && (
						<ArrowRightIcon
							color='white'
							className='size-5 lg:size-6 2xl:size-7.5'
						/>
					)}

					{item.time && (
						<Badge className='gap-0.5'>
							<ClockIcon color='#999' />
							{item.time}
						</Badge>
					)}

					{item.views && (
						<Badge className='gap-1'>
							<EyeIcon color='#999' />
							{item.views}
						</Badge>
					)}

					{item.season_number && (
						<Badge className='gap-1'>
							<StackIcon color='#999' />
							{item.season_number} Season
						</Badge>
					)}

					{item.rating_number && item.votes_count && (
						<CategoryListItemRating
							rating={item.rating_number}
							votesCount={item.votes_count}
						/>
					)}

					{item.released_at && (
						<Badge className='w-full justify-center gap-1 px-3.5 2xl:px-2.5 py-1.5'>
							Released at
							<span className='text-[#BFBFBF]'>{item.released_at}</span>
						</Badge>
					)}
				</div>
			</Link>
		</li>
	)
}
