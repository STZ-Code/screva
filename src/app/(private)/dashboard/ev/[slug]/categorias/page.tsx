import { EventCategoriesTable } from '@/components/dashboard/events/event-categories-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function CategoriesPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Categorias</Heading.Title>
				<Heading.Description>
					Crie e edite as categorias do seu evento.
				</Heading.Description>
			</Heading.Root>

			<EventCategoriesTable />
		</Main>
	)
}
