'use client'

import * as React from 'react'
import {
	composeRenderProps,
	TextArea as TextareaPrimitive
} from 'react-aria-components'

import { cn } from '@/lib/utils'

function Textarea({
	className,
	...props
}: React.ComponentProps<typeof TextareaPrimitive>) {
	return (
		<TextareaPrimitive
			data-slot='textarea'
			className={composeRenderProps(className, className =>
				cn(
					'flex field-sizing-content min-h-16 w-full rounded-lg border border-black-15 bg-transparent px-2.5 py-2 text-sm 2xl:text-lg transition-colors outline-none placeholder:text-grey-60 focus-visible:border-black-20 focus-visible:ring-3 focus-visible:ring-black-20/50 disabled:cursor-not-allowed disabled:bg-black-15/50 disabled:opacity-50 leading-[150%] font-inter',
					className
				)
			)}
			{...props}
		/>
	)
}

export { Textarea }
