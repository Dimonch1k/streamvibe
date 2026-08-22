'use client'

import { useState } from 'react'

import { Section } from '@/components/ui/section'

import { pricingListData } from '@/data/pricing.data'

import type { TypePricing } from '@/types/sections/pricing.interface'

import { PricingComparisonTable } from './pricing-comparison-table'
import { PricingList } from './pricing-list'
import { PricingSelector } from './pricing-selector'

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

			<PricingComparisonTable />
		</Section>
	)
}
