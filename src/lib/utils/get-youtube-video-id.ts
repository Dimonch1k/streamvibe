export function getYouTubeVideoId(value?: string | null) {
	if (!value) return null

	try {
		const url = new URL(value)
		const host = url.hostname.replace(/^www\./, '').toLowerCase()
		let id: string | null = null

		if (host === 'youtu.be') {
			id = url.pathname.split('/').filter(Boolean)[0] ?? null
		} else if (
			host === 'youtube.com' ||
			host === 'm.youtube.com' ||
			host === 'youtube-nocookie.com'
		) {
			if (url.pathname === '/watch') id = url.searchParams.get('v')
			else if (/^\/(embed|shorts|live)\//.test(url.pathname)) {
				id = url.pathname.split('/')[2] ?? null
			}
		}

		return id && /^[\w-]{11}$/.test(id) ? id : null
	} catch {
		return null
	}
}
