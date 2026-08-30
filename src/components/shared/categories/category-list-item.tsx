'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { ArrowRightIcon } from '@/components/ui/icons'
import { ClockIcon } from '@/components/ui/icons/clock-icon'
import { EyeIcon } from '@/components/ui/icons/eye-icon'
import { StackIcon } from '@/components/ui/icons/stack-icon'
import { StarIcon } from '@/components/ui/icons/star-icon'

import type { ICategoryItem } from '@/types/sections/category.interface'

import { cn } from '@/lib/utils'

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
					src={item.image}
					alt={item.title || item.image}
					width={235}
					height={252}
					className='w-full h-full'
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

					{item.hasArrowIcon && (
						<ArrowRightIcon
							color='white'
							className='size-5 lg:size-6 2xl:size-7.5'
						/>
					)}

					{item.time && (
						<Badge>
							<ClockIcon color='#999' />
							{item.time}
						</Badge>
					)}

					{item.views && (
						<Badge>
							<EyeIcon color='#999' />
							{item.views}
						</Badge>
					)}

					{item.seasonNumber && (
						<Badge>
							<StackIcon color='#999' />
							{item.seasonNumber} Season
						</Badge>
					)}

					{item.ratingNumber && (
						<Badge>
							<ul className='flex items-center gap-px leading-[150%]'>
								{[...Array(5)].map((_, index) => (
									<StarIcon
										key={index}
										color='#E50000'
										className='size-3.5 2xl:size-4.5'
									/>
								))}
							</ul>
							{item.ratingNumber}K
						</Badge>
					)}

					{item.releasedAt && (
						<Badge>
							Released at{' '}
							<span className='text-[#BFBFBF]'>{item.releasedAt}</span>
						</Badge>
					)}
				</div>
			</Link>
		</li>
	)
}
