export type TypePricing = 'month' | 'year'

export interface IPricing {
	title: string
	description: string
	pricePerMonth: number
	pricePerYear: number
}
