import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'
import { NavSettings } from '@/components/dashboard/nav-settings'

export default async function EventSettingsLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{
		slug: string
	}>
}>) {
	const { slug } = await params

	return (
		<Main className="gap-8 h-full">
			<Heading.Root>
				<Heading.Title>Configurações</Heading.Title>
				<Heading.Description>Configurações do evento</Heading.Description>
			</Heading.Root>

			<div className="flex gap-8">
				<NavSettings.Root>
					<NavSettings.Item
						href={`/dashboard/ev/${slug}/configuracoes/perfil`}
						className="text-zinc-50 bg-zinc-600/40 hover:bg-zinc-600/50"
					>
						Perfil do evento
					</NavSettings.Item>
					<NavSettings.Item href={`/dashboard/ev/${slug}/configuracoes/ajuda`}>
						Ajuda
					</NavSettings.Item>
				</NavSettings.Root>

				{children}
			</div>
		</Main>
	)
}
