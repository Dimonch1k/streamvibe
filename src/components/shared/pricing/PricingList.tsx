'use client'

import type { IPricing, TypePricing } from '@/types/sections/pricing.interface'

import { cn } from '@/lib/utils/cn'

import { PricingListItem } from './PricingListItem'

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
				'w-full grid lg:grid-cols-2 gap-7.5 2xl:gap-7.5',
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
