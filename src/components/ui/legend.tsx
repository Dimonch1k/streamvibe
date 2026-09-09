'use client'

import { cn } from '@/lib/utils'

import { Button } from './button'

export interface LegendProps {
	header: React.ReactNode
	className?: string
	children: React.ReactNode
	onClick: () => void
}

export function Legend({ header, className, children, onClick }: LegendProps) {
	return (
		<div
			className={cn(
				'relative w-full flex flex-col gap-20 2xl:gap-25',
				'border border-black-15 rounded-xl',
				'px-10 2xl:px-12.5 py-10 2xl:py-12.5',
				className
			)}
		>
			<Button
				variant='primary'
				className='absolute -top-4 2xl:-top-5 left-10 2xl:left-12.5 px-5 py-2 2xl:px-6 2xl:py-2.5 text-base 2xl:text-xl'
				onClick={onClick}
			>
				{header}
			</Button>

			{children}
		</div>
	)
}
