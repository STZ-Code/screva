import { EventsTable } from '@/components/dashboard/events/table'
import { Heading } from '@/components/dashboard/heading'
import { Kpi } from '@/components/dashboard/kpi'
import { Main } from '@/components/dashboard/main'

export default function EventsPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Eventos</Heading.Title>
				<Heading.Description>
					Monitore a performance e o status de todos os eventos da plataforma.
				</Heading.Description>
			</Heading.Root>

			<div className="grid grid-cols-4 gap-4">
				<Kpi.Root>
					<Kpi.Label>Eventos</Kpi.Label>
					<Kpi.Value>100 Eventos</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
					<Kpi.Label>% com vendas</Kpi.Label>
					<Kpi.Value>62% em venda</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
					<Kpi.Label>Baixa performance</Kpi.Label>
					<Kpi.Value>5 Eventos</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
					<Kpi.Label>Próximos com baixa venda</Kpi.Label>
					<Kpi.Value>3 Eventos</Kpi.Value>
				</Kpi.Root>
			</div>

			<section>
				<EventsTable />
			</section>
		</Main>
	)
}
