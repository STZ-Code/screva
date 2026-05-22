import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'
import { NavSettings } from '@/components/dashboard/nav-settings'

export default function SettingsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Main className="gap-8 h-full">
			<Heading.Root>
				<Heading.Title>Configurações</Heading.Title>
				<Heading.Description>
					Listagem de todos os organizadores registrados na plataforma.
				</Heading.Description>
			</Heading.Root>

			<div className="flex gap-8">
				<NavSettings.Root>
					<NavSettings.Item
						href={'/dashboard/configuracoes/perfil'}
						className="text-zinc-50 bg-zinc-600/40 hover:bg-zinc-600/50"
					>
						Perfil
					</NavSettings.Item>
					<NavSettings.Item href={'/dashboard/configuracoes/seguranca'}>
						Segurança
					</NavSettings.Item>
					<NavSettings.Item href={'/dashboard/configuracoes/notificacoes'}>
						Notificações
					</NavSettings.Item>
					<NavSettings.Item href={'/dashboard/configuracoes/preferencias'}>
						Preferências
					</NavSettings.Item>
					<NavSettings.Item href={'/dashboard/configuracoes/privacidade'}>
						Privacidade
					</NavSettings.Item>
					<NavSettings.Item href={'/dashboard/configuracoes/ajuda'}>
						Ajuda
					</NavSettings.Item>
				</NavSettings.Root>

				{children}
			</div>
		</Main>
	)
}
