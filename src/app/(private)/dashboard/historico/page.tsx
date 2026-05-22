import { TicketHistoryTable } from '@/components/dashboard/customer/history/ticket-history-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function HistoryTicketsPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Histórico de Compras</Heading.Title>
				<Heading.Description>
					Monitore todas as suas compras
				</Heading.Description>
			</Heading.Root>

			<TicketHistoryTable />
		</Main>
	)
}
