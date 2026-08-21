'use client'

import { footerBottomLinks } from '@/data/footer.data'

import { FooterLink } from './footer-link'

export function FooterBottom() {
	return (
		<div className='w-full flex flex-col gap-5 2xl:gap-6 text-grey-60'>
			<div className='w-full h-px bg-black-15' />

			<div className='w-full flex flex-col sm:flex-row justify-between gap-5 sm:gap-0'>
				<p className='text-grey-60 font-normal text-xs md:text-sm lg:text-base 2xl:text-lg leading-[150%]'>
					@2023 StreamVibe, All Rights Reserved
				</p>

				<ul className='flex divide-x divide-black-15'>
					{footerBottomLinks.map((item, index) => (
						<li
							key={index}
							className='flex px-5'
						>
							<FooterLink
								href={item.href}
								label={item.label}
								className='text-xs md:text-sm lg:text-base'
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
