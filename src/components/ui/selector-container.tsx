'use client'

import { cn } from '@/lib/utils'

export interface SelectorContainerProps {
	className?: string
	children: React.ReactNode
}

export function SelectorContainer({
	className,
	children
}: SelectorContainerProps) {
	return (
		<div
			className={cn(
				'inline-flex rounded-[10px] 2xl:rounded-xl bg-black-06 p-3 2xl:p-4 border border-black-12',
				className
			)}
		>
			{children}
		</div>
	)
}
