'use client'
import { TabNavigator } from '@stz-code/ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Role } from '@/lib/get-current-user'
import { cn } from '@/utils/utils'

type NavItem = {
	label: string
	href: string
	roles?: Role[]
}

export const NAVIGATOR_ITEMS: NavItem[] = [
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

export const EVENT_ITEMS = (slug: string): NavItem[] => [
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
		label: 'Configurações',
		href: `/dashboard/ev/${slug}/configuracoes/basico`,
	},
]

export function HeaderTabNavigator({ role }: { role: Role }) {
	const pathname = usePathname()

	const slug = pathname.split('/')[3]

	const isEventPage = pathname.startsWith('/dashboard/ev/')
	const isTeamPage = pathname.startsWith('/dashboard/eq/')

	const items = isEventPage ? EVENT_ITEMS(slug) : NAVIGATOR_ITEMS

	const navItems = items.filter((item) => {
		if (!item.roles) return true

		return item.roles.includes(role)
	})

	const isItemActive = (href: string) => {
		if (href === '/dashboard') {
			return pathname === '/dashboard'
		}

		if (href === '/dashboard/configuracoes/perfil') {
			return pathname.startsWith('/dashboard/configuracoes')
		}

		if (isEventPage && href === `/dashboard/ev/${slug}`) {
			return pathname === href
		}

		if (isEventPage && pathname === `/dashboard/ev/${slug}/entrega-kit`) {
			if (href === `/dashboard/ev/${slug}/kits`) return true
		}

		if (
			href === `/dashboard/ev/${slug}/configuracoes/basico` ||
			href === `/dashboard/ev/${slug}/configuracoes/eq-org` ||
			href === `/dashboard/ev/${slug}/configuracoes/localizacao` ||
			href === `/dashboard/ev/${slug}/configuracoes/premiacao`
		) {
			return pathname.startsWith(`/dashboard/ev/${slug}/configuracoes/`)
		}

		return pathname.startsWith(href)
	}

	return (
		<div className="flex relative flex-1 overflow-x-auto scrollbar-none">
			<TabNavigator.Root active={pathname} className="h-9 min-w-max">
				<TabNavigator.Control className="gap-4">
					{navItems.map((item) => (
						<TabNavigator.Item
							key={item.href}
							href={item.href}
							as={Link}
							className={cn('font-semibold text-zinc-400 text-sm w-fit', {
								'text-zinc-50': isItemActive(item.href),
							})}
						>
							{item.label}
						</TabNavigator.Item>
					))}
				</TabNavigator.Control>
				<TabNavigator.Bar className="bg-cyan-500 h-0.75" />
			</TabNavigator.Root>
		</div>
	)
}
