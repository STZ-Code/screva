import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'
import { SettingsEventMenu } from '@/components/dashboard/settings/settings-event-menu'
import { SettigsEventMenuDrawer } from '@/components/dashboard/settings/settings-event-menu-drawer'
import { getCurrentUser } from '@/lib/get-current-user'

export default async function SettingsLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{
		slug: string
	}>
}>) {
	const user = await getCurrentUser()

	if (!user) return <p>Loading...</p>

	const { slug } = await params

	return (
		<Main className="gap-8 h-full relative">
			<Heading.Root>
				<Heading.Title>Configurações</Heading.Title>
				<Heading.Description>Configurações do evento.</Heading.Description>
			</Heading.Root>

			<div className="flex h-full">
				<SettingsEventMenu user={user} slug={slug} />

				{children}
			</div>

			<div className="fixed bottom-0 left-0 right-0 xl:hidden">
				<div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
				<div className="relative flex items-center justify-center py-4">
					<SettigsEventMenuDrawer user={user} slug={slug} />
				</div>
			</div>
		</Main>
	)
}
