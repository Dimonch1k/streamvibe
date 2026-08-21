'use client'

// import { FaqSection } from '@/components/sections/home'
import { PageContainer } from '@/components/shared/PageContainer'
import { PageHeader } from '@/components/shared/PageHeader'
import { PricingSection } from '@/components/shared/pricing/PricingSection'

export function Pricing() {
	return (
		<PageContainer>
			<PageHeader
				title='Our Pricing'
				description="Welcome to StreamVibe's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
			/>

			<PricingSection
				hasTitle={false}
				hasDescription={false}
				headerClassName='flex justify-center'
			/>
			{/* <FaqSection /> */}
		</PageContainer>
	)
}
