export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[]

export type Database = {
	// Allows to automatically instantiate createClient with right options
	// instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
	__InternalSupabase: {
		PostgrestVersion: '14.17'
	}
	public: {
		Tables: {
			episodes: {
				Row: {
					created_at: string
					description: string | null
					duration_minutes: number | null
					episode_number: number
					id: string
					image_path: string
					released_at: string | null
					season_id: string
					title: string
					updated_at: string
					video_url: string | null
				}
				Insert: {
					created_at?: string
					description?: string | null
					duration_minutes?: number | null
					episode_number: number
					id?: string
					image_path: string
					released_at?: string | null
					season_id: string
					title: string
					updated_at?: string
					video_url?: string | null
				}
				Update: {
					created_at?: string
					description?: string | null
					duration_minutes?: number | null
					episode_number?: number
					id?: string
					image_path?: string
					released_at?: string | null
					season_id?: string
					title?: string
					updated_at?: string
					video_url?: string | null
				}
				Relationships: [
					{
						foreignKeyName: 'episodes_season_id_fkey'
						columns: ['season_id']
						isOneToOne: false
						referencedRelation: 'seasons'
						referencedColumns: ['id']
					}
				]
			}
			genres: {
				Row: {
					created_at: string
					id: string
					image_path: string | null
					name: string
					slug: string
					sort_order: number
					updated_at: string
				}
				Insert: {
					created_at?: string
					id?: string
					image_path?: string | null
					name: string
					slug: string
					sort_order?: number
					updated_at?: string
				}
				Update: {
					created_at?: string
					id?: string
					image_path?: string | null
					name?: string
					slug?: string
					sort_order?: number
					updated_at?: string
				}
				Relationships: []
			}
			languages: {
				Row: {
					code: string
					created_at: string
					id: string
					name: string
					updated_at: string
				}
				Insert: {
					code: string
					created_at?: string
					id?: string
					name: string
					updated_at?: string
				}
				Update: {
					code?: string
					created_at?: string
					id?: string
					name?: string
					updated_at?: string
				}
				Relationships: []
			}
			media: {
				Row: {
					backdrop_path: string | null
					created_at: string
					description: string | null
					duration_minutes: number | null
					id: string
					is_featured: boolean
					is_published: boolean
					poster_path: string
					released_at: string | null
					released_year: number | null
					slug: string
					title: string
					trailer_url: string | null
					type: Database['public']['Enums']['media_type']
					updated_at: string
					video_url: string | null
					views_count: number
				}
				Insert: {
					backdrop_path?: string | null
					created_at?: string
					description?: string | null
					duration_minutes?: number | null
					id?: string
					is_featured?: boolean
					is_published?: boolean
					poster_path: string
					released_at?: string | null
					released_year?: number | null
					slug: string
					title: string
					trailer_url?: string | null
					type: Database['public']['Enums']['media_type']
					updated_at?: string
					video_url?: string | null
					views_count?: number
				}
				Update: {
					backdrop_path?: string | null
					created_at?: string
					description?: string | null
					duration_minutes?: number | null
					id?: string
					is_featured?: boolean
					is_published?: boolean
					poster_path?: string
					released_at?: string | null
					released_year?: number | null
					slug?: string
					title?: string
					trailer_url?: string | null
					type?: Database['public']['Enums']['media_type']
					updated_at?: string
					video_url?: string | null
					views_count?: number
				}
				Relationships: []
			}
			media_collection_items: {
				Row: {
					badge: string | null
					collection_id: string
					created_at: string
					media_id: string
					sort_order: number
				}
				Insert: {
					badge?: string | null
					collection_id: string
					created_at?: string
					media_id: string
					sort_order?: number
				}
				Update: {
					badge?: string | null
					collection_id?: string
					created_at?: string
					media_id?: string
					sort_order?: number
				}
				Relationships: [
					{
						foreignKeyName: 'media_collection_items_collection_id_fkey'
						columns: ['collection_id']
						isOneToOne: false
						referencedRelation: 'media_collections'
						referencedColumns: ['id']
					},
					{
						foreignKeyName: 'media_collection_items_media_id_fkey'
						columns: ['media_id']
						isOneToOne: false
						referencedRelation: 'media'
						referencedColumns: ['id']
					}
				]
			}
			media_collections: {
				Row: {
					created_at: string
					description: string | null
					id: string
					is_active: boolean
					media_type: Database['public']['Enums']['media_type'] | null
					slug: string
					sort_order: number
					title: string
					type: Database['public']['Enums']['collection_type']
					updated_at: string
				}
				Insert: {
					created_at?: string
					description?: string | null
					id?: string
					is_active?: boolean
					media_type?: Database['public']['Enums']['media_type'] | null
					slug: string
					sort_order?: number
					title: string
					type: Database['public']['Enums']['collection_type']
					updated_at?: string
				}
				Update: {
					created_at?: string
					description?: string | null
					id?: string
					is_active?: boolean
					media_type?: Database['public']['Enums']['media_type'] | null
					slug?: string
					sort_order?: number
					title?: string
					type?: Database['public']['Enums']['collection_type']
					updated_at?: string
				}
				Relationships: []
			}
			media_genres: {
				Row: {
					genre_id: string
					media_id: string
				}
				Insert: {
					genre_id: string
					media_id: string
				}
				Update: {
					genre_id?: string
					media_id?: string
				}
				Relationships: [
					{
						foreignKeyName: 'media_genres_genre_id_fkey'
						columns: ['genre_id']
						isOneToOne: false
						referencedRelation: 'genres'
						referencedColumns: ['id']
					},
					{
						foreignKeyName: 'media_genres_media_id_fkey'
						columns: ['media_id']
						isOneToOne: false
						referencedRelation: 'media'
						referencedColumns: ['id']
					}
				]
			}
			media_languages: {
				Row: {
					language_id: string
					media_id: string
				}
				Insert: {
					language_id: string
					media_id: string
				}
				Update: {
					language_id?: string
					media_id?: string
				}
				Relationships: [
					{
						foreignKeyName: 'media_languages_language_id_fkey'
						columns: ['language_id']
						isOneToOne: false
						referencedRelation: 'languages'
						referencedColumns: ['id']
					},
					{
						foreignKeyName: 'media_languages_media_id_fkey'
						columns: ['media_id']
						isOneToOne: false
						referencedRelation: 'media'
						referencedColumns: ['id']
					}
				]
			}
			media_people: {
				Row: {
					character_name: string | null
					created_at: string
					id: string
					media_id: string
					person_id: string
					role: Database['public']['Enums']['person_role']
					sort_order: number
				}
				Insert: {
					character_name?: string | null
					created_at?: string
					id?: string
					media_id: string
					person_id: string
					role: Database['public']['Enums']['person_role']
					sort_order?: number
				}
				Update: {
					character_name?: string | null
					created_at?: string
					id?: string
					media_id?: string
					person_id?: string
					role?: Database['public']['Enums']['person_role']
					sort_order?: number
				}
				Relationships: [
					{
						foreignKeyName: 'media_people_media_id_fkey'
						columns: ['media_id']
						isOneToOne: false
						referencedRelation: 'media'
						referencedColumns: ['id']
					},
					{
						foreignKeyName: 'media_people_person_id_fkey'
						columns: ['person_id']
						isOneToOne: false
						referencedRelation: 'people'
						referencedColumns: ['id']
					}
				]
			}
			media_ratings: {
				Row: {
					created_at: string
					id: string
					media_id: string
					rating: number
					source: Database['public']['Enums']['rating_source']
					updated_at: string
					votes_count: number
				}
				Insert: {
					created_at?: string
					id?: string
					media_id: string
					rating: number
					source: Database['public']['Enums']['rating_source']
					updated_at?: string
					votes_count?: number
				}
				Update: {
					created_at?: string
					id?: string
					media_id?: string
					rating?: number
					source?: Database['public']['Enums']['rating_source']
					updated_at?: string
					votes_count?: number
				}
				Relationships: [
					{
						foreignKeyName: 'media_ratings_media_id_fkey'
						columns: ['media_id']
						isOneToOne: false
						referencedRelation: 'media'
						referencedColumns: ['id']
					}
				]
			}
			media_reviews: {
				Row: {
					comment: string
					created_at: string
					first_name: string
					id: string
					is_published: boolean
					last_name: string
					location: string | null
					media_id: string
					rating: number
					updated_at: string
				}
				Insert: {
					comment: string
					created_at?: string
					first_name: string
					id?: string
					is_published?: boolean
					last_name: string
					location?: string | null
					media_id: string
					rating: number
					updated_at?: string
				}
				Update: {
					comment?: string
					created_at?: string
					first_name?: string
					id?: string
					is_published?: boolean
					last_name?: string
					location?: string | null
					media_id?: string
					rating?: number
					updated_at?: string
				}
				Relationships: [
					{
						foreignKeyName: 'media_reviews_media_id_fkey'
						columns: ['media_id']
						isOneToOne: false
						referencedRelation: 'media'
						referencedColumns: ['id']
					}
				]
			}
			people: {
				Row: {
					created_at: string
					first_name: string
					id: string
					last_name: string
					location: string | null
					photo_path: string | null
					updated_at: string
				}
				Insert: {
					created_at?: string
					first_name: string
					id?: string
					last_name: string
					location?: string | null
					photo_path?: string | null
					updated_at?: string
				}
				Update: {
					created_at?: string
					first_name?: string
					id?: string
					last_name?: string
					location?: string | null
					photo_path?: string | null
					updated_at?: string
				}
				Relationships: []
			}
			seasons: {
				Row: {
					created_at: string
					description: string | null
					id: string
					image_path: string | null
					released_year: number | null
					season_number: number
					show_id: string
					title: string | null
					updated_at: string
				}
				Insert: {
					created_at?: string
					description?: string | null
					id?: string
					image_path?: string | null
					released_year?: number | null
					season_number: number
					show_id: string
					title?: string | null
					updated_at?: string
				}
				Update: {
					created_at?: string
					description?: string | null
					id?: string
					image_path?: string | null
					released_year?: number | null
					season_number?: number
					show_id?: string
					title?: string | null
					updated_at?: string
				}
				Relationships: [
					{
						foreignKeyName: 'seasons_show_id_fkey'
						columns: ['show_id']
						isOneToOne: false
						referencedRelation: 'media'
						referencedColumns: ['id']
					}
				]
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			image_path_from_url: { Args: { value: string }; Returns: string }
			image_storage_path: { Args: { value: string }; Returns: string }
			is_valid_image_path: { Args: { value: string }; Returns: boolean }
		}
		Enums: {
			collection_type:
				| 'genres'
				| 'popular_top_10'
				| 'trending'
				| 'new_releases'
				| 'must_watch'
				| 'hero'
			media_type: 'movie' | 'show'
			person_role: 'actor' | 'director' | 'music'
			rating_source: 'imdb' | 'streamvibe'
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
	DefaultSchemaTableNameOrOptions extends
		| keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
		| { schema: keyof DatabaseWithoutInternals },
	TableName extends (DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals
	}
		? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
				DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
		: never) = never
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals
}
	? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
			DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R
		}
		? R
		: never
	: DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
				DefaultSchema['Views'])
		? (DefaultSchema['Tables'] &
				DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
				Row: infer R
			}
			? R
			: never
		: never

