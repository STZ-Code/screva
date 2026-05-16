'use client'
import { LineVerticalIcon } from '@phosphor-icons/react'
import { TabNavigator } from '@stz-code/ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MiniLogo } from '@/assets/images/mini-logo'
import type { Role, User } from '@/lib/get-current-user'
import { cn } from '@/utils/utils'
import { EventsDropdown } from './dropdown/events-dropdown'
import { ProfileDropdown } from './dropdown/profile-dropdown'
import { ProfileButton } from './profile-button'

type HeaderProps = {
	user: User
}

type NavItem = {
	label: string
	href: string
	roles?: Role[]
}

const NAVIGATOR_ITEMS: NavItem[] = [
	{
		label: 'Visão Geral',
		href: '/dashboard',
		roles: ['ADMIN', 'CUSTOMER'],
	},
	{
		label: 'Eventos',
		href: '/dashboard/eventos',
		roles: ['ADMIN'],
	},
	{
		label: 'Equipes',
		href: '/dashboard/equipes',
		roles: ['ADMIN'],
	},
	{
		label: 'Financeiro',
		href: '/dashboard/financeiro',
		roles: ['ADMIN'],
	},
	{
		label: 'Solicitações',
		href: '/dashboard/solicitacoes',
		roles: ['ADMIN'],
	},
	{
		label: 'Inscrições',
		href: '/dashboard/inscricoes',
		roles: ['CUSTOMER'],
	},
	{
		label: 'Histórico',
		href: '/dashboard/historico',
		roles: ['CUSTOMER'],
	},
	{
		label: 'Configurações',
		href: '/dashboard/configuracoes/perfil',
		roles: ['ADMIN', 'CUSTOMER'],
	},
]

const EVENT_ITEMS = (slug: string): NavItem[] => [
	{
		label: 'Visão Geral',
		href: `/dashboard/ev/${slug}`,
	},
	{
		label: 'Inscrições',
		href: `/dashboard/ev/${slug}/inscricoes`,
	},
	{
		label: 'Categorias',
		href: `/dashboard/ev/${slug}/categorias`,
	},
	{
		label: 'Kits',
		href: `/dashboard/ev/${slug}/kits`,
	},
	{
		label: 'Financeiro',
		href: `/dashboard/ev/${slug}/financeiro`,
	},
	{
		label: 'Marketing',
		href: `/dashboard/ev/${slug}/marketing`,
	},
	{
		label: 'Anexos',
		href: `/dashboard/ev/${slug}/anexos`,
	},
	{
		label: 'Confirgurações',
		href: `/dashboard/ev/${slug}/configuracoes`,
	},
]

export function Header({ user }: HeaderProps) {
	const pathname = usePathname()

	const role = user.role

	const slug = pathname.split('/')[3]

	const isEventPage = pathname.startsWith('/dashboard/ev/')
	const isTeamPage = pathname.startsWith('/dashboard/eq/')

	const items = isEventPage ? EVENT_ITEMS(slug) : NAVIGATOR_ITEMS

	const navItems = items.filter((item) => {
		if (!item.roles) return true

		return item.roles.includes(role)
	})

	const showEventsDropdown = isEventPage || isTeamPage || role === 'ADMIN'

	return (
		<header className="px-12 pt-8 bg-dashboard-header flex justify-between items-start">
			<div className="flex flex-col gap-8">
				<div className="flex">
					<MiniLogo className="size-8 mr-4" />

					<div className="flex gap-2">
						<LineVerticalIcon className="size-8 rotate-24 text-zinc-600" />

						<ProfileDropdown user={user} />
						{showEventsDropdown && <EventsDropdown />}
					</div>
				</div>

				<div className="flex relative flex-1">
					<TabNavigator.Root active={pathname} className="h-9">
						<TabNavigator.Control className="gap-4">
							{navItems.map((item) => (
								<TabNavigator.Item
									key={item.href}
									href={item.href}
									as={Link}
									className={cn('font-semibold text-zinc-400 text-sm', {
										'text-zinc-50': pathname === item.href,
									})}
								>
									{item.label}
								</TabNavigator.Item>
							))}
						</TabNavigator.Control>
						<TabNavigator.Bar className="bg-cyan-500 h-[3px]" />
					</TabNavigator.Root>
				</div>
			</div>

			<ProfileButton user={user} isAuthenticated={!!user} />
		</header>
	)
}
