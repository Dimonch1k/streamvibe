'use client'

import Image from 'next/image'

import { Section } from '@/components/ui/section'

import { cn } from '@/lib/utils'

import { HeroText } from './hero-text'

export function HeroSection() {
	return (
		<Section
			id='hero'
			className={cn(
				'bg-linear-to-b from-black-08 to-black-08/0',
				'-mt-27 md:-mt-23 lg:-mt-27 2xl:-mt-34'
			)}
		>
			<Image
				unoptimized
				priority
				src='https://lgozghbelutpceewvirl.supabase.co/storage/v1/object/public/images/hero.png'
				alt='Hero'
				className='flex-1 w-full h-auto object-contain'
				width={1920}
				height={860}
				draggable={false}
			/>

			<HeroText />
		</Section>
	)
}
