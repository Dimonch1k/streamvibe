'use client'

export interface ArrowLeftIconProps {
	color: string
	className?: string
}

export function ArrowLeftIcon({ color, className }: ArrowLeftIconProps) {
	return (
		<svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M22.75 14L5.25 14M13.125 6.125L5.25 14L13.125 21.875'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
