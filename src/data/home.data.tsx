import {
	GamingConsolesIcon,
	LaptopsIcon,
	SmartphonesIcon,
	SmartTvIcon,
	TabletIcon,
	VrHeadsetsIcon
} from '@/components/ui/icons/home'

import type { IDevice } from '@/types/sections/home.interface'

const deviceColor = '#e50000'
const deviceIconClassName = 'size-6 lg:size-7.5 2xl:size-10'

export const devicesListData: IDevice[] = [
	{
		icon: (
			<SmartphonesIcon
				color={deviceColor}
				className={deviceIconClassName}
			/>
		),
		title: 'Smartphones',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
	},
	{
		icon: (
			<TabletIcon
				color={deviceColor}
				className={deviceIconClassName}
			/>
		),
		title: 'Tablets',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
	},
	{
		icon: (
			<SmartTvIcon
				color={deviceColor}
				className={deviceIconClassName}
			/>
		),
		title: 'Smart TV',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
	},
	{
		icon: (
			<LaptopsIcon
				color={deviceColor}
				className={deviceIconClassName}
			/>
		),
		title: 'Laptops',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
	},
	{
		icon: (
			<GamingConsolesIcon
				color={deviceColor}
				className={deviceIconClassName}
			/>
		),
		title: 'Gaming Consoles',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
	},
	{
		icon: (
			<VrHeadsetsIcon
				color={deviceColor}
				className={deviceIconClassName}
			/>
		),
		title: 'VR Headsets',
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
	}
]
