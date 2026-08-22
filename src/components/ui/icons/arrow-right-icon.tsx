'use client'

export interface ArrowRightIconProps {
	color: string
	className?: string
}

export function ArrowRightIcon({ color, className }: ArrowRightIconProps) {
	return (
		<svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M5.625 15L24.375 15M15.9375 23.4375L24.375 15L15.9375 6.5625'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
