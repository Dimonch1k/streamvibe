'use client'

export interface ArrowLeftIconProps {
	color: string
	className?: string
}

export function ArrowLeftIcon({ color, className }: ArrowLeftIconProps) {
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
				d='M19.5 12L4.5 12M11.25 5.25L4.5 12L11.25 18.75'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
