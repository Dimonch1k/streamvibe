import { CategoryList } from '@/components/shared/categories/category-list'
import { Section } from '@/components/ui/section'
import { Switcher } from '@/components/ui/switcher'

import { categoriesListData } from '@/data/home.data'

export function HomeCategoriesSection() {
	return (
		<Section
			id='categories'
			title='Explore our wide variety of categories'
			description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
			headerChildren={<Switcher />}
		>
			<CategoryList list={categoriesListData} />
		</Section>
	)
}
