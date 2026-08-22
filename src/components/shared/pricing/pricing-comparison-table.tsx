import { Section } from '@/components/ui/section'
import { Table } from '@/components/ui/table'

import { pricingComparisonTableData } from '@/data/pricing.data'

export function PricingComparisonTable() {
	return (
		<Section
			id='pricing-comparison-table'
			title='Compare our plans and find the right one for you'
			description="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
		>
			<Table
				columns={pricingComparisonTableData.columns}
				data={pricingComparisonTableData.data}
			/>
		</Section>
	)
}
