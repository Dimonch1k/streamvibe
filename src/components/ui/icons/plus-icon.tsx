'use client'

export interface PlusIconProps {
	color: string
	className?: string
}

export function PlusIcon({ color, className }: PlusIconProps) {
	return (
		<svg
			width='28'
			height='28'
			viewBox='0 0 28 28'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M14 5V23M23 14L5 14'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
