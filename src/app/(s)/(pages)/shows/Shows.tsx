'use client'

// import { useMemo, useState } from 'react'

// import { ShowDetailsPanel } from '@/components/pages/shows/ShowDetailsPanel'
// import { ShowsGrid } from '@/components/pages/shows/ShowsGrid'
// import { ShowsHeader } from '@/components/pages/shows/ShowsHeader'
// import { ShowsSearch } from '@/components/pages/shows/ShowsSearch'
// import { ShowsStats } from '@/components/pages/shows/ShowsStats'
import type { MediaItem } from '@/lib/media/types'

// import { getShowsStats } from '@/lib/shows/utils'

export function Shows({ shows }: { shows: MediaItem[] }) {
	// const [search, setSearch] = useState('')
	// const [selectedShowId, setSelectedShowId] = useState<string | null>(
	// 	shows[0]?.id || null
	// )

	// const filteredShows = useMemo(() => {
	// 	if (!search) return shows

	// 	const query = search.toLowerCase()
	// 	return shows.filter(
	// 		show =>
	// 			show.title.toLowerCase().includes(query) ||
	// 			(show.description || '').toLowerCase().includes(query) ||
	// 			show.genres.some(genre => genre.toLowerCase().includes(query))
	// 	)
	// }, [shows, search])
	// const stats = useMemo(() => getShowsStats(shows), [shows])
	// const selectedShow = useMemo(
	// 	() =>
	// 		filteredShows.find(show => show.id === selectedShowId) ||
	// 		shows.find(show => show.id === selectedShowId) ||
	// 		null,
	// 	[shows, filteredShows, selectedShowId]
	// )

	return (
		<div className='mx-auto max-w-7xl px-4 py-8'>
			<div className='space-y-8'>
				{/* <ShowsHeader totalShows={stats.total} />

				<ShowsStats
					total={stats.total}
					verified={stats.verified}
					books={stats.books}
				/>

				<div className='rounded-xl border bg-card p-6'>
					<ShowsSearch
						search={search}
						onSearchChange={setSearch}
					/>
				</div>

				<div>
					<p className='text-sm text-muted-foreground'>
						Showing {filteredShows.length}{' '}
						{filteredShows.length === 1 ? 'show' : 'shows'}
					</p>
				</div>

				<div className='grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]'>
					<div>
						<ShowsGrid
							shows={filteredShows}
							onSelect={show => setSelectedShowId(show.id)}
						/>
					</div>

					<div>
						<ShowDetailsPanel
							show={selectedShow}
							onClose={() => setSelectedShowId(null)}
						/>
					</div>
				</div> */}
			</div>
		</div>
	)
}
