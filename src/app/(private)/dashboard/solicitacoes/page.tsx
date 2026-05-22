import { EventRequestTable } from '@/components/dashboard/admin/requests/event-request-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function HistoryTicketsPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Solicitações de eventos</Heading.Title>
				<Heading.Description>
					Acompanhe aqui as solicitações de eventos
				</Heading.Description>
			</Heading.Root>

			<EventRequestTable />
		</Main>
	)
}
