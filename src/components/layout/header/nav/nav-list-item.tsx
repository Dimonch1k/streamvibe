'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/buttons/button'

import type { INavItem } from '@/types/nav.interface'

import { cn } from '@/lib/utils'

export interface NavListItemProps {
	item: INavItem
	isActive: boolean
	closeMenu?: () => void
}

export function NavListItem({ item, isActive, closeMenu }: NavListItemProps) {
	const router = useRouter()

	return (
		<li>
			<Button
				onClick={(e?: React.MouseEvent) => {
					e?.stopPropagation()
					router.push(item.href)
					closeMenu?.()
				}}
				variant={isActive ? 'default' : 'ghost'}
				className={cn(
					'font-medium',
					isActive
						? ''
						: 'hover:text-red-45 transition-colors duration-200 ease-in-out'
				)}
			>
				{item.label}
			</Button>
		</li>
	)
}
