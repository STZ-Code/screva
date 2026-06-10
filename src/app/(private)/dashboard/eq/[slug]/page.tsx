import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function TeamOverviewPage() {
	return (
		<Main className="gap-8">
			<Heading.Root>
				<Heading.Title>Visão Geral</Heading.Title>
				<Heading.Description>
					Confira as informações do seu time
				</Heading.Description>
			</Heading.Root>

			<strong>Em construção!</strong>
		</Main>
	)
}
