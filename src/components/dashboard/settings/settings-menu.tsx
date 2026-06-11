'use client'

import { usePathname } from 'next/navigation'
import type { User } from '@/lib/get-current-user'
import { NavSettings } from '../nav-settings'

type SettingsMenuProps = {
	user: User
}

export function SettingsMenu({ user }: SettingsMenuProps) {
	const role = user.role
	const pathname = usePathname()

	const items = [
		{
			label: 'Perfil',
			href: '/dashboard/configuracoes/perfil',
			roles: ['CUSTOMER', 'ADMIN'],
		},
		{
			label: 'Segurança',
			href: '/dashboard/configuracoes/seguranca',
			roles: ['CUSTOMER', 'ADMIN'],
		},
		{
			label: 'Notificações',
			href: '/dashboard/configuracoes/notificacoes',
			roles: ['CUSTOMER', 'ADMIN'],
		},
		{
			label: 'Preferências',
			href: '/dashboard/configuracoes/preferencias',
			roles: ['CUSTOMER', 'ADMIN'],
		},
		{
			label: 'Privacidade',
			href: '/dashboard/configuracoes/privacidade',
			roles: ['CUSTOMER', 'ADMIN'],
		},
		{
			label: 'Ajuda',
			href: '/dashboard/configuracoes/ajuda',
			roles: ['ADMIN'],
		},
	]

	const navItems = items.filter((item) => {
		if (!item.roles) return true

		return item.roles.includes(role)
	})

	return (
		<NavSettings.Root className="hidden 2xl:flex">
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
