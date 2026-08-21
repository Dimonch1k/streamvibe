import type { Metadata } from 'next'

import { MoviesAndShows } from './MoviesAndShows'

export const metadata: Metadata = {
	title: 'Movies And Shows'
}

export default function MoviesAndShowsPage() {
	return <MoviesAndShows />
}
