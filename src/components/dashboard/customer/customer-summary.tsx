'use client'
import { PersonSimpleRunIcon } from '@phosphor-icons/react'
import { Kpi } from '../kpi'

export function CustomerSummary() {
	return (
		<section className="flex flex-col gap-4 2xl:border-l 2xl:border-r border-zinc-700 2xl:px-16 px-6 py-8">
			<h2 className="text-xl text-zinc-100 font-semibold">Resumo do atleta</h2>

			<div className="flex gap-4 flex-wrap">
				<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
					<Kpi.Label className="text-sm normal-case flex gap-2 text-zinc-300">
						Total de eventos
					</Kpi.Label>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
					<Kpi.Label className="text-sm normal-case flex gap-2 text-zinc-300">
						Pódios Conquistados
					</Kpi.Label>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
					<Kpi.Label className="text-sm normal-case flex gap-2 text-zinc-300">
						Total de eventos
					</Kpi.Label>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
					<Kpi.Label className="text-sm normal-case flex gap-2 text-zinc-300">
						Total de eventos
					</Kpi.Label>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
			</div>
		</section>
	)
}
