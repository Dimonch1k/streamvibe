'use client'

import { cn } from '@/lib/utils'

export interface LegendProps {
	header: React.ReactNode
	className?: string
	children: React.ReactNode
}

export function Legend({ header, className, children }: LegendProps) {
	return (
		<div
			className={cn(
				'relative w-full flex flex-col gap-20 2xl:gap-25',
				'border border-black-15 rounded-xl',
				'px-10 2xl:px-12.5 py-10 2xl:py-12.5',
				className
			)}
		>
			<span className='absolute -top-4 2xl:-top-5 left-10 2xl:left-12.5 w-fit bg-red-45 rounded-md 2xl:rounded-lg px-5 py-2 2xl:px-6 2xl:py-2.5 font-semibold text-base 2xl:text-xl'>
				{header}
			</span>

			{children}
		</div>
	)
}
