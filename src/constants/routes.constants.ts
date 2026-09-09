export const ROUTES = {
	// Shared
	HOME: '/' as const,
	MOVIES_AND_SHOWS: '/movies-and-shows' as const,
	MOVIES: '/movies' as const,
	MOVIES_FILTER: (category: string) => `/movies?category=${category}`,
	MOVIE: (id: number) => `/movies/${id}` as const,
	SHOWS: '/shows' as const,
	SHOWS_FILTER: (category: string) => `/shows?category=${category}`,
	SHOW: (id: number) => `/shows/${id}` as const,
	SUPPORT: '/support' as const,
	SUBSCRIPTIONS: '/subscriptions' as const,

	// Errors
	NOT_FOUND: '/not-found' as const,
	SERVER_ERROR: '/server-error' as const
}
