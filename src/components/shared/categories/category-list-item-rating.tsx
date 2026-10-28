'use client'

import { StarIcon } from 'lucide-react'

import { Badge } from '@/components/ui'

export interface CategoryListItemRatingProps {
	rating: number
	votesCount: number
}

export function CategoryListItemRating({
	rating,
	votesCount
}: CategoryListItemRatingProps) {
	const safeRating = Math.max(0, Math.min(5, rating))

	const votes = votesCount >= 1000 ? `${votesCount / 1000}K` : votesCount

	return (
		<Badge className='gap-1 pl-2 lg:pl-2.5 2xl:pl-2.5 pr-2 lg:pr-2.5 2xl:pr-2.5 py-1.25'>
			<span className='flex items-center gap-px'>
				{Array.from({ length: 5 }, (_, index) => {
					const fill = Math.max(0, Math.min(1, safeRating - index))

					return (
						<span
							key={index}
							className='relative inline-flex'
						>
							<StarIcon className='size-3.5 2xl:size-4.5 fill-grey-60 stroke-grey-60' />
							{fill > 0 && (
								<span
									className='absolute inset-y-0 left-0 overflow-hidden'
									style={{ width: `${fill * 100}%` }}
								>
									<StarIcon className='size-3.5 2xl:size-4.5 fill-red-45 stroke-red-45' />
								</span>
							)}
						</span>
					)
				})}
			</span>

			{votes}
		</Badge>
	)
}
