import { Heading } from '../heading'
import { Main } from '../main'
import { AdminMetrics } from './admin-metrics'
import { EventList } from './event-list'
import { LastInscriptions } from './last-inscriptions'

export function AdminOverview() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Visão Geral</Heading.Title>
				<Heading.Description>
					Confira as métricas e a performance da plataforma em tempo real.
				</Heading.Description>
			</Heading.Root>

			<AdminMetrics />

			<section className="flex gap-8 h-full lg:flex-row flex-col">
				<LastInscriptions />

				<EventList />
			</section>
		</Main>
	)
}
