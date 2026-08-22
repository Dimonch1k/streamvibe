'use client'

import { RefObject, useRef, useState } from 'react'
import { Bell, Search } from 'lucide-react'

import { Button } from '@/components/ui/buttons/button'

import { useClickOutside } from '@/hooks/useClickOutside'

import { navItemsData } from '@/data/nav-items.data'

import { Logo } from './logo'
import { MobileMenuButton } from './mobile-menu-button'
import { NavList } from './nav/nav-list'

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const mobileMenuRef = useRef<HTMLDivElement>(null)
	const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

	useClickOutside(
		[
			mobileMenuRef as RefObject<HTMLElement>,
			mobileMenuButtonRef as RefObject<HTMLElement>
		],
		() => setIsMobileMenuOpen(false)
	)

	const closeMenu = () => setIsMobileMenuOpen(false)
	const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

	return (
		<>
			{/* Sticky navigation */}
			<header className='sticky top-0 z-50 w-full'>
				<div className='relative px-6 py-4 lg:px-20 lg:py-6 2xl:px-40.5 2xl:py-7.5'>
					{/* Desktop Navigation */}
					<div className='hidden md:flex w-full max-w-400 mx-auto'>
						<div className='w-full flex items-center justify-between gap-5 lg:gap-12.5'>
							<Logo closeMenu={closeMenu} />
							<NavList
								list={navItemsData}
								closeMenu={closeMenu}
								className='hidden md:flex'
							/>

							<div className='flex items-center gap-3.5 2xl:gap-7.5'>
								<Button
									size='none'
									variant='ghost'
								>
									<Search className='size-6 2xl:size-8.5 stroke-[1.2px]' />
								</Button>
								<Button
									size='none'
									variant='ghost'
								>
									<Bell className='size-6 2xl:size-8.5 stroke-[1.2px]' />
								</Button>
							</div>
						</div>
					</div>

					{/* Mobile Navigation */}
					<div className='flex md:hidden justify-between items-center py-3.5 lg:pt-4 lg:pb-5 2xl:py-6'>
						<Logo closeMenu={closeMenu} />
						<MobileMenuButton
							ref={mobileMenuButtonRef}
							isMenuOpen={isMobileMenuOpen}
							toggleMenu={toggleMenu}
						/>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div
						ref={mobileMenuRef}
						className='absolute top-20 md:hidden w-full py-2'
					>
						<div className='max-w-400 mx-auto px-4'>
							<NavList
								list={navItemsData}
								closeMenu={closeMenu}
								className='flex-col xs:flex-row'
							/>
						</div>
					</div>
				)}
			</header>
		</>
	)
}
