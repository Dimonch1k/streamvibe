'use client'

import { cn } from '@/lib/utils/cn'

export interface PageContainerProps {
	children: React.ReactNode
	className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
	return (
		<div
			className={cn(
				'w-full flex flex-col gap-12.5 lg:gap-20 2xl:gap-25',
				className
			)}
		>
			{children}
		</div>
	)
}
