'use client'

import { Section } from '@/components/ui/section'

import { devicesListData } from '@/data/home.data'

import { DeviceList } from './device-list'

export function DevicesSection() {
	return (
		<Section
			id='devices'
			title='We Provide you streaming experience across various devices.'
			description='With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'
		>
			<DeviceList list={devicesListData} />
		</Section>
	)
}
