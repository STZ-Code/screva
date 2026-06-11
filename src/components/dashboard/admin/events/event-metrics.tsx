'use client'
import {
	FlagCheckeredIcon,
	NotePencilIcon,
	TicketIcon,
	XCircleIcon,
} from '@phosphor-icons/react'
import { Kpi } from '../../kpi'

export function EventMetrics() {
	return (
		<div className="flex gap-4 flex-wrap">
			<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
				<div className="flex justify-between items-center">
					<Kpi.Label>Em andamento</Kpi.Label>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-1">
						<Kpi.Value className="text-5xl">30</Kpi.Value>
						<span className="text-sm text-zinc-400">Recebendo inscrições</span>
					</div>

					<TicketIcon size={64} className="text-cyan-600" />
				</div>
			</Kpi.Root>
			<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
				<div className="flex justify-between items-center">
					<Kpi.Label>Eventos finalizados</Kpi.Label>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-1">
						<Kpi.Value className="text-5xl">30</Kpi.Value>
						<span className="text-sm text-zinc-400">Já realizados</span>
					</div>

					<FlagCheckeredIcon size={64} className="text-cyan-600" />
				</div>
			</Kpi.Root>
			<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
				<div className="flex justify-between items-center">
					<Kpi.Label>Em preparação</Kpi.Label>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-1">
						<Kpi.Value className="text-5xl">30</Kpi.Value>
						<span className="text-sm text-zinc-400">Em configuração</span>
					</div>

					<NotePencilIcon size={64} className="text-cyan-600" />
				</div>
			</Kpi.Root>
			<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
				<div className="flex justify-between items-center">
					<Kpi.Label>Eventos cancelados</Kpi.Label>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-1">
						<Kpi.Value className="text-5xl">20</Kpi.Value>
						<span className="text-sm text-zinc-400">Cancelados</span>
					</div>

					<XCircleIcon size={64} className="text-cyan-600" />
				</div>
			</Kpi.Root>
		</div>
	)
}
