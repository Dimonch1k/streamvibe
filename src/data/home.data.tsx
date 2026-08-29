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
		image: '/categories/category-action.png',
		title: 'Action'
	},
	{
		href: '#',
		image: '/categories/category-adventure.png',
		title: 'Adventure'
	},
	{
		href: '#',
		image: '/categories/category-comedy.png',
		title: 'Comedy'
	},
	{
		href: '#',
		image: '/categories/category-drama.png',
		title: 'Drama'
	},
	{
		href: '#',
		image: '/categories/category-horror.png',
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
		number: 1,
		question: 'What is StreamVibe?',
		answer:
			'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
	},
	{
		number: 2,
		question: 'How much does StreamVibe cost?',
		answer:
			'StreamVibe offers several pricing plans to suit your needs. You can find detailed information about our pricing on our website.'
	},
	{
		number: 3,
		question: 'What content is available on StreamVibe?',
		answer:
			'StreamVibe offers a wide range of movies and shows, including popular titles and exclusive content.'
	},
	{
		number: 4,
		question: 'How can I watch StreamVibe?',
		answer:
			'You can watch StreamVibe on any device with an internet connection, including smartphones, tablets, smart TVs, and computers.'
	},
	{
		number: 5,
		question: 'How do I sign up for StreamVibe?',
		answer:
			'You can sign up for StreamVibe by visiting our website and creating an account.'
	},
	{
		number: 6,
		question: 'What is the StreamVibe free trial?',
		answer:
			'StreamVibe offers a free trial so you can try our service before committing to a paid plan.'
	},
	{
		number: 7,
		question: 'How do I contact StreamVibe customer support?',
		answer:
			'You can contact StreamVibe customer support by visiting our website and creating an account.'
	},
	{
		number: 8,
		question: 'What are the StreamVibe payment methods?',
		answer:
			'StreamVibe accepts various payment methods, including credit cards, debit cards, and digital wallets.'
	}
]
