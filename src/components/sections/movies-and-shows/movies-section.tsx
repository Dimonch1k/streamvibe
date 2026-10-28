'use client'

import { useRouter } from 'next/navigation'

import { Gallery, Legend } from '@/components/ui'

import { ROUTES } from '@/constants/routes.constants'

import type { ICategoryItem } from '@/types/sections/category.interface'

import type { MediaCollectionGallery } from '@/lib/media-collections/types'

export interface MoviesSectionProps {
	genres: ICategoryItem[]
	galleries: MediaCollectionGallery[]
}

export function MoviesSection({ genres, galleries }: MoviesSectionProps) {
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
				{galleries.map(gallery => (
					<Gallery
						key={gallery.id}
						title={gallery.title}
						listData={gallery.items}
						itemType={gallery.itemType}
					/>
				))}
			</Legend>
		</>
	)
}
