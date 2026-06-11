'use client'
import {
	CheckCircleIcon,
	FlameIcon,
	type IconProps,
	ProhibitIcon, // Nome correto do ícone para "vazio/proibido" no Phosphor
} from '@phosphor-icons/react'
import type { ElementType } from 'react'
import { cn } from '@/utils/utils'

export type CategoryAvailability = 'available' | 'low_stock' | 'sold_out'

interface BadgeConfig {
	label: string
	className: string
	icon: ElementType<IconProps>
}

const AVAILABILITY_CONFIG: Record<CategoryAvailability, BadgeConfig> = {
	available: {
		label: 'Disponível',
		className: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
		icon: CheckCircleIcon,
	},
	low_stock: {
		label: 'Últimas vagas',
		className:
			'bg-orange-500/10 text-orange-500 border-orange-500/20 animate-pulse',
		icon: FlameIcon,
	},
	sold_out: {
		label: 'Esgotado',
		className: 'bg-zinc-800 text-zinc-500 border-zinc-700',
		icon: ProhibitIcon,
	},
} as const

export function CategoryBadge({ type }: { type: CategoryAvailability }) {
	const config = AVAILABILITY_CONFIG[type]
	const Icon = config.icon

	return (
		<span
			className={cn(
				'xl:ml-3 px-2 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-md flex items-center gap-1.5',
				config.className,
			)}
		>
			<Icon size={14} weight="bold" />
			{config.label}
		</span>
	)
}
