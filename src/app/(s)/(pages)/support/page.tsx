import type { Metadata } from 'next'

import { Support } from './Support'

export const metadata: Metadata = {
	title: 'Support'
}

export default function SupportPage() {
	return <Support />
}
