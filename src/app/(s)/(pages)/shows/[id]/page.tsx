import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAllShows, getShow } from '@/lib/utils/get-static-data'

import { Show } from './Show'

interface IShowPageProps {
	params: Promise<{ id: string }>
}

export async function generateStaticParams() {
	const shows = getAllShows()
	return shows.map(show => ({ id: show.id }))
}

export async function generateMetadata({
	params
}: IShowPageProps): Promise<Metadata> {
	const { id } = await params
	const show = await getShow(id)

	if (!show) {
		return { title: 'Show Not Found' }
	}

	return {
		title: `${show.title} | Shows`,
		description: show.description || `Watch ${show.title} seasons online.`
	}
}

export default async function ShowPage({ params }: IShowPageProps) {
	const { id } = await params
	const show = await getShow(id)

	if (!show) {
		notFound()
	}

	return <Show />
}
