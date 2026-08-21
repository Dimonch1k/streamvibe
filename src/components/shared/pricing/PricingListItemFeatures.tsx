'use client'

import { Check, X } from 'lucide-react'

import type { IPricing } from '@/types/sections/pricing.interface'

import { cn } from '@/lib/utils/cn'

export interface PricingListItemFeaturesProps {
	features: IPricing['features']
	className?: string
}

export function PricingListItemFeatures({
	features,
	className
}: PricingListItemFeaturesProps) {
	return (
		<div className={cn('h-full w-full flex flex-col', className)}>
			{/* Features */}
			<div
				className={cn(
					'h-full flex flex-col gap-5 lg:gap-6 2xl:gap-7.5 p-5 lg:p-7.5 2xl:p-10',
					'bg-white border border-white-95 rounded-t-[10px] lg:rounded-t-[14px]'
				)}
			>
				<h5 className='text-center text-grey-15 text-lg 2xl:text-xl font-medium leading-[150%]'>
					Available Features
				</h5>

				<ul className='flex flex-col gap-5 lg:px-7.5'>
					{features.map((feature, i) => (
						<li
							key={i}
							className={cn(
								'flex items-center gap-2 2xl:gap-3 p-3 2xl:p-3.5 border border-white-95 rounded-md 2xl:rounded-lg'
							)}
						>
							<div
								className={cn(
									'grid place-content-center',
									'p-1 2xl:p-1.5 rounded-sm 2xl:rounded-md text-grey-15',
									feature.isAvailable
										? 'bg-orange-95'
										: 'bg-white border border-white-95'
								)}
							>
								{feature.isAvailable ? (
									<Check className='size-4 2xl:size-5' />
								) : (
									<X className='size-4 2xl:size-5' />
								)}
							</div>

							<span className='text-sm 2xl:text-lg text-grey-30 leading-[150%]'>
								{feature.text}
							</span>
						</li>
					))}
				</ul>
			</div>

			{/* Link */}
			{/* <Link
				href={ROUTES.PRICING}
				className={cn(
					'w-full mt-auto text-center bg-orange-50 text-white font-semibold',
					'text-sm 2xl:text-lg px-6 py-4.5 2xl:py-5 rounded-b-lg'
				)}
			>
				Get Started
			</Link> */}
		</div>
	)
}
