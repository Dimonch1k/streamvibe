import type { Metadata } from 'next'

// import { getMoviesData } from '@/lib/movies/queries'

import { Movies } from './Movies'

export const metadata: Metadata = {
	title: 'Movies'
}

export default async function MoviesPage() {
	// const data = await getMoviesData()

	return <Movies movies={[]} />
}
