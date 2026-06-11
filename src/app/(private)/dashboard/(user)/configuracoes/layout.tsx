import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'
import { SettingsMenu } from '@/components/dashboard/settings/settings-menu'
import { SettigsMenuDrawer } from '@/components/dashboard/settings/settings-menu-drawer'
import { getCurrentUser } from '@/lib/get-current-user'

export default async function SettingsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const user = await getCurrentUser()

	if (!user) return <p>Loading...</p>

	return (
		<Main className="gap-8 h-full relative">
			<Heading.Root>
				<Heading.Title>Configurações</Heading.Title>
				<Heading.Description>
					Gerencie sua conta, segurança, notificações e preferências.
				</Heading.Description>
			</Heading.Root>

			<div className="flex h-full">
				<SettingsMenu user={user} />

				{children}
			</div>

			<div className="fixed bottom-0 left-0 right-0 2xl:hidden">
				<div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
				<div className="relative flex items-center justify-center py-4">
					<SettigsMenuDrawer user={user} />
				</div>
			</div>
		</Main>
	)
}
