import { MoviesAndShowsHeroSection } from '@/components/sections/movies-and-shows/movies-and-shows-hero-section'
import { MoviesSection } from '@/components/sections/movies-and-shows/movies-section'
import { ShowsSection } from '@/components/sections/movies-and-shows/shows-section'

export function MoviesAndShows() {
	return (
		<>
			<MoviesAndShowsHeroSection />
			<MoviesSection />
			<ShowsSection />
		</>
	)
}
