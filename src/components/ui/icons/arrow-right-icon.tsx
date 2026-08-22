'use client'

export interface ArrowRightIconProps {
	color: string
	className?: string
}

export function ArrowRightIcon({ color, className }: ArrowRightIconProps) {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M4.5 12L19.5 12M12.75 18.75L19.5 12L12.75 5.25'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
