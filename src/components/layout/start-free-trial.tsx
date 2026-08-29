'use client'

import Image from 'next/image'

import { Button } from '@/components/ui/buttons/button'

import { useScreenType } from '@/hooks/useScreenType'

import { cn } from '@/lib/utils'

export function StartFreeTrial() {
	const screenType = useScreenType()

	return (
		<div
			className={cn(
				'w-full relative overflow-hidden',
				'flex flex-col items-center md:flex-row md:items-center',
				'gap-12.5 md:gap-25 rounded-xl',
				'px-7.5 py-12.5 md:px-15 md:py-20 2md:px-20 2md:py-25',
				'border border-black-15'
			)}
		>
			<div className='z-10 flex-1 flex flex-col gap-2.5 md:gap-3.5 2md:gap-5 text-center md:text-start'>
				<h2
					className={cn(
						'w-full font-bold leading-[150%]',
						'text-2xl lg:text-[28px] 2xl:text-5xl'
					)}
				>
					Start your free trial today!
				</h2>

				<p
					className={cn(
						'w-full text-grey-60 leading-[150%]',
						'text-sm lg:text-base 2xl:text-lg'
					)}
				>
					This is a clear and concise call to action that encourages users to
					sign up for a free trial of StreamVibe.
				</p>
			</div>

			<Button
				variant='primary'
				className='z-10'
			>
				Start a Free Trial!
			</Button>

			{screenType === 'desktop' || screenType === 'laptop' ? (
				<Image
					priority
					src='/start-free-trial-desktop.png'
					alt='Start free trial'
					className='z-0 top-0 left-0 right-0 bottom-0 absolute flex-1 w-full h-full object-cover'
					width={1600}
					height={330}
					draggable={false}
				/>
			) : (
				<Image
					priority
					src='/start-free-trial-mobile.png'
					alt='Start free trial'
					className='z-0 top-0 left-0 right-0 bottom-0 absolute flex-1 w-full h-full object-cover'
					width={1400}
					height={700}
					draggable={false}
				/>
			)}
		</div>
	)
}
