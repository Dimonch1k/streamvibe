import type { ICategoryItem } from '@/types/sections/category.interface'

import type { Database } from '@/lib/supabase/types'

export type MediaCollectionType = Database['public']['Enums']['collection_type']

export type MediaType = Database['public']['Enums']['media_type']

export interface MediaCollectionMediaItem {
	id: string
	slug: string
	title: string
	description: string | null
	posterPath: string
	backdropPath: string | null
	durationMinutes: number | null
	viewsCount: number
	releasedAt: string | null
	mediaType: MediaType
	badge: string | null
	rating: number | null
	votesCount: number | null
	seasonCount: number
}

export interface MediaCollectionItem {
	id: string
	type: MediaCollectionType
	mediaType: MediaType | null
	title: string
	slug: string
	sortOrder: number
	items: MediaCollectionMediaItem[]
}

export interface MediaCollectionGallery {
	id: string
	title: string
	itemType: 'default' | 'compact'
	items: ICategoryItem[]
}
