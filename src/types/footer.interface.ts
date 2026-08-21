export interface IFooterLink {
	title: string
	list?: {
		href: string
		label: string
	}[]
	iconButtons?: {
		href: string
		label: string
		icon: React.ReactNode
	}[]
}
