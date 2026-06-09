'use client'

import { usePathname } from 'next/navigation'
import type { User } from '@/lib/get-current-user'
import { NavSettings } from '../nav-settings'

type SettingsMenuProps = {
	user: User
	slug: string
}

export function SettingsEventMenu({ user, slug }: SettingsMenuProps) {
	const role = user.role
	const pathname = usePathname()

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
			label: 'Equipes de Organização',
			href: `/dashboard/ev/${slug}/configuracoes/eq-org`,
			roles: ['CUSTOMER', 'ADMIN'],
		},
	]

	const items = eventItems(slug)

	const navItems = items.filter((item) => {
		if (!item.roles) return true

		return item.roles.includes(role)
	})

	return (
		<NavSettings.Root className="hidden lg:flex">
			{navItems.map((item) => (
				<NavSettings.Item
					key={item.href}
					href={item.href}
					className={
						pathname === item.href
							? 'text-zinc-50 bg-zinc-600/40 hover:bg-zinc-600/50'
							: undefined
					}
				>
					{item.label}
				</NavSettings.Item>
			))}
		</NavSettings.Root>
	)
}
