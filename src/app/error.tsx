'use client'

import { Home, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ROUTES } from '@/constants/routes.constants'

export default function Error({ reset }: { reset: () => void }) {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center text-white px-4'>
			<h1 className='text-[8rem] font-extrabold text-orange-50 drop-shadow-lg'>
				Oops!
			</h1>
			<h2 className='mt-4 text-3xl font-semibold text-grey-15'>
				Something went wrong
			</h2>
			<p className='mt-2 max-w-md text-center text-grey-60'>
				An unexpected error occurred. Please try again or go back to the
				homepage.
			</p>

			<div className='mt-8 flex flex-col sm:flex-row gap-4'>
				<Button
					onClick={reset}
					variant='secondary'
				>
					<RefreshCcw size={18} />
					Try Again
				</Button>

				<Link href={ROUTES.HOME}>
					<Button variant='secondary'>
						<Home size={18} />
						Go Home
					</Button>
				</Link>
			</div>
		</div>
	)
}
