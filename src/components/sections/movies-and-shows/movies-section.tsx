'use client'

import { useRouter } from 'next/navigation'

import { Gallery } from '@/components/ui/gallery'
import { Legend } from '@/components/ui/legend'

import { ROUTES } from '@/constants/routes.constants'

import {
	moviesMustWatchListData,
	moviesPopularTopListData,
	moviesReleasesListData,
	moviesTrendingListData
} from '@/data/movies-and-shows.data'

import type { ICategoryItem } from '@/types/sections/category.interface'

export function MoviesSection({ genres }: { genres: ICategoryItem[] }) {
	const router = useRouter()

	return (
		<>
			<Legend
				header='Movies'
				onClick={() => router.push(ROUTES.MOVIES)}
			>
				<Gallery
					title='Our Genres'
					listData={genres}
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
