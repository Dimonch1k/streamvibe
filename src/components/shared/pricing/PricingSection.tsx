'use client'

import { useState } from 'react'

import { PricingSelector } from '@/components/shared/pricing/PricingSelector'
import { Section } from '@/components/ui/section'

// import { pricingListData } from '@/data/pricing.data'

import type { TypePricing } from '@/types/sections/pricing.interface'

export interface PricingSectionProps {
	hasTitle?: boolean
	hasDescription?: boolean
	headerClassName?: string
}

export function PricingSection({
	hasTitle = true,
	hasDescription = true,
	headerClassName
}: PricingSectionProps) {
	const [pricingType, setPricingType] = useState<TypePricing>('month')

	return (
		<Section
			id='pricing'
			title={hasTitle ? 'Our Pricing' : undefined}
			titleClassName={
				hasTitle ? 'text-[28px] lg:text-[38px] 2xl:text-5xl' : undefined
			}
			description={
				hasDescription
					? 'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
					: undefined
			}
			headerChildren={
				<PricingSelector
					pricingType={pricingType}
					setPricingType={setPricingType}
				/>
			}
			headerClassName={headerClassName}
			childrenClassName='w-full bg-white rounded-xl p-5 lg:p-12.5 2xl:p-20'
		>
			{/* <PricingList
				list={pricingListData}
				pricingType={pricingType}
			/> */}
		</Section>
	)
}
