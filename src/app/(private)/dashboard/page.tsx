import { AdminMetrics } from '@/components/dashboard/admin/admin-metrics'
import { EventList } from '@/components/dashboard/admin/event-list'
import { LastInscriptions } from '@/components/dashboard/admin/last-inscriptions'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function DashboardPage() {
	// async function signOut() {
	// 	await authClient.signOut(
	// 		{},
	// 		{
	// 			onSuccess() {
	// 				router.push('/sign-in')
	// 			},
	// 		},
	// 	)
	// }

	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Visão Geral</Heading.Title>
				<Heading.Description>
					Confira as métricas e a performance da plataforma em tempo real.
				</Heading.Description>
			</Heading.Root>

			<AdminMetrics />

			<section className="flex gap-8 h-full">
				<LastInscriptions />

				<EventList />
			</section>
		</Main>
	)
}
