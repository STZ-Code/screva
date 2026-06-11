'use client'

import { EqualsIcon } from '@phosphor-icons/react'
import { Drawer } from '@stz-code/ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { User } from '@/lib/get-current-user'

type SettigsMenuDrawerProps = {
	user: User
	slug: string
}

const eventItems = (slug: string) => [
	{
		label: 'Informações Básicas',
		href: `/dashboard/ev/${slug}/configuracoes/basico`,
		roles: ['CUSTOMER', 'ADMIN'],
	},
	{
		label: 'Localização',
		href: `/dashboard/ev/${slug}/configuracoes/localizacao`,
		roles: ['CUSTOMER', 'ADMIN'],
	},
	{
		label: 'Premiação',
		href: `/dashboard/ev/${slug}/configuracoes/premiacao`,
		roles: ['CUSTOMER', 'ADMIN'],
	},
	{
		label: 'Equipe e Organização',
		href: `/dashboard/ev/${slug}/configuracoes/eq-org`,
		roles: ['CUSTOMER', 'ADMIN'],
	},
]

export function SettigsEventMenuDrawer({ user, slug }: SettigsMenuDrawerProps) {
	const pathname = usePathname()
	const role = user.role

	const items = eventItems(slug)

	const currentItem =
		items.find((item) => pathname.startsWith(item.href)) ?? items[0]

	const navItems = items.filter((item) => {
		if (!item.roles) return true

		return item.roles.includes(role)
	})

	return (
		<Drawer.Root>
			<Drawer.Trigger className="bg-zinc-800 flex gap-6 items-center 2xl:hidden rounded-md font-semibold h-12 px-6 cursor-pointer text-sm hover:bg-zinc-900 transition-colors">
				{currentItem.label}
				<EqualsIcon size={24} className="text-zinc-200" />
			</Drawer.Trigger>

			<Drawer.Content className="bg-zinc-900 border-none z-70">
				<Drawer.Header>
					<Drawer.Title className="text-lg text-zinc-100">
						Configurações
					</Drawer.Title>
				</Drawer.Header>

				<div className="flex flex-col px-6 mb-8">
					{navItems.map((item) => {
						const isActive = pathname === item.href

						return (
							<Link
								key={item.href}
								href={item.href}
								className={
									isActive
										? 'py-2 w-full rounded px-4 text-sm bg-zinc-600/40 text-zinc-50'
										: 'py-2 hover:bg-zinc-600 w-full rounded px-4 text-sm'
								}
							>
								{item.label}
							</Link>
						)
					})}
				</div>
			</Drawer.Content>
		</Drawer.Root>
	)
}
