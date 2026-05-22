import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'
import { TeamsTable } from '@/components/dashboard/teams/teams-table'

export default function TeamsPage() {
	return (
		<Main className="gap-8 h-full">
			<Heading.Root>
				<Heading.Title>Equipes</Heading.Title>
				<Heading.Description>
					Gerencie as equipes responsáveis pela operação dos eventos.
				</Heading.Description>
			</Heading.Root>

			<section>
				<TeamsTable />
			</section>
		</Main>
	)
}
