'use client'

export interface ArrowLeftIconProps {
	color: string
	className?: string
}

export function ArrowLeftIcon({ color, className }: ArrowLeftIconProps) {
	return (
		<svg
			width='20'
			height='18'
			viewBox='0 0 20 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M18.5 8.875L1 8.875M8.875 1L1 8.875L8.875 16.75'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
