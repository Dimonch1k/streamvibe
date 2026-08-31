'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import type { IFaqItem } from '@/types/sections/faq.interface'

import { cn } from '@/lib/utils'

export interface FaqListItemProps {
	number: number
	item: IFaqItem
	className?: string
	isOpen?: boolean
	onToggle?: () => void
}

export function FaqListItem({
	number,
	item,
	className,
	isOpen,
	onToggle
}: FaqListItemProps) {
	return (
		<li
			className={cn(
				'w-full flex gap-4 cursor-pointer',
				'px-2.5 py-5 lg:p-6 2xl:px-8.5 2xl:py-7.5',
				isOpen && item.answer ? 'items-start' : 'items-center',
				className
			)}
			onClick={() => onToggle?.()}
		>
			<div className='p-3 lg:p-4 2xl:p-5 bg-black-12 border border-black-15 rounded-md lg:rounded-lg 2xl:rounded-[10px]'>
				<span className='text-base 2xl:text-xl font-semibold text-white'>
					{number.toString().padStart(2, '0')}
				</span>
			</div>

			<div className='flex-1 h-full flex justify-center flex-col gap-1'>
				<h3 className='text-lg lg:text-xl 2xl:text-[22px] font-medium leading-[150%] text-white'>
					{item.question}
				</h3>

				{isOpen && item.answer && (
					<p className='text-sm lg:text-base 2xl:text-lg leading-[150%] text-grey-60'>
						{item.answer}
					</p>
				)}
			</div>

			<Button
				size='none'
				variant='none'
			>
				{isOpen ? (
					<MinusIcon className='size-6 2xl:size-7.5' />
				) : (
					<PlusIcon className='size-6 2xl:size-7.5' />
				)}
			</Button>
		</li>
	)
}
