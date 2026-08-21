import { useEffect, useState } from 'react'

export function useScreenType() {
	const [screenType, setScreenType] = useState<'mobile' | 'laptop' | 'desktop'>(
		'desktop'
	)

	useEffect(() => {
		function handleResize() {
			const width = window.innerWidth
			if (width < 768) {
				setScreenType('mobile')
			} else if (width >= 768 && width < 1440) {
				setScreenType('laptop')
			} else {
				setScreenType('desktop')
			}
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return screenType
}
