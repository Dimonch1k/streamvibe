'use client'

import { useRouter } from 'next/navigation'

import { Gallery, Legend } from '@/components/ui'

import { ROUTES } from '@/constants/routes.constants'

import type { ICategoryItem } from '@/types/sections/category.interface'

import type { MediaCollectionGallery } from '@/lib/media-collections/types'

export interface ShowsSectionProps {
	genres: ICategoryItem[]
	galleries: MediaCollectionGallery[]
}

export function ShowsSection({ genres, galleries }: ShowsSectionProps) {
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
