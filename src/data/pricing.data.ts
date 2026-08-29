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

export const pricingMonthlyComparisonTableData: {
	columns: string[]
	data: string[][]
} = {
	columns: ['Features', 'Basic', 'Standard', 'Premium'],
	data: [
		['Price', '$9.99', '$12.99', '$14.99'],
		[
			'Content',
			'Access to a wide selection of movies and shows, including some new releases.',
			'Access to a wider selection of movies and shows, including most new releases and exclusive content',
			'Access to a widest selection of movies and shows, including all new releases and Offline Viewing'
		],
		[
			'Devices',
			'Watch on one device simultaneously',
			'Watch on Two device simultaneously',
			'Watch on Four device simultaneously'
		],
		['Free Trial', '7 Days', '7 Days', '7 Days'],
		['Cancel Anytime', 'Yes', 'Yes', 'Yes'],
		['HDR', 'No', 'Yes', 'Yes'],
		['Dolby Atmos', 'No', 'Yes', 'Yes'],
		['Ad - Free', 'No', 'Yes', 'Yes'],
		[
			'Offline Viewing',
			'No',
			'Yes, for select titles.',
			'Yes, for all titles.'
		],
		[
			'Family Sharing',
			'No',
			'Yes, up to 5 family members.',
			'Yes, up to 6 family members.'
		]
	]
}

export const pricingYearlyComparisonTableData: {
	columns: string[]
	data: string[][]
} = {
	columns: ['Features', 'Basic', 'Standard', 'Premium'],
	data: [
		['Price', '$99.9', '$129.9', '$149.9'],
		[
			'Content',
			'Access to a wide selection of movies and shows, including some new releases.',
			'Access to a wider selection of movies and shows, including most new releases and exclusive content',
			'Access to a widest selection of movies and shows, including all new releases and Offline Viewing'
		],
		[
			'Devices',
			'Watch on one device simultaneously',
			'Watch on Two device simultaneously',
			'Watch on Four device simultaneously'
		],
		['Free Trial', '7 Days', '7 Days', '7 Days'],
		['Cancel Anytime', 'Yes', 'Yes', 'Yes'],
		['HDR', 'No', 'Yes', 'Yes'],
		['Dolby Atmos', 'No', 'Yes', 'Yes'],
		['Ad - Free', 'No', 'Yes', 'Yes'],
		[
			'Offline Viewing',
			'No',
			'Yes, for select titles.',
			'Yes, for all titles.'
		],
		[
			'Family Sharing',
			'No',
			'Yes, up to 5 family members.',
			'Yes, up to 6 family members.'
		]
	]
}
