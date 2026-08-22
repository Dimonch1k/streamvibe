import { cn } from '@/lib/utils/cn'

import { FooterBottom } from './footer-bottom'
import { FooterLinks } from './footer-links'

export function Footer() {
	return (
		<footer
			className={cn(
				'w-full bg-[#0F0F0F]',
				'px-4 pt-12.5 pb-5 xs:px-6 sm:px-8 md:px-12 lg:px-20 lg:pt-20 lg:pb-10 2xl:px-40.5 2xl:pt-25 2xl:pb-12.5'
			)}
		>
			<div
				className={cn(
					'w-full flex flex-col gap-12.5 lg:gap-20',
					'max-w-400 mx-auto'
				)}
			>
				<FooterLinks />
				<FooterBottom />
			</div>
		</footer>
	)
}
