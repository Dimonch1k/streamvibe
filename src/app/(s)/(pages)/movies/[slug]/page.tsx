import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getMedium } from '@/lib/media/actions'

import { Movie } from './Movie'

interface IMoviePageProps {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({
	params
}: IMoviePageProps): Promise<Metadata> {
	const { slug } = await params
	const movie = await getMedium(slug)

	if (!movie) {
		return { title: 'Movie Not Found' }
	}

	return {
		title: `${movie.title} | Movie`,
		description:
			movie.description || `Watch ${movie.title || 'movie'} online now.`
	}
}

export default async function MoviePage({ params }: IMoviePageProps) {
	const { slug } = await params
	const movie = await getMedium(slug)

	if (!movie) {
		notFound()
	}

	return <Movie movie={movie} />
}
