import { Section } from '@/components/ui/section'

import { categoriesListData } from '@/data/home.data'

import { CategoryList } from './category-list'
import { CategorySwitcher } from './category-switcher'

export function CategoriesSection() {
	return (
		<Section
			id='categories'
			title='Explore our wide variety of categories'
			description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
			headerChildren={<CategorySwitcher />}
		>
			<CategoryList list={categoriesListData} />
		</Section>
	)
}
