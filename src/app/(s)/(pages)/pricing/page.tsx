import type { Metadata } from 'next'

import { Pricing } from './Pricing'

export const metadata: Metadata = {
	title: 'Pricing'
}

export default function PricingPage() {
	return (
		<>
			<Pricing />
		</>
	)
}
