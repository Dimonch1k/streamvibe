import type { Metadata } from 'next'

// import { getShowsData } from '@/lib/shows/queries'

import { Shows } from './Shows'

export const metadata: Metadata = {
	title: 'Shows'
}

export default async function ShowsPage() {
	// const data = await getShowsData()

	return <Shows shows={[]} />
}
