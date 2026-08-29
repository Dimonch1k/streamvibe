import { Gallery } from '@/components/ui/gallery'
import { Legend } from '@/components/ui/legend'

import {
	moviesListData,
	popularTopListData
} from '@/data/movies-and-shows.data'

export function MoviesSection() {
	return (
		<>
			<Legend header='Movies'>
				<Gallery
					title='Our Genres'
					listData={moviesListData}
				/>
				<Gallery
					title='Popular Top 10 In Genres'
					listData={popularTopListData}
				/>
				<Gallery
					title='Trending Now'
					listData={moviesListData}
				/>
				<Gallery
					title='New Releases'
					listData={moviesListData}
				/>
				<Gallery
					title='Must - Watch Movies'
					listData={moviesListData}
				/>
			</Legend>
		</>
	)
}
