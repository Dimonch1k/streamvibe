import { ROUTES } from '@/constants/routes.constants'

import type { INavItem } from '@/types/nav.interface'

export const navItemsData: INavItem[] = [
	{
		href: ROUTES.HOME,
		label: 'Home'
	},
	{
		href: ROUTES.MOVIES_AND_SHOWS,
		label: 'Movies & Shows'
	},
	{
		href: ROUTES.SUPPORT,
		label: 'Support'
	},
	{
		href: ROUTES.SUBSCRIPTIONS,
		label: 'Subscriptions'
	}
]
