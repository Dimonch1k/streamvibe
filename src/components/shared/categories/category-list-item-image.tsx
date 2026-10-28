'use client'

import { useEffect, useRef, useState } from 'react'
import { ImageOff } from 'lucide-react'
import Image from 'next/image'

import { Skeleton } from '@/components/ui'

export function CategoryListItemImage({
	image,
	title
}: {
	image: string
	title?: string
}) {
	const containerRef = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	const [hasError, setHasError] = useState(!image)

	useEffect(() => {
		const container = containerRef.current
		if (!container || !image || hasError) return

		if (!('IntersectionObserver' in window)) {
			setIsVisible(true)
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ rootMargin: '0px' }
		)

		observer.observe(container)
		return () => observer.disconnect()
	}, [image, hasError])

	return (
		<div
			ref={containerRef}
			className='relative aspect-235/252 w-full overflow-hidden rounded-md bg-black-08'
		>
			{!hasError && (!isVisible || !isLoaded) && (
				<Skeleton className='absolute inset-0 z-10 h-full w-full rounded-md bg-black-15' />
			)}
			{hasError ? (
				<div
					role='img'
					aria-label='No image available'
					className='flex h-full w-full flex-col items-center justify-center gap-2 text-grey-60'
				>
					<ImageOff
						className='size-8'
						aria-hidden='true'
					/>
					<span className='text-xs'>No image</span>
				</div>
			) : isVisible ? (
				<Image
					fill
					src={image}
					alt={title || 'Media image'}
					sizes='(max-width: 767px) 180px, (max-width: 1279px) 220px, 276px'
					loading='lazy'
					className='object-cover'
					draggable={false}
					onLoad={() => setIsLoaded(true)}
					onError={() => setHasError(true)}
				/>
			) : null}
		</div>
	)
}
