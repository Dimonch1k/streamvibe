export type TypePricing = 'month' | 'year'

export interface IPricing {
	title: string
	pricePerMonth: number
	pricePerYear: number
	features: {
		text: string
		isAvailable: boolean
	}[]
}
