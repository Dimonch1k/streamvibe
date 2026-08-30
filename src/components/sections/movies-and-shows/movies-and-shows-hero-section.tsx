'use client'

import Image from 'next/image'

import { useScreenType } from '@/hooks/useScreenType'

export function MoviesAndShowsHeroSection() {
	const screenType = useScreenType()

	return (
		<>
			{screenType === 'desktop' && (
				<Image
					src='/movies-and-shows/movies-and-shows-hero-desktop.png'
					alt='Movies and Shows Hero'
					width={1594}
					height={835}
					className='w-full h-full object-contain'
					draggable={false}
				/>
			)}
			{screenType === 'laptop' && (
				<Image
					src='/movies-and-shows/movies-and-shows-hero-laptop.png'
					alt='Movies and Shows Hero'
					width={1280}
					height={709}
					className='w-full h-full object-contain'
					draggable={false}
				/>
			)}
			{screenType === 'mobile' && (
				<Image
					src='/movies-and-shows/movies-and-shows-hero-mobile.png'
					alt='Movies and Shows Hero'
					width={358}
					height={468}
					className='w-full h-full object-contain'
					draggable={false}
				/>
			)}
		</>
	)
}
