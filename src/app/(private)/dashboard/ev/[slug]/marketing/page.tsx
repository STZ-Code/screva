import { EventFinancialMetrics } from '@/components/dashboard/events/event-financial-metrics'
import { RegistrationsTable } from '@/components/dashboard/events/registrations-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function RegistrationsPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Marketing</Heading.Title>
				<Heading.Description>
					Acompanhe o desempenho, crie cupons e descubra quais canais trazem
					mais participantes.
				</Heading.Description>
			</Heading.Root>

			<EventFinancialMetrics />

			<section>
				<RegistrationsTable />
			</section>

			<section>
				<RegistrationsTable />
			</section>
		</Main>
	)
}
