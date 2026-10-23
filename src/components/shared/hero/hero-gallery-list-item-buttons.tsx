'use client'

import { Button } from '@/components/ui/button'
import { LikeIcon } from '@/components/ui/icons/like-icon'
import { PlusIcon } from '@/components/ui/icons/plus-icon'
import { VolumeIcon } from '@/components/ui/icons/volume-icon'

import { cn } from '@/lib/utils'

export interface HeroGalleryListItemButtonsProps {
	className?: string
}

export function HeroGalleryListItemButtons({
	className
}: HeroGalleryListItemButtonsProps) {
	return (
		<div className={cn('flex flex-row gap-2 2xl:gap-2.5', className)}>
			<Button
				variant='icon'
				size='icon'
			>
				<PlusIcon
					color='#fff'
					className='size-6 2xl:size-7'
				/>
			</Button>

			<Button
				variant='icon'
				size='icon'
			>
				<LikeIcon
					color='#fff'
					className='size-6 2xl:size-7'
				/>
			</Button>

			<Button
				variant='icon'
				size='icon'
			>
				<VolumeIcon
					color='#fff'
					className='size-6 2xl:size-7'
				/>
			</Button>
		</div>
	)
}
