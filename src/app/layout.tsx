import './globals.css'

import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'

import { SEO_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

import { cn } from '@/lib/utils/cn'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin']
})

const manrope = Manrope({
	variable: '--font-manrope',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SEO_DESCRIPTION,
	openGraph: {
		title: SITE_NAME,
		description: SEO_DESCRIPTION,
		images: '/logo-icon.svg'
	},
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
	)
}
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/logo-icon.svg'
					sizes='any'
				/>
			</head>
			<body className={cn(inter.variable, manrope.variable, 'antialiased')}>
				{children}

				{/* Toast notifications */}
				<Toaster
					position='top-right'
					toastOptions={{
						duration: 4000
					}}
				/>
			</body>
		</html>
	)
}
