'use client'

// import { useMemo, useState } from 'react'

// import { MovieDetailsPanel } from '@/components/pages/movies/MovieDetailsPanel'
// import { MoviesGrid } from '@/components/pages/movies/MoviesGrid'
// import { MoviesHeader } from '@/components/pages/movies/MoviesHeader'
// import { MoviesSearch } from '@/components/pages/movies/MoviesSearch'
// import { MoviesStats } from '@/components/pages/movies/MoviesStats'
import type { MovieItem } from '@/lib/movies/types'

// import { getMoviesStats } from '@/lib/movies/utils'

export function Movies({ movies }: { movies: MovieItem[] }) {
	// const [search, setSearch] = useState('')
	// const [selectedMovieId, setSelectedMovieId] = useState<string | null>(
	// 	movies[0]?.id || null
	// )

	// const filteredMovies = useMemo(() => {
	// 	if (!search) return movies

	// 	const query = search.toLowerCase()
	// 	return movies.filter(
	// 		movie =>
	// 			movie.title.toLowerCase().includes(query) ||
	// 			(movie.description || '').toLowerCase().includes(query) ||
	// 			movie.genres.some(genre => genre.toLowerCase().includes(query))
	// 	)
	// }, [movies, search])
	// const stats = useMemo(() => getMoviesStats(movies), [movies])
	// const selectedMovie = useMemo(
	// 	() =>
	// 		filteredMovies.find(movie => movie.id === selectedMovieId) ||
	// 		movies.find(movie => movie.id === selectedMovieId) ||
	// 		null,
	// 	[movies, filteredMovies, selectedMovieId]
	// )

	return (
		<div className='mx-auto max-w-7xl px-4 py-8'>
			<div className='space-y-8'>
				{/* <MoviesHeader totalMovies={stats.total} />

				<MoviesStats
					total={stats.total}
					verified={stats.verified}
					books={stats.books}
				/>

				<div className='rounded-xl border bg-card p-6'>
					<MoviesSearch
						search={search}
						onSearchChange={setSearch}
					/>
				</div>

				<div>
					<p className='text-sm text-muted-foreground'>
						Showing {filteredMovies.length}{' '}
						{filteredMovies.length === 1 ? 'movie' : 'movies'}
					</p>
				</div>

				<div className='grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]'>
					<div>
						<MoviesGrid
							movies={filteredMovies}
							onSelect={movie => setSelectedMovieId(movie.id)}
						/>
					</div>

					<div>
						<MovieDetailsPanel
							movie={selectedMovie}
							onClose={() => setSelectedMovieId(null)}
						/>
					</div>
				</div> */}
			</div>
		</div>
	)
}
