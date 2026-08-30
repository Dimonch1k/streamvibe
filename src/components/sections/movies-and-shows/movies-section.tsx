import { Gallery } from '@/components/ui/gallery'
import { Legend } from '@/components/ui/legend'

import {
	moviesGenresListData,
	moviesMustWatchListData,
	moviesPopularTopListData,
	moviesReleasesListData,
	moviesTrendingListData
} from '@/data/movies-and-shows.data'

export function MoviesSection() {
	return (
		<>
			<Legend header='Movies'>
				<Gallery
					title='Our Genres'
					listData={moviesGenresListData}
				/>
				<Gallery
					title='Popular Top 10 In Genres'
					listData={moviesPopularTopListData}
				/>
				<Gallery
					title='Trending Now'
					listData={moviesTrendingListData}
					itemType='compact'
				/>
				<Gallery
					title='New Releases'
					listData={moviesReleasesListData}
					itemType='compact'
				/>
				<Gallery
					title='Must - Watch Movies'
					listData={moviesMustWatchListData}
					itemType='compact'
				/>
			</Legend>
		</>
	)
}
