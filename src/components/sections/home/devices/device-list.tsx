'use client'

import type { IDeviceItem } from '@/types/sections/device.interface'

import { cn } from '@/lib/utils'

import { DeviceListItem } from './device-list-item'

export interface DeviceListProps {
	list: IDeviceItem[]
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
