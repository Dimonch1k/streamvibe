'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { PlayIcon } from '@/components/ui/icons/play-icon'
import { Switcher } from '@/components/ui/switcher'

import { IHeroGalleryItem } from '@/types/sections/hero.interface'

import { cn, getYouTubeVideoId } from '@/lib/utils'

import { HeroGalleryListItemButtons } from './hero-gallery-list-item-buttons'
import { HeroGalleryVideo } from './hero-gallery-video'

export interface HeroGalleryListItemProps {
	item: IHeroGalleryItem
	className?: string
	activeIndex: number
	totalItems: number
	onPrev?: () => void
	onNext?: () => void
	onDotClick?: (index: number) => void
}

export function HeroGalleryListItem({
	item,
	className,
	activeIndex,
	totalItems,
	onPrev,
	onNext,
	onDotClick
}: HeroGalleryListItemProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	const youtubeId = getYouTubeVideoId(item.videoUrl)

	return (
		<li className='relative h-112.5 lg:h-175 2xl:h-200 w-full flex flex-col items-center justify-center overflow-hidden rounded-[13px]'>
			{isPlaying && youtubeId ? (
				<HeroGalleryVideo
					title={item.title}
					youtubeId={youtubeId}
					setIsPlaying={setIsPlaying}
				/>
			) : null}

			<div className='absolute w-full h-full bg-linear-to-b from-black-15 to-black-15/0' />

			<div className='flex-1 w-full h-full z-10 overflow-hidden py-[1.25px] px-px'>
				<div className='flex-1 h-full w-full relative bg-linear-to-t from-black-08 to-black-08/0'>
					<Image
						unoptimized
						src={item.backdropPath || item.image}
						alt={item.title}
						width={1594}
						height={835}
						className='absolute w-full h-full object-cover -z-10 rounded-xl'
						draggable={false}
					/>
					<div
						// href={item.href}
						className={cn(
							'h-full flex-1 flex flex-col justify-center text-center',
							'p-6 pb-4 lg:p-10 lg:pb-4 2xl:p-12.5 2xl:pb-5',
							className
						)}
					>
						<div className='mt-auto flex flex-col items-center gap-5 lg:gap-6 2xl:gap-7.5'>
							<div className='flex flex-col items-center gap-0.5 2xl:gap-1 sm:px-10 lg:px-30 2xl:px-37.5'>
								<h5
									className={cn(
										'text-white font-bold leading-[150%]',
										'text-2xl lg:text-3xl 2xl:text-[38px]'
									)}
								>
									{item.title}
								</h5>

								{item.description && (
									<p
										className={cn(
											'hidden lg:block text-grey-60 font-medium leading-[150%]',
											'text-sm lg:text-base 2xl:text-lg'
										)}
									>
										{item.description}
									</p>
								)}
							</div>

							<div className='w-full flex flex-col justify-center lg:flex-row gap-5 items-center'>
								<Button
									variant='primary'
									onClick={() => setIsPlaying(true)}
									disabled={!youtubeId || isPlaying}
									startIcon={
										<PlayIcon
											color='#fff'
											className='size-6 2xl:size-7'
										/>
									}
									className='w-full lg:w-fit'
								>
									Play Now
								</Button>

								<HeroGalleryListItemButtons />
							</div>
						</div>

						<Switcher
							type='icon'
							className='bg-transparent border-none justify-between'
							activeIndex={activeIndex}
							totalItems={totalItems}
							onPrev={onPrev}
							onNext={onNext}
							onDotClick={onDotClick}
						/>
					</div>
				</div>
			</div>
		</li>
	)
}
