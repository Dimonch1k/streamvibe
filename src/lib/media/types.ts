import type { Database } from '@/lib/supabase/types'

export type MediaItem = Database['public']['Tables']['media']['Row']
