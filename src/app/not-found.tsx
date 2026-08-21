'use client'

import { Home } from 'lucide-react'
import Link from 'next/link'

import { ROUTES } from '@/constants/routes.constants'

import { cn } from '@/lib/utils/cn'

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center text-white px-4'>
			<h1 className='text-[8rem] font-extrabold text-orange-50 drop-shadow-lg'>
				404
			</h1>
			<h2 className='mt-4 text-3xl font-semibold text-grey-15'>
				Page Not Found
			</h2>
			<p className='mt-2 max-w-md text-center text-grey-60'>
				Sorry, the page you are looking for doesn’t exist or may have been
				moved. Go back to the homepage to continue browsing.
			</p>

			<Link
				href={ROUTES.HOME}
				className={cn(
					'text-sm lg:text-lg leading-[150%] font-medium',
					'mt-8 px-6 py-3',
					'text-orange-50 hover:text-white bg-transparent hover:bg-orange-50 border-2 border-orange-50',
					'rounded-xl shadow-lg inline-flex items-center justify-center gap-2',
					'transition-colors duration-300 ease-linear'
				)}
			>
				<Home size={18} />
				Go Home
			</Link>
		</div>
	)
}
