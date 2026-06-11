'use client'
import { GearIcon, PackageIcon, PencilSimpleIcon } from '@phosphor-icons/react'
import { Sheet } from '@stz-code/ui'
import { TabNavigator } from '@stz-code/ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/button'
import { Tag } from '@/components/tag'
import { cn } from '@/utils/utils'
import { UpdateKitDeliveryInfoSheet } from './update-kit-delivery-info-sheet'

type KitNavigatorProps = {
	slug: string
}

export function KitNavigator({ slug }: KitNavigatorProps) {
	const pathname = usePathname()

	const isConfigPage = pathname === `/dashboard/ev/${slug}/kits`

	return (
		<div className="flex h-fit xl:flex-row flex-col gap-6 relative xl:border-b border-zinc-700 justify-between">
			<TabNavigator.Root active={pathname} className="self-end">
				<TabNavigator.Control className="gap-4">
					<TabNavigator.Item
						href={`/dashboard/ev/${slug}/kits`}
						as={Link}
						className={cn(
							'font-medium text-zinc-400 xl:text-lg text-sm px-4 flex items-center gap-3 pb-4',
							{
								'text-zinc-50': isConfigPage,
							},
						)}
					>
						<GearIcon className="xl:size-6 size-8" />
						Configurações de Entrega
					</TabNavigator.Item>
					<TabNavigator.Item
						href={`/dashboard/ev/${slug}/entrega-kit`}
						as={Link}
						className={cn(
							'font-medium text-zinc-400 flex-1 xl:text-lg text-sm px-4 flex items-center gap-3 pb-4',
							{
								'text-zinc-50': !isConfigPage,
							},
						)}
					>
						<PackageIcon className="xl:size-6 size-8" />
						Entrega de kits
						<Tag className="bg-cyan-600 text-zinc-100 text-base">440</Tag>
					</TabNavigator.Item>
				</TabNavigator.Control>
				<TabNavigator.Bar className="bg-cyan-500 h-0.75" />
			</TabNavigator.Root>

			{isConfigPage && (
				<UpdateKitDeliveryInfoSheet>
					<Sheet.Trigger asChild>
						<Button
							type="submit"
							className="bg-cyan-600 h-fit mb-2 flex items-center gap-2 px-4 py-2 rounded font-semibold xl:w-fit w-full capitalize"
						>
							<PencilSimpleIcon size={20} weight="bold" />
							Editar informações
						</Button>
					</Sheet.Trigger>
				</UpdateKitDeliveryInfoSheet>
			)}
		</div>
	)
}
