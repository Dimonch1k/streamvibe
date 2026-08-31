'use client'

import * as React from 'react'
import {
	composeRenderProps,
	Input as InputPrimitive
} from 'react-aria-components'

import { cn } from '@/lib/utils'

export function Input({
	className,
	type,
	...props
}: React.ComponentProps<typeof InputPrimitive>) {
	return (
		<InputPrimitive
			type={type}
			data-slot='input'
			className={composeRenderProps(className, className =>
				cn(
					'h-auto w-full min-w-0 rounded-md 2xl:rounded-lg border border-black-15 bg-black-08 p-4 2xl:p-5 text-sm 2xl:text-lg transition-colors outline-none placeholder:text-grey-60 focus-visible:border-black-20 focus-visible:ring-3 focus-visible:ring-black-20/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-black-08/50 disabled:opacity-50 leading-[150%] font-inter',
					className
				)
			)}
			{...props}
		/>
	)
}
