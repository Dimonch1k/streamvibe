'use client'

import type { IPricing, TypePricing } from '@/types/sections/pricing.interface'

import { cn } from '@/lib/utils/cn'

import { PricingListItemFeatures } from './PricingListItemFeatures'

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
				'flex-1 flex flex-col px-5 lg:px-6 2xl:px-7.5 pt-7.5 lg:pt-10 2xl:pt-12.5 pb-5 lg:pb-6 2xl:pb-7.5 gap-7.5 lg:gap-12.5',
				'bg-white-99 rounded-xl border border-white-95 shadow-sm',
				className
			)}
		>
			{/* Plan title */}
			<div
				className={cn(
					'px-5.5 py-2 lg:py-2.5 2xl:py-3',
					'bg-orange-97 border border-orange-90 text-center font-medium text-grey-15 leading-[169%]',
					'rounded-sm 2xl:rounded-md text-base lg:text-lg 2xl:text-[22px]'
				)}
			>
				{item.title}
			</div>

			{/* Price */}
			<div className='flex justify-center items-end gap-1'>
				<div className='text-[50px] lg:text-[60px] 2xl:text-[80px] font-semibold text-grey-15 leading-[73%]'>
					${price}
				</div>
				<div className='text-sm lg:text-base 2xl:text-xl font-medium text-grey-30 leading-[73%]'>
					/{pricingType}
				</div>
			</div>

			<PricingListItemFeatures features={item.features} />
		</li>
	)
}
