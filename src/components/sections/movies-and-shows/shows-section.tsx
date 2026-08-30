import { Gallery } from '@/components/ui/gallery'
import { Legend } from '@/components/ui/legend'

import {
	showsGenresListData,
	showsMustWatchListData,
	showsPopularTopListData,
	showsReleasesListData,
	showsTrendingListData
} from '@/data/movies-and-shows.data'

export function ShowsSection() {
	return (
		<>
			<Legend header='Shows'>
				<Gallery
					title='Our Genres'
					listData={showsGenresListData}
				/>
				<Gallery
					title='Popular Top 10 In Genres'
					listData={showsPopularTopListData}
				/>
				<Gallery
					title='Trending Shows Now'
					listData={showsTrendingListData}
					itemType='compact'
				/>
				<Gallery
					title='New Released Shows'
					listData={showsReleasesListData}
					itemType='compact'
				/>
				<Gallery
					title='Must - Watch Shows'
					listData={showsMustWatchListData}
					itemType='compact'
				/>
			</Legend>
		</>
	)
}
