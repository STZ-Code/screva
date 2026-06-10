import { EventFinancialMetrics } from '@/components/dashboard/events/event-financial-metrics'
import { CouponsTable } from '@/components/dashboard/events/marketing/coupons-table'
import { SourcesChannelsTable } from '@/components/dashboard/events/marketing/source-channels-table'
import { UserOriginsTable } from '@/components/dashboard/events/marketing/user-origins-table'
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

			<section className="flex flex-col">
				<h2 className="text-2xl font-semibold mb-4">Cupons</h2>
				<CouponsTable />
			</section>

			<section className="flex flex-col">
				<h2 className="text-2xl font-semibold mb-4">Canais de origem</h2>
				<SourcesChannelsTable />
			</section>

			<section className="flex flex-col">
				<h2 className="text-2xl font-semibold mb-4">Lista de origem</h2>
				<UserOriginsTable />
			</section>
		</Main>
	)
}
