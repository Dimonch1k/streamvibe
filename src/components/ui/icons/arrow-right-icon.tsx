'use client'

export interface ArrowRightIconProps {
	color: string
	className?: string
}

export function ArrowRightIcon({ color, className }: ArrowRightIconProps) {
	return (
		<svg
			width='14'
			height='13'
			viewBox='0 0 14 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M0.5 6.125L13 6.125M7.375 11.75L13 6.125L7.375 0.5'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
