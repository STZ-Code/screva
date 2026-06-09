import { CreateCategorySheet } from '@/components/dashboard/events/categories/create-category-sheet'
import { EventCategoriesTable } from '@/components/dashboard/events/event-categories-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function CategoriesPage() {
	return (
		<Main className="gap-8 h-full px-0">
			<div className="flex items-end justify-between">
				<Heading.Root className="lg:px-0 px-6">
					<Heading.Title>Categorias</Heading.Title>
					<Heading.Description>
						Crie e edite as categorias do seu evento.
					</Heading.Description>
				</Heading.Root>

				<CreateCategorySheet />
			</div>

			<EventCategoriesTable />
		</Main>
	)
}
