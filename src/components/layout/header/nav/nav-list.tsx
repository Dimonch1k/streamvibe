'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import type { INavItem } from '@/types/nav.interface'

import { cn } from '@/lib/utils/cn'

import { NavListItem } from './nav-list-item'

export interface NavListProps {
	list: INavItem[]
	closeMenu?: () => void
	className?: string
}

export function NavList({ list, closeMenu, className }: NavListProps) {
	const pathname = usePathname()

	return (
		<ul
			className={cn(
				'flex items-center justify-center',
				'bg-black-06 p-2 2xl:p-2.5',
				'ring-3 2xl:ring-4 ring-black-12 rounded-[10px] 2xl:rounded-xl',
				className
			)}
		>
			{list.map((item, index) => {
				const isActive = !!match(item.href)(pathname)
				return (
					<NavListItem
						key={index}
						item={item}
						isActive={isActive}
						closeMenu={closeMenu}
					/>
				)
			})}
		</ul>
	)
}
