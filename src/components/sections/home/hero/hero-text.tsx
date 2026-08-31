import { Button } from '@/components/ui/button'
import { PlayIcon } from '@/components/ui/icons/play-icon'

export function HeroText() {
	return (
		<div className='z-10 flex flex-col items-center gap-7.5 lg:gap-10 2xl:gap-12.5 text-center -mt-25 2xl:-mt-16 max-w-274 mx-auto px-4'>
			<div className='flex flex-col gap-2.5 2xl:gap-3.5'>
				<h1 className='text-white font-bold leading-[150%] text-[28px] lg:text-5xl 2xl:text-[58px]'>
					The Best Streaming Experience
				</h1>
				<p className='text-grey-60 font-normal leading-[150%] text-sm lg:text-lg'>
					StreamVibe is the best streaming experience for watching your favorite
					movies and shows on demand, anytime, anywhere. With StreamVibe, you
					can enjoy a wide variety of content, including the latest
					blockbusters, classic movies, popular TV shows, and more. You can also
					create your own watchlists, so you can easily find the content you
					want to watch.
				</p>
			</div>

			<Button
				variant='primary'
				className='z-10'
				startIcon={
					<PlayIcon
						color='#fff'
						className='size-6 2xl:size-7'
					/>
				}
			>
				Start Watching Now
			</Button>
		</div>
	)
}
