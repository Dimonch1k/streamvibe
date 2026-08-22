import type { IPricing, TypePricing } from '@/types/sections/pricing.interface'

export const pricingSelectorsData: {
	title: string
	pricingType: TypePricing
}[] = [
	{ title: 'Montly', pricingType: 'month' },
	{ title: 'Yearly', pricingType: 'year' }
]

export const pricingListData: IPricing[] = [
	{
		title: 'Basic Plan',
		description:
			'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
		pricePerMonth: 9.99,
		pricePerYear: 99.99
	},
	{
		title: 'Standard Plan',
		description:
			'Access to a wider selection of movies and shows, including most new releases and exclusive content',
		pricePerMonth: 12.99,
		pricePerYear: 129.99
	},
	{
		title: 'Premium Plan',
		description:
			'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
		pricePerMonth: 14.99,
		pricePerYear: 149.99
	}
]
