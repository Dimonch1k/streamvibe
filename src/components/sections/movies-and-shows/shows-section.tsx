'use client'

import { useRouter } from 'next/navigation'

import { Gallery } from '@/components/ui/gallery'
import { Legend } from '@/components/ui/legend'

import { ROUTES } from '@/constants/routes.constants'

import {
	showsMustWatchListData,
	showsPopularTopListData,
	showsReleasesListData,
	showsTrendingListData
} from '@/data/movies-and-shows.data'

import type { ICategoryItem } from '@/types/sections/category.interface'

export function ShowsSection({ genres }: { genres: ICategoryItem[] }) {
	const router = useRouter()

	return (
		<>
			<Legend
				header='Shows'
				onClick={() => router.push(ROUTES.SHOWS)}
			>
				<Gallery
					title='Our Genres'
					listData={genres}
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
