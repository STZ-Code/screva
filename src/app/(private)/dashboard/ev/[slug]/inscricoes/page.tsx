import { RegistrationsTable } from '@/components/dashboard/events/registrations-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function RegistrationsPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Inscrições</Heading.Title>
				<Heading.Description>
					Monitrore todas as incrições do Picos Pro Race
				</Heading.Description>
			</Heading.Root>

			<section>
				<RegistrationsTable />
			</section>
		</Main>
	)
}
