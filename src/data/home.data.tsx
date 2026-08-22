import {
	GamingConsolesIcon,
	LaptopsIcon,
	SmartphonesIcon,
	SmartTvIcon,
	TabletIcon,
	VrHeadsetsIcon
} from '@/components/ui/icons/home'

import type { ICategoryItem } from '@/types/sections/category.interface'
import type { IDeviceItem } from '@/types/sections/device.interface'
import type { IFaqItem } from '@/types/sections/faq.interface'

const deviceColor = '#e50000'
const deviceIconClassName = 'size-6 lg:size-7.5 2xl:size-10'

export const categoriesListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/home/category-action.png',
		title: 'Action'
	},
	{
		href: '#',
		image: '/home/category-adventure.png',
		title: 'Adventure'
	},
	{
		href: '#',
		image: '/home/category-comedy.png',
		title: 'Comedy'
	},
	{
		href: '#',
		image: '/home/category-drama.png',
		title: 'Drama'
	},
	{
		href: '#',
		image: '/home/category-horror.png',
		title: 'Horror'
	}
]

export const devicesListData: IDeviceItem[] = [
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

export const faqListData: IFaqItem[] = [
	{
		question: 'What is StreamVibe?',
		answer:
			'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
	},
	{
		question: 'How much does StreamVibe cost?',
		answer: ''
	},
	{
		question: 'What content is available on StreamVibe?',
		answer: ''
	},
	{
		question: 'How can I watch StreamVibe?',
		answer: ''
	},
	{
		question: 'How do I sign up for StreamVibe?',
		answer: ''
	},
	{
		question: 'What is the StreamVibe free trial?',
		answer: ''
	},
	{
		question: 'How do I contact StreamVibe customer support?',
		answer: ''
	},
	{
		question: 'What are the StreamVibe payment methods?',
		answer: ''
	}
]
