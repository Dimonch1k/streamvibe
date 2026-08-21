'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

export interface FooterLinkProps {
	label: string
	href: string
	className?: string
}

export function FooterLink({ label, href, className }: FooterLinkProps) {
	return (
		<Link
			href={href}
			className={cn(
				'text-nowrap text-grey-60 hover:text-grey-90 transition-colors duration-100 ease-linear font-medium text-sm lg:text-base 2xl:text-lg',
				className
			)}
		>
			{label}
		</Link>
	)
}
