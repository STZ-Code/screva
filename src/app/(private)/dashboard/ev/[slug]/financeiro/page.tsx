import { EventFinancialMetrics } from '@/components/dashboard/events/event-financial-metrics'
import { RegistrationsTable } from '@/components/dashboard/events/registrations-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function RegistrationsPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Financeiro</Heading.Title>
				<Heading.Description>
					Acompanhe detalhadamente todo o financeiro do Picos Pro Race
				</Heading.Description>
			</Heading.Root>

			<EventFinancialMetrics />

			<section>
				<RegistrationsTable />
			</section>
		</Main>
	)
}