export type TablesInsert<
	DefaultSchemaTableNameOrOptions extends
		keyof DefaultSchema['Tables'] | { schema: keyof DatabaseWithoutInternals },
	TableName extends (DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
		: never) = never
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals
}
	? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I
		}
		? I
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
		? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
				Insert: infer I
			}
			? I
			: never
		: never

export type TablesUpdate<
	DefaultSchemaTableNameOrOptions extends
		keyof DefaultSchema['Tables'] | { schema: keyof DatabaseWithoutInternals },
	TableName extends (DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
		: never) = never
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals
}
	? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U
		}
		? U
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
		? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
				Update: infer U
			}
			? U
			: never
		: never

export type Enums<
	DefaultSchemaEnumNameOrOptions extends
		keyof DefaultSchema['Enums'] | { schema: keyof DatabaseWithoutInternals },
	EnumName extends (DefaultSchemaEnumNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
		: never) = never
> = DefaultSchemaEnumNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals
}
	? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
	: DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
		? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
		: never

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends
		| keyof DefaultSchema['CompositeTypes']
		| { schema: keyof DatabaseWithoutInternals },
	CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals
	}
		? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
		: never) = never
> = PublicCompositeTypeNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals
}
	? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
		? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
		: never

export const Constants = {
	public: {
		Enums: {
			collection_type: [
				'genres',
				'popular_top_10',
				'trending',
				'new_releases',
				'must_watch',
				'hero'
			],
			media_type: ['movie', 'show'],
			person_role: ['actor', 'director', 'music'],
			rating_source: ['imdb', 'streamvibe']
		}
	}
} as const
