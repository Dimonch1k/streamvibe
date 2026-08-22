'use client'

import { Button } from '@/components/ui/buttons/button'

import type { IPricing, TypePricing } from '@/types/sections/pricing.interface'

import { cn } from '@/lib/utils'

export interface PricingListItemProps {
	item: IPricing
	pricingType: TypePricing
	className?: string
}

export function PricingListItem({
	item,
	pricingType,
	className
}: PricingListItemProps) {
	const price = pricingType === 'month' ? item.pricePerMonth : item.pricePerYear

	return (
		<li
			className={cn(
				'flex-1 w-full flex flex-col',
				'p-6 lg:p-10 2xl:p-12.5 gap-7.5 lg:gap-10 2xl:gap-12.5',
				'bg-black-10 rounded-[10px] 2xl:rounded-xl border border-black-15',
				className
			)}
		>
			<div className='flex flex-col gap-2.5 lg:gap-3 2xl:gap-4'>
				{/* Title */}
				<h5 className='text-white text-lg lg:text-xl 2xl:text-2xl font-bold'>
					{item.title}
				</h5>

				{/* Description */}
				<p className='text-sm lg:text-base 2xl:text-lg leading-[150%] text-grey-60'>
					{item.description}
				</p>
			</div>

			{/* Price */}
			<div className='flex items-end gap-1 mt-auto'>
				<span className='text-2xl lg:text-3xl 2xl:text-[40px] font-semibold text-white leading-[73%]'>
					${price}
				</span>
				<span className='text-sm lg:text-base 2xl:text-lg leading-[73%] text-grey-60'>
					/{pricingType}
				</span>
			</div>

			<div className='w-full flex flex-wrap lg:flex-row gap-3 2xl:gap-5'>
				<Button
					variant='secondary'
					className='lg:flex-1'
				>
					Start Free Trial
				</Button>
				<Button
					variant='primary'
					className='lg:flex-1'
				>
					Choose Plan
				</Button>
			</div>
		</li>
	)
}
