'use client'

import {
	Checkbox as CheckboxPrimitive,
	composeRenderProps,
	type CheckboxProps
} from 'react-aria-components'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({ className, children, ...props }: CheckboxProps) {
	return (
		<CheckboxPrimitive
			data-slot='checkbox'
			className={cn(
				'peer relative flex size-6! 2xl:size-7! shrink-0 items-center justify-center rounded-sm border border-black-15 transition-colors outline-none cursor-pointer group-has-disabled/field:opacity-50 group-has-focus-visible/field-label:ring-0 group-has-focus-visible/field-label:not-data-checked:border-black-15 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-black-20 focus-visible:ring-3 focus-visible:ring-black-20/50 aria-invalid:border-red-45 aria-invalid:ring-3 aria-invalid:ring-red-45/20 aria-invalid:aria-checked:border-red-45 data-focus-visible:border-black-20 data-focus-visible:ring-3 data-focus-visible:ring-black-20/50 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:border-black-30 data-checked:bg-black-06 data-checked:text-white group-has-focus-visible/field-label:data-checked:border-black-30 data-selected:border-black-30 data-selected:bg-black-06 data-selected:text-white data-invalid:data-selected:border-red-45',
				className
			)}
			{...props}
		>
			{composeRenderProps(
				children,
				(children, { isSelected, isIndeterminate }) => (
					<>
						<span
							data-slot='checkbox-indicator'
							className='grid place-content-center text-current transition-none [&>svg]:size-3.5 2xl:[&>svg]:size-4.5'
						>
							{(isSelected || isIndeterminate) && <CheckIcon />}
						</span>
						{children}
					</>
				)
			)}
		</CheckboxPrimitive>
	)
}

export { Checkbox }
