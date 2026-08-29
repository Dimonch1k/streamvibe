import { Gallery } from '@/components/ui/gallery'
import { Legend } from '@/components/ui/legend'

import { popularTopListData, showsListData } from '@/data/movies-and-shows.data'

export function ShowsSection() {
	return (
		<>
			<Legend header='Shows'>
				<Gallery
					title='Our Genres'
					listData={showsListData}
				/>
				<Gallery
					title='Popular Top 10 In Genres'
					listData={popularTopListData}
				/>
				<Gallery
					title='Trending Shows Now'
					listData={showsListData}
				/>
				<Gallery
					title='New Released Shows'
					listData={showsListData}
				/>
				<Gallery
					title='Must - Watch Shows'
					listData={showsListData}
				/>
			</Legend>
		</>
	)
}
