'use client'

import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'

export interface HeroGalleryVideoProps {
	title: string
	youtubeId: string
	setIsPlaying: (isPlaying: boolean) => void
}

export function HeroGalleryVideo({
	title,
	youtubeId,
	setIsPlaying
}: HeroGalleryVideoProps) {
	return (
		<>
			<iframe
				title={`${title} video`}
				src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
				className='absolute inset-0 z-20 h-full w-full'
				allow='autoplay; encrypted-media; picture-in-picture; fullscreen'
				allowFullScreen
			/>

			<Button
				type='button'
				size='square'
				aria-label='Close video'
				onClick={() => setIsPlaying(false)}
				className='absolute right-4 top-[1/2] z-30 rounded-full'
			>
				<X className='size-5' />
			</Button>
		</>
	)
}
