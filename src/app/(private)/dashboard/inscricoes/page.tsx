import { SubscriptionsTable } from '@/components/dashboard/customer/subscriptions/subscriptions-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function SubscriptionsPage() {
	return (
		<Main className="gap-8 h-full">
			<Heading.Root>
				<Heading.Title>Minhas Inscrições</Heading.Title>
				<Heading.Description>
					Monitrore todas as incrições dos seus eventos
				</Heading.Description>
			</Heading.Root>

			<section>
				<SubscriptionsTable />
			</section>
		</Main>
	)
}
