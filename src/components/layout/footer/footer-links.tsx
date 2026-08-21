'use client'

import Link from 'next/link'

import { footerLinksData } from '@/data/footer.data'

import { cn } from '@/lib/utils'

import { FooterLink } from './footer-link'

export function FooterLinks() {
	return (
		<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6'>
			<ul className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-7.5'>
				{footerLinksData.map((item, i1) => (
					<li
						key={i1}
						className='flex-1 flex flex-col gap-4'
					>
						<h3 className='text-lg 2xl:text-xl text-white font-semibold'>
							{item.title}
						</h3>
						<ul
							className={cn(
								'flex flex-col text-sm lg:text-base 2xl:text-lg text-grey-35 gap-2 lg:gap-2.5 2xl:gap-3.5',
								item.iconButtons && 'flex-row gap-2.5 lg:gap-3.5'
							)}
						>
							{item.list &&
								item.list.map((item, i) => (
									<li key={i}>
										<FooterLink
											href={item.href}
											label={item.label}
										/>
									</li>
								))}

							{item.iconButtons &&
								item.iconButtons.map((item, i) => (
									<li key={i}>
										<Link
											href={item.href}
											className='flex p-3 lg:p-4 border border-white/15 bg-white/10 hover:bg-white/20 transition-colors duration-100 ease-linear rounded-md lg:rounded-lg'
											title={item.label}
										>
											{item.icon}
										</Link>
									</li>
								))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
