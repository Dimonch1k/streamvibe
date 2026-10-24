import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({
	className,
	size = 'default',
	...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
	return (
		<div
			data-slot='card'
			data-size={size}
			className={cn(
				'group/card flex flex-col overflow-hidden rounded-[10px] 2xl:rounded-xl bg-black-10 text-sm text-white ring-1 ring-black-15 p-6 lg:p-10 2xl:p-12.5 gap-2',
				className
			)}
			{...props}
		/>
	)
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-header'
			className={cn(
				'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl',
				className
			)}
			{...props}
		/>
	)
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-title'
			className={cn(
				'text-sm lg:text-base 2xl:text-lg leading-[150%] font-medium text-grey-60',
				className
			)}
			{...props}
		/>
	)
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-description'
			className={cn('text-sm leading-[150%] font-medium text-white', className)}
			{...props}
		/>
	)
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-action'
			className={cn(
				'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
				className
			)}
			{...props}
		/>
	)
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-content'
			className={cn('', className)}
			{...props}
		/>
	)
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-footer'
			className={cn('flex items-center justify-center gap-2', className)}
			{...props}
		/>
	)
}

export {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
}
