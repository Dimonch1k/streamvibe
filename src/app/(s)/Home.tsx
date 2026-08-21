'use client'

import { StartFreeTrial } from '@/components/layout/start-free-trial'
import { HeroSection } from '@/components/sections/home'
import { DevicesSection } from '@/components/sections/home/devices/devices-section'

export function Home() {
	throw new Error('Test error')

	return (
		<>
			<HeroSection />

			<main className='flex-1 px-6 py-25 lg:px-20 lg:py-37.5 2xl:px-40.5 2xl:py-50'>
				<div className='w-full max-w-400 mx-auto flex flex-col gap-20 lg:gap-30 2xl:gap-37.5'>
					<DevicesSection />
					<StartFreeTrial />
				</div>
			</main>
		</>
	)
}
