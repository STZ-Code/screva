import { EventLocation } from '@/components/dashboard/events/event-location'
import { EventMetrics } from '@/components/dashboard/events/event-metrics'
import { EventSummary } from '@/components/dashboard/events/event-summary'
import { EventTeams } from '@/components/dashboard/events/event-teams'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function EventOverview() {
	return (
		<Main className="gap-8">
			<Heading.Root className="flex-row justify-between">
				<div>
					<Heading.Title>Visão Geral</Heading.Title>
					<Heading.Description>
						Confira as métricas e a performance do evento em tempo real.
					</Heading.Description>
				</div>
				<p>status do evento</p>
			</Heading.Root>

			<EventMetrics />

			<div className="flex gap-6">
				<EventSummary />
				<EventTeams />
				<EventLocation />
			</div>
		</Main>
	)
}
