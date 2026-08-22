'use client'

import { Button } from '@/components/ui/buttons/button'
import { Section } from '@/components/ui/section'

import { faqListData } from '@/data/home.data'

import { FaqList } from './faq-list'

export function FaqSection() {
	return (
		<Section
			id='faq'
			title='Frequently Asked Questions.'
			description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
			headerChildren={<Button variant='primary'>Ask a Question</Button>}
		>
			<FaqList list={faqListData} />
		</Section>
	)
}
