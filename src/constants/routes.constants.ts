export const ROUTES = {
	// Shared
	HOME: '/#hero' as const,
	MOVIES_AND_SHOWS: '/movies-and-shows' as const,
	MOVIE: (id: number) => `/movies/${id}` as const,
	SHOW: (id: number) => `/shows/${id}` as const,
	SUPPORT: '/support' as const,
	SUBSCRIPTIONS: '/subscriptions' as const,

	// Errors
	NOT_FOUND: '/not-found' as const,
	SERVER_ERROR: '/server-error' as const
}
