'use client'
import { GearIcon, PackageIcon, PencilSimpleIcon } from '@phosphor-icons/react'
import { TabNavigator } from '@stz-code/ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tag } from '@/components/tag'
import { cn } from '@/utils/utils'

type KitNavigatorProps = {
	slug: string
}

export function KitNavigator({ slug }: KitNavigatorProps) {
	const pathname = usePathname()

	return (
		<div className="flex lg:flex-row flex-col lg:gap-0 gap-6 relative flex-1 lg:border-b border-zinc-600 justify-between">
			<TabNavigator.Root active={pathname} className="self-end">
				<TabNavigator.Control className="gap-4">
					<TabNavigator.Item
						href={`/dashboard/ev/${slug}/kits`}
						as={Link}
						className={cn(
							'font-medium text-zinc-400 lg:text-xl text-sm px-4 flex items-center gap-3 pb-4',
							{
								'text-zinc-50': pathname === `/dashboard/ev/${slug}/kits`,
							},
						)}
					>
						<GearIcon className="lg:size-6 size-8" />
						Configurações de Entrega
					</TabNavigator.Item>
					<TabNavigator.Item
						href={'/entrega'}
						as={Link}
						className={cn(
							'font-medium text-zinc-400 flex-1 lg:text-xl text-sm px-4 flex items-center gap-3 pb-4',
							{
								'text-zinc-50':
									pathname === `/dashboard/ev/${slug}/configuracoes/perfil`,
							},
						)}
					>
						<PackageIcon className="lg:size-6 size-8" />
						Entrega de kits
						<Tag className="bg-cyan-600 text-zinc-100 text-base">440</Tag>
					</TabNavigator.Item>
				</TabNavigator.Control>
				<TabNavigator.Bar className="bg-cyan-500 h-0.75" />
			</TabNavigator.Root>

			<button
				type="button"
				className="bg-cyan-600 mb-2 flex items-center gap-2 px-4 py-2 rounded font-semibold"
			>
				<PencilSimpleIcon size={16} weight="bold" />
				Editar informações
			</button>
		</div>
	)
}
