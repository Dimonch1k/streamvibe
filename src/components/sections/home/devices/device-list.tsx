'use client'

import type { IAboutItem } from '@/types/sections/about.interface'

import { cn } from '@/lib/utils'

import { DeviceListItem } from './device-list-item'

export interface DeviceListProps {
	list: IAboutItem[]
	className?: string
}

export function DeviceList({ list, className }: DeviceListProps) {
	return (
		<ul
			className={cn(
				'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
				'gap-5 2xl:gap-7.5',
				className
			)}
		>
			{list.map((achievement, index) => (
				<DeviceListItem
					key={index}
					item={achievement}
				/>
			))}
		</ul>
	)
}
