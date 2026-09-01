import type { ICategoryItem } from '@/types/sections/category.interface'
import type { IHeroGalleryItem } from '@/types/sections/hero.interface'

// ----------------- Movies -----------------
export const heroGalleryListData: IHeroGalleryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/hero/avengers.jpg',
		title: 'Avengers: Endgame',
		description:
			"With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."
	},
	{
		href: '#',
		image: '/movies-and-shows/hero/got.webp',
		title: 'Game of Thrones',
		description:
			'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a forgotten force is rising after millennia, threatening the existence of the realms of men. In the game of thrones, you win or you die.'
	},
	{
		href: '#',
		image: '/movies-and-shows/hero/the-gray-man.jpg',
		title: 'The Gray Man',
		description:
			"When the CIA's top asset — his identity known to no one — uncovers deadly agency secrets, he triggers a global manhunt. Hunted across the world by a psychopathic rogue operative, he must stay one step ahead to survive."
	},
	{
		href: '#',
		image: '/movies-and-shows/hero/squid-game.jpg',
		title: 'Squid Game',
		description:
			"Hundreds of cash-strapped players accept a strange invitation to compete in traditional children's games. Inside a secret facility, a massive cash prize awaits — but the stakes are deadly. Survive the game, or pay the ultimate price."
	}
]

// ----------------- Movies -----------------

export const moviesGenresListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/categories/category-action.png',
		title: 'Action',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/categories/category-adventure.png',
		title: 'Adventure',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/categories/category-comedy.png',
		title: 'Comedy',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/categories/category-drama.png',
		title: 'Drama',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/categories/category-horror.png',
		title: 'Horror',
		hasArrowIcon: true
	}
]

export const moviesPopularTopListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/movies/popular-action.png',
		title: 'Action',
		badge: 'Top 10 In',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/popular-adventure.png',
		title: 'Adventure',
		badge: 'Top 10 In',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/popular-comedy.png',
		title: 'Comedy',
		badge: 'Top 10 In',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/popular-drama.png',
		title: 'Drama',
		badge: 'Top 10 In',
		hasArrowIcon: true
	}
]

export const moviesTrendingListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/movies/trending-1.png',
		time: '1h 30min',
		views: '2K'
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/trending-2.png',
		time: '1h 57min',
		views: '1.5K'
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/trending-3.png',
		time: '2h 10min',
		views: '1.8K'
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/trending-4.png',
		time: '2h 20min',
		views: '3K'
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/trending-5.png',
		time: '1h 42min',
		views: '5K'
	}
]

export const moviesReleasesListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/movies/new-releases-1.png',
		releasedAt: '14 April 2023'
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/new-releases-2.png',
		releasedAt: '22 April 2023'
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/new-releases-3.png',
		releasedAt: '13 April 2023'
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/new-releases-4.png',
		releasedAt: '19 April 2023'
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/new-releases-5.png',
		releasedAt: '11 April 2023'
	}
]

export const moviesMustWatchListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/movies/must-watch-1.png',
		time: '1h 57min',
		ratingNumber: 20
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/must-watch-2.png',
		time: '1h 30min',
		ratingNumber: 20
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/must-watch-3.png',
		time: '1h 42min',
		ratingNumber: 20
	},
	{
		href: '#',
		image: '/movies-and-shows/movies/must-watch-4.png',
		time: '2h 10min',
		ratingNumber: 20
	}
]

// ----------------- Shows -----------------

export const showsGenresListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/categories/category-action.png',
		title: 'Action',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/categories/category-adventure.png',
		title: 'Adventure',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/categories/category-comedy.png',
		title: 'Comedy',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/categories/category-drama.png',
		title: 'Drama',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/categories/category-horror.png',
		title: 'Horror',
		hasArrowIcon: true
	}
]

export const showsPopularTopListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/shows/popular-action.png',
		title: 'Action',
		badge: 'Top 10 In',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/popular-adventure.png',
		title: 'Adventure',
		badge: 'Top 10 In',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/popular-comedy.png',
		title: 'Comedy',
		badge: 'Top 10 In',
		hasArrowIcon: true
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/popular-drama.png',
		title: 'Drama',
		badge: 'Top 10 In',
		hasArrowIcon: true
	}
]

export const showsTrendingListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/shows/trending-1.png',
		time: '8h 20min',
		seasonNumber: 4
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/trending-2.png',
		time: '12h 23min',
		seasonNumber: 5
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/trending-3.png',
		time: '14h 30min',
		seasonNumber: 3
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/trending-4.png',
		time: '7h 40min',
		seasonNumber: 2
	}
]

export const showsReleasesListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/shows/new-releases-1.png',
		time: '12h 23min',
		seasonNumber: 5
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/new-releases-2.png',
		time: '7h 40min',
		seasonNumber: 2
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/new-releases-3.png',
		time: '8h 20min',
		seasonNumber: 4
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/new-releases-4.png',
		time: '10h 30min',
		seasonNumber: 3
	}
]

export const showsMustWatchListData: ICategoryItem[] = [
	{
		href: '#',
		image: '/movies-and-shows/shows/duranga.png',
		time: '7h 40min',
		ratingNumber: 12
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/must-watch-2.png',
		time: '12h 23min',
		ratingNumber: 28
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/must-watch-3.png',
		time: '10h 30min',
		ratingNumber: 2
	},
	{
		href: '#',
		image: '/movies-and-shows/shows/must-watch-4.png',
		time: '8h 20min',
		ratingNumber: 32
	}
]
