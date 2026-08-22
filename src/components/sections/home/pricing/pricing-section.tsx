'use client'

import { useState } from 'react'

import { PricingSelector } from '@/components/sections/home/pricing/pricing-selector'
import { Section } from '@/components/ui/section'

import { pricingListData } from '@/data/pricing.data'

import type { TypePricing } from '@/types/sections/pricing.interface'

import { PricingList } from './pricing-list'

export function PricingSection() {
	const [pricingType, setPricingType] = useState<TypePricing>('month')

	return (
		<Section
			id='pricing'
			title="Choose the plan that's right for you"
			description='Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
			headerChildren={
				<PricingSelector
					pricingType={pricingType}
					setPricingType={setPricingType}
				/>
			}
		>
			<PricingList
				list={pricingListData}
				pricingType={pricingType}
			/>
		</Section>
	)
}
