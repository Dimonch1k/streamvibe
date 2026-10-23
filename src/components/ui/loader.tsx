'use client'

import { Loader as LoaderIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface LoaderProps {
	className?: string
}

export function Loader({ className }: LoaderProps) {
	return <LoaderIcon className={cn('animate-spin size-5', className)} />
}
