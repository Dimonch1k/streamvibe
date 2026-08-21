'use client'

import type { IDeviceItem } from '@/types/sections/device.interface'

import { cn } from '@/lib/utils'

export interface DeviceListItemProps {
	item: IDeviceItem
	className?: string
}

export function DeviceListItem({ item, className }: DeviceListItemProps) {
	return (
		<li
			className={cn(
				'bg-linear-to-bl from-[#1f0f0f] via-black-06 via-45% to-black-06 flex flex-col',
				'gap-6 2xl:gap-7.5',
				'p-6 lg:p-10 2xl:p-12.5',
				'rounded-[10px] 2xl:rounded-xl border border-black-15',
				className
			)}
		>
			<div className='flex items-center gap-2.5 lg:gap-3 2xl:gap-4'>
				<div
					className={cn(
						'aspect-square bg-black-08 border border-black-12',
						'p-2.5 lg:p-3 2xl:p-4',
						'rounded-lg lg:rounded-[10px] 2xl:rounded-xl'
					)}
				>
					{item.icon}
				</div>

				<h5
					className={cn(
						'text-white font-semibold leading-[150%]',
						'text-lg lg:text-xl 2xl:text-2xl'
					)}
				>
					{item.title}
				</h5>
			</div>

			<p
				className={cn(
					'text-grey-60 font-normal leading-[150%]',
					'text-sm lg:text-base 2xl:text-lg'
				)}
			>
				{item.description}
			</p>
		</li>
	)
}
