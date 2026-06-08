import { AttachmentsTable } from '@/components/dashboard/events/attachments/attachments-table'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function AttachmentsPage() {
	return (
		<Main className="gap-8 h-full">
			<Heading.Root>
				<Heading.Title>Anexos</Heading.Title>
				<Heading.Description>
					Adicione arquivos importantes para a organização do evento.
				</Heading.Description>
			</Heading.Root>

			<section>
				<AttachmentsTable />
			</section>
		</Main>
	)
}
