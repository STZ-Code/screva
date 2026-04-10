import { EventsTable } from '@/components/dashboard/events/table'
import { Heading } from '@/components/dashboard/heading'
import { Kpi } from '@/components/dashboard/kpi'
import { Main } from '@/components/dashboard/main'

export default function EventsPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Organizadores</Heading.Title>
				<Heading.Description>
					Listagem de todos os organizadores registrados na plataforma.
				</Heading.Description>
			</Heading.Root>

			<section>
				<EventsTable />
			</section>
		</Main>
	)
}
