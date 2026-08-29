'use client'

import React, { useState } from 'react'

import { useScreenType } from '@/hooks/useScreenType'

import type { IFaqItem } from '@/types/sections/faq.interface'

import { cn } from '@/lib/utils'

import { FaqListItem } from './faq-list-item'

export interface FaqListProps {
	list: IFaqItem[]
	className?: string
}

export function FaqList({ list, className }: FaqListProps) {
	const screenType = useScreenType()
	const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

	if (screenType === 'mobile') {
		return (
			<ul className={cn('flex flex-col grid-cols-1 xl:grid-cols-2', className)}>
				{list.map(item => (
					<React.Fragment key={item.number}>
						<FaqListItem
							number={item.number}
							item={item}
							isOpen={openFaqIndex === item.number}
							onToggle={() =>
								setOpenFaqIndex(
									openFaqIndex === item.number ? null : item.number
								)
							}
						/>

						{item.number < list.length && (
							<div className='w-full h-px! bg-linear-to-r from-red-45/0 via-red-45 via-17% to-red-45/0' />
						)}
					</React.Fragment>
				))}
			</ul>
		)
	}

	return (
		<div className='w-full flex gap-10 2xl:gap-20'>
			<ul className={cn('w-full flex flex-col', className)}>
				{list.slice(0, Math.ceil(list.length / 2)).map(item => (
					<React.Fragment key={item.number}>
						<FaqListItem
							number={item.number}
							item={item}
							isOpen={openFaqIndex === item.number}
							onToggle={() =>
								setOpenFaqIndex(
									openFaqIndex === item.number ? null : item.number
								)
							}
						/>
						{item.number < list.length / 2 && (
							<div className='w-full h-px! bg-linear-to-r from-red-45/0 via-red-45 via-17% to-red-45/0' />
						)}
					</React.Fragment>
				))}
			</ul>

			<ul className={cn('w-full flex flex-col', className)}>
				{list.slice(Math.ceil(list.length / 2)).map(item => (
					<React.Fragment key={item.number}>
						<FaqListItem
							number={item.number}
							item={item}
							isOpen={openFaqIndex === item.number}
							onToggle={() =>
								setOpenFaqIndex(
									openFaqIndex === item.number ? null : item.number
								)
							}
						/>
						{item.number < list.length && (
							<div className='w-full h-px! bg-linear-to-r from-red-45/0 via-red-45 via-17% to-red-45/0' />
						)}
					</React.Fragment>
				))}
			</ul>
		</div>
	)
}
