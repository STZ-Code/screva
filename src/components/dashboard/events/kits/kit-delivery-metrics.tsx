'use client'

import {
	ChartPieSliceIcon,
	ClockIcon,
	HandbagIcon,
} from '@phosphor-icons/react'
import { Kpi } from '../../kpi'

export function KitDeliveryMetrics() {
	return (
		<div className="flex gap-4 flex-wrap">
			<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none flex-row">
				<HandbagIcon className="xl:size-16 size-12" />
				<div className="flex flex-col justify-between">
					<Kpi.Label>Kits entregues</Kpi.Label>

					<div className="flex flex-col gap-1 xl:mt-4 mt-3">
						<Kpi.Value>312</Kpi.Value>
						<span className="text-zinc-400 text-sm font-medium">
							do total de 440
						</span>
					</div>
				</div>
			</Kpi.Root>

			<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none flex-row">
				<ClockIcon className="xl:size-16 size-12" />
				<div className="flex flex-col xl:justify-between">
					<Kpi.Label>Pendentes</Kpi.Label>

					<div className="flex flex-col gap-1 xl:mt-4 mt-3">
						<Kpi.Value>128</Kpi.Value>
						<span className="text-zinc-400 text-sm font-medium">
							ainda não retirados
						</span>
					</div>
				</div>
			</Kpi.Root>

			<Kpi.Root className="w-full xl:flex-1 rounded bg-neutral-900 shadow-none flex-row">
				<ChartPieSliceIcon className="xl:size-16 size-12" />
				<div className="flex flex-col justify-between">
					<Kpi.Label>Porcentagem de retirada</Kpi.Label>

					<div className="flex flex-col gap-1 xl:mt-4 mt-3">
						<Kpi.Value>71%</Kpi.Value>
						<span className="text-zinc-400 text-sm font-medium">
							dos inscritos
						</span>
					</div>
				</div>
			</Kpi.Root>
		</div>
	)
}
