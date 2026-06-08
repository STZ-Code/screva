import { EventFinancialMetrics } from '@/components/dashboard/events/event-financial-metrics'
import { StatementsTable } from '@/components/dashboard/events/financial/statements-table'
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

			<section className="flex flex-col">
				<h2 className="text-2xl font-semibold mb-4">Extrato Financeiro</h2>
				<StatementsTable />
			</section>
		</Main>
	)
}
