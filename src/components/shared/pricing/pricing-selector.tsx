'use client'

import { Button } from '@/components/ui/button'
import { SelectorContainer } from '@/components/ui/selector-container'

import { pricingSelectorsData } from '@/data/pricing.data'

import type { TypePricing } from '@/types/sections/pricing.interface'

export interface PricingSelectorProps {
	pricingType: TypePricing
	setPricingType: (type: TypePricing) => void
	className?: string
}

export function PricingSelector({
	pricingType,
	setPricingType,
	className
}: PricingSelectorProps) {
	return (
		<SelectorContainer className={className}>
			{pricingSelectorsData.map((item, index) => (
				<Button
					key={index}
					variant={item.pricingType === pricingType ? 'default' : 'none'}
					onClick={() => setPricingType(item.pricingType)}
					className='px-6 2xl:px-7.5 py-3 2xl:py-3.5 text-sm 2xl:text-lg rounded-md transition-none'
				>
					{item.title}
				</Button>
			))}
		</SelectorContainer>
	)
}
