'use client'

import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@/components/ui/icons'
import { ArrowLeftIcon } from '@/components/ui/icons/arrow-left-icon'
import { SelectorContainer } from '@/components/ui/selector-container'

import { cn } from '@/lib/utils'

export interface SwitcherProps {
	type?: 'default' | 'icon'
	className?: string
	activeIndex: number
	totalItems: number
	onPrev?: () => void
	onNext?: () => void
	onDotClick?: (index: number) => void
}

export function Switcher({
	type = 'default',
	className,
	activeIndex,
	totalItems,
	onPrev,
	onNext,
	onDotClick
}: SwitcherProps) {
	return (
		<SelectorContainer
			className={cn('items-center gap-3 2xl:gap-4', className)}
		>
			<Button
				variant={type === 'icon' ? 'icon' : 'default'}
				size='square'
				onClick={onPrev}
			>
				<ArrowLeftIcon color='#fff' />
			</Button>

			<ul className='flex gap-0.75'>
				{Array.from({ length: totalItems }).map((_, index) => (
					<span
						key={index}
						className={cn(
							'bg-black-20 hover:bg-black-25 transition-colors duration-100 ease-linear w-4 h-1 cursor-pointer rounded-full',
							activeIndex === index &&
								'bg-red-45 hover:bg-red-45 w-5.75 cursor-default'
						)}
						onClick={() => onDotClick?.(index)}
					/>
				))}
			</ul>

			<Button
				variant={type === 'icon' ? 'icon' : 'default'}
				size={type === 'icon' ? 'icon' : 'square'}
				onClick={onNext}
			>
				<ArrowRightIcon color='#fff' />
			</Button>
		</SelectorContainer>
	)
}
