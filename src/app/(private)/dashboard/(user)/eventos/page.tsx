import { EventMetrics } from '@/components/dashboard/admin/events/event-metrics'
import { EventsTable } from '@/components/dashboard/events/table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function EventsPage() {
	return (
		<Main className="gap-8 h-full">
			<Heading.Root>
				<Heading.Title>Eventos</Heading.Title>
				<Heading.Description>
					Monitore a performance e o status de todos os eventos da plataforma.
				</Heading.Description>
			</Heading.Root>

			<EventMetrics />

			<section>
				<EventsTable />
			</section>
		</Main>
	)
}
