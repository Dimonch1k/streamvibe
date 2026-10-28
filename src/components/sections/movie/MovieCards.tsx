'use client'

import { useRef, type ReactNode } from 'react'
import { Calendar, Languages, LayoutGrid, Plus, Star } from 'lucide-react'

import { Badge, Button } from '@/components/ui'
import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@/components/ui/icons'

import type { MediaDetailItem } from '@/lib/media/types'
import { cn } from '@/lib/utils'

export interface MovieCardsProps {
	media: MediaDetailItem
	className?: string
}

const imageUrl = (path: string | null) => {
	if (!path) return null
	if (/^https?:\/\//i.test(path)) return path
	const base = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_IMAGES_URL
	if (!base) return null
	return `${base}/${path.split('/').map(encodeURIComponent).join('/')}`
}

function SectionLabel({ children }: { children: ReactNode }) {
	return (
		<p className='mb-3 text-sm font-medium text-grey-60 2xl:text-base'>
			{children}
		</p>
	)
}

function Stars({ value }: { value: number }) {
	const safeValue = Math.max(0, Math.min(5, value))
	return (
		<span
			className='inline-flex items-center gap-px'
			aria-label={`${safeValue} out of 5 stars`}
		>
			{Array.from({ length: 5 }, (_, index) => {
				const fill = safeValue - index
				return (
					<span
						className='relative inline-flex'
						key={index}
					>
						<StarIcon
							color='var(--color-grey-60)'
							className='size-4 2xl:size-5'
						/>
						{fill >= 1 ? (
							<StarIcon
								color='var(--color-red-45)'
								className='absolute inset-0 size-4 2xl:size-5'
							/>
						) : fill > 0 ? (
							<span className='absolute inset-y-0 left-0 w-1/2 overflow-hidden'>
								<StarIcon
									color='var(--color-red-45)'
									className='size-4 max-w-none 2xl:size-5'
								/>
							</span>
						) : null}
					</span>
				)
			})}
		</span>
	)
}

function PersonCard({ person }: { person: MediaDetailItem['people'][number] }) {
	const src = imageUrl(person.photoPath)
	return (
		<div className='flex min-w-0 items-center gap-3 rounded-[10px] border border-black-15 bg-black-06 p-3'>
			{src ? (
				<img
					src={src}
					alt=''
					className='size-14 shrink-0 rounded-lg object-cover'
					loading='lazy'
				/>
			) : (
				<div
					className='size-14 shrink-0 rounded-lg bg-black-15'
					aria-hidden='true'
				/>
			)}
			<div className='min-w-0'>
				<p className='truncate font-medium'>{person.name}</p>
				{person.location && (
					<p className='truncate text-grey-60'>{person.location}</p>
				)}
			</div>
		</div>
	)
}

export function MovieCards({ media, className }: MovieCardsProps) {
	const castRef = useRef<HTMLDivElement>(null)
	const reviewRef = useRef<HTMLDivElement>(null)
	const cast = media.people.filter(person => person.role === 'actor')
	const directors = media.people.filter(person => person.role === 'director')
	const music = media.people.filter(person => person.role === 'music')

	const scroll = (ref: typeof castRef, direction: number) => {
		ref.current?.scrollBy({
			left: direction * ref.current.clientWidth * 0.8,
			behavior: 'smooth'
		})
	}

	console.log(media)

	return (
		<div
			className={cn(
				'grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(340px,1fr)] lg:items-stretch',
				className
			)}
		>
			{media.description && (
				<Card className='lg:col-start-1 lg:row-start-1'>
					<CardHeader>
						<CardTitle>Description</CardTitle>
					</CardHeader>
					<CardContent className='text-base leading-relaxed 2xl:text-lg'>
						{media.description}
					</CardContent>
				</Card>
			)}

			<Card className='lg:col-start-2 lg:row-start-1 lg:row-span-3 gap-5 lg:gap-6 2xl:gap-7.5'>
				{media.released_year != null && (
					<section>
						<SectionLabel>
							<span className='inline-flex items-center gap-1.5'>
								<Calendar className='size-4 2xl:size-5' />
								Released Year
							</span>
						</SectionLabel>
						<p>{media.released_year}</p>
					</section>
				)}

				<section>
					<SectionLabel>
						<span className='inline-flex items-center gap-1.5'>
							<Languages className='size-4 2xl:size-5' />
							Available Languages
						</span>
					</SectionLabel>
					{media.languages.length ? (
						<div className='flex flex-wrap gap-2'>
							{media.languages.map(language => (
								<Badge
									key={language}
									variant='primary'
								>
									{language}
								</Badge>
							))}
						</div>
					) : (
						<p className='text-grey-60'>No languages listed</p>
					)}
				</section>

				{media.ratings.length > 0 && (
					<section>
						<SectionLabel>
							<span className='inline-flex items-center gap-1.5'>
								<Star className='size-4 2xl:size-5' />
								Ratings
							</span>
						</SectionLabel>
						<div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
							{media.ratings.map(rating => (
								<div
									key={rating.source}
									className='rounded-lg border border-black-15 bg-black-06 p-3'
								>
									<p className='mb-1 capitalize'>
										{rating.source === 'imdb' ? 'IMDb' : rating.source}
									</p>
									<div className='flex items-center gap-1'>
										<Stars value={rating.rating} />
										<span>{rating.rating}</span>
									</div>
									<p className='mt-1 text-xs text-grey-60'>
										{rating.votesCount.toLocaleString()} votes
									</p>
								</div>
							))}
						</div>
					</section>
				)}
				{media.genres.length > 0 && (
					<section>
						<SectionLabel>
							<span className='inline-flex items-center gap-1.5'>
								<LayoutGrid className='size-4 2xl:size-5' />
								Genres
							</span>
						</SectionLabel>
						<div className='flex flex-wrap gap-2'>
							{media.genres.map(genre => (
								<Badge
									key={genre}
									variant='primary'
								>
									{genre}
								</Badge>
							))}
						</div>
					</section>
				)}
				{directors.length > 0 && (
					<section>
						<SectionLabel>Director</SectionLabel>
						<div className='grid gap-2'>
							{directors.map(person => (
								<PersonCard
									key={person.id}
									person={person}
								/>
							))}
						</div>
					</section>
				)}
				{music.length > 0 && (
					<section>
						<SectionLabel>Music</SectionLabel>
						<div className='grid gap-2'>
							{music.map(person => (
								<PersonCard
									key={person.id}
									person={person}
								/>
							))}
						</div>
					</section>
				)}
			</Card>

			{cast.length > 0 && (
				<Card className='lg:col-start-1 lg:row-start-2'>
					<CardHeader className='flex grid-cols-none grid-flow-col items-center justify-between'>
						<CardTitle>Cast</CardTitle>
						<div className='flex gap-2'>
							<Button
								title='Scroll cast left'
								variant='icon'
								size='icon'
								onClick={() => scroll(castRef, -1)}
							>
								<ArrowLeftIcon color='var(--color-grey-60)' />
							</Button>
							<Button
								title='Scroll cast right'
								variant='icon'
								size='icon'
								onClick={() => scroll(castRef, 1)}
							>
								<ArrowRightIcon color='var(--color-grey-60)' />
							</Button>
						</div>
					</CardHeader>
					<CardContent
						ref={castRef}
						className='flex snap-x gap-3 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden'
					>
						{cast.map(person => {
							const src = imageUrl(person.photoPath)
							return (
								<div
									key={person.id}
									className='w-24 shrink-0 snap-start 2xl:w-32'
								>
									{src ? (
										<img
											src={src}
											alt={person.name}
											className='aspect-square w-full rounded-xl object-cover'
											loading='lazy'
										/>
									) : (
										<div className='aspect-square rounded-xl bg-black-15' />
									)}
									<p className='mt-2 truncate text-xs text-grey-60'>
										{person.name}
									</p>
								</div>
							)
						})}
					</CardContent>
				</Card>
			)}

			{media.reviews.length > 0 && (
				<Card className='lg:col-start-1 lg:row-start-3'>
					<CardHeader className='flex grid-cols-none grid-flow-col items-center justify-between'>
						<CardTitle>Reviews</CardTitle>
						<CardAction>
							<Button
								variant='secondary'
								className='p-3 2xl:px-4 2xl:py-3.5'
							>
								<Plus /> Add Your Review
							</Button>
						</CardAction>
					</CardHeader>
					<CardContent
						ref={reviewRef}
						className='flex snap-x gap-4 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden'
					>
						{media.reviews.map(review => (
							<article
								key={review.id}
								className='min-w-[85%] snap-start rounded-xl border border-black-15 bg-black-06 p-4 sm:min-w-[48%]'
							>
								<div className='flex flex-wrap items-center justify-between gap-2'>
									<div>
										<p className='font-medium'>{review.name}</p>
										{review.location && (
											<p className='text-grey-60'>{review.location}</p>
										)}
									</div>
									<div className='flex items-center gap-1'>
										<Stars value={review.rating} />
										<span className='text-xs text-grey-60'>
											{review.rating}
										</span>
									</div>
								</div>
								<p className='mt-4 text-grey-60'>{review.comment}</p>
							</article>
						))}
					</CardContent>
					<CardFooter>
						<Button
							title='Scroll reviews left'
							variant='circle'
							size='circle'
							onClick={() => scroll(reviewRef, -1)}
						>
							<ArrowLeftIcon color='var(--color-grey-60)' />
						</Button>
						<Button
							title='Scroll reviews right'
							variant='circle'
							size='circle'
							onClick={() => scroll(reviewRef, 1)}
						>
							<ArrowRightIcon color='var(--color-grey-60)' />
						</Button>
					</CardFooter>
				</Card>
			)}
		</div>
	)
}
