import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getMedium } from '@/lib/media/actions'

import { Show } from './Show'

interface IShowPageProps {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({
	params
}: IShowPageProps): Promise<Metadata> {
	const { slug } = await params
	const show = await getMedium(slug)

	if (!show) {
		return { title: 'Show Not Found' }
	}

	return {
		title: `${show.title} | Show`,
		description: show.description || `Watch ${show.title || 'show'} online now.`
	}
}

export default async function ShowPage({ params }: IShowPageProps) {
	const { slug } = await params
	const show = await getMedium(slug)

	if (!show) {
		notFound()
	}

	return <Show show={show} />
}
