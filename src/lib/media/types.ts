import type { Database } from '@/lib/supabase/types'

export type MediaItem = Database['public']['Tables']['media']['Row']

export interface MediaDetailItem extends MediaItem {
	languages: string[]
	genres: string[]
	ratings: Array<{
		source: Database['public']['Enums']['rating_source']
		rating: number
		votesCount: number
	}>
	people: Array<{
		id: string
		name: string
		location: string | null
		photoPath: string | null
		role: Database['public']['Enums']['person_role']
	}>
	reviews: Array<{
		id: string
		name: string
		location: string | null
		comment: string
		rating: number
	}>
}
