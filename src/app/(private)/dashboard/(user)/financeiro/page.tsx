import { EventsPerformanceTable } from '@/components/dashboard/admin/finance/events-performance-table'
import { FinanceMetrics } from '@/components/dashboard/admin/finance/finance-metrics'
import { OperationalExpenses } from '@/components/dashboard/admin/finance/operational-expenses'
import { PaymentGateway } from '@/components/dashboard/admin/finance/payment-gateway'
import { PlataformHealth } from '@/components/dashboard/admin/finance/plataform-health'
import { RiskIndicators } from '@/components/dashboard/admin/finance/risk-indicators'
import { TransfersTable } from '@/components/dashboard/admin/finance/transfers-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function FinancePage() {
	return (
		<Main className="gap-10 h-fit">
			<Heading.Root>
				<Heading.Title>Financeiro</Heading.Title>
				<Heading.Description>
					Visão consolidada da saúde financeira, repasses e desempenho dos
					eventos no período selecionado.
				</Heading.Description>
			</Heading.Root>

			<FinanceMetrics />

			<section>
				<TransfersTable />
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="font-semibold text-2xl text-zinc-200">
					Monitoramento de Risco
				</h2>

				<div className="flex gap-4 lg:flex-row flex-col-reverse">
					<RiskIndicators />
					<PlataformHealth />
				</div>
			</section>

			<section>
				<EventsPerformanceTable />
			</section>

			<section className="flex gap-8 h-full lg:flex-row flex-col">
				<OperationalExpenses />

				<PaymentGateway />
			</section>
		</Main>
	)
}
