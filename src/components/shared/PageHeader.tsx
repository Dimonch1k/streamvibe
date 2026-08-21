'use client'

import { cn } from '@/lib/utils/cn'

export interface PageHeaderProps {
	title: string
	description: string
	className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
	return (
		<div
			className={cn(
				'w-full flex flex-col lg:flex-row lg:items-center border-b border-white-90',
				'gap-4 lg:gap-20 2xl:gap-25',
				'pb-7.5 lg:pb-10 2xl:pb-12.5',
				className
			)}
		>
			{/* Title */}
			<h1
				className={cn(
					'w-full text-grey-15 font-semibold leading-[150%]',
					'text-[28px] lg:text-[38px] 2xl:text-5xl'
				)}
			>
				{title}
			</h1>

			{/* Description */}
			<p
				className={cn(
					'w-full text-grey-35 font-normal leading-[150%]',
					'text-sm lg:text-base 2xl:text-lg'
				)}
			>
				{description}
			</p>
		</div>
	)
}
