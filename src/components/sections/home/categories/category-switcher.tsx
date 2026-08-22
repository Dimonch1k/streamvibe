'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/buttons/button'
import { ArrowRightIcon } from '@/components/ui/icons'
import { ArrowLeftIcon } from '@/components/ui/icons/arrow-left-icon'
import { SelectorContainer } from '@/components/ui/selector-container'

import { cn } from '@/lib/utils'

export interface CategorySwitcherProps {
	className?: string
}

export function CategorySwitcher({ className }: CategorySwitcherProps) {
	const [activeIndex, setActiveIndex] = useState(0)

	const prev = () => {
		setActiveIndex(prev => (prev === 0 ? 3 : prev - 1))
	}

	const next = () => {
		setActiveIndex(prev => (prev === 3 ? 0 : prev + 1))
	}

	return (
		<SelectorContainer
			className={cn('items-center gap-3 2xl:gap-4', className)}
		>
			<Button
				variant='default'
				size='square'
				onClick={() => prev()}
			>
				<ArrowLeftIcon color='#fff' />
			</Button>

			<ul className='flex gap-0.75'>
				{[1, 2, 3, 4].map((_, index) => (
					<span
						key={index}
						className={cn(
							'bg-black-20 hover:bg-black-25 transition-colors duration-100 ease-linear w-4 h-1 cursor-pointer rounded-full',
							activeIndex === index &&
								'bg-red-45 hover:bg-red-45 w-5.75 cursor-default'
						)}
						onClick={() => setActiveIndex(index)}
					/>
				))}
			</ul>

			<Button
				variant='default'
				size='square'
				onClick={() => next()}
			>
				<ArrowRightIcon color='#fff' />
			</Button>
		</SelectorContainer>
	)
}
