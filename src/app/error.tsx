'use client'

import { Home, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/buttons/button'

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
					type='button'
					variant='outline'
					onClick={reset}
					className='border-orange-50 text-orange-50 hover:bg-orange-50 hover:text-grey-15 transition-colors flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg'
				>
					<RefreshCcw size={18} />
					Try Again
				</Button>

				<Link href={ROUTES.HOME}>
					<Button
						type='button'
						variant='outline'
						className='border-orange-50 text-orange-50 hover:bg-orange-50 hover:text-grey-15 transition-colors flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg'
					>
						<Home size={18} />
						Go Home
					</Button>
				</Link>
			</div>
		</div>
	)
}
