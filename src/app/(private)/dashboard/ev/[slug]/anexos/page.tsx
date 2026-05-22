import { RegistrationsTable } from '@/components/dashboard/events/registrations-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function AttachmentsPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Anexos</Heading.Title>
				<Heading.Description>
					Adicione arquivos importantes para a organização do evento.
				</Heading.Description>
			</Heading.Root>

			<section>
				<RegistrationsTable />
			</section>
		</Main>
	)
}
