import { forwardRef } from 'react'
import { AlignRight, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

export interface MobileMenuButtonProps {
	isMenuOpen: boolean
	toggleMenu: () => void
}

export const MobileMenuButton = forwardRef<
	HTMLButtonElement,
	MobileMenuButtonProps
>(({ isMenuOpen, toggleMenu }, ref) => {
	return (
		<Button
			ref={ref}
			onClick={toggleMenu}
			size='icon'
			className='md:hidden ring-3'
		>
			{isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
		</Button>
	)
})

MobileMenuButton.displayName = 'MobileMenuButton'
