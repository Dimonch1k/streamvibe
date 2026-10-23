import { IHeroGalleryItem } from '@/types/sections/hero.interface'

import type { MediaItem } from './types'

const fallbackImagePath = (slug: string) => `/categories/${slug}.png`

function getImageUrl(imagePath: string | null, slug: string) {
	if (!imagePath) return fallbackImagePath(slug)

	const supabaseStorageImagesUrl =
		process.env.NEXT_PUBLIC_SUPABASE_STORAGE_IMAGES_URL

	if (!supabaseStorageImagesUrl) return fallbackImagePath(slug)

	const encodedPath = imagePath
		.split('/')
		.map(segment => encodeURIComponent(segment))
		.join('/')

	return `${supabaseStorageImagesUrl}/${encodedPath}`
}

export function toMediaItems(media: MediaItem): IHeroGalleryItem[] {
	return [
		{
			href: '',
			image: getImageUrl(media.poster_path, media.slug),
			title: media.title,
			description: media.description,
			videoUrl: media.video_url || media.trailer_url,
			backdropPath: getImageUrl(media.backdrop_path, media.slug)
		}
	]
}
