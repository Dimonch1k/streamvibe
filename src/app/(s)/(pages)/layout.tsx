import { StartFreeTrial } from '@/components/layout/start-free-trial'

export default function StreamVibeLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<main className='flex-1 px-6 py-20 lg:px-20 lg:py-30 2xl:px-40.5 2xl:py-37.5'>
				<div className='w-full max-w-400 mx-auto flex flex-col gap-20 lg:gap-30 2xl:gap-37.5'>
					{children}
					<StartFreeTrial />
				</div>
			</main>
		</>
	)
}
