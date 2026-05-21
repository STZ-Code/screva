'use client'

import {
	ChartPieSliceIcon,
	ClockIcon,
	HandbagIcon,
} from '@phosphor-icons/react'
import { Kpi } from '../../kpi'

export function KitDeliveryMetrics() {
	return (
		<div className="grid grid-cols-3 gap-3">
			<Kpi.Root className="flex-row gap-8">
				<HandbagIcon size={64} />
				<div className="flex flex-col justify-between">
					<Kpi.Label>Kits entregues</Kpi.Label>

					<div className="flex flex-col gap-1 mt-4">
						<Kpi.Value>312</Kpi.Value>
						<span className="text-zinc-400 text-sm font-medium">
							do total de 440
						</span>
					</div>
				</div>
			</Kpi.Root>

			<Kpi.Root className="flex-row gap-8">
				<ClockIcon size={64} />
				<div className="flex flex-col justify-between">
					<Kpi.Label>Pendentes</Kpi.Label>

					<div className="flex flex-col gap-1 mt-4">
						<Kpi.Value>128</Kpi.Value>
						<span className="text-zinc-400 text-sm font-medium">
							ainda não retirados
						</span>
					</div>
				</div>
			</Kpi.Root>

			<Kpi.Root className="flex-row gap-8">
				<ChartPieSliceIcon size={64} />
				<div className="flex flex-col justify-between">
					<Kpi.Label>Porcentagem de retirada</Kpi.Label>

					<div className="flex flex-col gap-1 mt-4">
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
