import { ForwardedRef, ReactNode } from 'react'

import { cn } from '@/lib/utils/cn'

export interface ButtonProps {
	children: ReactNode
	type?: 'button' | 'submit' | 'reset'
	size?: 'default' | 'primary' | 'secondary' | 'icon' | 'square' | 'none'
	variant?: 'default' | 'primary' | 'secondary' | 'icon' | 'ghost' | 'none'
	startIcon?: ReactNode
	endIcon?: ReactNode
	onClick?: (e?: React.MouseEvent) => void
	disabled?: boolean
	className?: string
	title?: string
	ref?: ForwardedRef<HTMLButtonElement>
}

// Size Classes
const sizeClasses = {
	default: 'px-5 py-3 2xl:px-6 2xl:py-3.5 text-sm 2xl:text-lg',
	primary: 'px-6 py-3.5 gap-1 text-sm 2xl:text-lg',
	secondary: 'px-5 py-3 2xl:px-6 2xl:py-3.5 text-sm 2xl:text-lg',
	icon: 'p-3 2xl:p-3.5',
	square: 'p-2.5 2xl:p-3.5',
	none: ''
}

// Variant Classes
const variantClasses = {
	default:
		'bg-black-10 hover:bg-black-15 text-white ring ring-black-10 hover:ring-black-15',
	primary:
		'bg-red-45 hover:bg-red-30 text-white ring ring-red-45 hover:ring-red-30',
	secondary: 'bg-black-08 hover:bg-black-15 text-white ring ring-black-15',
	icon: 'bg-black-06 hover:bg-black-08 text-white ring ring-black-15',
	ghost: 'bg-transparent text-white hover:text-red-45',
	none: ''
}

export const Button: React.FC<ButtonProps> = ({
	children,
	type = 'button',
	size = 'default',
	variant = 'default',
	startIcon,
	endIcon,
	onClick,
	className = '',
	disabled = false,
	title,
	ref
}) => {
	return (
		<button
			className={cn(
				'w-fit flex items-center justify-center font-semibold gap-2 rounded-md md:rounded-lg transition-all duration-200 ease-linear cursor-pointer text-sm 2xl:text-lg leading-[150%] text-nowrap',
				sizeClasses[size],
				variantClasses[variant],
				className,
				disabled ? 'cursor-not-allowed opacity-50' : ''
			)}
			onClick={onClick}
			disabled={disabled}
			type={type}
			title={title}
			ref={ref}
		>
			{startIcon && <span className='flex items-center'>{startIcon}</span>}
			{children}
			{endIcon && <span className='flex items-center'>{endIcon}</span>}
		</button>
	)
}
