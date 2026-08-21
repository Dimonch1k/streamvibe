'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useScreenType } from '@/hooks/useScreenType'

import { ROUTES } from '@/constants/routes.constants'

export interface LogoProps {
	closeMenu?: () => void
}

export function Logo({ closeMenu }: LogoProps) {
	const screenType = useScreenType()

	return (
		<Link
			href={ROUTES.HOME}
			onClick={closeMenu}
		>
			{screenType === 'desktop' && (
				<Image
					src='/logo-desktop.svg'
					alt='StreamVibe Desktop Logo'
					width={200}
					height={60}
					priority
				/>
			)}
			{screenType === 'laptop' && (
				<Image
					src='/logo-laptop.svg'
					alt='StreamVibe Laptop Logo'
					width={166}
					height={50}
					priority
				/>
			)}
			{screenType === 'mobile' && (
				<Image
					src='/logo-mobile.svg'
					alt='StreamVibe Mobile Logo'
					width={116}
					height={35}
					priority
				/>
			)}
		</Link>
	)
}
