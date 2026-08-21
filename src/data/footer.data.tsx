import {
	FacebookIcon,
	LinkedInIcon,
	TwitterIcon
} from '@/components/ui/icons/footer'

import type { IFooterLink } from '@/types/footer.interface'

const footerIconColor = '#fff'

export const footerLinksData: IFooterLink[] = [
	{
		title: 'Home',
		list: [
			{ href: '#', label: 'Categories' },
			{ href: '#', label: 'Devices' },
			{ href: '#', label: 'Pricing' },
			{ href: '#', label: 'FAQ' }
		]
	},
	{
		title: 'Movies',
		list: [
			{ href: '#', label: 'Gernes' },
			{ href: '#', label: 'Trending' },
			{ href: '#', label: 'New Release' },
			{ href: '#', label: 'Popular' }
		]
	},
	{
		title: 'Shows',
		list: [
			{ href: '#', label: 'Gernes' },
			{ href: '#', label: 'Trending' },
			{ href: '#', label: 'New Release' },
			{ href: '#', label: 'Popular' }
		]
	},
	{
		title: 'Support',
		list: [{ href: '#', label: 'Contact Us' }]
	},
	{
		title: 'Subscription',
		list: [
			{ href: '#', label: 'Plans' },
			{ href: '#', label: 'Features' }
		]
	},
	{
		title: 'Connect With Us',
		iconButtons: [
			{
				href: '/',
				label: 'Facebook',
				icon: <FacebookIcon color={footerIconColor} />
			},
			{
				href: '/',
				label: 'LinkedIn',
				icon: <LinkedInIcon color={footerIconColor} />
			},
			{
				href: '/',
				label: 'Twitter',
				icon: <TwitterIcon color={footerIconColor} />
			}
		]
	}
]

export const footerBottomLinks = [
	{ href: '#', label: 'Terms of Use' },
	{ href: '#', label: 'Privacy Policy' },
	{ href: '#', label: 'Cookie Policy' }
]
