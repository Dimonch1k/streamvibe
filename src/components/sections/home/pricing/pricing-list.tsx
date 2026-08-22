'use client'

import type { IPricing, TypePricing } from '@/types/sections/pricing.interface'

import { cn } from '@/lib/utils'

import { PricingListItem } from './pricing-list-item'

export interface PricingListProps {
	list: IPricing[]
	pricingType: TypePricing
	className?: string
}

export function PricingList({
	list,
	pricingType,
	className
}: PricingListProps) {
	return (
		<ul
			className={cn(
				'w-full grid grid-cols-1 lg:grid-cols-3 gap-5 2xl:gap-7.5',
				className
			)}
		>
			{list.map((pricing, index) => (
				<PricingListItem
					key={index}
					item={pricing}
					pricingType={pricingType}
				/>
			))}
		</ul>
	)
}
