import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAllMovies, getMovie } from '@/lib/utils/get-static-data'

import { Movie } from './Movie'

interface IMoviePageProps {
	params: Promise<{ id: string }>
}

export async function generateStaticParams() {
	const movies = getAllMovies()
	return movies.map(movie => ({ id: movie.id }))
}

export async function generateMetadata({
	params
}: IMoviePageProps): Promise<Metadata> {
	const { id } = await params
	const movie = await getMovie(id)

	if (!movie) {
		return { title: 'Movie Not Found' }
	}

	return {
		title: `${movie.title} | Movies`,
		description: movie.description || `Watch ${movie.title} online now.`
	}
}

export default async function MoviePage({ params }: IMoviePageProps) {
	const { id } = await params
	const movie = await getMovie(id)

	if (!movie) {
		notFound()
	}

	return <Movie />
}
